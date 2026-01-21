import Navigation from "./Navigation";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/10">
      <Navigation />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
