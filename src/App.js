import { defaultTheme, Flex, Provider, View } from "@adobe/react-spectrum";
import "./App.css";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import RouteSwitch from "./component/RouteSwitch";
import VerticalTabs from "./component/VerticalTabs";
import { useNavigate, useHref } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <Provider theme={defaultTheme} router={{ navigate, useHref }}>
      <View minHeight="100vh">
        <Flex direction="column" height="100%">
          <Header />
          <Flex direction="row">
            <View
              minHeight="85vh"
              width="15%"
              borderRightColor="gray-300"
              borderRightWidth="thin"
            >
              <SideBar />
            </View>
            <View width="85%" flex>
              <RouteSwitch />
            </View>
          </Flex>
        </Flex>
      </View>
    </Provider>
  );
}

export default App;
