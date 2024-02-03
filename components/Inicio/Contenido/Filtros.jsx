"use client";

import { useEffect, useRef } from "react";
import { useState } from "react";
import { TbFilterStar } from "react-icons/tb";
import ModalFilter from "../ModalFilter";

import { motion, useAnimation } from "framer-motion";
import { changeIn } from "@/utils/motionTransitions";

import { categorias, categoriasNameIcon, categoriasS } from "@/Data/data";

import "./styles.css";

import { Poppins } from "next/font/google";

const quick = Poppins({ subsets: ["latin"], weight: "400" });

const Filtros = ({
  setCategoria,
  setTextSearch,
  setActive,
  active,
  setModalFilterOpen,
  setSelectedNacionalidad,
  setSelectedRegion,
  setSelectedLugar,
  setSelectedIdioma,
}) => {
  const [nombreid, setNombreid] = useState();

  const [scrollDirection, setScrollDirection] = useState("down");
  const controls = useAnimation();

  const handleCategoriaChange = (e) => {
    const selectedCategoria = e.target.value;
    setCategoria(selectedCategoria);
    setActive(selectedCategoria);

    // Realiza otras acciones según sea necesario
    if (selectedCategoria === "Escort") {
      handleReset();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 50 && scrollDirection === "down") {
        setScrollDirection("up");
        controls.start({ y: -100, opacity: 0 });
      } else if (scrollTop <= 50 && scrollDirection === "up") {
        setScrollDirection("down");
        controls.start({ y: 0, opacity: 1 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection, controls]);

  const handleClickSearch = (e) => {
    const { value } = e.target;
    setNombreid(value);
    setTextSearch(value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      // Si se presiona la tecla Enter, ejecuta la búsqueda
      handleClickSearch();
    }
  };

  const handleReset = () => {
    // setNombreid("");
    // setTextSearch(nombreid),
    //   setSelectedNacionalidad(""),
    //   setSelectedIdioma(""),
    //   setSelectedLugar(""),
    //   setSelectedRegion("");
    setCategoria("");
  };

  const l = categoriasNameIcon?.length;

  console.log(nombreid);

  return (
    <div className={quick.className}>
      <motion.div
        variants={changeIn(0.3)}
        initial="show"
        animate={controls}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        exit="hidden"
        className="z-[999] flex flex-col p-2 text-white bg-white dark:bg-dark-l overflow-hidden"
      >
        {/*
          
          <div className='flex flex-col lg:flex-row gap-1 items-center justify-center'>
       <div className='flex gap-1 items-center justify-center'>
       <button
          type='submit'
          className='flex gap-2 my-auto text-xl font-bold p-4 bg-back-red hover:bg-[#ff894a] transition-all ease-linear duration-300 rounded-[10px]'
          
          >
            <nav className='my-auto text-sm lg:text-xl font-extrabold text-white'>Buscar</nav>
            <TbFilterStar className='my-auto text-white'/>
        </button>
        <button className='flex gap-2 my-auto text-xl font-bold p-4 bg-slate-600 hover:bg-slate-700 transition-all ease-linear duration-300 rounded-[10px]' onClick={() => setModalFilterOpen(true)}>
            <nav className='my-auto text-sm lg:text-xl font-extrabold text-white'>Filtrar</nav>
            <TbFilterStar className='my-auto text-white'/>
        </button>
       </div>

        <button className='flex gap-2 my-auto text-xl font-bold p-4 bg-[#542eff] hover:bg-[#3f01aa] transition-all ease-linear duration-300 rounded-[10px]' onClick={handleReset}>
            <nav className='my-auto text-sm lg:text-xl font-extrabold text-white'>Ver todas las chicas</nav>
            <TbFilterStar className='my-auto text-white'/>
        </button>
        </div>
          
        </form> */}

        <bannercontainer className="w-screen flex mt-[50px] bg-transparent relative">
          <iconos className="z-30 lg:w-[82%] lg:flex-row overflow-hidden">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 lg:mx-0 lg:px-[1.5rem] overflow-hidden">
              <h1 className="text-black dark:text-white font-bold">
                Categorías:
              </h1>
              {categoriasS.map((i, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setCategoria(i);
                    setActive(i);

                    i === "Kinesiólogas" && handleReset();
                  }}
                  className={`cursor-pointer px-2 py-1 rounded text-[16px] sm:text-normal ${
                    active === i
                      ? "bg-back-red text-white"
                      : "bg-back-blue text-black"
                  }  overflow-hidden`}
                >
                  <h1>{i}</h1>
                </div>
              ))}
            </div>

            <div className="z-30 w-[20%] flex justify-center gap-2">
              {/* <button
              className="flex gap-2 my-auto text-sm font-light px-2 py-4 text-slate-400 border-2 border-slate-400 transition-all ease-linear duration-300 rounded-[10px]"
              onClick={() => setModalFilterOpen(true)}
            >
              <nav className="my-auto text-sm lg:text-sm font-extrabold">
                Filtros
              </nav>
              <TbFilterStar className="my-auto text-slate-400" />
            </button> */}

              {/* <button
              className="flex gap-1 my-auto text-sm font-light px-2 py-4 text-slate-400 border-2 border-slate-400 transition-all ease-linear duration-300 rounded-[10px]"
              onClick={handleReset}
            >
              <nav className="my-auto text-sm lg:text-sm font-extrabold">
                Todo
              </nav>
              <TbFilterStar className="my-auto" />
            </button> */}
            </div>
          </iconos>
        </bannercontainer>

        <div
          onKeyUp={handleKeyUp}
          className="lg:h-[46px] flex sm:flex-row flex-col w-[99%] mt-4 gap-2 lg:px-[1.5rem]">

          <div className="flex gap-1 w-[300px]">
          <input
            type="text"
            name="nombreid"
            value={nombreid}
            onChange={handleClickSearch}
            className="w-[90%] lg:w-full sm:h-[46px] active:text-[#818181] my-auto outline-none text-sm sm:text-[16px] bg-white dark:bg-black border-2 border-[#e3e3e3] p-4 placeholder:text-[#818181] placeholder:font-medium placeholder:text-[16px] text-black dark:text-[#818181]"
            placeholder="¿Dónde estás?"
          />
          {/* <button type="submit" className="px-2 py-1 text-white bg-back-red">
            Buscar
          </button> */}
          </div>
        </div>

            <div className="lg:h-[46px] mt-4 lg:mt-0 flex sm:flex-row flex-col w-[99%] gap-2 lg:px-[1.5rem]">
            <select
            value={active} // Asumiendo que 'active' es el valor seleccionado
            onChange={handleCategoriaChange}
            className="flex lg:h-[46px] bg-transparent text-black dark:text-white outline-none w-fit flex-col sm:flex-row gap-2 sm:gap-4 lg:mx-0 lg:px-[1.5rem] overflow-hidden"
          >
            <option value="">Listado de categorías</option>
            {categorias.map((i, index) => (
              <option
                key={index}
                value={i}
                className={`cursor-pointer px-2 py-1 rounded text-[16px] sm:text-normal ${
                  active === i ? "bg-back-red text-white" : "bg-back-blue text-black"
                } overflow-hidden`}
              >
                {i}
              </option>
            ))}
          </select>
            </div>
      </motion.div>
    </div>
  );
};

export default Filtros;
