import React, { Fragment, useState } from 'react';

const Input = () => {

    const [name, setName] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
      try {

          const body = { name };
          await fetch("http://3.93.174.113:5000/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
          });

          window.location = "/";



      } catch (error) {
          console.error(error.message)
      }
    };

  return (
  <Fragment>
      {" "}
      <br />
      <h2 align="center">Employees Data</h2>
      <br></br>
  </Fragment>
  );
};

export default Input;
