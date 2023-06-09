export default function Spinner() {
  return (
    <div className='flex flex-col gap-y-4 justify-center items-center m-auto h-screen bg-black'>
      <span className='text-black dark:text-neutral-50 text-2xl sm:text-6xl font-bold font-nunito flex items-center justify-center animate-pulse '>
        hammerandbolt
        <span className='text-2xl text-red-500 font-serif flex items-center'>
          _
        </span>
      </span>
    </div>
  );
}
