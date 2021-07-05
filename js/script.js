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
    var data = {
        "type": "FeatureCollection",
        
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "id": 1,
                    "institution_id": "",
                    "individual_id": "1",
                    "created_at": "2021-07-03T14:10:14.000000Z",
                    "updated_at": "2021-07-03T14:10:14.000000Z",
                    "user_request_id": 14,
                    "project": { "id": 1, "title": "Covid Saftey", "created_at": "2021-07-01T09:40:52.000000Z", "updated_at": "2021-07-01T09:40:52.000000Z" },
                    "user_request": { "id": 14, "project_id": 1, "project": { "id": 1, "title": "Oxygen", "created_at": "2021-07-01T09:40:52.000000Z", "updated_at": "2021-07-01T09:40:52.000000Z" } },
                    "institution": null,
    
           
                    "individual": {
                        "id": 16,
                        "name": "Som Bahadur Tamang ",
                        "gender": "male",
                        "age": 24,
                        "province_id": 2,
                        "district_id": 34,
                        "local_level_id": 3,
                        "coordinates": "86.7512222,27.2072924",
                        "created_at": "2021-07-03T07:20:46.000000Z",
                        "updated_at": "2021-07-03T07:21:36.000000Z",
                        "contact_number": "12",
    
                        "province": {
                            "id": 3,
                            "created_at": "2021-07-02T04:27:55.000000Z",
                            "updated_at": "2021-07-02T04:27:55.000000Z",
                            "title": "Bagmati",
                            "title_en": "Bagmati ",
                            "title_ne": "\u092a\u094d\u0930\u0926\u0947\u0936 \u0928\u0902 .\u0968",
                            "code": "p1",
                            "bbox": "[84.4838899645418,26.4223835197793,87.0145939355117,27.4631790982775]",
                            "centroid": "{\"type\":\"Point\",\"coordinates\":[85.68968070300077,26.930519228980092]}",
                            "order": 3
                        },
                        "district": {
                            "id": 27,
                            "created_at": "2021-07-02T04:33:28.000000Z",
                            "updated_at": "2021-07-02T04:33:28.000000Z",
                            "title": "Kathmandu",
                            "title_en": "Kathmandu",
                            "title_ne": "\u092e\u0928\u093e\u0919\u094d\u0917",
                            "code": "Kathmandu",
                            "centroid": "{\"type\":\"Point\",\"coordinates\":[84.22451544738435,28.672919154212916]}",
                            "bbox": "[83.7892648291775,28.4450199535588,84.5705552315087,28.9004527054085]",
                            "province_id": 4,
                            "order": 27
                        }
                    },
                    "inventories": [
                        {
                            "id": 3,
                            "title": "Oxygen Cylinder",
                            "quantity": null,
                            "project_id": 1,
                            "created_at": "2021-07-02T18:13:11.000000Z",
                            "updated_at": "2021-07-02T18:13:11.000000Z",
                            "pivot": { "response_id": 1, "inventory_id": 3, "quantity": 1 }
                        }
                    ]
    
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [85.3829884,27.7640277, 0.0]
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": 2,
                    "institution_id": "",
                    "individual_id": "1",
                    "created_at": "2021-07-03T14:10:14.000000Z",
                    "updated_at": "2021-07-03T14:10:14.000000Z",
                    "user_request_id": 14,
                    "project": { "id": 1, "title": "Covid Saftey", "created_at": "2021-07-01T09:40:52.000000Z", "updated_at": "2021-07-01T09:40:52.000000Z" },
                    "user_request": { "id": 14, "project_id": 1, "project": { "id": 1, "title": "Oxygen", "created_at": "2021-07-01T09:40:52.000000Z", "updated_at": "2021-07-01T09:40:52.000000Z" } },
                    "institution": null,
    
           
                    "individual": {
                        "id": 16,
                        "name": "Tom Tamang ",
                        "gender": "male",
                        "age": 24,
                        "province_id": 2,
                        "district_id": 34,
                        "local_level_id": 3,
                        "coordinates": "86.7512222,27.2072924",
                        "created_at": "2021-07-03T07:20:46.000000Z",
                        "updated_at": "2021-07-03T07:21:36.000000Z",
                        "contact_number": "12",
    
                        "province": {
                            "id": 3,
                            "created_at": "2021-07-02T04:27:55.000000Z",
                            "updated_at": "2021-07-02T04:27:55.000000Z",
                            "title": "Bagmati",
                            "title_en": "Bagmati ",
                            "title_ne": "\u092a\u094d\u0930\u0926\u0947\u0936 \u0928\u0902 .\u0968",
                            "code": "p1",
                            "bbox": "[84.4838899645418,26.4223835197793,87.0145939355117,27.4631790982775]",
                            "centroid": "{\"type\":\"Point\",\"coordinates\":[85.68968070300077,26.930519228980092]}",
                            "order": 3
                        },
                        "district": {
                            "id": 27,
                            "created_at": "2021-07-02T04:33:28.000000Z",
                            "updated_at": "2021-07-02T04:33:28.000000Z",
                            "title": "Kathmandu",
                            "title_en": "Kathmandu",
                            "title_ne": "\u092e\u0928\u093e\u0919\u094d\u0917",
                            "code": "Kathmandu",
                            "centroid": "{\"type\":\"Point\",\"coordinates\":[84.22451544738435,28.672919154212916]}",
                            "bbox": "[83.7892648291775,28.4450199535588,84.5705552315087,28.9004527054085]",
                            "province_id": 4,
                            "order": 27
                        }
                    },
                    "inventories": [
                        {
                            "id": 3,
                            "title": "Oxygen Cylinder",
                            "quantity": null,
                            "project_id": 1,
                            "created_at": "2021-07-02T18:13:11.000000Z",
                            "updated_at": "2021-07-02T18:13:11.000000Z",
                            "pivot": { "response_id": 1, "inventory_id": 3, "quantity": 1 }
                        }
                    ]
    
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [86.3829884,27.7640277, 0.0]
                }
            }
    
    
        ]
    };

    map.getSource('cylinders').setData(data);

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






    // Map
  
    map.on('load', function () {
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


