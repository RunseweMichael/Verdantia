import React from 'react'
import Home from './components/homepage/Home'
import HeroMain from './components/hero/HeroMain'
import AboutMain from './components/about/AboutMain'
import HighlightsMain from './components/highlights/HighlightsMain'
import SpotlightMain from './components/spotlight/SpotlightMain'
import Showcase from './components/showcase/Showcase'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import CatalogMain from './components/catalog/CatalogMain'
import { Element } from 'react-scroll'
import { useState, useEffect } from 'react'

export default function App() {
    const [auth, setAuth] = useState({ authenticated: false, username: '' });

  useEffect(() => {
    fetch('/check-auth/', {
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Not authenticated');
        }
        return res.json();
      })
      .then((data) => {
        setAuth({ authenticated: data.authenticated, username: data.username });
      })
      .catch(() => {
        setAuth({ authenticated: false, username: '' });
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <Element name='home'><HeroMain /></Element>
      <Element name='catalog'><CatalogMain /></Element>
      <Element name='about'><AboutMain /></Element>
      <Element name='highlights'><HighlightsMain /></Element>
      <Element name='spotlight'><SpotlightMain /></Element>
      <Element name='showcase'><Showcase /></Element>
      <Element name='contact'><Contact /></Element>
      <Footer />
    </div>
  )
}
