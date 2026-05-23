import { ThemeButton } from "./ui/theme-button";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header({ title }: { title: string }) {
  return (
    <header className="w-full h-14 border-b px-4 max-w-7xl mx-auto">
      <div className="flex flex-row items-center justify-between h-full">
        <div>{title}</div>
        <div className="flex flex-row items-center gap-2">
          <Button asChild>
            <Link href="/docs">Docs</Link>
          </Button>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}
