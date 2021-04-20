import React, { Component } from "react";
import DayPlan from "./DayPlan";
import "../../assets/jss/Planning.css";
import eventsList from "../../datas/eventsData"

class Planning extends Component {
  constructor() {
    super();
    this.goPreviousWeek = this.goPreviousWeek.bind(this);
    this.goNextWeek = this.goNextWeek.bind(this);
    this.state = {
      currentWeek: [],
      formatedWeek: [],
      events: eventsList,
    };
  }

  componentDidMount() {
    this.setState({ currentWeek: this.getCurrentWeek() });

  // CALL LOCAL BACK END
  //   fetch("http://localhost:8000/api/events", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({
  //         events: data["hydra:member"],
  //       });
  //     });
  }

  getCurrentWeek() {
    let currentWeek = [];
    // CURRENT DAY
    let currentDay = new Date();
    // TEST other date
    // let currentDay = new Date(2021, 1, 22);
    let dayNb = currentDay.getDay();



    for (var i = 0; i < 7; i++) {
      
      let idate = new Date();
      // TEST other date
      // let idate = new Date(2021, 1, 22);

      // COMMENCER LE DIMANCHE (code de base)
      // if (i !== dayNb) {
      // idate.setDate(currentDay.getDate() + (i - dayNb))
      // }

      //  COMMENCER LE LUNDI (pourrait être mis dans la méthode formatedWeek éventuellement)
      if (dayNb === 0) { // cas particulier si currentday est un dimanche
          idate.setDate(currentDay.getDate() + (i - 6));
      } else {
        idate.setDate(currentDay.getDate() + (i - (dayNb - 1)));
      }
      currentWeek[i] = idate;
    }

    this.formatWeek(currentWeek);

    return currentWeek;
  }

  goPreviousWeek() {
    var prevWeek = this.state.currentWeek.map((day) => {
      let date = new Date(day);
      date.setDate(date.getDate() - 7);
      return date;
    });
    this.setState({ currentWeek: prevWeek });
    this.formatWeek(prevWeek);
  }

  goNextWeek() {
    var nextWeek = this.state.currentWeek.map((day) => {
      let date = new Date(day);
      date.setDate(date.getDate() + 7);
      return date;
    });
    this.setState({ currentWeek: nextWeek });
    this.formatWeek(nextWeek);
  }

  formatWeek(week) {
    let daysOfWeek = {
      0: "DIM",
      1: "LUN",
      2: "MAR",
      3: "MER",
      4: "JEU",
      5: "VEN",
      6: "SAM",
    };

    let months = {
      0: "Janvier",
      1: "Février",
      2: "Mars",
      3: "Avril",
      4: "Mai",
      5: "Juin",
      6: "Juillet",
      7: "Août",
      8: "Septembre",
      9: "Octobre",
      10: "Novembre",
      11: "Décembre",
    };

    this.setState({
      formatedWeek: week.map((day) => {
        // // add events to each day
        // let dayEvents = this.state.events.filter((event) => {
        //   return event
        // })
        return {
          id: `${week.indexOf(
            day
          )}, ${day.getDay()}, ${day.getMonth()}, ${day.getYear()}`,
          date: day,
          name: daysOfWeek[`${day.getDay()}`],
          number: day.getDate(),
          month: months[`${day.getMonth()}`],
        };
      }),
    });
  }

  render() {
    let weekPlan = this.state.formatedWeek.map((day) => {
      let dayEvents = this.state.events.filter((event) => {      
        let eventDate = new Date(event.date);     
        if (eventDate.toDateString() === day.date.toDateString()) {
          return event;
        }
      });
      if (dayEvents.length > 0)
        return {
          ...day,
          events: dayEvents,
        };
      else return { ...day, events: [] };
    });

    const formatedDays = weekPlan.map((day) => (
      <DayPlan key={day.id} day={day} />
    ));

    return (
      <div className="home-planning">
        <h2>LE PLANNING</h2>
        <div className="planning-header">
          <div className="" ></div>
          <div className="buttons">
            <div className="button" onClick={this.goPreviousWeek}>PREVIOUS</div>
            <div className="button" onClick={this.goNextWeek}>NEXT</div>
          </div>
        </div>
        <div className="hebdo-plan">{formatedDays}</div>
        <div className="planning-footer"></div>
      </div>
    );
  }
}

export default Planning;
