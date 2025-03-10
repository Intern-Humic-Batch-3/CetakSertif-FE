// import Sidebar from "@/_components/Sidebar";
import Image from "next/image";
import Certificate from "@/icons/certificate";
import UserCircle from "@/icons/user";
import LogOut from "@/icons/logout";

export default function DashboardLayout({ children }) {
	return (
		<main className="w-screen h-screen grid grid-cols-12">
			<aside className="flex flex-col justify-between col-span-2 shadow-xl p-7">
        <section className="flex flex-col gap-y-10">
  				<Image
            className="w-52"
            width={200}
            height={200}
            src="/logo1.png"
            alt="Logo Humic Engineering"
          />
          <section className="bg-secondary text-white rounded-lg p-5">
            <h3 className="text-lg font-semibold">Daniel Admin</h3>
            <p>danieladmin@gmail.com</p>
          </section>
          <section className="px-5">
            <ul className="flex flex-col gap-y-5">
              <li className="flex items-center text-lg text-black hover:text-[#e61a22] gap-x-5">
                <Certificate className={"w-10"} />
                <p className="font-semibold">Cetak Sertifikat</p>
              </li>
              <li className="flex items-center text-lg text-black hover:text-[#e61a22] gap-x-5">
                <UserCircle className={"w-10"} />
                <p className="font-semibold">Daftar Pengguna</p>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <button className="w-full flex items-center bg-primary text-white font-semibold gap-x-3 p-2 rounded-lg">
            <LogOut className={"w-10"} />
            Logout
          </button>
        </section>
			</aside>
			<main className="col-span-10 px-7 py-12">{children}</main>
		</main>
	);
}
