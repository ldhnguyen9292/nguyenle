import { HomeCover } from '@/components/Layout';
import AboutMe from './AboutMe';
import Contact from './Contact';
import EducationBackground from './EducationBackground';
import Experience from './Experience';
import Skills from './Skills';

const Home: React.FC = () => {
  return (
    <section>
      <AboutMe />
      <HomeCover childrenTop={<Experience />} childrenBottom={<Skills />} />
      <HomeCover childrenTop={<EducationBackground />} childrenBottom={<Contact />} />
    </section>
  );
};

export default Home;
