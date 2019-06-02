import React, { Component } from "react";
import { connect } from "react-redux";

class ListView extends Component {
  state = {
    result: this.props.tickets
  };

  sortPrice = () => {
    const { result } = this.state;
    result.sort((a, b) => a.Price - b.Price);
    this.setState({ result });
  };
  sortTime = () => {
    const { result } = this.state;
    result.sort((a, b) => a.DepTime - b.DepTime);
    this.setState({ result });
  };
  render() {
    // console.log(this.state.result, "hi");
    // console.log(this.props.tickets);

    let tickets = this.state.result;

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
        } = ticket;
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
    }

    return (
      <div>
        <h1>Train Tickets</h1>
        <button onClick={this.sortTime}>Sort By Date</button>
        <button onClick={this.sortPrice}>Sort By Price</button>

        {tickets}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets.flat()
});

export default connect(mapStateToProps)(ListView);
