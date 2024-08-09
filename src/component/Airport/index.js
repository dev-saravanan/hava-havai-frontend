import {
  Flex,
  Text,
  View,
  Button,
  ButtonGroup,
  Content,
  Dialog,
  DialogTrigger,
  Divider,
  Header,
  Heading,
  TextField,
} from "@adobe/react-spectrum";
import AirportList from "../AirportList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Airport = (props) => {
  const { airportData, addNewAirport } = props;

  const [airportName, setAirportName] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [terminals, setTerminals] = useState("");

  const onAddNewAirport = () => {
    const newAirport = {
      id: uuidv4(),
      name: airportName,
      code,
      country,
      terminals,
    };

    addNewAirport(newAirport);
    setAirportName("");
    setCountry("");
    setCode("");
    setTerminals("");
  };

  return (
    <View height="78vh" padding="24px" overflow="auto">
      <View paddingY="12px">
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <h1 style={{ fontSize: "24px" }}>Airports</h1>

          <DialogTrigger>
            <Button variant="primary" style="fill" width="140px" type="button">
              + Add New
            </Button>
            {(close) => (
              <Dialog>
                <Heading>Add New Aiport</Heading>
                <Divider />
                <Content>
                  <Flex direction="row" gap="size-200" wrap>
                    <TextField
                      label="Airport Name"
                      value={airportName}
                      onChange={setAirportName}
                    />
                    <TextField
                      label="Country"
                      value={country}
                      onChange={setCountry}
                    />
                    <TextField label="Code" value={code} onChange={setCode} />
                    <TextField
                      label="Terminals"
                      value={terminals}
                      onChange={setTerminals}
                    />
                  </Flex>
                </Content>
                <ButtonGroup>
                  <Button variant="primary" onPress={close}>
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    style="fill"
                    onPress={() => {
                      onAddNewAirport();
                      close();
                      }
                    }
                  >
                    Add
                  </Button>
                </ButtonGroup>
              </Dialog>
            )}
          </DialogTrigger>
        </Flex>
      </View>

      <View>
        <AirportList airportData={airportData} />
      </View>
    </View>
  );
};

export default Airport;
