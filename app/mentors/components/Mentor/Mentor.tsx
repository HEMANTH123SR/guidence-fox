// MENTORS DATA

interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  color: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'SDE @Juspay',
    href: '#',
    imageSrc: '/mentors/assets/mentor/urBuddy_abhay_singh.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'abhay singh',
  },
  {
    id: 2,
    name: 'Product management & Blockchain developer',
    href: '#',
    imageSrc: '/mentors/assets/mentor/WhatsApp Image 2024-07-27 at 22.05.56_6ee4c9e7.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Gowtham B S',
  },
  {
    id: 2,
    name: 'Software Engineer (L3) @Twilio',
    href: '#',
    imageSrc: '/mentors/assets/mentor/urBuddy_aparna_singhal.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Aparna Singhal',
  },
  {
    id: 4,
    name: 'Senior Software Engineer @Birlasoft',
    href: '#',
    imageSrc: '/mentors/assets/mentor/urBuddy_v_u_bushra.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'V U bushra',
  },
  {
    id: 5,
    name: 'Founder and developer Zapfolio',
    href: '#',
    imageSrc: '/mentors/assets/mentor/1704031031513.jpeg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Hemanth gowda',
  },
  {
    id: 6,
    name: 'Design Team Lead @WTM',
    href: '#',
    imageSrc: '/mentors/assets/mentor/1718229439906.jpeg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Rida Fathima',
  },
];

const Mentor = () => {
  return (
    <div
      id="mentors-section"
      className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div className="sm:flex justify-between items-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">
          Meet with our Mentors
        </h2>
        <div>
          <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-lightgrey hover:border-transparent rounded">
            Explore 10+ our Mentor
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-center ">
              <div>
                <div className="border border-white rounded-lg -mt-8 bg-white p-2 mentorShadow">
                  <h3 className="text-sm text-gray-700 text-center">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
                <p className="mt-3 text-2xl font-semibold text-offblack text-center">
                  {product.color}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentor;
