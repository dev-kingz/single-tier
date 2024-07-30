// import {PluginCreator} from "tailwindcss/types/config";
import plugin from "tailwindcss/plugin";
// import themeColors from "./theme/colors";
import {Cinzel, Poppins} from "next/font/google";

const primary = Poppins({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--body-primary",
});

const secondary = Cinzel({
  subsets: ["latin"],
  variable: "--body-secondary",
});

export const ThemePlugin = plugin(
  function ({addBase, addComponents, addUtilities}) {
    const typographyStyles = {
      phone: {
        h1: "text-2xl font-bold leading-9",
        h2: "text-2xl font-bold leading-9",
        h3: "text-xl font-bold leading-9",
        h4: "text-lg font-bold leading-7",
        h5: "text-base font-bold leading-7",
        h6: "text-sm font-semibold leading-6",
        p: "text-sm font-medium leading-6",
      },
      tablet: {
        h1: "text-3xl font-bold leading-9",
        h2: "text-2xl font-bold leading-9",
        h3: "text-xl font-bold leading-9",
        h4: "text-xl font-bold leading-7",
        h5: "text-base font-bold leading-7",
        h6: "text-sm font-semibold leading-7",
        p: "text-sm font-medium leading-7",
      },
      desktop: {
        h1: "text-4xl font-bold leading-10",
        h2: "text-3xl font-bold leading-9",
        h3: "text-2xl font-bold leading-9",
        h4: "text-lg font-bold leading-7",
        h5: "text-base font-bold leading-7",
        h6: "text-base font-bold leading-7",
        p: "text-base font-medium leading-7",
      },
    };
    addBase({
      //   "*": {"@apply border-border": {}},
      //   body: {"@apply bg-background text-foreground": {}},
      "html, body, root:": {"@apply h-full": {}},

      // [HTMLTags] Typography
      // Phone
      "@media only screen and (max-width: 640px)": Object.fromEntries(
        Object.entries(typographyStyles.phone).map(([tag, classes]) => [tag, {"@apply": classes}]),
      ),
      // Tablet
      "@media screen and (min-width: 641px) and (max-width: 1023px)": Object.fromEntries(
        Object.entries(typographyStyles.tablet).map(([tag, classes]) => [tag, {"@apply": classes}]),
      ),
      // Desktop
      "@media screen and (min-width: 1024px)": Object.fromEntries(
        Object.entries(typographyStyles.desktop).map(([tag, classes]) => [
          tag,
          {"@apply": classes},
        ]),
      ),

      // [HTMLTags] List
      li: {"@apply my-3": {}},
    });
    addComponents({
      // [Classes] Typography
      // Phone
      "@media only screen and (max-width: 640px)": Object.fromEntries(
        Object.entries(typographyStyles.phone).map(([tag, classes]) => [
          `.${tag}`,
          {"@apply": `${classes} !important`},
        ]),
      ),
      // Tablet
      "@media screen and (min-width: 641px) and (max-width: 1023px)": Object.fromEntries(
        Object.entries(typographyStyles.tablet).map(([tag, classes]) => [
          `.${tag}`,
          {"@apply": `${classes} !important`},
        ]),
      ),
      // Desktop
      "@media screen and (min-width: 1024px)": Object.fromEntries(
        Object.entries(typographyStyles.desktop).map(([tag, classes]) => [
          `.${tag}`,
          {"@apply": `${classes} !important`},
        ]),
      ),
      // Layout
      // [Classes] Flex
      ".flexi": {"@apply flex items-center justify-center": {}},
      ".flexib": {"@apply flex items-center justify-between": {}},
      ".flexit": {"@apply flex items-center justify-start": {}},
      ".flexi-it": {"@apply flex items-start justify-center": {}},
      ".flexit-it": {"@apply flex items-start justify-start": {}},
      ".flexie-ie": {"@apply flex items-end justify-end": {}},
    });
    addUtilities({});
  },
  {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        fontFamily: {
          primary: ["var(--font-primary)"],
          secondary: ["var(--font-secondary)"],
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "slide-in": {
            "0%": {
              opacity: "0",
              transform: "translateY(-30px)",
            },
            "100%": {
              opacity: "1",
              transform: "translateY(0)",
            },
          },
          wiggle: {
            "0%, 100%": {transform: "rotate(-2deg)"},
            "50%": {transform: "rotate(2deg)"},
          },
          "accordion-down": {
            from: {height: "0"},
            to: {height: "var(--radix-accordion-content-height)"},
          },
          "accordion-up": {
            from: {height: "var(--radix-accordion-content-height)"},
            to: {height: "0"},
          },
        },
        animation: {
          wiggle: "wiggle 1s ease-in-out infinite",
          "slide-in": "slide-in 0.5s ease-out",
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  },
);
