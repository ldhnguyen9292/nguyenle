import { Button } from '@/components/Elements';
import { globalEnv } from '@/config/globalEnv';

const DownloadCV: React.FC = () => {
  const downloadCV = () => {
    window.open(globalEnv.CV_URL, '_blank');
  };

  return (
    <>
      <Button onClick={downloadCV} className="bg-tertiary-0 rounded-full !text-primary border-none">
        Download CV
      </Button>
    </>
  );
};

export default DownloadCV;
