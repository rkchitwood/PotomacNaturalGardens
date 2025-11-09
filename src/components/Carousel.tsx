/**

Carousel component
Displays a rotating image gallery that automatically loads all image files
from a specified folder path. The carousel can include any number of images,
which are dynamically imported at build time using Vite’s import.meta.glob.
The pathName must be a relative path from this component file
(src/components/Carousel.tsx) to the folder containing your images.
For example: "../assets/gallery".
@component
@param {Object} props - Component props.
@param {string} props.pathName - The relative folder path (from this component)
containing the images to display. Must resolve at build time.
@example
// Displays all images from src/assets/gallery
@remarks
The images are imported at build time, not at runtime.
Only files with .png, .jpg, .jpeg, or .svg extensions will be included.
Paths must be static (cannot be user input).
@author Ryan Chitwood
*/
export default function Carousel(pathName: string) {
    // Dynamically import all images in the given path
    const images = Object.values(
        import.meta.glob(`${pathName}/*.{png,jpg,jpeg,svg}`, { eager: true, import: "default" })
    ) as string[];

    return(
        <div id="custom-controls-gallery" className="relative w-full" data-carousel="slide">
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images.map((src, idx) => (
                    <div
                        key={idx}
                        className="hidden duration-700 ease-in-out"
                        data-carousel-item
                        >
                        <img src={src} />
                    </div>
                )) }      
            </div>
            {/* Controls */}
            <div className="flex justify-center items-center pt-4">
                <button type="button" className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                        <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                        <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    )    
}