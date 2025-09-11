import { products } from "../data/products";
import ProductGrid from "../components/ProductGrid";

export default function ProductPasteleria() {
  const pasteleria = products.filter((p) => p.category === "pasteleria");
  return <ProductGrid products={pasteleria} title="Pastelería" background="bg-[#FEF9F2]" />;
}
