import { Route, Routes } from "react-router-dom";
import Airport from "../Airport";
import AirportDetail from "../AirportDetail";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Home from "../Home";
import Dashboard from "../Dashboard";
import Videos from "../Videos";
import ListPage from "../ListPage";

let airportDataList = [
  {
    id: uuidv4(),
    name: "Ocean Breeze International Airport",
    country: "Bahamas",
    code: "OBI",
    terminals: 3,
  },
  {
    id: uuidv4(),
    name: "Maple Leaf Regional Airport",
    country: "Canada",
    code: "MLR",
    terminals: 4,
  },
  {
    id: uuidv4(),
    name: "Emerald Coast Airport",
    country: "Australia",
    code: "ECA",
    terminals: 2,
  },
  {
    id: uuidv4(),
    name: "Golden Gate International Airport",
    country: "United States",
    code: "GGI",
    terminals: 5,
  },
  {
    id: uuidv4(),
    name: "Skyline Gateway Airport",
    country: "United Kingdom",
    code: "SGA",
    terminals: 3,
  },
  {
    id: uuidv4(),
    name: "Desert Oasis International Airport",
    country: "United Arab Emirates",
    code: "DOI",
    terminals: 6,
  },
  {
    id: uuidv4(),
    name: "Coconut Bay Airport",
    country: "Jamaica",
    code: "CBA",
    terminals: 2,
  },
  {
    id: uuidv4(),
    name: "Silver Peak Airport",
    country: "New Zealand",
    code: "SPA",
    terminals: 3,
  },
  {
    id: uuidv4(),
    name: "Sunset Horizon Airport",
    country: "South Africa",
    code: "SHA",
    terminals: 4,
  },
  {
    id: uuidv4(),
    name: "Lotus Blossom International Airport",
    country: "Thailand",
    code: "LBI",
    terminals: 5,
  },
];


const RouteSwitch = () => {
  const [airportData, setAirportData] = useState(airportDataList);

  const addNewAirport = (newAirportDetail) => {
    setAirportData([...airportData, newAirportDetail]);
  };

  return (
    <Routes>
      {console.log(airportData)}
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/airport"
        element={
          <Airport airportData={airportData} addNewAirport={addNewAirport} />
        }
      />
      <Route
        path="/airport/:id"
        element={<AirportDetail airportData={airportData} />}
      />
      <Route path="/videos" element={<Videos />} />
      <Route path="/list/:id" element={<ListPage />} />
    </Routes>
  );
};

export default RouteSwitch;
