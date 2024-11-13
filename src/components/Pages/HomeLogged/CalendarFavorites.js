import "./CalendarFavorites.css";
import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios";
import Cookies from "js-cookie";

function CalendarFavorites() {
  const [data, setData] = useState([]);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(code) {
    try {
      const email = Cookies.get("email");

      var data = {
        userEmail: email,
      };

      const response = await axios.post(
        "http://localhost:3030/chatterbot/getFavoritesCalendar",
        data
      );

      if (response.data.linksCustom != undefined) {
        setHasData(true);
        setData(response.data.linksCustom);
      } else {
        setHasData(false);
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  const events = [];

  if (data && data.length > 0 && hasData) {
    data.forEach(function (event) {
      let newDateStruct = event.date.split("/");
      let newDate =
        newDateStruct[2] + "-" + newDateStruct[1] + "-" + newDateStruct[0];

      if (event.previewLink) {
        events.push({
          title: event.code + " - Balanço trimestral",
          date: newDate,
          description: "Demonstração financeira",
          url: event.previewLink,
        });
      }

      if (event.downloadLink) {
        events.push({
          title: event.code + " - Demonstrativo de resultados",
          date: newDate,
          description: "Download de resultados",
          url: event.downloadLink,
        });
      }
    });
  }

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
    <>
      <div className="favs-calendar-tickers">
        <span className="title-favs">Calendário de favoritos</span>

        <div>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventContent={eventContent}
            eventClick={handleEventClick}
          />
        </div>
      </div>
    </>
  );
}

export default CalendarFavorites;
