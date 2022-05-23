import React, { useState } from "react";  


export function useVisualMode(modeOrg) {
const [mode, setMode] = useState(modeOrg);

function transition(newMode) {
  setMode(newMode)
}
return {
  mode,
  transition
}
};

