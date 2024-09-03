import Image from 'next/image';
import Link from 'next/link';

const Business = () => {

    return (
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

            <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                <div className='col-span-6 flex flex-col justify-center'>
                    <h2 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>Interactive Games: Learn and Play Your Way to Success
                    </h2>
                    <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>Engage in fun and interactive career-themed games designed to make learning about professions exciting. Test your skills, explore new interests, and stay motivated while gaining valuable career insights. Enjoy a playful approach to discovering your future!</h3>
                    <Link href={'/'} className="text-electricblue text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                        Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                    </Link>
                </div>

                <div className='col-span-6 flex justify-center mt-10 lg:mt-0'>
                    <Image src="/assets/3d-hygge-young-woman-working-at-the-table-wearing-vr-glasses.png" alt="business" width={1000} height={805} />
                </div>

            </div>
        </div>

    )
}

export default Business;
