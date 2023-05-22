export default function page() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center h-auto min-h-screen mt-24'>
      <div className='w-full mb-24 lg:w-1/2 lg:sticky lg:top-1/2 lg:transform lg:-translate-y-1/2 '>
        <h2 className='text-neutral-300 text-7xl lg:text-8xl xl:text-9xl font-medium group mb-2'>
          about<span className='text-red-500 animate-pulse'>_</span>
        </h2>
      </div>
      <div className='w-full lg:translate-y-1/4'>
        <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
          we started out as a group of tech-heads, obsessed with the idea of
          making the internet more beautiful and more functional. we didn't want
          to create just another website - we wanted to craft digital
          experiences.
          <span className='text-red-500 animate-pulse'>_</span>
        </p>
        <br />
        <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
          our mission? to set a new standard for web design. to make every pixel
          count, every interaction matter. to show the world what the web can
          really do.
          <span className='text-red-500 animate-pulse'>_</span>
        </p>
        <br />
        <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
          our team is a collection of designers, developers, and dreamers. each
          one a master of their craft, all committed to turning your vision into
          reality.
          <span className='text-red-500 animate-pulse'>_</span>
        </p>
        <br />
        <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
          we don't just build websites, we build relationships. we work with you
          every step of the way, making sure every detail is just right.
          <span className='text-red-500 animate-pulse'>_</span>
        </p>
        <br />
        <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
          and don't just take our word for it. ask our clients. they'll tell you
          about the difference we've made - the customers we've won, the sales
          we've driven, the impressions we've made.
          <span className='text-red-500 animate-pulse'>_</span>
        </p>
      </div>
    </div>
  );
}
