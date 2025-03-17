"use client"
import Sidebar from "@/_components/Sidebar";

export default function TemplateHumicLayout({ children }) {
	return (
		<main className="w-screen h-screen grid grid-cols-12">
			<aside className="flex flex-col justify-between col-span-2 shadow-xl p-7">
        <Sidebar/>
      </aside>
			<main className="col-span-10 px-7 py-12">
        <section className="flex justify-between">
          <h1 className="text-2xl font-bold">Hasil sertifikat</h1>
  				<button
  					onClick={() => setPopUpCaraKerja(true)}
  					className="bg-brand-primary text-lg text-white font-semibold p-3 rounded-lg">
  					Cara Kerja
  				</button>
  			</section>
        {children}
      </main>
		</main>
	);
}
