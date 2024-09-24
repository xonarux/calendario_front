import React, { useState, useEffect } from "react";
import { getEvents, Event } from "../services/EventService";

const PublicView: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [month, setMonth] = useState<string>("09"); // Por defecto, mes de septiembre

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      const filteredEvents = data.data.filter((event: Event) =>
        event.fecha.includes(`-${month}-`)
      );
      setEvents(filteredEvents);
    };
    fetchEvents();
  }, [month]);

  return (
    <div>
      <h1>Eventos</h1>
      <label>
        Mes:
        <select onChange={(e) => setMonth(e.target.value)}>
          <option value="09">Septiembre</option>
          <option value="10">Octubre</option>
          {/* Añade más meses aquí */}
        </select>
      </label>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.name} - {event.fecha} - {event.hour}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublicView;
