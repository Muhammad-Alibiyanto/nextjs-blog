import HeroComponent from "@/src/components/Hero";
import ButtonComponent from "@/src/components/Button";

export default function Home() {
  return (
    <div className='page-container'>
      <HeroComponent bgimage={'/images/bgimage.webp'} className='hero__centered'>
        <h1 className='heading1 uppercase text-white text-center'>Inspiration for travel by real people</h1>
        <h4 className='heading4 text-white text-center mb-40'>Book smart, travel simple</h4>
        <ButtonComponent href='/' text='Start planning your trip' type='light' className='button__centered' />
      </HeroComponent>
    </div>
  );
}
