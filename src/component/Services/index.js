import { View } from "@adobe/react-spectrum";
import ServicesItem from "../ServicesItem";
import { v4 as uuidv4 } from "uuid";

const serviceDetailsData = [
  {
    id: uuidv4(),
    serviceName: "Lost & Found",
    serviceDescription: "This is a service Description ",
  },
  {
    id: uuidv4(),
    serviceName: "Lounge",
    serviceDescription: "This is a lounge Description ",
  },
  {
    id: uuidv4(),
    serviceName: "Money Exchange",
    serviceDescription: "This is a money Description ",
  },
];

const Services = () => {
  return (
    <View marginY="24px">
      {serviceDetailsData.map((services) => (
        <ServicesItem key={services.id} {...services} />
      ))}
    </View>
  );
};

export default Services;
