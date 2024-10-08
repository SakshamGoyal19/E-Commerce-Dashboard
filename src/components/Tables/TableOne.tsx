const brandData: any[] = [
  {
    name: 'Macro Shoes',
    price: '$79.40',
    quantity: '82',
    amount: '$6588.20'
  },
  {
    name: 'Macro Shoes',
    price: '$79.40',
    quantity: '82',
    amount: '$6588.20'
  },
  {
    name: 'Macro Shoes',
    price: '$79.40',
    quantity: '82',
    amount: '$6588.20'
  },
  {
    name: 'Macro Shoes',
    price: '$79.40',
    quantity: '82',
    amount: '$6588.20'
  },
  {
    name: 'Macro Shoes',
    price: '$79.40',
    quantity: '82',
    amount: '$6588.20'
  },
];

const TableOne = () => {
  return (
    <div className="rounded-xl border border-stroke bg-whiter px-5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-4 text-lg font-semibold text-black dark:text-white">
        Top Selling Products
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4">
          <div className="p-2.5 xl:p-3">
            <h5 className="text-sm font-medium xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-3">
            <h5 className="text-sm font-medium xsm:text-base">
              Price
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-3">
            <h5 className="text-sm font-medium xsm:text-base">
              Quantity
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-3">
            <h5 className="text-sm font-medium xsm:text-base">
              Amount
            </h5>
          </div>
        </div>

        <hr></hr>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-4 mb-4${
              key === brandData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex p-2.5 xl:p-3">
              <p className="text-black dark:text-white">{brand.name}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-3">
              <p className="text-meta-3">{brand.price}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-3">
              <p className="text-black dark:text-white">{brand.quantity}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-3">
              <p className="text-meta-5">{brand.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
