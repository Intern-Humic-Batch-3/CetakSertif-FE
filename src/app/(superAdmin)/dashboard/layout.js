"use client";
import Sidebar from "@/_components/Sidebar";
import { Flowbite } from "flowbite-react";
import Hamburger from "hamburger-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [popUpCaraKerja, setPopUpCaraKerja] = useState(false);
  const pathname = usePathname();
  const [navbarStatus, setNavbarStatus] = useState(false);
  const [isOpen, setOpen] = useState(false);

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

  const customTheme = {
    button: {
      base: "",
      color: {
        default: "",
      },
      size: {
        xs: "p-0",
      },
    },
    dropdown: {
      arrowIcon: "hidden",
      floating: {
        content: "py-1 text-sm text-white",
        item: {
          container: "",
          base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-white hover:bg-red-600 focus:bg-red-600 focus:outline-none",
          icon: "mr-2 h-4 w-4",
        },
        style: {
          auto: "bg-red-500 text-white dark:bg-red-600",
        },
      },
    },
  };

  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <main className="grid grid-cols-12 h-screen w-screen">
          <aside className="col-span-4 flex-col justify-between p-7 shadow-xl 2xl:col-span-2 hidden lg:col-span-3 md:flex">
            <Sidebar />
          </aside>
          <main className="col-span-12 2xl:col-span-10 lg:col-span-9 md:col-span-8 px-7 py-12">
            <section
              className={`hidden md:flex ${
                (pathname == "/dashboard/tambah-sertifikat") |
                (pathname == "/dashboard/input-data-sertifikat")
                  ? "justify-end"
                  : "justify-between"
              } items-center`}
            >
              {(pathname == "/dashboard/tambah-sertifikat") |
              (pathname == "/dashboard/input-data-sertifikat") ? (
                ""
              ) : (
                <h1 className="text-2xl font-bold">Hasil sertifikat</h1>
              )}
              <button
                onClick={() => setPopUpCaraKerja(true)}
                className="bg-brand-primary p-3 rounded-lg text-lg text-white font-semibold"
              >
                Cara Kerja
              </button>
            </section>
            <section className="flex justify-between items-center md:hidden">
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
                className="bg-black bg-opacity-60 h-screen w-screen fixed left-0 top-0"
              >
                <aside className="flex flex-col bg-white h-full justify-between p-3 shadow-xl w-[80vw] absolute left-0 md:p-7 sm:w-[70vw]">
                  <Sidebar />
                </aside>
              </section>
            )}
            {children}
          </main>
        </main>

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
      </Flowbite>
    </>
  );
}
