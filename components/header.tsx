import { ThemeButton } from "./ui/theme-button";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header({ title }: { title: string }) {
  return (
    <header className="w-full p-2">
      <div className="rounded-full pl-4 pr-1 py-1 border max-w-7xl mx-auto">
        <div className="flex flex-row items-center justify-between h-full">
          <div className="text-sm font-semibold">{title}</div>
          <div className="flex flex-row items-center gap-1">
            <Button asChild variant="ghost">
              <Link href="/docs">Docs</Link>
            </Button>
            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  );
}
