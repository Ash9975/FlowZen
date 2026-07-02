export const queryKeys = {

    dashboard: {

        stats: ["dashboard", "stats"],
        recentOrders: ["dashboard", "recent-orders"],

    },

    orders: {

        all: ["orders"],
        detail: (id) => ["orders", id],

    },

    profile: ["profile"],
    activity: ["activity"],

};