import React from 'react'
import './Page6.css'
import Carousel from 'react-elastic-carousel'
import ItemGalley from './ItemGalley'
import blog1 from "../components/images/blog-1.jpg"
import blog2 from "../components/images/blog-2.jpg"
import blog3 from "../components/images/blog-3.jpg"

function Page6() {


    const breakPoints= [ {
        width:768, itemsToShow:3
    }]

    return (
        <>

            <div className='gallery-title'>
                <h1>Gallery</h1>
            </div>




            <div className='conatiner-gallery'>
                <Carousel breakPoints={breakPoints}>
                    <ItemGalley><img src={blog3} alt='school' /></ItemGalley>
                    <ItemGalley><img src={blog2} alt='school' /></ItemGalley>
                    <ItemGalley><img src={blog1} alt='school' /></ItemGalley>
                </Carousel>
            </div>




            {/* ----------------------   BLOG SECTION    ---------------------------------------*/}

            <div className='blog-title'>
                <h1>Blogs</h1>
            </div>
            <div className='card-main'>
                <div className='cards'>
                    <div className='card-info'>
                        <img className='img-blog' src={blog1} alt='school' />
                        <h4>Blog-1</h4>
                        <p>This is blog one</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className='cards'>
                    <div className='card-info'>
                        <img className='img-blog' src={blog2} alt='school management' />
                        <h4>Blog-2</h4>
                        <p>This is blog two</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className='cards'>
                    <div className='card-info'>
                        <img className='img-blog' src={blog3} alt='management' />
                        <h4>Blog-3</h4>
                        <p>This is blog three</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Page6
