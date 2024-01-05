import React from 'react'
import { Careeonemain, Careeonemainleft,Careeonemainleftbutton , Careeonemainright } from './Styled';

export default function Careeone() {
    return (
        <div>
            <Careeonemain>
                <Careeonemainleft>
                    <h1>Our Commitment<br />
                        to <strong>Safety</strong></h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.</p>
                  <Careeonemainleftbutton>
                    <h5>Download </h5>
                  </Careeonemainleftbutton>
                </Careeonemainleft>


                <Careeonemainright>
                    <img alt=' ' src="./media/0004.svg" />
                </Careeonemainright>


            </Careeonemain>
        </div>
    )
}
