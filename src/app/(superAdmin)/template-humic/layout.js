"use client";
import Sidebar from "@/_components/Sidebar";
import Hamburger from "hamburger-react";
import Image from "next/image";
import { useState } from "react";

export default function TemplateHumicLayout({ children }) {
  const [navbarStatus, setNavbarStatus] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [popUpCaraKerja, setPopUpCaraKerja] = useState(false);

  const steps = [
    {
      number: 1,
      step: "Unggah Template - Pilih desain sertifikatmu(JPG/PNG)",
    },
    {
      number: 2,
      step: "Tambahkan Data Peserta – Upload file Excel (.XLSX, max 1MB)",
    },
    {
      number: 3,
      step: "Lengkapi Detail Acara – Isi nama kegiatan, tanggal, dan penyelenggara.",
    },
    {
      number: 4,
      step: "Tambahkan Tanda Tangan – Unggah file tanda tangan yang diperlukan.",
    },
    {
      number: 5,
      step: "Klik Submit – Biarkan sistem memproses sertifikatmu.",
    },
  ];

  return (
    <main className="w-screen h-screen grid grid-cols-12">
      <aside className="col-span-4 lg:col-span-3 2xl:col-span-2 hidden md:flex flex-col justify-between shadow-xl p-7">
        <Sidebar />
      </aside>
      <main className="col-span-12 md:col-span-8 lg:col-span-9 2xl:col-span-10 px-7 py-12">
        <section className="hidden md:flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hasil sertifikat</h1>
          <button
            onClick={() => setPopUpCaraKerja(true)}
            className="bg-brand-primary text-lg text-white font-semibold p-3 rounded-lg"
          >
            Cara Kerja
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
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60"
          >
            <aside className="absolute left-0 w-[80vw] sm:w-[70vw] h-full bg-white flex flex-col justify-between shadow-xl p-3 md:p-7">
              <Sidebar />
            </aside>
          </section>
        )}
        {children}
      </main>

      {/* Cara Kerja Pop-up Modal */}
      {popUpCaraKerja && (
        <section className="flex bg-black bg-opacity-50 h-screen justify-center w-full fixed items-center left-0 px-4 sm:px-6 top-0">
          <div className="flex flex-col bg-white p-6 rounded-2xl shadow-xl w-full items-center lg:max-w-2xl max-w-md md:max-w-xl md:p-10 md:space-y-10 sm:max-w-lg sm:p-8 sm:space-y-8 space-y-6">
            <h1 className="text-base text-center font-semibold md:text-xl sm:text-lg">
              Buat sertifikat dengan mudah!
            </h1>
            <ul className="w-full sm:space-y-5 space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-x-3 items-center">
                  <span className="flex bg-brand-primary h-10 justify-center p-3 rounded-full text-sm text-white w-10 items-center md:h-14 md:p-5 md:text-lg md:w-14 shrink-0 sm:h-12 sm:p-4 sm:text-base sm:w-12">
                    {step.number}
                  </span>
                  <p className="text-sm md:text-base sm:text-sm">
                    {step.step}
                  </p>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setPopUpCaraKerja(false)}
              className="bg-brand-primary p-3 rounded-lg text-sm text-white w-full font-semibold lg:w-96 max-w-xs md:max-w-md sm:max-w-sm sm:p-4 sm:text-base"
            >
              Tutup
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
