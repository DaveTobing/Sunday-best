import React, { useState, useContext } from 'react'
import { Select } from '@chakra-ui/select'
import { Checkbox } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { DarkModeContext } from '../context/darkmode'
import datas from '../database/data'
import Cards from '../components/Cards'


export default function Product ({result}) {
  const [theme, setTheme] = useContext(DarkModeContext)
  let [categoryFilters, setcategoryFilters] = useState(new Set());

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

  const filteredProducts = datas.filter((product) => {
    if (categoryFilters.size === 0) {
      return true;
    } else {
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


  return (
    <div className={`
    ${theme ? "bg-background-dark-400" : "bg-background-light-200" } pt-16`} 
      >
        <div className='grid grid-cols-6 flex-row'>
          <div className='flex flex-col col-start-1 col-end-2 md:mx-6 rounded-lg h-full md:w-full w-32 mx-3'>
            <p className={`
              ${theme ? "text-light-450" : "text-light-600" } font-bold text-left`} 
              >Products
            </p>
              {checkboxes.map(parent => (
              <div key={parent.id}>
                <Checkbox
                  className={`
                  ${theme ? "text-light-450" : "text-light-600" } font-semibold `}
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
                    className={`
                    ${theme ? "text-light-450" : "text-light-600" } font-semibold`}
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
              <div className=''>
                <div className='flex md:flex-row justify-between md:mr-12 '>
                  <div className=''>
                      <h1 className={`
                      ${theme ? "text-light-450" : "text-light-600" } font-bold`}> 
                    All Products</h1>
                  </div>
                  <div className='flex gap-16 items-center md:justify-end' >
                      <h1 className={`
                        ${theme ? "text-light-450" : "text-light-600" } font-bold`}> Sort
                      </h1>
                      <Select placeholder='Filter' className={`
                      ${theme ? "text-light-450 bg-background-dark-400" : "text-light-600 bg-background-light-200" } hover:cursor-pointer`}>
                        <option value="Alphabet">Alphabet</option>
                        <option value="Price">Price</option>
                    </Select>
                  </div>
                </div>
              </div>
              <div className='flex flex-col md:flex-row w-full flex-wrap'>
                {filteredProducts.map(
                      ({title, category, type, size, price, link_tokopedia, link_shopee, link_blibli, gambar}) => (
                        <Cards
                          key={Math.random()}
                          img={gambar}
                          title={title}
                          category={category}
                          type={type}
                          size={size}
                          price = {price}
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