import Table from "@common/Table";
import useFetch from "@hooks/useFetch";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { serviceExample } from "@services/index.services";
import { Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

const List = () => {
  const { data, refresh } = useFetch(serviceExample.list);

  //Delete the tasks
  const handleDelete = async (id, item) => {
    Swal.fire({
      text: `Do you want to delete the task ${item}?`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#d9534f",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await serviceExample.deleteData(id);
        refresh();
        result.status === "success"
          ? toast.error("Task deleted successfully", {
              position: "bottom-right",
              theme: "colored",
            })
          : Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Commodity could not be deleted",
            });
      }
    });
  };

  const tableOptions = {
    data,
    title: "Task table",
    headers: ["ID", "Task", "Description"],
    addLink: "/admin/template/add",
    editLink: "/admin/template/edit",
    delete: (id, item) => handleDelete(id, item),
  };

  return (
    <div className="mt-5">
      {data !== null && data !== undefined ? (
        <Table o={tableOptions} />
      ) : (
        // <center>
        //   <Spinner animation="border" variant="secondary" />
        // </center>
        <center className="title">
          <FontAwesomeIcon icon={faSync} className="me-2" />
          Error, reload the page please
        </center>
      )}
    </div>
  );
};

export default List;
