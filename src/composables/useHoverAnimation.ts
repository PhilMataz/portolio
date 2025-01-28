import { ref } from 'vue';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567891' as const;

export const useHoverAnimation = (initialValue: string) => {
  let interval: Timer | null = null;
  const displayValue = ref(initialValue);

  const handleMouseOver = () => {
    let iterations = 0;
    interval = setInterval(() => {
      displayValue.value = initialValue
        .split('')
        .map((_, index) => {
          if (index < iterations) {
            return initialValue[index];
          }
          return LETTERS[Math.floor(Math.random() * LETTERS.length)];
        })
        .join('');
      if (iterations >= initialValue.length && interval) {
        clearInterval(interval);
      }
      iterations += 1 / 2;
    }, 30);
  };

  const handleMouseLeave = () => {
    displayValue.value = initialValue;
    if (interval) {
      clearInterval(interval);
    }
  };

  return {
    displayValue,
    handleMouseOver,
    handleMouseLeave,
  };
};
