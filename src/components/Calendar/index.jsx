import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const initialEvents = [
  { id: 0, title: "All Day Event", allDay: true, start: new Date(2015, 3, 0), end: new Date(2015, 3, 1) },
  { id: 1, title: "Long Event", start: new Date(2015, 3, 7), end: new Date(2015, 3, 10) },
  { id: 2, title: "DTS STARTS", start: new Date(2016, 2, 13), end: new Date(2016, 2, 20) },
  { id: 3, title: "DTS ENDS", start: new Date(2016, 10, 6), end: new Date(2016, 10, 13) },
  { id: 4, title: "Some Event", start: new Date(2015, 3, 9), end: new Date(2015, 3, 10) },
  { id: 5, title: "Conference", start: new Date(2015, 3, 11), end: new Date(2015, 3, 13), desc: "Big conference" },
  { id: 6, title: "Today", start: new Date(new Date().setHours(new Date().getHours() - 3)), end: new Date(new Date().setHours(new Date().getHours() + 3)) },
];
const CalendarPage = () => {
  const [events, setEvents] = useState(initialEvents);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title) setEvents([...events, { start, end, title }]);
  };

  return (
    <div className="w-[1110px] max-w-full px-4 pt-[60px] mx-auto">
      <Calendar
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "500px" }}
        views={["month", "week", "day", "agenda"]}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
    </div>
  );
};

export default CalendarPage;
