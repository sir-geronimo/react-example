import { FC } from "react"

export type Props = {
    category: string,
}

export const ProductTableCategory: FC<Props> = ({ category }) => {
    return (
        <tr>
            <th colSpan={2} className="border bg-blue-50 px-8 py-4">
                { category }
            </th>
        </tr>
    )
}