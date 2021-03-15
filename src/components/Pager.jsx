import React, { Component } from "react";

class Pager extends Component {
  state = {};
  render() {
    const { page } = this.props;
    const btnPrevious =
      page > 1 ? (
        <button
          type="button"
          className="text-2xl text-white pb-1 flex justify-center items-center bg-green-400 hover:bg-green-500 rounded-full h-8 w-8 sm:h-10 sm:w-10 mr-2"
        >
          &laquo;
        </button>
      ) : (
        ""
      );
    const currentPage =
      page > 0 ? (
        <div className="border rounded-full text-sm font-bold text-white h-8 w-8 sm:h-10 sm:w-10 bg-green-300 flex justify-center items-center">
          {page}
        </div>
      ) : (
        ""
      );
    return (
      <div className="mt-5 flex justify-center sm:justify-end text-tiny">
        {btnPrevious}
        {currentPage}
      </div>
    );
  }
}

export default Pager;
