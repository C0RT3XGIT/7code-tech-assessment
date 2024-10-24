import { Locale } from "@/i18n-config";
export default function Home({ params }: { params: { lang: Locale } }) {
  return  (
    <div>
        <h1>Welcome to the home page</h1>
        <p>This is the home page content in {params.lang}</p>
    </div>
  );
}
