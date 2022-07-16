import React, { useState } from "react";

function App() {
  // first text event handling ----------------------------------
  // you need to add .... useState inside the import statement
  // import React, { useState } from "react";

  // and (Hello) ... is the inial value ... starting value
  const [headingText, setHeadingText] = useState("Hello");

  // button actions and events ----------------------------------
  function handleClick() {
    // text event
    setHeadingText("Submitted");

    // read about HTML Event Attributes
    /* 
    we will use (on mouse out) and (on mouse over)
    his allows us to detect when the mouse is hovering over 
    or has hovered out of a particular element 
    
    */
  }
  // ------------------------------------------------------------
  const [isMousedOver, setMouseOver] = useState(false);
  function handleMouseOver() {
    // console.log("mouse over");
    // when mouse is over >>>> the state value we be true
    setMouseOver(true);
  }
  // ------------------------------------------------------------
  function handleMouseOut() {
    setMouseOver(false);
  }

  // -------------------------------------------------------------
  return (
    <div className="container">
      {/* we have just 3 component*/}
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />

      {/* 
        after define handleClick function
        i'm just going to pass the name of this function 
        as the action that should be initiated 
        when this button gets clicked
        
        <button onClick = {handleClick}>Submit</button>

        */}

      <button
        /* 
        1- conditional rendering ... 
        we using now the ternary operator 
        
        2- setting inline styles in our component
        
        3- using event listeners such as on mouse over on mouse out

        4- as well as setting and using state  ... as above
        */
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
