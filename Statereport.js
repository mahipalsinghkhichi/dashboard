import React, { useEffect, useState } from "react";
import database from "../firebase";
import '../css/statereport.css';

const Statereport = () => {
  const [state, setState] = useState({})
  useEffect(() => {
    database.ref('state_file').on("value", (snapshot) => {
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
      database.ref(`state_file/${id}`).remove((err) => {
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
    <><div className="table-margin">
      <table border="3" className="styled-table">
        <thead>
          <tr className="border-style">
            <th>sno</th>
            <th>statename</th>
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
                  <td>{state[id].statename}</td>
                  <td>
                    <img src={state[id].imgdata} hieght="60px" width="60px" />
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                    >
                      edit
                    </button>
                    <button
                      onClick={onDelete}
                      className="btn btn-danger"
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
export default Statereport;