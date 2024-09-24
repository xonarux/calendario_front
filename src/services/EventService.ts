export interface Event {
  id: number;
  name: string;
  fecha: string;
  hour: string;
  place: string;
  capacitador: string;
  link_inscription: string;
}

export const getEvents = async (): Promise<{ data: Event[] }> => {
  const response = await fetch("http://localhost:5000/api/events");
  return response.json();
};

export const createEvent = async (event: Omit<Event, "id">) => {
  await fetch("http://localhost:5000/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
};

// Funciones para updateEvent y deleteEvent seguirían un patrón similar
