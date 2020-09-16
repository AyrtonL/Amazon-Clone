import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CV428684220_.jpg" 
                alt="" 
                />

                <div className="home__row">
                    <Product 
                    title="The Lean Startup"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                    rating={4}
                    />
                    <Product
                    id="49538094"
                    title="Pioneer DDJ-400 - Controlador de DJ de 2 canales (dorado)"
                    price={249.0}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61F-Mi14dJL._AC_SL1500_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                    id="49538065"
                    title="TP-Link WiFi 6 AX3000 Smart WiFi Router"
                    price={54.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61RwCe6KexL._AC_SL1500_.jpg"
                     />
                    <Product
                    id="495231294"
                    title="DIERYA DK61E Teclado mecánico, RGB retroiluminado"
                    price={249.0}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51vDOyGtMGL._AC_SL1170_.jpg"
                     />
                    <Product
                    id="49423461"
                    title="Apple iPhone XS 64 GB"
                    price={954.0}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/appcore/phone/AMZ_FamiyStripe_iPhone_11ProMax.png"
                     />
                    
                </div>

                <div className="home__row">
                    <Product
                     id="1234462"
                     title="Razer Viper Mini ratón ultraligero para juegos: interruptores de juego más rápidos, sensor óptico de 8500 DPI, iluminación croma RGB de bajo brillo, 6 botones programables, cable sin arrastre, negro clásico"
                     price={39.99}
                     rating={5}
                     image="https://images-na.ssl-images-amazon.com/images/I/81hn2q%2BMzsL._AC_SL1500_.jpg" 
                     />                    
                
                </div>
            </div>            
        </div>
    )
}

export default Home
