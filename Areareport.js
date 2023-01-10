import React, { useEffect, useState } from "react";
import database from '../firebase';
import { Link } from "react-router-dom";
import '../css/areareport.css';
const Areareport = () => {
    const [state, setState] = useState({})
    useEffect(() => {
        database.ref('area_file').on("value", (snapshot) => {
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
            database.ref(`area_file/${id}`).remove((err) => {
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
                <table border="10" classname='styled-table'>
                    <thead>
                        <tr className="border-style">
                            <th>sno</th>
                            <th>studentname</th>
                            <th>cityname</th>
                            <th>areaname</th>
                            <th>photo</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(state).map((id, index) => {

                                return (

                                    <tr className="data-color">
                                        <td>{index + 1}</td>
                                        <td>{state[id].studentname}</td>
                                        <td>{state[id].cityname}</td>
                                        <td>{state[id].areaname}</td>
                                        <td>
                                            <img src={state[id].imgdata} height="60px" width="60px" />
                                        </td>
                                        <td>
                                            <Link to={`/update/${id}`}>
                                                <button className="btn btn-warning">
                                                    edit
                                                </button>
                                            </Link>
                                            <button className="btn btn-danger"
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
}

export default Areareport