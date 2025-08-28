import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import Result from "./components/Result";

const App: React.FC = () => {
  const [result, setResult] = useState<any | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Smart Resume Matcher</h1>
      <ResumeForm setResult={setResult} />
      {result && <Result result={result} />}
    </div>
  );
};

export default App;
