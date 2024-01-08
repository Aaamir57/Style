import styled from '@emotion/styled';

export const Careeonemain = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-evenly;
  background: #323232;
  height:420px;
  overflow:hidden;

  @media (max-width: 1040px) {
      padding-left:20px;
      padding-right:20px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
     justify-content:center;
     padding-left:60px;
     padding-right:60px;
  }
  @media (max-width: 465px) {
     height:auto;
  }


`;

export const Careeonemainleft = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items:flex-start;
  padding-top:60px;
  padding-bottom:20px;
  

  h1 {
    color: #FFF;
font-family: Poppins;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 95%; 
text-align:left;/* 55.68px */
padding-bottom:10px;
  }

  strong{
    color: #04D8AC;
font-family: Poppins;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 116%;
text-align:left;
  }
  p{
    color: #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: normal;
text-align:left;
padding-bottom:20px;
  }
  @media (min-width: 980px) {
     p{
      width:350px;
     }
  }
  @media (min-width: 940px)  and (max-width: 980px) {
     {
     padding-left:20px;
     padding-right:20px;
     }
  }
`;
export const Careeonemainleftbutton = styled.button`
 width: 163px;
height: 45px;
flex-shrink: 0;
border-radius: 12px;
border: 1px solid #000;
background: #000;
display:flex;
align-items:center;
justify-content:center;
  h5{
    color: #04D8AC;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 500;

 /* 150% */
  }
`;


export const Careeonemainright = styled.div`
  display: flex;
align-items:center;
justify-content:center;
padding-top:60px;
@media (max-width: 979px) {
        display:none;
  }
img{
  
    width:100%;
    height:100%;
  
   ${'' /* @media (min-width: 1480px) {
        min-width:165.68px
        position:relative;
        right:-110px;
  } */}
 
}
  
`;






















export const Careertwomain = styled.div`
  display: flex;
 
  flex-direction:column;
  @media (min-width: 980px) {
       padding-left:40px;
       padding-right:40px;
       padding-top:30px;
       padding-bottom:40px;
  }
  @media (max-width: 980px) {
       padding-left:20px;
       padding-right:20px;
  }
`;


export const Careertwomainleft = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding-top:20px;
  padding-bottom:30px;


  
  h1{
    color: #5B5B5B;
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 35px;
padding-bottom:20px; /* 203.125% */
  }
h2{
    color: #000;
text-align: center;
font-family: Poppins;
font-size: 13px;
font-style: normal;
font-weight: 300;
line-height: normal;
padding-bottom:5px;
}
`;

export const Careertwomainright = styled.div`
  display: flex;

 align-items:center;

 @media (max-width: 1010px) {
 gap:20px;
 justify-content:center;
 flex-wrap:wrap;
  }
  @media (min-width: 1010px) {
  justify-content:space-evenly;
  gap:40px;
  }
 
 
`;



export const CareertwomainrightOnemain = styled.div`
  display: flex;

  
  max-width:300px;
height:auto;
padding:10px;

flex-direction:column;
align-items:center;
justify-content:center;
@media (max-width: 1010px) {
max-width:300px;
border-right: 1px solid #FFF;
background: #FFF;
box-shadow: 0px 18px 31px 1px rgba(139, 137, 137, 0.27);
  }
  @media (min-width: 1010px) {
    width: 292px;
height: 345px;
flex-shrink: 0;

  }

  h3{
  color: #323232;
text-align: center;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
h4{
  color: #939393;
text-align: center;
font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 163.5%; /* 19.62px */
}
`;

export const CareertwomainrightOne = styled.div`
display:flex;

height:auto;

flex-direction:column;
align-items:center;
justify-content:center;
img{
  width: 50px;
height: 50px;
flex-shrink: 0;
}

`;

export const CareertwomainrighttwomainONE = styled.div`
display:flex;
flex-direction:column;
gap:13px;


`;

export const CareertwomainrighttwomainONEline = styled.div`
background: #04D8AC;
width: 211px;
height: 1.5px;
position:relative;

right:-29%;
display:flex;
text-align:end;
justify-content:end;
@media (max-width: 1010px) {
display:none;
  }
`;
export const CareertwomainrighttwomainONElineywo = styled.div`
background: #04D8AC;
width: 76px;
height: 1.5px;

position:relative;
bottom:15px;
@media (max-width: 1010px) {
display:none;
  }
`;




export const Careertwomainrighttwomain = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
 
  border-right: 1px solid #FFF;
background: #FFF;
box-shadow: 0px 18px 31px 1px rgba(139, 137, 137, 0.27);

min-width:300px;
padding:10px;
height:auto;

@media (max-width: 1010px) {
max-width:300px;
  }
  @media (min-width: 1010px) {
    width: 292px;
height: 345px;
flex-shrink: 0;
padding:20px;

  }
h3{
  color: #323232;
text-align: center;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
h4{
  color: #939393;
text-align: center;
font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 163.5%; /* 19.62px */
}
`;












export const Careerthreemain = styled.div`
display:flex;
position:relative;
top:5px;
height:auto;
padding-top:20px;

flex-direction:column;
align-items:center;
justify-content:center;
background: #323232;

padding-bottom:20px;
@media (max-width: 1010px) {
display:none;
  }
h1{
  color: #FFF;
  padding-bottom:10px;
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
h2{
  color: #FFF;
  padding-bottom:10px;
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
img{
  width: 80%;
height: 80%;
flex-shrink: 0;
}

`;










export const Careerfourmain = styled.div`
display:flex;
justify-content:space-between;

background: #323232;
padding-top:15px;
padding-bottom:40px;
@media (min-width: 1200px) {
  gap:30px;
  align-items:center;
  justify-content:space-evenly;
  padding-left:40px;
padding-right:40px;
  }
  @media (max-width: 1200px) {
 
  justify-content:space-evenly;
 padding-top:20px;
 padding-bottom:20px;
  }
  @media (max-width: 1090px) {
 
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:20px;
 }
`;




export const Careerfourmainleft = styled.div`
display:flex;

flex-direction:column;
gap:20px;
padding-top:40px;
padding-left:20px;
padding-bottom:40px;
width:45%;
height:auto;
border-radius: 13px;
background: #FFF;
box-shadow: 0px 4px 11px 0px rgba(149, 149, 149, 0.25);
@media (max-width: 1200px) {
 
padding-right:20px;
 }
 @media (max-width: 1090px) {
 
 min-width:65%;
   }
   @media (max-width: 700px) {
  
  min-width:90%;
    }
    @media (min-width: 700px) and (max-width: 770px)  {
 
 min-width:80%;
   }
    @media (min-width: 1200px) {
  
  max-width:40%;
    }
    @media (min-width: 1350px) {
  
  max-width:35%;
    }
    @media (min-width: 1100px) and (max-width: 1200px) {
  
  max-width:43%;
    }
    
`;


export const Careerfourmainleftone = styled.div`
display:flex;
width:100%;
align-items:center;
justify-content:space-between;
@media (max-width: 550px) {
  display:flex;
  flex-direction:column-reverse;
  gap:20px;

  }
h1{

  color: #000;
font-family: Poppins;
font-size: 15px;
text-align:left;
font-style: normal;
font-weight: 300;
line-height: normal;
}
`;


export const Careerfourmainleftonediv = styled.div`
border-radius: 8px;

width: 213px;
height: 128px;
flex-shrink: 0;

@media (min-width: 1100px) and (max-width: 1200px) {
  position:relative;
right:-35px;

  }
@media (min-width: 1200px) {
  position:relative;
right:-30px;

  }
  @media (min-width: 1350px) {
  position:relative;
right:-40px;

  }

z-index:1000;

`;


export const Careerfourmainleftonedivtop = styled.div`
display:flex;
opacity:0.4;
width:100%;
height:100%;
border-radius: 8px; 
align-items:end;
justify-content:start;


`;
export const Careerfourmainleftonedivtoptext = styled.h2`

@media (min-width: 1100px) {
 
  position:absolute;
bottom:2px;
left:2px;
   }
   @media (max-width: 1100px) {
 
 position:relative;
bottom:70px;
left:2px;
  }
z-index:1;

  color: #FFF;
font-family: Poppins;
font-size: 29px;
font-style: normal;
text-align:left;
font-weight: 800;


`;





export const Careerfourmainleft1 = styled.div`
display:flex;

flex-direction:column;
gap:20px;
padding-top:40px;
padding-right:20px;
padding-bottom:40px;
width:45%;
height:auto;
border-radius: 13px;
background: #FFF;
box-shadow: 0px 4px 11px 0px rgba(149, 149, 149, 0.25);
@media (max-width: 1200px) {
 
 padding-left:20px;
  }
  @media (max-width: 1090px) {
 
min-width:65%;
  }
  @media (max-width: 700px) {
 
 min-width:90%;
   }
   @media (min-width: 700px) and (max-width: 770px)  {
 
 min-width:80%;
   }
   @media (min-width: 1200px) {
  
  max-width:40%;
    }
    @media (min-width: 1350px) {
  
  max-width:35%;
    }
    @media (min-width: 1100px) and (max-width: 1200px) {
 width:43%;

  }
`;


export const Careerfourmainleftone1 = styled.div`
display:flex;
width:100%;
align-items:center;
justify-content:space-between;
@media (max-width: 550px) {
  display:flex;
  flex-direction:column;
  gap:20px;

  }
h1{
  color: #000;
font-family: Poppins;
font-size: 15px;
text-align:left;
font-style: normal;
font-weight: 300;
line-height: normal;
}
`;

export const Careerfourmainleftonediv1 = styled.div`
border-radius: 8px;

width: 213px;
height: 128px;
flex-shrink: 0;
@media (min-width: 1100px) and (max-width: 1200px) {
  position:relative;
right:35px;

  }
@media (min-width: 1200px) {
  position:relative;
right:30px;

  }

  @media (min-width: 1350px) {
  position:relative;
right:40px;

  }


z-index:1000;

`;

export const Careerfourmainleftonedivtop1 = styled.div`
display:flex;
opacity:0.4;
width:100%;
height:100%;
border-radius: 8px; 
align-items:end;
justify-content:start;
z-index:1;
h2{
  color: #FFF;
font-family: Poppins;
font-size: 29px;
font-style: normal;
text-align:left;
font-weight: 800;
line-height: 101.5%; 

}
`;