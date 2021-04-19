import React, { Component } from "react";
import DayPlan from "./DayPlan";
import "../../assets/jss/Planning.css";

class Planning extends Component {
  constructor() {
    super();
    this.goPreviousWeek = this.goPreviousWeek.bind(this);
    this.goNextWeek = this.goNextWeek.bind(this);
    this.state = {
      currentWeek: [],
      formatedWeek: [],
      events: [],
    };
  }

  // componentDidMount(){
  //   fetch("http://localhost:8000/team", {
  //         method:'GET'
  //     }).then(res => res.json()).then(data => {
  //       this.setState({
  //         gamersList: data
  //       })
  //   })
  // }

  componentDidMount() {
    this.setState({ currentWeek: this.getCurrentWeek() });
    fetch("http://localhost:8000/api/events", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          events: data["hydra:member"],
        });
        // console.log("this.state.events", this.state.events);
      });
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
        // console.log('here', dayNb)
          idate.setDate(currentDay.getDate() + (i - 6));
      } else {
      //   console.log("idate", idate, i, dayNb, i - (dayNb - 1));
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
      0: "Dimanche",
      1: "Lundi",
      2: "Mardi",
      3: "Mercredi",
      4: "Jeudi",
      5: "Vendredi",
      6: "Samedi",
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
        // console.log('events in format', this.state.events)
        // // add events to each day
        // let dayEvents = this.state.events.filter((event) => {
        //   console.log('day', day, event.date)
        //   return event
        // })
        // console.log(dayEvents)
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
    // console.log("events in render", this.state.events);
    let weekPlan = this.state.formatedWeek.map((day) => {
      let dayEvents = this.state.events.filter((event) => {
        let eventDate = new Date(event.date);
        // console.log(eventDate.toDateString() === day.date.toDateString());
        // console.log("dates", day.date.toDateString(), eventDate.toDateString());
        if (eventDate.toDateString() === day.date.toDateString()) {
          return event;
        }
      });
      // console.log("dayEvents", dayEvents);
      if (dayEvents.length > 0)
        return {
          ...day,
          events: dayEvents,
        };
      else return { ...day, events: [] };
    });
    // console.log("weekPlan", weekPlan);
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
