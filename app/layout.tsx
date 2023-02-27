import '../styles/globals.css';

export const metadata = {
  title: 'Dropy Website',
  description: 'Dropy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  )
}
