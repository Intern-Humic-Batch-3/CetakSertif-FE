"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const templates = [
  { id: 1, src: "/assets/certificate/cerfiticate-template.png" },
  { id: 2, src: "/assets/certificate/cerfiticate-template-2.png" },
  { id: 3, src: "/assets/certificate/cerfiticate-template-3.png" },
];

export default function TemplateHumic() {
  const router = useRouter();

  const handleSelect = (template) => {
    localStorage.setItem("selectedTemplate", JSON.stringify(template));
    // router.push("/editor");
  };

  return (
    <section className="mt-10 flex-wrap flex gap-16 gap-y-10">
      {templates.map((template) => (
        <div
          key={template.id}
          className="flex flex-col items-center gap-y-5 rounded-lg max-w-4xl"
        >
          {/* Sertifikat Image */}
          <Image
            className="w-[400px]"
            src={template.src}
            width={700}
            height={650}
            alt={`Template Sertifikat ${template.id}`}
          />

          {/* Informasi Deskriptif */}
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

              <button
                className="bg-brand-primary text-white font-semibold p-5 w-full rounded-lg"
                onClick={() => handleSelect(template)}
              >
                Gunakan Template Ini
              </button>
           
          </section>
        </div>
      ))}
    </section>
  );
}
