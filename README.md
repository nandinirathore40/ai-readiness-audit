# AI Readiness Audit

## Overview
A simple web tool that estimates how well a website is structured for AI systems.

## Features
- Enter a website URL
- Get an AI Readiness Score (out of 100)
- View key issues affecting machine readability

## How it works
The score is generated using simple heuristics based on the input URL (e.g., presence of keywords like "blog", "shop") combined with randomness to simulate variability.

## Example Issues
- Missing structured data (Schema)
- No FAQ section
- Weak heading hierarchy
- Low semantic clarity

## Limitations
- Does not fetch or analyze real website content
- No HTML parsing or schema detection
- This is a mock audit for demonstration purposes

## Future Improvements
- Fetch and parse website HTML
- Detect structured data (JSON-LD)
- Analyze heading structure (H1, H2)
- Use NLP for content clarity

## Live Demo
<your vercel link here>
