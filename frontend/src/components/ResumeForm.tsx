import React, { useState } from "react";
import axios from "axios";

interface Props {
  setResult: (result: any) => void;
}

const ResumeForm: React.FC<Props> = ({ setResult }) => {
  const [jobDescription, setJobDescription] = useState("");
  const [resumeText, setResumeText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/match_resume", {
        job_description: jobDescription,
        resume_text: resumeText,
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching result:", error);
    }
  };

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md"
    >
      <div className="mb-4">
        <label className="block font-semibold mb-2">Job Description</label>
        <textarea
          className="w-full border p-2 rounded"
          rows={4}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Resume Text</label>
        <textarea
          className="w-full border p-2 rounded"
          rows={6}
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Match Resume
      </button>
    </form>
    </>
  );
};

export default ResumeForm;
