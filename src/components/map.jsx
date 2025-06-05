import { useEffect, useRef, useState } from 'react';
import PocketBase from 'pocketbase';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Carteboulangerie() {
  const [boulangerie, setboulangerie] = useState([]);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  // Instancie PocketBase côté client (avec ton URL)
  const pb = new PocketBase('https://matinochaudpb.breuil-kilian.fr:443');

  useEffect(() => {
    // Initialise la carte une fois
    mapRef.current = L.map('map').setView([47.2806, 6.1508], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    // Charge les données PocketBase côté client
    async function fetchboulangerie() {
      try {
        const records = await pb.collection('boulangerie').getFullList();
        setboulangerie(records);
      } catch (err) {
        console.error(err);
      }
    }
    fetchboulangerie();
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    // Supprime les anciens marqueurs
    markersRef.current.forEach(marker => mapRef.current.removeLayer(marker));
    markersRef.current = [];

    // Ajoute les nouveaux marqueurs
    boulangerie.forEach((boulangerie) => {
      const lat = parseFloat(boulangerie.latitude);
      const lng = parseFloat(boulangerie.longitude);
      if (!isNaN(lat) && !isNaN(lng)) {
        const marker = L.marker([lat, lng]).addTo(mapRef.current)
          .bindPopup(`<a href="/boulangerie/${boulangerie.id}"><b>${boulangerie.nom_boulangerie}</b></a>`);
        markersRef.current.push(marker);
      }
    });
  }, [boulangerie]);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
}