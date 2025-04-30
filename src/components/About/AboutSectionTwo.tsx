// src/components/About/AboutSectionTwo.tsx
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      {/* space-y-16 gives 4rem (64px) between each child */}
      <div className="container space-y-16">
        
        {/* Main Title */}
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Meet the Team
          </h2>
        </div>

        {/* Board Section */}
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-semibold text-black dark:text-white sm:text-4xl">
            Board
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            <TeamMember
              name="Dr. Tolga Yardimci"
              role="CEO & CTO"
              image="/images/team/Tolga.png"
            />
            <TeamMember
              name="Prof. Mona Jarrahi"
              role="Co-founder & Board Member"
              image="/images/team/Mona.png"
            />
          </div>
        </div>

        {/* Technical Team Section */}
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-semibold text-black dark:text-white sm:text-4xl">
            Technical Team
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            <TeamMember
              name="Dr. Ali Aiden Charkhesht"
              role="Principle Hardware Engineer"
              image="/images/team/Ali2.png"
            />
            <TeamMember
              name="Dr. Greg Pawin"
              role="Lead Software Engineer"
              image="/images/team/Greg2.png"
            />
            <TeamMember
              name="Shawn Recinos"
              role="R&D Engineer"
              image="/images/team/Shawn2.png"
            />
          </div>
        </div>

        {/* Administrative Team Section */}
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-semibold text-black dark:text-white sm:text-4xl">
            Administrative Team
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            <TeamMember
              name="Qing Shao"
              role="Administrative Officer"
              image="/images/team/Qing.png"
            />
          </div>
        </div>

        {/* Advisors Section */}
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-semibold text-black dark:text-white sm:text-4xl">
            Advisors
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            <TeamMember
              name="Rick Friedman"
              role="Legal Advisor"
              image="/images/team/Rick.png"
            />
            <TeamMember
              name="James Valle"
              role="Financial Advisor"
              image="/images/team/James.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) => (
  <div className="w-full max-w-xs text-center">
    <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg">
      <Image src={image} alt={name} fill className="object-cover" />
    </div>
    <h4 className="mt-4 text-xl font-semibold text-black dark:text-white">
      {name}
    </h4>
    <p className="text-body-color dark:text-gray-300">{role}</p>
  </div>
);

export default AboutSectionTwo;
