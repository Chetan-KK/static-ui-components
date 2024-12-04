import React from "react";
import { useTheme } from "../../lib/ThemeContext";
import Moon from "../../assets/icons/Moon";
import Sun from "../../assets/icons/Sun";
import SecondaryButton from "./SecondaryButton";

const ModeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <SecondaryButton onPress={toggleTheme}>
      {theme === "light" ? (
        <Moon className="size-5" />
      ) : (
        <Sun className="size-5" />
      )}
    </SecondaryButton>
  );
};

export default ModeToggle;
