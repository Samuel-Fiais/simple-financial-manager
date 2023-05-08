import * as C from './CardStyle'
import { IconType } from 'react-icons'

type CardProps = {
	icon: IconType,
	title: string,
	value: string
}

export const Card = (props: CardProps) => {
  return (
	<C.Container>
		<C.Header>
			<C.HeaderTitle>{props.title}</C.HeaderTitle>
			<props.icon />
		</C.Header>
		<C.Total>{props.value}</C.Total>
	</C.Container>
  )
}

export default Card