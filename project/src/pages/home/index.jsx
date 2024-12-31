import { useEffect, useState } from "react";
import { fetchMaps } from "../../services/api";
import SeatList from "../../components/seat-list";

const Home = () => {
  const [map, setMap] = useState([]);

  useEffect(() => {
    const loadMap = async () => {
      try {
        // TODO
        // const maps = await fetchMaps();

        // TODO remove
        const maps = fetchMaps();

        setMap(maps);
      } catch (error) {
        console.error("Error loading map:", error);
      }
    };

    loadMap();
  }, []);

  return (
    <div>
      <h1>Volleyball Federation Ticketing</h1>
      {map.length > 0 ? <SeatList map={map} /> : <p>Loading map...</p>}
    </div>
  );
};

export default Home;
