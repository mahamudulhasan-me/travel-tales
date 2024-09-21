/* eslint-disable @typescript-eslint/no-explicit-any */
const SingleProduct = ({
  params,
  searchParams,
}: {
  params: { productId: string };
  searchParams: any;
}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        this is single product{" "}
        <span className="text-red-500">{params.productId}</span>{" "}
        <span>{searchParams.price}</span>
      </h1>
    </div>
  );
};

export default SingleProduct;
