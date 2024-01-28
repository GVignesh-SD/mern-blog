import ReactQuill from "react-quill";

function Editor({ value, onChange }) {
  return (
    <div>
      <ReactQuill
        theme="snow"
        placeholder="Write something...."
        className="h-72 mb-12"
        required
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Editor;
