import React, { useState, useEffect } from 'react';
import './FavoriteTickers.css';
import Cookies from 'js-cookie';
import axios from 'axios';
import Message from "../../layout/Message";

function FavoriteTickers() {
    const [data, setData] = useState([]);

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

    useEffect(() => {
        getFavorites();
    }, []);

    async function getFavorites() {
        try {
            const email = Cookies.get('email');

            var data = {
                userEmail: email
            }
        
            const response = await axios.post('http://localhost:3030/chatterbot/getFavorites', data)

            console.log("favs: ", response);
          
            setData(response.data.favorites);
            
        } catch (error) {
          console.error('Erro:', error);
        }
    }

    const removeTicker = async (id) => {
 
        console.log(id);
        var data = {
            id: id
        }
    
        const response = await axios.post('http://localhost:3030/chatterbot/removeFavorite', data)
      
        if (response.data.status == 500) {
            setshowMessageInvalid(true);
        }

        if (response.data.status == 200) {
            window.location.reload()
            // setshowMessageValid(true);
        }
    }

    return (
        <>
        {showMessageValid && <Message valid={true} message={'Ativo removido dos favoritos'} />}
        {showMessageInvalid && <Message valid={false} message={'Erro removido dos favoritos'} />}

        <div className="favorite-tickers">
            <span className='title-favs'>Ativos favoritos</span>

            {data &&
                data.map((action) => (
                <div className="active" key={action.code}>
                    <div className="name">
                        <span className="name-ticker">{action.code} - {action.name}</span>
                    </div>
                    <div className="btn">
                        <button className='button-remove' onClick={() => removeTicker(action._id)}>
                            <img className='img-remove' src='https://cdn-icons-png.flaticon.com/512/1828/1828843.png'></img>
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default FavoriteTickers;