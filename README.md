# l(ai)lani: AI Flashcards and Study Companion

Studying complex topics can be overwhelming, especially when faced with dense textbooks, lengthy PDFs, and scattered notes. We wanted to create a seamless, AI-powered tool that could instantly transform study materials into interactive flashcards and insightful research summaries. The goal was to save time, enhance learning efficiency, and make studying more engaging.

![lailani_thumbnail](imgs/lailani_thumbnail.jpg)

# Technologies We Used

We used React as a front end, and Flask for the backend. Our main logic for gathering information and communicating with the API's were done using Python. We used Perplexity AI and their sonar and sonar-deep-research models for our Research and Deep Research functionality, while incorporating Groq's quick AI inference for notes file ingest, as well as collecting topics for generating flashcards. 

# Core Features

- Smart File Upload
- Upload PDFs, DOCs, TXTs, and Markdown files
- AI scans the file and extracts important topics automatically

# Design

Below are the design principles that guided our Lailani visuals.

![lailani_thumbnail](imgs/lailani_Design_Principles.jpg)

# Flashcard Generation

- Groq AI instantly creates flashcards based on uploaded content
- Flashcards cover key points, definitions, and questions

![lailani_thumbnail](imgs/lailani_Flashcard.jpg)

# AI-Powered Research

- Research Mode: Uses Perplexity AI for AI-driven explanations
- Deep Research Mode: Provides in-depth analysis with Sonar Deep Research

![lailani_thumbnail](imgs/lailani_Research.jpg)

# Contributors
- Patrick Gatpandan - Front-end developer
- Xiaojun Gong - Front-end developer
- Nikola Paunovic - Back-end developer
- Rowwel Ponesto - Back-end developer
