import { useNavigate } from "react-router-dom";

import OrderCard from "./OrderCard";

function RecentOrders({

    orders,

    showDelete = false,

}) {

    const navigate = useNavigate();

    return (

        <section className="mt-8">

            <div className="mb-5 flex items-center justify-between">

                <div>

                    <h2 className="text-2xl font-bold text-gray-900">

                        Recent Orders

                    </h2>

                    <p className="mt-1 text-sm text-gray-500">

                        Latest packing orders

                    </p>

                </div>

                <button

                    onClick={() => navigate("/orders")}

                    className="
                        rounded-xl
                        px-3
                        py-2

                        text-sm
                        font-semibold

                        text-primary

                        transition

                        hover:bg-primary/10
                    "

                >

                    View All

                </button>

            </div>

            {orders?.length === 0 ? (

                <div
                    className="
                        rounded-3xl
                        border
                        border-dashed
                        border-primary/20

                        bg-white

                        py-12

                        text-center
                    "
                >

                    <h3 className="text-lg font-semibold text-gray-800">

                        No Orders Yet

                    </h3>

                    <p className="mt-2 text-sm text-gray-500">

                        Create your first order to see it here.

                    </p>

                </div>

            ) : (

                <div className="space-y-4">

                    {orders.map((order) => (

                        <OrderCard

                            key={order._id}

                            order={order}

                            showDelete={showDelete}

                        />

                    ))}

                </div>

            )}

        </section>

    );

}

export default RecentOrders;