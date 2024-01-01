/**
 * A component that displays information about a CPU process.
 *
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the process.
 * @param {boolean} props.isRunning - Whether the process is currently running.
 * @param {boolean} props.isPaused - Whether the process is currently paused.
 * @param {boolean} props.isCritical - Whether the process is currently in a critical section.
 * @param {Function} props.onEnterCritical - A callback function to be called when the process enters a critical section.
 * @param {Function} props.onExitCritical - A callback function to be called when the process exits a critical section.
 *
 * @returns {JSX.Element} The rendered component.
 */

import React from "react";
import "./Process.css";

function Process({ name, isRunning, isPaused, isCritical, onEnterCritical, onExitCritical }) {
  const handleClick = () => {
    if (isCritical) {
      onExitCritical();
    } else {
      onEnterCritical();
    }
  };

  return (
    <div className="process">
      <h2>{name}</h2>
      <div
        className={`state ${isCritical ? "critical" : "notcritical"} ${isPaused ? "paused" : ""}`}
        onClick={handleClick}
      >
        {isCritical ? "In Critical Section" : "Not in Critical Section"}
      </div>
     <div className="cpu-process"></div>
    </div>
  );
}

export default Process;