

// Custom function to convert Indian mobile number format
export const returnIndianNumberWithoutCode = (value: string): string => {
  // Check if the value is empty or not a number
  if (!value || isNaN(Number(value))) {
    return value;
  }

  const hasPlus = value.startsWith('+91');
  return hasPlus ? value.slice(3) : value.replace(/\D/g, '');
};

export const indexToAlphabet = (index: number): string => {
  // Convert index to ASCII code for 'A' (65)
  const asciiCodeA = 'A'.charCodeAt(0);
  // Convert index to corresponding ASCII code for the desired letter
  const asciiCode = asciiCodeA + index;
  // Convert ASCII code back to string character
  const letter = String.fromCharCode(asciiCode);
  return letter + '.';
};



export const areAllChoicesUnique = (arr: string[]): boolean => {
  const newArr = arr.filter((value) => value);

  const uniqueElements = new Set(newArr);
  return uniqueElements.size === newArr.length;
};

export const toSentenceCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const toTitleCase = (str: string): string => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

export const clippedText = (text?: string, maxLength?: number): string => {
  if (!text) return '';
  if (!maxLength) return text;
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

// make a function which takes index as 0,1 ,2, 3... and returns the option as 'A', 'B', 'C', 'D' respectively
export const getOptionLetter = (index: number) => {
  return String.fromCharCode(65 + index);
};

export const convertTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  if (minutes === 0) return `${seconds}s`;
  if (seconds === 0) return `${minutes}m`;
  return `${minutes}m ${seconds}s`;
};

export const formatIfFloat = (
  value?: number | null
): string | number | undefined => {
  if (typeof value === 'number' && value !== Math.floor(value)) {
    return (Math.round(value * 100) / 100).toFixed(2);
  }
  return value as string | number | undefined;
};
