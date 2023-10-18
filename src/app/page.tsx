import WordsList from "@/ui/WordsList";

export default function Home({ words }: any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WordsList />
    </main>
  );
}
