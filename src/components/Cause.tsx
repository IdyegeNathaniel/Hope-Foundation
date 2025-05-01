import { useState } from "react"
import { CauseItems } from "../assets/assets"
import Button from "./ui/Button"

const Cause = () => {
  const [viewMore, setViewMore] = useState<boolean>(false)
  return (
    <section className="bg-neutral-50 w-full p-4 ">
      <div className="flex flex-col justify-center mx-26">

        <div className="flex flex-col gap-2 items-start justify-start">
          <h1 className="text-5xl mb-2 font-bold">Our Cause</h1>

          <p className="text-md text-justify w-1/2">At Hope Foundation, we believe in creating a world where everyone
            has access to basic needs, education, and opportunities for a better future. For over 15 years, we've been working tirelessly to empower communities and drive sustainable change.</p>
        </div>

        <div className="flex flex-col justify-center items-center py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mb-10">
            {
              CauseItems.slice(3).map((item, index) => (
                <div className="bg-white shadow-md shadow-gray-700" key={index}>
                  <img src={item.image} alt="img" className="w-full" />
                  <div className="flex flex-col gap-2 py-4 px-4">
                    <h2 className="font-bold text-orange-600 text-xl mb-2">{item.title}</h2>
                    <p className="text-sm font-semibold text-neutral-700 h-15 mb-2">{item.tag}</p>
                    <Button size="md" variant="secondary" className="inline-block">Donate</Button>
                  </div>
                </div>
              ))
            }
          </div>
          <Button variant="outline" size="lg" className="border border-orange-500 rounded-full text-orange-500" >View More</Button>
        </div>
      </div>
    </section>
  )
}

export default Cause