import React, { useEffect, useState } from "react";
import database from '../firebase';
import '../css/cityreport.css';
const Cityreport = () => {
    const [state, setState] = useState({})
    useEffect(() => {
        database.ref('city_file').on("value", (snapshot) => {
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
            database.ref(`city_file/${id}`).remove((err) => {
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
            <div className='table-margin'>
                <table border="5" className='styled-table'>
                    <thead>
                        <tr className="border-style">
                            <th>sno</th>
                            <th>StudentName</th>
                            <th>CityName</th>
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
                                        <td>{state[id].StudentName}</td>
                                        <td>{state[id].CityName}</td>
                                        <td>
                                            <img src={state[id].imgdata} height="60px" width="60px" />
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-warning">
                                                edit
                                            </button>
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
}
export default Cityreport;