import ImageSquare from "@/icons/imageSquare";
import Link from "next/link";

export default function TambahSertifikat() {
  return (
    <>
      <section className="my-10 min-h-[70vh] flex justify-center items-center border-8 border-dashed border-zinc-600 rounded-3xl w-[80%] mx-auto p-4 px-6 sm:px-0">
        <section className="flex flex-col items-center gap-y-5 w-full">
          <ImageSquare className="w-20" />
          <h1 className="text-xl font-semibold text-center">
            Silahkan Masukkan Sertifikat Template di Sini!
          </h1>
          <p className="text-base text-center">Hanya Mendukung JPG dan PNG</p>
        </section>
      </section>
      <div className="flex justify-center ">
        <Link
          href="/dashboard/input-data-sertifikat"
          className="mt-5 w-[80%] md:w-[60%] xl:w-[40%] px-4"
        >
          <button className="w-full bg-brand-primary text-white text-xl font-semibold rounded-lg p-3 mb-10">
            Submit
          </button>
        </Link>
      </div>
    </>
  );
}
