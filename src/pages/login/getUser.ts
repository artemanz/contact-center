import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@/firebase";
import { User } from "@/firebase";

export default async function getUser(uid: string) {
  try {
    const docRef = doc(firestore, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as User;
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
}
