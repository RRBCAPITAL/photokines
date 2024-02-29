// Librerías externas
import { Suspense } from "react";
import Head from "next/head";

// Componentes locales
import Access from "@/components/Access/Access";
import Loading from "./loading";

// Estilos locales
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";
import { dark } from "@clerk/themes";

import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "./GoogleAnalytics";
import { Quicksand } from "next/font/google";
import { Poppins } from "next/font/google";

const quicksand = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <>
      <ClerkProvider
        appearance={{
          layout: {
            // helpPageUrl: "https://clerk.com/support",
            // logoImageUrl: "https://clerk.com/logo.png",
            // logoPlacement: "inside",
            // privacyPageUrl: "https://clerk.com/privacy",
            showOptionalFields: false,
            socialButtonsPlacement: "top",
            socialButtonsVariant: "iconButton",
            // termsPageUrl: "https://clerk.com/terms",
          },
          variables: {
            // colorPrimary: "#febd57",
            // colorBackground: "#fff9e6",
            // colorText: "black",
            // fontFamily: "Nunito"
          },
        }}
        localization={esES}
      >
        <html lang="es" className={quicksand.className}>
          <body className="w-screen overflow-x-hidden">
            <GoogleAnalytics />
            <Suspense fallback={<Loading />}>
              <Access children={children} />
            </Suspense>
            <Analytics />
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
