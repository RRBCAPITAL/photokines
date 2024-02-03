import Link from "next/link"
import { AiFillFacebook, AiFillInstagram, AiFillTiktok } from 'react-icons/ai'
import { SiTiktok, SiInstagram, SiFacebook, SiTelegram } from "react-icons/si";
import { Poppins } from 'next/font/google'

const quick = Poppins({ subsets: ['latin'], weight: ["400", "600"] })

const Footer = () => {
  return (
    <div className={quick.className}>
        <footer className='flex flex-col items-center justify-center text-white bg-back-red pt-[2rem] lg:pt-[5rem] text-[1rem]'>
        <div className='grid sm:grid-cols-4 mx-10 lg:mx-20 gap-10 sm:gap-40'>
            <div className='footer-1'>
                <Link href={'/'} className="flex flex-col gap-4 max-w-[180px]">
                    <h1 className="text-2xl font-extrabold">Photokinnes</h1>
                    <h2>Conectamos escorts y kinesiólogas a nivel nacional.</h2>
                </Link>
            </div>  

            <div className="flex flex-col gap-4">
                <h4 className="text-xl font-extrabold">Enlaces</h4>
                <ul className="flex flex-col gap-1">
                    <li><Link href={'/'}>Mujeres</Link></li>
                    <li><Link href={'/sign-in'}>Iniciar sesión</Link></li>
                    <li><Link href={'/crear-anuncio'}>Crear anuncio</Link></li>
                    <li><Link href={'/activar-anuncio'}>Planes de publicación</Link></li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="text-xl font-extrabold">Primacy</h4>
                <ul className="flex flex-col gap-4">
                    {/* <li><Link href={'/'}>Política de privacidad</Link></li> */}
                    <li><Link target="_blank" href={'https://drive.google.com/file/d/1H1T-qnLR4bL4JWBkqTff3pnf8qfCqUA_/view'}>Términos y condiciones</Link></li>
                    {/* <li><Link href={'/faqs'}>Política de reembolso</Link></li> */}
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="text-xl font-extrabold">Contacto</h4>
                <div className="flex flex-col gap-4">
                    <p className="sm:text-[10px] lg:text-[16px]">rrbcapital24@gmail.com</p>
                    {/* <h3>Mensaje :</h3>
                    <input type="text" placeholder="Escribe tu correo" className="p-[0.8rem] max-w-[260px] rounded bg-slate-900 text-white outline-none"/>
                    <textarea
                                className="min-h-[100px] max-w-[260px] p-[0.8rem] rounded bg-slate-900 outline-none"
                                name=""
                                id=""
                                placeholder="Escribe tu mensaje"
                                style={{ resize: "none" }}
                              />
                    <button className="p-[0.8rem] max-w-[260px] rounded bg-slate-900 hover:bg-[#6f01ff] border-2 border-[#6f01ff] text-white outline-none">Enviar</button> */}
                </div>

                <h4 className="text-xl font-extrabold">Redes sociales</h4>
                <ul className="socials flex gap-2">
                    <li><Link target="_blank" href={'https://www.instagram.com/papayahub_pe/'} className="flex gap-1">
                        <h1>IG</h1>
                        <SiInstagram className="my-auto"/></Link></li>
                    <li><Link target="_blank" href={'https://t.me/+kRPGKNx2eNZlNmQ5'} className="flex gap-1">
                        <h1>Telegram</h1>
                        <SiTelegram className="my-auto"/></Link></li>
                    {/* <li><Link target="_blank" href={'https://www.tiktok.com/@papayahub_pe'} className="flex gap-1">
                        <h1>Tik tok</h1>
                        <SiTiktok className="my-auto"/></Link></li>           */}
                </ul>
            </div>
  
        </div>
        <div className="text-center mt-[4rem] py-[0.8rem] mx-auto border-t border-slate-500 w-screen">
                <small>Copyright &copy; Photokinnes 2024</small>
        </div>
        
    </footer>
    </div>
  )
}

export default Footer