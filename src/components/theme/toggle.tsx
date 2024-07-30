"use client";
import {BsSun, BsMoonStars} from "react-icons/bs";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {Button, ButtonProps} from "../ui/button";

const ThemeToggle = ({...props}: ButtonProps) => {
  const {theme, setTheme, systemTheme} = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>("");

  useEffect(() => {
    if (theme === "system") {
      setCurrentTheme(systemTheme);
    } else {
      setCurrentTheme(theme);
    }
  }, [theme, systemTheme]);

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
      setCurrentTheme("light");
    } else {
      setTheme("dark");
      setCurrentTheme("dark");
    }
  };

  return (
    <div>
      {/* Toggle button */}
      <Button
        size={"icon"}
        onClick={toggleTheme}
        className="ThemeToggle
        duration-300 hover:scale-110"
        {...props}
      >
        {currentTheme === "dark" ? <BsSun /> : <BsMoonStars />}
      </Button>
    </div>
  );
};

export {ThemeToggle};
