# 🤖 AI Customer Support Agent

Built a multi-agent AI customer support platform using Azure AI Foundry. Implemented an AI-driven router that dynamically delegated user requests to specialized Shopping, Order, Refund, and Support agents, each with dedicated prompts and tool access.


An AI-powered customer support platform built using React, Node.js, Azure OpenAI, Cosmos DB, and Azure Cloud services.

The application simulates a real-world e-commerce customer support assistant capable of answering customer queries, searching products, tracking orders, initiating returns, maintaining conversation memory, and providing analytics through an admin dashboard.

---

## 🚀 Live Demo

**Frontend**
[https://<your-static-web-app>.azurestaticapps.net
](https://orange-forest-0012be30f.7.azurestaticapps.net/)

**Backend API**
https://commerceai-api.mangosea-e36baa1f.eastus2.azurecontainerapps.io

**Swagger API Docs**
https://commerceai-api.mangosea-e36baa1f.eastus2.azurecontainerapps.io/api-docs

---

# Features

### AI Customer Support

- Natural language conversations
- Multi-turn conversation memory
- Azure OpenAI integration
- Automatic tool/function calling
- Product recommendations
- Order lookup
- Return initiation
- Refund status
- Human escalation support

---

### Conversation Memory

Stores previous conversations inside Azure Cosmos DB to provide contextual responses.

---

### Analytics Dashboard

Tracks

- Total conversations
- Tool usage
- Agent usage
- Customer interactions

using Azure Cosmos DB.

---

### Admin APIs

REST APIs for

- Analytics
- Conversation data
- Dashboard metrics

---

### API Documentation

Interactive Swagger/OpenAPI documentation for all backend APIs.

---

# Architecture

```
                 React (Vite)
                       │
                       │
      Azure Static Web Apps
                       │
                       ▼
         Express + Node.js API
                       │
        Azure Container Apps
                       │
      ┌────────────────┼────────────────┐
      │                │                │
Azure OpenAI     Cosmos DB      Application Insights
```

---

# Tech Stack

## Frontend

- React 19
- TypeScript
- Vite
- Axios
- React Router
- Tailwind CSS

## Backend

- Node.js
- Express
- TypeScript

## AI

- Azure OpenAI
- Function Calling
- AI Agents

## Database

- Azure Cosmos DB

## Cloud

- Azure Container Apps
- Azure Static Web Apps
- Azure AI Foundry
- Application Insights

## DevOps

- Docker
- GitHub Actions
- CI/CD

---

# Project Structure

```
AI-Customer-Support-Agent

├── frontend
│   ├── src
│   ├── public
│   └── vite.config.ts
│
├── backend
│   ├── src
│   │   ├── ai
│   │   ├── controllers
│   │   ├── routes
│   │   ├── services
│   │   ├── db
│   │   └── config
│   └── Dockerfile
│
└── .github
    └── workflows
```

---

# Local Setup

Clone repository

```bash
git clone https://github.com/Sara-Shaikh-21/AI-Customer-Support-Agent.git

cd AI-Customer-Support-Agent
```

Backend

```bash
cd backend

npm install

npm run dev
```

Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# Environment Variables

Backend

```
OPENAI_API_KEY=
AZURE_OPENAI_ENDPOINT=
AZURE_OPENAI_DEPLOYMENT=

COSMOS_ENDPOINT=
COSMOS_KEY=
COSMOS_DATABASE=

API_URL=http://localhost:5001
```

Frontend

```
VITE_API_URL=http://localhost:5001
```

---

# Deployment

Backend

- Docker
- Azure Container Apps
- GitHub Actions CI/CD

Frontend

- Azure Static Web Apps
- GitHub Actions CI/CD

---

# Future Improvements

- JWT Authentication
- Role Based Access
- Streaming AI Responses
- Redis Conversation Cache
- Unit & Integration Tests
- Kubernetes Deployment
- Terraform Infrastructure
- Custom Domain
- Monitoring Dashboard

---

# Author

Sara Shaikh

GitHub

https://github.com/Sara-Shaikh-21

LinkedIn

](https://www.linkedin.com/in/sara-shaikh/)


