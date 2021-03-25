import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { GET_CUSTOMER_QUERY } from "../../graphql/queries";
import profileImage from "../../assets/profile.jpg";

const CustomerCard = ({ id }) => {
  return (
    <Fragment>
      <h2 className="text-center my-4 font-bold text-2xl">Customer</h2>
      <Query query={GET_CUSTOMER_QUERY} variables={{ id: id }} pollInterval={500}>
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (loading) return "Cargando...";
          if (error) return `Error: ${error.message}`;

          const { name, lastName, age, emails, company, type } = data.getCustomer;
          return (
            <Fragment>
              <div className="w-full flex justify-center items-center">
                <img src={profileImage} alt="image profile" width="100" />
              </div>

              <ul>
                <li className="font-bold text-center mt-3">
                  Name: <span className="ml-2 font-light">{name}</span>
                </li>
                <li className="font-bold text-center mt-3">
                  LastName: <span className="ml-2 font-light">{lastName}</span>
                </li>
                <li className="font-bold text-center mt-3">
                  Age: <span className="ml-2 font-light">{age}</span>
                </li>
                <li className="font-bold text-center mt-3">
                  Company: <span className="ml-2 font-light">{company}</span>
                </li>
                <li className="font-bold text-center mt-3">
                  Type: <span className="ml-2 font-light">{type}</span>
                </li>
                {emails.map((item, index) => {
                  return (
                    <li key={index} className="font-bold text-center mt-3">
                      Email {index + 1}:
                      <span className="ml-2 font-light">{item.email}</span>
                    </li>
                  );
                })}
              </ul>
            </Fragment>
          );
        }}
      </Query>
    </Fragment>
  );
};
export default CustomerCard;
