"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Inicio from "@/components/Inicio/Inicio";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://photokinnes.com/" key="canonical" />
      </Head>
      <main className="dark:bg-dark-l bg-white flex">
        <Inicio />
      </main>
    </>
  );
}
