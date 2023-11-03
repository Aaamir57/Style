import React from 'react'

export default function Footer() {
    return (
        <div><br />
            <footer>
                <div className='mainfooterdiv'>
                    <img alt=' ' src="./media/rlye_logo.svg" className='firstfoterimage' />
                    <div className='leftfoterarea'>
                        <img alt=' ' src="./media/rlye_logo.svg" />
                        <p>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting,.</p>
                    </div>
                    <div className='rightfoterarea'>
                        <div className='mainquicks'>
                            <h1>Quick Links</h1>
                            <h2>Home</h2>
                            <h2>Privacy Policy</h2>
                            <h2>Terms & Conditions</h2>
                            <h2>Safety</h2>
                            <h2>Help</h2>
                        </div>
                        <div className='mainquicks'>
                            <h1>About Us</h1>
                            <h2>Business model</h2>
                            <h2>Investor relations</h2>
                            <h2>Careers</h2>
                        </div>
                        <div className='mainquicks'>
                            <h1>Contact Us</h1>
                            <h2>30B, Boeza building, Sub<br />
                                City, Ethopia.</h2>
                            <h2>+1-098-9876622</h2>
                            <h2>rlye@gmail.com</h2>
                        </div>
                    </div>


                </div>
                <div className='mainlineicon'>


                    <div className='linee'>
                    </div>
                    <div className='mainicon'>
                        <p>All copyrights reserved</p>
                        <div className='iconfoter'>
                            <img alt=' ' src="./media/5.svg" />
                            <img alt=' ' src="./media/4.svg" />
                            <img alt=' ' src="./media/3.svg" />
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}
