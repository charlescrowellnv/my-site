import Header from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header title="Site" />
      {children}
    </div>
  );
}
