import React, { useState } from 'react'
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

    const [toggle, setToggle] = useState(false);

    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex gap-8 items-center'>
                <img src={logo} className='w-[80px] md:w-[115px] object-cover' alt="" />
                <div className='hidden md:flex gap-8'>
                    {MenuItems.map((item) => (
                        <div>
                            <HeaderItem name={item.name} Icon={item.Icon} />
                        </div>
                    ))}

                </div>

                <div className='flex md:hidden gap-8'>
                    {MenuItems.map((item, index) => index < 3 && (
                        <div>
                            <HeaderItem name={''} Icon={item.Icon} />
                        </div>
                    ))}
                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle ? <div className='absolute w-[160px] mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                            {MenuItems.map((item, index) => index > 2 && (
                                <div>
                                    <HeaderItem name={item.name} Icon={item.Icon} />
                                </div>
                            ))}
                        </div> : null}
                    </div>
                </div>

            </div>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745" alt=""
                className='w-[40px] rounded-full' />
        </div>
    )
}

export default Header
