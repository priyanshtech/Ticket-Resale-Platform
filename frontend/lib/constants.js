// Constants for the application

export const TICKET_STATUS = {
    ACTIVE: "active",
    LISTED: "listed",
    SOLD: "sold",
    USED: "used",
};

export const PRICE_LIMITS = {
    MIN: 0,
    MAX: 10000,
};

export const RESALE_LIMITS = {
    MAX_MARKUP_PERCENTAGE: 50, // Maximum 50% markup over original price
    MIN_PRICE: 1,
};

export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    DASHBOARD: "/dashboard",
    TICKETS: "/dashboard/tickets",
    BUY: "/dashboard/buy",
    SELL: "/dashboard/sell",
    RESELL: (id) => `/resell/${id}`,
    TICKET_QR: (id) => `/dashboard/tickets/${id}/qr`,
};
