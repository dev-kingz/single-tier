"use client";
import {BsSun, BsMoonStars} from "react-icons/bs";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {Button, ButtonProps} from "../ui/button";
import {cn} from "@/lib/utils";

interface ThemeToggleProps extends ButtonProps {
  showLabel?: boolean;
}

const ThemeToggle = ({showLabel, className, ...props}: ThemeToggleProps) => {
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
    <div className="flexi w-full gap-x-2">
      {showLabel && (
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Toggle Theme:</p>
      )}
      <Button
        size={"icon"}
        variant={"link"}
        onClick={toggleTheme}
        className={cn(
          "ThemeToggle transform transition-all duration-300 ease-in-out hover:scale-125",
          className,
        )}
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
