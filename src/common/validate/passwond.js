export const validPassword = (password) => {
  const passwordA = password.trim().split("");
  const validSymbols = [
    "qwertyuiopasdfghjklzxcvbnm".split(""),
    "1234567890".split(""),
  ];
  return (
    passwordA.length >= 8 &&
    validSymbols[0].some((letter) => passwordA.includes(letter)) &&
    validSymbols[0].some((letter) =>
      passwordA.includes(letter.toUpperCase())
    ) &&
    validSymbols[1].some((number) => passwordA.includes(number)) &&
    passwordA.every((symbol) => {
      return (
        validSymbols[0].includes(symbol) ||
        validSymbols[0].includes(symbol.toLowerCase()) ||
        validSymbols[1].includes(symbol)
      );
    })
  );
};