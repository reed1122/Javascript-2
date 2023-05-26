import React from 'react'

function NameList() {
    const names = ["2pac", "Corey", "Biggie", "Hayden", "Grant"];
   // const nameList = names.map(name => <h1>{name}</h1>);
  return (
  <div>
    {names.map((name, index) => (
        <h1 key={index}>{name}</h1>
    ))}
    </div>
 );   
}

export default NameList