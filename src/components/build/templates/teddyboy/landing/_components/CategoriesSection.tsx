import React, { memo } from "react";

type Category = {
  id: number;
  name: string;
  image: string;
  href: string;
};

const categories: Category[] = [
  {
    id: 1,
    name: "Category 1",
    image:
      "https://assets.capcons.social/templates/template-teddyboy/image1.webp",
    href: "/collections/jeans-unisex",
  },
  {
    id: 2,
    name: "Category 2",
    image:
      "https://assets.capcons.social/templates/template-teddyboy/image2.webp",
    href: "/collections/clothing-tops-unisex",
  },
  {
    id: 3,
    name: "Category 3",
    image:
      "https://assets.capcons.social/templates/template-teddyboy/image3.webp",
    href: "/collections/cargo-pants-unisex",
  },
  {
    id: 4,
    name: "Category 4",
    image:
      "https://assets.capcons.social/templates/template-teddyboy/image4.webp",
    href: "/collections/pants-unisex",
  },
  {
    id: 5,
    name: "Category 5",
    image:
      "https://assets.capcons.social/templates/template-teddyboy/image5.webp",
    href: "/collections/pants-unisex",
  },
  {
    id: 6,
    name: "Category 6",
    image:
      "https://assets.capcons.social/templates/template-teddyboy/image6.webp",
    href: "/collections/t-shirts-unisex",
  },
];

const CategoryCard = memo(({ cat }: { cat: Category }) => (
  <a
    href={cat.href}
    className="flex flex-col items-center aspect-[3/4] rounded-xl overflow-hidden bg-white relative"
  >
    <img
      src={cat.image}
      alt={cat.name}
      className="object-cover h-full"
      
    />
  </a>
));

CategoryCard.displayName = "CategoryCard";

const FeaturedCategories: React.FC = memo(() => {
  return (
    <div className="mt-12 mx-0 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center uppercase font-medium my-4">
        Featured Categories
      </h2>
      <div className="grid grid-cols-3 mx-auto md:grid-cols-4 lg:grid-cols-6 gap-1.5">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
});

FeaturedCategories.displayName = "FeaturedCategories";

export default FeaturedCategories;
