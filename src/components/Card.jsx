import React from 'react';
import { ReactComponent as Whatsapp } from '../assets/svg/icons8-whatsapp.svg';
import callIcon from '../assets/img/icons8-llamada-saliente-40.png';
import locationIcon from '../assets/img/icons8-marcador-16.png';
import foodImg from '../assets/img/food.jpg';
import vegetablesImg from '../assets/img/market.jpg';
import servicesImg from '../assets/img/services.jpg';
import othersImg from '../assets/img/others.jpg';
import covidProtectionImg from '../assets/img/salud.jpg';

const Card = (props) => {
  const {
    name = 'Los Pollos Hermanos',
    product = 'Pollo frito y broaster',
    description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, nisi natus laboriosam minus quibusdam maiores?',
    tel = '3224578932',
    whatsapp = true,
    city = 'Albuquerque',
    sector = 'dowtown',
    type = 'Productos agricolas',
    delivery = true,
  } = props;

  const formatPhoneNumber = (phoneNumberString) => {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `${match[1]} ${match[2]} ${match[3]}`;
    }
    return null;
  };

  function imageRelated(type) {
    switch (type) {
      case 'Alimentos preparados':
        return foodImg;
      case 'Productos agricolas':
        return vegetablesImg;
      case 'Productos sanitarios para la contigencia covid19':
        return covidProtectionImg;
      case 'Viveres supermercado':
        return vegetablesImg;
      case 'Servicios':
        return servicesImg;
      default:
        return othersImg;
    }
  }

  return (
    <div className='shadow-2xl bg-white mx-4 my-8 rounded-lg max-w-xs relative' style={{ maxHeight: '476px' }}>
      <img className='object-cover w-full h-32 rounded-lg rounded-b-none ' src={imageRelated(type)} alt={product} />
      <div className='p-4'>
        <h2 className='text-2xl capitalize font-extrabold'>{product}</h2>
        <p className='text-gray-600 font-semibold uppercase text-xs'>{name}</p>
        <p className='py-3'>{description}</p>
        <div className='pb-12'>
          <hr className='my-3' />
          <div className='flex justify-between text-sm'>
            <div className='flex justify-start'>
              <img className='w-5' src={locationIcon} alt='' />
              <span>{city}</span>&nbsp; -&nbsp; <span>{sector}</span>
            </div>
            {delivery === 'gratis' && (
              <div>
                Domicilio <span className='font-black'>Gratis</span>
              </div>
            )}
          </div>
        </div>
        <div className='flex justify-between mt-5 pb-2 absolute bottom-0 w-full pr-8'>
          {whatsapp === 'Si' && (
            <a
              className='w-full flex justify-center border-solid border border-teal-500 rounded h-10 mr-2'
              href={`https://api.whatsapp.com/send?phone=57${tel}&text=Hola vi tu anuncio en Tunja Digital`}
            >
              <Whatsapp height='37px' />
            </a>
          )}
          <a
            className='w-full flex justify-center border-solid border border-teal-500 rounded h-10 flex justify-center items-center'
            href={`tel:+57${tel}`}
          >
            <img className='w-4' src={callIcon} alt='' />
            &nbsp;
            {formatPhoneNumber(tel)}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
