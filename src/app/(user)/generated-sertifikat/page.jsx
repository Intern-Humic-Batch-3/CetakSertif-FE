"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function GeneratedSertifikat() {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("sertifikatData");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      router.push("/input-data-sertifikat");
    }
  }, [router]);

  if (!data) return <p>Loading...</p>;

  const { formData, excelData } = data;

  return (
    <div className="m-16 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Kerangka Sertifikat</h1>
      <p>
        <strong>Nama Kegiatan:</strong> {formData.namaKegiatan}
      </p>
      <p>
        <strong>Tanggal Mulai:</strong>{" "}
        {new Date(formData.tanggalMulai).toLocaleDateString()}
      </p>
      <p>
        <strong>Tanggal Selesai:</strong>{" "}
        {new Date(formData.tanggalSelesai).toLocaleDateString()}
      </p>
      <p>
        <strong>Penyelenggara:</strong> {formData.penyelenggara}
      </p>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Daftar Peserta</h2>
        <ul className="list-disc ml-8 mt-4">
          {excelData.slice(1).map((row, index) => (
            <li key={index}>{row[0]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
