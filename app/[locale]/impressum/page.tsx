import {setRequestLocale} from 'next-intl/server';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ImprintContent from '@/components/imprint-content';

type Props = {
  params: Promise<{locale: string}>;
};

export default async function ImprintPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Header />
      <ImprintContent />
      <Footer />
    </main>
  );
}
