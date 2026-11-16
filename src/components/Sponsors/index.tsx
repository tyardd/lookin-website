import SectionHeading from "../Common/SectionHeading";

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="border-t border-white/10 bg-ink-900 py-20 lg:py-24"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Acknowledgments"
          title="Thank you to our sponsors"
          center
        >
          Our technology has been developed with the support of the U.S.
          Department of Energy, the Office of Naval Research, the U.S. Air
          Force, the National Aeronautics and Space Administration, and the
          California Energy Commission. We are grateful for their trust in our
          work.
        </SectionHeading>
      </div>
    </section>
  );
};

export default Sponsors;
