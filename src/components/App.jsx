import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        image={contacts[0].imgURL}
        phoneNum={contacts[0].phone}
        emailId={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        image={contacts[1].imgURL}
        phoneNum={contacts[1].phone}
        emailId={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        image={contacts[2].imgURL}
        phoneNum={contacts[2].phone}
        emailId={contacts[2].email}
      />
    </div>
  );
}

export default App;
