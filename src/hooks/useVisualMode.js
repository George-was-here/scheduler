import React, { useState } from "react";

export function useVisualMode(modeOrg) {
  const [mode, setMode] = useState(modeOrg);
  const [history, setHistory] = useState([modeOrg]);

  function transition(newMode, replace = false) {
    // set the new mode state
    setMode(newMode);
    // add new mode to history state
    if (replace) {
      const newHistory = history;
      history[history.length - 1] = newMode;
      setHistory(newHistory);
    } else {
      setHistory([...history, newMode]);
    }
  }

  function back() {
    const newHistory = history;
    // remove the last element
    if (newHistory.length > 1) {
      newHistory.pop();
      setHistory(newHistory);
      setMode(newHistory[newHistory.length - 1]);
    }
  }

  return {
    mode,
    transition,
    back
  };
}