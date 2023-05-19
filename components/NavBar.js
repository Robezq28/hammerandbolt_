export default function NavBar() {
  return (
    <div className='flex flex-col items-start justify-start fixed top-0 w-full z-50'>
      <h1 className='text-neutral-100 text-4xl sm:text-6xl font-medium pt-4'>
        hammerandbolt<span className='text-red-500 animate-pulse'>_</span>
      </h1>
      <nav className='flex flex-col sm:flex-col py-4'>
        <a
          href='/'
          className='text-neutral-100 text-2xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
        >
          work<span className='text-red-500 group-hover:animate-pulse'>_</span>
        </a>
        <a
          href='/'
          className='text-neutral-100 text-2xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
        >
          work<span className='text-red-500 group-hover:animate-pulse'>_</span>
        </a>
        <a
          href='/'
          className='text-neutral-100 text-2xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
        >
          work<span className='text-red-500 group-hover:animate-pulse'>_</span>
        </a>
        <a
          href='/'
          className='text-neutral-100 text-2xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
        >
          work<span className='text-red-500 group-hover:animate-pulse'>_</span>
        </a>
      </nav>
    </div>
  );
}
