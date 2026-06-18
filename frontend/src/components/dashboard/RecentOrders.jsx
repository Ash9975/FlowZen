import OrderCard from "./OrderCard";

function RecentOrders({ orders }) {
    return (
        <div className="mt-8">
            <div className="mt-10 mb-5 px-2 flex items-center justify-between">
                <h2 className="text-3xl font-bold">
                    Recent Orders
                </h2>

                <button className="font-bold text-primary cursor-pointer">
                    View All
                </button>
            </div>

            <div className="space-y-4">
                {orders?.map((order) => (
                    <OrderCard
                        key={order._id}
                        order={order}
                    />
                ))}
            </div>
        </div>
    );
}

export default RecentOrders;