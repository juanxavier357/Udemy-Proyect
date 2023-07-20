"use client";
import React from "react";
import { useRouter } from "next/router";

const CourseDetailPage = () => {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
          <h1>Course Detail {query.courseId}</h1>
    </div>
  );
};

export default CourseDetailPage;
