import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/context/themeContext";
import { Calendar, GraduationCap } from "lucide-react";
import { educationData } from "./data";

const EducationPage = () => {
  // const { theme } = useTheme();

  return (
    <section id="education" className="relative min-h-screen flex items-center">
      <div className="container mx-auto pt-28 md:px-6 px-2">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Educational History
          </h2>
          <p className="text-xl text-gray-600">My academic journey</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute md:left-8 left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute md:left-6 left-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>

                  {/* Content */}
                  <div className="md:ml-20 ml-4 w-full">
                    <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <CardTitle className="text-sm md:text-xl font-bold text-gray-900 flex items-center gap-2">
                            <GraduationCap className="w-6 h-6 text-blue-600" />
                            {edu.degree}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold">
                            <Calendar className="w-4 h-4" />
                            {edu.year}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold text-gray-800">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-gray-600">
                            {edu.location}
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <p>{edu.description}</p>
                        <div className="mt-4">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            {edu.status}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
