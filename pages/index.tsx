import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import ChatWidget from "@/components/Chatwidget";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1500) 
  }, [])

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    setIsScrolled(e.currentTarget.scrollTop > 50);
  };
  function sendEmail() {
    if (navigator.share) {
      navigator
        .share({
          title: "Get in Touch with Me",
          text: "I saw your portfolio and would love to discuss potential opportunities. Looking forward to connecting!",
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      console.log("Web Share API not supported in this browser.");
      const email = "midhunchakkaravarthy07@gmail.com";
      const subject = encodeURIComponent("Potential Opportunity");
      const body = encodeURIComponent(
        "I saw your portfolio and would love to discuss potential opportunities. Looking forward to connecting!"
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  }
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Head>
            <link rel="icon" href="/assets/images/logo-color.svg" />
            <title>Midhun Chakkaravarthy</title>
          </Head>
          <main
            onScroll={handleScroll}
            className="w-full h-screen font-bodyFont bg-transparent text-textLight overflow-x-hidden 
      overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60 relative"
          >
            <div className="fixed inset-0 bg-noise z-0 pointer-events-none"></div>
            <Navbar sendEmail={sendEmail} isScrolled={isScrolled} />
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-[88vh] xl:flex items-center gap-20 justify-between relative z-10"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
              >
                <LeftSide />
              </motion.div>
              <div className="h-[88vh] w-full mx-auto p-4">
                <Banner sendEmail={sendEmail} />
                <About />
                <Experience />
                <Contact sendEmail={sendEmail} />
                <Footer />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
              >
                <RightSide sendEmail={sendEmail} />
              </motion.div>
            </motion.div>
          </main>
          {/* <div className="fixed bottom-8 right-8 w-82 z-[99]">
            <ChatWidget />
          </div> */}
        </>
      )}
    </>
  );
}
