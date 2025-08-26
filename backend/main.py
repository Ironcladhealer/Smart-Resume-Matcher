from fastapi import FastAPI
from pydantic import BaseModel
from matcher import match_resume

app = FastAPI(title="Smart Resume Matcher")

# Request schema
class ResumeRequest(BaseModel):
    job_description: str
    resume_text: str

@app.post("/match_resume")
def match_resume_endpoint(request: ResumeRequest):
    result = match_resume(request.job_description, request.resume_text)
    return result

# For testing locally
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
