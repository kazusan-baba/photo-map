'use client'

import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet, {type LatLngLiteral} from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';
import React from "react";

const DefaultIcon = Leaflet.icon({
  iconUrl : markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerIconShadow,
  iconAnchor: [12, 41], // アイコンのオフセット
  popupAnchor: [0, -32], // ポップアップのオフセット
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;

type MapViewer = {
  location: LatLngLiteral,
  onMapClick?: (point: LatLngLiteral) => void
}

const MapViewer = ({location, onMapClick}: MapViewer) => {
  const MapEvent = () => {
    const map = useMapEvents({
      click: (event) => {
        onMapClick(event.latlng);
      },
    })
    return null;
  }
  
  return (
    <div>
      <MapContainer center={location} zoom={13} style={{height: "50vh", width: "100%"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <MapEvent/>
      </MapContainer>
    </div>
  );
};

export default MapViewer;