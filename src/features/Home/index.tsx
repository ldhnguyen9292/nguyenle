import { HomeCover } from '@/components/Layout';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Skills from './Skills';

const Home: React.FC = () => {
  return (
    <section>
      <AboutMe />
      <HomeCover childrenTop={<Experience />} childrenBottom={<Skills />} />
    </section>
  );
};

export default Home;
