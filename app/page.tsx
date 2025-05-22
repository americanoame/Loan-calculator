
"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import Faq from "@/components/Faq";
import MonthlyPaymentResult from "@/components/MonthlyPaymentResult";
import LoanForm from "@/components/LoanForm";
import cleanNumberInput from "@/utils/cleanNumberInput";

const Page = () => {
  const [principal, setPrincipal] = useState<number | "">("");
  const [interestRate, setInterestRate] = useState<number | "">("");
  const [termYears, setTermYears] = useState<number>(30);

  const [monthlyPayment, setMonthlyPayment] = useState<number>();
  const [totalInterest, setTotalInterest] = useState<number>();
  const [totalPayment, setTotalPayment] = useState<number>();

  const months = termYears * 12;


  const handleInterestRateChange = (value: string) => {
    setInterestRate(value === "" ? "" : Number(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!principal || !interestRate || !termYears) {
      toast.error("Please fill in all fields with valid numbers.");
      return;
    }

    const annualRate = interestRate / 100;
    const monthlyRate = annualRate / 12;

    const monthly =
      (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));

    const totalPay = monthly * months;
    const totalInt = totalPay - principal;

    setMonthlyPayment(Number(monthly.toFixed(2)));
    setTotalPayment(Number(totalPay.toFixed(2)));
    setTotalInterest(Number(totalInt.toFixed(2)));
  };

  return (
    <>
      <div className="min-h-[900px] max-h-screen bg-blue-100 flex flex-col items-center justify-center px-4">
        <div className="flex flex-row justify-center items-start w-full max-w-6xl gap-12">
          <div className="mt-[20px]">
            <h1 className="text-[35px] ml-12 font-medium mb-12 text-gray-800 text-right whitespace-nowrap overflow-hidden">
              Monthly Payment Calculator
            </h1>

            <div className="max-w-sm w-full">
              <LoanForm
                principal={principal}
                interestRate={interestRate}
                termYears={termYears}
                setPrincipal={setPrincipal}
                setInterestRate={setInterestRate}
                setTermYears={setTermYears}
                onSubmit={handleSubmit}
                cleanNumberInput={cleanNumberInput}
                handleInterestRateChange={handleInterestRateChange}
              />
            </div>
          </div>

          <div className="mt-70">
            <MonthlyPaymentResult
              monthlyPayment={monthlyPayment}
              totalInterest={totalInterest}
              totalPayment={totalPayment}
              months={months}
            />
          </div>
        </div>

        <div className="max-w-3xl text-center mt-15 px-4">
          <p className="text-gray-700 text-lg">
            <span className="text-3xl font-bold text-gray-950 whitespace-nowrap">
              Want a more detailed payment calculation?
            </span>
            <br />
            <span className="block mt-2">
              Please call us to have a more accurately calculated total monthly
              payment including taxes, insurance, HOA/Condo Fees, and PMI (if
              applicable).
            </span>
          </p>
        </div>
      </div>
      <Faq />
    </>
  );
};

export default Page;






// "use client";

// import { useState } from "react";

// import Faq from "@/components/Faq";
// import MonthlyPaymentResult from "@/components/MonthlyPaymentResult";
// import toast from "react-hot-toast";

// const Page = () => {
//   const [principal, setPrincipal] = useState<number | "">("");
//   const [interestRate, setInterestRate] = useState<number | "">("");
//   const [termYears, setTermYears] = useState<number>(30);

//   // New states to hold calculated results
//   const [monthlyPayment, setMonthlyPayment] = useState<number>();
//   const [totalInterest, setTotalInterest] = useState<number>();
//   const [totalPayment, setTotalPayment] = useState<number>();

//   const months = termYears * 12;

//   // Utility to clean and parse numbers
//   const cleanNumberInput = (value: string): number | "" => {
//     const raw = value.replace(/,/g, "");
//     const num = Number(raw);
//     return isNaN(num) || raw === "" ? "" : num;
//   };

//   const handleInterestRateChange = (value: string) => {
//     setInterestRate(value === "" ? "" : Number(value));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!principal || !interestRate || !termYears) {
//       toast.error("Please fill in all fields with valid numbers.");
//       return;
//     }

//     const annualRate = interestRate / 100;
//     const monthlyRate = annualRate / 12;

//     console.log("==== Mortgage Calculation Debug ====");
//     console.log("Principal:", principal);
//     console.log("Interest Rate (%):", interestRate);
//     console.log("Annual Rate (decimal):", annualRate);
//     console.log("Monthly Rate:", monthlyRate);
//     console.log("Loan Term in Months:", months);

//     // Calculate monthly payment (standard mortgage formula)
//     const monthly =
//       (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));

//     // Calculate total payment over the life of the loan
//     const totalPay = monthly * months;

//     // Total interest paid over the loan life
//     const totalInt = totalPay - principal;

//     setMonthlyPayment(Number(monthly.toFixed(2)));
//     setTotalPayment(Number(totalPay.toFixed(2)));
//     setTotalInterest(Number(totalInt.toFixed(2)));
//   };

//   return (
//     <>
//       <div className="min-h-[900px] max-h-screen bg-blue-100 flex flex-col items-center justify-center px-4">
//         <div className="flex flex-row justify-center items-start w-full max-w-6xl gap-12">
//           <div className="mt-[20px]">
//             <h1 className="text-[35px] ml-12 font-medium mb-12 text-gray-800 text-right whitespace-nowrap overflow-hidden">
//               Monthly Payment Calculator
//             </h1>

//             <div className="max-w-sm w-full">
//               <form
//                 className="bg-gray-900 p-6 rounded shadow"
//                 onSubmit={handleSubmit}
//               >
//                 <div className="mb-4">
//                   <label className="block mb-1 font-medium text-white">
//                     Loan Amount{" "}
//                     <span className="text-yellow-400 text-xl mr-1">*</span>
//                   </label>
//                 </div>
//                 <div className="relative mb-4 flex flex-wrap items-stretch">
//                   <span className="flex items-center whitespace-nowrap rounded-s border border-e-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-base text-surface dark:border-white/10 dark:text-white">
//                     $
//                   </span>
//                   <input
//                     type="text"
//                     value={
//                       principal === "" ? "" : principal.toLocaleString("en-US")
//                     }
//                     onChange={(e) =>
//                       setPrincipal(cleanNumberInput(e.target.value))
//                     }
//                     className="flex-auto rounded-e border border-solid border-neutral-200 bg-transparent px-3 py-[0.25rem] text-base text-surface dark:border-white/10 dark:text-white"
//                     placeholder="100,000"
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block mb-1 font-medium text-white">
//                     Interest Rate{" "}
//                     <span className="text-yellow-400 text-xl mr-1">*</span>
//                   </label>
//                 </div>
//                 <div className="relative mb-4 flex flex-wrap items-stretch">
//                   <span className="flex items-center whitespace-nowrap rounded-s border border-e-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-base text-surface dark:border-white/10 dark:text-white">
//                     %
//                   </span>
//                   <input
//                     type="number"
//                     value={interestRate}
//                     onChange={(e) => handleInterestRateChange(e.target.value)}
//                     className="flex-auto rounded-e border border-solid border-neutral-200 bg-transparent px-3 py-[0.25rem] text-base text-surface dark:border-white/10 dark:text-white"
//                     placeholder="7.5"
//                   />
//                 </div>

//                 <div className="mb-8">
//                   <label className="block mb-4 font-medium text-white">
//                     Loan Term{" "}
//                     <span className="text-yellow-400 text-xl mr-1">*</span>
//                   </label>
//                   <select
//                     value={termYears}
//                     onChange={(e) => setTermYears(Number(e.target.value))}
//                     className="w-full p-2 rounded bg-white text-black"
//                   >
//                     <option value={10}>10-Year Fixed</option>
//                     <option value={15}>15-Year Fixed</option>
//                     <option value={20}>20-Year Fixed</option>
//                     <option value={25}>25-Year Fixed</option>
//                     <option value={30}>30-Year Fixed</option>
//                   </select>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//                 >
//                   Calculate
//                 </button>
//               </form>
//             </div>
//           </div>

//           <div className="mt-100">
//             {/* Pass the new calculated values */}
//             <MonthlyPaymentResult
//               monthlyPayment={monthlyPayment}
//               totalInterest={totalInterest}
//               totalPayment={totalPayment}
//               months={months}
//             />
//           </div>
//         </div>

//         <div className="max-w-3xl text-center mt-15 px-4">
//           <p className="text-gray-700 text-lg">
//             <span className="text-3xl font-bold text-gray-950 whitespace-nowrap">
//               Want a more detailed payment calculation?
//             </span>
//             <br />
//             <span className="block mt-2 ">
//               Please call us to have a more accurately calculated total monthly
//               payment including taxes, insurance, HOA/Condo Fees, and PMI (if
//               applicable).
//             </span>
//           </p>
//         </div>
//       </div>
//       <Faq />
//     </>
//   );
// };

// export default Page;

