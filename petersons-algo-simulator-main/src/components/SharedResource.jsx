/**
 * The `SharedResource` component is a UI component that displays a shared resource and allows the user to change its value. It takes two props:
- `value`: the current value of the shared resource
- `onChange`: a function to be called when the value of the shared resource is changed by the user
The component also has a "Reset" button that sets the value of the shared resource back to its default value (which is initially set to 0). The default value is displayed below the "Reset" button.
Example usage:
<SharedResource value={someValue} onChange={handleValueChange} />
Where `someValue` is the current value of the shared resource, and `handleValueChange` is a function that will be called when the user changes the value of the shared resource.
 */

import React, { useState } from "react";
import "./SharedResource.css";

function SharedResource({ value, onChange }) {
  const [defaultValue, setDefaultValue] = useState(0);
  
  const handleReset = () => {
    setDefaultValue(500);
    onChange(0);
  };

  return (
    <div className="shared-resource">
      <h2 className="section">ENTER SECTION</h2>
      <h2>SHARED RESOURCE</h2>
      <input type="number" value={value} onChange={(e) => onChange(e.target.value)} />
      <button onClick={handleReset}>RESET</button>
      <p>DEFAULT VALUE: {defaultValue}</p>
      <h2 className="section">EXIT SECTION</h2>
    </div>
  );
}

export default SharedResource;
