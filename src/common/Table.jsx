import Filters from "./Filters";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAdd, faFileExcel, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Table = ({ o }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("id");

  //Filters object
  const filters = {
    objectKeys: Object.keys(o.data[0] === undefined ? [] : o.data[0]),
    headers: o.headers,
  };

  //Filter and search data with useMemo
  const info = useMemo(() => {
    if (o.data !== undefined && o.data !== null && o.data.length > 0) {
      return o.data.filter((d) => {
        for (let i = 0; i < Object.keys(d).length; i++) {
          const key = Object.keys(d)[i];
          if (key === filter) {
            return Object.values(d)[i].toString().toLowerCase().includes(search.toLowerCase());
          }
        }
      });
    }
  }, [o.data, search]);

  return (
    <div className="container-fluid bg-white border-radius p-4 shadow-lg ani-fadeIn">
      <p className="title">Table title</p>
      <div className="row mt-2">
        {/* Search */}
        <div className="col-lg-6 col-md-8 col-12 d-flex py-1">
          {/* Search Input */}
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button className="btn button-primary">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          {/* Filters */}
          <Filters setFilter={setFilter} filters={filters} />
        </div>

        {/* Excel and Add */}
        <div className="col-lg-6 col-md-4 col-12 my-auto text-md-end py-1">
          <button className="btn button-primary me-1">
            <FontAwesomeIcon icon={faFileExcel} />
          </button>

          <Link href="/">
            <a className="btn button-primary">
              <FontAwesomeIcon icon={faAdd} />
            </a>
          </Link>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  {o.headers === undefined && o.data !== undefined && o.data.length > 0
                    ? Object.entries(o.data[0]).map((o) => <th key={o}>{o[0]}</th>)
                    : null}

                  {o.headers !== undefined ? o.headers.map((h) => <th key={h}>{h}</th>) : null}

                  {o.data !== undefined && o.data.length > 0 ? <th>Acciones</th> : null}
                </tr>
              </thead>

              <tbody>
                {info !== undefined && info.length > 0
                  ? info.map((i) => (
                      <tr key={i.id}>
                        {Object.values(i).map((o) => (
                          <td key={o + Math.random()}>
                            <p className="td-p">{o}</p>
                          </td>
                        ))}
                        <td>
                          <Link href={`${o.editLink}/${i.id}`}>
                            <a className="btn ms-1 my-1 button-info">
                              <FontAwesomeIcon icon={faEdit} />
                            </a>
                          </Link>

                          <button
                            className="btn ms-1 my-1 btn-danger"
                            onClick={() => o.delete(i.id, Object.values(i)[1])}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
