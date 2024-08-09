import {
  ActionButton,
  Button,
  ButtonGroup,
  Content,
  Dialog,
  DialogTrigger,
  Divider,
  Header,
  Heading,
  Text,
  Flex,
  View,
  FileTrigger,
  Footer,
} from "@adobe/react-spectrum";
import MoreSmallList from "@spectrum-icons/workflow/MoreSmallList";
import Share from "@spectrum-icons/workflow/Share";
import { useState } from "react";

const TerminalItem = (props) => {
  let [files, setFiles] = useState([]);

  const { id, imgUrl, terminalName, terminalDescription } = props;
  return (
    <DialogTrigger>
      <ActionButton width="300px" height="120px" margin="12px">
        <View width="300px" height="120px">
          <Flex direction="row" justifyContent="start">
            <img
              style={{
                borderTopLeftRadius: "4px",
                borderBottomLeftRadius: "4px",
                height: "120px",
                width: "120px",
              }}
              src={imgUrl}
              alt={terminalName}
            />
            <View paddingX="8px" width="180px" height="120px">
              <Flex
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                marginTop="8px"
              >
                <h4 style={{ margin: "0" }}>{terminalName}</h4>
                <MoreSmallList />
              </Flex>
              <View marginTop="4px">
                <p
                  style={{
                    wordBreak: "break-word",
                    textAlign: "left",
                    margin: "0",
                  }}
                >
                  {terminalDescription.length > 52
                    ? `${terminalDescription.substr(0, 52)} ...`
                    : terminalDescription}
                </p>
              </View>
            </View>
          </Flex>
        </View>
      </ActionButton>

      {(close) => (
        <Dialog>
          <Heading>{terminalName}</Heading>
          <Divider />
          <Content>
            <p style={{ wordBreak: "break-word" }}>{terminalDescription}</p>
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
            <Button variant="primary" style="fill" onPress={close}>
              Continue
            </Button>
          </ButtonGroup>
        </Dialog>
      )}
    </DialogTrigger>
  );
};

export default TerminalItem;
