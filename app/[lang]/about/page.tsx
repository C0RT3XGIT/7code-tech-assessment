import { getLocale, Locale } from "@/i18n-config";
import { getDictionary } from "@/app/lib/dictionary";

export default async function About({ params }: { params: { lang: Locale } }) {
    const locale = getLocale(params.lang)
    const dict = await getDictionary(locale)
  return (
    <div>
      <h1>{dict.about.title}</h1>
      <p>{dict.about.description}</p>
    </div>
  );
}

