import Link from "next/link";

export default function Header() {
  return (
    <header className='sticky top-0 z-50 w-full px-20 py-4 bg-gray-dark text-white'>
      <div className='max-w-[840px] mx-auto flex flex-wrap justify-between '>
        <h1>Frontend Mentors</h1>
        <ul className='flex gap-4'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/newsletter'>Newsletter</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
