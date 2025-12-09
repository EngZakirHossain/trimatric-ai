import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Trimatric AI",
  description: "Your AI-powered assistant for generating math problems and solutions.",
  icons:{
    icon: "/images/favicon.ico",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/vendors/bootstrap-select/bootstrap-select.min.css" />
        <link rel="stylesheet" href="/vendors/animate/animate.min.css" />
        <link rel="stylesheet" href="/vendors/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/vendors/jquery-ui/jquery-ui.css" />
        <link rel="stylesheet" href="/vendors/jarallax/jarallax.css" />
        <link rel="stylesheet" href="/vendors/jquery-magnific-popup/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="/vendors/aigence-icons/style.css" />
        <link rel="stylesheet" href="/vendors/swiper/css/swiper-bundle.min.css"/>
        <link rel="stylesheet" href="/vendors/owl-carousel/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/vendors/owl-carousel/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/aigence.css" />

    </head>
      <body className={`${jakartaSans.variable}`}>
        {children}
        <Script src="/vendors/jquery/jquery-3.7.1.min.js"></Script>
        <Script src="/vendors/bootstrap/js/bootstrap.bundle.min.js"></Script>
        <Script src="/vendors/bootstrap-select/bootstrap-select.min.js"></Script>
        <Script src="/vendors/jarallax/jarallax.min.js"></Script>
        <Script src="/vendors/jquery-ui/jquery-ui.js"></Script>
        <Script src="/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"></Script>
        <Script src="/vendors/jquery-appear/jquery.appear.min.js"></Script>
        <Script src="/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"></Script>
        <Script src="/vendors/jquery-validate/jquery.validate.min.js"></Script>
        <Script src="/vendors/wnumb/wNumb.min.js"></Script>
        <Script src="/vendors/owl-carousel/js/owl.carousel.min.js"></Script>
        <Script src="/vendors/wow/wow.js"></Script>
        <Script src="/vendors/imagesloaded/imagesloaded.min.js"></Script>
        <Script src="/vendors/isotope/isotope.js"></Script>
        <Script src="/vendors/swiper/js/swiper-bundle.min.js"></Script>
        <Script src="/vendors/countdown/countdown.min.js"></Script>
        <Script src="/vendors/jquery-circleType/jquery.circleType.js"></Script>
        <Script src="/vendors/jquery-lettering/jquery.lettering.min.js"></Script>
        <Script src="/js/aigence.js"></Script>
      </body>
    </html>
  );
}
