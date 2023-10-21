import React, { useState, useContext, useEffect } from 'react'
import { Select } from '@chakra-ui/select'
import { Checkbox, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { DarkModeContext } from '../context/darkmode'
import datas from '../database/data'
import Cards from '../components/Cards'
import { Input } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { useParams } from 'react-router-dom';

export default function Product () {
  const [theme, setTheme] = useContext(DarkModeContext)

  const checkboxes = [
    { id: 'POPULAR', children:[]},
    { id: 'BEERS', children: [] },
    { id: 'COGNAG', children: [] },
    { id: 'GIN', children: [] },
    { id: 'MIXERS', children: [] },
    { id: 'RUM', children: [] },
    { id: 'SAKE', children: [] },
    { id: 'SOJU', children: ['SOJU IMPORT', 'SOJU LOCAL'] },
    { id: 'SPIRIT', children: ['JAPANESE SPIRIT', 'OTHER SPIRIT'] },
    { id: 'VODKA', children: [] },
    { id: 'WINE', children: ['ARGENTINA WINE', 'AUSTRALIA WINE', 'CHILE WINE', 'FRENCH WINE', 'GERMANY WINE', 'ITALY WINE', 'LOCAL / BALI WINE', 'NEW ZEALAND WINE','SOUTH AFRICA WINE', 'SPAIN WINE',  'PORT WINE'] },
    { id: 'WHISKY', children: [] },
  ];

  // Category Filter
  let [categoryFilters, setcategoryFilters] = useState(new Set());

  function updateFilters(checked, categoryFilter) {
    if (checked)
      setcategoryFilters((prev) => new Set(prev).add(categoryFilter));
    if (!checked)
      setcategoryFilters((prev) => {
        const next = new Set(prev);
        next.delete(categoryFilter);
        return next;
      });
  }

  let filteredProducts = datas.filter((product) => {
    if (categoryFilters.size === 0) {
      return true;
    } 
    else {
      return (
        categoryFilters.has(product.category) ||
        categoryFilters.has(product.type) ||
        product.type.split(' ').some((type) => categoryFilters.has(type))
      );
    }
  });
  const initialState = checkboxes.reduce((acc, parent) => {
    acc[parent.id] = false;
    parent.children.forEach(child => {
      acc[child] = false;
    });
    return acc;
  }, {});
  

  const [checkedItems, setCheckedItems] = React.useState(initialState);

  const setParentAndChildren = (parent, isChecked) => {
    const newState = { ...checkedItems };
    newState[parent.id] = isChecked;
    checkboxes.find(p => p.id === parent.id).children.forEach(childId => {
      newState[childId] = isChecked;
    });
    setCheckedItems(newState);
    updateFilters(isChecked, parent.id);
  };


  const handleChildrenCheckbox = (childId, isChecked) => {
    setCheckedItems({ ...checkedItems, [childId]: isChecked })
    updateFilters(isChecked, childId)
  }

  // Search Filter
  const [query, setQuery] = useState("");

  const SearchItems = datas.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  if (query){
    filteredProducts = SearchItems // Create a copy of the array to avoid mutating the original data
  }

  //Sorting
  const [sortOption, setSortOption] = useState();
  // Sort filteredProducts based on the selected option
  const sortedProducts = [...filteredProducts]; // Create a copy of the array to avoid mutating the original data

  if (sortOption === 'Asc'){
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  }
  else if (sortOption === 'Desc') {
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortOption === 'High') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'Low') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } 


  return (
    <div className='pt-16'>
        <div className='grid lg:grid-cols-6 flex-row'>
          <h1 className='mx-6 text-textcolor-400 font-bold text-2xl'>PRODUCT</h1>
          <div className='flex flex-col rounded-lg h-[1050px] md:h-[1050px] 2xl:h-[750px] w-32 mx-3 mt-8 lg:w-5/6 lg:col-start-1 lg:col-end-2 lg:mx-6'>
              <div>
                <h1 className='font-bold text-xl'>ALL</h1>
              </div>
      
              <div className='h-[1.5px] bg-black'></div>

              <div>
                <h1 className='font-medium text-xl'>Popular</h1>
              </div>

              <div className='h-[1.5px] bg-black'></div>

              <div>
                <h1 className='font-medium text-xl'>Soju</h1>
              </div>

              <div className='h-[1.5px] bg-black'></div>

              <div>
                <h1 className='font-medium text-xl'>Sake</h1>
              </div>

              <div className='h-[1.5px] bg-black'></div>

              <div>
                <h1 className='font-medium text-xl'>Wine</h1>
              </div>

              <div className='h-[1.5px] bg-black'></div>

              <div>
                <h1 className='font-medium text-xl'>Brandy</h1>
              </div>

              <div className='h-[1.5px] bg-black'></div>

              <div>
                <h1 className='font-medium text-xl'>Whisky</h1>
              </div>

              <div className='h-[1.5px] bg-black'></div>

              <div>
                <h1 className='font-medium text-xl'>Gin</h1>
              </div>

              <div className='h-[1.5px] bg-black'></div>

              <div>
                <h1 className='font-medium text-xl'>vodka</h1>
              </div>

              <div className='h-[1.5px] bg-black'></div>

              <div>
                <h1 className='font-medium text-xl'>Rum</h1>
              </div>

              <div className='h-[1.5px] bg-black'></div>

              <div>
                <h1 className='font-medium text-xl'>Tequila</h1>
              </div>

              <div className='h-[1.5px] bg-black'></div>

              <div>
                <h1 className='font-medium text-xl'>Cognca</h1>
              </div>

              <div className='h-[1.5px] bg-black'></div>

              <div>
                <h1 className='font-medium text-xl'>Beers</h1>
              </div>

          </div>
          <div className='col-start-2 col-end-7 bg-background-200'>
              <div className='flex flex-col justify-between md:flex-row lg:mr-12 lg:ml-7'>
                <div className={` 
                ${theme ? "text-black" : "text-white" } font-signika`}>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <Search2Icon color='gray.300' />
                  </InputLeftElement>
                  <Input 
                  placeholder='Search' 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  />
                </InputGroup>
                </div>
                <div className='flex lg:gap-16 items-center lg:justify-end' >
                    <h1 className={`
                      ${theme ? "text-light-600" : "text-light-450" } text-sm font-bold lg:text-xl font-signika`}> Sort
                    </h1>
                    <Select 
                    placeholder='Filter' 
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}

                    className={`
                      ${theme ? "text-light-600 bg-background-light-200" : "text-light-450 bg-background-dark-400" } hover:cursor-pointer font-signika`}>
                        <option value = "Desc">Alphabet: Z-A</option>
                        <option value = "Asc">Alphabet: A-Z</option>
                        <option value=  "High">Price: High-Low</option>
                        <option value = "Low">Price: Low-high</option>
                    </Select>
                </div>
              </div>
              <div className='flex flex-col lg:flex-row w-full flex-wrap'>
                {sortedProducts.map(
                      ({title, category, type, size, price, link_tokopedia, link_shopee, link_blibli, gambar}) => (
                        <Cards
                          key={Math.random()}
                          img={gambar}
                          title={title}
                          category={category}
                          type={type}
                          size={size}
                          price = {price.toFixed(3)}
                          link_tokopedia = {link_tokopedia}
                          link_shopee = {link_shopee}
                          link_blibli = {link_blibli}
                          gambar = {gambar}
                        />
                      )
                    )
                  }
              </div>
          </div>
        </div>
    </div>
    )
  }