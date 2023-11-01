import React, { useEffect, useState, useRef, memo } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';

function MyCalendar(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(props.code);
  },[]);

  async function fetchData(code) {
    try {
      let search = {
        code: code
      }
      const response = await axios.post('http://localhost:3030/chatterbot/getCalendarData', search);

      // console.log("calendar: ", response.data.info.dataLinks);
  
      setData(response.data.info.dataLinks);
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  const events = [
    // {
    //   title: 'Evento 1',
    //   date: '2023-09-25',
    //   description: 'Esta é a descrição do Evento 1.',
    // },
    // {
    //   title: 'Evento 2',
    //   date: '2023-09-28',
    //   description: 'Esta é a descrição do Evento 2.',
    // },
  ];

  data.forEach(function (event) {
    let newDateStruct = event.date.split('/');
    let newDate = newDateStruct[2] + '-' + newDateStruct[1] + '-' + newDateStruct[0];
    // console.log('newDate: ', newDate);

    if (event.previewLink) {
      events.push(
        {
          title: 'Balanço trimestral',
          date: newDate,
          description: 'Demonstração financeira',
          url: event.previewLink
        },
      )
    }

    if (event.downloadLink) {
      events.push(
        {
          title: 'Balanço trimestral',
          date: newDate,
          description: 'Download de resultados',
          url: event.downloadLink
        },
      )
    }

  })

  const eventContent = ({ event }) => {
    return (
      <div>
        <b>{event.title}</b>
        <p>{event.extendedProps.description}</p>
      </div>
    );
  };
  
  const handleEventClick = (clickInfo) => {
    if (clickInfo.event.url) {
      window.open(clickInfo.event.url, '_blank');
      clickInfo.jsEvent.preventDefault(); // Isso impede que o link atual seja redirecionado
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={eventContent}
        eventClick={handleEventClick}
      />
    </div>
  );
}

export default MyCalendar;
