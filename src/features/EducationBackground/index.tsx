import { Text } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';
import { EducationBackgroundData } from '@/constants/data';

const EducationBackground: React.FC = () => {
  return (
    <ContentLayout className="!my-0 pt-10 pb-24 before:bg-education-bg before:bg-contain before:bg-no-repeat before:absolute before:w-full before:h-full before:bg-right-bottom before:bottom-0 before:grayscale">
      <Text type="h6" className="font-bold !text-fourth mb-2 lg:mb-4 z-10">
        Education Background
      </Text>
      <div className="max-w-xl mx-auto space-y-1 lg:space-y-4 z-10">
        {EducationBackgroundData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-left">
            <Text type="body1" className="font-semibold !text-gray-800 mb-2">
              {item.school}
            </Text>
            <Text type="body1" className="!text-gray-600">
              {item.degree}
            </Text>
            <Text type="body1" className="font-bold !text-fourth">
              {item.period.join(' - ')}
            </Text>
            {item.relevantCoursework && (
              <>
                <Text type="body1" className="font-semibold text-gray-700 mb-2">
                  Relevant Coursework
                </Text>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {item.relevantCoursework.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Awards & Honors Section */}
      <Text type="h6" className="font-bold !text-fourth my-2 lg:my-4 z-10">
        Awards & Honors
      </Text>
      <div className="max-w-xl mx-auto space-y-1 lg:space-y-4 z-10">
        <div className="award-item bg-white p-4 rounded-lg shadow-md text-left">
          <Text type="body1" className="font-semibold !text-gray-800 mb-2">
            City-Level IT Excellence
          </Text>
          <Text type="body1" className="!text-gray-600">
            Awarded Top 1-2 in the City IT Student Competition (High School)
          </Text>
        </div>
      </div>
    </ContentLayout>
  );
};

export default EducationBackground;
