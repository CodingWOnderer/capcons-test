import { PackageOpen } from "lucide-react"
import ProductCardStatic, { type Product } from "../../_components/product-card"

const mockProducts: Product[] = [
  {
    id: "1",
    title: "premium wireless headphones",
    slug: "premium-wireless-headphones",
    images: ["/assets/headphones1.webp", "/assets/headphones2.webp"],
    currency_code: "USD",
    variants: [
      {
        price: 19999, // $199.99 in cents
        offer_price: 14999, // $149.99 in cents
        discount: 25,
      },
    ],
  },
  {
    id: "2",
    title: "premium leather wallet",
    slug: "premium-leather-wallet",
    images: ["/assets/headphones1.webp","/assets/headphones2.webp"],
    currency_code: "USD",
    variants: [
      {
        price: 8999, // $89.99 in cents
        offer_price: 6999, // $69.99 in cents
        discount: 22,
      },
    ],
  },
  {
    id: "3",
    title: "smart fitness watch",
    slug: "smart-fitness-watch",
    images: ["/assets/headphones1.webp","/assets/headphones2.webp"],
    currency_code: "USD",
    variants: [
      {
        price: 29999, // $299.99 in cents
        offer_price: 24999, // $249.99 in cents
        discount: 17,
      },
    ],
  },
  {
    id: "4",
    title: "organic cotton t-shirt",
    slug: "organic-cotton-t-shirt",
    images: ["/assets/headphones1.webp","/assets/headphones2.webp"],
    currency_code: "USD",
    variants: [
      {
        price: 3999, // $39.99 in cents
        offer_price: 2999, // $29.99 in cents
        discount: 25,
      },
    ],
  },
  {
    id: "5",
    title: "stainless steel water bottle",
    slug: "stainless-steel-water-bottle",
    images: ["/assets/headphones1.webp","/assets/headphones2.webp"],
    currency_code: "USD",
    variants: [
      {
        price: 2499, // $24.99 in cents
        offer_price: 1999, // $19.99 in cents
        discount: 20,
      },
    ],
  },
  {
    id: "6",
    title: "wireless charging pad",
    slug: "wireless-charging-pad",
    images: ["/assets/headphones1.webp","/assets/headphones2.webp"],
    currency_code: "USD",
    variants: [
      {
        price: 4999, // $49.99 in cents
        offer_price: 3999, // $39.99 in cents
        discount: 20,
      },
    ],
  },
]

interface ProductListingSectionStaticProps {
  circle_id?: string
  Category?: string
  filters?: {
    id: string
    name: string
    options: { value: string; label: string }[]
  }[]
  showEmptyState?: boolean
  products?: Product[]
}

const ProductListingSectionStatic = ({
  circle_id,
  Category,
  filters,
  showEmptyState = false,
  products = mockProducts,
}: ProductListingSectionStaticProps) => {
  const isEmpty = products.length === 0

  if (isEmpty || showEmptyState) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
        <PackageOpen strokeWidth={1} className="h-16 w-16 text-zinc-900 mb-4" />
        <h2 className="text-lg font-semibold text-zinc-700">No products found</h2>
        <p className="mt-2 text-sm text-zinc-500 max-w-md">
          We couldn't find any products that match your filters. Try clearing filters or exploring other categories.
        </p>
        <button
          onClick={() => (window.location.href = "/collections")}
          className="mt-6 rounded-lg bg-black px-5 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition"
        >
          Explore All Products
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="grid w-full grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(200px,fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mt-6 min-h-screen mx-auto items-center gap-x-4 gap-y-4 px-4 sm:px-6 lg:px-8">
        {products.map((product, index) => (
          <ProductCardStatic key={`${product.id}---${index}`} product={product} index={index % 12} />
        ))}
      </div>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <div className="py-8 mx-auto">
          {/* Static version - no actual infinite scroll, just the visual structure */}
        </div>
      </div>
    </>
  )
}

export default ProductListingSectionStatic
