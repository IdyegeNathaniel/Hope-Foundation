import { useState } from "react"
import Button from "./ui/Button"
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { FlutterwaveConfig } from "flutterwave-react-v3/dist/types";

const Donate: React.FC = () => {

  const [email, setEmail] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [amount, setAmount] = useState<number>(100)

  const inputStyling = "bg-white text-xm mb-2 w-full p-2 outline-2 outline-neutral-300 rounded-md"

  // FLUTTER GATEWAY


  const config: FlutterwaveConfig  = {
    public_key: process.env.NEXT_PUBLIC_FLUTTER_API_KEY!,
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
      description: 'Big Changes begins with joint Contributions',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <section className="w-full p-4 bg-gray-450">
      <div className="container flex flex-col justify-center items-center gap-3 mx-auto py-20">
        <h2 className="text-5xl mb-2 font-bold">Donate To the Cause</h2>
        <p className="text-gray-500 text-sm md:text-lg text-center w-full md:w-1/2">Help Further Our Reach to All in Need...</p>
        <div className="flex flex-col justify-center w-[750px] items-center gap-5 py-8 px-4 rounded-md bg-orange-200">

          <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full ">
            <input type="mail" value={email} placeholder="Enter Email Address" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} className={inputStyling} required />
            <input type="tel" value={phone} placeholder="Enter Phone Number" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)} className={inputStyling} required />
          </div>
          <input type="text" value={name} placeholder="Enter Full Name" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} className={inputStyling} required />
          <input type="number" value={amount} placeholder="Donation Amount" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAmount(parseFloat(event.target.value) || 0)} className={inputStyling} required />
          <Button variant="secondary" size="lg" className="w-full rounded-md"
            onClick={() => {
              handleFlutterPayment({
                callback: (response) => {
                  if( response.status !== "completed"){
                    alert("Transaction Failed")
                    console.log(response);
                  }else{
                    alert("Successful")
                    console.log(response);
                  }
                  
                  closePaymentModal() // this will close the modal programmatically
                },
                onClose: () => { },
              });
          }}>Donate</Button>

        </div>
      </div>
    </section>
  )
}

export default Donate