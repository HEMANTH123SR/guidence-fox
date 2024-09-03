import Image from "next/image";
import Link from 'next/link';

interface datatype {
    imgSrc: string;
    heading: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/download (2).png",
        heading: "Interactive Games",
        paragraph: 'Engage in fun and interactive career-themed games designed to make learning about professions exciting. Test your skills, explore new interests, and stay motivated while gaining valuable career insights. Enjoy a playful approach to discovering your future!',
    },
    {
        imgSrc: "/assets/features/signal.svg",
        heading: "Personalized Learning",
        paragraph: 'Enjoy a learning experience that adapts to your needs and pace. Our platform provides customized educational paths tailored to your goals. Focus on what matters most to you with personalized guidance and resources.',

    },
    {
        imgSrc: "/assets/features/time.svg",
        heading: "One-to-One Mentorship",
        paragraph: 'Receive personalized career counseling through one-to-one mentorship. Our experts provide tailored advice and support to help you navigate your career path. Benefit from dedicated guidance to achieve your professional goals.',

    }
]

const Features = () => {
    return (
        <div className="bg-babyblue" id="features">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">Amazing Features.</h3>
                <h5 className="text-black opacity-60 text-lg font-normal text-center">Explore your future with our AI assessments, immersive AR/VR simulations, expert mentorship, and interactive games. Our all-in-one platform makes career exploration engaging and personalized, helping you unlock your potential with fun and tailored guidance.</h5>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 featureShadow'>

                            <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
                            <h3 className="text-2xl font-semibold text-black mt-5">{item.heading}</h3>
                            <h4 className='text-lg font-normal text-black opacity-50 my-2'>{item.paragraph}</h4>
                            <Link href={'/'} className="text-electricblue text-xl font-medium flex gap-2 pt-10 pb-2">
                                Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;
