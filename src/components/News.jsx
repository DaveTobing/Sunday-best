import React , { useContext }from 'react'
import { DarkModeContext } from '../context/darkmode'

const News = () => {
  const [theme, setTheme] = useContext(DarkModeContext)
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex flex-col justify-center items-center md:mx-48'>
        <h1
        className={`
        ${theme ? "text-light-450" : "text-light-600" } font-bold font-signika text-2xl md:text-5xl uppercase mb-4`} 
        >
        News
        </h1>
        <h2 className={`
        ${theme ? "text-light-100" : "text-light-600" } font-semibold font-signika text-lg md:text-xl text-center uppercase mb-16`} 
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, aliquid accusamus molestiae ratione nisi fuga in! Repellat, consequatur itaque, voluptatem numquam doloribus repellendus error impedit, eveniet ipsum esse ea ipsam?
        </h2>

      </div>

        <div className='flex flex-wrap gap-4 mt-5'>
        </div>
    </div>
  )
}

export default News