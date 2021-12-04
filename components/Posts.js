import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "sadhvipugaonkar",
    userImg: "https://i.ibb.co/Ch7KMJS/studdy-spotify.png",
    img: "https://i.ibb.co/Ch7KMJS/studdy-spotify.png",
    caption: "Heart wilder than those trees out there.",
  },
  {
    id: "123",
    username: "sadhvipugaonkar",
    userImg: "https://i.ibb.co/Ch7KMJS/studdy-spotify.png",
    img: "https://i.ibb.co/Ch7KMJS/studdy-spotify.png",
    caption: "Heart wilder than those trees out there.",
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          caption={post.caption}
          img={post.img}
        />
      ))}
    </div>
  );
};

export default Posts;
