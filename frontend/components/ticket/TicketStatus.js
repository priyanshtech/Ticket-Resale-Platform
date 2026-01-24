export default function TicketStatus({ status }) {
    const statusConfig = {
        active: {
            label: "Active",
            className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        },
        listed: {
            label: "Listed for Resale",
            className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        },
        sold: {
            label: "Sold",
            className: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
        },
        used: {
            label: "Used",
            className: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
        },
    };

    const config = statusConfig[status] || statusConfig.active;

    return (
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${config.className}`}>
            {config.label}
        </span>
    );
}
