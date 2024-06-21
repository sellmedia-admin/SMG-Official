"use client";
import { GetStarted } from "@/components";

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-x-hidden">
      {children}
      <GetStarted />
    </div>
  );
}
