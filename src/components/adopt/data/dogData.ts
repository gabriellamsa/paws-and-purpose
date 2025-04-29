export interface Dog {
  id: string;
  name: string;
  breed: string;
  image: string;
  description: string;
  personality: string[];
  idealFor: string;
}

export const dogs: Dog[] = [
  {
    id: "1",
    name: "Sake",
    breed: "Australian Cattle Dog",
    image: "/dogs/dog1.jpg",
    description:
      "Sake is 4 years old — energetic and intelligent, he loves outdoor activities and bonds deeply with active companions.",
    personality: ["Loyal", "Alert", "Energetic"],
    idealFor: "Active families or individuals who enjoy walks and adventures. Gets along well with other medium-sized dogs, especially active ones.",
  },
  {
    id: "2",
    name: "Café",
    breed: "Australian Cattle Dog",
    image: "/dogs/dog2.jpg",
    description:
      "Café is a curious and smart puppy, eager to learn and full of playful energy. A promising companion with lots of potential.",
    personality: ["Playful", "Clever", "Independent"],
    idealFor: "People with time and patience to raise a pup. Can live with other pets if socialized from a young age.",
  },
  {
    id: "3",
    name: "Milo",
    breed: "Border Collie",
    image: "/dogs/dog3.jpg",
    description:
      "Milo is nearly a senior at almost 10 years old. Calm, loving, and loyal, he's the perfect match for someone seeking a deep, gentle bond.",
    personality: ["Calm", "Affectionate", "Faithful"],
    idealFor: "Peaceful homes, calm adults, or older individuals. Friendly with other animals and appreciates a quiet environment.",
  },
  {
    id: "4",
    name: "Caramel",
    breed: "English Cocker Spaniel",
    image: "/dogs/dog4.jpg",
    description:
      "Caramel is 1 year old and full of love. She enjoys playtime, cuddles, and being close to her people as much as possible.",
    personality: ["Loving", "Playful", "Sweet"],
    idealFor: "Families with children or anyone who enjoys affectionate dogs. Very sociable and friendly with other dogs.",
  },
  {
    id: "5",
    name: "Tofu",
    breed: "Corgi",
    image: "/dogs/dog5.jpg",
    description:
      "Tofu is 3 years old — curious, fun, and incredibly charming. He loves exploring and being part of the family's daily routine.",
    personality: ["Outgoing", "Charming", "Loving"],
    idealFor: "Apartments or homes with a yard. Great for those seeking a cheerful, people-oriented companion. Gets along well with kids and other animals.",
  },
];
