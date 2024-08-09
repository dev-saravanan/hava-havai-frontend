import { Avatar, Flex, Text, View } from "@adobe/react-spectrum";

import havahavai from "../../assets/images/havahavai.png";

const Header = () => {
  return (
    <View borderBottomColor="gray-300" borderBottomWidth="thin" padding="16px">
      <Flex direction="row" alignItems="center" justifyContent="space-between">
        <img src={havahavai} style={{ width: "100px" }} alt="hava havai logo" />

        <Avatar
          src="https://s3-alpha-sig.figma.com/img/fb96/d6f0/4db45efd3340ef80a549531cff981068?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MoEVR2vKEIHQro-DbHpUt-IFCVElwIYVuLlWsC7K31h55TlnGYCMO3gcxToZk1NT0GQ2iTOdISGoiBZtjjfC5oj-IY1YHVUsDXaKBvuhSogF04~vpk5Viyi5BDbrSbJWz~Rz~VwsUZGzMXsoJpTMqAA07p~-xwZ54Z3bX2Pvw0Z6Wv3SVe5QXktZ2rCV4ho1Po5b01jGkOQuVyCcHUxey1N9WxGUeU~15bfgv~g2j14-r27KmGpn71O1SqwPnb6~jDELRlDGV9ra832wQQqe1AGoKkDSjhpGuSdclrBu5J2rMR54kdKxDuXy5i1kcE29RLv0BTRxNsRx7EqBtK~DXw__"
          alt="avatar"
          size="avatar-size-700"
        />
      </Flex>
    </View>
  );
};

export default Header;
