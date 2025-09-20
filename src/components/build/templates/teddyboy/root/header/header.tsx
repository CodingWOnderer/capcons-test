/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
import { Input } from "@/components/v1/input/input";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

export function TeddyBoyHeader() {
  const cartCount = 3;

  return (
    <header
      className={`
        sticky top-0 z-[99999] bg-white hidden sm:block
        transition-all duration-500 ease-in-out
      `}
    >
      <nav aria-label="Top">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center gap-x-4 justify-between">
            {/* Logo */}
            <a href="/" className="relative h-10 w-20 flex items-center">
              <img
                src="https://storage.googleapis.com/capcons.com//image/Logo_YDErYqv3LBzLNDY_6cDwG.webp"
                alt="Demo Logo"
                className="object-cover h-full w-full"
              />
            </a>

            {/* Search Bar */}
            <div className="  relative flex-1 max-w-sm lg:max-w-xl rounded-full">
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/80"
              />
              <Input
                type="search"
                placeholder="Search..."
                className="peer !ps-8 rounded-full shadow-none w-full"
              />
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-sm font-medium underline hover:text-black">
                Sign in
              </button>

              {/* Cart */}
              <button
                type="button"
                className="group -m-2 flex items-center p-2"
              >
                <ShoppingBagIcon
                  aria-hidden="true"
                  strokeWidth={1}
                  className="size-6 text-black group-hover:text-gray-700"
                />
                {Boolean(cartCount) && (
                  <span className="ml-2 text-sm font-medium text-gray-900">
                    {cartCount}
                  </span>
                )}
                <span className="sr-only">items in cart, view bag</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
