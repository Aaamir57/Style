import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <header>
                <div class="navbar">

                    <ul class="links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Our services</a></li>
                        <li><img alt=' ' src="./media/1.png" /></li>
                        <li><a href="#">About Us</a></li>

                        <li><a href="#">Contact</a></li>
                        {/* <li><button className='linkbtn'><h1>Become a ryle</h1></button></li> */}
                    </ul>
                    <li><button className=' linkbtnnew'><h1>Become a ryle</h1></button></li>
                    <div className="toggle_btn" onClick={toggleDropdown}>
                        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                    </div>

                </div>
                <div className='maindropdown'>
                    <img alt=' ' src="./media/1.png" className='imgmain'/>
                    <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Our services</a></li>

                        <li><a href="#">About Us</a></li>

                        <li><a href="#">Contact</a></li>
                        <li><button className='linkbtn'><h1>Become a ryle</h1></button></li>
                    </div>
                </div>

            </header>

        </div>
    )
}
