import React from "react";
import { GET_PRODUCT_QUERY } from "../../graphql/queries";
import { Query, Mutation } from "react-apollo";
import ProductSummary from "./ProductSummary";
import { UPDATE_ORDER_STATUS } from "../../graphql/mutations";
import Swal from "sweetalert2";

const Order = (props) => {
  const { order } = props;
  const { status } = order;
  const date = new Date(Number(order.date));

  let appearance;
  if (status === "PENDING") {
    appearance = "border-yellow-300";
  } else if (status === "CANCELLED") {
    appearance = "border-red-300";
  } else {
    appearance = "border-green-300";
  }

  const handleSelectChanged = (e, updateOrderStatus) => {
    const input = {
      id: order.id,
      order: order.order,
      date: order.date,
      total: order.total,
      status: e.target.value,
      customer: props.customer,
    };

    updateOrderStatus({ variables: { input } });
  };

  const showNotification = (data) => {
    Swal.fire({
      title: "Success!",
      text: data.updateOrderStatus,
      icon: "success",
    });
  };

  return (
    <div
      className={`col-span-12 md:col-span-6 lg:col-span-4 gap-4 border-2 ${appearance} rounded shadow p-4 mb-6`}
    >
      <div>
        <div>
          <p className="font-bold">
            Status:
            <Mutation
              mutation={UPDATE_ORDER_STATUS}
              onCompleted={(data) => showNotification(data)}
            >
              {(updateOrderStatus) => (
                <select
                  onChange={(e) => handleSelectChanged(e, updateOrderStatus)}
                  value={order.status}
                  className={`my-3 block border w-full ${appearance}`}
                >
                  <option value="PENDING">PENDING</option>
                  <option value="COMPLETED">COMPLETED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              )}
            </Mutation>
          </p>
          <p className="font-bold">
            Order ID: <span className="font-light ml-2">{order.id}</span>
          </p>
          <p className="font-bold">
            Order Date:
            <span className="font-light ml-2">{date.toLocaleString("es-AR")}</span>
          </p>
          <h3 className="text-center my-4 text-xl font-bold bg-gray-300">
            Order items
          </h3>
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

          <div className="flex items-center justify-end">
            <p className="font-bold bg-yellow-300 font-white mr-1 p-1">Total:</p>
            <p className="font-light text-md">$ {order.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
