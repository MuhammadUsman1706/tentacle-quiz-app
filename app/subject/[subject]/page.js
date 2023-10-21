"use client";
import React from "react";
import Subject from "../../components/Subjects/Subject";

const SubjectPage = ({ params: { subject } }) => {
  return (
    <div>
      <Subject subject={subject} />
    </div>
  );
};

export default SubjectPage;
