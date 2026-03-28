"use client";
import CountUp from "react-countup";

const stats = [
  { num: 3, text: "Years of experience" },
  { num: 9, text: "Projects shipped" },
  { num: 3, text: "Cloud platforms" },
  { num: 20, text: "Tools & technologies" },
];

const Stats = () => {
  return (
    <section className="border-t border-white/5 mt-16 pt-10 pb-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col gap-1">
              <div className="flex items-end gap-1">
                <CountUp
                  end={item.num}
                  duration={3}
                  delay={0.5}
                  className="text-4xl font-semibold tracking-tight text-accent"
                />
                <span className="text-accent/40 text-2xl mb-0.5">+</span>
              </div>
              <p className="text-white/40 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
