import { useRef } from "react"
import { EditorRef } from "./type"
import { MutableRefObject } from "react"

type Method = {
  getMdValue: () => string
}

type ReturnType = [
  MutableRefObject<EditorRef | null>,
  Method
]

export const useEditor = () => {
  const editorRef = useRef<EditorRef | null>(null)
  const getInstance = () => {
    return editorRef.current
  }

  const getMdValue = () => {
    return getInstance()?.getValue()
  }

  return [editorRef, { getMdValue }] as ReturnType
}
