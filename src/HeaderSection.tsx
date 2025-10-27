import type HeaderSectionInterface from "./interfaces/HeaderSectionInterface";

export default function HeaderSection({header, subHeader}: HeaderSectionInterface) {
    return (
        <div className="relative isolate overflow-hidden bg-emerald-400 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-5xl font-semibold tracking-tight text-emerald-900 sm:text-7xl">
                        {header}
                    </h2>
                    <p className="mt-8 text-lg font-medium text-pretty text-emerald-950 sm:text-xl/8">
                        {subHeader}
                    </p>
                </div>
            </div>
        </div>
    );
}