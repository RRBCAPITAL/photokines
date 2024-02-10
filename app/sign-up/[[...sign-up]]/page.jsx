import { SignUp } from "@clerk/nextjs";
import { Poppins } from "next/font/google";

const quick = Poppins({ subsets: ['latin'], weight: ["400", "600"] })

export const metadata = {
  title: "Registrarse a Photokinnes - Kinesiólogas y putas en Peru",
  description:
    "Registrate a Photokinnes y publica tu anuncio totalmente gratis.",
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL(
    "https://photokinnes.com/sign-up" ||
      "https://www.photokinnes.com/sign-up"
  ),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "RRB CAPITAL" }],
  publisher: 'RRB CAPITAL',
};

export default function Page() {

  return (
    <div className={quick.className}>
      <div className="w-screen min-h-screen overflow-hidden flex flex-col items-center bg-back-light relative">
      <div className="z-10 mt-20 m-4 bg-[#0000003e] shadow-sm p-[2px] rounded-[20px] relative">
        
        <section className="m-4 p-4 rounded-[20px]">
        <h1 className="mb-2 text-center text-white font-bold text-xl shadow-normal bg-[#103fef] rounded-[10px] w-[88%] p-2 mx-auto">Registrarse a Photokinnes</h1>
          <div className="flex flex-col sm:flex-row gap-2">
            <SignUp />
          </div>
        </section>
      </div>
      <img
        src="/assets/bannerfulla.jpg"
        alt=""
        className="fixed z-0 top-0 left-0 w-screen min-h-screen overflow-hidden object-cover"
      />
    </div>
    </div>
  );
}
