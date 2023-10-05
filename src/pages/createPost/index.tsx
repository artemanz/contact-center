import {
  ChangeEventHandler,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Editor, MobileMenu } from "@/components";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "@/firebase";
import uploadPost from "./uploadPost";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import { logo, placeholder } from "@/assets";
import { AnimatePresence } from "framer-motion";

interface Props {}

const CreatePost = (props: Props) => {
  const postRef = useRef<HTMLDivElement>(null);
  const [postData, setPostData] = useState({
    content: "",
    image: "",
    text: "",
    title: "",
  });
  const [previewMode, setPreviewMode] = useState(false);

  const [selectedFile, setSelectedFile] = useState<
    string | ArrayBuffer | null | undefined
  >(null);
  const [loading, setLoading] = useState(false);

  const addImageToPost: ChangeEventHandler = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target?.result);
    };
  };

  async function savePostHandler(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    const docRef = await addDoc(collection(firestore, "posts"), {});
    let newPostData = { ...postData, id: docRef.id };

    if (selectedFile && typeof selectedFile == "string") {
      const imageRef = ref(storage, `${newPostData.id}/preview`);
      await uploadString(imageRef, selectedFile, "data_url").then(
        async () => (newPostData.image = await getDownloadURL(imageRef))
      );
    }

    try {
      await uploadPost(newPostData);
      window.location.href = "/blog";
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (previewMode && postRef.current) {
      postRef.current.innerHTML = postData.content;
    }
  }, [postData, previewMode]);

  return (
    <main className="grow">
      <section className="section">
        <div className="container">
          <ul className="flex items-center justify-between py-8 gap-7">
            <li className="max-w-[50%]">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </li>
            <li>
              <Link className="Button--fullfilled" to="/blog">
                назад
              </Link>
            </li>
          </ul>

          <div>
            <button
              className="p-4 text-white transition-colors bg-green-400 rounded-xl hover:bg-green-500"
              onClick={() => {
                setPreviewMode((prev) => !prev);
              }}
            >
              {previewMode ? "Редактировать" : "Предпросмотр"}
            </button>
          </div>

          {previewMode ? (
            <div className="mt-12 Post" ref={postRef}></div>
          ) : (
            <form className="mt-12" onSubmit={savePostHandler}>
              <div className="space-y-8">
                <div className="flex flex-col">
                  <p className="text-neutral-400">Заголовок</p>
                  <input
                    className="text-black Input"
                    required
                    value={postData.title}
                    onChange={(e) =>
                      setPostData({ ...postData, title: e.target.value })
                    }
                    type="text"
                    placeholder="Заголовок"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-neutral-400">Описание</p>
                  <input
                    className="text-black Input"
                    required
                    value={postData.text}
                    onChange={(e) =>
                      setPostData({ ...postData, text: e.target.value })
                    }
                    type="text"
                    placeholder="Описание"
                  />
                </div>
                <label className="block mt-8 cursor-pointer max-w-fit">
                  <p className="text-neutral-400">Превью: (16x9)</p>

                  <img
                    className="max-w-md aspect-video"
                    src={
                      selectedFile && typeof selectedFile === "string"
                        ? selectedFile
                        : placeholder
                    }
                    alt="Preview image"
                  />

                  <input
                    accept="image/*"
                    type="file"
                    hidden
                    onChange={addImageToPost}
                  />
                </label>
              </div>
              <div className="mt-8">
                <Editor
                  value={postData.content}
                  setValue={(v) =>
                    setPostData({ ...postData, content: v as string })
                  }
                />
              </div>

              <div className="mt-12">
                <button
                  className="Button--fullfilled"
                  type="submit"
                  disabled={loading}
                >
                  Сохранить
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default CreatePost;
