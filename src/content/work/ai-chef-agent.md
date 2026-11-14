---
title: AI Chef Agent
summary: Tell it what's left in your fridge and it suggests a dish, with step-by-step instructions. Deployed and used by real people.
kind: AI agent
status: Live
stack: [React, FastAPI, LangChain, LangGraph, OpenAI, Tavily, Pydantic, Tailwind CSS]
repo: https://github.com/theagharshit/ai-chef-agent
order: 1
home: true
---

## What it does

You type the ingredients you have, and the agent suggests a dish you can actually make with them. Every answer comes back in the same shape: the recipe name, the vibe of the dish, which of your ingredients it uses, and step-by-step instructions, in a chat-style interface.

## How it works

- The React frontend sends your ingredients to a FastAPI backend.
- The backend runs a LangChain agent with a personal-chef system prompt and a web-search tool (Tavily) for finding real recipes.
- A Pydantic schema forces the model's answer into a fixed structure, so the frontend never has to guess at free text.
- The UI and the agent logic are kept separate, so either side can change without breaking the other.

## Why it matters

It is deployed and used by real people. The work did not stop at good output in a notebook: it carried on to a product someone opens when they are hungry.
