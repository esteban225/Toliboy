import { products } from "../data/products";
import ProductGrid from "../components/ProductGrid";

export default function ProductPanaderia() {
  const panaderia = products.filter((p) => p.category === "panaderia");
  return <ProductGrid products={panaderia} title="Panadería" background="bg-[#FEF9F2]" />;
}
