import { firestore } from "@/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useData(postId: string) {
  const [postData, setPostData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    async function getData() {
      try {
        const postRef = doc(firestore, "posts", postId!);
        const postSnap = await getDoc(postRef);

        if (postSnap.exists()) {
          const contentCollectionRef = collection(
            firestore,
            `posts/${postId}/content`
          );
          const q = query(contentCollectionRef, orderBy("sort"));
          const docs = await getDocs(q);
          let content = "";
          docs.docs.forEach((doc) => (content += doc.data().value));
          setPostData({ ...postSnap.data(), content });
        } else {
          setPostData({
            title: "",
            text: "",
            content: "Произошла ошибка при загрузке. Попробуйте позже",
            id: postId,
          });
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return { postData, setPostData, loading, error };
}
