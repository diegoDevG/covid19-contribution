import React from 'react';

const Footer = () => {
  return (
    <footer className='text-white' style={{ background: 'linear-gradient(45deg, teal, #0f4c8a)' }}>
      <div className='text-center py-4'>
        <p>
          Iniciativa sin animo de lucro, creada por{' '}
          <a className=' text-indigo-300 hover:text-teal-300' href='https://twitter.com/tunja_digital'>
            @tunja_digital
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
