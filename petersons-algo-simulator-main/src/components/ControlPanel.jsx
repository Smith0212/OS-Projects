/**
 * React component that renders a control panel with four buttons: Start, Pause, Resume, and Reset.
Props:
- onStart: function that will be called when the Start button is clicked.
- onPause: function that will be called when the Pause button is clicked.
- onResume: function that will be called when the Resume button is clicked.
- onReset: function that will be called when the Reset button is clicked.
Return:
- A `div` element that contains four buttons to control the simulation of the Peterson's algorithm.
 */

import React from "react";
import "./ControlPanel.css";

function ControlPanel({ onStart, onPause, onResume, onReset }) {
  return (
    <div className="control-panel">
      <button onClick={onStart}>START</button>
      <button onClick={onPause}>PAUSE</button>
      <button onClick={onResume}>RESUME</button>
      <button onClick={onReset}>RESET</button>
    </div>
  );
}

export default ControlPanel;
