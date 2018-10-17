/* eslint no-unused-vars: 0 */

import { navigate } from "gatsby";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import PropTypes from "prop-types";
import React from "react";
import { FaPhone, FaMap, FaEnvelope, FaMapMarker, FaRoad } from "react-icons/fa/";
const FormItem = Form.Item;
const { TextArea } = Input;
import "antd/lib/form/style/index.css";
import "antd/lib/input/style/index.css";
import "antd/lib/button/style/index.css";
import { ThemeContext } from "../../layouts";

const Contact = props => {
  const { getFieldDecorator } = props.form;

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        sendMessage(values);
      }
    });
  }

  function sendMessage(values) {
    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values })
    })
      .then(() => {
        console.log("Form submission success");
        navigate("/success");
      })
      .catch(error => {
        console.error("Form submission error:", error);
        this.handleNetworkError();
      });
  }

  function handleNetworkError(e) {
    console.log("submit Error");
  }

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <div className="form">
            <h1>
              Adresse
            </h1>
            <br />
            <h3><FaMap size={18} /> Strainovic IT</h3>
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Goran Strainovic</h3>
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bahnstrasse 9b</h3>
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CH-9323 Steinach</h3>
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;St.Gallen (SG)</h3>
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Schweiz</h3>
            <br />
            <br />
            <br />
            <h1>Gerne berate ich dich auch bei mir persönlich</h1>
            <br />
            <h3>
              <FaMapMarker size={18} />
              <a target="_blank" href="https://www.google.com/maps/place/Strainovic+IT/@47.5008767,9.4411352,17z/data=!3m1!4b1!4m5!3m4!1s0x479b1cf2d3e32e4f:0xb09b276dcd03f76c!8m2!3d47.5008767!4d9.4433292?hl=de"
                > Adresse auf Google Maps anzeigen</a>
            </h3>
            <h3>
              <FaRoad size={18} />
              <a target="_blank" href="https://www.google.com/maps/dir//Strainovic+IT,+Bahnstrasse,+Steinach,+Schweiz/@47.5008553,9.3731178,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x479b1cf2d3e32e4f:0xb09b276dcd03f76c!2m2!1d9.4433292!2d47.5008767?hl=de"
                > Route zu mir mit Google Maps planen</a>
            </h3>
            <br />
            <br />
            <br />
            <h2>Mobile</h2>
            <br />
            <h1>
              <FaPhone size={18} />
              <a href="tel:+41 79 411 71 77"> +41 79 411 71 77</a>
            </h1>
            <br />
            <br />
            <br />
            <h2>Email</h2>
            <br />
            <h1>
              <FaEnvelope size={18} />
              <a href="mailto:info@strainovic-it.ch"> info@strainovic-it.ch</a>
            </h1>
            <br />
            <br />
            <br />
            <h1>Ich freue mich auf deine Nachricht</h1>
            <br />
            <Form
              name="contact"
              onSubmit={handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <FormItem label="Ihre E-Mail Adresse">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      required: true,
                      message: "Geben Sie bitte Ihre E-Mail Adresse ein",
                      whitespace: true,
                      type: "email"
                    }
                  ]
                })(<Input name="email" placeholder="Ihre E-Mail Adresse" />)}
              </FormItem>
              <FormItem label="Ihre Mitteilung">
                {getFieldDecorator("message", {
                  rules: [
                    {
                      required: true,
                      message: "Geben Sie bitte eine Mitteilung ein",
                      whitespace: true
                    }
                  ]
                })(
                  <TextArea
                    name="message"
                    placeholder="Ihre Mitteilung"
                    autosize={{ minRows: 4, maxRows: 10 }}
                  />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" size="large" htmlType="submit">
                  Submit
                </Button>
              </FormItem>
            </Form>
            {/* --- STYLES --- */}
            <style jsx>{`
              .form {
                background: transparent;
              }
              .form :global(.ant-row.ant-form-item) {
                margin: 0 0 1em;
              }
              .form :global(.ant-row.ant-form-item:last-child) {
                margin-top: 1em;
              }
              .form :global(.ant-form-item-control) {
                line-height: 1em;
              }
              .form :global(.ant-form-item-label) {
                line-height: 1em;
                margin-bottom: 0.5em;
              }
              .form :global(.ant-form-item) {
                margin: 0;
              }
              .form :global(.ant-input) {
                appearance: none;
                height: auto;
                font-size: 1.2em;
                padding: 0.5em 0.6em;
              }

              .form :global(.ant-form-explain) {
                margin-top: 0.2em;
              }

              @from-width desktop {
                .form :global(input) {
                  max-width: 50%;
                }
              }
            `}</style>
          </div>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  );
};

Contact.propTypes = {
  form: PropTypes.object
};

const ContactForm = Form.create({})(Contact);

export default ContactForm;
