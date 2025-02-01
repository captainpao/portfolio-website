import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

// Define a simple HelloWorld component
const HelloWorld = () => {
  return (
    <div className="container">
      <h1 className="text-primary">Hello Pao</h1>
      <p className="text-secondary">This is regular text.</p>
      <p className="light-text">This is light text.</p>
      <p className="thin-text">This is thin text.</p>
      <button className="btn btn-primary">Bootstrap Button</button>
    </div>
  );
};

// Render the HelloWorld component to the root element
ReactDOM.render(<HelloWorld />, document.getElementById('root'));