import fetch from "node-fetch";

export async function getAllPostsData() {
  // api叩いて posts(一覧)を取得
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`)
  );

  const posts = await res.json();
  // 一覧データをsortで加工
  const filteredPosts = posts.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  return filteredPosts;
}

export async function getAllPostsIds() {
  // こっちも一覧取得
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`)
  );
  // 一覧データjsonオブジェクトに変換
  const posts = await res.json();
  return posts.map((post) => {
    return {
      // getStaticPaths() は params で返すことが必須
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getPostData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-post/${id}/`)
  );
  const post = res.json();
  return {
    post,
  };
}