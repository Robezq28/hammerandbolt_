export default function NavBar() {
  return (
    <div>
      <div className='flex flex-col items-start justify-start fixed top-0 w-full z-50'>
        <a
          href='/'
          className='text-neutral-100 text-4xl sm:text-6xl font-medium py-4'
        >
          hammerandbolt<span className='text-red-500 animate-pulse'>_</span>
        </a>
        <nav className='flex py-4 flex-col sm:flex-col'>
          <a
            href='/'
            className='text-neutral-100 text-3xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            about
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
          <a
            href='/'
            className='text-neutral-100 text-3xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            work
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
          <a
            href='/'
            className='text-neutral-100 text-3xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            expertise
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
          <a
            href='/'
            className='text-neutral-100 text-3xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            contact
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
          <a
            href='/'
            className='text-neutral-100 text-3xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            carrers
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
