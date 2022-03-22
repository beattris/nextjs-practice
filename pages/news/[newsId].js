import { useRouter } from "next/router";

function NewsDetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;
  console.log(router.query.newsId);
  return <h1>The News Detail Page</h1>;
}

export default NewsDetailPage;
