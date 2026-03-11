import {setRequestLocale} from 'next-intl/server';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Footer from '@/components/footer';

type Props = {
  params: Promise<{locale: string}>;
};

export default async function HomePage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
