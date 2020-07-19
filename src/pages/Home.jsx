import React, { useState, useEffect, useContext } from 'react';
import Card from '../components/Card';
import loader from '../assets/img/loader.gif';
import { QueryContext } from './../utilities/QueryContext';

const Home = () => {
  const { value } = useContext(QueryContext);
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://sheet.best/api/sheets/49fc3e61-7560-4b11-8b63-0660704602e5');
        const jsonData = await response.json();
        setResult(jsonData);
        setIsLoading(false);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const data = [
    {
      timeStamp: '9/4/2020 20:22:02',
      name: 'Diego Cardenas',
      product: 'Tapabocas',
      description: 'Tapabocas en tela antifluidos con diseños',
      tel: '3219222150',
      whatsapp: 'Si',
      city: 'Tunja',
      sector: 'Los muiscas',
      type: 'Productos sanitarios para la contigencia covid19',
      delivery: 'Si',
    },
    {
      timeStamp: '9/4/2020 20:56:51',
      name: 'Chorizos Juana de Arco',
      product: 'Chorizos y arepas',
      description: 'Chorizos y arepas santandereanas en tunja y a domicilio gratis',
      tel: '3219222150',
      whatsapp: 'No',
      city: 'Tunja',
      sector: 'JJ camacho',
      type: 'Alimentos preparados',
      delivery: 'No',
    },
    {
      timeStamp: '10/4/2020 8:31:39',
      name: 'Pollos el dorado',
      product: 'Pollo asado',
      description: 'Pollo asado encombos familiares',
      tel: '3124567893',
      whatsapp: 'Si',
      city: 'Tunja',
      sector: 'San ignacio',
      type: 'Alimentos preparados',
      delivery: 'No',
    },
    {
      timeStamp: '10/4/2020 8:33:01',
      name: 'Pepito ',
      product: 'pepitas',
      description:
        'petias de colores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum aut recusandae, saepe ipsa obcaecati repudiandae perferendis officiis! Cupiditate, similique. y si y sdll',
      tel: '3214567890',
      whatsapp: 'No',
      city: 'Tunja',
      sector: 'Muiscas',
      type: 'Viveres supermercado',
      delivery: 'Si',
    },
    {
      timeStamp: '10/4/2020 8:35:40',
      name: 'Angela',
      product: 'postres',
      description: 'Ricos postres de mama y sopitas de la abuela, domicilio gratis solo en el centro de Tunja',
      tel: '3214567893',
      whatsapp: 'Si',
      city: 'Tuna',
      sector: 'san ignacio',
      type: 'Alimentos preparados',
      delivery: 'No',
    },
  ];

  const filterData = result.filter((item) => {
    if (item.delivery === 'Si') {
      item.delivery = 'gratis';
    }
    return `${item.product} ${item.name} ${item.description} ${item.delivery} ${item.sector} ${item.city}`
      .toLowerCase()
      .includes(value.toLowerCase());
  });

  return (
    <>
      <main className='flex flex-wrap max-w-screen-xl mx-auto mt-12 justify-center bg-mainColor' style={{ minHeight: 'calc(100vh - 264px)' }}>
        {isLoading && <img src={loader} alt='cargando... ' />}
        {filterData.length === 0 && !isLoading ? (
          <div>Parece que nadie esta ofreciendo lo que buscas :( Prueba con otro termino de busqueda o vuelve en unos dias. </div>
        ) : (
          filterData.map((ad) => (
            <Card
              key={ad.timeStamp}
              name={ad.name}
              product={ad.product}
              description={ad.description}
              tel={ad.tel}
              whatsapp={ad.whatsapp}
              city={ad.city}
              sector={ad.sector}
              type={ad.type}
              delivery={ad.delivery}
            />
          ))
        )}
      </main>
    </>
  );
};

export default Home;
