"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function CustomNavbar({ userName = "Febry Andrias" }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleAddClick = () => setIsConfirmOpen(true);
  const confirmAdd = () => {
    setIsConfirmOpen(false);
    router.push("/input-data-sertifikat"); // Pindah halaman setelah konfirmasi
  };

  const steps = [
    "Unggah Template - Pilih desain sertifikatmu (JPG/PNG)",
    "Tambahkan Data Peserta – Upload file Excel (.XLSX, max 1MB)",
    "Lengkapi Detail Acara – Isi nama kegiatan, tanggal, dan penyelenggara.",
    "Tambahkan Tanda Tangan – Unggah file tanda tangan yang diperlukan.",
    "Klik Submit – Biarkan sistem memproses sertifikatmu.",
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-white py-3 px-5 flex justify-between items-center fixed top-0 left-0 z-50 font-semibold">
        <div className="flex items-center space-x-10">
          <Image
            src="/assets/logos/navbar-logo.png"
            width={214}
            height={214}
            alt="Logo"
            priority
          />
          <span className="text-h3">{userName}</span>
        </div>

        <div className="flex items-center space-x-5 text-h6">
          <Link
            href="/riwayat-sertifikat"
            className="text-brand-secondary hover:text-brand-primary"
          >
            Humic Template
          </Link>
          <Link
            href="/riwayat-sertifikat"
            className="text-brand-secondary hover:text-brand-primary"
          >
            Riwayat Sertifikat
          </Link>
          <button
            onClick={() => setIsPopUpOpen(true)}
            className="text-brand-secondary hover:text-brand-primary"
          >
            Cara Kerja
          </button>
          {pathname === "/riwayat-sertifikat" && (
            <button
              onClick={handleAddClick}
              className="bg-white text-brand-primary border-2 border-brand-primary px-9 py-3 rounded-lg"
            >
              Tambah
            </button>
          )}
          <Link
            href="/login"
            className="px-9 py-4 rounded-lg bg-brand-primary text-white"
          >
            Logout
          </Link>
        </div>
      </nav>

      {/* POPUP CARA KERJA */}
      {isPopUpOpen && (
        <section className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-md md:max-w-lg lg:max-w-xl">
            <h1 className="text-center text-xl font-semibold">
              Buat sertifikat dengan mudah!
            </h1>
            <ul className="mt-5 space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-x-3 items-center">
                  <span className="flex h-10 w-10 items-center justify-center bg-brand-primary text-white rounded-full font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-sm">{step}</p>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsPopUpOpen(false)}
              className="mt-5 bg-brand-primary text-white w-full py-2 rounded-lg font-semibold hover:bg-brand-dark"
            >
              Tutup
            </button>
          </div>
        </section>
      )}

      {/* POPUP KONFIRMASI TAMBAH DATA */}
      {isConfirmOpen && (
        <section className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-sm text-center shadow-lg">
            <h1 className="text-xl font-semibold">Ingin Menambah Data?</h1>
            <Image
              className="w-60 mx-auto my-7"
              src={"/icons/yellowWarning.svg"}
              width={80}
              height={80}
              alt="success icon"
            />
            <p className="text-xs">
              Apakah Anda yakin ingin menambah data ini?
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setIsConfirmOpen(false)}
                className="bg-brand-primary text-white font-bold flex items-center justify-center w-32 h-10 rounded-lg"
              >
                Batal
              </button>
              <button
                onClick={confirmAdd}
                className="bg-brand-primary text-white font-bold flex items-center justify-center w-32 h-10 rounded-lg"
              >
                Tambah
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
