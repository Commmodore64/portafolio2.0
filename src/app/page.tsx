import localFont from "next/font/local";

//components
import Navbar from "@/components/Header";
import Home from "@/components/home";

const myFont = localFont({src: "../../fonts/brigendsexpanded-nrek1.otf"});

function HomePage() {
  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default HomePage
