"use client"
import Sidebar from "@/_components/Sidebar";
import { usePathname } from "next/navigation";
import { Flowbite } from "flowbite-react";
import { useState } from "react";

export default function DashboardLayout({ children }) {
	const [popUpCaraKerja, setPopUpCaraKerja] = useState(false);
  const pathname = usePathname();

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

  const customTheme = {
  button: {
    base: "",
    color: {
      default: ""
    },
    size: {
      "xs": "p-0"
    }
  },
  dropdown: {
    arrowIcon: "hidden",
    floating: {
      content: "py-1 text-sm text-white",
      item: {
        container: "",
        base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-white hover:bg-red-600 focus:bg-red-600 focus:outline-none",
        icon: "mr-2 h-4 w-4"
      },
      style: {
        auto: "bg-red-500 text-white dark:bg-red-600"
      },
    },
  }
};



	return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
    		<main className="w-screen h-screen grid grid-cols-12">
    			<aside className="flex flex-col justify-between col-span-2 shadow-xl p-7">
            <Sidebar/>
    			</aside>
    			<main className="col-span-10 px-7 py-12">
            <section className={`flex ${pathname == "/dashboard/tambah-sertifikat" | pathname == "/dashboard/input-data-sertifikat" ? 'justify-end' : 'justify-between'}`}>
              {
                pathname == "/dashboard/tambah-sertifikat" | pathname == "/dashboard/input-data-sertifikat" ? ('') : (
                  <h1 className="text-2xl font-bold">Hasil sertifikat</h1>
                )
              }
      				<button
      					onClick={() => setPopUpCaraKerja(true)}
      					className="bg-brand-primary text-lg text-white font-semibold p-3 rounded-lg">
      					Cara Kerja
      				</button>
    			  </section>
            {children}
          </main>
    		</main>

        {popUpCaraKerja && (
    				<section className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
    					<div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-10 space-y-10">
    						<h1 className="font-semibold text-2xl text-center">
    							Buat sertifikat dengan mudah!
    						</h1>
    						<ul className="space-y-5">
    							{steps.map((step, index) => (
    								<li key={index} className="flex items-center gap-x-3">
    									<span className="flex justify-center items-center w-14 h-14 bg-brand-primary text-xl text-white rounded-full p-5">
    										{step.number}
    									</span>
    									<p className="text-xl">{step.step}</p>
    								</li>
    							))}
    						</ul>
    						<button
    							onClick={() => setPopUpCaraKerja(false)}
    							className=" w-96 bg-brand-primary text-white font-semibold rounded-lg p-4">
    							Tutup
    						</button>
    					</div>
    				</section>
    			)}
      </Flowbite>
    </>
	);
}
