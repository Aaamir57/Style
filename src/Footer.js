import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* <footer>
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
            </footer> */}


            <footer className='w-full h-full flex-shrink-0 backgroundd'>
                <div className='flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-between  lg:pl-12 md:pr-12 '>
                    <img alt=' ' src="./media/rlye_logo.svg" className=' block item-center  lg:hidden pb-6' />
                    <div className='hidden md:w-2/5 lg:flex lg:flex-col lg:relative bottom-9'>
                        <img alt=' ' src="./media/rlye_logo.svg" className='w-44 h-90 text-left' />
                        <p className='text-white mt-3 font-roboto text-sm font-light leading-5 tracking-wide text-left'>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting,.</p>
                    </div>
                    <div className=' w-full flex justify-between pl-10 pr-10 flex-wrap lg:flex-nowrap lg:w-2/3 md:mt-3 lg:pl-20 lg:flex lg:justify-between lg:pt-16'>
                        <div className='flex flex-col'>
                            <h1 className='text-white mb-4 font-roboto text-base font-normal leading-5 text-left'>Quick Links</h1>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left  relative bottom-4'>Home</h2>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left  relative bottom-6'>Privacy Policy</h2>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left relative bottom-8'>Terms & Conditions</h2>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left relative bottom-10'>Safety</h2>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left relative bottom-12'>Help</h2>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-white mb-4 font-roboto text-base font-normal leading-5 text-left'>About Us</h1>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left relative bottom-4'>Business model</h2>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left relative bottom-6'>Investor relations</h2>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left relative bottom-8'>Careers</h2>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-white mb-4 font-roboto text-base font-normal leading-5 text-left'>Contact Us</h1>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-6 text-left relative bottom-4'>30B, Boeza building, Sub<br />
                                City, Ethopia.</h2>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left relative bottom-6'>+1-098-9876622</h2>
                            <h2 className='text-white font-roboto text-base font-light mt-6 leading-5 text-left relative bottom-8'>rlye@gmail.com</h2>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col pl-5 pr-5 '>
                    <div className='bg-gray-700 w-full h-px'>
                    </div>
                    <div className='flex justify-between pt-2 flex-wrap'>
                        <p className='text-white font-roboto text-base font-light  text-left'>All copyrights reserved</p>
                        <div className='flex gap-2 pt-1'>
                            <img alt=' ' src="./media/5.svg" />
                            <img alt=' ' src="./media/4.svg" />
                            <img alt=' ' src="./media/3.svg" />
                        </div>

                    </div>
                </div>
                <br/>
            </footer>
        </div>
    )
}
