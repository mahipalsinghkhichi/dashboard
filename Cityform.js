import { useState } from 'react';
import '../css/cityform.css';
import database from '../firebase';
import { v4 as uuid } from 'uuid';
import Resizer from 'react-image-file-resizer';
const initialdata = {
    StudentName: "",
    CityName: "",
    id: "",
    imgdata: ""

}
const Cityform = () => {
    const [state, setstate] = useState(initialdata);
    const handlechange = (e) => {
        const { name, value } = e.target;//to fetch the data from text box
        setstate({ ...state, [name]: value })
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        const unqid = uuid();
        const slicid = unqid.slice(0, 8);
        state.id = slicid;
        database.ref('city_file').push(state, (err) => {
            if (err) {
                alert("data not inserted");
            }
            else {
                alert("data inserted");
            }
        })
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
            <div className='app'>
                <div className='city-form'>
                    <div className='title'>
                        City form
                    </div>
                    <div>
                        <form onSubmit={handlesubmit}>
                            <div className='input-container'>
                                <label>Student Name</label>
                                <input
                                    type="text"
                                    name="StudentName"
                                    onChange={handlechange}
                                    required
                                />
                            </div>
                            <div className='input-container'>
                                <label>City Name</label>
                                <input
                                    type="text"
                                    name="CityName"
                                    onChange={handlechange}
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
                            <div className='button-container'>
                                <input
                                    type="submit"
                                    value="Register"
                                    required
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Cityform;