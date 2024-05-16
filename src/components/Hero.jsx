import Image from "next/image";
import hero from "@/../../public/hero/mainhero.jpg";
import heroRight from "@/../../public/hero/hero.jpg";
import heroLeft from "@/../../public/hero/heroleft.jpg";
import heroBarista from "@/../../public/hero/barista.jpg";

const Hero = () => {
  return (
    <div className=' min-h-screen bg-white text-black'>
      <div className='flex flex-col items-center justify-center pt-20'>
        <h1 className='text-pretty md:my-10 my-0 pl-16 pr-12 text-4xl font-semibold  md:pl-[430px] md:pr-[400px] md:text-7xl pb-12 md:pb-10 md:mt-10'>
          START YOUR DAY WITH OUR COFFEE.
        </h1>
        <Image
          src={hero}
          quality={100}
          width={200}
          height={200}
          unoptimized={true}
          priority
          alt='Hero Image'
          className='md:h-[80vh] md:w-[80vw] h-[40vh] w-[80vw] rounded-lg'
        />
        <text className='flex justify-center items-center md:text-3xl md:pr-[710px] md:pl-36 font-semibold md:pt-24 pl-12 pr-20 pt-10 text-pretty '>
          You&apos;ll be greeted by stunning visuals of our freshly brewed
          beverages, delicious pastries, and cozy atmosphere.
        </text>
        <text className='flex justify-center items-center md:text-lg md:pl-[950px] md:pr-40 font-semibold md:pt-12 text-xs pr-12 pl-32 py-10 text-pretty'>
          Quick caffeine fix, a relaxing spot to unwind, or a place to connect
          with your friends.
        </text>
        <Image
          src={heroRight}
          width={500}
          height={500}
          alt='Hero Image'
          className='w-[270px] h-[200px] md:w-[550px] md:h-[300px] rounded-lg md:ml-[680px] '
        />
        <text className='flex justify-center items-center md:text-xl md:pl-[800px] md:pr-24 font-semibold md:pt-12 text-sm pr-12 pl-20 py-10 text-pretty'>
          We&apos;re commited to using only the freshest, highest quality
          ingredients in everything we make.
        </text>
        <text className='flex justify-center items-center md:text-lg md:pr-[970px] md:pl-36 font-semibold md:pt-12 text-xs pr-12 pl-32 pt-0 pb-5 text-pretty'>
          We have a collection of fresh coffee beans that we choose.
        </text>
        <Image
          src={heroLeft}
          width={500}
          height={500}
          alt='Hero Image'
          className='w-[250px] h-[200px] md:w-[550px] md:h-[300px] rounded-lg md:mr-[690px]'
        />
        <text className='flex justify-center items-center md:text-2xl md:pr-[710px] md:pl-36 font-semibold md:pt-24 pl-12 pr-20 pt-10 text-pretty '>
          Our baristas are highly trained and skilled, ensuring that each drink
          is made with care and precision.
        </text>
        <text className='flex justify-center items-center md:text-lg md:pl-[950px] md:pr-32 font-semibold md:pt-12 text-xs pr-12 pl-32 py-10 text-pretty'>
          Our experts baristas take pride in delivering quality and consistency
          with every sip.
        </text>
        <Image
          src={heroBarista}
          width={500}
          height={500}
          alt='Hero Image'
          className='w-[270px] h-[200px] md:w-[550px] md:h-[300px] rounded-lg md:ml-[680px] md:mb-16 mb-12'
        />
      </div>
    </div>
  );
};

export default Hero;
