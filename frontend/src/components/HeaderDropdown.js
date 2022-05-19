import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/dropdown.css'

const HeaderDropdown = ({ title, dropdownList }) => {
  return (
    <div className="relative dropdown">
      <button
        className="flex justify-center bg-[#191919] border border-[#1A2C43] px-6 py-3 flex-auto hover:bg-[#FF7F00]"
      >
        <p>{title}</p>
        <span className="pl-1 hover:cursor-pointer">
          <ion-icon name="caret-down-outline"></ion-icon>
        </span>
      </button>
      <div className='absolute bg-[#191919] w-full font-normal hidden dropdown-content'>
        <ul className="text-left">
          {
            dropdownList.map((elem) => {
              return (
                <Link to={elem.url}>
                  <li className="p-3 hover:bg-[#FF7F00] hover:cursor-pointer">{elem.title}</li>
                </Link>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default HeaderDropdown