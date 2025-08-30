export default function StatBand() {
    const items = [
        { label: 'Authorized Films', value: 'Premium Brands' },
        { label: 'Warranty', value: 'Up to 10 Years' },
        { label: 'Turnaround', value: '1–3 Days' },
        { label: 'Location', value: 'Melbourne' },
    ]
    return (
        <section className="border-y border-slate-800">
            <div className="phx-container py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                {items.map((i, idx) => (
                    <div key={idx} className="text-center">
                        <div className="text-sm text-slate-400">{i.label}</div>
                        <div className="font-display text-xl">{i.value}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}
