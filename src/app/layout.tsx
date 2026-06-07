import './main.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({children}: LayoutProps<'/'>) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body className='flex flex-col min-h-screen'>
            <Header />
            <div className='grow'>
                {children}
            </div>
            <Footer />
        </body>
        </html>
    )
}