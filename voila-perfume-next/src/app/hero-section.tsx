import NewImageSlider from "../components/NewImageSlider";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-white text-gray-900">
      <NewImageSlider images={['/images/image1.jpeg', '/images/image2.jpeg', '/images/image3.jpeg']} />
    </section>
  );
}
