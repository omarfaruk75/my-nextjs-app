const DynamicPage = async ({ params, searchParams }) => {
  const productId = await params.productId;
  console.log(await searchParams);
  //   console.log(productId);
  return (
    <div>
      <h1>This is Dynamic Product Page{productId}</h1>
    </div>
  );
};

export default DynamicPage;
