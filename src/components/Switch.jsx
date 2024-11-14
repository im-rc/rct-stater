import { useState } from "react";

function Switch() {
  const [state, setState] = useState(false);

  return (
    <button onClick={() => setState(!state)}>
      {state == true ? "ON" : "OFF"}
    </button>
  );
}

export default Switch;
