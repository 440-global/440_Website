import React, {useEffect, useRef, useState} from 'react';
import Hero from "@/components/home/Hero";
import Navbar from "@/components/global/Navbar";
import PhoneSection from "@/components/home/PhoneSection";
import Strip from "@/components/home/Strip";
import Pay from "@/components/home/Pay";
import Services from "@/components/home/Services";
import ScrollToTop from "@/components/global/ScrollToTop";
import ScrollToTopBtn from "@/components/global/ScrollToTopBtn";
import Ecommerce from "@/components/home/Ecommerce";
import DesktopDesign from "@/components/home/DesktopDesign";
import StripTwo from "@/components/home/StripTwo";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/global/Footer";
import ClientOnly from "@/components/ClientOnly";
import Popup from "@/components/global/Popup";
import StripThree from "@/components/home/StripThree";
import Head from "next/head";
import Finance from '@/components/home/Finance';
import RfqPopup from '@/components/global/rfqPopup';
import Script from 'next/script';
import NesPopup from '@/components/global/newPopUp';

const Index = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isNewsPopupOpen, setIsNewPopupOpen] = useState(false)
  const [isRfqPopupOpen, setIsRfqPopupOpen] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const liveRef = useRef(null);
  const rfqRef = useRef(null);


  const scrollToLive = () => {
    liveRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToRfq = () => {
    rfqRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleScroll = (event) => {
    setScrollTop(event.target.scrollingElement.scrollTop);
  };
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePopup = React.useCallback(() => {
    setIsPopupOpen((prev) => !prev)
  }, [])
  const handleNewsPopup = () => {
    setIsNewPopupOpen(!isNewsPopupOpen)
  }
  
  const handleRfqPopup = () => {
    setIsRfqPopupOpen(!isRfqPopupOpen)
  }

  useEffect(() => {
    handlePopup()
  }, [handlePopup])

  useEffect(() => {
    if (isPopupOpen) document.scrollingElement.style.overflow = "hidden"
    else document.scrollingElement.style.overflowY = "auto"
  }, [isPopupOpen])
  

  return (
    <>
      <Head>
        <title>Get 440 | 440 App for African Markets </title>
        <meta name="description"
              content="Get 440 app - Connecting Africans to millions of products, deals, merchants, and payment opportunities across 100+ countries. Download 440 on Playstore and Appstore to get started with Get440."/>

        <meta property="og:title"
              content="Get 440 | Connecting Africans to millions of products, deals, merchants, and payment opportunities across 100+ countries. Download 440 on Playstore and Appstore to get started with Get440."/>
        <meta property="og:description"
              content="Get 440 app - Connecting Africans to millions of products, deals, merchants, and payment opportunities across 100+ countries. Download 440 on Playstore and Appstore to get started with Get440."/>
        <meta property="og:image" content="/images/440-socials.png"/>
        <meta property="og:url" content="https://www.get440.com"/>
        <meta property="og:type" content="website"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title"
              content="Get 440 | Connecting Africans to millions of products, deals, merchants, and payment opportunities across 100+ countries. Download 440 on Playstore and Appstore to get started with Get 440."/>
        <meta name="twitter:description"
              content="Get 440 app - Connecting Africans to millions of products, deals, merchants, and payment opportunities across 100+ countries. Download 440 on Playstore and Appstore to get started with Get 440."/>
        <meta name="twitter:image" content="/images/440-socials.png"/>
        <meta name="twitter:site" content="@440app"/>

        <link rel="canonical" href="https://www.get440.com"/>
        {/*<meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID" />*/}
        <meta property="insta:account" content="https://www.instagram.com/get440_pay?igsh=MWttNjhzZ3psZjVqdg=="/>
      </Head>

      <ScrollToTop/>
      <Navbar scrollTop={scrollTop} handlePopup={handlePopup} scrollToLive={scrollToLive} handleNewsPopup={handleNewsPopup}/>
      <Hero handlePopup={handlePopup} scrollToRfq={scrollToRfq}/>
      <Strip/>
      <Ecommerce/>


     
      {/* <StripThree handlePopup={handlePopup}/> */}
      <Pay handleRfqPopup={handleRfqPopup} liveRef={liveRef} isRfqPopupOpen={isRfqPopupOpen} isPopupOpen={isPopupOpen} isNewsPopupOpen={isNewsPopupOpen} />
    
      <PhoneSection handlePopup={handlePopup}/>
      <Services/>
      <ClientOnly>
        <Finance handleRfqPopup={handleRfqPopup} rfqRef={rfqRef}/>
      </ClientOnly>
      <DesktopDesign/>
      <Popup handlePopup={handlePopup} isPopupOpen={isPopupOpen} scrollToLive={scrollToLive}/>
      <NesPopup handleNewsPopup={handleNewsPopup} isNewsPopupOpen={isNewsPopupOpen}/>
      <RfqPopup handleRfqPopup={handleRfqPopup} isRfqPopupOpen={isRfqPopupOpen}/>
      <StripTwo/>
      <Testimonials/>
      <Footer dark/>
      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop}/>
    </>
  );
};

export default Index;
