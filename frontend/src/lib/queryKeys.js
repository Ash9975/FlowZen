export const queryKeys = {

    dashboard: {

        stats: ["dashboard", "stats"],
        recentOrders: ["dashboard", "recent-orders"],

    },

    orders: {

        all: ["orders"],

        list: (search, status, page) => [
            "orders",
            search,
            status,
            page,
        ],

        detail: id => [
            "orders",
            id,
        ],

    },
    profile: ["profile"],
    activity: ["activity"],

};