"use client";
import { Dropdown } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [addCertificateButton, setAddCertificateButton] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

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

  const openEditPopup = (certificate) => {
    setSelectedCertificate(certificate);
    setShowEditPopup(true);
  };

  const closeEditPopup = () => {
    setShowEditPopup(false);
    setSelectedCertificate(null);
  };

  const confirmEdit = () => {
    router.push(`/edit-data-sertifikat?id=${selectedCertificate.id}`);
  };

  const openDeletePopup = (certificate) => {
    setSelectedCertificate(certificate);
    setShowDeletePopup(true);
  };

  const closeDeletePopup = () => {
    setShowDeletePopup(false);
    setSelectedCertificate(null);
  };

  const deleteCertificate = () => {
    setCertificates(
      certificates.filter((cert) => cert.id !== selectedCertificate.id)
    );
    closeDeletePopup();
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 3000);
  };

  return (
    <div className="mt-36 mx-4 sm:mx-10 md:mx-28">
      {!addCertificateButton && (
        <>
          {/* Search Bar */}
          {/* <section className="my-6 sm:my-10 bg-gray-100 flex items-center text-base sm:text-lg font-medium py-2 px-3 rounded-lg">
            <Image
              className="w-6 sm:w-7 cursor-pointer"
              src={"/icons/search.svg"}
              width={100}
              height={100}
              alt="Search icon"
            />
            <input
              type="text"
              className="ml-2 w-full text-gray-500 bg-transparent focus:border-0 focus:ring-0 border-0"
              placeholder="Cari data pengguna"
            />
          </section> */}

          {/* Certificate List */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 overflow-auto">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="flex flex-col items-center border rounded-lg p-4 sm:p-5 gap-4 sm:gap-5"
              >
                <Image
                  className="w-full"
                  src={certificate.imageUrl}
                  width={400}
                  height={400}
                  alt="Certificate example"
                />
                <p className="font-semibold text-sm sm:text-base text-center">
                  {certificate.title}
                </p>
                <div className="flex items-center gap-6 sm:gap-10">
                  <Image
                    className="w-6 sm:w-8 cursor-pointer"
                    src="/icons/pencil.svg"
                    width={20}
                    height={20}
                    alt="Edit button"
                    onClick={() => openEditPopup(certificate)}
                  />
                  <Image
                    className="w-6 sm:w-8 cursor-pointer"
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
                        className="w-6 sm:w-8"
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
          <div className="flex flex-col bg-white p-6 rounded-2xl shadow-xl w-full items-center max-w-sm sm:max-w-md md:p-10 space-y-6">
            <h1 className="text-center font-bold text-base sm:text-lg md:text-xl">
              Ingin Menghapus Sertifikat?
            </h1>
            <Image
              className="w-40 my-5"
              src={"/icons/yellowWarning.svg"}
              width={80}
              height={80}
              alt="warning icon"
            />
            <p className="text-xs sm:text-sm text-center">
              Apakah Anda yakin ingin menghapus sertifikat ini?
            </p>
            <div className="flex gap-4 w-full justify-center">
              <button
                onClick={closeDeletePopup}
                className="bg-brand-primary text-white font-bold w-24 sm:w-32 h-10 rounded-lg"
              >
                Batal
              </button>
              <button
                onClick={deleteCertificate}
                className="bg-brand-primary text-white font-bold w-24 sm:w-32 h-10 rounded-lg"
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
          <div className="flex flex-col bg-white p-6 rounded-2xl shadow-xl w-full items-center max-w-sm sm:max-w-md md:p-10 space-y-6">
            <h1 className="text-center font-bold text-base sm:text-lg md:text-xl">
              Ingin Mengedit Sertifikat?
            </h1>
            <Image
              className="w-40 my-5"
              src={"/icons/yellowWarning.svg"}
              width={80}
              height={80}
              alt="edit warning icon"
            />
            <p className="text-center text-sm">
              Apakah Anda yakin ingin mengedit sertifikat{" "}
              <strong>{selectedCertificate.title}</strong>?
            </p>
            <div className="flex gap-4 w-full justify-center">
              <button
                onClick={closeEditPopup}
                className="bg-brand-primary text-white font-bold w-24 sm:w-32 h-10 rounded-lg"
              >
                Batal
              </button>
              <button
                onClick={confirmEdit}
                className="bg-brand-primary text-white font-bold w-24 sm:w-32 h-10 rounded-lg"
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
          <div className="flex flex-col bg-white p-6 rounded-2xl shadow-xl w-full items-center max-w-sm sm:max-w-md space-y-6">
            <h1 className="text-center font-semibold text-base sm:text-lg md:text-xl">
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
              className="w-full bg-red-600 text-white font-semibold rounded-lg py-2 sm:py-3 text-sm sm:text-base"
            >
              Tutup
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
