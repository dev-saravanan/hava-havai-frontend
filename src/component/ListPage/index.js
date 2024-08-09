import { useParams } from "react-router-dom";

const ListPage = () => {
  const { id } = useParams();

  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>List Page {id}</h1>
    </div>
  );
};

export default ListPage;
