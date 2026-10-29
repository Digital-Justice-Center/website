import {routing} from '@/i18n/routing';

// A static export has no middleware, so the root URL picks the locale in
// the browser: first supported language the visitor prefers, else default.
const redirectScript = `
var locales = ${JSON.stringify(routing.locales)};
var preferred = (navigator.languages || [navigator.language]).map(function (l) {
  return l.slice(0, 2).toLowerCase();
});
var match = preferred.filter(function (l) { return locales.indexOf(l) !== -1; })[0];
location.replace('/' + (match || '${routing.defaultLocale}') + '/');
`;

export default function RootPage() {
  return (
    <html lang={routing.defaultLocale}>
      <head>
        <title>Digital Justice Center</title>
        <noscript>
          <meta httpEquiv="refresh" content={`0; url=/${routing.defaultLocale}/`} />
        </noscript>
        <script dangerouslySetInnerHTML={{__html: redirectScript}} />
      </head>
      <body />
    </html>
  );
}
