export async function findMostMatchedString(inputString: string) {
  if (inputString === '') return '';

  const response = await fetch('/api/words/tags');
  const tags = await response.json();

  // check if response is empty -> when there are no words yet
  if (!tags) return '';

  for (const string of tags) {
    if (string.includes(inputString)) {
      return string;
    }
  }

  return '';
}
