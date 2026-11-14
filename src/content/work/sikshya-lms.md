---
title: Sikshya LMS
summary: An AI-powered learning management system for schools in Nepal, built with a team.
kind: Team project
status: In build
stack: [React, TypeScript, Express.js, Prisma, PostgreSQL, Google Gemini, Docker]
repo: https://github.com/theagharshit/LMS
order: 5
home: false
---

## What it is

Sikshya LMS is a learning management system for schools. It covers day-to-day academic work: student tracking, teacher grading, insights for parents and AI assistants built on Google Gemini.

## How it is built

- A monorepo with an Express REST API, a React 19 frontend and shared TypeScript types.
- PostgreSQL through Prisma, with WebSockets for real-time updates.
- Role-based access for admins, principals, teachers, students and parents, with JWT sign-in.
- Multi-step work, like enrolling a student and linking a parent account, runs in database transactions so records never end up half-made.
- More than 1,390 automated unit, integration and access-control tests, and Docker builds for each environment.
