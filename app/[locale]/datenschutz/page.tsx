import {setRequestLocale} from 'next-intl/server';
import Header from '@/components/header';
import Footer from '@/components/footer';
import PrivacyContent from '@/components/privacy-content';

type Props = {
  params: Promise<{locale: string}>;
};

export default async function PrivacyPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Header />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
