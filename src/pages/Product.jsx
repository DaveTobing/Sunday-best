import React, { useState, useContext } from 'react'
import { Select } from '@chakra-ui/select'
import { Checkbox, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { DarkModeContext } from '../context/darkmode'
import datas from '../database/data'
import Cards from '../components/Cards'
import { Input } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import data from '../database/data'

export default function Product () {
  const [theme, setTheme] = useContext(DarkModeContext)
  
  const checkboxes = [
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
    // Default to 'Alphabet: A-Z' sorting
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
    <div className={`
    ${theme ? "bg-background-light-200" : "bg-background-dark-400" } pt-16`} 
      >
        <div className='grid lg:grid-cols-6 flex-row'>
          <div className={` bg-gradient-to-r from-light-300 to-light-450 flex flex-col rounded-lg h-[980px] lg:h-[700px] w-32 mx-3 lg:w-5/6 lg:col-start-1 lg:col-end-2 lg:mx-6 border-solid border-2 `}>
            <p className={`
             text-light-600 font-bold text-left font-signika mb-3`} 
              >Categories
            </p>
              {checkboxes.map(parent => (
              <div key={parent.id}>
                <Checkbox
                  size='sm'
                  className={`
                  text-light-600 font-semibold font-signika`}
                  isChecked={checkedItems[parent.id]}
                  isIndeterminate={
                    parent.children.some(childId => checkedItems[childId]) &&
                    !parent.children.every(childId => checkedItems[childId])
                  }
                  onChange={(e) =>(setParentAndChildren(parent, e.target.checked))}
                >
                  {parent.id}
                  
                </Checkbox>
                <Stack pl={6} mt={1} spacing={1}>
                  {parent.children.map(childId => (
                    <Checkbox
                    size='sm'
                    className={`
                    text-light-600 font-semibold font-signika`}
                      key={childId}
                      isChecked={checkedItems[childId]}
                      onChange={(e) =>handleChildrenCheckbox(childId, e.target.checked)}
                    >
                      {childId}
                    </Checkbox>
                  ))}
                </Stack>
              </div>
            ))}
          </div>
          <div className='col-start-2 col-end-7'>
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