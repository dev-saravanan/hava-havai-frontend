import { Flex, Item, TabList, Tabs, Text, View } from "@adobe/react-spectrum";
import { useState } from "react";
import Home from "@spectrum-icons/workflow/Home";
import Apps from "@spectrum-icons/workflow/Apps";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <Tabs
      aria-label="Sidebar navigation"
      orientation="vertical"
      selectedKey={selectedTab}
      onSelectionChange={(key) => setSelectedTab(key)}
    >
      <TabList
        UNSAFE_style={{
          border: "0",
        }}
      >
        <Item key="home">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <View
              width="170px"
              UNSAFE_style={{
                backgroundColor:
                  selectedTab === "home" ? "#D3D3D3" : "transparent",
                borderRadius: "4px",
              }}
            >
              <Flex direction="row" alignItems="center" padding="4px">
                <Home size="S" />
                <Text marginStart="8px">Home</Text>
              </Flex>
            </View>
          </Link>
        </Item>

        <Item key="dashboard">
          <Link
            to="/dashboard"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <View
              width="170px"
              UNSAFE_style={{
                backgroundColor:
                  selectedTab === "dashboard" ? "#D3D3D3" : "transparent",
                borderRadius: "4px",
              }}
            >
              <Flex direction="row" alignItems="center" padding="4px">
                <Apps size="S" />
                <Text marginStart="8px">Dashboard</Text>
              </Flex>
            </View>
          </Link>
        </Item>

        <Item key="airport">
          <Link
            to="/airport"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <View
              width="170px"
              UNSAFE_style={{
                backgroundColor:
                  selectedTab === "airport" ? "lightblue" : "transparent",
                borderRadius: "4px",
              }}
            >
              <Flex direction="row" alignItems="center" padding="4px">
                <Text marginStart="8px">Airport</Text>
              </Flex>
            </View>
          </Link>
        </Item>
      </TabList>
    </Tabs>
  );
};

export default SideBar;
