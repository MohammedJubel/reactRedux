import React, { Component } from "react";
import { connect } from "react-redux";

class ListView extends Component {
  render() {
    let tickets = this.props.tickets;
    console.log(tickets[0], "props");

    if (tickets.length > 0) {
      tickets = tickets.map((ticket, index) => {
        const {
          Adults,
          Price,
          Seating,
          DepDate,
          DepTime,
          DepCode,
          DepStation,
          Arrival,
          ArrCode,
          Arrstation,
          NumLegs
        } = ticket[0];
        return (
          <div key={index}>
            <p>Adults:{Adults}</p>
            <p> Price:£{Price}</p>
            <p>Seating Class:{Seating}</p>

            <p>Departure Date :{DepDate}</p>
            <p>Departure Time :{DepTime}am</p>
            <p>
              Departure Station:{DepStation} ({DepCode})
            </p>

            <p>Arrival Time:{Arrival}pm</p>
            <p>
              Arrival Station:{Arrstation}({ArrCode})
            </p>

            <p>Number of Legs: {NumLegs}</p>
            <hr />
          </div>
        );
      });
      this.onClick = () => {
        let ticket = "sd";
      };
    }

    return (
      <div>
        <h1>Train Tickets</h1>
        <button onClick={this.onClick}>Sort By Date</button>
        <button onClick={this.onClick}>Sort By Price</button>

        {tickets}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets
});

export default connect(mapStateToProps)(ListView);

// 1.  Create a fresh react project to use X
// 2.  Add redux with a single reducer.
// 3.  Create a single page app with a ListView or similar component.
// 4.  Load the rail results in the supplied results.json file, parse the json to get tickets , ticket prices, depart times , number of legs etc
// 5.  Load the parsed results into some object in the redux store and display as a list of available tickets with useful info (price, time etc)
// 6.  Add a button that will toggle the tickets display by price/time.
