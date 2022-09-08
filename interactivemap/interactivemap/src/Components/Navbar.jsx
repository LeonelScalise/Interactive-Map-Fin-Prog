import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi'
import { Buttons } from './Button';
import { cambiarZona } from './App';
import { zonaPatagonica } from "../Zonas/Patagonia.jsx";
import { zonaCuyo } from "../Zonas/Cuyo.jsx";
import { zonaLitoral } from "../Zonas/Litoral.jsx";
import { zonaNoroeste } from "../Zonas/Noroeste.jsx";
import { zonaSierras } from "../Zonas/Sierras y La Pampa.jsx";
import { buenosAires } from "../Zonas/Buenos Aires.jsx";


export const Navbar = ({ setZona }) => {
  

  return (
    <div className='w-full h-20 flex sticky z-50 top-0 bg-red-200 justify-around items-center px-8'>
      <h1 className='text-2xl font-bold text-[#00df9a]'>ENERGÍA EN ARGENTINA.</h1>
      <ul className='flex items-center'>
        <li className='p-4'>
          <Buttons Zona="Cuyo" onClick={() => setZona(zonaCuyo)} />
        </li>
        <li className='p-4'>
          <Buttons Zona="Litoral" onClick={() => setZona(zonaLitoral) } />
        </li>
        <li className='p-4'>
          <Buttons Zona="Noroeste" onClick={() => setZona(zonaNoroeste) }/>
        </li>
        <li className='p-4'>
          <Buttons Zona="Buenos Aires" onClick={() => setZona(buenosAires) }/>
        </li>
        <li className='p-4'>
          <Buttons Zona="Sierras y La Pampa" onClick={() => setZona(zonaSierras) }/>
        </li>
        <li className='p-4'>
          <Buttons Zona="Patagonia" onClick={() => setZona(zonaPatagonica) }/>
        </li>
      </ul>
    </div>
  );
};
