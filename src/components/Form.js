import React from "react";

function Form(props) {

  function updateValues(event) {
    const {name, value} = event.target;
    props.setFormValues((prevValue) => ({
        ...prevValue,
        [name]: value
    }));
  }

  return (
    <form className="contactForm" ref={props.form} onSubmit={props.sendEmail}>
      <div>
        <p>Name: </p>
        <input
          name="user_name"
          type="text"
          placeholder="Jayendra Awasthi"
          value={props.formValues.user_name}
          onChange={updateValues}
          required
        />
      </div>
      <div>
        <p>Email: </p>
        <input
          type="email"
          name="user_email"
          placeholder="youremail@email.com"
          value={props.formValues.user_email} 
          onChange={updateValues}
          required
        />
      </div>
      <div>
        <p>Message:</p>
        <textarea
          name="message"
          placeholder="let’s have a coffee and spoil some attack on titan’s episodes"
          value={props.formValues.message} 
          onChange={updateValues}
          required
        ></textarea>
      </div>

      <div>
        <p> </p>
        <button type="submit" value="Send">
          Send
        </button>
      </div>
    </form>
  );
}

export default Form;
