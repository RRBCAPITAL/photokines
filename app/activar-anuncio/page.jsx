import ActivarAnuncio from '@/components/ActivarAnuncio/ActivarAnuncio'

export const metadata = {
  title: "Metodos de pago - Photokinnes",
  description: "Publica tu anuncio totalmente gratis en Photokinnes, estos son nuestros planes para activar tu anuncio.",
  metadataBase: new URL(
    "https://photokinnes.com/activar-anuncio" ||
      "https://www.photokinnes.com/activar-anuncio"
  ),
  alternates: {
    canonical: "/",
  },
};


const ActivarAnuncioPage = () => {
  
  return (
      <>
        <ActivarAnuncio />
      </>
      )
}

export default ActivarAnuncioPage