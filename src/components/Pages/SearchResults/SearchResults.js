import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../layout/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from '../../layout/Card';

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
        navigate('/ticker', { state: { code: code, name: name } });
    };

    if (data.length > 0) {
        return (
            <>
                <Header></Header>

                <h1>Ações cadastradas na B3</h1>
            
                <div className='listing-tickers'>
                    {data.map(action => (
                        <Card code={action.code} name={action.name}></Card>
                        // <tr key={action.code}>
                        //     <th scope="row">-</th>
                        //     <td>{action.code}</td>
                        //     <td>{action.name}</td>
                        //     {/* <td><a href='/'>Ver ativo</a></td> */}
                        //     <td>
                        //         <button className='btn btn-primary' onClick={() => goToAction(action.code, action.name)}>Ver ativo</button>
                        //     </td>
                        // </tr>
                    ))}
                </div>
             
            </>
        )
    } else {
        return (
            <>
            <Header></Header>
            <h1>Carregando...</h1>
            </>
        );
    }

};
