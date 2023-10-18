import { Word } from "@/shared/dto/Word.dto";
import data from "@/shared/libs/data.json";
import { Button } from "@mui/material";
import Link from "next/link";

export default function WordPage({ params }: { params: { slug: string } }) {
  const word = data.find(function (slugWord: Word) {
    return slugWord.word === params.slug;
  });
  return (
    <section className="p-10 flex flex-col items-center justify-between w-full h-[90vh] text-center">
      {word && (
        <>
          <div className="gap-2">
            <p className="text-3xl mb-2">Word: </p>
            <p>{word.word}</p>
          </div>
          <div className="gap-2">
            <p className="text-3xl mb-2">Meaning: </p>
            <p>{word.meaning}</p>
          </div>
          <div className="gap-2">
            <p className="text-3xl mb-2">Example:</p>
            <p>{word.example}</p>
          </div>
        </>
      )}
      <Link href="/" className="w-full mb-10 max-w-xs">
        <Button variant="contained" color="primary" className="bg-blue-700 w-full">
          Back
        </Button>
      </Link>
    </section>
  );
}
