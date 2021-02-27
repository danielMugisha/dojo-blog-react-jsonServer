import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(
    "http://localhost:8000/blogs"
  );
  return (
    <div className="home">
      {error && <div>Couldn't fetch the desired resource</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All BLogs" />}
    </div>
  );
};

export default Home;
