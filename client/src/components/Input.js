import React, { Fragment, useState } from 'react';

const Input = () => {

    const [name, setName] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
      try {

          const body = { name };
          await fetch("http://3.83.161.56:5000/add", {
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
      <h2 align="center">Employee Table</h2>
      <br></br>
  </Fragment>
  );
};

export default Input;
