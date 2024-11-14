import { Text } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';
import { EducationBackgroundData } from '@/constants/data';

const EducationBackground: React.FC = () => {
  return (
    <ContentLayout>
      <Text variant="h4" className="font-bold !text-fourth mb-8">
        Education Background
      </Text>
      <div className="max-w-xl mx-auto space-y-6">
        {EducationBackgroundData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-left">
            <Text variant="h5" className="font-semibold !text-gray-800 mb-2">
              {item.school}
            </Text>
            <Text variant="h6" className="!text-gray-600">
              {item.degree}
            </Text>
            <Text variant="body1" className="font-bold !text-fourth">
              {item.period.join(' - ')}
            </Text>
            {item.relevantCoursework && (
              <>
                <Text variant="h6" className="font-semibold text-gray-700 mb-2">
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
      <Text variant="h4" className="font-bold !text-fourth my-8">
        Awards & Honors
      </Text>
      <div className="max-w-xl mx-auto space-y-4">
        <div className="award-item bg-white p-4 rounded-lg shadow-md text-left">
          <Text variant="h5" className="font-semibold !text-gray-800 mb-2">
            City-Level IT Excellence
          </Text>
          <Text variant="h6" className="!text-gray-600">
            Awarded Top 1-2 in the City IT Student Competition (High School)
          </Text>
        </div>
      </div>
    </ContentLayout>
  );
};

export default EducationBackground;
