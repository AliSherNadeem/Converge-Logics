import Image from "next/image";
import discoveryImage from "@/../public/assets/images/discovery-illustration.svg";
import strategyImage from "@/../public/assets/images/strategy-illustration.svg";
import executionImage from "@/../public/assets/images/execuation-illustration.svg";
import vector1 from "@/../public/assets/vectors/work-section-vector1.svg";
import vector2 from "@/../public/assets/vectors/work-section-vector2.svg";


export default function HowWeWork() {
  const cards = [
    {
      illustration: discoveryImage,
    },
    {
      illustration: strategyImage,
    },
    {
      illustration: executionImage,
    },
  ];

  return (
    <section className="relative py-8 md:py-12 lg:py-16 bg-white">
      {/* Decorative elements */}
      <Image
        src={vector1}
        width={80}
        height={80}
        alt="Decorative dots"
        className="absolute top-8 left-8 z-0"
      />
      <Image
        src={vector2}
        width={80}
        height={80}
        alt="Decorative swirl"
        className="absolute top-8 right-8 z-0"
      />

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          How We Work
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
          Our Process: Aligning Cutting-Edge Tech, Data-Driven Marketing, and
          Smart Finance to Deliver Scalable, ROI-Focused Solutions for Your
          Business.
        </p>
        {/* <div className="flex flex-col md:flex-row items-center justify-center mx-auto mb-8"> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-12">
            {cards.map((card, index) => (
              <div key={index}>
                <Image
                  src={card.illustration}
                  alt={`Step ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-[90%] h-auto mx-auto"
                />
              </div>
            ))}
          </div>
        {/* </div> */}
      </div>
    </section>
  );
}
