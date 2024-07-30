import {ThemeToggle} from "@/components/theme/toggle";

export default function Home() {
  return (
    <main className="flexi h-full w-full gap-x-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <h1>Hello</h1>
      <ThemeToggle rounded={"full"} />
    </main>
  );
}
