export default function About() {
  return (
    <>
      <div className="disclaimer-parent">
        <h2>
          Welcome to{" "}
          <span className="main-nav-bar-home-allegations">Allegations</span>
          .wiki, the satire website that uses machine learning to identify which
          celebrities have been "cancelled" by society.
        </h2>
        <p>
          At <span className="main-nav-bar-home-allegations">Allegations</span>
          .wiki, we use state-of-the-art algorithms to analyze social media
          posts, news articles, and other publicly available information to
          determine which celebrities have fallen out of public favor. Our goal
          is to provide a satirical take on cancel culture and the fickle nature
          of public opinion.
        </p>
        <p>
          While we understand that cancel culture can be a serious issue, we
          also believe that it's important to approach sensitive topics with
          humor and irony. Our content is meant to entertain and provoke
          thought, not to offend or harm anyone.
        </p>
        <br/>
        <h2>Behind the curtain:</h2>
        <p>
          <span className="main-nav-bar-home-allegations">Allegations</span>
          .wiki was created using NextJs, a powerful and flexible framework for
          building React-based web applications. We use a variety of NextJs
          features to ensure that our website is fast, responsive, and always
          up-to-date.
        </p>
        <p>
          Our homepage is statically generated, meaning that it loads quickly
          and efficiently for users. We also use dynamic client-side data for
          the search bar, allowing users to quickly and easily find the
          celebrities they're looking for.
        </p>
        <p>
          The top 10 most viewed celebrity pages are also statically generated
          at build, but we make use of incremental static generation to ensure
          that these pages are always up-to-date with the latest information.
          For other celebrity pages, we use the NextJs fallback feature to
          generate them upon the first request. This helps to keep our website
          fast and responsive, while also ensuring that all content is available
          to our users.
        </p>
        <p>
          Our About page is statically generated, providing users with
          information about our website and what we do. Our Disclaimer page, on
          the other hand, is generated using server-side rendering, allowing us
          to quickly and easily update it as needed.
        </p>
        <p>
          We're constantly working to improve and refine our website, and we're
          always on the lookout for new and innovative technologies that can
          help us achieve our goals. If you have any questions or feedback,
          please don't hesitate to get in touch. We'd love to hear from you!
        </p>
      </div>
    </>
  );
}
