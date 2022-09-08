import "leaflet/dist/leaflet.css";
import React, { useState, useEffect } from "react";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import { zonaSierras } from "../Zonas/Sierras y La Pampa.jsx";
import { Navbar } from "./Navbar.jsx";

const center = [-34.590505060547315, -58.40001737221166];

export function App() {
  const [stateZona, setStateZona] = useState(zonaSierras);

  return (
    <>
      <Navbar setZona={setStateZona} />
      <MapContainer
        center={center}
        zoom={10}
        className="w-full h-full z-0 top-0"
      >
        <TileLayer url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=UWgzzhne7yK6JhCccCLU" />

        {stateZona.features.map((provincia) => {
          const coordinates = provincia.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);

          return (
            <Polygon
              pathOptions={{
                fillColor: "#FD8D3C",
                fillOpacity: 0.5,
                weight: 2,
                opacity: 1,
                dashArray: 3,
                color: "white",
              }}
              positions={coordinates}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.8,
                    fillColor: "#FACDCC",
                    weight: 4,
                    dashArray: 2,
                    color: "#666",
                  });

                  layer.bindPopup(`<h1>${provincia.properties.fna}</h1><br>Población: ${provincia.properties.poblacion}`);

                  layer.on("mouseover", (e) => {
                    layer.openPopup();
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillColor: "#FD8D3C",
                    fillOpacity: 0.5,
                    weight: 2,
                    opacity: 1,
                    dashArray: 3,
                    color: "white",
                  });

                  layer.on("mouseout", (e) => {
                    layer.closePopup();
                  });
                },
              }}
            />
          );
        })}
      </MapContainer>
    </>
  );
}
