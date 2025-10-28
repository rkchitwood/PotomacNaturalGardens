import type NavInterface from "../interfaces/NavInterface";
import { Link } from "react-router-dom";

export default function NavBase({ linkLabels }: NavInterface) {

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800/70 backdrop-blur-md z-50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                {/* Left: Logo */}
                    <div className="flex items-center">
                        <Link
                            to={"/"}
                            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/5 hover:text-white"
                        >
                        <img
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                        alt="PNG Logo"
                        className="h-8 w-auto"
                        />
                        </Link>
                        <Link
                            to={"/"}
                            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/5 hover:text-white"
                        >
                        <span>Potomac Natural Gardens</span>
                        </Link>
                    </div>

                    {/* Right: Nav Links */}
                    <div className="hidden sm:flex space-x-4">
                        {linkLabels.map(({ link, label }) => (
                        <Link
                            key={link}
                            to={link}
                            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/5 hover:text-white"
                        >
                            {label}
                        </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>

    )
}