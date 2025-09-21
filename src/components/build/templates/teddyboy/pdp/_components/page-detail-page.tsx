
import type React from "react"
import { useState } from "react"
import { Heart,  MinusIcon,  PlusIcon } from "lucide-react"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ProductSlider } from "./page-slider"
import { Button } from "@/components/v1/button/button"
import { Text } from "@/components/v1/text/text";
import { Subheading } from "@/components/v1/heading/heading";
import { DescriptionDetails, DescriptionList, DescriptionTerm } from "@/components/v1/description-list/description-list";

const staticProduct = {
  title: "Air Jordan 1 Retro High OG",
  description:
    "<p>The Air Jordan 1 Retro High OG brings back the classic silhouette that started it all. Premium materials and iconic colorway make this a must-have for any sneaker collection.</p>",
  price: 170,
  offerPrice: 140,
  currency: "USD",
  brand: "Nike",
  gender: "Unisex",
  category: ["Shoes", "Basketball"],
  slug: "air-jordan-1-retro-high-og",
  images: [
    "/assets/product1.webp",
    "/assets/product2.webp",
    "/assets/product3.webp",
    "/assets/product4.webp"
  ],
  variants: [
    { id: "1", size: "7", quantity: 5, color: "Black/Red" },
    { id: "2", size: "8", quantity: 3, color: "Black/Red" },
    { id: "3", size: "9", quantity: 0, color: "Black/Red" },
    { id: "4", size: "10", quantity: 8, color: "Black/Red" },
    { id: "5", size: "11", quantity: 2, color: "Black/Red" },
    { id: "6", size: "12", quantity: 0, color: "Black/Red" },
    { id: "7", size: "13", quantity: 4, color: "Black/Red" },
    { id: "8", size: "14", quantity: 1, color: "Black/Red" },
  ],
  extraFields: {
    colorMeta: "Black/Gym Red-White",
    moreDescription:
      "The Air Jordan 1 Retro High OG features premium leather construction with the iconic Wings logo. The rubber outsole provides excellent traction on and off the court.",
    returnInfo: "Free returns within 30 days. Items must be in original condition with tags attached.",
    moreInfo: "Manufactured in Vietnam. Imported by Nike, Inc.",
  },
}

const formatMoney = (amount: number, currency = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount)
}

export default function ProductDetailPage() {
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null)
  const [isFavorite, setIsFavorite] = useState(false)

  const product = staticProduct
  const selectedVariant = selectedVariantId
    ? product.variants.find((v) => v.id === selectedVariantId)
    : product.variants[0]

  const hasDiscount = product.offerPrice < product.price
  const discountPercent = hasDiscount ? Math.round(((product.price - product.offerPrice) / product.price) * 100) : 0

  const breadcrumbs = [
    {
      href: `/collections/${product.category[1].toLowerCase().split(" ").join("-")}`,
      title: product.category[1],
    },
    { title: product.title, href: `/product/${product.slug}` },
  ]

  const productDetails = [
    {
      name: "Product Description",
      items: [product.extraFields.moreDescription || "No description available"],
    },
    {
      name: "Shipping & Returns",
      items: [product.extraFields.returnInfo || "Standard return policy applies"],
    },
  ]

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedVariantId) return
    // Static version - just show alert
    alert(`Added ${product.title} (Size ${selectedVariant?.size}) to cart!`)
  }

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite)
  }

 
  const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: { href: string; title: string }[] }) => {
    return (
      <nav aria-label="Breadcrumb">
        <ol role="list" className="mx-auto flex items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index}>
              <div className="flex items-center">
                <a href={breadcrumb.href || "#"} className="mr-2 text-sm font-medium line-clamp-1 text-zinc-900">
                  {breadcrumb.title || "—"}
                </a>
                {breadcrumbs.length - 1 !== index && (
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-zinc-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    )
  }

  return (
    <div className="bg-white pb-8">
      <div className="pt-6">
        {/* Breadcrumb */}
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <main className="mx-auto max-w-7xl sm:px-6 pt-8 sm:pt-16 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            {/* Product */}
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              {/* Image gallery */}
              <div className="relative px-4">
                <ProductSlider
                  images={product.images}
                  hasDiscount={hasDiscount}
                  title={product.title}
                  discountPercent={discountPercent}
                />
              </div>

              {/* Product info */}
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <div className="lg:col-span-2 lg:border-zinc-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight capitalize text-zinc-900 sm:text-3xl">
                    {product.title.toLowerCase()}
                  </h1>
                </div>

                <div className="mt-3">
                  <h2 className="sr-only">Product information</h2>
                  <div className="relative bg-white pt-3">
                    <p className="mt-1.5 text-sm tracking-wide text-zinc-900 flex items-center gap-2">
                      {hasDiscount ? (
                        <>
                          <span className="text-xl tracking-tight">
                            {formatMoney(product.offerPrice, product.currency)}
                          </span>
                          <span className="text-zinc-500 line-through text-lg">
                            {formatMoney(product.price, product.currency)}
                          </span>
                        </>
                      ) : (
                        <span className="text-xl tracking-tight">
                          {formatMoney(product.offerPrice, product.currency)}
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="sr-only">Description</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.description || "<p></p>",
                    }}
                    className="space-y-6 text-zinc-700"
                  />
                </div>

                <form className="mt-6" onSubmit={handleAddToCart}>
                  {/* Sizes */}
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-zinc-900">Size</h3>
                    </div>

                    <fieldset aria-label="Choose a size" className="mt-4">
                      <div className="grid grid-cols-4 gap-3">
                        {product.variants.map((variant, index) => {
                          const outOfStock = variant.quantity === 0
                          return (
                            <div className="flex flex-col" key={index}>
                              <label
                                aria-label={variant.size}
                                className={`group relative flex flex-col items-center justify-center rounded-md border bg-white p-3 text-center ${
                                  outOfStock
                                    ? "border-red-500 bg-red-50 cursor-not-allowed opacity-70"
                                    : "border-zinc-300 has-checked:border-primary has-checked:bg-primary"
                                } has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-primary`}
                              >
                                <input
                                  value={variant.id}
                                  name="size"
                                  type="radio"
                                  disabled={outOfStock}
                                  onChange={() => setSelectedVariantId(variant.id)}
                                  className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                                />
                                {/* Diagonal cross for out of stock */}
                                {outOfStock && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-full h-full text-red-500 pointer-events-none"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                  >
                                    <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" />
                                    <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" />
                                  </svg>
                                )}
                                <span
                                  className={`text-sm font-medium uppercase ${
                                    outOfStock ? "text-red-600" : "text-zinc-900 group-has-checked:text-white"
                                  }`}
                                >
                                  {variant.size}
                                </span>
                              </label>
                              {outOfStock && <span className="text-[8px] mx-auto text-red-500 mt-1">Out of stock</span>}
                            </div>
                          )
                        })}
                      </div>
                    </fieldset>
                  </div>

                  <div className="mt-10 flex">
                    <Button
                      type="submit"
                      disabled={!selectedVariantId}
                      className="flex flex-1 items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-zinc-50 focus:outline-hidden sm:w-full"
                    >
                      Add to bag
                    </Button>

                    <button
                      type="button"
                      onClick={handleFavoriteToggle}
                      className={`ml-4 flex items-center justify-center rounded-md px-3 py-3 ${
                        isFavorite ? "text-red-500 bg-red-50" : "text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500"
                      }`}
                    >
                      <Heart className={`size-6 shrink-0 ${isFavorite ? "fill-current" : ""}`} />
                      <span className="sr-only">Add to favorites</span>
                    </button>
                  </div>
                </form>

                {/* Product Details Disclosure */}
                <section aria-labelledby="details-heading" className="mt-12">
                  <Subheading>Additional details</Subheading>
                  <div className="py-4 lg:col-span-2 lg:col-start-1  lg:border-zinc-200 lg:pr-8">
                    <div className="">
                      <DescriptionList>
                        <DescriptionTerm>Color</DescriptionTerm>
                        <DescriptionDetails>
                          {product?.extraFields?.["colorMeta"] ?? "N/A"}
                        </DescriptionDetails>

                        <DescriptionTerm>Designed For</DescriptionTerm>
                        <DescriptionDetails>
                          {product?.gender ?? "N/A"}
                        </DescriptionDetails>

                        <DescriptionTerm>Brand</DescriptionTerm>
                        <DescriptionDetails>
                          {product?.brand ?? "N/A"}
                        </DescriptionDetails>

                        <DescriptionTerm>Address</DescriptionTerm>
                        <DescriptionDetails>
                          {product?.extraFields?.["moreInfo"] ?? "N/A"}
                        </DescriptionDetails>
                      </DescriptionList>
                    </div>
                  </div>

                  <div className="divide-y divide-zinc-200 border-t border-zinc-200">
                    {productDetails.map((detail) => (
                      <Disclosure key={detail.name} as="div">
                        <h3>
                          <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                            <span className="text-sm font-medium text-zinc-900 group-data-open:text-primary">
                              {detail.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              <PlusIcon
                                aria-hidden="true"
                                className="block size-6 text-zinc-400 group-hover:text-zinc-500 group-data-open:hidden"
                              />
                              <MinusIcon
                                aria-hidden="true"
                                className="hidden size-6 text-primary/70 group-hover:text-primary group-data-open:block"
                              />
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pb-6">
                          <ul
                            role="list"
                            className="list-disc space-y-1 pl-5 text-sm/6  marker:text-zinc-300"
                          >
                            {detail.items.map((item, idx) => (
                              <li key={idx} className="pl-2">
                                <Text>{item}</Text>
                              </li>
                            ))}
                          </ul>
                        </DisclosurePanel>
                      </Disclosure>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
