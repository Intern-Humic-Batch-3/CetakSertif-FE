"use client";
import UserDataTable from "@/_components/UserDataTable";
import Image from "next/image";
import { useState } from "react";

export default function DaftarPengguna() {
	const [formTambahPengguna, setFormTambahPengguna] = useState(false);
	const [simpanPopUp, setSimpanPopUp] = useState(false);

	return (
		<>
			
			<UserDataTable />

			{formTambahPengguna && (
				<section className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
					<div className="w-[700px] flex flex-col items-center bg-white rounded-2xl shadow-xl p-10 space-y-10">
						<h1 className="font-semibold text-2xl text-center">
							Tambah Data Pengguna
						</h1>
						<ul className="space-y-5 w-full">
							<li className="grid grid-cols-12 items-center gap-x-5 gap-y-2">
								<label className="col-span-12" htmlFor="">
									Nama
								</label>
								<input
									className="col-span-12 border-gray-500 focus:border-gray-500 focus:ring-0 rounded-md"
									placeholder="Masukkan nama"
									type="text"
								/>
							</li>
							<li className="grid grid-cols-12 items-center gap-x-5 gap-y-2">
								<label className="col-span-12" htmlFor="">
									Email
								</label>
								<input
									className="col-span-12 border-gray-500 focus:border-gray-500 focus:ring-0 rounded-md"
									placeholder="Masukkan email"
									type="text"
								/>
							</li>
							<li className="grid grid-cols-12 items-center gap-x-5 gap-y-2">
								<label className="col-span-12" htmlFor="">
									Password
								</label>
								<input
									className="col-span-12 border-gray-500 focus:border-gray-500 focus:ring-0 rounded-md"
									placeholder="Masukkan password"
									type="text"
								/>
							</li>
						</ul>
						<div className="w-full flex items-center gap-x-5 gap-y-2">
							<button
								onClick={() => {
									setFormTambahPengguna(false);
								}}
								className="w-full bg-brand-primary text-white font-semibold rounded-lg p-4">
								Batal
							</button>
							<button
								onClick={() => {
									setSimpanPopUp(true);
									setFormTambahPengguna(false);
								}}
								className="w-full bg-brand-primary text-white font-semibold rounded-lg p-4">
								Simpan
							</button>
						</div>
					</div>
				</section>
			)}

			{simpanPopUp && (
				<section className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
					<div className="w-[500px] flex flex-col items-center bg-white rounded-2xl shadow-xl p-10 space-y-10">
						<h1 className="font-semibold text-2xl text-center">
							Data Berhasil Ditambahkan!
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
							className="w-full bg-brand-primary text-white font-semibold rounded-lg p-4">
							Tutup
						</button>
					</div>
				</section>
			)}
		</>
	);
}
