"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [addCertificateButton, setAddCertificateButton] = useState(false);

  return (
    <>
      {!addCertificateButton && (
        <>
          <section className="min-h-[85vh] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-y-5 text-center">
              <Image
                className="w-32 cursor-pointer"
                src={"/icons/warning.svg"}
                width={100}
                height={100}
                alt="trash icon"
              />
              <h1 className="text-3xl font-bold">Belum ada sertifikat!</h1>
              <h3 className="text-xl">
                Silahkan membuat sertifikat yang anda inginkan!
              </h3>
              <Link
                href="/tambah-sertifikat"
                className="w-full bg-brand-primary text-white font-semibold text-xl p-3 rounded-lg"
              >
                Tambah
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
}
