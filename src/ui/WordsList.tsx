"use client ";
import data from "@/shared/libs/data.json";

export default function WordsList() {
  return (
    <div>
      {data?.map((item: any, index: number) => (
        <div key={index}>
          <div>{item.word}</div>
          <div>{item.meaning}</div>
          <div>{item.example}</div>
        </div>
      ))}
    </div>
  );
}
