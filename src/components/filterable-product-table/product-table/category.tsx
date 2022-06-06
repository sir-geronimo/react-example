export type Props = {
  category: string,
}

export function ProductTableCategory({ category }: Props) {
  return (
    <tr>
      <th colSpan={2} className="border bg-blue-50 px-8 py-4">
        {category}
      </th>
    </tr>
  )
}