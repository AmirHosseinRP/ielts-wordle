"use client";

import { Word } from "@/shared/dto/Word.dto";
import data from "@/shared/libs/data.json";
import { Button } from "@mui/material";
import Link from "next/link";

export default function WordsList() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data?.map((word: Word, index: number) => (
        <Link href={`/${word.word}`} className="w-full">
          <Button key={index} variant="contained" color="info" className="bg-blue-700 w-full">
            {word.word}
          </Button>
        </Link>
      ))}
    </div>
  );
}
