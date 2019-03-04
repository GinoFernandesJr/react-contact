import React, { Component } from "react";
import ContactItem from "./contact-item";

class ContactList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ContactList">
        <h1 id="title">Contacts</h1>
        <table className="table is-striped">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Skills</th>
            </tr>
            <ContactItem />
        </table>
      </div>
    );
  }
}

export default ContactList;
