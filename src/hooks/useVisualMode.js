import React, { useState } from "react";  

export function useVisualMode(modeOrg) {
const [mode, setMode] = useState(modeOrg);
const [history, setHistory] = useState([modeOrg]);

function transition(newMode) {
  // set the new mode state
  setMode(newMode);
  // add new mode to history state
  setHistory([...history, newMode])
}

function back() {
  const newHistory = history;
  // remove the last element
  if(newHistory.length > 1) {
    newHistory.pop();
    setHistory(newHistory);
    setMode(newHistory[newHistory.length - 1]);
  }
}

return {
  mode,
  transition,
  back
}
};