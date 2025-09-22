type BannerProps = {
  href: string
  image: string
}

export function BannerComponent({ href, image }: BannerProps) {
  return (
    <div className="px-4 sm:px-6 !my-8">
      <a
        href={href}
        className="relative rounded-lg h-full overflow-clip mx-auto cursor-pointer"
      >
        <img
          src={image}
          height={1220}
          width={3864}
          className="w-full rounded-lg h-full object-cover"
          alt="banner"
        />
      </a>
    </div>
  )
}
