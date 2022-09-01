import React from "react";

const Informacion = (props) => {
  return (
    <div className="container-informacion">
      <h2>Información</h2>
      <br/>
      <p>{props.data}</p>
    </div>
  );
};

export default Informacion;
