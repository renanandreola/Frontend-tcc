import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function MyCalendar() {
  const events = [
    {
      title: 'Evento 1',
      date: '2023-09-25',
      description: 'Esta é a descrição do Evento 1.',
    },
    {
      title: 'Evento 2',
      date: '2023-09-28',
      description: 'Esta é a descrição do Evento 2.',
    },
  ];

  const eventContent = ({ event }) => {
    return (
      <div>
        <b>{event.title}</b>
        <p>{event.extendedProps.description}</p>
      </div>
    );
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={eventContent}
      />
    </div>
  );
}

export default MyCalendar;
