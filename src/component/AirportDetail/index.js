import {
  Breadcrumbs,
  Flex,
  Item,
  TabList,
  TabPanels,
  Tabs,
  Text,
  View,
} from "@adobe/react-spectrum";
import { useParams } from "react-router-dom";
import TerminalsList from "../TerminalsList";
import Services from "../Services";

const AirportDetail = (props) => {
  const { airportData } = props;
  const { id } = useParams();

  const airportDetail = airportData.find(
    (eachAirport) => id === eachAirport.id
  );
  console.log(airportDetail);

  return (
    <View height="78vh" padding="24px" overflow="auto">
      <Breadcrumbs>
        <Item href="/airport">Airports</Item>
        <Item href={`/airport/${id}`}>{airportDetail.name}</Item>
      </Breadcrumbs>

      <h1>{airportDetail.name}</h1>

      <Tabs aria-label="History of Ancient Rome">
        <TabList>
          <Item key="terminal">Terminals</Item>
          <Item key="transport">Transport</Item>
          <Item key="details">Contact Details</Item>
        </TabList>
        <TabPanels>
          <Item key="terminal">
            <TerminalsList />
            <Services />
          </Item>
          <Item key="transport">
            <View height="40vh">
              <Flex
                direction="row"
                justifyContent="center"
                alignContent="center"
                height="40vh"
              >
                <Text>Transport - Coming Soon</Text>
              </Flex>
            </View>
          </Item>
          <Item key="details">
            <View height="40vh">
              <Flex
                direction="row"
                justifyContent="center"
                alignContent="center"
                height="40vh"
              >
                <Text>Contact Details - Coming Soon</Text>
              </Flex>
            </View>
          </Item>
        </TabPanels>
      </Tabs>
    </View>
  );
};

export default AirportDetail;
