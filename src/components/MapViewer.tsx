import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet from 'leaflet';
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

const MapViewer = () => {
  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: "50vh", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapViewer;