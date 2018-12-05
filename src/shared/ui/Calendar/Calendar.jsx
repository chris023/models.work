import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

const localizer = BigCalendar.momentLocalizer(moment);
const dummyEvents = [
  {
    allDay: false,
    end: new Date('December 09, 2017 20:00:00'),
    start: new Date('December 09, 2017 06:00:00'),
    title: 'hi',
  }
]

export default class Calendar extends Component {
  render() {
    return (
      <div>
        <BigCalendar
          localizer={localizer}
          events={dummyEvents}
          views={['day', 'week', 'month']}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    );
  }
}