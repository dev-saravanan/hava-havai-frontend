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
    name: "Charizard",
    country: "Fire, Flying",
    code: "67",
    terminals: "122",
  },
  {
    id: uuidv4(),
    name: "Pikachu",
    country: "Electric",
    code: "100",
    terminals: "123",
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
