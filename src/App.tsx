import Herocard from "./components/Herocard"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Cause from "./components/Cause"
import Blogs from "./components/Blogs"


const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Herocard />
      <Cause />
      <Blogs />
    </>
  )
}

export default App