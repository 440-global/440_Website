import React, {useLayoutEffect, useState} from 'react';
import ScrollToTop from "@/components/global/ScrollToTop";
import ScrollToTopBtn from "@/components/global/ScrollToTopBtn";
import PrivacyPolicy from '@/components/home/privacy';
import Head from "next/head";

const Privacy = () => {
  const [scrollTop, setScrollTop] = useState(0)
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
  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Get 440 | Privacy Policy </title>
        <meta name="description" content="Get 440 app - Connecting Africans to millions of products, deals, merchants, and payment opportunities across 100+ countries. Download 440 on Playstore and Appstore to get started with Get 440." />

        <meta property="og:title" content="Get 440 | Connecting Africans to millions of products, deals, merchants, and payment opportunities across 100+ countries. Download 440 on Playstore and Appstore to get started with Get 440." />
        <meta property="og:description" content="Get 440 app - Connecting Africans to millions of products, deals, merchants, and payment opportunities across 100+ countries. Download 440 on Playstore and Appstore to get started with Get 440." />
        <meta property="og:image" content="/images/440-socials.png" />
        <meta property="og:url" content="https://www.get440.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get 440 | Connecting Africans to millions of products, deals, merchants, and payment opportunities across 100+ countries. Download 440 on Playstore and Appstore to get started with Get 440." />
        <meta name="twitter:description" content="Get 440 app - Connecting Africans to millions of products, deals, merchants, and payment opportunities across 100+ countries. Download 440 on Playstore and Appstore to get started with Get 440." />
        <meta name="twitter:image" content="/images/440-socials.png" />

        <link rel="canonical" href="https://www.get440.com" />
      </Head>

      <ScrollToTop/>
      <PrivacyPolicy/>
      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop}/>
    </>
  );
};

export default Privacy;
