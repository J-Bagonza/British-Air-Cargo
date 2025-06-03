import { Check, Plane } from 'lucide-react';

const TrackingStatus = ({ status }) => {
  const { departed, inTransit, arrived } = status;

  const steps = [
    {
      id: 'departed',
      name: 'Departed',
      description: 'Package has left origin',
      status: departed ? 'complete' : 'upcoming',
    },
    {
      id: 'inTransit',
      name: 'In Transit',
      description: 'Package is in flight',
      status: inTransit ? 'complete' : departed ? 'current' : 'upcoming',
    },
    {
      id: 'arrived',
      name: 'Arrived',
      description: 'Package has arrived at destination',
      status: arrived ? 'complete' : inTransit ? 'current' : 'upcoming',
    },
  ];

  return (
    <div className="py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative">
          {/* Step Icons & Connectors */}
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center w-1/3 relative">
                {/* Circle Icon */}
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center z-10 ${
                    step.status === 'complete'
                      ? 'bg-green-500'
                      : step.status === 'current'
                      ? 'bg-blue-500'
                      : 'bg-gray-300'
                  }`}
                >
                  <Check className="h-5 w-5 text-white" />
                </div>

                {/* Dotted Line Connector (after circle, except last) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 right-[-50%] w-full flex items-center z-0">
                    <div className="w-full border-t-2 border-dashed border-gray-300"></div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div
                        className={`h-5 w-5 rounded-full flex items-center justify-center ${
                          steps[index].status === 'complete' && steps[index + 1].status === 'complete'
                            ? 'bg-green-500'
                            : steps[index].status === 'complete'
                            ? 'bg-blue-500'
                            : 'bg-gray-400'
                        }`}
                      >
                        <Plane className="h-3 w-3 text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Labels Below Icons */}
          <div className="flex justify-between mt-4">
            {steps.map((step) => (
              <div key={`label-${step.id}`} className="w-1/3 flex flex-col items-center text-center">
                <span
                  className={`text-xs md:text-sm font-medium ${
                    step.status === 'complete'
                      ? 'text-green-600'
                      : step.status === 'current'
                      ? 'text-blue-600'
                      : 'text-gray-500'
                  }`}
                >
                  {step.name}
                </span>
                <span className="text-xxs md:text-xs text-gray-500 px-1 max-w-[100px]">
                  {step.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingStatus;
