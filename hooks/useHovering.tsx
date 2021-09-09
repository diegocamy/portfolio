import React, { useState } from "react";

function useHovering() {
  const [hovering, setHovering] = useState(false);

  return { hovering, setHovering };
}

export default useHovering;
