import MonthlyPaymentResult from "@/components/MonthlyPaymentResult";

const page = () => {
  return (
    <div className="min-h-[800px] max-h-screen bg-blue-100 flex flex-col items-center justify-center px-4">
  {/* Row for form and result side by side */}
  <div className="flex flex-row justify-center items-start w-full max-w-6xl gap-12">
    {/* --- Left Column: Form --- */}
    <div className="mt-[90px]">
      <h1 className="text-[35px] ml-12 font-medium mb-12 text-gray-800 text-right whitespace-nowrap overflow-hidden">
        Monthly Payment Calculator
      </h1>

      <div className="max-w-sm w-full">
        <form className="bg-gray-900 p-6 rounded shadow">
          {/* --- Loan Amount --- */}
          <div className="mb-4">
            <label className="block mb-1 font-medium text-white">
              Loan Amount <span className="text-yellow-400 text-xl mr-1">*</span>
            </label>
          </div>
          <div className="relative mb-4 flex flex-wrap items-stretch">
            <span className="flex items-center whitespace-nowrap rounded-s border border-e-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-base text-surface dark:border-white/10 dark:text-white">
              $
            </span>
            <input
              type="text"
              className="flex-auto rounded-e border border-solid border-neutral-200 bg-transparent px-3 py-[0.25rem] text-base text-surface dark:border-white/10 dark:text-white"
              placeholder="100,000.00"
            />
          </div>

          {/* --- Interest Rate --- */}
          <div className="mb-4">
            <label className="block mb-1 font-medium text-white">
              Interest Rate <span className="text-yellow-400 text-xl mr-1">*</span>
            </label>
          </div>
          <div className="relative mb-4 flex flex-wrap items-stretch">
            <span className="flex items-center whitespace-nowrap rounded-s border border-e-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-base text-surface dark:border-white/10 dark:text-white">
              %
            </span>
            <input
              type="text"
              className="flex-auto rounded-e border border-solid border-neutral-200 bg-transparent px-3 py-[0.25rem] text-base text-surface dark:border-white/10 dark:text-white"
              placeholder="0.000"
            />
          </div>

          {/* --- Loan Term --- */}
          <div className="mb-8">
            <label className="block mb-4 font-medium text-white">
              Loan Term <span className="text-yellow-400 text-xl mr-1">*</span>
            </label>
            <select className="w-full p-2 rounded bg-white text-black">
              <option value={10}>10-Year Fixed</option>
              <option value={15}>15-Year Fixed</option>
              <option value={20}>20-Year Fixed</option>
              <option value={25}>25-Year Fixed</option>
              <option value={30}>30-Year Fixed</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Calculate
          </button>
        </form>
      </div>
    </div>

    
    <div className="mt-100">
      <MonthlyPaymentResult />
    </div>
  </div>

  
  <div className="max-w-xl text-center mt-12 px-4">
    <p className="text-gray-700 text-lg">
      <span className="text-3xl">Want a more detailed payment calculation?</span> <br />
      Please call us to have a more accurately calculated total monthly
      payment including taxes, insurance, HOA/Condo Fees, and PMI (if
      applicable).
    </p>
  </div>
</div>

  );
};

export default page;
