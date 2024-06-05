// import React, { useEffect } from 'react';
// import * as maptilersdk from '@maptiler/sdk';

// function UniversityMap({ onMapClick }) {
//   useEffect(() => {
//     maptilersdk.config.apiKey = 'Qh8CN7uAczHuCLkm1jkR';
//     const map = new maptilersdk.Map({
//       container: 'map', // container's id or the HTML element to render the map
//       style: maptilersdk.MapStyle.STREETS,
//       center: [79.85387412226262, 12.02541221026454], // Your university's coordinates [lng, lat]
//       zoom: 12.5, // Adjust the initial zoom level as needed
//     });
//   }, []);

//   return (
//     <div id="map" style={{ width: '100%', height: '400px' }}></div>
//   );

// }

// export default UniversityMap;


// import React, { useEffect } from 'react';
// import * as maptilersdk from '@maptiler/sdk';

// function UniversityMap({ onMapClick }) {
//   useEffect(() => {
//     maptilersdk.config.apiKey = 'Qh8CN7uAczHuCLkm1jkR';
//     const map = new maptilersdk.Map({
//       container: 'map',
//       style: maptilersdk.MapStyle.STREETS,
//       center: [79.85387412226262, 12.02541221026454],
//       zoom: 12.5,
//     });

//     // Add event listener for map click
//     map.on('click', (event) => {
//       const clickedCoordinates = event.lngLat.toArray(); // Get clicked coordinates as [lng, lat]
//       onMapClick(clickedCoordinates); // Pass clicked coordinates to the parent component
//     });

//     return () => {
//       // Clean up code if needed
//       map.remove(); // Remove map instance when component unmounts
//     };
//   }, [onMapClick]);

//   return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
// }

// export default UniversityMap;

// import React, { useEffect, useRef } from 'react';
// import * as maptilersdk from '@maptiler/sdk';

// function UniversityMap({ onMapClick, guessPos, guessPinImage }) {
//   const mapContainerRef = useRef(null);
//   const mapInstanceRef = useRef(null);

//   useEffect(() => {
//     maptilersdk.config.apiKey = 'Qh8CN7uAczHuCLkm1jkR';
//     const map = new maptilersdk.Map({
//       container: mapContainerRef.current,
//       style: maptilersdk.MapStyle.STREETS,
//       center: [79.85387412226262, 12.02541221026454],
//       zoom: 12.5,
//     });

//     mapInstanceRef.current = map;

//     if (onMapClick && typeof onMapClick === 'function') {
//       map.on('click', (e) => {
//         const clickedCoordinates = e.lngLat.toArray();
//         onMapClick(clickedCoordinates);
//       });
//     }

//     return () => {
//       if (mapInstanceRef.current) {
//         mapInstanceRef.current.remove();
//       }
//     };
//   }, [onMapClick]);

//   useEffect(() => {
//     if (mapInstanceRef.current && guessPos) {
//       // Place the guess-pin if guessPos is available
//       mapInstanceRef.current.placePin(guessPos, guessPinImage);
//     }
//   }, [guessPos, guessPinImage]);

//   return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />;
// }

// export default UniversityMap;


// import React, { useEffect, useRef } from 'react';
// import { Marker } from '@maptiler/sdk';
// import * as maptilersdk from '@maptiler/sdk';

// function UniversityMap({ onMapClick, guessPos, guessPinImage }) {
//   const mapContainerRef = useRef(null);
//   const mapInstanceRef = useRef(null);
//   const markerRef = useRef(null);

//   useEffect(() => {
//     maptilersdk.config.apiKey = 'Qh8CN7uAczHuCLkm1jkR';
//     const map = new maptilersdk.Map({
//       container: mapContainerRef.current,
//       style: maptilersdk.MapStyle.STREETS,
//       center: [79.85387412226262, 12.02541221026454],
//       zoom: 12.5,
//     });

//     mapInstanceRef.current = map;

//     if (onMapClick && typeof onMapClick === 'function') {
//       map.on('click', (e) => {
//         const clickedCoordinates = e.lngLat.toArray();
//         onMapClick(clickedCoordinates);
//       });
//     }

//     return () => {
//       if (mapInstanceRef.current) {
//         mapInstanceRef.current.remove();
//       }
//     };
//   }, [onMapClick]);

//   useEffect(() => {
//     if (mapInstanceRef.current && guessPos) {
//       if (markerRef.current) {
//         markerRef.current.setLngLat(guessPos);
//       } else {
//         markerRef.current = new Marker(mapInstanceRef.current).setLngLat(guessPos).setIcon(guessPinImage);
//       }
//     }
//   }, [guessPos, guessPinImage]);

//   return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />;
// }

// export default UniversityMap;

import React, { useEffect, useRef } from 'react';
import { Marker, Map } from '@maptiler/sdk';
import * as maptilersdk from '@maptiler/sdk';

function UniversityMap({ onMapClick, guessPos, guessPinImage }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    maptilersdk.config.apiKey = 'Qh8CN7uAczHuCLkm1jkR';
    const map = new Map({
      container: mapContainerRef.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [79.85387412226262, 12.02541221026454],
      zoom: 12.5,
    });

    mapInstanceRef.current = map;

    if (onMapClick && typeof onMapClick === 'function') {
      map.on('click', (e) => {
        const clickedCoordinates = e.lngLat.toArray();
        onMapClick(clickedCoordinates);
      });
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, [onMapClick]);

  useEffect(() => {
    if (mapInstanceRef.current && guessPos) {
      if (markerRef.current) {
        markerRef.current.setLngLat(guessPos);
      } else {
        // Create a new marker and add it to the map
        markerRef.current = new Marker()
          .setLngLat(guessPos)
          .addTo(mapInstanceRef.current);
      }
    }
  }, [guessPos]);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />;
}

export default UniversityMap;
