import { Editor, RichUtils } from "draft-js";
import {
  FaBold,
  FaCode,
  FaHeading,
  FaItalic,
  FaListOl,
  FaListUl,
  FaUnderline,
} from "react-icons/fa";

const InlineControls = [
  {
    icon: <FaBold title="bold" />,
    name: "BOLD",
  },
  {
    icon: <FaItalic title="italic" />,
    name: "ITALIC",
  },
  {
    icon: <FaUnderline title="underline" />,
    name: "UNDERLINE",
  },
  {
    icon: <FaCode title="code" />,
    name: "CODE",
  },
];

const BlockControls = [
  {
    icon: <FaHeading title="H1" />,
    name: "header-one",
  },
  {
    icon: <FaListUl title="unordered list" />,
    name: "unordered-list-item",
  },
  {
    icon: <FaListOl title="ordered list" />,
    name: "ordered-list-item",
  },
];

const styles = {
  box: {
    border: "1px solid #c0c0c0",
    marginTop: "10px",
  },
  top: {
    padding: "5px",
    display: "flex",
  },
  content: {
    borderTop: "1px solid #c0c0c0",
    padding: "5px",
    height: "auto",
    minHeight: "250px",
  },
  button: {
    border: "1px solid #c0c0c0",
    padding: "5px",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "center",
    marginRight: "5px",
    width: "50px",
    "&:hover": {
      backgroundColor: "#d3d3d3",
    },
  },
  editor: {
    flex: 1,
    minHeight: "250px",
  },
};

const TextEditor = ({ editorState, setEditorState }) => {
  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const controlButton = (index, isSelected, toggle, icon) => (
    <div
      key={index}
      style={{
        ...styles.button,
        backgroundColor: isSelected ? "#d3d3d3" : "#ffffff",
      }}
      onClick={toggle}
    >
      {icon}
    </div>
  );

  return (
    <div style={styles.box}>
      <div style={styles.top}>
        {InlineControls.map((control, index) => {
          const currentStyle = editorState.getCurrentInlineStyle();
          return controlButton(
            index,
            currentStyle.has(control.name),
            () => toggleInlineStyle(control.name),
            control.icon
          );
        })}

        {BlockControls.map((control, index) => {
          const selection = editorState.getSelection();
          const blockType = editorState
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getType();
          return controlButton(
            index,
            control.name === blockType,
            () => toggleBlockType(control.name),
            control.icon
          );
        })}
      </div>
      <div style={styles.content}>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          style={styles.editor}
        />
      </div>
    </div>
  );
};

export default TextEditor;
