import './Register.css'
import React, {useState} from "react";
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    // name: '',
    // lastname: '', 
    email: '',
    // phone: '',
    // cep: '',
    // state: '',
    // city: '', 
    // neighborhood: '', 
    // address: '',
    // number: '',
    // complement: '',
    password: '',
    // confirmPassword: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const createAccount = async (event) => {
    event.preventDefault();
    try {
      console.log("formData", formData);
      
      var data = {
        // name: formData.name,
        // lastname: formData.lastname,
        email: formData.email,
        // phone: formData.phone,
        // cep: formData.cep,
        // state: formData.state,
        // city: formData.city,
        // neighborhood: formData.neighborhood,
        // address: formData.address,
        // number: formData.number,
        // complement: formData.complement,
        password: formData.password
      }

      const response = await axios.post('http://localhost:3030/chatterbot/client', data)
  
      console.log("response", response);
      if (response.data.status == 200) {
        // window.location.pathname = "/"
        alert("usuário salvo")
      }
      setFormData({
        // name: '',
        // lastname: '', 
        email: '',
        // phone: '',
        // cep: '',
        // state: '',
        // city: '', 
        // neighborhood: '', 
        // address: '',
        // number: '',
        // complement: '',
        password: '',
        // confirmPassword: ''
      })
      
    } catch (error) {
      console.log("error::: ", error);
      alert("erro ao salvar usuário")

      setFormData({
        // name: '',
        // lastname: '', 
        email: '',
        // phone: '',
        // cep: '',
        // state: '',
        // city: '', 
        // neighborhood: '', 
        // address: '',
        // number: '',
        // complement: '',
        password: '',
        // confirmPassword: ''
      })
    }
  };

  return (
    <>
      <h1>Crie sua conta</h1>
      <form onSubmit={createAccount}>
        <div className="register-infos">
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

