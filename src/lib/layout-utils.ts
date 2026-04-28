export const generateBinaryText = (rows: number, columns: number): string => {
  let text = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      text += Math.round(Math.random()).toString();
    }
    text += "\n";
  }
  return text;
};
