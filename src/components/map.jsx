
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapBoulangeries({ boulangeries }) {
  useEffect(() => {
    const map = L.map('map').setView([48.8566, 2.3522], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    boulangeries.forEach((boulangerie) => {
      const marker = L.marker(boulangerie.coord).addTo(map);
      marker
        .bindPopup(`
          <strong>${boulangerie.nom}</strong><br/>
          <a href="${boulangerie.lien}">Voir la page</a>
        `)
        .bindTooltip(boulangerie.nom); // optionnel : nom au survol
    });
  }, [boulangeries]);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
}