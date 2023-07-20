import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Course {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
}

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const getCourses = async () => {
      const url = "https://course-api.com/react-store-products";

      const response = await fetch(url);
      const data: Course[] = await response.json();
      console.log(data);
      setCourses(data);
    };
    getCourses();
  }, []);

  return (
    <div>
      <h1>Courses Page</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {/* /courses/:courseId */}
            <Link href={`/courses/${course.id}`}>
              <h2>{course.name}</h2>
              <Image
                src={course.image}
                alt={course.name}
                width={200}
                height={200}
                layout="fixed"
              />
              <p>{course.description}</p>
              <p>{course.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesPage;
