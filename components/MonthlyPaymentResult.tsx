interface MonthlyPaymentResultProps {
  monthlyPayment?: number;
  totalInterest?: number;
  totalPayment?: number;
  months?: number;
}

const MonthlyPaymentResult = ({
  monthlyPayment,
  totalInterest,
  totalPayment,
  months,
}: MonthlyPaymentResultProps) => {
  return (
    <div className="mt-[-150px] text-right">
      <p className="text-xl text-gray-800 font-medium mb-2">Monthly Payment:</p>
      <p className="text-3xl font-bold text-blue-600">
        {monthlyPayment
          ? `$${monthlyPayment.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`
          : "--"}
      </p>

      <p className="text-xl text-gray-800 font-medium  mt-4 mb-2">
        Total Interest:
      </p>
      <p className="text-2xl font-semibold text-red-600 ">
        {totalInterest
          ? `$${totalInterest.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`
          : "--"}
      </p>

      <p className="text-xl text-gray-800 font-medium mt-4 mb-2">
        Total Payment:
      </p>
      <p className="text-2xl font-semibold text-green-600">
        {totalPayment
          ? `$${totalPayment.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`
          : "--"}
      </p>

      {months && (
        <>
          <p className="text-xl text-gray-800 font-medium mt-4 mb-2">
            Loan Term (months):
          </p>
          <p className="text-2xl font-semibold text-gray-900">
            {months}
          </p>
        </>
      )}
    </div>
  );
};

export default MonthlyPaymentResult;
