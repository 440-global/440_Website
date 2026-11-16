import '@/styles/globals.css'
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Script from 'next/script';

export default function App({Component, pageProps}) {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
      duration: 900
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Connecting Africans to millions of products, deals, merchants and payment opportunities across 100+ countries. Download 440 on Playstore and Appstore to get started." />
        <link rel="icon" href="/images/favicon.svg" sizes="any" />
        <title>Get 440 | 440 App for African Markets </title>
     
         <noscript>
          <img
            height="1"
            width="1"
            alt=""
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1237712821716065&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
       <Script src="//fw-cdn.com/11539548/4197774.js" chat="true"/>
      <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1237712821716065'); 
              fbq('track', 'PageView');
            `,
          }}
        />
      <Component {...pageProps} />
    </>
  )
}
