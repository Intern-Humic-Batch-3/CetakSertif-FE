"use client";
import { Datepicker, FileInput, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as XLSX from "xlsx";

export default function InputDataSertifikat() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fileExcel: null,
    namaKegiatan: "",
    tanggalMulai: null,
    tanggalSelesai: null,
    penyelenggara: "",
    tandaTangan: [null, null, null],
  });

  const [excelData, setExcelData] = useState([]);

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
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          setExcelData(jsonData);
          console.log("Hasil Baca Excel:", jsonData);
        };
        reader.readAsArrayBuffer(file);
      }
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleDateChange = (date, field) => {
    setFormData((prev) => ({ ...prev, [field]: date }));
  };

  const handleSubmit = () => {
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
      {/* Form Input */}
      <div className="lg:mx-32 md:mx-16 min-h-screen mx-4 pt-20 sm:mx-8">
        <h5 className="text-xl font-semibold mb-8 md:mb-16 md:text-3xl sm:mb-12 sm:text-2xl">
          Input Data Sertifikat
        </h5>
        <div className="flex flex-col items-center">
          {/* File Excel */}
          <div className="flex flex-col w-full mb-6 sm:flex-row sm:mb-8 -z-10">
            <Label
              htmlFor="file-upload"
              value="File Excel"
              className="mb-2 md:w-1/6 sm:mb-0 sm:w-1/4"
            />
            <div className="w-full md:w-5/6 sm:w-3/4">
              <FileInput
                id="file-upload"
                sizing="md sm:lg"
                onChange={(e) => handleFileChange(e, "fileExcel")}
              />
              <p className="text-sm mt-2">
                Format file XLSX dengan ukuran maksimal 3 MB
              </p>
            </div>
          </div>

          {/* Nama Kegiatan */}
          <div className="flex flex-col w-full mb-6 sm:flex-row sm:mb-8 -z-10">
            <Label
              htmlFor="namaKegiatan"
              value="Nama Kegiatan"
              className="mb-2 md:w-1/6 sm:mb-0 sm:w-1/4"
            />
            <TextInput
              id="namaKegiatan"
              type="text"
              sizing="md sm:lg"
              className="w-full md:w-5/6 sm:w-3/4"
              value={formData.namaKegiatan}
              onChange={handleChange}
              required
            />
          </div>

          {/* Tanggal Kegiatan */}
          <div className="flex flex-col w-full mb-6 sm:flex-row sm:mb-8 -z-10">
            <Label
              value="Tanggal Kegiatan"
              className="mb-2 md:w-1/6 sm:mb-0 sm:w-1/4"
            />
            <div className="flex flex-col w-full gap-4 md:w-5/6 sm:flex-row sm:gap-8 sm:w-3/4">
              <Datepicker
                id="start-date"
                sizing="md sm:lg"
                className="w-full"
                selected={formData.tanggalMulai}
                onChange={(date) => handleDateChange(date, "tanggalMulai")}
                required
              />
              <Datepicker
                id="end-date"
                sizing="md sm:lg"
                className="w-full"
                selected={formData.tanggalSelesai}
                onChange={(date) => handleDateChange(date, "tanggalSelesai")}
                required
              />
            </div>
          </div>

          {/* Penyelenggara */}
          <div className="flex flex-col w-full mb-6 sm:flex-row sm:mb-8 -z-10">
            <Label
              htmlFor="penyelenggara"
              value="Penyelenggara"
              className="mb-2 md:w-1/6 sm:mb-0 sm:w-1/4"
            />
            <TextInput
              id="penyelenggara"
              type="text"
              sizing="md sm:lg"
              className="w-full md:w-5/6 sm:w-3/4"
              value={formData.penyelenggara}
              onChange={handleChange}
              required
            />
          </div>

          {/* Tanda Tangan (Opsional) */}
          <div className="flex flex-col w-full mb-12 sm:flex-row sm:mb-24 -z-10">
            <Label
              value="Tanda Tangan"
              className="mb-2 md:w-1/6 sm:mb-0 sm:w-1/4"
            />
            <div className="flex flex-col w-full gap-4 md:w-5/6 sm:flex-row sm:gap-8 sm:w-3/4">
              {formData.tandaTangan.map((_, index) => (
                <FileInput
                  key={index}
                  data-index={index}
                  sizing="md sm:lg"
                  className="w-full"
                  onChange={(e) => handleFileChange(e, "tandaTangan")}
                />
              ))}
            </div>
          </div>

          {/* Tombol Submit */}
          <button
            onClick={handleSubmit}
            className="bg-brand-primary rounded-lg text-base text-white w-full duration-300 font-semibold hover:brightness-75 md:px-72 md:text-xl px-12 py-4 sm:px-24 sm:py-6 sm:text-lg sm:w-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
