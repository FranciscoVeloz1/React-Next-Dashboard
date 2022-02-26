import Swal from "sweetalert2";
import Input from "@common/Input";
import Link from "next/link";
import useFetch from "@hooks/useFetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Button } from "react-bootstrap";
import { serviceExample } from "@services/index.services";

const Form = () => {
  const router = useRouter();
  const { id } = router.query;
  const [editing, setEditing] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  //Handle the input change
  const handleChange = (name, value) => setTask({ ...task, [name]: value });

  //Get current task
  const getTask = async () => {
    const data = await serviceExample.get(id);
    setTask(data);
  };

  //Handle to submit the info
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editing) {
      const result = await serviceExample.update(id, task);
      if (result.status === "error")
        return Swal.fire({
          icon: "error",
          title: "Oops",
          text: "Something went wrong! " + result.error,
          confirmButtonColor: "#ee2c2c",
        });
    } else {
      const result = await serviceExample.create(task);
      if (result.status === "error")
        return Swal.fire({
          icon: "error",
          title: "Oops",
          text: "Something went wrong! " + result.error,
          confirmButtonColor: "#ee2c2c",
        });
    }

    router.push("/admin/template");
  };

  //Input options
  const inputOpt = [
    {
      type: "text",
      text: "Title",
      id: "title",
      onChange: (e) => handleChange("title", e.target.value),
      value: task.title,
    },
    {
      type: "text",
      text: "Description",
      id: "description",
      onChange: (e) => handleChange("description", e.target.value),
      value: task.description,
    },
  ];

  useEffect(() => {
    if (id > 0) {
      setEditing(true);
      getTask();
    }
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Col lg="4" md="6" className="mx-auto ani-fadeIn">
          <form onSubmit={handleSubmit} className="card">
            <div className="card-header">
              <p className="title py-2 text-center">{editing ? "Edit element" : "Add element"}</p>
            </div>

            <div className="card-body">
              {inputOpt.map((i) => (
                <div className="mb-3" key={i.id}>
                  <Input o={i} />
                </div>
              ))}

              <div className="d-grid gap-2 mb-2">
                <Button type="submit">{editing ? "Update" : "Save"}</Button>
              </div>

              <div className="d-grid gap-2">
                <Link href="/admin/template">
                  <a className="btn btn-danger">Cancel</a>
                </Link>
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Form;
