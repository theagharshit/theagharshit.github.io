---
title: LinkedIn Post Generator Agent
summary: Turns a topic into a finished LinkedIn post and image, then waits for a person to approve it before anything goes out.
kind: AI agent
status: Built
stack: [n8n, LLMs, Webhooks, Google Sheets, Google Drive]
repo: https://github.com/theagharshit/linkedin-content-agent
order: 3
home: true
---

## What it does

It automates the slow parts of posting on LinkedIn: coming up with the idea, writing the post and making the visual. A person keeps editorial control, because nothing is published without their approval.

## How it works

1. A webhook starts a run with a topic and a target audience.
2. An LLM writes the post and a prompt for its image.
3. An AI image is generated and stored.
4. The draft is emailed for approval or feedback.
5. Feedback triggers a rewrite until it is right.
6. Every post's status and assets are tracked in Google Sheets and Drive.

## How it is built

The whole flow is an n8n workflow driven by webhooks, with Google Sheets and Drive as the record of what has been drafted, approved and posted. The human-in-the-loop step is the point: the agent does the work, a person keeps the voice.
