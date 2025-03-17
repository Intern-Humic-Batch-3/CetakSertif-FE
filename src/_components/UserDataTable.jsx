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
			<section className="my-10 bg-gray-100 flex items-center text-lg font-medium py-2 px-3 rounded-lg">
				<Image
					className="w-7 cursor-pointer"
					src={"/icons/search.svg"}
					width={100}
					height={100}
					alt="trash icon"
				/>
				<input
					type="text"
					className="text-gray-500 bg-transparent focus:border-0 focus:ring-0 border-0"
					placeholder="Cari data pengguna"
				/>
			</section>
			<section>
				<div className="mt-12 relative overflow-x-auto rounded-xl">
					<table className="w-full text-left text-gray-500">
						<thead className="text-base text-white bg-brand-primary">
							<tr>
								<th className="font-normal px-6 py-3">No.</th>
								<th className="font-normal px-6 py-3">Nama Pengguna</th>
								<th className="font-normal px-6 py-3">Email</th>
								<th className="font-normal px-6 py-3">Role</th>
								<th className="font-normal py-3">Aksi</th>
							</tr>
						</thead>
						<tbody>
							{pengguna.map((user, index) => (
								<tr
									key={user.id}
									className={`${
										index % 2 === 0 ? "bg-[#F6F6F6]" : "bg-white"
									} text-black ${
										index !== pengguna.length - 1 ? "border-b border-gray-200" : ""
									}`}>
									<th className="px-6 py-4 font-medium whitespace-nowrap">
										{index + 1}
									</th>
									<td className="px-6 py-4">{user.nama}</td>
									<td className="px-6 py-4">{user.email}</td>
									<td className="px-6 py-4">{user.role}</td>
									<td className="flex items-center py-4 gap-x-3">
										<Image
											onClick={() => setHapusPenggunaPopUp(true)}
											className="w-10 cursor-pointer"
											src={"/icons/trash.svg"}
											width={100}
											height={100}
											alt="trash icon"
										/>
										<Image
											onClick={() => setFormEditPengguna(true)}
											className="w-10 cursor-pointer"
											src={"/icons/pencil.svg"}
											width={100}
											height={100}
											alt="trash icon"
										/>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
			<section className="mt-10 flex justify-end">
				<nav aria-label="Page navigation example">
					<ul className="inline-flex -space-x-px text-base h-10">
						<li>
							<a
								href="#"
								className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
								First
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
								Previous
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-center justify-center px-4 h-10 text-blue-600 border
                      border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700
                      dark:border-gray-700 dark:bg-gray-700 dark:text-white">
								1
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
								2
							</a>
						</li>
						<li>
							<a
								href="#"
								aria-current="page"
								className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
								3
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
								Next
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
								Last
							</a>
						</li>
					</ul>
				</nav>
			</section>

			{formEditPengguna && (
				<section className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
					<div className="w-[700px] flex flex-col items-center bg-white rounded-2xl shadow-xl p-10 space-y-10">
						<h1 className="font-semibold text-2xl text-center">Edit Data Pengguna</h1>
						<ul className="space-y-5 w-full">
							<li className="grid grid-cols-12 items-center gap-x-5 gap-y-2">
								<label className="col-span-12" htmlFor="">
									Nama
								</label>
								<input
									className="col-span-12 border-gray-500 focus:border-gray-500 focus:ring-0 rounded-md"
									placeholder="Masukkan nama"
									type="text"
									defaultValue={"asdf"}
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
									defaultValue={"asdf@gmail.com"}
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
									defaultValue={"humic_engineering_asdf"}
								/>
							</li>
						</ul>
						<div className="w-full flex items-center gap-x-5 gap-y-2">
							<button
								onClick={() => {
									setFormEditPengguna(false);
								}}
								className="w-full bg-brand-primary text-white font-semibold rounded-lg p-4">
								Batal
							</button>
							<button
								onClick={() => {
									setSimpanPopUp(true);
									setFormEditPengguna(false);
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
							className="w-full bg-brand-primary text-white font-semibold rounded-lg p-4">
							Tutup
						</button>
					</div>
				</section>
			)}

			{hapusPenggunaPopUp && (
				<section className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
					<div className="w-[600px] flex flex-col items-center bg-white rounded-2xl shadow-xl p-10 space-y-10">
						<h1 className="font-semibold text-2xl text-center">
							Ingin Menghapus Data?
						</h1>
						<Image
							className="w-60"
							src={"/icons/yellowWarning.svg"}
							width={100}
							height={100}
							alt="success icon"
						/>
						<p className="font-medium text-lg text-center">
							Apakah anda yakin ingin menghapus data ini?
						</p>
						<div className="w-full flex items-center gap-x-5 gap-y-2">
							<button
								onClick={() => {
									setHapusPenggunaPopUp(false);
								}}
								className="w-full bg-brand-primary text-white font-semibold rounded-lg p-4">
								Batal
							</button>
							<button
								onClick={() => {
									setHapusPenggunaPopUp(false);
									setConfirmHapusPenggunaPopUp(true);
								}}
								className="w-full bg-brand-primary text-white font-semibold rounded-lg p-4">
								Hapus
							</button>
						</div>
					</div>
				</section>
			)}

			{confirmHapusPenggunaPopUp && (
				<section className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
					<div className="w-[500px] flex flex-col items-center bg-white rounded-2xl shadow-xl p-10 space-y-10">
						<h1 className="font-semibold text-2xl text-center">
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
							className="w-full bg-brand-primary text-white font-semibold rounded-lg p-4">
							Tutup
						</button>
					</div>
				</section>
			)}
		</>
	);
}
