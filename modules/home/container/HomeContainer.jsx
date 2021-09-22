import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import KeyFeatures from '../components/KeyFeatures';
import BannerBottom from '../components/BannerBottom';
import Portfolio from '../components/Portfolio';
import FooterTop from '../components/FooterTop';
import Footer from '../components/Footer';
import Services from '../components/Services';

function HomeContainer() {
    return (
        <>
            <Banner />
            <About />
            <KeyFeatures />
            <BannerBottom />
            <Services />
            <Portfolio />
            <FooterTop />
            <Footer />
        </>
    );
}

export default HomeContainer;