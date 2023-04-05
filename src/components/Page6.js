import React from 'react'
import './Page6.css'
import Carousel from 'react-elastic-carousel'
import blog1 from "../components/images/blog-1.jpg"
import blog2 from "../components/images/blog-2.jpg"
import blog3 from "../components/images/blog-3.jpg"



const items = [
    { id: 1, url: blog1 },
    { id: 2, url: blog2 },
    { id: 3, url: blog3 },
    { id: 4, url: blog1 },
    { id: 5, url: blog2 },
    { id: 5, url: blog3 },
];


function Page6() {




    return (
        <>

            <div className='gallery-title'>
                <h1>Gallery</h1>
            </div>

            <div className="gallery">
                <Carousel itemsToShow={3} className="carousel" showStatus={false}
                    showIndicators={false}
                    infiniteLoop={true}
                    useKeyboardArrows={true}
                    autoPlay={true}
                    interval={3000}
                    transitionTime={500}
                    stopOnHover={true}
                    enableAutoPlay={true}
                    autoPlaySpeed={3500}
                    pagination={false}>
                    {items.map((item) => (
                        <div className="item" key={item.id}>
                            <img src={item.url} alt={`Item ${item.id}`} />
                        </div>
                    ))}
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




            {/*  -------------------------    EVENTS       ------------------------- */}



            <div className='events-title'>
                <h1>Events</h1>
            </div>

            <div className="gallery">
                <Carousel itemsToShow={3} className="carousel" showStatus={false}
                    showIndicators={false}
                    infiniteLoop={true}
                    useKeyboardArrows={true}
                    autoPlay={true}
                    interval={3000}
                    transitionTime={500}
                    stopOnHover={true}
                    enableAutoPlay={true}
                    autoPlaySpeed={3500}
                    pagination={false} >
                    {items.map((item) => (
                        <div className="item" key={item.id}>
                            <img src={item.url} alt={`Item ${item.id}`} />
                        </div>
                    ))}
                </Carousel>
            </div>

        </>
    )
}

export default Page6
