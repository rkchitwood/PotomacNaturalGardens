import HeaderSection from "../components/HeaderSection";

export default function Contact() {
    var iframeUrl = import.meta.env.VITE_IFRAME_URL;
    // Guard against empty string - causes reload errors
    if (iframeUrl === "") iframeUrl = null;

    return (
        <>
            <div className="mx-auto lg:py-8">
                <HeaderSection header="Book an Appointment" subHeader="" />
                <iframe src={iframeUrl} title="Google Calendar"/>
            </div>
        </>
    );
}