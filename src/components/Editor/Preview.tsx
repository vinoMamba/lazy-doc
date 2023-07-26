import { FC, useEffect, useRef } from "react"
import Vditor from "vditor";

type Props = {
  value: string
}
export const Preview: FC<Props> = ({ value }) => {
  const previewRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (previewRef.current && value) {
      Vditor.preview(previewRef.current, value).then(res => {
        console.log(res)
      }).catch(e => {
        console.log(e)
      })
    }
  }, [value])

  return (
    <div ref={previewRef}></div>
  )
}
