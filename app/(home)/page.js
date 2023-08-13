import { fragment } from 'react';
import Navbar from "../../components/layout/navbar/navbar";
import Footer from "../../components/layout/footer/footer";
import Hero2 from '@/components/layout/hero/hero2';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <Hero2 />
            </div>
            <Footer />
        </>
    )
}