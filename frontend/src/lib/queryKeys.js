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

        checklist: id => [
            "orders",
            id,
            "checklist",
        ],

    },
    profile: ["profile"],
    auth: ["auth", "me"],
    activity: ["activity"],

};