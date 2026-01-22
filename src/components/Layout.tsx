import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}
