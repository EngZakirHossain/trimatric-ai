import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { fetchFromAPI } from "@/lib/api";
import { SiteProvider } from "./context/SiteContext";
import TopBar from "@/Components/Topbar.jsx";
import Footer from "@/Components/Footer.jsx";
import Loader from "@/Components/Loader.jsx";
import { Toaster } from "react-hot-toast";
import 'bootstrap/dist/css/bootstrap.min.css';


const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
});

export async function generateMetadata(): Promise<Metadata> {
  const siteResponse = await fetchFromAPI("/site-setting");
  const site = siteResponse.data;

  return {
    title: site.name || "Trimatric AI",
    description: site.address || "125 Ramna Century Avenue Boro Moghbazar, Dhaka-1217 Bangladesh",
    icons: { icon: site.favicon || "/favicon.ico" },
    openGraph: {
      title: site.name,
      siteName: site.name,
      url: site.domain,
      images: [site.favicon],
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const siteResponse = await fetchFromAPI("/site-setting");
  const site = siteResponse.data;

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/aigence.css" />
      </head>
      <body className={`${jakartaSans.variable} antialiased`}>
        <Loader />
        <SiteProvider initialData={site}>
          <div className="page-wrapper">
            <TopBar /> 
            <Toaster position="top-right" />
            {children}
            <Footer />
          </div>          
        </SiteProvider> 
      </body>
    </html>
  );
}
