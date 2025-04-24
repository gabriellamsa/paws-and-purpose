import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Carol",
    role: "Pet Parent",
    image: "/c/c1.jpg",
    content: "A dog is a big responsibility, but also a loving companion who's always by your side. Lilo helps me a lot with my depression, and even though it's a lot to take care of her, it's totally worth it.",
  },
  {
    id: 2,
    name: "Jane",
    role: "Pet Parent",
    image: "/c/c2.jpg",
    content: "Bella came into my life during a difficult time. Her companionship and unconditional love helped me overcome depression. Today we are inseparable.",
  },
  {
    id: 3,
    name: "Paul",
    role: "Pet Parent",
    image: "/c/c3.jpg",
    content: "Having a dog at home brought more life and movement to our family. The children learned about responsibility and love for animals.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Inspiring Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover real stories of people whose lives were transformed by the companionship of a dog.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 