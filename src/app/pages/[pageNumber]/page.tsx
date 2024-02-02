"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import pageContents from "../../../data/pageContents";
import ContentSection from "../../components/ContentSection";

export function usePageNumber() {
  const { pageNumber } = useParams();
  const [page, setPage] = useState<number>(999);

  useEffect(() => {
    // pageNumberが存在し、かつ数値であることを確認します。
    if (pageNumber && !isNaN(parseInt(pageNumber[0], 10))) {
      // pageNumberを数値に変換し、1を引いてindexに合わせます。
      const pageIndex = parseInt(pageNumber[0], 10) - 1;
      setPage(pageIndex);
    }
  }, [pageNumber]);

  return page;
}

export default function Page() {
  const pageIndex = usePageNumber();
  // pageIndexを使用してcurrentPageContentを取得します。
  const currentPageContent = pageContents[pageIndex];

  return (
    <main className="container mx-auto p-8 bg-white text-gray-800 min-h-screen w-1/2 relative">
      {currentPageContent && (
        <ContentSection
          title={currentPageContent.title}
          description={currentPageContent.description}
          tags={currentPageContent.tags}
          multiSelectTags={currentPageContent.multiSelectTags}
          showInputField={currentPageContent.showInputField}
          // pageNumberは1を足してユーザーに表示します。
          pageNumber={pageIndex + 1}
        />
      )}
    </main>
  );
}
