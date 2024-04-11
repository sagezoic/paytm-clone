"use client";

import { useBalance } from "@repo/stores/balance";

import { PrismaClient } from "../../../packages/db";
const prisma = new PrismaClient();

export default function Page(): JSX.Element {
  return <div className="text-xl">Hello from Tailwind</div>;
}
