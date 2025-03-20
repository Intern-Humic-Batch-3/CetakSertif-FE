import Image from "next/image";
import { useState } from "react";

export default function UserDataTable() {
  const [formEditPengguna, setFormEditPengguna] = useState(false);
  const [simpanPopUp, setSimpanPopUp] = useState(false);
  const [hapusPenggunaPopUp, setHapusPenggunaPopUp] = useState(false);
  const [confirmHapusPenggunaPopUp, setConfirmHapusPenggunaPopUp] =
    useState(false);
  const pengguna = [
    { id: 1, nama: "asdf", email: "asdf@gmail.com", role: "User" },
    { id: 2, nama: "fine shyt", email: "fineshyt@gmail.com", role: "Admin" },
    { id: 3, nama: "frrr", email: "frrr@gmail.com", role: "User" },
  ];

  return (
    <>
      <section className="flex bg-gray-100 rounded-lg text-lg font-medium items-center my-10 px-3 py-2">
        <Image
          className="w-7 cursor-pointer"
          src={"/icons/search.svg"}
          width={100}
          height={100}
          alt="trash icon"
        />
        <input
          type="text"
          className="bg-transparent border-0 text-gray-500 focus:border-0 focus:ring-0"
          placeholder="Cari data pengguna"
        />
      </section>
      <section>
        <div className="rounded-md mt-12 overflow-x-auto relative">
          <table className="text-gray-500 text-left w-full min-w-[600px]">
            <thead className="bg-brand-primary text-sm text-white md:text-base">
              <tr>
                <th className="font-normal md:px-6 md:py-3 px-3 py-2">No.</th>
                <th className="font-normal md:px-6 md:py-3 px-3 py-2">
                  Nama Pengguna
                </th>
                <th className="font-normal md:px-6 md:py-3 px-3 py-2">Email</th>
                <th className="font-normal md:px-6 md:py-3 px-3 py-2">Role</th>
                <th className="font-normal md:py-3 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pengguna.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0 ? "bg-[#F6F6F6]" : "bg-white"
                  } text-black ${
                    index !== pengguna.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  <th className="font-medium md:px-6 md:py-4 px-3 py-2 whitespace-nowrap">
                    {index + 1}
                  </th>
                  <td className="md:px-6 md:py-4 px-3 py-2">{user.nama}</td>
                  <td className="md:px-6 md:py-4 px-3 py-2">{user.email}</td>
                  <td className="md:px-6 md:py-4 px-3 py-2">{user.role}</td>
                  <td className="flex gap-x-3 items-center md:py-4 py-2">
                    <Image
                      onClick={() => setHapusPenggunaPopUp(true)}
                      className="w-6 cursor-pointer lg:w-10 md:w-8"
                      src={"/icons/trash.svg"}
                      width={100}
                      height={100}
                      alt="trash icon"
                    />
                    <Image
                      onClick={() => setFormEditPengguna(true)}
                      className="w-6 cursor-pointer lg:w-10 md:w-8"
                      src={"/icons/pencil.svg"}
                      width={100}
                      height={100}
                      alt="pencil icon"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="flex justify-end mt-10">
        <nav aria-label="Page navigation example">
          <ul className="text-sm inline-flex items-center md:space-x-0 md:text-base space-x-px">
            <li>
              <a
                href="#"
                className="bg-white border border-e-0 border-gray-300 h-8 justify-center rounded-s-lg text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white dark:text-gray-400 hidden hover:bg-gray-100 hover:text-gray-700 items-center leading-tight md:flex md:h-10 md:px-4 px-2"
              >
                First
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex bg-white border border-gray-300 h-8 justify-center text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700 items-center leading-tight md:h-10 md:px-4 px-2"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex bg-blue-50 border border-gray-300 h-8 justify-center text-blue-600 dark:bg-gray-700 dark:border-gray-700 dark:text-white hover:bg-blue-100 hover:text-blue-700 items-center md:h-10 md:px-4 px-2"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex bg-white border border-gray-300 h-8 justify-center text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700 items-center leading-tight md:h-10 md:px-4 px-2"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex bg-white border border-gray-300 h-8 justify-center text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700 items-center leading-tight md:h-10 md:px-4 px-2"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex bg-white border border-gray-300 h-8 justify-center text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700 items-center leading-tight md:h-10 md:px-4 px-2"
              >
                Next
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-white border border-gray-300 h-8 justify-center rounded-e-lg text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white dark:text-gray-400 hidden hover:bg-gray-100 hover:text-gray-700 items-center leading-tight md:flex md:h-10 md:px-4 px-2"
              >
                Last
              </a>
            </li>
          </ul>
        </nav>
      </section>

      {formEditPengguna && (
        <section className="flex bg-black bg-opacity-50 h-screen justify-center w-full fixed items-center left-0 top-0">
          <div className="flex flex-col bg-white p-10 rounded-2xl shadow-xl w-[700px] items-center space-y-10">
            <h1 className="text-2xl text-center font-semibold">
              Edit Data Pengguna
            </h1>
            <ul className="w-full space-y-5">
              <li className="grid grid-cols-12 gap-x-5 gap-y-2 items-center">
                <label className="col-span-12" htmlFor="">
                  Nama
                </label>
                <input
                  className="col-span-12 border-gray-500 rounded-md focus:border-gray-500 focus:ring-0"
                  placeholder="Masukkan nama"
                  type="text"
                  defaultValue={"asdf"}
                />
              </li>
              <li className="grid grid-cols-12 gap-x-5 gap-y-2 items-center">
                <label className="col-span-12" htmlFor="">
                  Email
                </label>
                <input
                  className="col-span-12 border-gray-500 rounded-md focus:border-gray-500 focus:ring-0"
                  placeholder="Masukkan email"
                  type="text"
                  defaultValue={"asdf@gmail.com"}
                />
              </li>
              <li className="grid grid-cols-12 gap-x-5 gap-y-2 items-center">
                <label className="col-span-12" htmlFor="">
                  Password
                </label>
                <input
                  className="col-span-12 border-gray-500 rounded-md focus:border-gray-500 focus:ring-0"
                  placeholder="Masukkan password"
                  type="text"
                  defaultValue={"humic_engineering_asdf"}
                />
              </li>
            </ul>
            <div className="flex w-full gap-x-5 gap-y-2 items-center">
              <button
                onClick={() => {
                  setFormEditPengguna(false);
                }}
                className="bg-brand-primary p-4 rounded-lg text-white w-full font-semibold"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  setSimpanPopUp(true);
                  setFormEditPengguna(false);
                }}
                className="bg-brand-primary p-4 rounded-lg text-white w-full font-semibold"
              >
                Simpan
              </button>
            </div>
          </div>
        </section>
      )}

      {simpanPopUp && (
        <section className="flex bg-black bg-opacity-50 h-screen justify-center w-full fixed items-center left-0 top-0">
          <div className="flex flex-col bg-white p-10 rounded-2xl shadow-xl w-[500px] items-center space-y-10">
            <h1 className="text-2xl text-center font-semibold">
              Data Berhasil Diedit!
            </h1>
            <Image
              className="w-60"
              src={"/icons/success.svg"}
              width={100}
              height={100}
              alt="success icon"
            />
            <button
              onClick={() => setSimpanPopUp(false)}
              className="bg-brand-primary p-4 rounded-lg text-white w-full font-semibold"
            >
              Tutup
            </button>
          </div>
        </section>
      )}

      {hapusPenggunaPopUp && (
        <section className="flex bg-black bg-opacity-50 h-screen justify-center w-full fixed items-center left-0 top-0">
          <div className="flex flex-col bg-white p-10 rounded-2xl shadow-xl w-[600px] items-center space-y-10">
            <h1 className="text-2xl text-center font-semibold">
              Ingin Menghapus Data?
            </h1>
            <Image
              className="w-60"
              src={"/icons/yellowWarning.svg"}
              width={100}
              height={100}
              alt="success icon"
            />
            <p className="text-center text-lg font-medium">
              Apakah anda yakin ingin menghapus data ini?
            </p>
            <div className="flex w-full gap-x-5 gap-y-2 items-center">
              <button
                onClick={() => {
                  setHapusPenggunaPopUp(false);
                }}
                className="bg-brand-primary p-4 rounded-lg text-white w-full font-semibold"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  setHapusPenggunaPopUp(false);
                  setConfirmHapusPenggunaPopUp(true);
                }}
                className="bg-brand-primary p-4 rounded-lg text-white w-full font-semibold"
              >
                Hapus
              </button>
            </div>
          </div>
        </section>
      )}

      {confirmHapusPenggunaPopUp && (
        <section className="flex bg-black bg-opacity-50 h-screen justify-center w-full fixed items-center left-0 top-0">
          <div className="flex flex-col bg-white p-10 rounded-2xl shadow-xl w-[500px] items-center space-y-10">
            <h1 className="text-2xl text-center font-semibold">
              Data Berhasil Dihapus!
            </h1>
            <Image
              className="w-60"
              src={"/icons/success.svg"}
              width={100}
              height={100}
              alt="success icon"
            />
            <button
              onClick={() => setConfirmHapusPenggunaPopUp(false)}
              className="bg-brand-primary p-4 rounded-lg text-white w-full font-semibold"
            >
              Tutup
            </button>
          </div>
        </section>
      )}
    </>
  );
}
