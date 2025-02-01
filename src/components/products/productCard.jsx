import Image from "next/image";

const ProductCard = ({ product }) => {
    return (
        <div className=" m-auto p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <Image
                src={product.image}
                alt={product.productName}
                width={400}
                height={200}
                className="rounded-lg m-auto"
            />
            <h3 className="text-lg font-semibold mt-2">{product.productName}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-sm text-gray-600">Brand: {product.brand}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
            <button className="mt-3 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition">
                Buy Now
            </button>
        </div>
    );
};

export default ProductCard;
