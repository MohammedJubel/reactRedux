import React, { Component } from "react";
import TrainsData from "../data/results.json";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";

class Listview extends Component {
  state = {
    ticketsInfo: []
  };

  componentDidMount() {
    this.setState({ ticketsInfo: TrainsData });
  }
  render() {
    const { ticketsInfo } = this.state;
    console.log(ticketsInfo, "ticketsInfo");
    // console.log(TrainsData, "hi");
    return (
      <div>
        <h1>Train Tickets</h1>
        {ticketsInfo.map((info, index) => {
          //   console.log(info, "info");
          return (
            <div>
              <h1>Adults:{info.Adults}</h1>
              <h1> Price:£{info.Co2Produced}</h1>

              <h1>Departure Date :{info.DepDate}</h1>
              <h1>Departure Time :{info.DepTime}am</h1>
              <h1>
                Departure Station:{info.DepStationCodeFull} (
                {info.DepStationCode})
              </h1>

              <h1>Arrival Time:{info.ArrTime}pm</h1>
              <h1>
                Arrival Station:{info.ArrStationCodeFull}({info.ArrStationCode})
              </h1>
              <h1>Seating Class:{info.MaxClass}</h1>

              <h1>
                Number of Legs
                {info.Legs.map((leg, index) => {
                  console.log(index, "index"); //for loop
                })}
              </h1>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  posts: state
});
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Listview);

// 1.  Create a fresh react project to use X
// 2.  Add redux with a single reducer.
// 3.  Create a single page app with a ListView or similar component.
// 4.  Load the rail results in the supplied results.json file, parse the json to get tickets , ticket prices, depart times , number of legs etc
// 5.  Load the parsed results into some object in the redux store and display as a list of available tickets with useful info (price, time etc)
// 6.  Add a button that will toggle the tickets display by price/time.
