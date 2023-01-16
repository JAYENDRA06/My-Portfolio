import React, { useRef, useState } from "react";
import Background3 from "./Background3";
import Form from "./Form";
import Socials from "./Socials";
import emailjs from "@emailjs/browser";

function Section5() {
  const form = useRef();

  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j6wznba",
        "template_cowoddl",
        form.current,
        "wTR9fjZxV9eibuy3u"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setFormValues({
        user_name: "",
        user_email: "",
        message: ""
      });
  };
  return (
    <div className="section5" id="contact">
      <Socials />
      <h1>contact Me</h1>
      <Background3 />
      <Form formValues={formValues} setFormValues={setFormValues} form={form} sendEmail={sendEmail} />
    </div>
  );
}

export default Section5;
