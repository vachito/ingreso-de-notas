import { h } from 'vue'
import type { ColumnDef } from '@tanstack/vue-table'
import DropdownAction from '@/components/payments/data-table-dropdown.vue'
interface Payment {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: () => h('div', {class: 'text-center'}, 'Id'),
    cell: ({ row }) => {
        return[
            h('div', { class: 'text-center font-medium' }, row.getValue('id')),
        ]
    },
  },
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-center' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('es-GT', {
        style: 'currency',
        currency: 'GTQ',
      }).format(amount);
      return h('div', { class: 'text-center font-medium' }, formatted)
    },
  },
  {
    accessorKey: 'status',
    header: () => h('div', {class: 'text-center'}, 'Status'),
    cell: ({ row }) => {
        return[
            h('div', { class: 'text-center font-medium' }, row.getValue('status')),
        ]
    },
  },
  {
    accessorKey: 'email',
    header: () => h('div', {class: 'text-center'}, 'email'),
    cell: ({ row }) => {
        return[
            h('div', { class: 'text-center font-medium' }, row.getValue('email')),
        ]
    },
  },
  {
    id: 'actions',
    enableHiding: true,
    cell: ({ row }) => {
      const payment = row.original

      return h('div', { class: 'relative' }, h(DropdownAction, {
        payment,
      }))
    },
  },
]
