import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect } from "react";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import { zonaSierras } from "../Zonas/Sierras y La Pampa.jsx";
import { Navbar } from "./Navbar.jsx";
import L from 'leaflet';
import "leaflet-boundary-canvas";

const center = [-34.590505060547315, -58.40001737221166]


export function App() {


  const [map, setMap] = useState(null);

  useEffect(() => {
    
    if (!map) return;
      console.log("abc")

    const fetchGeoJSON = async () => {
      const response = await fetch(
        "https://cdn.rawgit.com/johan/world.geo.json/34c96bba/countries/ARG.geo.json"
      );
      const geoJSON = await response.json();
      const osm = L.TileLayer.boundaryCanvas(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          boundary: geoJSON,
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, UK shape <a href="https://github.com/johan/world.geo.json">johan/word.geo.json</a>'
        }
      );
      map.addLayer(osm);
      const ukLayer = L.geoJSON(geoJSON);
      map.fitBounds(ukLayer.getBounds());
    };

    fetchGeoJSON();

  }, [map]);


  const [stateZona, setStateZona] = useState(zonaSierras);

  return (
    <>
      <Navbar setZona={setStateZona}/>
      <MapContainer
        whenReady={setMap}
        center={center}
        zoom={13}
        className="w-full h-full z-0 top-0"
        >

        <TileLayer
          url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=UWgzzhne7yK6JhCccCLU" />

        {stateZona.features.map((provincia) => {
          const coordinates = provincia.geometry.coordinates[0].map((item) => [item[1], item[0]]);

          return (<Polygon
            pathOptions={{
              fillColor: '#FD8D3C',
              fillOpacity: 0.5,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: "white"
            }}

            positions={coordinates}
            eventHandlers={{
              mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillOpacity: 0.8,
                  fillColor: '#FACDCC',
                  weight: 4,
                  dashArray: 2,
                  color: '#666',
                })

                layer.bindPopup(`${provincia.properties.fna}`);

                layer.on('mouseover', (e) => {
                  layer.openPopup();
                }
                );


              },
              mouseout: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillColor: '#FD8D3C',
                  fillOpacity: 0.5,
                  weight: 2,
                  opacity: 1,
                  dashArray: 3,
                  color: "white"
                })

                layer.on('mouseout', (e) => {
                  layer.closePopup();
                });
              },
            }}
          />)
        })
        }
      </MapContainer>
    </>
  );
}
