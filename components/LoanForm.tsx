"use client";

interface LoanFormProps {
  principal: number | "";
  interestRate: number | "";
  termYears: number;
  setPrincipal: (value: number | "") => void;
  setInterestRate: (value: number | "") => void;
  setTermYears: (value: number) => void;
  onSubmit: (e: React.FormEvent) => void;
  cleanNumberInput: (value: string) => number | "";
  handleInterestRateChange: (value: string) => void;
}

const LoanForm = ({
  principal,
  interestRate,
  termYears,
  setPrincipal,
  setTermYears,
  onSubmit,
  cleanNumberInput,
  handleInterestRateChange,
}: LoanFormProps) => {
  return (
    <form className="bg-gray-900 p-6 rounded shadow" onSubmit={onSubmit}>
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
          value={principal === "" ? "" : principal.toLocaleString("en-US")}
          onChange={(e) => setPrincipal(cleanNumberInput(e.target.value))}
          className="flex-auto rounded-e border border-solid border-neutral-200 bg-transparent px-3 py-[0.25rem] text-base text-surface dark:border-white/10 dark:text-white"
          placeholder="100,000.00"
        />
      </div>

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
          type="number"
          value={interestRate}
          onChange={(e) => handleInterestRateChange(e.target.value)}
          className="flex-auto rounded-e border border-solid border-neutral-200 bg-transparent px-3 py-[0.25rem] text-base text-surface dark:border-white/10 dark:text-white"
          placeholder="0.000"
        />
      </div>

      <div className="mb-8">
        <label className="block mb-4 font-medium text-white">
          Loan Term <span className="text-yellow-400 text-xl mr-1">*</span>
        </label>
        <select
          value={termYears}
          onChange={(e) => setTermYears(Number(e.target.value))}
          className="w-full p-2 rounded bg-white text-black"
        >
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
  );
};

export default LoanForm;
