import ProductCard from "@/components/products/productCard";
import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    // cache: "force-cache",
    next: {
      revalidate: 5,
    },
  });
  const products = await res.json();
  console.log(products);
  return (
    <div className="text-center">
      <h2 className="text-4xl">This is Home Page </h2>
      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div>
        <Link href="/products" className="text-center ">
          <button className="bg-gray-700 my-6 text-white py-1 px-4 rounded hover:bg-gray-800 transition">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
