import React from "react";

interface Props {
  result: {
    score: number;
    matched_skills: string[];
    highlighted_resume: string;
  };
}

const Result: React.FC<Props> = ({ result }) => {
  return (
    <div className="max-w-2xl mx-auto mt-6 bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Results</h2>

      <p className="mb-2">
        <strong>Relevance Score:</strong> {result.score}
      </p>

      <p className="mb-2">
        <strong>Matched Skills:</strong>{" "}
        {result.matched_skills.length > 0
          ? result.matched_skills.join(", ")
          : "None"}
      </p>

      <div className="mt-4">
        <strong>Highlighted Resume:</strong>
        <div
          className="p-3 mt-2 border rounded bg-gray-50"
          dangerouslySetInnerHTML={{ __html: result.highlighted_resume }}
        />
      </div>
    </div>
  );
};

export default Result;
