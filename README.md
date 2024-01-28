# AI Blog App

This AI Blog App is an innovative platform that leverages the power of AI to revolutionize blogging, providing a seamless experience for editing, and managing AI-generated blog posts.

## Tech Stack

- Next.js  
- Typescript
- Prisma with MySQL
- TipTap Integration
- OpenAI API

## Key Features

- AI-Powered Content Generation: Utilize ChatGPT to automatically generate engaging blog content.
- Prisma MySQL Integration: Backend support using Prisma with a MySQL database to store and manage blog posts.
- Rich Text Editing: Edit and style your blog posts with ease using TipTap's rich text editor.
- Responsive Design: Provides a responsive and fast user experience

## Demo
Experience the AI Blog App: [blog-ai-gamma.vercel.app](https://blog-ai-gamma.vercel.app)

Note: Blog posts will only be rendered when the Prisma MySQL database is connected.

## Getting Started

### Prerequisites

- Node.js
- Prisma API Key from PlanetScale (If you wish to connect to your own database)
- A ChatGPT OpenAI API key (if using the AI content generation feature)

1. Clone the Repository

```bash
git clone https://github.com/kylie-kiaying/blog-ai
cd blog-ai
```

2. Install Dependencies

```bash
npm install
```

3. Setup Environment Variables

Create a .env file in the root directory and add the following:  
Add &&sslcert=/etc/ssl.cert.pem at the end of the DATABASE_URL  

```bash
DATABASE_URL="your_mysql_database_url"
NEXT_PUBLIC_URL=http://localhost:3000
CHATGPT_API_KEY="your_chatgpt_api_key"
```

4. Initialize the Database  

Synchronize your database schema:
```bash
npx prisma db push
```

If you are using Prisma Migrate to handle database migrations:
```bash
npx prisma migrate dev
```

5. run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.