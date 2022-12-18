import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='border-2 rounded-full  text-white'><hr/></div>
      <div className='bg-[black] flex justify-center pt-10'>
        
        <div style={{width:'25%'}}>
      <div className=' columns-4 text-white flex justify '>
        <div>

<div classNmae='text-white'><b>OUR PRODUCT</b></div>
<hr/>
              <ul>
                     <li>Websites</li>
              <li>Applications</li>
              <li>Games</li>
              </ul>
             
              </div>
              </div>

             

              
            </div>
            <div style={{width:'25%'}}>
            <div className=' bg-[black] text-white'>
           
            <div className='text-white flex justify '><b>SERVICES</b></div>
            <div classNmae='text-white p-10'><hr style={{width: "50%"}}/>
              <ul>
              <li><div className=''>Game Development</div></li>
              <li>Website Development</li>
              <li>Application Designing</li>
              <li>Digital Marketing</li>
              </ul>
             
              </div>
            </div>
            </div>

            <div style={{width:'25%'}}>
      <div className=' bg-[black] text-white'>
            <div className='text-white flex  justify mr-20 '><b>SOCIAL MEDIA</b></div>
            <div classNmae='text-white'><hr style={{width: "40%"}}/>
           
              <ul>
              <li><div className='bg-[url("<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" id="mainIconPathAttribute" fill="blue"></path> </svg>")]'>FACEBOOK</div></li>
              <li>WHATSAPP</li>
              <li>INSTAGRAM</li>
              <li>TWITTER</li>
              </ul>
             
              </div>
            
            </div>
            </div>

            <div className=' bg-[black] text-white'>
            <div className='text-white flex justify '><b>CONTACT US</b></div>
            <div classNmae='text-white'><hr style={{width: "100%"}}/>
              <ul>
                           <li>+971-555-555-55</li>
              <li>Location</li>
              <li>Address</li>
              </ul>
             
              </div>
            </div>
   
          </div>  
    </footer>
  )
}

export default Footer
