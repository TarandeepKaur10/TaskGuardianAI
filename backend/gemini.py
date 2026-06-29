import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load .env file
load_dotenv()

# Get API Key
API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    raise ValueError("GEMINI_API_KEY not found in .env file")

# Configure Gemini
genai.configure(api_key=API_KEY)

# Load model
model = genai.GenerativeModel("gemini-2.5-flash")


def generate_plan(goal):
    prompt = f"""
You are TaskGuardian AI, an intelligent productivity assistant.

Create a concise daily schedule.

Goal:
{goal}

Rules:

- Maximum 8 sections.
- Use emojis.
- Use headings.
- Keep total response below 220 words.
- Give realistic time blocks.
- Include one short break.
- End with one motivational line.

Format exactly like this:

# 🎯 Goal

Goal Name

## 🕘 Schedule

09:00 - 10:00
Task

10:15 - 11:15
Task

☕ Break (15 mins)

11:30 - 1:00
Task

2:00 - 3:30
Task

## 💡 Tip

One productivity tip.

## 🚀 Motivation

One motivational sentence.
"""

    response = model.generate_content(prompt)

    return response.text