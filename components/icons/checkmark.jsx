export default function CheckMarkIcon({ size = 26 }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={`min-w-[${size}px]`} width={size} height={size} viewBox='0 0 26 26'>
      <path fill='#fb6152' d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z' />
    </svg>
  );
}
