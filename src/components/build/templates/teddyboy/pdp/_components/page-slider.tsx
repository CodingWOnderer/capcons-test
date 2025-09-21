
import { memo, useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/v1/carousel/carousel"
import { cn } from "@/lib/utils"

type ProductSliderProps = {
  images: string[]
  title: string
  hasDiscount: boolean
  discountPercent: number
}

export const ProductSlider = memo(function ProductSlider({ images, title, hasDiscount, discountPercent }: ProductSliderProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })

    const autoScroll = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 3000)

    return () => {
      clearInterval(autoScroll)
    }
  }, [api])

  const scrollToSlide = (index: number) => {
    api?.scrollTo(index)
  }

  useEffect(() => {
    requestAnimationFrame(() => {
      const activeDot = document.querySelector(`[data-thumbnail="${current}"]`)
      activeDot?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      })
    })
  }, [current])

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, idx) => (
            <CarouselItem key={idx}>
              <div className="relative aspect-square w-full">
                <img
                  alt={title}
                  src={image || "/placeholder.svg"}
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                 
                  priority={idx === 0}
                />
                {hasDiscount && (
                  <span className="absolute left-2 bottom-2 bg-black text-white text-[10px] font-semibold px-2 py-1 rounded-none">
                    {discountPercent}% OFF
                  </span>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Custom thumbnail dots */}
      <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide">
        {images.map((image, idx) => (
          <div
            key={idx}
            data-thumbnail={idx}
            className={cn(
              "relative flex cursor-pointer m-1 justify-center items-center aspect-square w-18 md:w-24 shrink-0",
              idx === current ? "ring-2 ring-primary ring-offset-2 rounded-lg" : "",
            )}
            onClick={() => scrollToSlide(idx)}
          >
            <img
              alt={title}
              src={image || "/placeholder.svg"}
              className="object-cover rounded-lg"
              sizes="80px"
            />
          </div>
        ))}
      </div>
    </div>
  )
})

