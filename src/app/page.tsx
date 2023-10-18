import WordsList from "@/ui/WordsList/WordsList";

export default function Home({ words }: any) {
  return (
    <section className="w-full max-w-7xl px-5">
      <WordsList />
    </section>
  );
}
