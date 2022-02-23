import AdminLayout from "@containers/AdminLayout";
import Table from "@common/Table";
import { Container, Row, Col } from "react-bootstrap";

const index = () => {
  const tableOptions = {
    data: [
      {
        id: 1,
        title: "Title",
        description: "Description",
      },
      {
        id: 2,
        title: "Task1",
        description: "Go to shop",
      },
    ],
    title: "Template",
    headers: ["ID", "Title", "Description"],
    addLink: "/admin/template/add",
    editLink: "/admin/template/edit",
    delete: (id, item) => console.log(id, item),
  };

  return (
    <div className="mt-5">
      <Table o={tableOptions} />
    </div>
  );
};

index.Layout = AdminLayout;

export default index;
