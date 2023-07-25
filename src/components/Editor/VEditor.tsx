import "vditor/dist/index.css";
import Vditor from "vditor";
import { FC, forwardRef, useEffect, useImperativeHandle, useState } from "react";

type Props = {
  value: string,
}

export const VEditor: FC<Props> = forwardRef(({ value }, ref) => {
  const [vd, setVd] = useState<Vditor>()

  const getValue = () => {
    const xxx = vd?.getValue()
    console.log(xxx)
    return xxx
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
        {
          name: "more",
          toolbar: [
            "both",
            "code-theme",
            "content-theme",
            "export",
            "outline",
            "preview",
            "devtools",
            "info",
            "help",
          ],
        },
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
