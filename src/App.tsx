import Herocard from "./components/Herocard"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Cause from "./components/Cause"
import Blogs from "./components/Blogs"
import Update from "./components/Update"
import Footer from "./components/Footer"
import Donate from "./components/Donate"


const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Herocard />
      <Cause />
      <Blogs />
      <Donate />
      <Update />
      <Footer />
    </>
  )
}

export default App