// export default function mapMarkers() {
//     let markers = [];
//     return {
//         removeAllPins() {
//             markers.forEach(el => el.setMap(null));
//             markers = [];
//         },
//         placePin(map, position, icon, url) {
//             const marker = new window.google.maps.Marker({map, position, icon});
//             markers.push(marker);
//             if (url) marker.addListener('click', () => {
//                 const lnk = document.createElement('a');
//                 lnk.href = url;
//                 lnk.target = '_blank';
//                 lnk.click();
//             });
//         },
//         getMarkers: () => markers
//     };
// }

// import { Marker } from '@maptiler/sdk';
// import * as maptilersdk from '@maptiler/sdk';

// export default function mapMarkers() {
//     let markers = [];
//     return {
//         removeAllPins() {
//             markers.forEach(el => el.setMap(null));
//             markers = [];
//         },
//         placePin(map, position, icon, url) {
//             const lngLat = new maptilersdk.LngLat(position[0], position[1]); // Convert position to LngLat instance
//             const marker = new Marker() // Use Marker from MapTiler SDK
//               .setLngLat(lngLat) // Set marker's position
//               .addTo(map); // Add marker to the map
//             markers.push(marker);
//             if (url) marker.addListener('click', () => {
//                 const lnk = document.createElement('a');
//                 lnk.href = url;
//                 lnk.target = '_blank';
//                 lnk.click();
//             });
//         },
//         getMarkers: () => markers
//     };
// }

import { Marker, LngLat } from '@maptiler/sdk';

export default function mapMarkers() {
    let markers = [];
    return {
        removeAllPins() {
            markers.forEach(el => el.remove());
            markers = [];
        },
        placePin(map, position, icon, url) {
            const lngLat = new LngLat(position[0], position[1]); // Convert position to LngLat instance
            const marker = new Marker() // Use Marker from MapTiler SDK
              .setLngLat(lngLat) // Set marker's position
              .addTo(map); // Add marker to the map
            markers.push(marker);
            if (url) marker.on('click', () => {
                const lnk = document.createElement('a');
                lnk.href = url;
                lnk.target = '_blank';
                lnk.click();
            });
        },
        getMarkers: () => markers
    };
}