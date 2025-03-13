import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import NewsSection from "./components/NewsSection"
import StatsSection from "./components/StatsSection"
import FeaturesSection from "./components/FeaturesSection"
import Chatbot from "./components/chatbot"
import Footer from "./components/Footer"


function App() {
  return (
    <>
    <div className="w-screen">
      <Navbar/>
      <HeroSection/>
      <FeaturesSection/>
      <StatsSection/>
      <NewsSection/>
      <Footer/>
      <Chatbot/>
      </div>
    </>
  )
}

export default App
