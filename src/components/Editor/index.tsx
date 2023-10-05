import React, { Dispatch, SetStateAction } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.scss";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    [{ size: [] }],
    [{ color: [] }, { background: [] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
    ["link", "image", "video"],
  ],
};

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const PostEditor = ({ value, setValue }: Props) => {
  return (
    <ReactQuill
      modules={modules}
      theme="snow"
      value={value}
      onChange={setValue}
    />
  );
};

export default PostEditor;
