import ContentSection from "./components/ContentSection";

export default function Home() {
  const title = "タイトル";
  const description = "ここに説明を記入します。";
  const tags = ["タグ1", "タグ2", "タグ3"];
  const showInputField = true; // この値を変更して入力フィールドの表示を制御
  const pageNumber = 1; // この値を変更してページ番号を制御

  return (
    <main className="container mx-auto p-8 bg-white text-gray-800 min-h-screen w-full relative">
      <ContentSection
        title={title}
        description={description}
        tags={tags}
        showInputField={showInputField}
        pageNumber={pageNumber}
      />
      {/* その他のコンテンツ */}
    </main>
  );
}
