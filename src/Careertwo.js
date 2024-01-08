import React from 'react'
import { Careertwomain, Careertwomainleft, Careertwomainright, CareertwomainrighttwomainONEline, CareertwomainrighttwomainONElineywo, CareertwomainrightOne, CareertwomainrightOnemain, CareertwomainrighttwomainONE, Careertwomainrighttwomain } from './Styled';
export default function Careertwo() {
    return (
        <div>
            <Careertwomain>
                <Careertwomainleft>
                    <h1>
                        Consumer Safety Categories
                    </h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br />
                        labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    </h2>
                </Careertwomainleft>

                <Careertwomainright>

                    <CareertwomainrightOnemain>
                        <CareertwomainrightOne
                            style={{ backgroundImage: 'url("./media/0005.svg")', backgroundSize: 'cover', width: '100px', height: '100px' }}>
                            <img alt=' ' src="./media/0006.svg" />
                        </CareertwomainrightOne>
                        <h3>Physical Safety</h3>
                        <h4>Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. </h4>
                    </CareertwomainrightOnemain>

                    <CareertwomainrighttwomainONE>
                        <CareertwomainrighttwomainONEline>

                        </CareertwomainrighttwomainONEline>
                        <Careertwomainrighttwomain>
                            <CareertwomainrightOne>
                                <img alt=' ' src="./media/0007.svg"  className='imagetwo'/>
                            </CareertwomainrightOne>
                            <h3>Health Safety</h3>
                            <h4>Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. </h4>
                        </Careertwomainrighttwomain>
                        <CareertwomainrighttwomainONElineywo>
                            
                        </CareertwomainrighttwomainONElineywo>
                    </CareertwomainrighttwomainONE>



                    <CareertwomainrightOnemain>
                        <CareertwomainrightOne
                            style={{ backgroundImage: 'url("./media/0005.svg")', backgroundSize: 'cover', width: '100px', height: '100px' }}>
                            <img alt=' ' src="./media/0008.svg" />
                        </CareertwomainrightOne>
                        <h3>Information Safety</h3>
                        <h4>Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. </h4>
                    </CareertwomainrightOnemain>

                </Careertwomainright>
            </Careertwomain>
        </div>
    )
}
