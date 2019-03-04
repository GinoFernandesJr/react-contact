import React, { Component } from "react";

class ContactItem extends Component {
state = {
      contacts: [
        {
          name: "Gino Fernandes",
          phone: "555-555-5555",
          email: "Test@example.com",
          skills: "JavaScript, Python"
        },
        {
          name: "Chris Smith",
          phone: "555-555-5555",
          email: "Test@example.com",
          skills: "JavaScript, Python"
        },
        {
          name: "Gino Fernandes",
          phone: "555-555-5555",
          email: "Test@example.com",
          skills: "JavaScript, Python"
        }
      ]
    };
    contacts = this.state.contacts.map(function(data) {
        return (
          <tr>
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td>{data.skills}</td>
          </tr>
    )
    });
  

  render() {
    return (
          <div>
             {this.contacts}
          </div>
    )
  }
}


export default ContactItem;
