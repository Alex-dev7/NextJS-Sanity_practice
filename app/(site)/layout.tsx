import Link from 'next/link'
import '../globals.css'
import { getPages } from '@/sanity/sanity-utils'

export const metadata = {
  title: 'My site',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // get all the pages
  const pages = await getPages()

  return (
    <html lang="en">
      <body className='max-w-3xl mx-auto py-10'>

        <header>
          <Link href="/" 
          className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent text-3xl drop-shadow-sm font-extrabold  hover:drop-shadow-lg hover:underline transition">
            ALEXEI
          </Link>
          <div>
            {pages.map(page => (
              <Link href={`/${page.slug}`} key={page._id}>
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        
        <main className='py-10'>
          {children}
        </main>

      </body>
    </html>
  )
}
