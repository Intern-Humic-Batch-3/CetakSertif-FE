"use client";
import Certificate from "@/icons/certificate";
import File from "@/icons/file";
import UserCircle from "@/icons/user";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SidebarUser() {
  const pathname = usePathname();
  const [popUp, setPopUp] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State untuk toggle sidebar

  const steps = [
    {
      number: 1,
      step: "Unggah Template - Pilih desain sertifikatmu (JPG/PNG)",
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

  const openModal = (e) => {
    e.preventDefault();
    setPopUp(true);
  };

  const closeModal = () => {
    setPopUp(false);
  };

  return (
    <>
      {/* Sidebar */}
      <section
        className={`fixed top-0 left-0 h-full bg-white shadow-lg p-5 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64 md:w-80 z-40`}
      >
        <div className="flex flex-col gap-y-10 mt-9">
          <Image
            className="w-32 md:w-52"
            width={200}
            height={200}
            src="/assets/logos/navbar-logo.png"
            alt="Logo Humic Engineering"
          />
          <section className="bg-brand-secondary text-white rounded-lg p-3 md:p-5">
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
              Daniel Admin
            </h3>
            <p className="text-xs md:text-sm">danieladmin@gmail.com</p>
          </section>
          <section className="px-5">
            <ul className="flex flex-col gap-y-10">
              <li
                className={`flex items-center text-lg ${
                  pathname == "/cetak-sertifikat" ||
                  pathname == "/dashboard/tambah-sertifikat" ||
                  pathname == "/dashboard/input-data-sertifikat"
                    ? "text-brand-primary"
                    : "text-black"
                } hover:text-brand-primary gap-x-5`}
              >
                <Link
                  href="/riwayat-sertifikat"
                  className="text-sm md:text-base font-semibold cursor-pointer"
                >
                  Riwayat Sertifikat
                </Link>
              </li>
              {/* Elemen "Cara Kerja" hanya tampil pada tampilan mobile */}
              <li
                className="block text-sm md:text-base font-semibold cursor-pointer"
                onClick={openModal}
              >
                Cara Kerja
              </li>
              <li
                className={`flex items-center text-lg ${
                  pathname == "/humic-template"
                    ? "text-brand-primary"
                    : "text-black"
                } hover:text-brand-primary gap-x-5`}
              >
                <Link
                  href="/humic-template"
                  className="text-sm md:text-base font-semibold cursor-pointer"
                >
                  Template Humic
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <section className="absolute bottom-10">
          <button className="flex items-center py-3 px-20 bg-brand-primary text-white font-semibold rounded-lg">
            Logout
          </button>
        </section>
      </section>

      {/* Custom Popup */}
      {popUp && (
        <section className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50 px-4 sm:px-6">
          <div className="flex flex-col bg-white p-6 rounded-2xl shadow-xl w-full items-center lg:max-w-2xl max-w-md md:max-w-xl md:p-10 md:space-y-10 sm:max-w-lg sm:p-8 sm:space-y-8 space-y-6">
            <h1 className="text-base text-center font-semibold md:text-xl sm:text-lg">
              Buat sertifikat dengan mudah!
            </h1>
            <ul className="w-full sm:space-y-5 space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-x-3 items-center">
                  <span className="flex bg-brand-primary h-10 w-10 justify-center p-3 rounded-full text-sm text-white items-center md:h-14 md:w-14 md:p-5 md:text-lg shrink-0 sm:h-12 sm:w-12 sm:p-4 sm:text-base">
                    {step.number}
                  </span>
                  <p className="text-sm md:text-base sm:text-sm">{step.step}</p>
                </li>
              ))}
            </ul>
            <button
              onClick={closeModal}
              className="w-full lg:w-96 max-w-xs md:max-w-md sm:max-w-sm bg-brand-primary p-3 rounded-lg text-sm text-white font-semibold sm:p-4 sm:text-base"
            >
              Tutup
            </button>
          </div>
        </section>
      )}
    </>
  );
}
