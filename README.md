# awd-oop

Object-oriented programming practice project with Express and TypeScript.

## Features

- Movie catalog API with CRUD operations
- Type-safe repository pattern implementation
- Express server with middleware stack

## Setup

```bash
npm install
npm run dev
```

## API Endpoints

- `GET /movies` - Get all movies
- `GET /novies/:id` - Get movie by ID
- `POST /movies` - Create new movie

### POST /movies Example

```bash
curl -X POST http://localhost:3030/movies \
  -H "Content-Type: application/json" \
  -d '{"title":"Movie Title","year":2024,"director":"Director Name","runtimeMinutes":120}'
```
