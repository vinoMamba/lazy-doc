import {
  TiptapImage,
  TiptapLink,
  TaskList,
  TaskItem,
  HorizontalRule,
  StarterKit,
  Placeholder,
} from "novel/extensions";

import Table from '@tiptap/extension-table'
import { } from "@tiptap/extension-table"
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'

import { cx } from "class-variance-authority";

// TODO I am using cx here to get tailwind autocomplete working, idk if someone else can write a regex to just capture the class key in objects

// You can overwrite the placeholder with your own configuration

const CustomTable = Table.extend({
  addKeyboardShortcuts() {
    return {
      'Mod-Enter': () => {
        if (!this.editor.can().goToNextCell()) {
          const $table = this.editor.$node("table")
          if ($table?.to) {
            console.log(this.editor.getJSON())
            console.log(this.editor.$node('table')?.attributes)
          }
        }
        return true
      },
      Tab: () => {
        if (this.editor.commands.goToNextCell()) {
          return true
        }
        if (!this.editor.can().addRowAfter()) {
          return false
        }
        return this.editor.chain().addRowAfter().goToNextCell().run()
      },
      'Shift-Tab': () => this.editor.commands.goToPreviousCell(),
    }
  }
})

const table = Table.configure({
  resizable: true,
})
const tableHeader = TableHeader
const tableRow = TableRow
const tableCell = TableCell


const placeholder = Placeholder;
const tiptapLink = TiptapLink.configure({
  HTMLAttributes: {
    class: cx(
      "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
    ),
  },
});

const taskList = TaskList.configure({
  HTMLAttributes: {
    class: cx("not-prose pl-2"),
  },
});
const taskItem = TaskItem.configure({
  HTMLAttributes: {
    class: cx("flex items-start my-4"),
  },
  nested: true,
});

const horizontalRule = HorizontalRule.configure({
  HTMLAttributes: {
    class: cx("mt-4 mb-6 border-t border-muted-foreground"),
  },
});

const starterKit = StarterKit.configure({
  bulletList: {
    HTMLAttributes: {
      class: cx("list-disc list-outside leading-3 -mt-2"),
    },
  },
  orderedList: {
    HTMLAttributes: {
      class: cx("list-decimal list-outside leading-3 -mt-2"),
    },
  },
  listItem: {
    HTMLAttributes: {
      class: cx("leading-normal -mb-2"),
    },
  },
  blockquote: {
    HTMLAttributes: {
      class: cx("border-l-4 border-primary"),
    },
  },
  codeBlock: {
    HTMLAttributes: {
      class: cx("rounded-sm bg-muted border p-5 font-mono font-medium"),
    },
  },
  code: {
    HTMLAttributes: {
      class: cx("rounded-md bg-muted  px-1.5 py-1 font-mono font-medium"),
      spellcheck: "false",
    },
  },
  horizontalRule: false,
  dropcursor: {
    color: "#DBEAFE",
    width: 4,
  },
  gapcursor: false,
});

export const defaultExtensions = [
  starterKit,
  placeholder,
  tiptapLink,
  TiptapImage,
  taskList,
  taskItem,
  horizontalRule,
  table,
  tableCell,
  tableHeader,
  tableRow,
];
