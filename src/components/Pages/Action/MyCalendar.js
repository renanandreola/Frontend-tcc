import "./MyCalendar.css";
import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios";

function MyCalendar(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(props.code);
  }, []);

  async function fetchData(code) {
    try {
      let search = {
        code: code,
      };
      const response = await axios.post(
        "http://localhost:3030/chatterbot/getCalendarData",
        search
      );

      setData(response.data.info.dataLinks);
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  const events = [];

  data.forEach(function (event) {
    let newDateStruct = event.date.split("/");
    let newDate =
      newDateStruct[2] + "-" + newDateStruct[1] + "-" + newDateStruct[0];

    if (event.previewLink) {
      events.push({
        title: "Balanço trimestral",
        date: newDate,
        description: "Demonstração financeira",
        url: event.previewLink,
      });
    }

    if (event.downloadLink) {
      events.push({
        title: "Balanço trimestral",
        date: newDate,
        description: "Download de resultados",
        url: event.downloadLink,
      });
    }
  });

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
      window.open(clickInfo.event.url, "_blank");
      clickInfo.jsEvent.preventDefault();
    }
  };

  return (
    <div className="calendar-custom">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        locale={"br"}
        aspectRatio={4.5}
        eventContent={eventContent}
        eventClick={handleEventClick}
      />
    </div>
  );
}

export default MyCalendar;
