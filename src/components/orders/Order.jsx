import React from "react";
import { GET_PRODUCT_QUERY } from "../../graphql/queries";
import { Query } from "react-apollo";
import ProductSummary from "./ProductSummary";

const Order = (props) => {
  const { order } = props;

  const date = new Date(Number(order.date));

  return (
    <div className="col-span-12 sm:col-span-4 gap-4 border border-green-300 rounded shadow p-4">
      <div>
        <div>
          <p className="font-bold">
            Status:
            <select value={order.status} className="my-3 block border w-full">
              <option value="PENDING">PENDING</option>
              <option value="COMPLETED">COMPLETED</option>
              <option value="CANCELLED">CANCELLED</option>
            </select>
          </p>
          <p className="font-bold">
            Order ID: <span className="font-light ml-2">{order.id}</span>
          </p>
          <p className="font-bold">
            Order Date:
            <span className="font-light ml-2">{date.toLocaleString("es-AR")}</span>
          </p>
          <p className="font-bold">
            Total: <span className="font-light ml-2">$ {order.total}</span>
          </p>

          <h3 className="text-center mb-3 text-xl">Order items</h3>
          {order.order.map((product, index) => {
            return (
              <Query
                query={GET_PRODUCT_QUERY}
                key={index}
                variables={{ id: product.id }}
              >
                {({ loading, error, data }) => {
                  if (loading) return "cargando...";
                  if (error) return `Error: ${error.message}`;

                  return (
                    <ProductSummary
                      product={data.getProduct}
                      quantity={product.quantity}
                      key={product.id}
                    />
                  );
                }}
              </Query>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Order;