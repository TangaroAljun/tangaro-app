import React, { useState } from 'react';
import Citizen from './Citizen';
import SearchFilter from './SearchFilter';

const initialCitizens = [
  { name: 'Eddie Egas', age: 34, address: 'Laka, Liburon, San Fernando', status: 'Active' },
  { name: 'Rehito Canoy', age: 45, address: 'Sitio Lantawan, San Fernando', status: 'Inactive' },
  { name: 'Judith Tan', age: 29, address: 'Sitio, Walog, San Fernando', status: 'Active' },
  { name: 'Dodoy Flores', age: 62, address: 'Patag, San Fernando', status: 'Inactive' },
  { name: 'Welin Geonzon', age: 52, address: 'Sitio, Duckside, San Fernando', status: 'Active' },
  { name: 'Jaime Concepcion', age: 41, address: 'Hillside, San Fernando', status: 'Active' },
  { name: 'Sammy Degamo', age: 27, address: 'Top Hills, San Fernando', status: 'Inactive' },
  { name: 'Alice Alcoseba', age: 50, address: 'Sitio, Hades, San Fernando', status: 'Active' },
  { name: 'Kharen Remeticado', age: 38, address: 'Sitio, Alibay, San Fernando', status: 'Inactive' },
  { name: 'Medes Bacus', age: 66, address: 'Sitio, Kanto, San Fernando', status: 'Active' },
];

const Citizens = () => {
  const [citizens, setCitizens] = useState(initialCitizens);
  const [searchQuery, setSearchQuery] = useState('');

  const changeStatus = (index) => {
    const updatedCitizens = citizens.map((citizen, i) =>
      i === index ? { ...citizen, status: citizen.status === 'Active' ? 'Inactive' : 'Active' } : citizen
    );
    setCitizens(updatedCitizens);
  };

  const filterCitizens = () => {
    return citizens.filter((citizen) =>
      citizen.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <ul>
       
        {filterCitizens().map((citizen, index) => (
          <Citizen
            key={index}
            index={index}
            citizen={citizen}
            changeStatus={() => changeStatus(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Citizens;
