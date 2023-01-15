import React from "react";

function Form() {
  return (
    <form className="contactForm" onSubmit="">
      <div>
        <p>Email: </p>
        <input
          name="email"
          type="email"
          placeholder="jayendraawasthi06@gmail.com"
        />
      </div>
      <div>
        <p>Subject: </p>
        <input name="Subject" type="text" placeholder="let’s have a coffee" />
      </div>
      <div>
        <p>Content:</p>
        <textarea
          name="content"
          placeholder="and spoil some attack on titan’s episodes"
        ></textarea>
      </div>
    </form>
  );
}

export default Form;
