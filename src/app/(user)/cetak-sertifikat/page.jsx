"use client";
import { FileInput, Label, Datepicker, TextInput } from "flowbite-react";
// import { WarningCircle } from "@phosphor-icons/react";
export default function InputDataSeritifikat() {
  return (
    <div className="m-32">
      <h5 className="text-h5 font-semibold mb-16">Input Data Sertifikat</h5>
      <div className="flex flex-col items-center">
        <div className="flex w-full items-center mb-8">
          <Label
            htmlFor="file-upload"
            value="File Excel"
            className="w-1/6 mb-10"
          />
          <div className="w-5/6">
            <FileInput id="file-upload" sizing="lg" />
            <p className="text-body-md mt-4">
              {/* <WarningCircle size={32} /> */}
              Format file XLSX dengan ukuran maximal 3 MB
            </p>
          </div>
        </div>
        <div className="flex items-center w-full mb-8">
          <Label htmlFor="base" value="Nama Kegiatan" className="w-1/6" />
          <TextInput id="base" type="text" sizing="lg" className="w-5/6" />
        </div>
        <div className="flex items-center w-full mb-8">
          <Label value="Tanggal Kegiatan" className="w-1/6" />
          <div className="flex w-5/6 gap-8">
            <Datepicker id="start-date" sizing="lg" className="w-full" />
            <Datepicker id="end-date" sizing="lg" className="w-full" />
          </div>
        </div>
        <div className="flex items-center w-full mb-8">
          <Label htmlFor="base" value="Penyelenggara" className="w-1/6" />
          <TextInput id="base" type="text" sizing="lg" className="w-5/6" />
        </div>
        <div className="flex items-center w-full mb-24">
          <Label value="Tanda Tangan" className="w-1/6" />
          <div className="flex gap-8 w-5/6">
            <FileInput id="ttd1" sizing="lg" className="w-full" />
            <FileInput id="ttd2" sizing="lg" className="w-full" />
            <FileInput id="ttd3" sizing="lg" className="w-full" />
          </div>
        </div>
        <button className="bg-brand-primary text-h5 font-semibold text-white py-6 px-72 rounded-lg hover:brightness-75 duration-300">
          Submit
        </button>
      </div>
    </div>
  );
}
