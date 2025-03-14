import Image from "next/image";
import Link from "next/link";

export default function InputDataSertifikat() {
	return (
		<>
			<h1 className="mt-14 text-xl font-semibold">Inputkan Data Sertifikat</h1>
			<form className="px-10">
				<ul className="flex flex-col">
					<li className="grid grid-cols-12 items-center">
						<p className="col-span-3">File Excel</p>
						<input className="col-span-9" type="file" />
					</li>
					<li className="mt-3 grid grid-cols-12 items-center">
						<div className="col-span-3"></div>
						<div className="col-span-9 flex items-center gap-x-2">
							<Image
								className="w-7 cursor-pointer"
								src={"/icons/warning.svg"}
								width={100}
								height={100}
								alt="trash icon"
							/>
							<p>Format file XLSX dengan ukuran maximal 3 MB </p>
						</div>
					</li>
					<li className="my-14 grid grid-cols-12 items-center">
						<p className="col-span-3">Nama Kegiatan</p>
						<input
							className="py-3 col-span-8 outline-none focus:ring-4 focus:ring-red-300 focus:border-red-500 rounded-lg"
							type="text"
							placeholder="Cth *Seminar Pentingnya Soft Skill"
						/>
					</li>
					<li className="grid grid-cols-12 items-center">
						<p className="col-span-3">Tanggal Kegiatan</p>
						<div className="flex col-span-8 gap-x-5">
							<input className="py-3 w-full rounded-lg" type="date" />
							<input className="py-3 w-full rounded-lg" type="date" />
						</div>
					</li>
					<li className="my-14 grid grid-cols-12 items-center">
						<p className="col-span-3">Penyelenggara</p>
						<input
							className="py-3 col-span-8 outline-none focus:ring-4 focus:ring-red-300 focus:border-red-500 rounded-lg"
							type="text"
							placeholder="Cth *Divisi Humas Humic Engineering"
						/>
					</li>
					<li className="grid grid-cols-12 items-center">
						<p className="col-span-3">Masukkan Tanda Tangan</p>
						<input className="col-span-3" type="file" />
						<input className="col-span-3" type="file" />
						<input className="col-span-3" type="file" />
					</li>
					<li className="grid grid-cols-12 mt-14">
						<Link href={"/dashboard"} className="col-span-11">
							<button className="w-full bg-brand-primary text-white text-lg font-semibold rounded-lg p-3">
								Submit
							</button>
						</Link>
					</li>
				</ul>
			</form>
		</>
	);
}
