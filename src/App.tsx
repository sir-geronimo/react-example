import products from "./api"
import { FilterableProductTable } from "./components/filterable-product-table"

export const App = () => {
  return (
    <div>
      <FilterableProductTable products={products} />
    </div>
  )
}
