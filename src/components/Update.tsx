import Button from "./ui/Button"
import Input from "./ui/Input"

const Update: React.FC = () => {
  return (
    <section className="w-full p-4">
      <div className="container flex flex-col mx-auto gap-5 justify-center items-center py-20">
        <h1 className="text-5xl mb-2 font-bold">Stay Connected</h1>
        <p className="text-gray-500 text-sm md:text-lg text-center w-full md:w-1/2">Subscribe to our newsletter to receive updates on our projects, events, and ways you can help.</p>
        <div className=" flex flex-col md:flex-row justify-center items-center  gap-4 ">
          <Input type="text" placeholder='Enter Your Email Address' className="md:w-[500px] w-auto py-3 px-2 border outline-none" />
          <Button variant="secondary" size="lg">Subscribe</Button>
        </div>
      </div>
    </section>
  )
}

export default Update