import React from 'react'
import './Home.css'
import background from '../assets/background.png'
import carrots from '../assets/carrots.png'
import mushrooms from '../assets/mushrooms.png'
import potatoe from '../assets/potatoe wedges.png'
import sauce from '../assets/sauce.png'
import tomatoes from '../assets/tomatoes.png'
import vegies from '../assets/vegies.png'

const Home = () => {
    return (
        <div id="master">
            <div id="navbar">
                <span id="restaurant_text">Restaurant</span>
                <span className='navbar_items'>About</span>
                <span className='navbar_items'>Contact</span>
                <span className='navbar_items'>Menu</span>
                <span className='navbar_items'>Socials</span>
            </div>
            <div id="picture_div">
                <span id="floating_span">Your Favorite Steak</span>
                <button id="floating_button">Order Now</button>
                <img id="background_image" src={background} />
                <div id="background_overlay"></div>
            </div>
            <div id="grid_div">
                <div className='grid_container'>
                    <img className='grid_image' src={tomatoes} />
                    <div className='grid_title'>Finest Tomatoes</div>
                    <div className='grid_desc'>Our Steaks are served the finest tomatoes in the country</div>
                </div>

                <div className='grid_container'>
                    <img className='grid_image' src={mushrooms} />
                    <div className='grid_title'>Yummy mushrooms</div>
                    <div className='grid_desc'>Our yummy mushrooms add a feel of luxury to our steaks</div>
                </div>

                <div className='grid_container'>
                    <img className='grid_image' src={vegies} />
                    <div className='grid_title'>Crunchy Vegies</div>
                    <div className='grid_desc'>Juicy and crunchy onions and brocoli are a part of the feast</div>
                </div>

                <div className='grid_container'>
                    <img className='grid_image' src={potatoe} />
                    <div className='grid_title'>Potatoe Wedges</div>
                    <div className='grid_desc'>Our mouth watering potatoe wedges offer the perfect side</div>
                </div>

                <div className='grid_container'>
                    <img className='grid_image' src={sauce} />
                    <div className='grid_title'>Top Class Sauce</div>
                    <div className='grid_desc'>Our sauce is the best in town! Served with the steak</div>
                </div>

                <div className='grid_container'>
                    <img className='grid_image' src={carrots} />
                    <div className='grid_title'>Juicy Carrots</div>
                    <div className='grid_desc'>Our cut of carrots will take your steak experience to the moon</div>
                </div>
            </div>
        </div>
    )
}

export default Home
