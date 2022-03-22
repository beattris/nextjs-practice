import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment> 
      <h1>The News Page</h1>
      <ul>
        <li><Link href='/news/nejs-is-cool'>NextJS is cool</Link></li>
        <li><Link href='/news/nanother-article-is-cool'>Another news article.</Link></li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
