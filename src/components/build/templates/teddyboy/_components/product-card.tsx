
import { motion } from "framer-motion"
import { capitalize, formatMoney } from "./utils"

 export interface Product {
  id: string
  title: string
  slug: string
  images: string[]
  currency_code?: string
  variants?: Array<{
    price: number
    offer_price: number
    discount?: number
  }>
}

const ProductCardStatic = ({
  product,
  index = 0,
}: {
  product: Product
  index?: number
}) => {
  const variant = product.variants?.[0]
  const hasDiscount = variant?.discount && variant.discount > 0
  const discountPercent = hasDiscount ? variant?.discount : 0

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-none"
    >
      <a href={`/product/${product.slug}`} className="group block overflow-hidden">
        <div className="relative h-[322px] sm:h-[422px]">
          <motion.img
            src={product?.images[0] ?? ""}
            alt={product.title}
            sizes="(max-width: 640px) 100vw, 400px"
            
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            layout="preserve-aspect"
            className="absolute inset-0 h-full w-full rounded-lg object-cover"
          />

          <motion.img
            src={product?.images[1] ?? ""}
            alt={product.title}
            sizes="(max-width: 640px) 100vw, 400px"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            layout="preserve-aspect"
            className="absolute inset-0 h-full w-full rounded-lg object-cover"
          />

          {hasDiscount && (
            <span className="absolute left-2 bottom-2 rounded-md bg-black text-white text-[10px] font-semibold px-2 py-1">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        <div className="relative bg-white pt-3">
          <h3 className="line-clamp-1 text-zinc-800 group-hover:underline group-hover:underline-offset-4 text-[13px] font-new_hero font-normal">
            {capitalize(product.title)}
          </h3>

          <p className="text-[13px] font-new_hero font-normal tracking-wide flex items-center gap-2">
            {hasDiscount ? (
              <>
                <span>
                  {formatMoney({
                    amount: variant.offer_price,
                    currency: product?.currency_code ?? "INR",
                  })}
                </span>
                <span className="text-zinc-600 line-through">
                  {formatMoney({
                    amount: variant.price,
                    currency: product?.currency_code ?? "INR",
                  })}
                </span>
              </>
            ) : (
              <span>
                {formatMoney({
                  amount: variant?.offer_price??0,
                  currency: product?.currency_code ?? "INR",
                })}
              </span>
            )}
          </p>
        </div>
      </a>
    </motion.div>
  )
}

export default ProductCardStatic
