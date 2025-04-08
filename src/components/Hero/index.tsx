import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Revolutionizing Non-Destructive Testing with Terahertz Imaging
              </h1>
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                We engineer cutting-edge terahertz scanners designed for
                non-invasive, non-contact industrial quality inspection. <br /> 
                Our systems deliver an unprecedented 1000x improvement in dynamic
                range over conventional terahertz time-domain spectroscopy/imaging solutions—enabling faster, more
                sensitive, and more accurate quality control across advanced
                manufacturing sectors.
              </p>
            </div>
          </div>
        </div>


      </div>

      {/* Decorative background SVGs */}
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        {/* SVG code unchanged */}
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        {/* SVG code unchanged */}
      </div>
    </section>
  );
};

export default Hero;
