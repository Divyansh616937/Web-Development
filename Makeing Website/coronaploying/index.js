// function updateMap()
// {
//     fetch("/data.json")
//     .then(Response => Response.json())
//     .then(rsp =>{ 
//         console.log(rsp.data)
//         rsp.data.forEach(element => {
//             latitude = element.latitude
//             longitude = element.longitude

//             //Mark on map
//             new mapboxgl.Marker({
//                 draggable:true
//             })
//                 .setLngLat([0,0])
//                 .addTo(map)
//         });
//     })

// }
const api = require('novelcovid');
api.settings({
    baseUrl: 'https://disease.sh' | 'https://api.caw.sh' | 'https://corona.lmao.ninja'
})

api.all().then(console.log)