import React from "react"
import Transaction from "../../models/Transaction"
import * as C from "./GridStyle"
import GridItem from "../GridItem/GridItem"

export type GridProps = {
	items: Transaction[],
	setItems: (transaction: Transaction[]) => void,
	alignItems?: string,
	width?: number

}

function Grid(props: GridProps) {

	const onDelete = (id: number) => {
		const newArray: Transaction[] = props.items.filter((transaction) => transaction.id != id)
		props.setItems(newArray)
		localStorage.setItem('transactions', JSON.stringify(newArray))
	}

	return (
		<C.Table>
			<C.Thead>
				<C.Tr>
					<C.Th width={40}>Descrição</C.Th>
					<C.Th width={40}>Valor</C.Th>
					<C.Th width={10} alignCenter></C.Th>
					<C.Th width={10}></C.Th>
				</C.Tr>
			</C.Thead>
			<C.Tbody>
				{
					props.items.map((item, index) => (
						<GridItem key={index} item={item} onDelete={onDelete} />
					))
				}
			</C.Tbody>
		</C.Table>
	)
}

export default Grid