import ImageSquare from "@/icons/imageSquare";
import Link from "next/link";

export default function TambahSertifikat() {
  return (
    <>
      <section className="flex border-8 border-dashed border-zinc-600 justify-center rounded-3xl items-center md:px-8 min-h-[70vh] my-10 px-4 sm:px-6">
        <section className="flex flex-col text-center gap-y-5 items-center">
          <ImageSquare className={"w-16 sm:w-20"} />
          <h1 className="text-xl font-semibold sm:text-2xl">
            Silahkan Masukkan Template Sertifikat di Sini!
          </h1>
          <p className="text-lg sm:text-xl">Hanya Mendukung JPG dan PNG</p>
        </section>
      </section>
      <Link
        href="/dashboard/input-data-sertifikat"
        className="block md:px-8 mt-5 px-4 sm:px-6"
      >
        <button className="bg-brand-primary p-3 rounded-lg text-lg text-white w-full font-semibold sm:text-xl">
          Submit
        </button>
      </Link>
    </>
  );
}
