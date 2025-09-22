import React, { memo } from "react"

type Category = {
  id: number
  name: string
  image: string
  href: string
}

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
))

CategoryCard.displayName = "CategoryCard"

interface FeaturedCategoriesProps {
  categories: Category[]
}

const FeaturedCategories: React.FC<FeaturedCategoriesProps> = memo(({ categories }) => {
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
  )
})

FeaturedCategories.displayName = "FeaturedCategories"

export default FeaturedCategories
