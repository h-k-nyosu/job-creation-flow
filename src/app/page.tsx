import pageContents from "../data/pageContents";
import ContentSection from "./components/ContentSection";

export default function Home() {
  // URLからpageNumberを取得するロジックを追加するか、
  // あるいはprops経由で渡すなどして、pageNumberを決定します。
  const pageNumber = 1; // 例として1を使用

  // pageNumberに基づいて現在のページコンテンツを取得
  const currentPageContent = pageContents.find(
    (page) => page.pageNumber === pageNumber
  );

  return (
    <main className="container mx-auto p-8 bg-white text-gray-800 min-h-screen w-1/2 relative">
      {currentPageContent && (
        <ContentSection
          title={currentPageContent.title}
          description={currentPageContent.description}
          tags={currentPageContent.tags}
          showInputField={currentPageContent.showInputField}
          pageNumber={currentPageContent.pageNumber}
        />
      )}
    </main>
  );
}
