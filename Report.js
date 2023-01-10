import React, { useEffect, useState } from "react";
import database from "../firebase";
import { Link } from "react-router-dom";
import '../css/report.css';

const Report = () => {
  const [state, setState] = useState({})
  useEffect(() => {
    database.ref('registration_file').on("value", (snapshot) => {
      if (snapshot.val()) {
        setState({ ...snapshot.val() });
      }
      else {
        setState({});
      }

    })

  }, []);
  const onDelete = (id) => {

    if (window.confirm("are you confirm to delete the records")) {
      database.ref(`registration_file/${id}`).remove((err) => {
        if (err) {
          alert("record is not deleted");
        }
        else {
          alert("record is deleted");
        }
      })
    }

  }
  return (
    <>
      <div className="table-margin">
        <table border="2" className="styled-table">
          <thead>
            <tr className="border-style">
              <th>sno</th>
              <th>name</th>
              <th>email</th>
              <th>contact</th>
              <th>photo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(state).map((id, index) => {
                return (
                  <tr className="data-color" key={id}>
                    <td>{index + 1}</td>
                    <td>{state[id].username}</td>
                    <td>{state[id].email}</td>
                    <td>{state[id].contact}</td>
                    <td>
                      <img src={state[id].imgdata} height="60px" width="60px" />
                    </td>
                    <td>
                      <Link to={`/update/${id}`}>
                        <button className="btn btn-warning"
                        >
                          edit
                        </button>
                      </Link>

                      <button
                        className="btn btn-danger"
                        onClick={() => onDelete(id)}
                      >
                        delete
                      </button>

                    </td>
                  </tr>
                );

              })
            }

          </tbody>

        </table>
      </div>

    </>
  );
};
export default Report;