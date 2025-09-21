import React from 'react'
import { v4 as uuidv4 } from "uuid";

const TopSearches = [
  "All",
  "Pants",
  "Cargo",
  "Gurkha",
  "Shirt",
  "Denims",
  "Jeans",
  "Baggy Cargo",
  "Linen Pants",
  "Korean Pants",
  "T-shirt",
  "Slim Fit Jeans",
  "Straight Fit Pants",
  "Wide Leg Pants",
  "Bootcut Jeans",
  "Skinny Jeans",
  "High Waist Pants",
  "Chinos",
  "Joggers",
  "Track Pants",
  "Pleated Trousers",
  "Carpenter Pants",
  "Distressed Jeans",
  "Cargo Joggers",
  "Flared Pants",
  "Corduroy Pants",
  "Workwear Pants",
  "Relaxed Fit Jeans",
  "Oversized Pants",
  "Stretch Denim",
  "Utility Pants",
];

export default function ProductListing() {
  return (
    <div><h2 className="text-center uppercase font-medium my-4">
        NEW AND POPULAR
      </h2><div className="sticky bg-white z-50 top-0 md:top-16 w-full overflow-hidden px-4 sm:px-6">
      <div
        className={`
          flex gap-2 overflow-x-auto scrollbar-hide px-2 py-2
          md:[mask-image:linear-gradient(to_right,transparent_8px,black_32px,black_calc(100%-32px),transparent_calc(100%-8px))]
          md:[-webkit-mask-image:linear-gradient(to_right,transparent_8px,black_32px,black_calc(100%-32px),transparent_calc(100%-8px))]
        `}
      >
        {TopSearches.map((item,index) => {

          return (
            <button
              key={`${item}-${uuidv4()}`}
              type="button"
              
              className={`whitespace-nowrap cursor-pointer rounded-full px-3 py-1 text-sm font-medium transition 
                ${
                  index===0
                    ? "bg-zinc-900 text-white"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }
              `}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div></div>
  )
}