export default function Spinner() {
  return (
    <div className='flex flex-col gap-y-4 justify-center items-center m-auto h-screenbg-black'>
      <span className='text-black dark:text-neutral-50 text-6xl font-bold font-nunito flex items-center justify-center animate-pulse '>
        hammerandbolt
        <span className='text-6xl text-red-500 font-serif flex items-center'>
          _
        </span>
      </span>
    </div>
  );
}
