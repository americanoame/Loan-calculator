const cleanNumberInput = (value: string): number | "" => {
    const raw = value.replace(/,/g, "");
    const num = Number(raw);
    return isNaN(num) || raw === "" ? "" : num;
  };

  export default cleanNumberInput;