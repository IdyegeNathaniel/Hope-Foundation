import React, { useState } from "react"
import Button from "./ui/Button"
import { useFlutterwave } from 'flutterwave-react-v3';
import { FlutterwaveConfig } from "flutterwave-react-v3/dist/types";

const Donate: React.FC = () => {

  const [email, setEmail] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [amount, setAmount] = useState<number>(1000)

  const inputStyling = "bg-white text-xm mb-2 w-auto md:w-full p-2 outline-2 outline-neutral-300 rounded-md"

  
  // FLUTTER GATEWAY

  const config: FlutterwaveConfig = {
    public_key: import.meta.env.VITE_FLUTTER_API_KEY || '',
    tx_ref: Date.now().toString(),
    amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email,
      phone_number: phone,
      name,
    },
    customizations: {
      title: 'Hope Foundation Donation',
      description: 'Donations',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <section className="w-full p-4 bg-gray-450" id="donate">
      <div className="container flex flex-col justify-center items-center text-center gap-3 mx-auto py-20">
        <h2 className="text-3xl md:text-5xl mb-2 font-bold">Donate To the Cause</h2>
        <p className="text-gray-500 text-sm md:text-lg text-center w-full md:w-1/2">Help Further Our Reach to All in Need...</p>

        <div className="bg-orange-200 py-8 px-6 m-4 md:m-0">
          <form  className="flex flex-col gap-y-2" onSubmit={(e: React.FormEvent) => { e.preventDefault() } }>
            <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full ">
              <input type="email" value={email} placeholder="Enter Email Address" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} className={inputStyling} required />
              <input type="tel" value={phone} placeholder="Enter Phone Number" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)} className={inputStyling} required />
            </div>
            <input type="text" value={name} placeholder="Enter Full Name" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} className={inputStyling} required />
            <input type="number" value={amount} placeholder="Donation Amount" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAmount(parseFloat(event.target.value) || 0)} className={inputStyling} required />
            <Button type="submit" variant="secondary" size="lg" className="w-auto md:w-full rounded-md"
              onClick={() => {
                handleFlutterPayment({
                  callback: (response) => {
                    if (response.status !== "completed") {
                      alert("Transaction Failed")
                      console.log(response);
                    } else {
                      alert("Successful")
                      console.log(response);
                    }
                  },
                  onClose: () => { },
                });
              }}>Donate</Button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Donate