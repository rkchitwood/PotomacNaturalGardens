import type ParagraphInterface from "../interfaces/ParagraphInterface";

/**
 * A simple, reusable paragraph component for rendering formatted text content.
 *
 * This component is typically used inside larger sections or containers to display
 * individual paragraphs with consistent spacing and typography.
 *
 * @component
 * @example
 * return (
 *   <Paragraph content="I can't really think of an example, but if you think about i..." />
 * )
 *
 * @param {ParagraphInterface} props - The props for the Paragraph component.
 * @param {string} props.content - The text content to be displayed within the paragraph.
 */
export default function Paragraph({  content } : ParagraphInterface) {

    return (
        <p
            className="mt-8 text-lg font-medium text-pretty text-emerald-950 sm:text-xl/8"
        >
            {content}
        </p>
    )
}