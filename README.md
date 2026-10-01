# 🚀 HERO.IO — Hero App

A modern app marketplace web app built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Browse a curated catalog of apps, view detailed info, and install/uninstall apps to build your own personal library — all persisted locally in your browser.

🔗 **Live App:** [hero-6vuevabjl-mrkhandsswe-2723.vercel.app](https://hero-6vuevabjl-mrkhandsswe-2723.vercel.app/)
📦 **Repository:** [theopsupcorp1009/hero-app](https://github.com/theopsupcorp1009/hero-app)

---

## ✨ Features

- **Home page** with a hero banner, platform statistics, and a trending apps carousel
- **All Apps** page with live search/filtering by app name
- **App details page** (`/apps/[id]`) showing full app info, ratings, and downloads
- **Install / Uninstall** apps into a personal library, persisted via `localStorage`
- **My Installations** page to view, sort (by size or title), and manage installed apps
- Toast notifications for install/uninstall actions
- Fully responsive UI styled with **Tailwind CSS** and **daisyUI**
- Custom 404 and loading states

---

## 🖥️ Tech Stack

| Layer              | Technology                                   |
|--------------------|-----------------------------------------------|
| Framework          | [Next.js](https://nextjs.org/) (App Router)   |
| Language           | TypeScript                                    |
| Styling            | Tailwind CSS v4, daisyUI                      |
| Icons              | react-icons                                   |
| Notifications      | react-toastify                                |
| State Management   | React Context API + `localStorage`            |
| Data Source        | Local JSON (`public/data.json`)               |
| Deployment         | Vercel                                        |

---

## 📂 Project Structure

```
hero-app/
├── public/
│   └── data.json                      # App catalog data
├── src/
│   ├── app/
│   │   ├── page.tsx                   # Home page
│   │   ├── layout.tsx                 # Root layout
│   │   ├── loading.tsx / not-found.tsx
│   │   ├── apps/
│   │   │   ├── page.tsx               # All apps listing (server)
│   │   │   ├── AllAppsClient.tsx      # Search + grid (client)
│   │   │   ├── loading.tsx
│   │   │   └── [id]/page.tsx          # App details page
│   │   ├── installation/
│   │   │   └── page.tsx               # Installed apps / library page
│   │   ├── components/
│   │   │   ├── homepage/              # Banner, Statistics, TrendingApp(Card)
│   │   │   ├── buttons/               # InstalledAppButton
│   │   │   └── shared/                # Navbar, Footer
│   │   └── types/
│   │       └── apps.type.ts           # App & Rating TypeScript types
│   ├── context/
│   │   └── AppContext.tsx             # Installed apps global state
│   ├── lib/
│   │   └── apps.ts                    # Reads app data from data.json
│   └── assets/                        # Images, icons, design files
├── package.json
├── next.config.ts
├── tsconfig.json
└── eslint.config.mjs
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ (recommended: latest LTS)
- npm (or yarn / pnpm / bun)

### Installation

```bash
# Clone the repository
git clone https://github.com/theopsupcorp1009/hero-app.git
cd hero-app

# Install dependencies
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Other scripts

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

---

## 🎛️ How to Use

1. Land on the **Home** page to see featured and trending apps.
2. Go to **All Apps** to browse the full catalog and search by name.
3. Click an app to view its **details** page.
4. **Install** an app to add it to your personal library (saved in `localStorage`).
5. Visit **My Installations** to view, sort, or uninstall apps from your library.

---

## 🌐 Deployment

This app is deployed on **Vercel**. Any push to the connected branch triggers an automatic build and deployment.

To deploy your own copy:

1. Push this repository to your GitHub account.
2. Import the project into [Vercel](https://vercel.com/new).
3. Vercel auto-detects the Next.js framework — no extra configuration needed.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) and [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app)
- Styled with [Tailwind CSS](https://tailwindcss.com/) and [daisyUI](https://daisyui.com/)
- Hosted on [Vercel](https://vercel.com/)

---

## 📝 Project Summary

**HERO.IO (Hero App)** is a front-end app marketplace demo that simulates the core experience of a digital app store. Built with Next.js App Router and TypeScript, it serves an app catalog from a local JSON data source and lets users browse, search, and inspect individual app listings with details like ratings, reviews, downloads, and size. Users can "install" apps into a personal library that is persisted entirely on the client via `localStorage` through a shared React Context, and manage that library from a dedicated installations page with sorting and uninstall options. The UI is fully responsive and styled with Tailwind CSS and daisyUI, with toast feedback for key actions, and the app is deployed on Vercel for continuous, zero-config hosting. Overall, the project demonstrates practical skills in Next.js routing (server and client components), TypeScript typing, global state management, and modern utility-first UI design.
