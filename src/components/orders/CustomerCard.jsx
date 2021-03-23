import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { GET_CUSTOMER_QUERY } from "../../graphql/queries";

const CustomerCard = ({ id }) => {
  return (
    <Fragment>
      <h2 className="text-center my-5 uppercase font-bold text-2xl">
        Customer Card
      </h2>
      <Query query={GET_CUSTOMER_QUERY} variables={{ id: id }} pollInterval={500}>
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (loading) return "Cargando...";
          if (error) return `Error: ${error.message}`;

          const { name, lastName, age, emails, company, type } = data.getCustomer;
          return (
            <ul>
              <li className="font-bold">
                Name: <span className="ml-2 font-light">{name}</span>
              </li>
              <li className="font-bold">
                LastName: <span className="ml-2 font-light">{lastName}</span>
              </li>
              <li className="font-bold">
                Age: <span className="ml-2 font-light">{age}</span>
              </li>
              <li className="font-bold">
                Company: <span className="ml-2 font-light">{company}</span>
              </li>
              <li className="font-bold">
                Type: <span className="ml-2 font-light">{type}</span>
              </li>
              {emails.map((item, index) => {
                return (
                  <li key={index} className="font-bold">
                    Email {index + 1}:
                    <span className="ml-2 font-light">{item.email}</span>
                  </li>
                );
              })}
            </ul>
          );
        }}
      </Query>
    </Fragment>
  );
};
export default CustomerCard;
