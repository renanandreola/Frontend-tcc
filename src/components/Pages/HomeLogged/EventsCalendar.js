import './EventsCalendar.css';
import React, { useEffect, useState, useRef, memo } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function EventsCalendar() {

    const [data, setData] = useState([]);
    const [hasData, setHasData] = useState(false);

    useEffect(() => {
      fetchData();
    },[]);

    async function fetchData(code) {
        try {
            const email = Cookies.get('email');

            var dataQuery = {
                userEmail: email
            }

            const response = await axios.post('http://localhost:3030/chatterbot/getFavoritesCalendar', dataQuery);
        
            // console.log("calendar: ", response.data.linksCustom);

            if (response.data.linksCustom != undefined) {
                setHasData(true);
                setData(response.data.linksCustom);
            } else {
                setHasData(false);
            }
        
        } catch (error) {
          console.error('Erro:', error);
        }
    }

    const events = [
    //     {
    //       title: 'Evento 1',
    //       date: '2023-09-25',
    //       description: 'Esta é a descrição do Evento 1.',
    //     },
    //     {
    //       title: 'Evento 2',
    //       date: '2023-09-28',
    //       description: 'Esta é a descrição do Evento 2.',
    //     },
    ];

    // console.log("data:::::: ", hasData);

    if(data && data.length > 0 && hasData) {
        data.forEach(function (event) {
            let newDateStruct = event.date.split('/');
            let newDate = newDateStruct[2] + '-' + newDateStruct[1] + '-' + newDateStruct[0];
            // console.log('newDate: ', newDate);
        
            if (event.previewLink) {
                events.push(
                    {
                        title: event.code + ' - Balanço trimestral',
                        date: newDate,
                        description: 'Demonstração financeira',
                        url: event.previewLink
                    },
                )
            }
        
            if (event.downloadLink) {
                events.push(
                    {
                        title: event.code + ' - Demonstrativo de resultados',
                        date: newDate,
                        description: 'Download de resultados',
                        url: event.downloadLink
                    },
                )
            }
        
        });
    }
    
    // console.log("events renan: ", events);

    const dataFiltrada = events.filter((obj) => {
        const objDate = new Date(obj.date);
        const dataLimite = new Date("2023-01-01");
      
        return objDate > dataLimite;
    });
      
    // console.log('dataFiltrada: ', dataFiltrada);

    if (hasData) {
        return (
            <div className="pj-tickers calendar">
                <span className="title-favs">Últimos eventos dos favoritos</span>
                
                <div className="active pj">
                    <div className="name">
                        <span className="name-ticker">
                            Total de eventos: {events.length}
                        </span>
                    </div>
                </div>
                <br></br>
                {dataFiltrada.length > 0 ? (
                dataFiltrada.map((event, index) => (
                    <div className='active pj'>
                        <div className="name">
                            <span className="name-ticker custom-font">
                                {event.title} - <a href={event.url} target='_blank'>Veja aqui</a>
                            </span>
                        </div>
                    </div>
                ))
                ) : (
                    <p>Carregando dados...</p>
                )}
    
            </div>
        ); 
    } else {
        return (
            <div className="pj-tickers calendar">
                <span className="title-favs">Últimos eventos dos favoritos</span>
                
                <div className="active pj">
                    <div className="name">
                        <span className="name-ticker">
                           Sem eventos
                        </span>
                    </div>
                </div>
    
            </div>
        );
    }
}

export default EventsCalendar;
