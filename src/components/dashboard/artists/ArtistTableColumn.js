/* eslint-disable no-unused-vars */
import { h, toRaw } from 'vue'
import ArtistOptions from './ArtistOptions.vue'

export const artistColumns = [
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'gender',
    header: 'gender'
  },
  {
    accessorKey: 'first_release_year',
    header: 'First release year'
  },
  {
    accessorKey: 'no_of_albums_released',
    header: 'No of albums released'
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return h('div', { class: 'relative' }, h(ArtistOptions, { artistData: toRaw(row.original) }))
    }
  }
]
