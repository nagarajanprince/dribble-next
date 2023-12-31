import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Flexibble',
    description: 'Showcase and discover'
}

export default function RootLayout ({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div className='page-wrapper'>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
                </div>
            </body>
        </html>
    )
}