"use client";
import { GetStarted } from "@/components";

export default function PoliciesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <GetStarted />
    </div>
  );
}
