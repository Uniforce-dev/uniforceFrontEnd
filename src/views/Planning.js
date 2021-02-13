import React, { Component } from "react";
import DayPlan from "../views/DayPlan";
import "../assets/jss/Planning.css";

class Planning extends Component {
  constructor() {
    super();
    // this.getCurrentWeek = this.getCurrentWeek.bind(this);
    this.state = {
      currentWeek: [],
      formatedWeek: [],
      // gamersList: []
      // gamersList: gamersInfos
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
  }

  getCurrentWeek() {
    let currentWeek = [];
    // CURRENT DAY
    // let currentDay = new Date()
    let currentDay = new Date(2042, 1, 19);
    console.log("currentDay", currentDay);
    let dayNb = currentDay.getDay();

    for (var i = 0; i < 7; i++) {
      // let idate = new Date()
      let idate = new Date(2042, 1, 19);
      // console.log("i", i, dayNb);

      // COMMENCER LE DIMANCHE
      // if (i !== dayNb) {
      // idate.setDate(currentDay.getDate() + (i - dayNb))
      // }

      //  COMMENCER LE LUNDI
      console.log("i", i, dayNb, i - (dayNb - 1));
      idate.setDate(currentDay.getDate() + (i - (dayNb - 1)));

      currentWeek[i] = idate;
    }
    console.log("currentWeek", currentWeek);

    this.formatWeek(currentWeek);
    return currentWeek;
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
        // let dayName = daysOfWeek[`${day.getDay()}`]
        // let month = months[`${day.getMonth()}`]
        // console.log("format day", dayName, day.getDate(), month)
        return {
          name: daysOfWeek[`${day.getDay()}`],
          number: day.getDate(),
          month: months[`${day.getMonth()}`],
        };
      }),
    });
  }

  render() {
    console.log("formatedWeek", this.state.formatedWeek);
    const formatedDays = this.state.formatedWeek.map((day) => (
      <DayPlan key={day.index} day={day} />
    ));

    return (
      <div className="planning">
        {/* <h2>COMING SOON</h2> */}
        <h2>LE PLANNING</h2>
        {/* <div className="hebdo"> */}
          <div className="hebdo-plan">{formatedDays}</div>
        </div>
      // </div>
    );
  }
}

export default Planning;
