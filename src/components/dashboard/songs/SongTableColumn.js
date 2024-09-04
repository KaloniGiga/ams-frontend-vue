/* eslint-disable no-unused-vars */
import { h } from "vue"
import SongOptions from "./SongOptions.vue"

export const songColumns = [
  {
    accessorKey: 'title',
    header: 'Title'
  },
  {
    accessorKey: 'album_name',
    header: 'Album'
  },
  {
    accessorKey: 'genre',
    header: 'Genre'
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return h('div', { class: 'relative' }, h(SongOptions))
    }
  }
]
