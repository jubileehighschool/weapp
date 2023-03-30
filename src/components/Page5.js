import { Instagram, LinkedIn, Facebook } from '@mui/icons-material'
import React from 'react'
import './Page5.css'


function Page5() {
    return (
        <>


            <div className='title'>
                <h1>Unlock the world of <span>knowledge</span> </h1>
                {/* 
                <h3>Feel free to ask anything else your curious about.</h3> */}
            </div>



            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38877.485094332325!2d78.44468020621079!3d17.386506063760734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb977a7e3c0613%3A0xe9ea37ba7e4c0ff5!2sJubilee%20High%20School!5e0!3m2!1sen!2sin!4v1680175816256!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy='no-referrer-when-downgrade'></iframe>
            </div>

            <div className='main-conatiner'>
                <footer >
                    <div className="footer">
                        <h2>Join in on the adventure with us</h2>
                        <div className='icons'>
                            <a href=''> <Instagram sx={{ fontSize: 40 }} /></a>
                            <a href=''> <h3>@JubileeHighSchool</h3></a>
                        </div>
                        <div className='icons'>
                            <a href=''> <Facebook sx={{ fontSize: 40 }} /></a>
                            <a href=''> <h3>@JubileeHighSchool</h3></a>
                        </div>
                        <div className='icons'>
                            <a href=''> <LinkedIn sx={{ fontSize: 40 }} /></a>
                            <a href=''> <h3>@JubileeHighSchool</h3></a>
                        </div>
                    </div>
                </footer>



                <div className='text-container'>
                    <h1>Join us at a cup of <span>coffee</span> </h1>
                    <h3>Address: <br /> opposite SBI, Aghapura, Nampally,<br /> Hyderabad, Telangana, India</h3>
                    <h4>Jubileehighschool.ts@gmail.com <br /> +91-9032111474</h4>
                </div>

            </div>

        </>
    )
}

export default Page5
