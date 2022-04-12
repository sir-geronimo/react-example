import { FC } from "react";
import { Product } from "../../../api";
import { ProductTableCategory } from "./category";
import { ProductTableRow } from "./row";

export type Props = {
    products: Product[]
    filter: string
    inStockOnly: boolean
}

export const ProductTable: FC<Props> = ({ 
    products, 
    inStockOnly, 
    filter = ''
}) => {
    
    let lastCategory: string;
    const rows: JSX.Element[] = []

    products.forEach((product, index) => {
        const productName = product.name.toLowerCase()
        const productToFilter = filter.toLowerCase()

        if (!productName.includes(productToFilter)) {
            return
        }

        if (inStockOnly && !product.stocked) {
            return
        }

        if (product.category !== lastCategory) {
            lastCategory = product.category

            rows.push(
                <ProductTableCategory
                    key={`category-${index}`}
                    category={product.category}
                />
            )
        }

        rows.push(
            <ProductTableRow
                key={index}
                product={product}
            />
        )
    })

    if (rows.length === 0) {
        rows.push(
            <tr>
                <td colSpan={2} className="p-10 text-center text-3xl">
                    <span>No entries! 😞😭</span>
                </td>
            </tr>
            
        )
    }

    return (
        <table className="table-fixed shadow-lg bg-white min-w-full">
            <thead>
                <tr>
                    <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
                    <th className="bg-blue-100 border text-left px-8 py-4"  >Price</th>
                </tr>
            </thead>
            <tbody>{ rows }</tbody>
        </table>
    )
}