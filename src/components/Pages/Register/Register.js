import './Register.css'
import React, {useState} from "react";
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '', 
    email: '',
    phone: '',
    cep: '',
    state: '',
    city: '', 
    neighborhood: '', 
    address: '',
    number: '',
    complement: '',
    password: '',
    confirmPassword: ''
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
        name: formData.name,
        lastname: formData.lastname,
        email: formData.email,
        phone: formData.phone,
        cep: formData.cep,
        state: formData.state,
        city: formData.city,
        neighborhood: formData.neighborhood,
        address: formData.address,
        number: formData.number,
        complement: formData.complement,
        password: formData.password
      }

      const response = await axios.post('http://localhost:3030/chatterbot/client', data)
  
      console.log("response", response);
      if (response.data.status == 200) {
        // window.location.pathname = "/"
        alert("usuário salvo")
      }
      setFormData({
        name: '',
        lastname: '', 
        email: '',
        phone: '',
        cep: '',
        state: '',
        city: '', 
        neighborhood: '', 
        address: '',
        number: '',
        complement: '',
        password: '',
        confirmPassword: ''
      })
      
    } catch (error) {
      console.log("error::: ", error);
      alert("erro ao salvar usuário")

      setFormData({
        name: '',
        lastname: '', 
        email: '',
        phone: '',
        cep: '',
        state: '',
        city: '', 
        neighborhood: '', 
        address: '',
        number: '',
        complement: '',
        password: '',
        confirmPassword: ''
      })
    }
  };

  return (
    <>
      <h1>Crie sua conta</h1>
      <form onSubmit={createAccount}>
        <div className="register-infos">
          <div className="row col-12 mt-5">
              <div className="col-6">
                  {/* <label>Nome</label> */}
                  <input type="text" name="name" value={formData.name} id="name" className="form-control" placeholder='Nome' onChange={handleChange}/>
              </div>
              <div className="col-6">
                  {/* <label>Sobrenome</label> */}
                  <input type="text" name="lastname" value={formData.lastname} id="lastname" className="form-control" placeholder='Sobrenome' onChange={handleChange}/>
              </div>
          </div>

          <div className="row col-12 mt-5">
              <div className="col-6">
                  {/* <label>E-mail</label> */}
                  <input type="email" name="email" value={formData.email} id="email" className="form-control" placeholder='E-mail' onChange={handleChange}/>
              </div>
              <div className="col-6">
                  {/* <label>Telefone</label> */}
                  <input type="num" name="phone" value={formData.phone} id="phone" className="form-control" placeholder='Telefone' onChange={handleChange}/>
              </div>
          </div>

          <div className="row col-12 mt-5">
              <div className="col-2">
                  {/* <label>CEP</label> */}
                  <input type="num" name="cep" value={formData.cep} id="cep" className="form-control" placeholder='CEP' onChange={handleChange}/>
              </div>
              <div className="col-5">
                  {/* <label>Estado</label> */}
                  <select className="form-control" type="text" name="state" value={formData.state} id="state" onChange={handleChange}>
                      <option value="AC">Selecione seu estado</option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="PR">Paraná</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                      <option value="EX">Estrangeiro</option>
                  </select>
              </div>
              <div className="col-5">
                  {/* <label>Cidade</label> */}
                  <input type="text" name="city" value={formData.city} id="city" className="form-control" placeholder='Cidade' onChange={handleChange}/>
              </div>
          </div>

          <div className="row col-12 mt-5">
              <div className="col-3">
                  {/* <label>Bairro</label> */}
                  <input type="text" name="neighborhood" value={formData.neighborhood} id="neighborhood" className="form-control" placeholder='Bairro' onChange={handleChange}/>
              </div>
              <div className="col-3">
                  {/* <label>Endereço</label> */}
                  <input type="text" name="address" value={formData.address} id="address" className="form-control" placeholder='Endereço' onChange={handleChange}/>
              </div>
              <div className="col-3">
                  {/* <label>Número</label> */}
                  <input type="text" name="number" value={formData.number} id="number" className="form-control" placeholder='Número' onChange={handleChange}/>
              </div>
              <div className="col-3">
                  {/* <label>Complemento</label> */}
                  <input type="text" name="complement" value={formData.complement} id="complement" className="form-control" placeholder='Complemento' onChange={handleChange}/>
              </div>
          </div>

          <div className="row col-12 mt-5">
              <div className="col-6">
                  {/* <label>Senha</label> */}
                  <input type="password" name="password" value={formData.password} id="password" className="form-control" placeholder='Senha' onChange={handleChange}/>
              </div>
              <div className="col-6">
                  {/* <label>Confirmar senha</label> */}
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} id="confirmpassword" className="form-control" placeholder='Confirmar senha' onChange={handleChange}/>
              </div>
          </div>
          
          <div className="col-5 d-flex justify-content-center mt-5">
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

