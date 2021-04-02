import React, { Component } from "react";
import { Query } from "react-apollo";
import { GET_TOP_SELLERS } from "../../graphql/queries";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
class Sellers extends Component {
  state = {
    graphicWidth: 400,
    graphicHeight: 300,
  };

  handleSizeScreen = () => {
    let width, height;
    if (window.innerWidth < 400) {
      width = 300;
      height = 200;
    } else if (window.innerWidth > 400 && window.innerWidth < 768) {
      width = 450;
      height = 350;
    } else {
      width = 650;
      height = 550;
    }

    this.setState({
      graphicWidth: width,
      graphicHeight: height,
    });
  };

  componentDidMount() {
    this.handleSizeScreen();
    window.addEventListener("resize", () => {
      this.handleSizeScreen();
    });
  }

  render() {
    return (
      <Query query={GET_TOP_SELLERS} pollInterval={500}>
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (loading) return "Loading...";
          if (error) return `Error: ${error.message}`;

          const topSellersGraphic = [];

          data.topSellers.map((order, index) => {
            topSellersGraphic[index] = {
              ...order.seller[0],
              total: order.total,
            };
          });

          return (
            <div className="grid grid-cols-12">
              <div className="col-span-10 col-start-2 flex justify-center mb-6">
                <BarChart
                  width={this.state.graphicWidth}
                  height={this.state.graphicHeight}
                  data={topSellersGraphic}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="total" fill="#10a98b" />
                </BarChart>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Sellers;
