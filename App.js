import React from "react";
import ReactDOM from "react-dom/client";
                                                                                // (JSX not html)
//const heading =  React.createElement('h1',{},"this is h1") === const heading = <h1> this is h1 </h1>

const heading = React.createElement("h1", {}, "Heading");

// creating react element using jsx
const link = <a href=""> link element </a>;

// React Functional Components and eact element inside a react component
const Item = () => <li> {link}</li>;

// using react component inside a react component (component composition)
const Navbar = () => {
  return (<div className="nav">
    {heading}
    <Item />
    <Item> </Item> 
    {Item()}
  </div>);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Navbar />);
