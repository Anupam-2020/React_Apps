import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addPost, fetchPosts, fetchTags } from "../api/api";
import PostTags from "./post-tags";

const Postlist = () => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  // console.log(data);

  const queryClient = useQueryClient()

  const {
    mutate,
    isError: isPostError,
    isPending,
    reset,
    error: postError,
  } = useMutation({
    mutationFn: addPost,
    onMutate: () => {
        return {id: 1}
    },
    onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries({
            queryKey: ["posts"],
            exact: true,
            // predicate: (query) => query.queryKey[0] === "posts" && query.queryKey[1].page >= 2
        })
    },
    // onError: (error, variable, context) => {},
    // onSettled: (data, error, variables, context) => {}
  });

  const { data: tagData, isLoading: tagsLoading } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const tags = Array.from(formData.keys()).filter((key) => formData.get(key) === "on");
    console.log(title, tags);
    if(!title || !tags) return;
    mutate({id: data.length + 1, title: title, tags: tags});
    e.target.reset();
  }

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your post" name="title" />
        <div>
          {tagData?.map((tag) => {
            return (
              <div key={tag}>
                <input name={tag} id={tag} type="checkbox" />
                <label htmlFor={tag}>{tag}</label>
              </div>
            );
          })}
        </div>
        <button>Post</button>
      </form>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        data.map((post) => {
          return (
            <div
              key={post.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2 style={{ width: "50vw", textAlign: "left" }}>{post.title}</h2>
              <PostTags tagsArray={post.tags} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Postlist;
