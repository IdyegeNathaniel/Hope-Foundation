import { motion } from "framer-motion"
import Button from "./ui/Button"
import bgImage from "/BG.jpg"


const containerVariants = {
  hidden : { opacity: 0, x: -100},
  visible: { opacity: 1, x: 0, transition: {duration: 2, staggerChildren: 0.5}}
}

const childVariants = {
  hidden : { opacity: 0, x: -100},
  visible: { opacity: 1, x: 0, transition: {duration: 1.5}}
}

const Hero: React.FC = () => {

  const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',

  } 

  const mainStyling = 'text-5xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-25 font-bold'; 
  
  
  return (
    <section className="w-full h-screen border-b border-amber-600 relative text-white" style={backgroundStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="flex flex-col gap-3 text-center mt-10 py-20">
          <h1 className={mainStyling}>Small Effort<br />Make Big Changes</h1>
          <p className="text-xl text-zinc-300 mt-5">We are ready to provide better services to make the world happy</p>
          <motion.div variants={childVariants} className="flex md:flex-row flex-col md:w-full items-center justify-center gap-3 mt-4">
            <Button variant="primary" size="lg" className="font-bold" fullWidth>Become a Volunteer</Button>
            <Button variant="primary" size="lg" className="font-bold" fullWidth>Donate Now</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero