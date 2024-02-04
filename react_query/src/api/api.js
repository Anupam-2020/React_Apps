export const fetchPosts = async () => {
    const response = await fetch(`http://localhost:3000/posts?_sort=-id`)
    const postData = await response.json();
    return postData;
}

export const addPost = async (post) => {
    const response = await fetch(`http://localhost:3000/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
    return response.json();
}

export const fetchTags = async () => {
    const response = await fetch(`http://localhost:3000/tags`)
    const postTags = await response.json();
    return postTags;
}