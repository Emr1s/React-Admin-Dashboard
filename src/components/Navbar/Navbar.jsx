import React from 'react'
import './Navbar.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiCategoryAlt } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { PiBracketsSquare } from 'react-icons/pi'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src="https://cdn.freelogodesign.org/files/6893ce27b466438c804197b139b1d178/thumb/logo_200x200.png?v=0" alt="" />
        <h3>Emr1s Admin</h3>
      </div>
      <div className="right">
        <div className="icons">
          <AiOutlineSearch />
          <BiCategoryAlt />
          <PiBracketsSquare />
          <div className="notification">
            <IoMdNotificationsOutline />
            <span>1</span>
          </div>
        </div>
        <div className="settings">
          <div className="info">
            <img src="https://www.stylevore.com/wp-content/uploads/2019/06/Sonya-Rudskaya-La-imagen-puede-contener-1-persona-primer-plano.jpg" alt="" />
            <p>Oleg</p>
          </div>
          <FiSettings />
        </div>
      </div>
    </div>
  )
}

export default Navbar