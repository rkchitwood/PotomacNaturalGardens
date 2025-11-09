import type ParagaphContainerInterface from "../interfaces/ParagraphContainerInterface";
import ParagraphSection from "./Paragraph";

/**
 * A container component that renders a header followed by multiple paragraph sections.
 *
 * This component is useful for displaying sectioned text content, such as
 * article sections, documentation pages, or help guides.
 *
 * @component
 * @example
 * return (
 *   <ParagraphContainer
 *     header="Introduction"
 *     paragraphs={[
 *       "I am a really small paragraph...",
 *       "I have a lot to say!..."
 *     ]}
 *   />
 * )
 *
 * @param {ParagaphContainerInterface} props - The component props.
 * @param {string} props.header - The header text for the section.
 * @param {string[]} props.paragraphs - The array of paragraph strings to render.
 * @author Ryan Chitwood
 */
export default function ParagraphContainer({header, paragraphs}: ParagaphContainerInterface) {
    return (
        <div className="relative isolate overflow-hidden bg-emerald-400 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h3 className="text-3xl font-semibold tracking-tight text-emerald-900 sm:text-7xl">
                        {header}
                    </h3>
                    {paragraphs.map((p, idx) => (
                        <ParagraphSection key={idx} content={p} />
                        ))}
                </div>
            </div>
        </div>
    );
}