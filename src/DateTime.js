
import React, { Component } from "react";
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';

export default class MoodEditor extends Component {
  constructor(props) {
    super(props);
 this.state = { date: '' };
 }

handleChange = (selectedDates, date, instance) => {
    this.setState({ date });
   }

   render() {
     return (
 <>
 <Flatpickr
     options={{
       enableTime: true,
       time_24hr: true,
        dateFormat: "m-d-Y H:i",
       }}
        onChange={this.handleChange}
        value={this.state.date}
        />
            </>
 );
}
}

