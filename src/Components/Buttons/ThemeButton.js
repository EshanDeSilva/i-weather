import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default function Button() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div>
      <DarkModeToggle
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={60}
      />
    </div>
  );
};