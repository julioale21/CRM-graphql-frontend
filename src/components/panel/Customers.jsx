import React, { Component } from "react";
import { Query } from "react-apollo";
import { GET_TOP_CUSTOMERS } from "../../graphql/queries";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const datos = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

class Customers extends Component {
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
      <Query query={GET_TOP_CUSTOMERS} pollInterval={500}>
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (loading) return "Loading...";
          if (error) return `Error: ${error.message}`;

          const topCustomersGraphic = [];

          data.topCustomers.map((order, index) => {
            topCustomersGraphic[index] = {
              ...order.customer[0],
              total: order.total,
            };
          });

          return (
            <div className="grid grid-cols-12">
              <div className="col-span-10 col-start-2 flex justify-center">
                <BarChart
                  width={this.state.graphicWidth}
                  height={this.state.graphicHeight}
                  data={topCustomersGraphic}
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
                  <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Customers;
