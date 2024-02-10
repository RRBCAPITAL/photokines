import Inicio from "@/components/Inicio/Inicio";

export const metadata = {
  title: "Kinesiólogas 😍en Lima I Photokines✅",
  description:
    "Chibolas debutantes reales, jovencitas, anfitrionas, escorts peruanas, kines venezolanas y kinesiologas colombianas que ofrecen servicios sexuales en Lince, San Borja, Comas, Villa Maria, Villa el Salvador, Ate, Chorrillos, Miraflores, San juan de lurigancho, Villa el Salvador y Villa Maria",
  icons: {
    icon: ["/favicon_io/favicon.ico?v=4"],
    apple: ["/favicon_io/apple-touch-icon.png?v=4"],
    shortcut: ["/favicon_io/apple-touch-icon.png"],
  },
  keywords: [
    "kinesiologas lima",
    "kines los olivos",
    "kines teens",
    "kines lima",
    "prostitutas lima",
    "kines surco",
    "kines surco",
    "caletas lima",
    "putas peruanas",
    "putas extranjeras",
    "anfitrionas lima",
    "kines miraflores",
    "kinesiologas venezolanas",
  ],
  referrer: "origin-when-cross-origin",
  metadataBase: new URL(
    "https://photokinnes.com/" ||
      "https://www.photokinnes.com/"
  ),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "RRB CAPITAL" }],
  publisher: "RRB CAPITAL",
};

export default function Home() {
  return (
    <>
      <main className="dark:bg-dark-l bg-white flex">
        <Inicio />
      </main>
    </>
  );
}
