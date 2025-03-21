"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dropdown } from "flowbite-react";

export default function Page() {
  const router = useRouter();
  const [addCertificateButton, setAddCertificateButton] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      imageUrl: "/assets/certificate/cerfiticate-template.png",
      title: "Workshop Humic Engineering",
    },
    {
      id: 2,
      imageUrl: "/assets/certificate/cerfiticate-template.png",
      title: "Webinar Humic Engineering",
    },
    {
      id: 3,
      imageUrl: "/assets/certificate/cerfiticate-template.png",
      title: "Seminar Humic Engineering",
    },
    {
      id: 4,
      imageUrl: "/assets/certificate/cerfiticate-template.png",
      title: "Family Gathering Humic Engineering",
    },
    {
      id: 5,
      imageUrl: "/assets/certificate/cerfiticate-template.png",
      title: "Talk Show Humic Engineering",
    },
  ]);

  // Buka popup konfirmasi edit
  const openEditPopup = (certificate) => {
    setSelectedCertificate(certificate);
    setShowEditPopup(true);
  };

  const closeEditPopup = () => {
    setShowEditPopup(false);
    setSelectedCertificate(null);
  };

  // Navigate to edit page setelah konfirmasi
  const confirmEdit = () => {
    router.push(`/edit-data-sertifikat?id=${selectedCertificate.id}`);
  };

  // Buka popup konfirmasi delete
  const openDeletePopup = (certificate) => {
    setSelectedCertificate(certificate);
    setShowDeletePopup(true);
  };

  const closeDeletePopup = () => {
    setShowDeletePopup(false);
    setSelectedCertificate(null);
  };

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const deleteCertificate = () => {
    setCertificates(
      certificates.filter((cert) => cert.id !== selectedCertificate.id)
    );
    closeDeletePopup();
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 3000); // Popup otomatis hilang setelah 3 detik
  };

  return (
    <div className="mt-36 mx-28">
      {!addCertificateButton && (
        <>
          {/* Search Bar */}
          <section className="my-10 bg-gray-100 flex items-center text-lg font-medium py-2 px-3 rounded-lg">
            <Image
              className="w-7 cursor-pointer"
              src={"/icons/search.svg"}
              width={100}
              height={100}
              alt="Search icon"
            />
            <input
              type="text"
              className="text-gray-500 bg-transparent focus:border-0 focus:ring-0 border-0"
              placeholder="Cari data pengguna"
            />
          </section>

          {/* Certificate List */}
          <section className="grid grid-cols-12 gap-10 overflow-auto">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col items-center border rounded-lg p-5 gap-5"
              >
                <Image
                  className="w-full"
                  src={certificate.imageUrl}
                  width={400}
                  height={400}
                  alt="Certificate example"
                />
                <p className="font-semibold">{certificate.title}</p>
                <div className="flex items-center gap-10">
                  <Image
                    className="w-8 cursor-pointer"
                    src="/icons/pencil.svg"
                    width={20}
                    height={20}
                    alt="Edit button"
                    onClick={() => openEditPopup(certificate)}
                  />
                  <Image
                    className="w-8 cursor-pointer"
                    src="/icons/trash.svg"
                    width={20}
                    height={20}
                    alt="Delete button"
                    onClick={() => openDeletePopup(certificate)}
                  />
                  <Dropdown
                    color="default"
                    size="xs"
                    dismissOnClick={false}
                    label={
                      <Image
                        className="w-8"
                        src="/icons/download.svg"
                        width={20}
                        height={20}
                        alt="Download button"
                      />
                    }
                  >
                    <Dropdown.Item>JPG</Dropdown.Item>
                    <Dropdown.Item>PNG</Dropdown.Item>
                  </Dropdown>
                </div>
              </div>
            ))}
          </section>
        </>
      )}
      {/* Popup Delete */}
      {showDeletePopup && selectedCertificate && (
        <section className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50 z-50 px-4 sm:px-6">
          <div className="flex flex-col bg-white p-6 rounded-2xl shadow-xl w-full items-center lg:max-w-md max-w-sm md:p-10 md:space-y-6 sm:max-w-md sm:p-8 sm:space-y-6 space-y-6">
            {/* Judul Popup */}
            <h1 className="text-base text-center font-bold md:text-xl sm:text-lg">
              Ingin Menghapus Sertifikat?
            </h1>

            <Image
              className="w-60 mx-auto my-7"
              src={"/icons/yellowWarning.svg"}
              width={80}
              height={80}
              alt="success icon"
            />

            <p className="text-xs">
              Apakah Anda yakin ingin menghapus sertifikat ini?
            </p>

            {/* Tombol Aksi */}
            <div className="flex gap-5 w-full">
              <button
                onClick={closeDeletePopup}
                className="bg-brand-primary text-white font-bold flex items-center justify-center w-32 h-10 rounded-lg"
              >
                Batal
              </button>
              <button
                onClick={deleteCertificate}
                className="bg-brand-primary text-white font-bold flex items-center justify-center w-32 h-10 rounded-lg"
              >
                Hapus
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Popup Edit */}
      {showEditPopup && selectedCertificate && (
        <section className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50 z-50 px-4 sm:px-6">
          <div className="flex flex-col bg-white p-6 rounded-2xl shadow-xl w-full items-center lg:max-w-md max-w-sm md:p-10 md:space-y-6 sm:max-w-md sm:p-8 sm:space-y-6 space-y-6">
            <h1 className="text-base text-center font-bold md:text-xl sm:text-lg">
              Ingin Mengedit Sertifikat?
            </h1>

            <Image
              className="w-60 mx-auto my-7"
              src={"/icons/yellowWarning.svg"}
              width={80}
              height={80}
              alt="success icon"
            />
            <p className="text-center text-sm md:text-base">
              Apakah Anda yakin ingin mengedit sertifikat{" "}
              <strong>{selectedCertificate.title}</strong>?
            </p>
            <div className="flex gap-5">
              <button
                onClick={closeEditPopup}
                className="bg-brand-primary text-white font-bold flex items-center justify-center w-32 h-10 rounded-lg"
              >
                Batal
              </button>
              <button
                onClick={confirmEdit}
                className="bg-brand-primary text-white font-bold flex items-center justify-center w-32 h-10 rounded-lg"
              >
                Edit
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Popup Sukses */}
      {showSuccessPopup && (
        <section className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50 z-50 px-4 sm:px-6">
          <div className="flex flex-col bg-white p-6 rounded-2xl shadow-xl w-full items-center lg:max-w-md max-w-sm md:p-10 md:space-y-6 sm:max-w-md sm:p-8 sm:space-y-6 space-y-6">
            <h1 className="text-base text-center font-semibold md:text-xl sm:text-lg">
              Data Berhasil Dihapus!
            </h1>
            <Image
              src="/icons/success.svg"
              width={80}
              height={80}
              alt="Success Icon"
            />
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="w-full bg-red-600 text-white font-semibold rounded-lg p-3 sm:p-4 text-sm md:text-base"
            >
              Tutup
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
