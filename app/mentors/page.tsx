import Banner from './components/Banner/Banner';
import Tabs from './components/Courses/Courses';
import Mentor from './components/Mentor/Mentor';

import Hero from './components/elearning/Banner';
import Companies from './components/elearning/Companies/Companies';
import Testimonials from './components/elearning/Testimonials';


export default function Home() {
  return (
    <main>
      <Banner />
      <Hero />
      <Mentor />
      <Tabs />
      {/* <Companies /> */}
      {/* <Testimonials /> */}
    </main>
  )
}
