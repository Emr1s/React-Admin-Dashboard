import React from 'react'
import './Menu.scss'
import { BiBasketball, BiCalendar, BiHomeAlt2 } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FiSettings, FiUsers } from 'react-icons/fi'
import { AiOutlineBarChart, AiOutlineShoppingCart } from 'react-icons/ai'
import { RxCube } from 'react-icons/rx'
import { HiOutlineDocumentText } from 'react-icons/hi'
import {LuClipboardList} from 'react-icons/lu'
import {PiListBulletsBold, PiNotePencilBold } from 'react-icons/pi'
import {MdBackupTable } from 'react-icons/md'
import {BsClipboardData } from 'react-icons/bs'

const Menu = () => {
  const menu = [
    {
      name: 'main',
      line: [
        {
          icon: <BiHomeAlt2 />,
          text: 'Homepage',
          path: '/'
        },
        {
          icon: <FiUsers />,
          text: 'Profile',
          path: '/'
        },
      ]
    },
    {
      name: 'list',
      line: [
        {
          icon: <FiUsers />,
          text: 'Users',
          path: '/users'

        },
        {
          icon: <AiOutlineShoppingCart />,
          text: 'Products',
          path: '/products'
        },
        {
          icon: <LuClipboardList />,
          text: 'Orders',
          path: '/'
        },
        {
          icon: <HiOutlineDocumentText />,
          text: 'Posts',
          path: '/'
        },
      ]
    },
    {
      name: 'general',
      line: [
        {
          icon: <RxCube />,
          text: 'Elements',
          path: '/'

        },
        {
          icon: <PiNotePencilBold />,
          text: 'Notes',
          path: '/'
        },
        {
          icon: <PiListBulletsBold />,
          text: 'Forms',
          path: '/'
        },
        {
          icon: <BiCalendar />,
          text: 'Calendar',
          path: '/'
        },
      ]
    },
    {
      name: 'maintanance',
      line: [
        {
          icon: <FiSettings />,
          text: 'Settings',
          path: '/'

        },
        {
          icon: <MdBackupTable />,
          text: 'Backups',
          path: '/'
        },
      ]
    },
    {
      name: 'analytics',
      line: [
        {
          icon: <AiOutlineBarChart />,
          text: 'Charts',
          path: '/'

        },
        {
          icon: <BsClipboardData />,
          text: 'Logs',
          path: '/'
        },
      ]
    },
  ]
  return (
    <div className='menu'>
      {menu.map(item => (
        <div className="container" key={item.name}>
          <span className='span'>{item.name}</span>
          {item.line.map(line => (
            <div className="categories" key={line.text}>
              <Link to={line.path} className='link'>
                {line.icon}
                <span>{line.text}</span>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu