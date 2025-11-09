import { Link } from "react-router-dom";
import type LandingSectionInterface from "../interfaces/LandingSectionInterface";

/**
Renders the main landing section of the site, typically used as the top hero area.
This component displays a prominent header, an optional subheader, and up to two
call-to-action buttons. While primarily intended for the home page, it is reusable
for other marketing or introductory sections if needed.
@component
@example
<LandingSection
header="Welcome to My Application"
subHeader="It can do so many things!"
btnOne={{ label: "Get Started", href: "/signup" }}
btnTwo={{ label: "Learn More", href: "/about" }}
/>
@param {Object} props - Component props.
@param {string} props.header - The main headline text.
@param {string} [props.subHeader] - Optional secondary text displayed under the header.
@param {{ label: string; href: string }} [props.btnOne] - Optional primary button configuration.
@param {{ label: string; href: string }} [props.btnTwo] - Optional secondary button configuration.
@author Ryan Chitwood
*/
export default function LandingSection({ header, subHeader, btnOne, btnTwo }: LandingSectionInterface) {
    return (
        <>
            <div className="bg-emerald-400">
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-2xl py-20 sm:py-28 lg:py-32">

                    <div className="text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-balance text-emerald-900 sm:text-7xl">
                            {header}
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-emerald-800 sm:text-xl/8">
                            {subHeader}
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link 
                            to={btnOne.link} 
                            className="rounded-md bg-emerald-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                {btnOne.label}
                        </Link>
                        <Link 
                            to={btnTwo.link} 
                            className="text-sm/6 font-semibold text-white">
                                {btnTwo.label}
                                <span aria-hidden="true">→</span>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}