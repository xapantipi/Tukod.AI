# Sanghaya - AI-Powered App Builder

Sanghaya is a modern web application that enables users to create and deploy applications using AI. Built with Next.js 15, it provides an intuitive interface for describing your app requirements and automatically generates the code and infrastructure needed to bring your ideas to life.

## 🚀 Features

- **AI-Powered App Generation**: Describe your app requirements in natural language and let AI build it for you
- **Real-time Preview**: See your app being built in real-time with live preview capabilities
- **Multiple Framework Support**: Choose from various frameworks including Next.js, React, and more
- **Git Integration**: Automatic Git repository creation and management
- **Live Development Server**: Instant development environment with hot reloading
- **User Authentication**: Secure user management with Stack authentication
- **Database Integration**: PostgreSQL with Drizzle ORM for data persistence
- **Memory System**: AI agents with persistent memory for context-aware conversations
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### Backend & AI
- **Anthropic Claude** - AI model for code generation
- **AI SDK** - Vercel's AI SDK for streaming responses
- **Mastra** - AI agent framework with memory
- **Freestyle Sandboxes** - Development environment management

### Database & Storage
- **PostgreSQL** - Primary database
- **Drizzle ORM** - Type-safe database queries
- **Redis** - Caching and session management
- **Neon Database** - Serverless PostgreSQL

### Development & Deployment
- **Turbopack** - Fast bundler for development
- **ESLint** - Code linting
- **TypeScript** - Type checking

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Redis instance
- Freestyle API key
- Anthropic API key

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/sanghaya"

# Redis
REDIS_URL="redis://localhost:6379"

# AI Services
ANTHROPIC_API_KEY="your-anthropic-api-key"
FREESTYLE_API_KEY="your-freestyle-api-key"

# Authentication
STACK_API_KEY="your-stack-api-key"
STACK_APP_ID="your-stack-app-id"
```

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sanghaya
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   # Run database migrations
   npm run db:generate
   npm run db:migrate
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### Creating a New App

1. **Describe Your App**: On the homepage, describe what you want to build in natural language
2. **Choose Framework**: Select your preferred framework (Next.js, React, etc.)
3. **Start Building**: Click "Start Creating" to begin the AI-powered development process
4. **Watch It Build**: The AI will create your app step by step with real-time updates
5. **Preview & Deploy**: Test your app and deploy when ready

### App Management

- **View All Apps**: Access your created apps from the dashboard
- **Edit Apps**: Make changes through the chat interface
- **Deploy Apps**: Deploy your apps with one click
- **Share Apps**: Share your apps with others

## 🏗️ Project Structure

```
sanghaya/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── api/            # API routes
│   │   └── app/            # App pages (new, [id])
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   └── ...            # Feature-specific components
│   ├── actions/           # Server actions
│   ├── auth/              # Authentication logic
│   ├── db/                # Database schema and utilities
│   ├── lib/               # Utility functions and configurations
│   └── mastra/            # AI agent configurations
├── public/                # Static assets
└── scripts/               # Build and deployment scripts
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Database Management

- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Drizzle Studio

## 🤖 AI Features

### Builder Agent
The system uses a sophisticated AI agent with:
- **Persistent Memory**: Remembers conversation context and app state
- **Tool Integration**: Can execute various development tasks
- **Code Generation**: Creates and modifies code based on user requirements
- **Error Handling**: Automatically fixes issues and provides feedback

### Memory System
- **PostgreSQL Vector Storage**: Semantic search capabilities
- **Thread Management**: Organized conversation threads
- **Context Awareness**: Maintains app-specific context

## 🚀 Deployment

### Production Setup

1. **Environment Configuration**: Set up all required environment variables
2. **Database Migration**: Run migrations on production database
3. **Build Application**: `npm run build`
4. **Start Server**: `npm run start`

### Deployment Options

- **Vercel**: Recommended for easy deployment
- **Railway**: Good for full-stack applications
- **Docker**: Containerized deployment
- **Self-hosted**: Traditional server deployment

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- AI powered by [Anthropic](https://www.anthropic.com/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

## 📞 Support

For support, please open an issue on GitHub or contact the development team.

---

**Sanghaya** - Where ideas become applications, powered by AI. 