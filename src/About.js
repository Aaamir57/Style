import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Menssection from './Menssection';
import Sectiontwo from './Sectiontwo';
import Sectionthree from './Sectionthree';
import Sectionfive from './Sectionfive';
import Sectionfour from './Sectionfour';

export default function About() {
  return (
    <div>
       <Header/>
      <Menssection/>
      <Sectiontwo/>
      <Sectionthree/>
      <Sectionfour/>
      <Sectionfive/>
      <Footer/>
    </div>
  )
}
