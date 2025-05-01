import Button from "./ui/Button"

const Blogs: React.FC = () => {
  return (
     <section className="bg-neutral-50 w-full p-4 ">
          <div className="flex flex-col justify-center mx-26">
    
            <div className="flex flex-col gap-2 items-start justify-start">
              <h1 className="text-5xl mb-2 font-bold">Our Blogs</h1>
             </div>
    
            <div className="flex flex-col justify-center items-center py-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mb-10">
               
              </div>
              <Button variant="outline" size="lg" className="border border-orange-500 rounded-full text-orange-500">View More</Button>
            </div>
          </div>
        </section>
  )
}

export default Blogs