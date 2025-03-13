"use client";
import { useState } from "react";
import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import WarningCircle from "@/icons/warningCircle"; // Pastikan file ini ada, atau hapus jika tidak diperlukan

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
      <Navbar fixed rounded className="fixed w-full z-50 top-0">
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
          <Button color="failure">Logout</Button>
        </Navbar.Collapse>
      </Navbar>

      {/* Custom Popup */}
      {popUp && (
        <section className="z-50 fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-10 space-y-10">
            <h1 className="font-semibold text-2xl text-center">
              Buat sertifikat dengan mudah!
            </h1>
            <ul className="space-y-5">
              {steps.map((step, index) => (
                <li key={index} className="flex items-center gap-x-3">
                  <span className="flex justify-center items-center w-14 h-14 bg-primary text-xl text-white rounded-full p-5">
                    {step.number}
                  </span>
                  <p className="text-xl">{step.step}</p>
                </li>
              ))}
            </ul>
            <button
              onClick={closeModal}
              className="w-96 bg-primary text-white font-semibold rounded-lg p-4"
            >
              Tutup
            </button>
          </div>
        </section>
      )}
    </>
  );
}
