import React, { useState, useEffect, useRef  } from "react";
import styled, { keyframes }from "styled-components";

export default function Location({address}) {
    const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.5665, lng: 126.9780 }, // 기본 위치
        zoom: 15,
      });

      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK') {
          map.setCenter(results[0].geometry.location);
          new window.google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
          });
        }
      });
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCFfq7FK4iCHcXMBYNsO_TcBxyG5dkdZJA&libraries=places`;
      script.async = true;
      script.onload = loadMap;
      document.body.appendChild(script);
    } else {
      loadMap();
    }
  }, [address]);

  return (
    <div ref={mapRef} style={{ width: '100%', height: '400px' }} />   
  )
}