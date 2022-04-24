import React from 'react';

const PokemonStats = (props) => {
  const stats = props.stats;
  return (
    <div className='flex flex-row flex-wrap justify-between p-4 '>
      {stats.map((stat, index) => {
        return (
          <div key={index} className={'flex flex-col text-center w-2/6'}>
            <p className='font-bold text-2xl text-white capitalize'>{stat.base_stat}</p>
            <p className='font-normal text-lg text-gray-200 capitalize'>{stat.stat.name}</p>
          </div>
        );
      })}

    </div>
  );
};

export default PokemonStats;
