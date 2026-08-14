export default function Section({children}: {children: React.ReactNode}) {
    return (
        <section className="w-full px-4 py-6 lg:px-6 lg:py-8 flex items-center justify-center">
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    )
}