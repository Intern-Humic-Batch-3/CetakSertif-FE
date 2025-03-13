"use client";
import { useState } from "react";
import * as XLSX from "xlsx"; // Import XLSX untuk parsing file Excel
import { useRouter } from "next/navigation";
import { FileInput, Label, Datepicker, TextInput } from "flowbite-react";
import Navbar from "@/_components/Navbar";

export default function InputDataSertifikat() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fileExcel: null,
    namaKegiatan: "",
    tanggalMulai: null,
    tanggalSelesai: null,
    penyelenggara: "",
    tandaTangan: [null, null, null], // opsional
  });

  // State untuk menyimpan hasil parsing Excel (array 2D)
  const [excelData, setExcelData] = useState([]);

  // handleFileChange: Validasi & parsing file Excel, atau update tanda tangan
  const handleFileChange = (event, field) => {
    const file = event.target.files[0];
    if (file) {
      const fileSizeMB = file.size / (1024 * 1024);
      const fileType = file.type;

      if (
        field === "fileExcel" &&
        fileType !==
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        alert("File harus dalam format XLSX!");
        return;
      }
      if (fileSizeMB > 3) {
        alert("Ukuran file tidak boleh lebih dari 3 MB!");
        return;
      }

      if (field === "tandaTangan") {
        const index = parseInt(event.target.dataset.index, 10);
        setFormData((prev) => {
          const updatedTandaTangan = [...prev.tandaTangan];
          updatedTandaTangan[index] = file;
          return { ...prev, tandaTangan: updatedTandaTangan };
        });
      } else {
        setFormData((prev) => ({ ...prev, [field]: file }));
      }

      if (field === "fileExcel") {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0]; // Ambil sheet pertama
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          setExcelData(jsonData);
          console.log("Hasil Baca Excel:", jsonData);
        };
        reader.readAsArrayBuffer(file);
      }
    }
  };

  // handleChange: Update input teks
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // handleDateChange: Gunakan onChange untuk Datepicker agar mengembalikan Date object
  const handleDateChange = (date, field) => {
    // Pastikan 'date' adalah Date object; jika tidak, ambil dari event.target.value
    setFormData((prev) => ({ ...prev, [field]: date }));
  };

  // handleSubmit: Validasi required dan navigasi ke halaman baru untuk generate sertifikat
  const handleSubmit = () => {
    // Validasi semua field required kecuali tanda tangan
    if (
      !formData.fileExcel ||
      !formData.namaKegiatan ||
      !formData.tanggalMulai ||
      !formData.tanggalSelesai ||
      !formData.penyelenggara
    ) {
      alert("Semua data harus diisi (kecuali tanda tangan)!");
      return;
    }

    // Buat sanitized data:
    // - Hilangkan file (fileExcel dan tandaTangan) karena tidak bisa di-JSON.stringify
    // - Ubah tanggal menjadi string ISO
    const { fileExcel, tandaTangan, ...rest } = formData;
    const sanitizedFormData = {
      ...rest,
      tanggalMulai: formData.tanggalMulai
        ? new Date(formData.tanggalMulai).toISOString()
        : null,
      tanggalSelesai: formData.tanggalSelesai
        ? new Date(formData.tanggalSelesai).toISOString()
        : null,
    };

    const sertifikatData = { formData: sanitizedFormData, excelData };

    try {
      sessionStorage.setItem("sertifikatData", JSON.stringify(sertifikatData));
    } catch (error) {
      console.error("Error menyimpan data sertifikat:", error);
      alert("Terjadi kesalahan saat menyimpan data.");
      return;
    }

    router.push("/generated-sertifikat");
  };

  return (
    <>
      {/* Navbar Fixed */}
      <div className="fixed top-0 w-screen bg-white px-9 py-4 z-50">
        <Navbar />
      </div>

      {/* Form Input */}
      <div className="m-32 pt-20">
        <h5 className="text-h5 font-semibold mb-16">Input Data Sertifikat</h5>
        <div className="flex flex-col items-center">
          {/* File Excel */}
          <div className="flex w-full items-center mb-8">
            <Label htmlFor="file-upload" value="File Excel" className="w-1/6" />
            <div className="w-5/6">
              <FileInput
                id="file-upload"
                sizing="lg"
                onChange={(e) => handleFileChange(e, "fileExcel")}
              />
              <p className="text-body-md mt-4">
                Format file XLSX dengan ukuran maksimal 3 MB
              </p>
            </div>
          </div>

          {/* Nama Kegiatan */}
          <div className="flex items-center w-full mb-8">
            <Label
              htmlFor="namaKegiatan"
              value="Nama Kegiatan"
              className="w-1/6"
            />
            <TextInput
              id="namaKegiatan"
              type="text"
              sizing="lg"
              className="w-5/6"
              value={formData.namaKegiatan}
              onChange={handleChange}
              required
            />
          </div>

          {/* Tanggal Kegiatan */}
          <div className="flex items-center w-full mb-8">
            <Label value="Tanggal Kegiatan" className="w-1/6" />
            <div className="flex w-5/6 gap-8">
              <Datepicker
                id="start-date"
                sizing="lg"
                className="w-full"
                selected={formData.tanggalMulai}
                onChange={(date) => handleDateChange(date, "tanggalMulai")}
                required
              />
              <Datepicker
                id="end-date"
                sizing="lg"
                className="w-full"
                selected={formData.tanggalSelesai}
                onChange={(date) => handleDateChange(date, "tanggalSelesai")}
                required
              />
            </div>
          </div>

          {/* Penyelenggara */}
          <div className="flex items-center w-full mb-8">
            <Label
              htmlFor="penyelenggara"
              value="Penyelenggara"
              className="w-1/6"
            />
            <TextInput
              id="penyelenggara"
              type="text"
              sizing="lg"
              className="w-5/6"
              value={formData.penyelenggara}
              onChange={handleChange}
              required
            />
          </div>

          {/* Tanda Tangan (Opsional) */}
          <div className="flex items-center w-full mb-24">
            <Label value="Tanda Tangan (Opsional)" className="w-1/6" />
            <div className="flex gap-8 w-5/6">
              {formData.tandaTangan.map((_, index) => (
                <FileInput
                  key={index}
                  data-index={index}
                  sizing="lg"
                  className="w-full"
                  onChange={(e) => handleFileChange(e, "tandaTangan")}
                />
              ))}
            </div>
          </div>

          {/* Tombol Submit */}
          <button
            onClick={handleSubmit}
            className="bg-brand-primary text-h5 font-semibold text-white py-6 px-72 rounded-lg hover:brightness-75 duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
