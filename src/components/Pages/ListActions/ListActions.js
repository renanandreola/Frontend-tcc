import './ListActions.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import actions from '../../../data/actionsB3';
import { useNavigate } from 'react-router-dom';
import Header from '../../layout/Header';

export default (props) => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3030/chatterbot/allActives');
        console.log("response: ", response);
        setData(response.data.actives);
      } catch (error) {
        console.error('Erro:', error);
      }
    }

    const goToAction = (code, name) => {
        navigate('/action', { state: { code: code, name: name } });
    };

    if (data.length > 0) {
        return (
            <>
            <Header></Header>

            <h1>Ações cadastradas na B3</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Código</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(action => (
                            <tr key={action.code}>
                                <th scope="row">-</th>
                                <td>{action.code}</td>
                                <td>{action.name}</td>
                                {/* <td><a href='/'>Ver ativo</a></td> */}
                                <td>
                                    <button onClick={() => goToAction(action.code, action.name)}>Ver ativo</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </>
        )
    } else {
        return (
            <>
            <Header></Header>

            <h3>Carregando ações...</h3>
            </>
        )
    }

}