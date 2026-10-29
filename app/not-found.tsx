import Link from 'next/link';
import './globals.css';

// Exported as 404.html, which GitHub Pages serves for any unknown path.
// It sits outside [locale], so it addresses visitors in both languages.
export default function NotFound() {
  return (
    <html lang="de">
      <head>
        <title>404 – Digital Justice Center</title>
      </head>
      <body className="min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <p className="font-display text-xl text-navy-900 tracking-tight mb-16">
            Digital Justice Center
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-navy-950 tracking-tight mb-4">
            Seite nicht gefunden
          </h1>
          <p className="text-lg text-navy-600 mb-10">Page not found</p>
          <div className="flex gap-6 text-sm">
            <Link href="/de/" className="text-navy-600 hover:text-navy-900 transition-colors border border-navy-300 rounded px-3 py-1.5 hover:border-navy-500">
              Zur Startseite
            </Link>
            <Link href="/en/" className="text-navy-600 hover:text-navy-900 transition-colors border border-navy-300 rounded px-3 py-1.5 hover:border-navy-500">
              Go to homepage
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
