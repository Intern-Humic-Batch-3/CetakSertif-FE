"use client";
import { useState } from "react";
import WarningCircle from "@/icons/warningCircle";

export default function Page() {
	const [popUp, setPopUp] = useState(false);
	const steps = [
		{
			number: 1,
			step: "Unggah Template - Pilih desain sertifikatmu(JPG/PNG)",
		},
		{
			number: 2,
			step: "Tambahkan Data Peserta – Upload file Excel (.XLSX, max 1MB)",
		},
		{
			number: 3,
			step:
				"Lengkapi Detail Acara – Isi nama kegiatan, tanggal, dan penyelenggara.",
		},
		{
			number: 4,
			step: "Tambahkan Tanda Tangan – Unggah file tanda tangan yang diperlukan.",
		},
		{
			number: 5,
			step: "Klik Submit – Biarkan sistem memproses sertifikatmu.",
		},
	];

	return (
		<>
			<section className="flex justify-between items-center">
				<h1 className="text-2xl font-bold">Hasil sertifikat</h1>
				<button
					onClick={() => setPopUp(true)}
					className="bg-secondary text-lg text-white font-semibold p-3 rounded-lg">
					Cara Kerja
				</button>
			</section>
			<section className="min-h-[85vh] flex justify-center items-center">
				<div className="flex flex-col justify-center items-center gap-y-5 text-center">
					<WarningCircle className="w-32" />
					<h1 className="text-3xl font-bold">Belum ada sertifikat!</h1>
					<h3 className="text-xl">
						Silahkan membuat sertifikat yang anda inginkan!
					</h3>
					<button className="w-full bg-primary text-white font-semibold text-xl p-3 rounded-lg">
						Tambah
					</button>
				</div>
			</section>
			{popUp && (
				<section className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
					<div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-10 space-y-10">
						<h1 className="font-semibold text-2xl text-center">
							Buat sertifikat dengan mudah!
						</h1>
						<ul className="space-y-5">
							{steps.map((step, index) => (
								<li key={index} className="flex items-center gap-x-3">
									<span className="flex justify-center items-center w-14 h-14 bg-primary text-xl text-white rounded-full p-5">
										{step.number}
									</span>
									<p className="text-xl">{step.step}</p>
								</li>
							))}
						</ul>
						<button
							onClick={() => setPopUp(false)}
							className=" w-96 bg-primary text-white font-semibold rounded-lg p-4">
							Tutup
						</button>
					</div>
				</section>
			)}
		</>
	);
}
