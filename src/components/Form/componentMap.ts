import { Input, Select } from "antd";
import { FC } from "react";
import { ComponentType } from "./type";
import { ByteEditor } from "../Editor/ByteEditor";

const { TextArea } = Input

const compoentMap = new Map<ComponentType, FC>()

compoentMap.set('Input', Input)
compoentMap.set('TextArea', TextArea)
compoentMap.set('Select', Select)
compoentMap.set('ByteEditor', ByteEditor as FC)

export {
  compoentMap
}
