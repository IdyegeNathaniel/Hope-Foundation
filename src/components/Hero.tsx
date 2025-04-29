import Button from "./ui/Button"
import bgImage from "/IMG 4.jpg"


const Hero: React.FC = () => {

  const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // filter: 'brightness(70%)',

  } 
  return (
    <section className="w-full relative text-white" style={backgroundStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex flex-col gap-3 text-center mt-10 py-20">
          <h2 className="text-8xl font-bold">Small Effort</h2>
          <h1 className="text-8xl font-bold">Make Big Changes</h1>
          <p className="text-md mt-5">We are ready to provide better services to make the world happy</p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <Button variant="outline" size="lg" className="text-sm border border-white hover:border-amber-400 text-white hover:text-amber-400 rounded-full cursor-pointer" >Become a Volunteer</Button>
            <Button variant="outline" size="lg" className="text-sm border border-white hover:border-amber-400 text-white hover:text-amber-400 rounded-full cursor-pointer" >Donate Now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero