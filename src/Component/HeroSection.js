import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Color";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currectTheme = AppTheme[theme];
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <body
      style={{
        padding: "1rem",
        backgroundColor: `${currectTheme.backgroundColor}`,
        color: `${currectTheme.textColor}`,
        textAlign: "center",
        height: "100vh",
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>click the 'click me' button to change theme.</p>

      <div
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
      >
        <button
          style={{
            backgroundColor: "#26ae60",
            padding: "10px 150px",
            fontSize: "20px",
            color: "#FFF",
          }}
        >
          CLick Me
        </button>
      </div>
    </body>
  );
};

export default HeroSection;
