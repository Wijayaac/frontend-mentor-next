import Link from "next/link";

export default function Header() {
  return (
    <header className='sticky top-0 z-50 w-full px-4 py-1 flex flex-wrap justify-between bg-white'>
      <h1>Header</h1>
      <ul className='flex gap-2'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/newsletter'>Newsletter</Link>
        </li>
      </ul>
    </header>
  );
}
