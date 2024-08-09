import {
  Button,
  ButtonGroup,
  Content,
  Dialog,
  DialogTrigger,
  Heading,
  Flex,
  View,
  FileTrigger,
  Footer,
  TextField,
  TextArea,
} from "@adobe/react-spectrum";
import Share from "@spectrum-icons/workflow/Share";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TerminalItem from "../TerminalItem";
import cardImg from "../../assets/images/card-img.png";

const terminalsListData = [
  {
    id: uuidv4(),
    imgUrl: cardImg,
    terminalName: "Terminal 1",
    terminalDescription: "Terminal 1 Optional metadata should be two lines.",
  },
  {
    id: uuidv4(),
    imgUrl: cardImg,
    terminalName: "Terminal 2",
    terminalDescription: "Terminal 2 Optional metadata should be two lines.",
  },
];

const TerminalsList = () => {
  const [files, setFiles] = useState([]);
  const [terminalList, setTerminalList] = useState(terminalsListData);
  const [terminalName, setTerminalName] = useState("");
  const [terminalDescription, setTerminalDescription] = useState("");

  const addNewTerminal = () => {
    const newTerminal = {
      id: uuidv4(),
      imgUrl: cardImg,
      terminalName: terminalName,
      terminalDescription: terminalDescription,
    };

    setTerminalList([...terminalList, newTerminal]);
    setTerminalName("");
    setTerminalDescription("");
  };

  return (
    <View>
      <Flex direction="row" justifyContent="start" alignItems="center" wrap>
        {terminalList.map((eachTerminal) => (
          <TerminalItem key={eachTerminal.id} {...eachTerminal} />
        ))}

        <DialogTrigger>
          <Button variant="primary" style="outline">
            + Add Terminal
          </Button>

          {(close) => (
            <Dialog>
              <Heading marginBottom="24px">
                <Flex direction="column">
                  <TextField
                    onChange={setTerminalName}
                    label="Terminal Title"
                    width="100%"
                    isQuiet
                  />
                </Flex>
              </Heading>

              <Content>
                <TextArea
                  onChange={setTerminalDescription}
                  width="100%"
                  label="Description"
                  isQuiet
                />
              </Content>

              <Footer>
                <>
                  <FileTrigger
                    acceptDirectory
                    onSelect={(e) => {
                      if (e) {
                        let fileList = [...e].map((file) =>
                          file.webkitRelativePath !== ""
                            ? file.webkitRelativePath
                            : file.name
                        );
                        setFiles(fileList);
                      }
                    }}
                  >
                    <Button variant="primary">
                      <Share marginX="8px" />
                      Upload Image
                    </Button>
                  </FileTrigger>
                  {files && (
                    <ul>
                      {files.map((file, index) => (
                        <li key={index}>{file}</li>
                      ))}
                    </ul>
                  )}
                </>
              </Footer>

              <ButtonGroup width="100%">
                <Button variant="primary" style="outline" onPress={close}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  style="fill"
                  onPress={() => {
                    addNewTerminal();
                    close();
                  }}
                >
                  Continue
                </Button>
              </ButtonGroup>
            </Dialog>
          )}
        </DialogTrigger>
      </Flex>
    </View>
  );
};

export default TerminalsList;
