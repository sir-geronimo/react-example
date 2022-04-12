import { FC } from "react"
import { Product } from "../../../api"

export type Props = {
    product: Product
}

export const ProductTableRow: FC<Props> = ({ product }) => {
    const inStock = product.stocked
    const productName = (
        <span style={{ color: !inStock ? 'red' : undefined }}>
            { product.name }
        </span>
    )

    return (
        <tr>
            <td className="border px-8 py-4">{ productName }</td>
            <td className="border px-8 py-4">{ product.price }</td>
        </tr>
    )
}