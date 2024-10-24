import { Locale } from "@/i18n-config";

export default function About({ params }: { params: { lang: Locale } }) {
  return (
    <div>
      <h1>Welcome to the about page</h1>
      <p>This is the about page content in {params.lang}</p>
    </div>
  );
}

