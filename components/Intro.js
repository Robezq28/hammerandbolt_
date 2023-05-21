export default function Intro() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center h-screen'>
      <div className='w-full md:w-1/2 md:sticky top-1/2 transform -translate-y-1/2'>
        <h2 className='text-neutral-300 text-7xl md:text-8xl xl:text-9xl font-medium group mb-2'>
          intro<span className='text-red-500 animate-pulse'>_</span>
        </h2>
      </div>
      <div className='w-full md:w-2/3'>
        <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
          wanna step up your
          <span className='underline decoration-red-500'>
            {" "}
            online game?
          </span>{" "}
        </p>
        <br />
        <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
          we turn boring, basic websites into electrifying digital experiences
          <span className='text-red-500 animate-pulse'>_</span>
        </p>
        <br />
        <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
          say bye to slow load times and hello to lightning-fast browsing{" "}
          <span className='text-red-500 animate-pulse'>_</span>
        </p>
      </div>
    </div>
  );
}
