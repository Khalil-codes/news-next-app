import Link from "next/link";
import React from "react";

const Feed = ({ pageNumber, articles }) => {
    return (
        <div className="feed-container">
            <div className="feed">
                {articles.map((article, idx) => (
                    <div className="article-container" key={idx}>
                        <h3>
                            {" "}
                            <a href={article.url} target="_blank">
                                {article.title}
                            </a>
                        </h3>
                        {article.urlToImage && (
                            <img
                                src={article.urlToImage}
                                alt="article-img"
                                className="article-img"
                            />
                        )}
                        <p>{article.content}</p>
                        <hr />
                    </div>
                ))}
            </div>
            <div className="paginator">
                <div className="prev">
                    <Link href={`/feed/${pageNumber - 1}`} passHref>
                        <button disabled={pageNumber <= 1} className="page-btn">
                            Prev
                        </button>
                    </Link>
                </div>
                <div className="current">Page #{pageNumber} of Page 5</div>
                <div className="next">
                    <Link href={`/feed/${pageNumber + 1}`} passHref>
                        <button disabled={pageNumber >= 5} className="page-btn">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({ params }) => {
    const pageNumber = +params.slug;
    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            notFound: true,
        };
    }
    const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEWS_API_KEY}`,
            },
        }
    );
    const { articles } = await response.json();
    return {
        props: {
            pageNumber,
            articles,
        },
    };
};

export default Feed;
