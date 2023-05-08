import * as C from './GridItemStyle'
import {
	FaRegArrowAltCircleUp,
	FaRegArrowAltCircleDown,
	FaTrash
} from 'react-icons/fa'
import Transaction from '../../models/Transaction'

type GridItemProps = {
	key: number,
	item: Transaction,
	onDelete: (id: number) => void
}

const GridItem = (props: GridItemProps) => {
  return (
	<C.Tr>
		<C.Td>{props.item.description}</C.Td>
		<C.Td>{props.item.amount}</C.Td>
		<C.Td alignCenter>
			{
				props.item.expense ? (
					<FaRegArrowAltCircleDown color='red' />
				) : (
					<FaRegArrowAltCircleUp color='green' />
				)
			}
		</C.Td>
		<C.Td alignCenter>
			<FaTrash onClick={() => props.onDelete(props.item.id)} />
		</C.Td>
	</C.Tr>
  )
}

export default GridItem