import React from 'react'

const Header = () => {
  return (
    <header>  
        <div className='bg-[#00BFFF] p-4'>  
                <div className='max-w-[1240px] py-[10px] items-center  flex justify-between  mx-auto'>
                       <div className='text-3xl font-bold flex text-white'>
                        GRAVITY</div>
                <ul className='flex text-white gap-8'>
                
                    <li> <a href=" "><b>Home</b></a></li>

                    <li> <a href=" "><b>About Us</b> </a> </li>

                    <li> <a href=" "><b>Services</b></a></li>
                    <li><a href=" "><b>Contact US</b></a></li>
                    <li><a href=" "><b>SignUp</b></a></li>
                </ul>
                </div>     
        </div>
    </header>
  );
}

export default Header
