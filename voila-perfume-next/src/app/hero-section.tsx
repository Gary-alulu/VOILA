import NewImageSlider from '../components/NewImageSlider';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center">
      <NewImageSlider images={['/images/image1.jpeg', '/images/image2.jpeg', '/images/image3.jpeg']} />
    </section>
  );
}
