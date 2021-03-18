import React, { Fragment } from "react";

const NewProduct = () => {
  return (
    <Fragment>
      <h2 className="text-center uppercase font-bold text-2xl">New Product</h2>
      <div className="sm:grid sm:grid-cols-5">
        <form className="sm:col-span-3 sm:col-start-2 m-3">
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              placeholder="Nombre del Producto"
            />
          </div>
          <div className="form-group">
            <label>Precio:</label>
            <div className="flex">
              <span className="border border-2 rounded-l px-4 py-2 bg-gray-300 whitespace-no-wrap">
                $
              </span>
              <input
                type="number"
                name="precio"
                className="form-control"
                placeholder="Precio del Producto"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Stock:</label>
            <input
              type="number"
              name="stock"
              className="form-control"
              placeholder="stock del Producto"
            />
          </div>
          <button type="submit" className="btn btn-success float-right">
            Crear Producto
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default NewProduct;
