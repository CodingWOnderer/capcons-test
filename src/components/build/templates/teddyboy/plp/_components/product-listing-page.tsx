import FiltersComponentStatic from "./fileters-static";
import ProductListingSectionStatic from "./product-listing-section";

export default function ProductListingPage() {
  return (
    <div className="bg-white">
      <FiltersComponentStatic
        title="Our Collection"
        description="Fresh, versatile fashion that moves with you—wherever life takes you."
      />

     <ProductListingSectionStatic />
    </div>
  )
}
