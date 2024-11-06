import { HomeCover } from '@/components/Layout';
import AboutMe from './AboutMe';
import Contact from './Contact';
import EducationBackground from './EducationBackground';
import Experience from './Experience';
import Skills from './Skills';

enum IDS {
  left01 = 'left01',
  right01 = 'right01',
  left02 = 'left02',
  right02 = 'right02',
}

const Home: React.FC = () => {
  return (
    <section>
      <AboutMe />
      <HomeCover
        leftId={IDS.left01}
        rightId={IDS.right01}
        topTitle="Experience"
        topIndex="02"
        childrenTop={<Experience rightId={IDS.right01} />}
        childrenBottom={<Skills />}
      />
      <HomeCover
        leftId={IDS.left02}
        rightId={IDS.right02}
        topTitle="Education Background"
        topIndex="04"
        childrenTop={<EducationBackground rightId={IDS.right02} />}
        childrenBottom={<Contact />}
      />
    </section>
  );
};

export default Home;
