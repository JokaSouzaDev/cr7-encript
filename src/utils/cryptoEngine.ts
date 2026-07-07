const ALPHABET = ["C", "R", "I", "S", "T", "A", "N", "O", "7"];

function toBase9(num: number): string {
  if (num === 0) return ALPHABET[0];
  let result = "";
  while (num > 0) {
    result = ALPHABET[num % 9] + result;
    num = Math.floor(num / 9);
  }
  return result;
}

function fromBase9(str: string): number {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const value = ALPHABET.indexOf(char);
    if (value === -1) throw new Error();
    result = result * 9 + value;
  }
  return result;
}

export function encrypt(text: string): string {
  if (!text) return "";
  return text.split("").map((char) => char === " " ? " " : toBase9(char.charCodeAt(0))).join("-");
}

export function decrypt(cipher: string): string {
  if (!cipher) return "";
  try {
    return cipher.split("-").map((block) => {
      if (block === " ") return " ";
      if (block === "") return "";
      return String.fromCharCode(fromBase9(block));
    }).join("");
  } catch {
    return "Erro: Código inválido.";
  }
}