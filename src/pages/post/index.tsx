import { AuthProvider, firestore, storage } from "@/firebase";
import { Editor, MobileMenu, Modal } from "@/components";
import {
  ChangeEventHandler,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import useData from "./useData";
import { Link, useParams } from "react-router-dom";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import uploadPost from "./uploadPost";
import { logo, placeholder } from "@/assets";
import { deleteDoc, doc } from "firebase/firestore";
import { AnimatePresence } from "framer-motion";

const Post = () => {
  const { postId } = useParams();
  const { user } = useContext(AuthProvider);

  const [previewMode, setPreviewMode] = useState(true);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const postRef = useRef<HTMLDivElement>(null);

  const [saveLoading, setSaveLoading] = useState(false);
  const [saveButtonSpan, setSaveButtonSpan] = useState(false);

  const [selectedFile, setSelectedFile] = useState<
    string | ArrayBuffer | null | undefined
  >(null);

  const { loading, postData, setPostData } = useData(postId!);

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
    setSaveLoading(true);
    let newPostData = { ...postData };

    if (selectedFile && typeof selectedFile == "string") {
      const imageRef = ref(storage, `${postId}/preview`);
      await uploadString(imageRef, selectedFile, "data_url").then(
        async () => (newPostData.image = await getDownloadURL(imageRef))
      );
    }

    try {
      await uploadPost(newPostData);
      setSaveButtonSpan(true);
      setSaveLoading(false);
    } catch (error) {
      console.error(error);
    }

    setTimeout(() => setSaveButtonSpan(false), 3000);
  }

  useEffect(() => {
    if (postData && previewMode && postRef.current) {
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
            <li className="space-x-8">
              <Link className="Button--fullfilled" to="/blog">
                назад
              </Link>
            </li>
          </ul>
          {loading ? (
            <p className="text-2xl">Загрузка...</p>
          ) : (
            <>
              {user && (
                <div className="flex justify-between">
                  <button
                    className="p-4 text-white transition-colors bg-green-400 rounded-xl hover:bg-green-500"
                    onClick={() => {
                      setPreviewMode((prev) => !prev);
                    }}
                  >
                    {previewMode ? "Редактировать" : "Предпросмотр"}
                  </button>
                  <button
                    className="p-4 text-white transition-colors bg-red-400 rounded-xl hover:bg-red-500"
                    onClick={() => setConfirmDeleteModal(true)}
                  >
                    Удалить
                  </button>
                </div>
              )}
              {user && !previewMode ? (
                <form className="mt-12" onSubmit={savePostHandler}>
                  <div className="space-y-8">
                    <div className="flex flex-col">
                      <p className="text-neutral-400">Заголовок</p>
                      <input
                        className="text-black Input"
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
                      {selectedFile && typeof selectedFile === "string" ? (
                        <img
                          className="max-w-md aspect-video"
                          src={selectedFile}
                          alt="Preview image"
                        />
                      ) : (
                        <img
                          className="max-w-md aspect-video"
                          src={postData.image || placeholder}
                          alt="Placeholder image"
                        />
                      )}
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
                      setValue={(v) => setPostData({ ...postData, content: v })}
                    />
                  </div>
                  {user && (
                    <div className="flex items-center gap-12 mt-12">
                      <button
                        className="Button--fullfilled"
                        disabled={saveLoading}
                        type="submit"
                      >
                        Сохранить
                      </button>
                      {saveButtonSpan && <span>Сохранено!</span>}
                    </div>
                  )}
                </form>
              ) : (
                <div className="mt-12 Post" ref={postRef}></div>
              )}
            </>
          )}
        </div>
      </section>

      {confirmDeleteModal && (
        <Modal modal={confirmDeleteModal} setModal={setConfirmDeleteModal}>
          <p className="text-xl text-center">
            Вы уверены что хотите удалить пост?
          </p>
          <div className="flex gap-4 mt-8">
            <button
              className="w-32 p-4 text-white transition-colors bg-green-400 rounded-xl hover:bg-green-500"
              onClick={async () => {
                setConfirmDeleteModal(false);
                await deleteDoc(doc(firestore, "posts", postId!));
                window.location.href = "/blog";
              }}
            >
              Да
            </button>
            <button
              className="w-32 p-4 text-white transition-colors bg-red-400 rounded-xl hover:bg-red-500"
              onClick={() => {
                setConfirmDeleteModal(false);
              }}
            >
              Отмена
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default Post;
