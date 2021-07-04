import { districts, provinces } from "../resources.js";

// Distirct with respect to province
provinces.forEach((item) => {
    $("#provinces").append(`<option value="${item.id}">${item.title}</option>`);
});

$("#provinces").on("change", function () {
    var provinceID = $(this).val();
    $("#districts").html("");
    $("#districts").siblings(".nice-select").remove();
    var items = districts.filter((item) => {
        return item.province == provinceID;
    });
    $("#districts").append(`<option value="-1" selected disabled>Select</option>`);
    items.forEach((item) => {
        $("#districts").append(`<option value="${item.id}">${item.title}</option>`);
    });
    $("select").niceSelect();
});

$(".update").on("click", (e) => {
    e.preventDefault();
    var selectedProjects = $("#projects").val();
    var selectedProvince = $("#provinces").val();
    var selectedDistrict = $("#districts").val();

    console.log(selectedProjects,selectedProvince,selectedDistrict,selectedInstitutionsType);




    // Map Fly to the Province
    if (selectedProvince == 3) {
        map.flyTo({
            center: [85.2588, 27.7346],
            zoom: 8.5,
            essential: true,
        });
    } else if (selectedProvince == 1) {
        map.flyTo({
            center: [86.3193, 27.213],
            zoom: 8,
            essential: true,
        });
    } else if (selectedProvince == 2) {
        map.flyTo({
            center: [85.6343, 26.9319],
            zoom: 9,
            essential: true,
        });
    } else if (selectedProvince == 4) {
        map.flyTo({
            center: [83.801, 28.3479],
            zoom: 8,
            essential: true,
        });
    } else if (selectedProvince == 5) {
        map.flyTo({
            center: [82.5018, 28.0623],
            zoom: 8.5,
            essential: true,
        });
    } else if (selectedProvince == 6) {
        map.flyTo({
            center: [82.0239, 29.26],
            zoom: 7.5,
            essential: true,
        });
    } else {
        map.flyTo({
            center: [80.8539, 29.3175],
            zoom: 8,
            essential: true,
        });
    }
});

$("select").niceSelect();

// Map
mapboxgl.accessToken = "pk.eyJ1IjoieW9nZXNoa2Fya2kiLCJhIjoiY2txZXphNHNlMGNybDJ1cXVmeXFiZzB1eSJ9.A7dJUR4ppKJDKWZypF_0lA";

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/yogeshkarki/ckqhmewto4m2317p8n8qarotc",
    center: [83.0074, 28.4764],
    zoom: 6,
});

map.on("load", function () {
    // loading the respond data
    map.addSource("cylinders", {
        type: "geojson",

        data: "./cylinder.json",
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 70,
    });

    // boundry for the states
    map.addSource("urban-areas", {
        type: "geojson",
        data: "../json/region.geojson",
    });

    map.addLayer({
        id: "urban-areas-fill",
        type: "line",
        source: "urban-areas",
        layout: {},
        paint: {
            "line-color": "#333",
        },
    });

    map.addLayer({
        id: "clusters",
        type: "circle",
        source: "cylinders",
        filter: ["has", "point_count"],
        paint: {
            "circle-color": ["step", ["get", "point_count"], "#51bbd6", 100, "#f1f075", 750, "#f28cb1"],
            "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
        },
    });

    map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "cylinders",
        filter: ["has", "point_count"],
        layout: {
            "text-field": "{point_count_abbreviated}",

            "text-size": 12,
        },
    });

    map.addLayer({
        id: "unclustered-point",
        type: "symbol",
        source: "cylinders",
        filter: ["!", ["has", "point_count"]],
        layout: {
            "icon-image": "pulsing-dot",
        },
    });

    map.addSource("dot-point", {
        type: "geojson",
        data: {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates: [83.0074, 28.4764], // icon position [lng, lat]
                    },
                },
            ],
        },
    });

    var size = 100;

    var pulsingDot = {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),

        // When the layer is added to the map,
        // get the rendering context for the map canvas.
        onAdd: function () {
            var canvas = document.createElement("canvas");
            canvas.width = this.width;
            canvas.height = this.height;
            this.context = canvas.getContext("2d");
        },

        // Call once before every frame where the icon will be used.
        render: function () {
            var duration = 1000;
            var t = (performance.now() % duration) / duration;

            var radius = (size / 2) * 0.3;
            var outerRadius = (size / 2) * 0.4 * t + radius;
            var context = this.context;

            // Draw the outer circle.
            context.clearRect(0, 0, this.width, this.height);
            context.beginPath();
            context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
            context.fillStyle = "rgba(195, 234, 243," + (1 - t) + ")";
            context.fill();

            // Draw the inner circle.
            context.beginPath();
            context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
            context.fillStyle = "#11b4da";
            context.strokeStyle = "white";
            context.lineWidth = 2 + 4 * (1 - t);
            context.fill();
            context.stroke();

            // Update this image's data with data from the canvas.
            this.data = context.getImageData(0, 0, this.width, this.height).data;

            // Continuously repaint the map, resulting
            // in the smooth animation of the dot.
            map.triggerRepaint();

            // Return `true` to let the map know that the image was updated.
            return true;
        },
    };

    map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });

    // inspect a cluster on click
    map.on("click", "clusters", function (e) {
        var features = map.queryRenderedFeatures(e.point, {
            layers: ["clusters"],
        });
        var clusterId = features[0].properties.cluster_id;
        map.getSource("cylinders").getClusterExpansionZoom(clusterId, function (err, zoom) {
            if (err) return;

            map.easeTo({
                center: features[0].geometry.coordinates,
                zoom: zoom,
            });
        });
    });

    map.on("click", "unclustered-point", function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();

        var type = e.features[0].properties.type;

        var institution = e.features[0].properties.institution_id;
        var individual = e.features[0].properties.individual_id;

      
        
            var getInstitution =  JSON.parse(e.features[0].properties.institution)
            var getIndividual = JSON.parse(e.features[0].properties.individual)

            var name = institution ? getInstitution.name : getIndividual.name,
                provinceId = institution ? getInstitution.province.id: getIndividual.province.id,
                provinceName = institution ? getInstitution.province.title: getIndividual.province.title,
                districtId = institution ? getInstitution.district.id: getIndividual.district.id,
                districtName = institution ? getInstitution.district.title: getIndividual.district.title,
            
                type = institution ? getInstitution.type: "Individual",
                elective1 = institution ? getInstitution.contact_person: getIndividual.gender,
                elective2 = institution ? getInstitution.contact_phone: getIndividual.age;

                var inventories = JSON.parse(e.features[0].properties.inventories);

               var items = "";

                inventories.forEach(inventory => {
                    var inventoryTitle = inventory.title;
                    var inventoryQunatity = inventory.pivot.quantity;                 
                    
                    // console.log(inventoryTitle, inventoryQunatity)

                    items = items + `
                        <div class="info-desc-wrapper">
                            <div class="data">
                                <div class="title">${inventoryTitle}</div>
                                <div class="text">${inventoryQunatity}</div>
                            
                            </div>
                        </div>
                        
                        `

                    
                }); 
        





            new mapboxgl.Popup()
            .setLngLat(coordinates)
                .setHTML(
                    `
                    <div class="info-card">
                        <div class="info-card-header">
                            <h4>${name}</h4>
                        
                            
                        </div>
                
                        <div class="info-desc">
                            <div class="info-desc-wrapper">
                                <div class="data">
                                    <div class="title">${institution ? "Instituation Type" : "Respone Type"}</div>
                                    <div class="text">${type}</div>
                            
                                </div>
                                
                            </div>
                            <div class="info-desc-wrapper">
                                <div class="data">
                                    <div class="title">Province</div>
                                    <div class="text">${provinceName}</div>
                            
                                </div>
                            </div>
                            <div class="info-desc-wrapper">
                                <div class="data">
                                    <div class="title">${institution ? "Contact Person" : "Gender"}</div>
                                    <div class="text">${elective1}</div>
                                </div>
                            </div>
                            <div class="info-desc-wrapper">
                                <div class="data">
                                    <div class="title">District</div>
                                    <div class="text">${districtName}</div>
                                </div>
                            </div>
                            
                            <div class="info-desc-wrapper">
                                <div class="data">
                                    <div class="title">${institution ? "Contact Number" : "Age"}</div>
                                    <div class="text">${elective2 ? elective2 :""}</div>
                                </div>
                            </div>
                            <div class="info-desc-wrapper">
                                <div class="data">
                                    <div class="title">Municipality</div>
                                    <div class="text">Local address</div>
                            
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <h5>Responded with</h5>
                            <div class="item-wrapper">
                                ${items}
                                
                            </div>
                        </div>
                
                    </div>
                    `
                )
            .addTo(map);


     

            
     


        

       
    });
});
