import ParagraphSection from "./Paragraph";

export default function Contact() {
    const iframeUrl = import.meta.env.VITE_IFRAME_URL;

    return (
        <>
            <div className="mx-auto lg:py-8">
                <ParagraphSection content="Book an Appointment With Us" />
                <iframe src={iframeUrl} title="Google Calendar"/>
            </div>
        </>
    );
}