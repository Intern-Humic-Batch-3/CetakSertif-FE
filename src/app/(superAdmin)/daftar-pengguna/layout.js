"use client"
import Sidebar from "@/_components/Sidebar";

export default function DaftarPenggunaLayout({ children }) {
	return (
		<main className="w-screen h-screen grid grid-cols-12">
			<aside className="flex flex-col justify-between col-span-2 shadow-xl p-7">
        <Sidebar/>
      </aside>
			<main className="col-span-10 px-7 py-12">
        {children}
      </main>
		</main>
	);
}
