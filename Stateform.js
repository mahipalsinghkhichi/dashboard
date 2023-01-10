import React, { useState } from "react";
import database from "../firebase";
import '../css/stateform.css';
import { v4 as uuid } from 'uuid';
import Resizer from 'react-image-file-resizer';
const initialdata = {
    statename: "",
    id: "",
    imgdata: ""
}

const Stateform = () => {
    const [state, setState] = useState(initialdata);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const unqid = uuid();
        const slicid = unqid.slice(0, 8);
        state.id = slicid;
        database.ref("state_file").push(state, (err) => {
            if (err) {
                alert("data is not inserted");
            }
            else {
                alert("data is inserted");
            }
        });
    }
    const imgload = (e) => {
        var fileinput = false;
        if (e.target.files[0]) {
            fileinput = true;
        }
        if (fileinput) {
            try {
                Resizer.imageFileResizer(
                    e.target.files[0],
                    300,
                    300,
                    "jpeg",
                    200,
                    0,
                    (uri) => {
                        state.imgdata = uri;

                    },
                    "base64",
                    300,
                    300
                );
            }
            catch (err) {
                console.log("error in imageload section");
            }
        }
    }
    return (
        <>
            <div className="app">
                <div className="state-form">
                    <div className="title">
                        State form
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="input-container">
                                <label>Statename</label>
                                <input
                                    type="text"
                                    name="statename"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='input-container'>
                                <label>upload image</label>
                                <input
                                    type="file"
                                    name="imgdata"
                                    onChange={imgload}
                                    required
                                />
                            </div>

                            <div className="button-container">
                                <input
                                    type="submit"
                                    value="register"
                                    required
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Stateform;