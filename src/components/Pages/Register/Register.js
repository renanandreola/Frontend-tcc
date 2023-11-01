import './Register.css'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from '../../layout/Header';
import Message from "../../layout/Message";

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [showMessageValid, setshowMessageValid] = useState(false);
  const [showMessageInvalid, setshowMessageInvalid] = useState(false);

  useEffect(() => {
      if (showMessageValid) {
          const timer = setTimeout(() => {
              setshowMessageValid(false);
          }, 5000);
      
          return () => clearTimeout(timer);
      }
  }, [showMessageValid]);

  useEffect(() => {
      if (showMessageInvalid) {
          const timer = setTimeout(() => {
              setshowMessageInvalid(false);
          }, 5000);
      
          return () => clearTimeout(timer);
      }
  }, [showMessageInvalid]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const createAccount = async (event) => {
    event.preventDefault();
    try {
      // console.log("formData", formData);
      
      var data = {
        name: formData.name,
        email: formData.email,
        password: formData.password
      }

      const response = await axios.post('http://localhost:3030/chatterbot/client', data)
  
      // console.log("response", response);
      if (response.data.status == 200) {
        setshowMessageValid(true);
      }
      setFormData({
        name: '', 
        email: '',
        password: '',
      })
      
    } catch (error) {
      setshowMessageInvalid(true);

      setFormData({
        name: '',
        email: '',
        password: '',
      })
    }
  };

  return (
    <>
      <Header></Header>

      {showMessageValid && <Message valid={true} message={'Usuário cadastrado!'} />}
      {showMessageInvalid && <Message valid={false} message={'Erro ao realizar cadastro'} />}
      
      <h1>Crie sua conta</h1>
      <form onSubmit={createAccount}>
        <div className="register-infos">
          <div className="row col-12 mt-5 d-flex justify-content-center">
              <div className="col-6">
                  {/* <label>E-mail</label> */}
                  <input type="text" name="name" value={formData.name} id="name" className="form-control" placeholder='Name' onChange={handleChange}/>
              </div>
          </div>

          <div className="row col-12 mt-5 d-flex justify-content-center">
              <div className="col-6">
                  {/* <label>E-mail</label> */}
                  <input type="email" name="email" value={formData.email} id="email" className="form-control" placeholder='E-mail' onChange={handleChange}/>
              </div>
          </div>

          <div className="row col-12 mt-5 d-flex justify-content-center">
              <div className="col-6">
                  {/* <label>Senha</label> */}
                  <input type="password" name="password" value={formData.password} id="password" className="form-control" placeholder='Senha' onChange={handleChange}/>
              </div>
          </div>
          
          <div className="col-2 d-flex justify-content-center mt-5">
            <button type="submit" className="btn btn-success">
              Criar conta
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;

