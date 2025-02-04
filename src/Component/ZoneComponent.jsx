import { useState, useEffect } from "react";

function ZoneComponent({ zoneId }) {
  console.log(zoneId);
  const [zoneName, setZoneName] = useState("");

  useEffect(() => {
    async function getZoneName() {
      const data = await fetchZoneName(zoneId);
      console.log(data.zone_name);
      setZoneName(data.zone_name); // ✅ Store only the zone_name
    }
    if (zoneId) {
      getZoneName();
    }
  }, [zoneId]);

  async function fetchZoneName(zoneId) {
    try {
      const response = await fetch(`https://backend-wheat-gamma.vercel.app/api/zones/${zoneId}`, {
        method: "GET",
        headers: {
          "x-api-key": "your_secret_key",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching zone name:", error);
      return { zone_name: "Unknown" };
    }
  }

  return <div>{zoneName || "Loading..."}</div>;
}

export default ZoneComponent;
