import { useState } from "react"
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react"
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { Input } from "@/components/v1/input/input"
import { Checkbox } from "@/components/v1/checkbox/checkbox"


const sortOptions = [
  { name: "Discount: High to Low", value: "discounthigh" },
  { name: "Discount: Low to High", value: "discountlow" },
  { name: "Price: High to Low", value: "pricehighc" },
  { name: "Price: Low to High", value: "pricelow" },
]

const searchDescriptions = [
  "Explore our curated selection tailored just for you.",
  "Discover trending styles and must-have picks.",
  "Shop the best deals handpicked for your search.",
  "Find top-rated options with great value.",
  "Your perfect match is just a click away.",
]

const mockFilters = [
  {
    id: "brand",
    name: "Brand",
    options: [
      { value: "nike", label: "Nike" },
      { value: "adidas", label: "Adidas" },
      { value: "puma", label: "Puma" },
      { value: "reebok", label: "Reebok" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "black", label: "Black" },
      { value: "white", label: "White" },
      { value: "blue", label: "Blue" },
      { value: "red", label: "Red" },
    ],
  },
]

export default function FiltersComponentStatic({
  filters = mockFilters,
  title = "Our Collection",
  description = "Fresh, versatile fashion that moves with you—wherever life takes you.",
}: {
  filters?: { id: string; name: string; options: { value: string; label: string }[] }[]
  title?: string
  description?: string
}) {
  const [open, setOpen] = useState(false)

  const search = null
  const minPrice = ""
  const maxPrice = ""
  const sort = ""

  const filterStates = filters.map(() => "")

  const hasActiveFilters = false

  const resetFilters = () => {
  }

  const randomDescription = search ? searchDescriptions[Math.floor(Math.random() * searchDescriptions.length)] : null

  return (
    <div>
      {/* MOBILE FILTER DRAWER */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 sm:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black/25" />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative ml-auto flex size-full max-w-xs flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-zinc-900">Filters</h2>
              <button onClick={() => setOpen(false)}>
                <XMarkIcon className="size-6 text-zinc-400" />
              </button>
            </div>

            {hasActiveFilters && (
              <div className="px-4 mt-2">
                <button type="button" onClick={resetFilters} className="text-sm text-red-600 hover:underline">
                  Reset Filters
                </button>
              </div>
            )}

            <form className="mt-4">
              {/* PRICE RANGE */}
              <Disclosure as="div" className="border-t border-zinc-200 px-4 py-6">
                <DisclosureButton className="group flex w-full justify-between bg-white px-2 py-3 text-sm text-zinc-400">
                  <span className="font-medium text-zinc-900">Price</span>
                  <ChevronDownIcon className="size-5 transform group-data-open:-rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="pt-6 space-y-4">
                  <Input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={() => {}} // No-op for static version
                  />
                  <Input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={() => {}} // No-op for static version
                  />
                </DisclosurePanel>
              </Disclosure>

              {/* API FILTERS */}
              {filters.map((section, index) => {
                const currentValue = filterStates[index]

                return (
                  <Disclosure key={section.id} as="div" className="border-t border-zinc-200 px-4 py-6">
                    <DisclosureButton className="group flex w-full justify-between bg-white px-2 py-3 text-sm text-zinc-400">
                      <span className="font-medium text-zinc-900">{section.name}</span>
                      <ChevronDownIcon className="size-5 transform group-data-open:-rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="pt-4">
                      <div className="space-y-6 px-2">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3 items-center">
                            <Checkbox
                              id={`filter-${section.id}-${optionIdx}`}
                              checked={currentValue?.split(",").includes(option.value)}
                               
                            />
                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                )
              })}
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      {/* DESKTOP FILTER BAR */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 text-center">
          {search ? (
            <>
              <h1 className="text-2xl md:text-4xl font-bold text-zinc-900">
                Results for <span className="text-primary">"{search}"</span>
              </h1>
              <p className="mx-auto mt-2 md:mt-4 max-w-3xl text-sm md:text-base text-zinc-500">{randomDescription}</p>
            </>
          ) : (
            <>
              <h1 className="text-2xl md:text-4xl font-bold text-zinc-900">{title}</h1>
              <p className="mx-auto mt-2 md:mt-4 max-w-3xl text-sm md:text-base text-zinc-500">{description}</p>
            </>
          )}
        </div>

        <section aria-labelledby="filter-heading" className="border-t border-zinc-200 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* SORT */}
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="group inline-flex text-sm font-medium text-zinc-700 hover:text-zinc-900">
                Sort
                <ChevronDownIcon className="-mr-1 ml-1 size-5 text-zinc-400" />
              </MenuButton>
              <MenuItems className="absolute left-0 z-10 mt-2 w-48 rounded-md bg-white shadow-2xl ring-1 ring-black/5">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <MenuItem key={option.value}>
                      <button
                        type="button"
                        onClick={() => {}} // No-op for static version
                        className="block w-full px-4 py-2 text-sm text-zinc-900 hover:bg-zinc-100"
                      >
                        {option.name}
                      </button>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-block text-sm font-medium text-zinc-700 sm:hidden"
            >
              Filters
            </button>

            {hasActiveFilters && (
              <button type="button" onClick={resetFilters} className="text-sm text-red-600 hover:underline">
                Reset Filters
              </button>
            )}

            {/* DESKTOP FILTERS */}
            <PopoverGroup className="hidden sm:flex sm:space-x-8">
              {/* PRICE */}
              <Popover className="relative">
                <PopoverButton className="group inline-flex text-sm font-medium text-zinc-700 hover:text-zinc-900">
                  Price
                  <ChevronDownIcon className="-mr-1 ml-1 size-5 text-zinc-400" />
                </PopoverButton>
                <PopoverPanel className="absolute right-0 z-10 mt-2 w-56 rounded-md bg-white p-4 shadow-2xl ring-1 ring-black/5">
                  <form className="space-y-4">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={minPrice}
                      onChange={() => {}} // No-op for static version
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={() => {}} // No-op for static version
                    />
                  </form>
                </PopoverPanel>
              </Popover>

              {/* API FILTERS */}
              {filters.map((section, index) => {
                const currentValue = filterStates[index]

                return (
                  <Popover key={section.id} className="relative">
                    <PopoverButton className="group inline-flex text-sm font-medium text-zinc-700 hover:text-zinc-900">
                      {section.name}
                      <ChevronDownIcon className="-mr-1 ml-1 size-5 text-zinc-400" />
                    </PopoverButton>
                    <PopoverPanel className="absolute right-0 w-24 z-10 mt-2 rounded-md bg-white p-4 shadow-2xl ring-1 ring-black/5">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3 items-center">
                          <Checkbox
                            id={`filter-${section.id}-${optionIdx}`}
                            checked={currentValue?.split(",").includes(option.value)}
                            onCheckedChange={() => {}} // No-op for static version
                          />
                          <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </PopoverPanel>
                  </Popover>
                )
              })}
            </PopoverGroup>
          </div>
        </section>
      </div>
    </div>
  )
}
