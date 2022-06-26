import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { firebaseFirestore } from "../firebase";

const firestoreCollections = {
  articles: "articles",
};

export class ArticleComment {
  constructor({ content, createdAt }) {
    this.content = content;
    this.createdAt = createdAt;
  }
}

export class FirestoreArticle {
  constructor({ slug, likes, comments, id }) {
    this.setData({ slug, likes, comments, id });
  }

  setData({ slug, likes, comments = [], id }) {
    this.id = id;
    this.slug = slug;
    this.likes = likes;
    this.comments = comments.map(
      ({ content, createdAt }) => new ArticleComment({ content, createdAt })
    );
  }

  async updateLastestFromDbBySlug() {
    const foundedArticle = await fetchArticleBySlug(this.slug);
    foundedArticle && this.setData(foundedArticle);
  }

  async addComment(content) {
    const newComment = new ArticleComment({
      content,
      createdAt: new Date().getTime(),
    });
    this.comments = [...this.comments, newComment];
    console.log('this comment', this.comments);
    updateArticleComments(this.id, this.comments);
  }
}

async function fetchArticleBySlug(slug) {
  const articleQuery = query(
    collection(firebaseFirestore, firestoreCollections.articles),
    where("slug", "==", slug)
  );
  const querySnapshot = await getDocs(articleQuery);

  const fetchedData = [];
  querySnapshot.forEach((doc) => {
    fetchedData.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  const foundArticle = fetchedData[0];
  return foundArticle ? new FirestoreArticle(foundArticle) : undefined;
}



async function updateArticleComments(id, newComments) {
const comments = newComments.map(item => {
    console.log(item);
    return {content: item.content, createdAt: item.createdAt}
});
console.log('comments', comments);
  await updateDoc(doc(firebaseFirestore, firestoreCollections.articles, id), {
    comments,
  });
}
