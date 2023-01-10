import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/registration.css';
import database from '../firebase';
import { v4 as uuid } from 'uuid';
import Resizer from 'react-image-file-resizer';
const initialdata ={
  username: "",
  email: "",
  contact: "",
  userid: "",
  imgdata: ""

}
let loadImg = 0;
const Registration = () => {
  const [state, setstate] = useState(initialdata);
  const { id } = useParams();
  const { username, email, contact, userid, imgdata } = state;

  const handlechange = (e) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value })
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    if (id) {
      if (loadImg === 1) {
        updateData();
      }
      else {
        state.imgdata = imgdata;
        updateData();
      }

    }
    else {
      datainsert();
    }

  }
  const updateData = () => {
    state.userid = userid;
    database.ref(`registration_file/${id}`).set(state, (err) => {
      if (err) {
        alert("record is not updated");

      }
      else {
        alert("record is updated");
      }
    });
  }

  const datainsert = () => {

    const unqid = uuid();
    const slicid = unqid.slice(0, 8);
    state.userid = slicid;
    database.ref('registration_file').push(state, (err) => {
      if (err) {
        alert("data is not inserted");
      }
      else {
        alert("data is inserted");
      }
    })
  }
  const [data, setData] = useState({});
  useEffect(() => {
    database.ref("registration_file").on("value", (snapshot) => {

      if (snapshot.val() != null) {
        setData({ ...snapshot.val() });
      }
      else {
        setData({});
      }
    })

  }, [id]);

  useEffect(() => {

    if (id) {
      setstate({ ...data[id] });
    }
    else {
      setstate({ ...initialdata });
    }

  }, [id, data]);

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
            loadImg = 1;
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
        <div className='regis-form'>
          <div className='title'>
            Registration form
          </div>
          <div>
            <form onSubmit={handlesubmit}
            >
              <div className='input-container'>
                <label>name</label>
                <input
                  type="text"
                  name="username"
                  onChange={handlechange}
                  value={username || ""}
                  required
                />
              </div>
              <div className='input-container'>
                <label>email</label>
                <input
                  type="text"
                  name="email"
                  onChange={handlechange}
                  value={email || ""}

                  required
                />
              </div>
              <div className='input-container'>
                <label>contact</label>
                <input
                  type="text"
                  name="contact"
                  onChange={handlechange}
                  value={contact || ""}

                  required
                />
              </div>
              <div className='input-container'>
                <label>upload image</label>
                <input
                  type="file"
                  name="imgdata"
                  onChange={imgload}

                />
              </div>
              <div className='button-container'>

                <input
                  type="submit"
                  value={id ? "update" : "register"}
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
export default Registration;

