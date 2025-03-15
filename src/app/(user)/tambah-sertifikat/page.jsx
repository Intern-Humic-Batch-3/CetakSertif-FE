import ImageSquare from "@/icons/imageSquare";
import Link from "next/link";

export default function TambahSertifikat() {
  return (
    <>
      <section className="my-10 min-h-[70vh] flex justify-center items-center border-8 border-dashed border-zinc-600 rounded-3xl">
        <section className="flex flex-col items-center gap-y-5">
          <ImageSquare className={"w-20"} />
          <h1 className="text-2xl font-semibold">
            Silahkan Masukkan Template Sertifikat di Sini!
          </h1>
          <p className="text-xl">Hanya Mendukung JPG dan PNG</p>
        </section>
      </section>
      <Link href="input-data-sertifikat" className="mt-5">
        <button className="w-full bg-brand-primary text-white text-xl font-semibold rounded-lg p-3">
          Submit
        </button>
      </Link>
    </>
  );
}
