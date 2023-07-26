import "vditor/dist/index.css";
import Vditor from "vditor";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { EditorRef } from "./type";

type Props = {
  value: string,
}

export const VEditor = forwardRef<EditorRef, Props>(({ value }, ref) => {
  const [vd, setVd] = useState<Vditor>()

  const getValue = () => {
    return vd?.getValue() || ''
  }
  useImperativeHandle(ref, () => ({
    getValue
  }))

  useEffect(() => {
    const vditor = new Vditor("vditor", {
      height: 600,
      lang: 'zh_CN',
      mode: 'wysiwyg',
      toolbar: [
        "emoji",
        "headings",
        "bold",
        "italic",
        "strike",
        "link",
        "|",
        "list",
        "ordered-list",
        "check",
        "outdent",
        "indent",
        "|",
        "quote",
        "line",
        "code",
        "inline-code",
        "insert-before",
        "insert-after",
        "|",
        "table",
        "|",
        "undo",
        "redo",
        "|",
      ],
      outline: {
        enable: true,
        position: 'right',
      },
      after: () => {
        vditor.setValue(value)
        setVd(vditor);
      },
    })
    console.log('value onMounted')
  }, [value])

  return <div id="vditor" className="vditor" />;
})
