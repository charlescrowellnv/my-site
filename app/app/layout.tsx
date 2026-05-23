import Header from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header title="App" />
      {children}
    </div>
  );
}
