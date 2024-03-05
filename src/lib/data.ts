// TEMPORARY DATA
const users = [
  { id: 1, name: "park1" },
  { id: 2, name: "park2" },
  { id: 3, name: "park3" },
  { id: 4, name: "park4" },
];

const posts = [
  { id: 1, title: "Post 1 ", body: "1234", userId: 1 },
  { id: 2, title: "Post 2 ", body: "1234", userId: 1 },
  { id: 3, title: "Post 3 ", body: "1234", userId: 2 },
  { id: 4, title: "Post 4 ", body: "1234", userId: 2 },
];

export const getposts = async () => {
  return posts;
};

export const getpost = async (id: string) => {
  return posts.find((post) => post.id === Number(id));
};

export const getUser = async (id: string) => {
  return users.find((user) => user.id === Number(id));
};
