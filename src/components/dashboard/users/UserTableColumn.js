/* eslint-disable no-unused-vars */
import { h } from 'vue'
import UserOptions from './UserOptions.vue'

export const userColumns = [
  {
    accessorKey: 'first_name',
    header: 'First Name'
  },
  {
    accessorKey: 'last_name',
    header: 'Last Name'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'gender',
    header: 'Gender'
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return h('div', { class: 'relative' }, h(UserOptions))
    }
  }
]
