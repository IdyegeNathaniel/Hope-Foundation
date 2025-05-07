import { cardDets } from "../assets/assets"


const Herocard: React.FC = () => {
  return (
    <section className="w-full my-5 md:flex hidden">
      <div className="max-w-7xl flex items-center justify-center mx-auto">
        <div className="grid md:grid-cols-4 gap-8 p-4">
          
          {
            cardDets.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 w-full  py-4 px-2 rounded-md shadow-md shadow-gray-700">
                <h1 className="text-4xl font-semibold text-orange-600">{item.number}</h1>
                <p className="text-2xl">{item.name}</p>
              </div>
            ))
          }

         
        </div>
      </div>
    </section>
  )
}

export default Herocard