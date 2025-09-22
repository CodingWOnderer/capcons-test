import FiltersComponentStatic from "./fileters-static";
import ProductListingSectionStatic from "./product-listing-section";

export type ProductListingPageProps = {
  title: string;
  description: string;
};

export default function ProductListingPage({
  title,
  description,
}: ProductListingPageProps) {
  return (
    <div className="bg-white">
      <FiltersComponentStatic
        title={title}
        description={description}
      />
      <ProductListingSectionStatic />
    </div>
  );
}
