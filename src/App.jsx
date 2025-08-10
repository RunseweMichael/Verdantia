import React from 'react'
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
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlantOfTheMonth from './components/highlights/PlantOfTheMonth'
import Guide from './components/highlights/Guide'
import Blog from './components/highlights/Blog'
import GardenPlanner from './components/highlights/GardenPlanner'
import GardenProject from './components/highlights/GardenProject'
import Herbs from './components/highlights/Herbs'

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
    <Router>
      {/* Navbar stays on all pages */}
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Element name='home'><HeroMain /></Element>
              <Element name='catalog'><CatalogMain /></Element>
              <Element name='about'><AboutMain /></Element>
              <Element name='highlights'><HighlightsMain /></Element>
              <Element name='spotlight'><SpotlightMain /></Element>
              <Element name='showcase'><Showcase /></Element>
              <Element name='contact'><Contact /></Element>
              <Footer />
            </>
          }
        />
        <Route path="/plant-of-the-month" element={<PlantOfTheMonth />}/>
        <Route path="/guide" element={<Guide />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/garden-planner" element={<GardenPlanner />} />
        <Route path="/garden-project" element={<GardenProject />} />
        <Route path="/herbs" element={<Herbs />} />
      </Routes>
    </Router>
  );
}