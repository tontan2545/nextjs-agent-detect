import Link from "next/link";
import { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren) => (
  <button className="bg-white rounded-md px-4 py-2 text-black hover:bg-white/80 transition-all duration-200">
    {children}
  </button>
);

export default function Home() {
  return (
    <>
      <Link href="/client">
        <Button>
          Click to navigate to <b>client</b> side device detection
        </Button>
      </Link>

      <Link href="/server">
        <Button>
          Click to navigate to <b>server</b> side device detection
        </Button>
      </Link>
    </>
  );
}
