import {
  Button,
  Cell,
  Column,
  Flex,
  Row,
  TableBody,
  TableHeader,
  TableView,
  Text,
  View,
} from "@adobe/react-spectrum";

import Edit from "@spectrum-icons/workflow/Edit";
import Delete from "@spectrum-icons/workflow/Delete";
import { Link } from "react-router-dom";

const AirportList = (props) => {
  const { airportData } = props;

  let columns = [
    { name: "All Airports", uid: "name" },
    { name: "Country", uid: "country" },
    { name: "Code", uid: "code" },
    { name: "Terminals", uid: "terminals" },
    { name: "", uid: "action" },
  ];

  return (
    <TableView
      aria-label="Table with controlled selection"
      selectionMode="multiple"
      width="80%"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.uid}
            align={column.uid === "action" ? "end" : "start"}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>

      <TableBody items={airportData}>
        {(item) => (
          <Row key={item.id}>
            {(columnKey) =>
              columnKey === "action" ? (
                <Cell>
                  <Link to={`/airport/${item.id}`} style={{ color: "black" }}>
                    <Edit size="S" />
                  </Link>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "0",
                      cursor: "pointer",
                    }}
                  >
                    <Delete size="S" />
                  </button>
                </Cell>
              ) : (
                <Cell>{item[columnKey]}</Cell>
              )
            }
          </Row>
        )}
      </TableBody>
    </TableView>
  );
};

export default AirportList;
