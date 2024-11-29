import { Calendar } from "@fullcalendar/core";
import iCalendarPlugin from "@fullcalendar/icalendar";
import timeGridPlugin from "@fullcalendar/timegrid";

document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  const calendar = new Calendar(calendarEl, {
    plugins: [iCalendarPlugin, timeGridPlugin],
    events: {
      format: "ics",
      url: "newcal.ics",
    },
    headerToolbar: {
      left: "prev,next today helpButton",
      center: "title",
      right: "",
    },
    contentHeight: "auto",
    dayHeaderFormat: { weekday: "short", day: "numeric" },
    slotLabelFormat: {
      hour: "2-digit",
      meridiem: false,
      hour12: false,
    },
    eventTimeFormat: {
      hour: "2-digit",
      minute: "2-digit",
      meridiem: false,
      hour12: false,
    },
    eventColor: "#5f748f",
    defaultRangeSeparator: "–",
    titleFormat: { year: "numeric", month: "long" },
    firstDay: 1,
    allDaySlot: false,
    expandRows: true,
    initialView: "timeGridWeek",
    nowIndicator: true,
    customButtons: {
      helpButton: {
        text: "Help! ㉄🙋⁉️🤯🙀🤷 wat",
        click: function () {
          document.querySelector("#helpModal").showModal();
        },
      },
    },
  });
  calendar.render();

  document
    .querySelector("#closeHelpModal")
    .addEventListener("click", function (e) {
      document.querySelector("#helpModal").close();
    });
});
