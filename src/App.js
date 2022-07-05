import React from 'react';

function App() {
  return (
    <React.Fragment>
      {/* <div className='header'>
        <div>
          Phone Directory
        </div>
        <button> Add </button>
        <div>
          <span> Name </span><br />
          <span> Phone </span>
        </div>
      </div> */}
      <label htmlFor="name"> Name: </label>
      <input id="name" type="text" placeholder="Type here" defaultValue="Shubh"/>
    </React.Fragment>
  );
}

export default App;
