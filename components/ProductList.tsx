import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";
import product from "../schemas/documents/product";

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  //console.log(products);
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-4 px-4 py-16 md:grid-cols-3 md:px-16 gap-y-16">
        {/* Products */}
        {products.map((product) => (
          <ClientSideRoute
            key={product.store.id}
            route={`/produkt/${product.store.slug.current}`}
          >
            <div className="flex flex-col cursor-pointer group">
              <div className="relative w-full h-56">
                <Image
                  className="object-cover object-left rounded-2xl"
                  src={product.store.previewImageUrl}
                  alt={product.store.title}
                  fill
                />
              </div>
              <div className="mt-4 ">
                <h1 className="text-lg">Test {product.store.title}</h1>
                <h2 className="text-sm">{product.store.descriptionHtml}</h2>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
