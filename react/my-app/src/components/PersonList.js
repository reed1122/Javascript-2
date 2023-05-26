import React from "react";
import Person from "./Person";

function PersonList() {
  const persons = [
    { id: 1, name: "Corey", title: "Web Developer" },
    { id: 2, name: "Hayden", title: "Web Designer" },
  ];
  const personList = persons.map((person) => (
  <Person key={person.id} person={person}/>
  ));
  return <div>{personList}</div>;
}

export default PersonList;
