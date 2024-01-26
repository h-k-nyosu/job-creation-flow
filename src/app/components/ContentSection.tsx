import React from "react";

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
  return (
    <>
      <h1 className="text-5xl font-bold mb-6">{title}</h1>
      <p className="mb-4">{description}</p>
      <div className="flex flex-wrap gap-4 mb-4">
        <h2 className="text-3xl font-semibold w-full mb-4">タグリスト</h2>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-200 text-blue-900 text-sm font-semibold mr-4 px-4 py-1.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      {showInputField && (
        <div className="mb-6">
          <label
            htmlFor="inputField"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            入力フィールド:
          </label>
          <input
            type="text"
            id="inputField"
            className="form-input mt-1 block w-full bg-gray-50 h-12 rounded-lg shadow focus:ring-2 focus:ring-blue-500"
            placeholder="ここに入力"
            required
          />
        </div>
      )}
      <div className="flex justify-between">
        {pageNumber > 1 && (
          <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded transition duration-300">
            戻る
          </button>
        )}
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition duration-300">
          次へ
        </button>
      </div>
    </>
  );
};

export default ContentSection;
