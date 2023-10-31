import React, {useState, useEffect} from "react";
import './Login.css';
import Header from "../../layout/Header";
import axios from 'axios';
import Cookies from 'js-cookie';
import Message from "../../layout/Message";

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
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

    const createLogin = async (event) => {
        event.preventDefault();
        try {
            console.log("formData", formData);
            
            var data = {
                email: formData.email,
                password: formData.password
            }
    
            const response = await axios.post('http://localhost:3030/chatterbot/login', data)
      
            console.log("response", response);

            if (response.data.status == 500) {
                setshowMessageInvalid(true);
            }

            if (response.data.status == 200) {
                setshowMessageValid(true);

                // Obtenha o tempo atual em milissegundos
                const currentTime = new Date().getTime();

                // Defina a expiração para 10 minutos a partir do tempo atual
                const tenMinutesFromNow = new Date(currentTime + 50 * 60 * 1000); // 10 minutos em milissegundos
                
                Cookies.set('token', response.data.token, { expires: tenMinutesFromNow });
                Cookies.set('email', response.data.email, { expires: tenMinutesFromNow });

                const token = Cookies.get('token');
                const email = Cookies.get('email');
    
                console.log(token);
                console.log(email);

                window.location.pathname = "/home"
            }

            setFormData({ 
                email: '',
                password: '',
            })
          
        } catch (error) {
            setshowMessageInvalid(true);

            setFormData({
                email: '',
                password: '',
            })
        }
    };

    return (
        <>
        <Header></Header>
    
        {showMessageValid && <Message valid={true} message={'Bem vindo!'} />}
        {showMessageInvalid && <Message valid={false} message={'Login inválido'} />}
  
        <div className="content-login">
            <div className="logo-content">
                <img src='https://img.freepik.com/fotos-premium/bolsa-de-valores-grafico-de-precos-criptomoeda-em-uma-tela-grafico-de-velas-btc-mercado-de-cambio-online-negociacao-licitacao-rastreando-a-taxa-de-criptomoeda-4-k-fechar-se_130265-9837.jpg'></img>
            </div>
            <div className="login-info">
                <div>
                    <span className="title-login">Entre ou crie sua conta</span>
                </div>
                <hr></hr>
                <form onSubmit={createLogin}>
                    <div className="row">
                        <div className="col-12">
                            {/* <label>E-mail</label> */}
                            <input type="email" name="email" value={formData.email} id="email" className="form-control mb-4" placeholder='E-mail' onChange={handleChange}/>
                        </div>
                        <div className="col-12">
                            {/* <label>Senha</label> */}
                            <input type="password" name="password" value={formData.password} id="password" className="form-control" placeholder='Senha' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-4 d-flex justify-content-center">
                            <button type="submit" className="btn btn-success" onclick="login()">Entrar</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-2 d-flex justify-content-center">
                            <a className='create-account-a' href='/register'>
                                <button type="button" className="btn btn-outline-secondary">Criar uma conta</button>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default Login;