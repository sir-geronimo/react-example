import { ChangeEvent, useState } from 'react'
import { SearchBar } from './search-bar'
import { ProductTable } from './product-table'
import { Product } from '../../api'

export type Props = {
  products: Product[]
}

export type State = {
  term: string,
  inStockOnly: boolean,
}

export function FilterableProductTable({ products }: Props) {
  const [state, setState] = useState<State>({
    term: '',
    inStockOnly: false,
  })

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, term: event.target.value })
  }
  const handleInStockOnlyChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked

    setState({ ...state, inStockOnly: checked })
  }

  return (
    <div className="container mx-auto">
      <SearchBar
        filter={state.term}
        inStockOnly={state.inStockOnly}
        onFilterChange={handleFilterChange}
        onInStockOnlyChange={handleInStockOnlyChange}
      />
      <ProductTable
        products={products}
        filter={state.term}
        inStockOnly={state.inStockOnly}
      />
    </div>
  )
}