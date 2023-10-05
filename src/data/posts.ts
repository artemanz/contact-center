import { firestore } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export type PostPreview = {
  id: string;
  image: string;
  title: string;
  text: string;
  content: string;
};

async function getPosts() {
  const querySnapshot = await getDocs(collection(firestore, "posts"));

  try {
    const docs = await Promise.allSettled(
      querySnapshot.docs.map(async (doc) => {
        const data = doc.data();
        return data;
      })
    );

    return docs
      .filter((doc) => doc.status == "fulfilled")
      .map((doc: any) => doc.value);
  } catch (err) {
    return [];
  }
}

export default getPosts();
