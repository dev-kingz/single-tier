import {ThemeToggle} from "@/components/theme/toggle";

export default function Home() {
  return (
    <main className="from-primary-400 to-primary-800 flexi h-full w-full gap-x-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]">
      <h1>Hello</h1>
      <ThemeToggle rounded={"full"} />
      <div className="h-screen bg-background"></div>
    </main>
  );
}
