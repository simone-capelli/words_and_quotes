export function findMostMatchedString(inputString: string) {
  if (inputString === '') return '';
  const strings = ['web', 'web-development', 'design', 'philsophy', 'general'];
  for (const string of strings) {
    if (string.includes(inputString)) {
      return string;
    }
  }

  return '';
}
