import React, { useState } from "react";  


export function useVisualMode(modeOrg) {
const [mode, setMode] = useState(modeOrg);
return {
  mode
}
};

