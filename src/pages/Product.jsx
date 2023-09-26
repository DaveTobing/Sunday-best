import React, { useContext } from 'react'
import { Select } from '@chakra-ui/select'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { DarkModeContext } from '../context/darkmode'


export default function Product ({result, handleChange}) {
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

  const initialState = checkboxes.reduce((acc, parent) => {
    acc[parent.id] = false;
    parent.children.forEach(child => {
      acc[child] = false;
    });
    return acc;
  }, {});

  const [checkedItems, setCheckedItems] = React.useState(initialState);

  const setParentAndChildren = (parentId, isChecked) => {
    const newState = { ...checkedItems };
    newState[parentId] = isChecked;
    checkboxes.find(p => p.id === parentId).children.forEach(childId => {
      newState[childId] = isChecked;
    });
    setCheckedItems(newState);
  };

  return (
    <div className={`
    ${theme ? "bg-background-dark-400" : "bg-background-light-200" } pt-16`} 
      >
        <div className='grid grid-cols-6 flex-row'>
          <div className='flex flex-col col-start-1 col-end-2 mx-6 rounded-lg h-48 w-48'>
            <p className={`
              ${theme ? "text-light-450" : "text-light-600" } font-bold text-left p-1`} 
              >Products
            </p>
              {checkboxes.map(parent => (
              <div key={parent.id}>
                <Checkbox
                  className={`
                  ${theme ? "text-light-450" : "text-light-600" } font-semibold`}
                  isChecked={checkedItems[parent.id]}
                  isIndeterminate={
                    parent.children.some(childId => checkedItems[childId]) &&
                    !parent.children.every(childId => checkedItems[childId])
                  }
                  onChange={(e) => setParentAndChildren(parent.id, e.target.checked)}
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
                      onChange={(e) => setCheckedItems({ ...checkedItems, [childId]: e.target.checked })}
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
                <div className='flex items-center md:flex-row mr-48'>
                  <div className='mt-3'>
                      <h1 className={`
                      ${theme ? "text-light-450" : "text-light-600" } font-bold`}> 
                    All Products</h1>
                  </div>
                  <div className='flex gap-16 items-center' >
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
                  {result}
              </div>
          </div>
        </div>
    </div>
  )
}