"use client";

import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Masonry from "react-masonry-css";
import "./stylecards.css";

import { changeNabvar } from "@/components/NavBar/Navbar";
import Details from "./Details";

import { anuncios } from "@/Data/dataAnuncios";

const Cards = ({
  categoria,
  active,
  selectedAtencion,
  textSearch,
  setResultadosEncontrados,
  setNothingFound,
  setModalFilterOpen,
  selectedNacionalidad,
  selectedRegion,
  selectedLugar,
  selectedIdioma,
  setDetailsModal
}) => {
  // const [anuncios, setAnuncios] = useState();
  const [filteredAnuncios, setFilteredAnuncios] = useState([]);
  const [updatedAnuncio, setUpdatedAnuncio] = useState(false);
  const [listen, setListen] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setListen(!listen);
  //     localStorage.removeItem("anuncioStorage");
  //     localStorage.removeItem("videoStorage");
  //     fetch("/api/anuncio")
  //       .then((data) => data.json())
  //       .then(({ data }) => {
  //         setAnuncios(data);
  //         localStorage.setItem("anuncioStorage", JSON.stringify(data));
  //         localStorage.removeItem("updatedAnuncio");
  //       });

  //   }, 60000);
  // }, [listen]);

  // useEffect(() => {
  //   const anuncioStorage = localStorage.getItem("anuncioStorage");
  //   const LocalUpdatedAnuncio = localStorage.getItem("updatedAnuncio");
  //   const parsedUpdatedAnuncio = JSON.parse(LocalUpdatedAnuncio);

  //   if (parsedUpdatedAnuncio !== updatedAnuncio) {
  //     setUpdatedAnuncio(parsedUpdatedAnuncio);
  //   }

  //   if (!anuncioStorage || updatedAnuncio) {
  //     fetch("/api/anuncio")
  //       .then((data) => data.json())
  //       .then(({ data }) => {
  //         setAnuncios(data);
  //         localStorage.setItem("anuncioStorage", JSON.stringify(data));
  //         localStorage.removeItem("updatedAnuncio");
  //       });
  //   }

  //   if (!anuncios) {
  //     const anunciosS = JSON.parse(anuncioStorage);
  //     setAnuncios(anunciosS);
  //   }
  // }, [updatedAnuncio]);

  // useEffect(() => {
  //   window.addEventListener("beforeunload", () => {
  //     localStorage.removeItem("anuncioStorage");
  //   });
  // }, []);

  useEffect(() => {
    const anunciosSegunNivel = anuncios?.sort((a, b) => {
      const niveles = ["BICHOTA", "MOTOMAMI", "SIMPLE"];
      const nivelA = niveles.indexOf(a.nivel);
      const nivelB = niveles.indexOf(b.nivel);
      return nivelA - nivelB;
    });

    setFilteredAnuncios(anunciosSegunNivel);
  }, [anuncios, changeNabvar]);

  useEffect(() => {
    // Filtra los anuncios basados en los filtros seleccionados
    const filteredAnun = anuncios?.filter((a) => {
      if (
        a?.nivel === "SIMPLE" ||
        a?.nivel === "MOTOMAMI" ||
        a?.nivel === "BICHOTA"
      ) {
        if (categoria && !a?.categorias?.includes(categoria)) {
          return false;
        }

        setNothingFound(false);
        setResultadosEncontrados(true);
        return true;
      }
    });

    if (filteredAnun?.length === 0 || !filteredAnun) {
      setNothingFound(true); // Establecer nothingFound en true si no se encontraron resultados
      setResultadosEncontrados(false);
      setFilteredAnuncios([]);
      // Si no hay valor de búsqueda, mostrar todos los anuncios en el orden deseado
      const anunciosSimples =
        anuncios?.filter((s) => s.nivel === "SIMPLE") || [];
      const anunciosMotoMami =
        anuncios?.filter((s) => s.nivel === "MOTOMAMI") || [];
      const anunciosBichota =
        anuncios?.filter((s) => s.nivel === "BICHOTA") || [];
      const anunciosSegunNivel = [
        ...anunciosBichota,
        ...anunciosMotoMami,
        ...anunciosSimples,
      ];
      setFilteredAnuncios(anunciosSegunNivel);
    }

    setNothingFound(false); // Establecer nothingFound en false si se encontraron resultados
    setResultadosEncontrados(true);

    const anunciosSimplesH =
      filteredAnun?.filter((s) => s.nivel === "SIMPLE") || [];
    const anunciosMotoMamiH =
      filteredAnun?.filter((s) => s.nivel === "MOTOMAMI") || [];
    const anunciosBichotaH =
      filteredAnun?.filter((s) => s.nivel === "BICHOTA") || [];
    const anunciosSegunNivelH = [
      ...anunciosBichotaH,
      ...anunciosMotoMamiH,
      ...anunciosSimplesH,
    ];

    if (anunciosSegunNivelH?.length > 0) {
      setFilteredAnuncios([]);
      setFilteredAnuncios(anunciosSegunNivelH);
      setModalFilterOpen(false);
      setFilteredAnuncios(filteredAnun);
    }
  }, [categoria, anuncios]);

  // Filtrar los anuncios según el valor de búsqueda
  useEffect(() => {
    console.log(textSearch);
    if (textSearch) {
      function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      }
      const textSearchWithoutAccents = removeAccents(textSearch.toLowerCase());
      const result = anuncios?.filter(
        (a) =>
          removeAccents(a?.name)
            ?.toLowerCase()
            .includes(textSearchWithoutAccents) ||
          removeAccents(a?.lugar)
            ?.toLowerCase()
            .includes(textSearchWithoutAccents) ||
          removeAccents(a?.region)
            ?.toLowerCase()
            .includes(textSearchWithoutAccents) ||
            a.name?.toLowerCase().includes(textSearch.toLowerCase()) ||
            (a.idFrontend && a.idFrontend.toLowerCase().startsWith(textSearch.toLowerCase()))
      );
      const anunciosSimples =
        result?.filter((s) => s.nivel === "SIMPLE") || [];
      const anunciosMotoMami =
        result?.filter((s) => s.nivel === "MOTOMAMI") || [];
      const anunciosBichota =
        result?.filter((s) => s.nivel === "BICHOTA") || [];
      const anunciosSegunNivel = [
        ...anunciosBichota,
        ...anunciosMotoMami,
        ...anunciosSimples,
      ];
      setFilteredAnuncios(anunciosSegunNivel);
    } else {
      setFilteredAnuncios([]);
      // Si no hay valor de búsqueda, mostrar todos los anuncios en el orden deseado
      const anunciosSimples =
        anuncios?.filter((s) => s.nivel === "SIMPLE") || [];
      const anunciosMotoMami =
        anuncios?.filter((s) => s.nivel === "MOTOMAMI") || [];
      const anunciosBichota =
        anuncios?.filter((s) => s.nivel === "BICHOTA") || [];
      const anunciosSegunNivel = [
        ...anunciosBichota,
        ...anunciosMotoMami,
        ...anunciosSimples,
      ];
      setFilteredAnuncios(anunciosSegunNivel);
    }
  }, [textSearch, anuncios]);



  const breakpointColumnsObj = {
    default: 4, // Número de columnas por defecto
    2200:4,
    1800: 4,
    1500: 4,
    1200: 3, // Cambiar a 4 columnas en pantallas de 1200px o menos
    992: 3, // Cambiar a 3 columnas en pantallas de 992px o menos
    768: 2, // Cambiar a 2 columnas en pantallas de 768px o menos
    610: 2, // Cambiar a 2 columnas en pantallas de 768px o menos
  };

  return (
    <containertotal className="flex flex-col items-center gap-4 w-screen min-h-screen dark:bg-dark-l bg-[#f4f4f4] mb-10">
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />

      <div className="w-[96%] sm:w-[70%]">
      <h1 className="text-[22px] font-bold ml-2 lg:ml-0 text-[#565656] dark:text-[#d3d3d3]">{textSearch ? `Resultados en ${textSearch}` : active === 'Kinesiólogas' ? 'Kinesiólogas en Perú' : active === 'Masajes' ? 'Mujeres para Masajes eróticos en Perú' : active === 'Videollamada hot' ? 'Mujeres para Videollamadas y Sexting en Perú' : active}</h1>
      </div>

      <Masonry
    breakpointCols={breakpointColumnsObj}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column"
  >
        {filteredAnuncios?.length > 0
          ? filteredAnuncios.map((a) => (
              <Card
                key={a.id}
                id={a.id}
                imagenPrincipal={a.imagenPrincipal}
                name={a.name}
                nacionalidad={a.nacionalidad}
                lugar={a.lugar}
                edad={a.edad}
                tarifaxhr={a.tarifaxhr}
                region={a.region}
                nivel={a.nivel}
                whatsapp={a?.whatsapp}
                anuncioTarifaPresencial={a?.tarifaPresencial}
                anuncioTarifaVirtual={a?.tarifaVirtual}
                setDetailsModal={setDetailsModal}
              />
            ))
          : ""}
           </Masonry>

    </containertotal>
  );
};

export default Cards;
