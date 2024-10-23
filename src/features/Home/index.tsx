import { HomeCover } from '@/components/Layout';
import AboutMe from './AboutMe';
import Experience from './Experience';

const Home: React.FC = () => {
  return (
    <section>
      <AboutMe />
      <HomeCover
        childrenTopLeft={<Experience />}
        childrenTopRight={<Experience />}
        childrenBottomLeft={<Experience />}
        childrenBottomRight={<Experience />}
      />
    </section>
  );
};

export default Home;
