const PostTags = ({ tagsArray }) => {
  // console.log(tagsArray);
  return (
    <div style={{ display: "flex" }}>
      {tagsArray.map((tag, index) => {
        return (
          <h2
            style={{
              marginRight: "10px",
              paddingLeft: "20px",
              paddingRight: "20px",
              backgroundColor: "#454444",
              borderRadius: "10px",
            }}
            key={index}
          >
            {tag}
          </h2>
        );
      })}
    </div>
  );
};

export default PostTags;
