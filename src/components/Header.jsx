import React from 'react'
import logo from '../assets/logo.png'
import { HiPlayCircle, HiTv, HiStar, HiMagnifyingGlass, HiHome } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

const MenuItems = [
    {
        name: 'Home',
        Icon: HiHome
    },
    {
        name: 'Search',
        Icon: HiMagnifyingGlass
    },
    {
        name: 'Watch List',
        Icon: HiPlus
    },
    {
        name: 'Originals',
        Icon: HiTv
    },
    {
        name: 'Movies',
        Icon: HiStar
    },
    {
        name: 'Series',
        Icon: HiPlayCircle
    }
];
const Header = () => {
    return (
        <div>
            <img src={logo} className='w-[80px] md:w-[115px] object-cover' alt="" />
            {MenuItems.map((item) => (
                <div>
                    <HeaderItem name={item.name} Icon={item.Icon} />
                </div>
            ))}
        </div>
    )
}

export default Header
