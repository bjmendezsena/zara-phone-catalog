# 📱 Zara Phone Catalog

A modern, responsive phone catalog application built with Next.js 15, React 19, and TypeScript. This project follows clean architecture principles and includes comprehensive testing, state management, and performance optimizations.

## 🏗️ Architecture Overview

### Clean Architecture Layers

The application follows a clean architecture approach with clear separation of concerns:

```
src/
├── app/                   # Next.js App Router pages
├── components/            # Shared UI components
├── features/              # Feature-based modules
│   ├── product/           # Product domain logic
│   │   ├── api/           # API layer & use cases
│   │   ├── components/    # Product-specific components
│   │   ├── screens/       # Page-level components
│   │   └── types/         # TypeScript definitions
│   └── cart/              # Shopping cart domain
├── hooks/                 # Custom React hooks
├── lib/                   # External library configurations
├── provider/              # Context providers & global state
├── tests/                 # Testing utilities & mocks
├── types/                 # Global TypeScript types
└── utils/                 # Pure utility functions
```

### Key Architectural Decisions

- **Feature-Based Structure**: Organized by business domains (product, cart)
- **Separation of Concerns**: Clear separation between UI, business logic, and data access
- **Custom Hooks**: Encapsulation of complex state logic and side effects
- **Context**: Hybrid state management for global and local state
- **API Layer**: Centralized API management with React Query for caching

## 🚀 Technologies & Stack

### Core Technologies

- **Next.js 15** - React framework with App Router
- **React 19** - UI library with latest features
- **TypeScript 5** - Type safety and developer experience
- **TailwindCSS 4** - Utility-first CSS framework

### State Management

- **Tanstack Query** - Server state management & caching
- **React Context** - Component-level state sharing

### Testing & Quality

- **Jest** - Testing framework
- **Testing Library** - Component testing utilities
- **MSW** (Mock Service Worker) - API mocking for tests
- **ESLint** - Code linting and formatting

### Build & Development

- **Webpack** - Module bundler with custom configuration
- **PostCSS** - CSS processing and optimization
- **Cross-fetch** - Fetch polyfill for Node.js environments

## 📁 Project Structure

```
zara-phone-catalog/
├── public/                 # Static assets
│   ├── Logo.svg
│   └── *.svg              # Icons and images
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page (product grid)
│   │   ├── cart/          # Cart page
│   │   └── product/       # Product details pages
│   │       └── [productId]/
│   ├── components/        # Shared components
│   │   ├── layout/        # Header, navigation
│   │   └── __tests__/     # Component tests
│   ├── features/          # Feature modules
│   │   ├── product/       # Product management
│   │   │   ├── api/       # Product API & business logic
│   │   │   ├── components/# Product UI components
│   │   │   ├── screens/   # Product page screens
│   │   │   └── types/     # Product type definitions
│   │   └── cart/          # Shopping cart
│   │       ├── components/# Cart UI components
│   │       ├── context/   # Cart state management
│   │       └── helpers/   # Cart utility functions
│   ├── hooks/             # Custom React hooks
│   │   ├── useCart.ts     # Cart operations
│   │   └── useDebounce.ts # Input debouncing
│   ├── lib/               # Third-party configurations
│   │   ├── axios.ts       # HTTP client setup
│   │   └── react-query.ts # Query client config
│   ├── provider/          # Global providers
│   │   └── RootProvider.tsx # App-wide context
│   ├── tests/             # Testing infrastructure
│   │   ├── mock/          # API mocks & test data
│   │   ├── utils/         # Test utilities
│   │   └── setupTests.ts  # Jest configuration
│   ├── types/             # Global TypeScript types
│   └── utils/             # Pure utility functions
├── .env.example           # Environment variables template
├── jest.config.ts         # Jest testing configuration
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # TailwindCSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd zara-phone-catalog
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Configuration**

   Copy the environment template:

   ```bash
   cp .env.example .env
   ```

   The `.env.example` contains:

   ```env
   NEXT_PUBLIC_API_URL=https://prueba-tecnica-api-tienda-moviles.onrender.com
   NEXT_PUBLIC_API_KEY=87909682e6cd74208f41a6ef39fe4191
   ```

   These environment variables configure:

   - **NEXT_PUBLIC_API_URL**: Base URL for the phone catalog API
   - **NEXT_PUBLIC_API_KEY**: Authentication key for API requests

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### Development Scripts

- **`npm run dev`** - Start development server with hot reload

  - Enables development mode optimizations
  - Unminified assets for debugging
  - Fast refresh for component updates

- **`npm run dev:debug`** - Development server with Node.js inspector
  - Enables debugging with breakpoints
  - Useful for server-side debugging

### Build Scripts

- **`npm run build`** - Create production build

  - Optimized bundle with minification
  - Static generation for improved performance
  - Asset optimization and compression

- **`npm run build:analyze`** - Production build with bundle analysis
  - Generates bundle size reports
  - Identifies optimization opportunities
  - Useful for performance monitoring

### Server Scripts

- **`npm run start`** - Start production server

  - Serves optimized production build
  - Used for production deployment

- **`npm run start:dev`** - Start server in development mode
  - Development server without file watching
  - Useful for testing production-like behavior

### Quality Scripts

- **`npm run lint`** - Run ESLint code analysis

  - Identifies code quality issues
  - Enforces coding standards
  - Automatically fixable issues with `--fix`

- **`npm run test`** - Run test suite in watch mode
  - Executes all test files
  - Reruns tests on file changes
  - Includes unit and integration tests

## 🧪 Testing Strategy

### Test Configuration

- **Jest**: Testing framework with custom configuration
- **Testing Library**: Component testing with user-centric approach
- **MSW**: API mocking for realistic test scenarios
- **Snapshot Testing**: UI regression testing

### Test Structure

```
__tests__/                 # Test files
├── components/            # Component tests
├── features/              # Feature-specific tests
│   ├── product/
│   └── cart/
├── mock/                  # API mocks and test data
│   ├── handlers/          # MSW request handlers
│   ├── data/              # Mock data fixtures
│   └── __mocks__/         # Module mocks
└── utils/                 # Testing utilities
```

### Running Tests

```bash
# Run all tests
npm run test

# Run tests without watch mode
npm run test -- --watchAll=false

# Run specific test file
npm run test -- ProductCard.spec.tsx

# Run with coverage
npm run test -- --coverage
```

## 🚀 CI/CD Pipeline

### GitHub Actions Workflow

The project includes an automated testing pipeline that runs on every push and pull request to the `main` branch.

**Features:**

- ✅ **Automated Testing**: Runs full test suite on every commit
- ✅ **Coverage Reports**: Generates and uploads coverage artifacts
- ✅ **pnpm Support**: Optimized dependency installation with caching
- ✅ **Multi-format Reports**: lcov, clover, and text coverage formats

**Workflow Configuration** (`.github/workflows/test.yml`):

```yaml
# Triggers on push/PR to main branch
# Uses Node.js 20 with pnpm
# Runs tests with coverage reporting
# Uploads coverage reports as artifacts
```

**Accessing Results:**

1. **Test Results**: Visible in the Actions tab of your GitHub repository
2. **Coverage Reports**: Download artifacts from completed workflow runs
3. **Status Badges**: Green checkmarks appear on successful builds

## 🐳 Docker Support

### Using Docker Compose (Recommended)

The project includes Docker Compose configuration for easy development and deployment.

**Quick Start:**

```bash
# Build and start the application
docker-compose up --build

# Run in background
docker-compose up -d

# Stop the application
docker-compose down
```

**What it includes:**

- **Multi-stage build**: Optimized for production
- **pnpm support**: Automatic package manager detection
- **Port mapping**: Exposes application on `localhost:3000`
- **Production ready**: Includes security and performance optimizations

### Docker Configuration

**Dockerfile features:**

- **Multi-stage build**: Separate stages for dependencies, building, and runtime
- **Alpine Linux**: Lightweight base image
- **Security**: Non-root user execution
- **Package Manager Agnostic**: Supports npm, yarn, and pnpm
- **Production optimized**: Standalone output for minimal runtime

**Build stages:**

1. **Dependencies**: Install packages based on available lockfile
2. **Builder**: Build the Next.js application
3. **Runner**: Production runtime with minimal footprint

### Manual Docker Commands

```bash
# Build the image
docker build -t zara-phone-catalog .

# Run the container
docker run -p 3000:3000 zara-phone-catalog

# Run with environment variables
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_API_URL=your-api-url \
  -e NEXT_PUBLIC_API_KEY=your-api-key \
  zara-phone-catalog
```

### Environment Variables in Docker

Create a `.env` file or pass environment variables:

```bash
# Using .env file
docker-compose --env-file .env up

# Using inline variables
NEXT_PUBLIC_API_URL=your-url docker-compose up
```

## 🎨 Development Features

### State Management

- **Product Catalog**: Server state managed by React Query
- **Shopping Cart**: Client state managed with localStorage persistence
- **UI State**: Local component state and React Context

### Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Bundle Splitting**: Automatic code splitting by route
- **Caching**: Aggressive caching with React Query
- **Lazy Loading**: Components and routes loaded on demand

### User Experience

- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Loading States**: Skeleton loading and spinner components
- **Error Handling**: Graceful error boundaries and fallbacks
- **Accessibility**: ARIA labels and keyboard navigation

### Developer Experience

- **TypeScript**: Full type safety across the application
- **Hot Reload**: Fast development with instant updates
- **ESLint**: Code quality enforcement
- **Auto-formatting**: Consistent code style

## 🚢 Deployment

### Build Process

The application supports different build modes:

- **Development**: Unminified assets, detailed source maps
- **Production**: Minified bundles, optimized assets, compressed output
