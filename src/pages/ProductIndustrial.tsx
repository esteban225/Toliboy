import { products } from "../data/products";
import ProductGrid from "../components/ProductGrid";

export default function ProductIndustrial() {
  const industrial = products.filter((p) => p.category === "industrial");
  return <ProductGrid products={industrial} title="Industrial" background="bg-[#FEF9F2]" />;
}
