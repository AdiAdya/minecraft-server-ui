"use client";
import { useEffect, useState } from "react";
import ServerListGrid from "./components/grid/ServerListGrid";
import { ServerCardProps } from "@/types/ServerCardInterface";
import { ThemeProvider  } from "@/context/ThemeContext";
import ThemeToggleButton from "./components/buttons/ThemeToggleButton";

export default function Home() {
  const [serverData, setServerData] = useState<ServerCardProps[] | null>(null);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch("/api/mock");
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error("Failed to fetch server data:", error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <ThemeProvider>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <header className="flex flex-col sm:flex-row justify-between items-center w-full gap-4">
            <h1 className="text-2xl font-bold">Minecraft Server List</h1>
            <ThemeToggleButton />
          </header>
          {serverData ? <ServerListGrid serverData={serverData} /> : "Loading data..."}
        </main>
      </div>
    </ThemeProvider>
  );
}