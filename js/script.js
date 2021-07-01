// import {districts,provinces} from './resources.js';


// provinces.forEach((item) => {
//     $("#provinces").append(`<option value="${item.id}">${item.title}</option>`)
// });

// $('#provinces').on('change',function(){
//     var provinceID = $(this).val();
//     $('#districts').html("");
//     $('#districts').siblings('.nice-select').remove()
//     var items = districts.filter((item)=>{
//         return item.province==provinceID;
//     });
//     $("#districts").append(`<option value="-1" selected disabled>Select</option>`)
//     items.forEach((item) => {
//         $("#districts").append(`<option value="${item.id}">${item.title}</option>`)
//     });
//     $('select').niceSelect();
// });

// $('.update').on('click',(e) => {
//     e.preventDefault();
//     var selectedProvince = $('#provinces').val();
//     var selectedDistrict = $('#districts').val();
//     console.log(selectedProvince, selectedDistrict)


// });

$('select').niceSelect();

mapboxgl.accessToken = "pk.eyJ1IjoieW9nZXNoa2Fya2kiLCJhIjoiY2txZXphNHNlMGNybDJ1cXVmeXFiZzB1eSJ9.A7dJUR4ppKJDKWZypF_0lA";


var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/yogeshkarki/ckqhmewto4m2317p8n8qarotc",
    center: [83.0074, 28.4764],
    zoom: 6.6,
  
});

map.on("load", function () {
    map.addSource("cylinders", {
        type: "geojson",

        data: "./cylinder.geojson",
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 70,
    });

    
    map.addSource('urban-areas', {
        'type': 'geojson',
        'data': '../json/region.geojson'
    });


    map.addLayer(
        {
        'id': 'urban-areas-fill',
        'type': 'line',
        'source': 'urban-areas',
        'layout': {},
        'paint': {
          
            "line-color": "#333"
            }
        })


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
        type: "circle",
        source: "cylinders",
        filter: ["!", ["has", "point_count"]],
        paint: {
            "circle-color": "#11b4da",
            "circle-radius": 10,
            "circle-stroke-width": 1,
            "circle-stroke-color": "#fff",
        },
    });

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
        var name = e.features[0].properties.name;
        var subType = e.features[0].properties.subtype;
        var address = e.features[0].properties.address;
        var province = e.features[0].properties.province;
        var district = e.features[0].properties.districts;
        
        
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
                                <div class="title">Instituation Type</div>
                                <div class="text">${subType}</div>
                            </div>
                        </div>
                        <div class="info-desc-wrapper">
                            <div class="data">
                                <div class="title">Province</div>
                                <div class="text">${province}</div>
                        
                            </div>
                        </div>
                        <div class="info-desc-wrapper">
                            <div class="data">
                                <div class="title">Contact Person</div>
                                <div class="text">Contact Person</div>
                        
                            </div>
                        </div>
                        <div class="info-desc-wrapper">
                            <div class="data">
                                <div class="title">District</div>
                                <div class="text">${district}</div>
                            </div>
                        </div>
                        
                        <div class="info-desc-wrapper">
                            <div class="data">   
                                <div class="title">Contact Number</div>
                                <div class="text">9852025874</div>
                            </div>
                        </div>
                        <div class="info-desc-wrapper">
                            <div class="data">
                                <div class="title">Municipality</div>
                                <div class="text">Kathmandu</div>
                        
                            </div>
                        </div>
                    </div>
                    <div class="items">
                        <h5>Responded with</h5>
                        <div class="item-wrapper">
                            <div class="info-desc-wrapper">
                                <div class="data">
                                    <div class="title">Oxygen Cylinders 10 L</div>
                                    <div class="text">15</div>
                            
                                </div>
                            </div>
                            <div class="info-desc-wrapper">
                                <div class="data">
                                    <div class="title">Oxygen Regulator 10 L</div>
                                    <div class="text">3</div>
                            
                                </div>
                            </div>
                            <div class="info-desc-wrapper">
                                <div class="data">
                                    <div class="title">Oxygen Concentrator</div>
                                    <div class="text">1</div>
                            
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div>
                `

            )
            .addTo(map);

     
     
    });


});

