export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
}) {
    return (
        <div>
            {children}
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {users}
                    {revenue}
                </div>
                <div style={{ flex: 1 }}>{notifications}</div>
            </div>
        </div>
    );
}
