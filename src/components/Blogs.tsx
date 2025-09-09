import Profile from "../assets/Images/profile_pic.png"
import { blogStories } from "../assets/assets";
import { motion } from "framer-motion";
import Button from "./ui/Button";


const Blogs: React.FC = () => {
  return (
    <section className="bg-neutral-50 w-full p-4 ">
      <div className="flex flex-col justify-center mx-5 md:mx-26">

        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }} 
        className="flex flex-col gap-2 items-start justify-start">
          <h1 className="text-5xl font-bold">
            Our Blogs
          </h1>
          <p className="text-md text-justify w-full md:w-1/2">Catch Up with Our stories Wherever and Whenever...</p> 
        </motion.div>

        <div className="flex flex-col justify-center items-center py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mb-10">

            {
              blogStories.slice(3).map((story, index) => (
                <motion.div 
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                key={index} className="bg-orange-50 flex flex-col gap-5 p-5 rounded-md hover:-translate-y-2 ease duration-500">
                  <h2 className="font-bold text-lg">{story.title}</h2>
                  <img src={story.image} alt="" className="grayscale-50" />
                  <div className="flex items-center">
                    <img src={Profile} alt="profile" className="w-10 h-10 rounded-full mr-5" />
                    <div className="flex flex-col">
                      <p className="font-medium text-lg">{story.tag}</p>
                      <p className="text-neutral-500 text-sm">{story.timeframe}</p>
                    </div>
                  </div>
                </motion.div>
              ))
            }

          </div>
          <Button variant="outline" size="lg" className="border border-orange-500 rounded-full text-orange-500" >Read More</Button>
           </div>
      </div>
    </section>
  )
}

export default Blogs