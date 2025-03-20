"use client";
import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CustomNavbar({ userName = "Febry Andrias" }) {
  const [popUp, setPopUp] = useState(false);

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
      {/* NAVBAR */}
      <Navbar rounded fluid className="w-[100vw]">
        <Navbar.Brand href="/">
          <Image
            src="/assets/logos/navbar-logo.png"
            width={40}
            height={40}
            className="mr-3 h-9 w-auto"
            alt="Logo"
            priority
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            {userName}
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="#"
            className="font-semibold text-brand-primary mt-3 hover:text-brand-primary"
          >
            Riwayat Sertifikat
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="text-brand-primary mt-3 font-semibold"
            onClick={openModal}
          >
            Cara Kerja
          </Navbar.Link>
          <Link href="/login">
            <Button color="failure">Logout</Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>

      {/* Custom Popup */}
      {popUp && (
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
                  <p className="text-sm md:text-base sm:text-sm">{step.step}</p>
                </li>
              ))}
            </ul>
            <button
              onClick={closeModal}
              className="bg-brand-primary p-3 rounded-lg text-sm text-white w-full font-semibold lg:w-96 max-w-xs md:max-w-md sm:max-w-sm sm:p-4 sm:text-base"
            >
              Tutup
            </button>
          </div>
        </section>
      )}
    </>
  );
}
