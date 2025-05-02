import Profile from "../assets/Images/profile_pic.png"
import { blogStories } from "../assets/assets";

const Blogs: React.FC = () => {
  return (
    <section className="bg-neutral-50 w-full p-4 ">
      <div className="flex flex-col justify-center mx-26">

        <div className="flex flex-col gap-2 items-start justify-start">
          <h1 className="text-5xl mb-2 font-bold">Our Blogs</h1>
        </div>

        <div className="flex flex-col justify-center items-center py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mb-10">

            {
              blogStories.map((story, index) => (
                <div key={index} className="bg-orange-50 flex flex-col gap-5 p-5 rounded-md hover:-translate-y-2 ease duration-500">
                  <h2 className="font-bold text-lg">{story.title}</h2>
                  <img src={story.image} alt="" className="grayscale-50" />
                  <div className="flex items-center">
                    <img src={Profile} alt="profile" className="w-14 h-14 rounded-full mr-5" />
                    <div className="flex flex-col">
                      <p className="font-medium text-lg">{story.tag}</p>
                      <p className="text-neutral-500 text-sm">{story.timeframe}</p>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
           </div>
      </div>
    </section>
  )
}

export default Blogs