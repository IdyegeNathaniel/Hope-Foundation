

const Footer: React.FC = () => {
  return (
    <footer className="bg-black p-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-16 mx-5 md:mx-20 py-10 px-2 md:px-3">
        <div className="">
          <h1 className="font-medium text-xl mb-5">H❤PE FOUNDATION</h1>
          <p className="w-full md:w-2/3 text-sm text-neutral-500 leading-6 text-justify">
            Making a difference in communities around the world through sustainable development and empowerment.
          </p>
        </div>
        {/* MIDDLE */}
        <div className="">
          <h1 className="font-medium text-xl mb-5">COMPANY</h1>
          <ul className="flex flex-col gap-2 text-sm text-neutral-500 ">
            {["Home", "About Us", "Home Service", "Privacy Policy"].map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
        {/* RIGHT */}
        <div className="">
          <h1 className="font-medium text-xl mb-5">GET IN TOUCH</h1>
          <ul className="flex flex-col gap-2 text-sm text-neutral-500 ">
            <li>+000-0000-000</li>
            <li>testuser@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="mx-5 md:mx-20">
        <hr />
        <h4 className="py-5 text-center text-base text-neutral-400">
          ©Copyright 2025 - HOPE FOUNDATION.
        </h4>
      </div>
    </footer>
  )
}

export default Footer