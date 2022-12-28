import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";
import product from "../schemas/documents/product";

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  console.log(products.length);
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-4 px-4 py-16 md:grid-cols-3 md:px-16 gap-y-16">
        {/* Products */}
        {products.map((product) => (
          <div key={0}>
            <h2>{product.description}</h2>
            <h1>Test {product.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
