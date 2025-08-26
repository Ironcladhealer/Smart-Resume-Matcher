from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import spacy

# Load models
model = SentenceTransformer('all-MiniLM-L6-v2')
nlp = spacy.load("en_core_web_sm")

# Predefined skills list (can expand for production)
SKILLS_LIST = [
    "python", "java", "c++", "nlp", "tensorflow", "pytorch",
    "machine learning", "data analysis", "ml", "ai", "sql"
]

def compute_embeddings(text):
    """Convert text to embedding vector"""
    return model.encode(text)

def compute_relevance(job_desc, resume_text):
    """Compute cosine similarity between job and resume"""
    job_emb = compute_embeddings(job_desc)
    resume_emb = compute_embeddings(resume_text)
    score = cosine_similarity([job_emb], [resume_emb])[0][0]
    return round(float(score), 2)  # 0.0 - 1.0

def extract_skills(text):
    """Extract predefined skills from text"""
    doc = nlp(text.lower())
    found_skills = set()
    for token in doc:
        if token.text in SKILLS_LIST:
            found_skills.add(token.text)
    return found_skills

def highlight_skills(text, skills):
    """Highlight skills in HTML format"""
    for skill in skills:
        text = text.replace(skill, f"<mark>{skill}</mark>")
    return text

def match_resume(job_desc, resume_text):
    """Full pipeline: score, matched skills, highlighted resume"""
    score = compute_relevance(job_desc, resume_text)
    job_skills = extract_skills(job_desc)
    resume_skills = extract_skills(resume_text)
    matched_skills = job_skills.intersection(resume_skills)
    highlighted_resume = highlight_skills(resume_text, matched_skills)
    
    return {
        "score": score,
        "matched_skills": list(matched_skills),
        "highlighted_resume": highlighted_resume
    }
