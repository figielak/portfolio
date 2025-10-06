interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card = ({ icon, title, description }: CardProps) => (
  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#282829] via-[#282829] to-[#1E1E1F] p-5 shadow-[1px_2px_3px_0px] shadow-[#714CDF] transition-all duration-300 hover:shadow-[2px_4px_6px_0px] hover:shadow-[#714CDF] hover:-translate-y-1 flex flex-row gap-5">
    <div className="flex absolute left-4 top-4 h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-[#714CDF]/10 text-[#714CDF]">
      <img src={icon} alt={title} className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
    </div>
    <div className="flex flex-col flex-1 min-w-0 ml-17">
      <h3 className="mb-1.5 text-lg font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-400">{description}</p>
    </div>
  </div>
);

export default function AboutCards() {
  const cards = [
    {
      icon: "/icons/graduation.png",
      title: "Student",
      description: "Currently studying Engineering and Data Analysis at the Rzeszów University of Technology."
    },
    {
      icon: "/icons/phone.png",
      title: "Aplikacje",
      description: "Ceating desktop and mobile applications to automate tasks"
    },
    {
      icon: "/icons/machinelearning.png",
      title: "Machine Learning",
      description: "Developing solutions in the field of machine learning and artificial intelligence"
    },
    {
      icon: "/icons/automation.png",
      title: "Automatyzacja",
      description: "Creating solutions to automate daily tasks"
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
