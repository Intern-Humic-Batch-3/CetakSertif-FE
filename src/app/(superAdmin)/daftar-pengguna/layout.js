"use client";
import Sidebar from "@/_components/Sidebar";
import Hamburger from "hamburger-react";
import Image from "next/image";
import { useState } from "react";

export default function DaftarPenggunaLayout({ children }) {
  const [navbarStatus, setNavbarStatus] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <main className="w-screen h-screen grid grid-cols-12">
      <aside className="col-span-4 lg:col-span-3 2xl:col-span-2 hidden md:flex flex-col justify-between shadow-xl p-7">
        <Sidebar />
      </aside>
      <main className="col-span-12 md:col-span-8 lg:col-span-9 2xl:col-span-10 px-7 py-12">
        <section className="hidden md:flex justify-between items-center">
          <h1 className="text-2xl font-bold">Daftar Pengguna</h1>
          <button
            onClick={() => setFormTambahPengguna(true)}
            className="bg-brand-primary text-lg text-white font-semibold p-3 rounded-lg"
          >
            Tambah
          </button>
        </section>
        <section className="flex md:hidden justify-between items-center">
          <Hamburger
            size={30}
            onToggle={(toggled) => {
              if (toggled) {
                setNavbarStatus(true);
              } else {
                setNavbarStatus(false);
              }
            }}
            toggled={isOpen}
            toggle={setOpen}
            color="black"
          />
          <Image
            className="w-14"
            src="/favicon.ico"
            width="100"
            height="100"
            alt="Humic Engineering Logo"
          />
        </section>
        {navbarStatus && (
          <section
            onClick={() => {
              setNavbarStatus(false);
              setOpen(false);
            }}
            className="fixed z-10 top-0 left-0 w-screen h-screen bg-black bg-opacity-60"
          >
            <aside className="absolute left-0 w-[80vw] sm:w-[70vw] h-full bg-white flex flex-col justify-between shadow-xl p-3 md:p-7">
              <Sidebar />
            </aside>
          </section>
        )}
        {children}
      </main>
    </main>
  );
}
