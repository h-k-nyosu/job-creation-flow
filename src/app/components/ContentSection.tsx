"use client";

import Link from "next/link";
import React, { useState } from "react";

type ContentSectionProps = {
  title: string;
  description: string;
  tags: string[];
  showInputField: boolean;
  pageNumber: number;
};

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  tags,
  showInputField,
  pageNumber,
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tag)) {
        return prevSelectedTags.filter((t) => t !== tag);
      } else {
        return [...prevSelectedTags, tag];
      }
    });
  };

  return (
    <>
      <h1 className="text-5xl font-bold mb-6">{title}</h1>
      <p className="mb-4">{description}</p>
      <div className="flex flex-wrap gap-4 mb-4">
        <h2 className="font-semibold w-full mb-4">
          当てはまるものを選択してください。
        </h2>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`border-2 text-sm font-semibold mr-4 px-4 py-1.5 rounded-full ${
              selectedTags.includes(tag)
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-blue-900 border-blue-500"
            }`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      {showInputField && (
        <div className="mb-6">
          <input
            type="text"
            id="inputField"
            className="form-input mt-1 block w-full bg-gray-50 h-12 rounded-sm shadow focus:ring-2 focus:ring-blue-500"
            placeholder="ここに入力"
            required
          />
        </div>
      )}
      <div className="fixed mx-auto inset-x-0 bottom-10 bg-white p-4 w-1/2">
        <div
          className={`max-w-screen-xl mx-auto flex ${
            pageNumber > 1 ? "justify-between" : "justify-end"
          }`}
        >
          {pageNumber > 1 && (
            <Link
              href={`/pages/${pageNumber - 1}`}
              className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded transition duration-300"
            >
              戻る
            </Link>
          )}
          <Link
            href={`/pages/${pageNumber + 1}`}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition duration-300"
          >
            次へ
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContentSection;
