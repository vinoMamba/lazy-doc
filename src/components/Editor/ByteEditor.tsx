import 'bytemd/dist/index.min.css'
import { Viewer } from '@bytemd/react'
import { FC } from 'react'
import gfm from '@bytemd/plugin-gfm'
import emoji from '@bytemd/plugin-gemoji'
import breaks from '@bytemd/plugin-breaks'
import format from '@bytemd/plugin-frontmatter'
import highlight from '@bytemd/plugin-highlight'
import zoom from '@bytemd/plugin-medium-zoom'
import 'highlight.js/styles/atom-one-dark.css'
import "juejin-markdown-themes/dist/geek-black.css"


type Props = {
  value: string
}
const plugins = [
  breaks(),
  format(),
  gfm(),
  emoji(),
  highlight(),
  zoom(),
]

export const ByteEditor: FC<Props> = ({ value }) => {
  return (
    <div>
      <Viewer plugins={plugins} value={value} />
    </div>
  )
}
