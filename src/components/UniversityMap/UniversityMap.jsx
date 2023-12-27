import React, { useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';

function UniversityMap() {
  useEffect(() => {
    maptilersdk.config.apiKey = 'Qh8CN7uAczHuCLkm1jkR';
    const map = new maptilersdk.Map({
      container: 'map', // container's id or the HTML element to render the map
      style: maptilersdk.MapStyle.STREETS,
      center: [12.02541221026454, 79.85387412226262], // Your university's coordinates [lng, lat]
      zoom: 15, // Adjust the initial zoom level as needed
    });
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
}

export default UniversityMap;
