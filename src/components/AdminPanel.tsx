import React, { useState, useEffect } from "react";
import { getEvents, createEvent, Event } from "../services/EventService";

const AdminPanel: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [nombre, setNombre] = useState<string>("");
  const [fecha, setFecha] = useState<string>("");
  const [hora, setHora] = useState<string>("");
  const [lugar, setLugar] = useState<string>("");
  const [capacitador, setCapacitador] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [act, setAct] = useState<boolean>(false);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      setEvents(data.data);
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      setEvents(data.data);
    };
    fetchEvents();
    setAct(false);
  }, [act]);

  const limpiar = () => {
    setNombre("");
    setFecha("");
    setHora("");
    setLugar("");
    setCapacitador("");
    setLink("");
  };

  const handleCreateEvent = async (
    nombre: string,
    fecha: string,
    hora: string,
    lugar: string,
    capacitador: string,
    enlace: string
  ) => {
    const newEvent = {
      name: nombre,
      fecha: fecha,
      hour: hora,
      place: lugar,
      capacitador: capacitador,
      link_inscription: enlace,
    };
    const coincidencia = events.find(
      (e) => e.name === nombre && e.place === lugar
    );
    if (coincidencia) {
      alert(
        `Ya existe una capacitación llamada ${newEvent.name} en ${newEvent.place}`
      );
    } else {
      await createEvent(newEvent);
      alert("Evento creado con éxito");
      setAct(true);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Admin Panel</h1>
        <div className="row">
          {/*===================== Nombre del evento =================*/}
          <div className="col-4">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Escriba el nombre del evento"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <label htmlFor="floatingInput">Nombre del evento</label>
            </div>
          </div>
          {/*===================== Fecha del evento =================*/}
          <div className="col-4">
            <div className="form-floating mb-3">
              <input
                type="date"
                className="form-control"
                id="fecha"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
              <label htmlFor="floatingInput">Fecha del evento</label>
            </div>
          </div>
          {/*===================== Hora del evento =================*/}
          <div className="col-4">
            <div className="form-floating mb-3">
              <input
                type="time"
                className="form-control"
                id="hora"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              />
              <label htmlFor="floatingInput">Nombre del evento</label>
            </div>
          </div>
        </div>
        <div className="row">
          {/*===================== Lugar del evento =================*/}
          <div className="col-4">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="lugar"
                placeholder="Escriba el lugar del evento"
                value={lugar}
                onChange={(e) => setLugar(e.target.value)}
              />
              <label htmlFor="floatingInput">Lugar del evento</label>
            </div>
          </div>
          {/*===================== Capacitador del evento =================*/}
          <div className="col-4">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="capacitador"
                placeholder="Escriba el capacitador del evento"
                value={capacitador}
                onChange={(e) => setCapacitador(e.target.value)}
              />
              <label htmlFor="floatingInput">Capacitador del evento</label>
            </div>
          </div>
          {/*===================== Hora del evento =================*/}
          <div className="col-4">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="enlace"
                placeholder="Escriba el enlace de inscripción"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <label htmlFor="floatingInput">Enlace de Inscripción</label>
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary m-2"
          onClick={() =>
            handleCreateEvent(nombre, fecha, hora, lugar, capacitador, link)
          }
          // onClick={() => console.log(events)}
        >
          Crear Evento
        </button>
        <button
          className="btn btn-warning m-2"
          onClick={limpiar}
          // onClick={() => console.log(events)}
        >
          Limpiar
        </button>
        {/* Mostrar y permitir editar/borrar eventos aquí */}
        <table className="table table-striped table-bordered">
          <thead>
            <tr className="text-center">
              <td>#</td>
              <td>Nombre</td>
              <td>Fecha</td>
              <td>Hora</td>
              <td>Lugar</td>
              <td>Capacitador</td>
              <td>Enlace de inscripción</td>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className="text-center">
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>{event.fecha}</td>
                <td>{event.hour}</td>
                <td>{event.place}</td>
                <td>{event.capacitador}</td>
                <td>{event.link_inscription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminPanel;
