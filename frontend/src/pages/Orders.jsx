import { useState } from "react";

import { useOrders } from "../hooks/useOrders";

import OrderHeader from "../components/orders/OrderHeader";
import SearchBar from "../components/orders/SearchBar";
import FilterTabs from "../components/orders/FilterTabs";
import OrdersList from "../components/orders/OrdersList";
import EmptyOrders from "../components/orders/EmptyOrders";
import OrdersSkeleton from "../components/orders/OrdersSkeleton";

function Orders() {

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    const {
        data,
        isLoading,
        isError,
        error,
    } = useOrders(search, filter);

    const orders = data?.orders ?? [];

    if (isError) {
        return (
            <div className="flex h-[70vh] items-center justify-center">
                <div className="text-center">
                    <h2 className="text-lg font-semibold">
                        Failed to load orders
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        {error.message}
                    </p>
                </div>
            </div>
        );
    }

    return (

        <div
            className="
                px-6
                pt-8
                pb-28
            "
        >

            <OrderHeader />

            <SearchBar
                value={search}
                onChange={setSearch}
            />

            <FilterTabs
                value={filter}
                onChange={setFilter}
            />

            {
                isLoading ? (

                    <OrdersSkeleton />

                ) : orders.length === 0 ? (

                    <EmptyOrders />

                ) : (

                    <OrdersList
                        orders={orders}
                    />

                )
            }

        </div>

    );

}

export default Orders;