"use client";

import "quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";

const PostTextArea = () => {
  const { quill, quillRef } = useQuill();
  const [editorContent, setEditorContent] = useState("");

  useEffect(() => {
    if (quill) {
      // Listen for changes in the editor
      quill.on("text-change", () => {
        // Get the content of the editor in HTML format
        setEditorContent(quill.root.innerHTML);
      });
    }
  }, [quill]);

  // Log or use the editor content as needed
  useEffect(() => {
    console.log("Editor Content: ", editorContent);
  }, [editorContent]);

  return (
    <div style={{ width: 600, height: 250 }} className="bg-white rounded-md">
      <div ref={quillRef} />

      <button className="font-semibold uppercase p-1.5 text-white w-full mt-4 rounded-sm bg-primary">
        Post
      </button>
    </div>
  );
};

export default PostTextArea;
