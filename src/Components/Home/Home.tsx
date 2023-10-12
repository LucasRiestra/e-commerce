import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
    const slidesOne = [
        {
            url: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1696920414/andre-hunter-p-I9wV811qk-unsplash_ghcjvu.jpg"
        },
        {
            url: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1696929119/eddy-lackmann-4CCQyX6saEs-unsplash_grorkj.jpg"
        },
        {
            url: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1696920420/markus-spiske-oEoe-qfymZQ-unsplash_tzboru.jpg"
        },
    ]

    const slidesTwo = [
        {
            url: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695622813/jamakassi-wejxKZ-9IZg-unsplash_wlk8y4.jpg"
        },
        {
            url: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1696920423/mike-von-bWUOx0SaSAk-unsplash_eyrldu.jpg"
        },
        {
            url: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1696920419/ian-dooley-TT-ROxWj9nA-unsplash_u0vpdi.jpg"
        },            
    ]

    const slidesThree = [
        {
            url: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1696920421/dekler-ph-zx_kCGgk9X4-unsplash_a09qke.jpg"
        },
        {
            url: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1696920417/breakreate-S_ZTxRjlftA-unsplash_twwpok.jpg"
        },
        {
            url: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1696920426/sebastiano-piazzi-Hn3pxTcHqlQ-unsplash_qshrf7.jpg"
        },
    ]



    const [currentIndexOne, setCurrentIndexOne] = useState(0);
    const [currentIndexTwo, setCurrentIndexTwo] = useState(0);
    const [currentIndexThree, setCurrentIndexThree] = useState(0);
  
    useEffect(() => {
      const intervalIdOne = setInterval(() => {
        setCurrentIndexOne(prevIndex => (prevIndex + 1) % slidesOne.length);
      }, 5000);
  
      const intervalIdTwo = setInterval(() => {
        setCurrentIndexTwo(prevIndex => (prevIndex + 1) % slidesTwo.length);
      }, 5000);
  
      const intervalIdThree = setInterval(() => {
        setCurrentIndexThree(prevIndex => (prevIndex + 1) % slidesThree.length);
      }, 5000);
  
      return () => {
        clearInterval(intervalIdOne);
        clearInterval(intervalIdTwo);
        clearInterval(intervalIdThree);
      };
    }, [slidesOne.length, slidesTwo.length, slidesThree.length]);

  
    return (
        <div className="body">
        <div className="HomeFront-Page">
            <div className="Home-Title">
                LA CAIE <br />
                VINTAGE
                <h1 className="Home-Subtitle">textile jewelry for your lifestyle</h1>
            </div>
        </div>
        <div className="HomeMen-Page" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.499) 100%), url(${slidesOne[currentIndexOne].url})`}}>
            <div className="Men-Title" >
                <p>Find your vintage style for men <br /> in our MenShop section</p>
                <button className="Buttons" onClick={scrollToTop}><Link to="/MenShop">See more details</Link></button>
            </div>
        </div>
        <div className="HomeWoman-Page" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.499) 100%), url(${slidesTwo[currentIndexTwo].url})`}}>
            <div className="Woman-Title">
                <p className="WomanFirtsTitle">Fashion is what you buy, style is what you do with it</p>
                <p className="WomanSecondTitle">Visit our Woman Shop section</p>
            </div>
            <button className="Buttons" onClick={scrollToTop}><Link to="/WomanShop">See more details</Link></button>
        </div>
        <div className="HomeAccesories-Page" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.499) 100%), url(${slidesThree[currentIndexThree].url})` }}>
            <div className="Accesories-Title">
                <p>a small accessory <br />can have a very big power</p>
                <button className="Buttons" onClick={scrollToTop}><Link to="/Accessories">See more details</Link></button>
            </div>
        </div>
        </div>

    )
}

export default HomePage
