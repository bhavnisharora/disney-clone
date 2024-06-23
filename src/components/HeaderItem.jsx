import React from 'react'

const HeaderItem = ({ name, Icon }) => {
    return (
        <div className='text-white flex items-center'>
            <Icon />
            <h2>{name}</h2>
        </div>
    )
}

export default HeaderItem
