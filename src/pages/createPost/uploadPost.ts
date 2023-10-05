import { PostPreview } from "@/data/posts";
import { firestore } from "@/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

interface PostData {
  content: string;
  image: string;
  text: string;
  title: string;
  id: string;
}

export default async function uploadPost(postData: PostData) {
  const metaData = (({ content, ...rest }) => rest)(postData);
  const content = postData.content;

  const contentCollectionRef = collection(
    firestore,
    `posts/${postData.id}/content`
  );

  const docs = await getDocs(contentCollectionRef);
  for (let i = 0; i < docs.docs.length; i++) {
    await deleteDoc(docs.docs[i].ref);
  }

  const splittedContent = content.match(/.{0,500000}/g)!;

  for (let i = 0; i < splittedContent?.length; i++) {
    await setDoc(doc(contentCollectionRef), {
      sort: i,
      value: splittedContent[i],
    });
  }

  await setDoc(doc(firestore, "posts", postData.id), metaData);
}
