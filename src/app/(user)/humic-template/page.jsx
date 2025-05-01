"use client";
import Image from "next/image";
import Link from "next/link";

const templates = [
  { id: 1, src: "/assets/certificate/cerfiticate-template.png" },
  { id: 2, src: "/assets/certificate/cerfiticate-template-2.png" },
  { id: 3, src: "/assets/certificate/cerfiticate-template-3.png" },
];

export default function HumicTemplate() {
  return (
    <section className="mt-10 flex-wrap flex gap-16 gap-y-10">
      {templates.map((tpl) => (
        <div
          key={tpl.id}
          className="flex flex-col items-center gap-y-5 rounded-lg max-w-4xl"
        >
          {/* Sertifikat Image */}
          <Image
            className="w-[650px] border-2 rounded-lg p-5"
            src={tpl.src}
            width={700}
            height={650}
            alt={`Template Sertifikat ${tpl.id}`}
          />

          <section className="flex flex-col items-center gap-y-8 w-full">
            <h1 className="text-2xl font-semibold">Template Humic Sertifikat</h1>

            <div className="flex items-center gap-x-4">
              <Image
                src="/assets/logos/login-logo.png"
                width={60}
                height={60}
                alt="Humic Engineering Logo"
              />
              <h3 className="font-semibold">CoE Humic Engineering Research Center</h3>
            </div>

       
              <Link href="/dashboard">
                <button className="bg-brand-primary text-white font-semibold p-5 rounded-lg">
                  Gunakan Template Ini
                </button>
              </Link>

          </section>
        </div>
      ))}
    </section>
  );
}
