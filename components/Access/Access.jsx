"use client"

import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { usePathname } from "next/navigation";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import SMSFlotante from "./SMSFlotante";
import useCurrentUser from "@/hooks/customhooks/useCurrentUser";
import BannerAnuncios from "../BannerAnuncios/BannerAnuncios";
// import axios from "axios";

const Access = ({ children }) => {

  const pathname = usePathname();
  const mensaje ="&text=Hola%2C%20estoy%20interesad@%20en%20unirme%20a%20un%20equipo%20de%20desarrollo.";
  // const { user, currentUser} = useCurrentUser()
  const user = useUser()
  const [ userData, setUserData ] = useState(null)

  // const userCreate = {
  //   clerkId: user?.user?.id || '', // Usar un valor predeterminado si 'user' o 'user.user' es nulo
  //   firstname: user?.user?.firstName || '',
  //   username: user?.user?.username || "",
  //   phone: user?.user?.phoneNumbers[0]?.phoneNumber || "",
  //   // lastname: user?.user?.lastName || '',
  //   fullname: user?.user?.fullName || '',
  //   email: user?.user?.emailAddresses[0]?.emailAddress || '',
  //   image: user?.user?.imageUrl || '',
  // };

    // useEffect(() => {
    //   const storedUser = localStorage.getItem("storedUser");
    //   if(user && !userData && !storedUser){
    //     console.log("entre aqui");
    //     // El usuario no está almacenado localmente, así que guárdalo en la base de datos
    //     fetch("/api/user", {
    //       method: "POST",
    //       body: JSON.stringify(userCreate),
    //       headers: { "Content-type": "application/json; charset=UTF-8" },
    //     })
    //       .then((data) => data.json())
    //       .then((res) => {
    //         console.log(res);
    //         // Almacena el usuario en el almacenamiento local
    //         setUserData(res.user)
    //         localStorage.setItem("storedUser", JSON.stringify(res.user));
    //       })
    //       .catch((error) => console.log("Hubo un error: ", error.message));
    //   }
    //   const parsedUser = JSON.parse(storedUser) 

    //    if(!userData){
        
    //     setUserData(parsedUser)
    //    }
      
    //   console.log("estoy aqui");
    // }, [user, userData]);


  return (
    <>
      {
      pathname === "/login" ||
      pathname === "/register" ||
      pathname === "/dashboard" ||
      pathname === "/dashboard/users" ||
      pathname === "/demoform" ||
      pathname === '/dashboard/crear-equipo' ||
      pathname === '/dashboard/equipos' ||
      pathname === '/dashboard/videos' ||
      pathname === '/dashboard/cositas'
        ? ""
        : <>
        <Navbar />
        </>
        }
      {children}

      {pathname === "/sign-in" ||
      pathname === "/sign-up" ||
      pathname === "/login" ||
      pathname === "/register" ||
      pathname === "/dashboard" ||
      pathname === "/dashboard/users" ||
      pathname === "/guia" ||
      pathname === `/guia/react` ||
      pathname === `/guia/svelte` ||
      pathname === `/guia/angular` ||
      pathname === `/guia/vue`||
      pathname === `/proyectos`||
      pathname === "/demoform" ||
      pathname === "/dashboard-de-usuario" ||
      pathname === "/formulario-de-inscripcion"||
      pathname === '/dashboard/crear-equipo' ||
      pathname === '/dashboard/equipos' ||
      pathname === "/soporte" ||
      pathname === "/vip" ||
      pathname === '/dashboard/videos' ||
      pathname === '/dashboard/cositas'
        ? ""
        : <Footer />}

       {
      pathname === "/register" ||
      pathname === "/dashboard" ||
      pathname === "/dashboard/users" ||
      pathname === '/dashboard/crear-equipo' ||
      pathname === '/dashboard/equipos'
      ? "" : <SMSFlotante />
       }
    </>
  );
};

export default Access;

{/* <SMSFlotante /> */}