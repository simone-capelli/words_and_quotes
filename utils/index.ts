export async function findMostMatchedString(inputString: string) {
  if (inputString === '') return '';

  const response = await fetch('/api/words/tags');
  const tags = await response.json();

  for (const string of tags) {
    if (string.includes(inputString)) {
      return string;
    }
  }

  return '';
}
