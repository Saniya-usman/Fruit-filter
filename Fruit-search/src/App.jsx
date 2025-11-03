import React, { useMemo, useState } from 'react'

const App = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const items = ['Apple 🍎', 'Banana 🍌', 'Grapes 🍇', 'Orange 🍊', 'Mango 🥭', 'Green Apple🍏','Watermelon🍉', 'Strawberry🍓', 'Blueberries🫐', 'Melon🍈', 'Cherries🍒','Peach🍑','Pineapple🍍','Kiwi🥝','Coconut🥥','Pear🍐','Tomato🍅','Tangerine🍊','Lime🍋','🍋 Lemon']

  const handleChange = (e) =>{
    setsearchTerm(e.target.value)
  }
  const filteredItems = useMemo(() =>{
    return (
      items.filter((item) =>{
        return item.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
  },[searchTerm])
  return (
    <>
    <div className='h-screen w-full bg-gray-800 text-2xl text-white items-center px-60 py-20'>
      <div className='h-100 w-80 bg-gray-700 rounded-4xl text-center shadow-2xl hover:scale-110 overflow-hidden '>
        <h2 className='italic text-blue-300 font-serif font-bold p-4'>🍎🍌🍇Fruit Filter</h2>
        <input className="rounded-full border border-gray-400 bg-transparent px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300" type="text" placeholder='Search fruit' value={searchTerm} onChange={handleChange} />
        <ul >
          {filteredItems.map((item, index) =>{
            return <li className="text-lg text-center py-1 font-medium text-gray-100 
                 transition-all duration-300 transform hover:scale-105 hover:text-blue-300 cursor-pointer" key={index}>{item}</li>
          })}

        </ul>
      </div>
    </div>
    </>
  );
}

export default App