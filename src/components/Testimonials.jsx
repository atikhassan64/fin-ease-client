import { useState } from "react";

const testimonials = [
  {
    text: "FinEase helped me control my monthly expenses easily.",
    name: "Rahim Hossain",
    role: "Student",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "The charts make tracking money so simple and visual.",
    name: "Sultana Akter",
    role: "Freelancer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "I love the light/dark mode! Eye-friendly and professional.",
    name: "Tanvir Ahmed",
    role: "Developer",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <section className="py-10 bg-base-100 px-6">
      <div className="max-w-[1200px] mx-auto text-center relative">
        <h2 className="text-2xl text-primary-content font-bold mb-8">What Our Users Say</h2>

        {/* Slider */}
        <div className="relative overflow-hidden">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`transition-transform duration-500 ease-in-out transform ${
                index === current ? "translate-x-0" : "translate-x-full absolute top-0 left-0 w-full"
              }`}
            >
              {index === current && (
                <div className="bg-base-200 rounded shadow p-8 mx-4 md:mx-32 flex flex-col items-center">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-16 h-16 rounded-full mb-4 object-cover"
                  />
                  <p className="mb-4 text-gray-700 text-center">“{t.text}”</p>
                  <span className="font-semibold text-gray-500">{t.name}, {t.role}</span>
                </div>
              )}
            </div>
          ))}

          {/* Left/Right Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-primary-content text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-secondary-content transition"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-primary-content text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-secondary-content transition"
          >
            →
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition cursor-pointer ${
                index === current ? "bg-primary-content" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
