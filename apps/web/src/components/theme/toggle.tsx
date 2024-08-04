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
      <Button
        size={"icon"}
        variant={"link"}
        onClick={toggleTheme}
        className="ThemeToggle
        transform transition-all duration-300 ease-in-out
        hover:scale-125"
        {...props}
      >
        {currentTheme === "dark" ? (
          <BsSun className="h-6 w-6 stroke-[0.5] text-yellow-500" />
        ) : (
          <BsMoonStars className="h-6 w-6 text-black" />
        )}
      </Button>
    </div>
  );
};

export {ThemeToggle};
