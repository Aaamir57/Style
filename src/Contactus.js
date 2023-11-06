import React from 'react'
import Header from './Header'
import Footer from './Footer';

export default function Contactus() {
    return (
        <div>
            <Header />
            <div className='sectiononecontactus'>
                <h1>Contact Us</h1>
                <p>Get in touch with our team</p>
                <div className='iconcontactus'>
                    <img alt=' ' src="./media/30.svg" />
                    <img alt=' ' src="./media/31.svg" />
                    <img alt=' ' src="./media/32.svg" />
                </div>
            </div>




            <div className='sectiontwomaincontact'>
                <div className='sectiontwoleft'>
                    <h1>Don’t be shy </h1>
                    <p>There are a lot of ways to be in
                        <br />touch with us.</p>
                    <div className='linecontactfie'></div>
                    <div className='saysection'>
                        <img alt=' ' src="./media/111.svg" />
                        <div className='saysectiontext'>
                            <h1>Say hello on social networks</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                            </p><p>elit, sed do eiusmod tempor</p>
                        </div>
                    </div>
                    <div className='saysection'>
                        <img alt=' ' src="./media/113.svg" />
                        <div className='saysectiontext'>
                            <h1>Call us via telephone</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                            </p><p>elit, sed do eiusmod tempor</p>
                        </div>

                    </div>
                </div>
                <div className='sectiontworight'>
                    <div className='formcontactus'>
                        <div className='dropmian'>
                            <img alt=' ' src="./media/112.svg" />
                            <h1>Drop us a line</h1>
                        </div>
                        <div className='maininput'>
                            <input  type="text" name="" value="" placeholder="Name"/>
                            <input  type="text" name="" placeholder='Email' />
                            <input type="text" name="" placeholder='Contact no' />
                            <textarea type="text" name="" value=""  placeholder='messeage' />
                        </div>
                        <div className='submitbtnmain'>
                            <div className='boxseting'>
                                <div className='boxcontact'></div>
                                <h1>Accept the <span>privacy policy</span></h1>
                            </div>
                            <button className='btncintactus'><h1>Submit</h1></button>
                        </div>
                    </div>
                </div>
            </div>




            <div className='mainfivesection'>
                <div className='rightfivesection'>
                    <img alt=' ' src="./media/Rectangle.png" className='imgfivee'/>

                </div>
                <div className='leftffivesection'>
                    <h1>Avalaible for ios
                        and Android</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.</p>
                    <div className='mainbtn'>
                        <button className='btnbody'>
                            <div className='btntextmain'>
                                <img alt=' ' src="./media/21.svg" />
                                <div className='btntext'>
                                    <h1>Download on the</h1>
                                    <h2>App Store</h2>
                                </div>
                            </div>
                        </button>
                        <button className='btnbody'>
                            <div className='btntextmain'>
                                <img alt=' ' src="./media/20.svg" />
                                <div className='btntext'>
                                    <h1>Download on the</h1>
                                    <h2>Google Play Store</h2>
                                </div>
                            </div>
                        </button>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}
