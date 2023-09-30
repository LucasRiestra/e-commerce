import { Link } from 'react-router-dom';
const HomePage = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    return (
        <div className="body">
        <div className="HomeFront-Page">
            <div className="Home-Title">
                LA CAIE VINTAGE
                <h1 className="Home-Subtitle">textile jewelry for your lifestyle</h1>
            </div>
        </div>
        <div className="HomeMen-Page">
            <div className="Men-Title">
                <p>Find your vintage style for men in our MenShop section</p>
                <button className="Buttons" onClick={scrollToTop}><Link to="/MenShop">See more details</Link></button>
            </div>
        </div>
        <div className="HomeWoman-Page">
            <div className="Woman-Title">
                <p className="WomanFirtsTitle">Fashion is what you buy, style is what you do with it</p>
                <p className="WomanSecondTitle">Visit our Woman Shop section</p>
            </div>
            <button className="Buttons" onClick={scrollToTop}><Link to="/WomanShop">See more details</Link></button>
        </div>
        <div className="HomeAccesories-Page">
            <div className="Accesories-Title">
                <p>a small accessory can have a very big power</p>
                <button className="Buttons" onClick={scrollToTop}><Link to="/Accessories">See more details</Link></button>
            </div>
        </div>
        <footer className="footer">


        </footer>
        </div>

    )
}

export default HomePage
