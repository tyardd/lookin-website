import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Meet the Team
          </h2>
          <p className="text-lg text-body-color dark:text-gray-300 max-w-2xl mx-auto">
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {/* Team Member 1 */}
          <div className="w-full max-w-xs text-center">
            <Image
              src="/images/team/Tolga.png"
              alt="Tolga"
              width={250}
              height={250}
              className="mx-auto rounded-full shadow-lg"
            />
            <h4 className="mt-4 text-xl font-semibold text-black dark:text-white">Dr. Tolga Yardimci</h4>
            <p className="text-body-color dark:text-gray-300">CEO & CTO</p>
          </div>

          {/* Team Member 2 */}
          <div className="w-full max-w-xs text-center">
            <Image
              src="/images/team/Mona.png"
              alt="Mona"
              width={250}
              height={250}
              className="mx-auto rounded-full shadow-lg"
            />
            <h4 className="mt-4 text-xl font-semibold text-black dark:text-white">Prof. Mona Jarrahi</h4>
            <p className="text-body-color dark:text-gray-300">Co-founder & Board Member</p>
          </div>

          {/* Team Member 3 */}
          <div className="w-full max-w-xs text-center">
            <Image
              src="/images/team/Qing.png"
              alt="Qing"
              width={250}
              height={250}
              className="mx-auto rounded-full shadow-lg"
            />
            <h4 className="mt-4 text-xl font-semibold text-black dark:text-white">Qing Shao</h4>
            <p className="text-body-color dark:text-gray-300">CAO</p>
          </div>

          {/* Team Member 4 */}
          <div className="w-full max-w-xs text-center">
            <Image
              src="/images/team/Rick.png"
              alt="Rick"
              width={250}
              height={250}
              className="mx-auto rounded-full shadow-lg"
            />
            <h4 className="mt-4 text-xl font-semibold text-black dark:text-white">Rick Friedman</h4>
            <p className="text-body-color dark:text-gray-300">Legal Advisor</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
