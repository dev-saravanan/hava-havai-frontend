import {
  Button,
  Flex,
  Item,
  Picker,
  Switch,
  Text,
  TextField,
  ToggleButton,
  View,
} from "@adobe/react-spectrum";
import { useState } from "react";
import Share from "@spectrum-icons/workflow/Share";

const ServicesItem = (props) => {
  const { serviceName, serviceDescription } = props;
  const [showDetail, setShowDetail] = useState(false);
  const [serviceNameText, setServiceNameText] = useState(serviceName);
  const [serviceDescriptionText, setServiceDescriptionText] =
    useState(serviceDescription);

  return (
    <View>
      <button
        style={{
          width: "100%",
          textAlign: "start",
          backgroundColor: "transparent",
          border: "0",
          padding: "16px",
          borderBottom: "1px solid gray",
        }}
        onClick={() => setShowDetail(!showDetail)}
      >
        <Text text>{serviceName}</Text>
      </button>

      {showDetail && (
        <View padding="16px">
          <Flex direction="column" alignItems="end" justifyContent="start">
            <Button marginY="16px" variant="primary" style="fill">
              Save
            </Button>

            <View width="100%">
              <Flex
                direction="row"
                alignItems="end"
                justifyContent="space-between"
                gap="size-200"
              >
                <TextField
                  label="Service Name"
                  value={serviceNameText}
                  onChange={setServiceNameText}
                />

                <Picker label="Category" defaultSelectedKey="option1">
                  <Item key="option1">Option 1</Item>
                  <Item key="option2">Option 2</Item>
                  <Item key="option3">Option 3</Item>
                </Picker>

                <Picker label="Sub Category" defaultSelectedKey="suboption1">
                  <Item key="suboption1">Sub Option 1</Item>
                  <Item key="suboption2">Sub Option 2</Item>
                  <Item key="suboption3">Sub Option 3</Item>
                </Picker>

                <Button variant="secondary" style="fill">
                  <Share marginX="8px" />
                  Upload Image
                </Button>

                <Switch>Show Image</Switch>
              </Flex>

              <TextField
                label="Description"
                value={serviceDescriptionText}
                marginY="16px"
                onChange={setServiceDescriptionText}
              />
            </View>
          </Flex>
        </View>
      )}
    </View>
  );
};

export default ServicesItem;
