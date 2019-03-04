import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <div className="ContactForm">
        <h1 id="title">Contacts</h1>
        <input id="name" className="input" type="text" placeholder="name" />
            <input
              id="phone"
              className="input"
              type="text"
              placeholder="phone"
            />
            <input
              id="email"
              className="input"
              type="text"
              placeholder="email"
            />
            <input
              id="skills"
              className="input"
              type="text"
              placeholder="skills"
            />
            <a className="button">Submit</a>
        </div>
    );
  }
}

export default ContactForm;
