import ProductCard from "@/components/products/productCard";

const AllProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  const products = await res.json();
  console.log(products);
  return (
    <div>
      <h1 className="text-center text-3xl">All Products Page</h1>
      <div className="w-[90%] my-5 grid grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
