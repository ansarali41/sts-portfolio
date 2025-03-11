import '../styles/globals.css'

export const metadata = {
  title: 'Sansnom Tech Solutions - Transforming Ideas into Digital Reality',
  description: 'We are a team of passionate developers crafting innovative solutions for your business needs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}