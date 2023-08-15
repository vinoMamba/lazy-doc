import { Input, Select ,Upload} from "antd";
import { FC } from "react";
import { ComponentType } from "./type";
import { ByteEditor } from "../Editor/ByteEditor";

const { TextArea } = Input

const compoentMap = new Map<ComponentType, FC>()

compoentMap.set('Input', Input)
compoentMap.set('TextArea', TextArea)
compoentMap.set('Select', Select)
compoentMap.set('ByteEditor', ByteEditor as FC)
compoentMap.set('Upload', Upload)

export {
  compoentMap
}
