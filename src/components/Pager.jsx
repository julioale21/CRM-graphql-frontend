import React, { Component } from "react";

class Pager extends Component {
  state = {
    pager: {
      pages: Math.ceil(Number(this.props.totalCustomers) / this.props.limit),
    },
  };
  render() {
    const { page } = this.props;
    const { pages } = this.state.pager;

    const btnPrevious =
      page > 1 ? (
        <button
          onClick={this.props.previousPage}
          type="button"
          className="btn text-white flex justify-center items-center bg-green-400 hover:bg-green-500 mr-2"
        >
          &laquo; Previous
        </button>
      ) : (
        ""
      );
    const btnNext =
      page !== pages ? (
        <button
          onClick={this.props.nextPage}
          type="button"
          className="btn text-white flex justify-center items-center bg-green-400 hover:bg-green-500 mr-2"
        >
          &raquo; Next
        </button>
      ) : (
        ""
      );
    return (
      <div className="my-5 flex justify-center sm:justify-end text-tiny">
        {btnPrevious}
        {btnNext}
      </div>
    );
  }
}

export default Pager;
