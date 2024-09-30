import axios from "axios";
import { useState } from "react";

const Payment = () => {


    const [name, setName] = useState(' ');
    const [mobile, setMobile] = useState(' ');
    const [amount, setAmount] = useState(' ');
    const [loading, setLoading] = useState(false);
   
   const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = {
        name:name,
        mobile,
        amount,
        MUID:"MUIDW" + Date.now(),
        transactionId: "T" + Date.now()   
    }

await axios
.post("http://localhost:8000/order", data)
.then((response) => {
Console.log(response.data);
})
.catch((error) => {
    console.log(error);
})            

}   
   
   
    return (

        <div className="flex items-center justify-between h-[600px] mx-20">



            {/* right section :|Payment form */}
            <div className="w-1/2 border-2 max-w-3xl p-6 rounded-md border-dashed border-[#6739B7]">
            <form onSubmit={handleSubmit} className="">
                <h2 className="text-4xl font-bold mb-6 text-[#6739B7]">Make a Payment</h2>

                <div className="mb-6">
                    <label
                    htmlFor="Name"
                    className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="absolute insert-y-0 left-0 flex-items-center pl-3 pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">❤️</span>
                        </div>
                        <input
                        id="Name"
                        name="Name"
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        required
                        placeholder="Enter your Name"
                        className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-insert" /> 
                    </div>
                </div>

                <div className="mb-6">
                    <label
                    htmlFor="Mobile"
                    className="block text-sm font-medium leading-6 text-gray-900">
                        Mobile
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="absolute insert-y-0 left-0 flex-items-center pl-3 pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">📞</span>
                        </div>
                        <input
                        id="Mobile"
                        name="Mobile"
                        value={mobile}
                        onChange={(e)=>setMobile(e.target.value)}
                        required
                        placeholder="Enter your Mobile number"
                        className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-insert" /> 
                    </div>
                </div>

                <div className="mb-6">
                    <label
                    htmlFor="Amount"
                    className="block text-sm font-medium leading-6 text-gray-900">
                        Amount
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="absolute insert-y-0 left-0 flex-items-center pl-3 pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">₹</span>
                        </div>
                        <input
                        id="Amount"
                        name="Amount"
                        type="text"
                        value={amount}
                        onChange={(e)=>setAmount(e.target.value)}
                        required
                        placeholder="Enter your Name"
                        className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-insert" /> 

                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <label htmlFor="currency" className="sr-only">
                                Currency
                            </label>
                            <select
                            id="currency"
                            name="currency"
                            className="h-full py-0 pl-2 text-gray-500 bg-transparent border-0 rounded-md pr-7 focus:ring-2">

                                <option>INR</option>
                                <option>CAD</option>
                                <option>EUR</option>          
                            </select>
                        </div>

                    </div>
                </div>
                <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#6739B7] text-white font-semibold rounded-md hover:bg-primary-dark">
                    Pay Now
                </button>
  </form>
 </div>
 </div>
    )
}

export default Payment