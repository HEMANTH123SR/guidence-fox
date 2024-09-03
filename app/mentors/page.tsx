import Banner from './components/Banner/Banner';
import Tabs from './components/Courses/Courses';
import Mentor from './components/Mentor/Mentor';

export default function Home() {
  return (
    <main>
      <Banner />
      <Mentor />
      <Tabs />
    </main>
  )
}
