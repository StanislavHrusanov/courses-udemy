//our-domain.com/news/newsId
import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();
  const newsId = router.query.newsId;

  return (
    <>
      <h1>The Details Page</h1>
      <p>{newsId}</p>
    </>
  );
}

export default DetailsPage;
