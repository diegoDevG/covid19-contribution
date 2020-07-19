import React from 'react';
import Search from './Search';
import { Link, useLocation } from 'react-router-dom';
import headerBk from '../assets/img/header-background.png';

const Header = () => {
  const location = useLocation();
  const isPublishPage = location.pathname === '/publicar';
  
  return (
    <header
      className='h-40 bg-teal-600 flex justify-center pb-4 flex-col items-center relative'
      style={{ 
        background: 'linear-gradient(45deg, teal, #00002e)', 
        backgroundImage: `url(${headerBk})`,
        backgroundPosition: 'right'
        } }
    >
      <div className='text-white text-4xl' style={{
        textShadow: '1px 1px #009688'
      }}>{isPublishPage ? `Publica Gratis` : `Que necesitas?`}</div>
      {!isPublishPage && <Search />}
      <Link
        to={isPublishPage ? '/' : '/publicar'}
        className='self-end bg-indigo-900 text-white w-full py-2 px-4 mt-4 -mb-10 align-middle text-center absolute bottom-0 hover:bg-indigo-800'
      >
        {isPublishPage ? 'Ir al inicio' : 'Publicar nuevo anuncio'}
      </Link>
    </header>
  );
};

export default Header;
