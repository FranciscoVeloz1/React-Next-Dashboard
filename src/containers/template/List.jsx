import Table from "@common/Table";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const List = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      setData(await response.json());
    } catch (error) {
      setData(null);
    }
  };

  const tableOptions = {
    data,
    title: "Template",
    headers: ["User", "ID", "Title", "Body"],
    addLink: "/admin/template/add",
    editLink: "/admin/template/edit",
    delete: (id, item) => console.log(id, item),
  };

  useEffect(() => {
    getData();

    return () => setData([]);
  }, []);

  return (
    <div className="mt-5">
      {data !== null && data !== undefined ? (
        data.length > 0 ? (
          <Table o={tableOptions} />
        ) : (
          <center>
            <Spinner animation="border" variant="secondary" />
          </center>
        )
      ) : (
        <center className="title">
          <FontAwesomeIcon icon={faSync} className="me-2" />
          Error, reload the page please
        </center>
      )}
    </div>
  );
};

export default List;
