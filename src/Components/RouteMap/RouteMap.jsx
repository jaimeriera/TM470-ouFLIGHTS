import React, { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import mapboxgl from "mapbox-gl";
import * as turf from "@turf/turf";

mapboxgl.accessToken = "pk.eyJ1IjoiamFpbWVyaWVyYSIsImEiOiJjbG0xdTczOXUzaGJmM2R0aDNsaWM5c3drIn0.5nTWss9PRWJ4Usp5jC-EsA";

const RouteMap = () => {
    const [map, setMap] = useState(null);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
  
    useEffect(() => {
      const initializeMap = () => {
        const initialCoordinates = [-96, 37.8]; // Initial coordinates
        const initialZoom = 2; // Initial zoom level
        const initialPitch = 20; // Initial pitch level

  
        const map = new mapboxgl.Map({
          container: 'map',
          style: "mapbox://styles/jaimeriera/cllc1qcgo00tz01pmbym3ftx0",
          center: initialCoordinates,
          zoom: initialZoom,
          pitch: initialPitch,
        });
  
        map.on('load', () => {
          const origin = [-122.414, 37.776];
          const destination = [-77.032, 38.913];
  
          const route = {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'LineString',
                  coordinates: [origin, destination],
                },
              },
            ],
          };
  
          const point = {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: origin,
                },
              },
            ],
          };
  
          const lineDistance = turf.length(route.features[0]);
          const arc = [];
          const steps = 500;
  
          for (let i = 0; i < lineDistance; i += lineDistance / steps) {
            const segment = turf.along(route.features[0], i);
            arc.push(segment.geometry.coordinates);
          }
  
          route.features[0].geometry.coordinates = arc;
  
          map.addSource('route', {
            type: 'geojson',
            data: route,
          });
  
          map.addSource('point', {
            type: 'geojson',
            data: point,
          });
  
          map.addLayer({
            id: 'route',
            source: 'route',
            type: 'line',
            paint: {
              'line-width': 4,
              'line-color': '#007cbf',
            },
          });
  
          map.addLayer({
            id: 'point',
            source: 'point',
            type: 'symbol',
            layout: {
              'icon-image': 'airport',
              'icon-size': 2,
              'icon-rotate': ['get', 'bearing'],
              'icon-rotation-alignment': 'map',
              'icon-allow-overlap': true,
              'icon-ignore-placement': true,
            },
          });
  
          let running = false;
          let counter = 0;
  
          const animate = () => {
            running = true;
            document.getElementById('replay').disabled = true;
  
            const start =
              route.features[0].geometry.coordinates[
                counter >= steps ? counter - 1 : counter
              ];
            const end =
              route.features[0].geometry.coordinates[
                counter >= steps ? counter : counter + 1
              ];
  
            if (!start || !end) {
              running = false;
              document.getElementById('replay').disabled = false;
              return;
            }
  
            point.features[0].geometry.coordinates =
              route.features[0].geometry.coordinates[counter];
  
            point.features[0].properties.bearing = turf.bearing(
              turf.point(start),
              turf.point(end)
            );
  
            map.getSource('point').setData(point);
  
            if (counter < steps) {
              requestAnimationFrame(animate);
            }
  
            counter = counter + 1;
          };
  
          document.getElementById('replay').addEventListener('click', () => {
            if (running) {
              return;
            } else {
              point.features[0].geometry.coordinates = origin;
              map.getSource('point').setData(point);
              counter = 0;
              animate(counter);
            }
          });
  
          animate(counter);
        });
  
        setMap(map);
      };
  
      initializeMap();
    }, []);
  
    return (
        <Box >
            <div id="map" className="map"></div>
            <div className="overlay">
                <button id="replay">Replay</button>
            </div> 
        </Box>
    );
  };
  
  export default RouteMap;