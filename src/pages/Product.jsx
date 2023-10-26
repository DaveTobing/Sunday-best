import React, { useState, useEffect } from 'react'
import { Select } from '@chakra-ui/select'
import { InputGroup, InputLeftElement } from '@chakra-ui/react'
import datas from '../database/data'
import Cards from '../components/Cards'
import { Input } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

export default function Product () {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(datas);

  const [query, setQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  let tempItems;

  const filter = ['ALL', 'POPULAR', 'BEERS', 'COGNAG', 'GIN', 'MIXERS', 'RUM', 'SAKE', 'SOJU', 'SPIRIT', 'VODKA', 'WINE', 'WHISKY'];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    // Apply filter first
    if (selectedFilters.includes('ALL')) {
      tempItems= datas
    } 
    else {
      tempItems = selectedFilters.length > 0 
      ? datas.filter((item) => selectedFilters.some((selectedCategory) => item.category.includes(selectedCategory)))
      : datas;
    }

    // Apply search
    const filteredBySearch = query
      ? tempItems.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()))
      : tempItems;

    // Apply sorting
    const sortedProducts = [...filteredBySearch];
    if (sortOption === 'Asc') {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'Desc') {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOption === 'High') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'Low') {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    setFilteredItems(sortedProducts);
  }, [selectedFilters, query, sortOption]);

  return (
    <div className='bg-background-200 lg:pt-16'>
        <div className='lg:grid lg:grid-cols-6'>
            <div className='hidden lg:inline-block '>
              <h1 className='mx-2 lg:mx-6 text-textcolor-400 font-extrabold lg:text-2xl text-xl'>PRODUCT</h1>
              <div className='mx-2 flex flex-col h-[1050px] md:h-[1050px] 2xl:h-[750px] w-32 mt-8 lg:w-5/6 lg:col-start-1 lg:col-end-2 lg:mx-6'>
                  <div>
                    {filter.map((category, idx) => (
                      <>
                        <button 
                          onClick={() => handleFilterButtonClick(category)}
                          className={`flex flex-col font-medium text-md lg:text-lg mb-2 ${
                            selectedFilters?.includes(category) ? "text-textcolor-300" : "text-textcolor-750"
                          }`}
                          key={`filters-${idx}`}
                        >
                          {category}
                        </button>
                      </>
                    ))}
                  </div>
              </div>
            </div>
            <div className='col-start-2 col-end-7 w-full'>
              <h1 className='flex justify-center text-textcolor-400 font-extrabold text-2xl py-4 lg:hidden'>PRODUCT</h1>
                <div className='flex justify-between lg:flex-row lg:mr-12 lg:ml-7 mx-4'>
                  <div className='text-textcolor-750 mb-4 w-32 lg:w-64'>
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
                  <div className='flex lg:gap-16 items-center lg:justify-end mb-4 w-32'>
                      <Select 
                      placeholder='Filter' 
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}

                      className={'text-textcolor-750 hover:cursor-pointer'}>
                          <option value = "Desc">Alphabet: Z-A</option>
                          <option value = "Asc">Alphabet: A-Z</option>
                          <option value=  "High">Price: High-Low</option>
                          <option value = "Low">Price: Low-high</option>
                      </Select>
                  </div>
                </div>
                <div className='overflow-x-auto flex flex-row gap-8 mx-6 lg:hidden'>
                    {filter.map((category, idx) => (
                          <>
                            <button 
                              onClick={() => handleFilterButtonClick(category)}
                              className={`font-medium text-md lg:text-xl ${
                                selectedFilters?.includes(category) ? "text-textcolor-300" : "text-textcolor-750"
                              }`}
                              key={`filters-${idx}`}
                            >
                              {category}
                            </button>
                          </>
                        ))}
                </div>
                <div className='flex flex-col lg:flex-row w-full flex-wrap items-center lg:items-start'>
                  {filteredItems.map(
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