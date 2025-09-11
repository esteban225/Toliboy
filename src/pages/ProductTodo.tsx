import { products } from "../data/products";
import ProductGrid from "../components/ProductGrid";

export default function ProductTodo() {
  return <ProductGrid products={products} title="Todos los productos" background="bg-[#FEF9F2]" />;
}
