import React from 'react';
import Header from './Header'
import "./App.css";

function App() {

  const deleteHandler=()=> {
    alert("delete clicked");
  }

  let subscribers = [
    {
      id: 1,
      name: "Shubh",
      phone: "7777777777"
    },
    {
      id: 2,
      name: "Ranjit",
      phone: "9999999999"
    }
  ];
  return (
    <React.Fragment>
        <Header heading="Phone Directory"/>
       <div className="component-body-cintainer">
        <button className="custom-btn add-btn"> Add </button>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading"> Name </span><br />
          <span className="grid-item phone-heading"> Phone </span>
        </div>
        {
            subscribers.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span class="grid-item action-button-container">
                  <button className="custom-btn delete-btn" onClick={deleteHandler}>Delete</button>
                </span>
              </div>
            })
          }


        </div>
    </React.Fragment>
  );
}

export default App;
