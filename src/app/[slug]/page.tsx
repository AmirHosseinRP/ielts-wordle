import { Word } from "@/shared/dto/Word.dto";
import data from "@/shared/libs/data.json";
import { Button } from "@mui/material";
import Link from "next/link";

export default function WordPage({ params }: { params: { slug: string } }) {
  const word = data.find(function (slugWord: Word) {
    return slugWord.word === params.slug;
  });
  return (
    <section className="p-10 flex flex-col items-center justify-between w-full h-[90vh]">
      {word && (
        <div className="text-center">
          <p className="text-3xl mb-2">Meaning: </p>
          <p>{word.meaning}</p>
          <p className="text-3xl mb-2 mt-24">Example:</p>
          <p>{word.example}</p>
        </div>
      )}
      <Link href="/" className="w-full">
        <Button variant="contained" color="primary" className="bg-blue-700 w-full mb-10">
          Back
        </Button>
      </Link>
    </section>
  );
}
