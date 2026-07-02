import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import api from "../api/axios";

import OrderHeader from "../components/orders/OrderHeader";
import SearchBar from "../components/orders/SearchBar";
import FilterTabs from "../components/orders/FilterTabs";
import OrdersList from "../components/orders/OrdersList";
import EmptyOrders from "../components/orders/EmptyOrders";
import OrdersSkeleton from "../components/orders/OrdersSkeleton";

function Orders() {

    const [orders, setOrders] = useState([]);

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState("all");

    useEffect(() => {

        const fetchOrders = async () => {

            try {

                const { data } = await api.get("/orders");

                setOrders(data.orders);

            } catch (err) {

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        fetchOrders();

    }, []);

    const filteredOrders = orders.filter(order => {

        const matchesSearch =
            order.customerName
                .toLowerCase()
                .includes(search.toLowerCase());

        if (filter === "all")
            return matchesSearch;

        return (
            order.status === filter &&
            matchesSearch
        );

    });

    return (

        <motion.div
            initial={{
                opacity: 0,
                x: 20,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: .35,
            }}
            className="min-h-screen"
        >

            <div
                className="
                    mx-auto
                    max-w-md
                    min-h-screen

                    bg-white

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
                    loading ? (

                        <OrdersSkeleton />

                    ) : filteredOrders.length === 0 ? (

                        <EmptyOrders />

                    ) : (

                        <OrdersList
                            orders={filteredOrders}
                        />

                    )
                }

            </div>

        </motion.div>

    );

}

export default Orders;