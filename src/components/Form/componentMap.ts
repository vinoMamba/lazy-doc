import { Input } from "antd";
import { FC } from "react";
import { ComponentType } from "./type";

const compoentMap = new Map<ComponentType, FC>()

compoentMap.set('Input', Input)

export {
  compoentMap
}
