//our-domain.com/news
import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/one">One</Link>
        </li>
        <li>
          <Link href="/news/two">Two</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
