import LandingSection from "../components/LandingSection";

export default function Home() {
    return (
        <>
            <LandingSection 
                header="Turn your garden into a wildlife habitat."
                subHeader="Native landscaping is low maintenence, and provides a resilient habitat, providing food and shelter to local pollinators and other wildlife."
                btnOne={ { link: "/contact", label: "Schedule" } }
                btnTwo={ { link: "/About", label: "Learn More" } }                
            />            
        </>
    );
}