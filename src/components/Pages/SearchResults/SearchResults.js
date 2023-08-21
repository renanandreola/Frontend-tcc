import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../layout/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    console.log("location", location);

    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData(location.state.searchTerm);
    }, []);
  
    async function fetchData(searchTerm) {
      try {
        let search = {
            searchTerm: searchTerm
        }
        const response = await axios.post('http://localhost:3030/chatterbot/searchResults', search);
        console.log("response: ", response);
        setData(response.data.results);
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
            <div className="row">
                {data && (
                    data.map((result) => (
                            <div className="col-sm-6">
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{ result.code }</h5>
                                    <p className="card-text">{ result.name }</p>
                                    <button className="btn btn-primary" onClick={() => goToAction(result.code, result.name)}>Ver ativo</button>
                                </div>
                                </div>
                            </div>
                    ))
                    )}
                    </div>
            </>
        );
    } else {
        return (
            <>
            <Header></Header>
            <h1>Carregando...</h1>
            </>
        );
    }

};
