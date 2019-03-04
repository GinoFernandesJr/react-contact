import React, { Component } from "react";
import "./App.css";
import ContactList from "./components/contact-list";
import ContactForm from "./components/contact-form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 id="title">Contacts</h1>
        <div className="columns">
          <div className="column">
            <ContactForm/>
          </div>
          <div className="column">
            <ContactList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
