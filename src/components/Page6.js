import React from 'react'
import './Page6.css'
import blog1 from "../components/images/blog-1.jpg"
import blog2 from "../components/images/blog-2.jpg"
import blog3 from "../components/images/blog-3.jpg"

function Page6  ()  {
  return (
    <>

    <div className='gallery-title'>
        <h1>Gallery</h1>
    </div>

    <div className='container-gallery'>

        <div className='card-gallery'>
        <h3 className="title-gallery">Card 1</h3>
            <div className='gallery-img'>
               <img className='gallery-img' src={blog1} alt='school' />
            </div>
        </div>

        <div className='card-gallery'>
        <h3 className="title-gallery">Card 2</h3>
            <div className='gallery-img'>
               <img className='gallery-img' src={blog2} alt='school'  />
            </div>
        </div>

        <div className='card-gallery'>
        <h3 className="title-gallery">Card 3</h3>
            <div className='gallery-img'>
               <img className='gallery-img' src={blog3} alt='school' />
            </div>
        </div>
        
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
