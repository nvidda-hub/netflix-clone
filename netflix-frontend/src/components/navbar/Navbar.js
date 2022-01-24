import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { IconButton } from '@mui/material';


function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    
    }

  return <div className={`${isScrolled ? "bg-black" : "bg-navbar"} text-white text-base fixed top-0 w-full z-auto`}>
        {/* container */}
        <div className='mx-auto flex items-center justify-between'>

            {/* left container */}
            <div className='flex flex-row'>
                <img 
                    src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png' 
                    alt='' 
                    className='pl-5 h-11 cursor-pointer'
                />
                <div className='pt-2 space-x-6'>
                    <span className='ml-9 cursor-pointer hover:text-orange-500 active:text-orange-500'>Home</span>
                    <span className='cursor-pointer hover:text-orange-500 active:text-orange-500'>Series</span>
                    <span className='cursor-pointer hover:text-orange-500 active:text-orange-500'>Movies</span>
                    <span className='cursor-pointer hover:text-orange-500 active:text-orange-500'>Trending</span>
                    <span className='cursor-pointer hover:text-orange-500 active:text-orange-500'>My Wishlist</span>
                </div>
            </div>

            {/* right container */}
            <div className='flex pt-2 flex-row align-middle space-x-6 pr-5'>
                <SearchIcon className='ml-auto cursor-pointer' />
                <span className='cursor-pointer hover:text-orange-500 active:btextorange-500'>KID</span>
                <NotificationsIcon className='cursor-pointer hover:text-orange-500 active:text-orange-500'/>
                <img 
                    src='https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png'
                    alt=''
                    className='h-7 rounded-md cursor-pointer object-cover opacity-70 hover:opacity-100 active:opacity-100 '
                />
                <div className='profile'>
                    <ArrowDropDownIcon />
                    <div className='hidden hover:flex hover:flex-col'>
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                    
                </div>
            </div>

        </div>

      </div>;
}

export default Navbar;
