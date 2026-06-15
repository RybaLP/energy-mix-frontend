# Energy Mix Frontend

Frontend application for the UK Energy Mix Dashboard, built with Next.js and TypeScript.


## Features

- Displays pie charts with energy generation mix for today, tomorrow and the day after tomorrow
- Shows clean energy percentage for each day
- Allows user to select charging duration (1-6 hours) and find the optimal EV charging window

## Getting Started

### Prerequisites

- Node.js 18+
- Running backend service (see energy-mix-backend repository)

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

### Running the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running Tests

```bash
npm run test
```

## Project Structure

```
app/                    # Next.js app router
components/             # React components
  energymixsection/     # Energy mix pie charts
  chargingWindow/       # Optimal charging window section
hooks/                  # React Query hooks
store/                  # Zustand store
lib/                    # Axios API client
types/                  # TypeScript interfaces
__tests__/              # Unit tests
```