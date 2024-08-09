import { Item, ListBox, Section, Text } from "@adobe/react-spectrum";
import Home from "@spectrum-icons/workflow/Home";
import Apps from "@spectrum-icons/workflow/Apps";

const SideBar = () => {
  return (
    <ListBox
      width="100%"
      aria-label="Pick your favorite"
      selectionMode="single"
    >
      <Item href="/" textValue="Home">
        <Home />
        <Text>Home</Text>
      </Item>
      <Item href="/dashboard" textValue="Dashboard">
        <Apps />
        <Text>Dashboard</Text>
      </Item>

      <Section title="Services">
        <Item href="/airport">Airport</Item>
        <Item href="/videos">Videos</Item>
      </Section>

      <Section title="Others">
        <Item href="/list/1">List 1</Item>
        <Item href="/list/2">List 2</Item>
        <Item href="/list/3">List 3</Item>
      </Section>
    </ListBox>
  );
};

export default SideBar;
