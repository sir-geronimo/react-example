import { Product } from "../../../api"

export type Props = {
  product: Product
}

export function ProductTableRow({ product }: Props) {
  const inStock = product.stocked
  const noStockProductStyle = {
    color: !inStock ? 'red' : undefined,
  }
  const productName = (
    <span style={noStockProductStyle}>{product.name}</span>
  )

  return (
    <tr>
      <td className="border px-8 py-4">{productName}</td>
      <td className="border px-8 py-4">{product.price}</td>
    </tr>
  )
}