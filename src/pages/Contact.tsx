import Paragraph from "../components/Paragraph";

export default function Contact() {
    const iframeUrl = import.meta.env.VITE_IFRAME_URL;

    return (
        <>
            <div className="mx-auto lg:py-8">
                <Paragraph content="Book an Appointment With Us" />
                <iframe src={iframeUrl} title="Google Calendar"/>
            </div>
        </>
    );
}