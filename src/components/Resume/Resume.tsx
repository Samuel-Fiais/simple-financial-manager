import React from 'react'
import * as C from './ResumeStyle'
import Card from '../Card/Card'
import {
	FaRegArrowAltCircleUp,
	FaRegArrowAltCircleDown,
	FaDollarSign
} from 'react-icons/fa'

type ResumeProps = {
	income: string,
	expense: string,
	total: string
}

const Resume = (props: ResumeProps) => {
  return (
	<C.Container>
		<Card title="Entradas" icon={FaRegArrowAltCircleUp} value={props.income} />
		<Card title="Saídas" icon={FaRegArrowAltCircleDown} value={props.expense} />
		<Card title="Total" icon={FaDollarSign} value={props.total} />
	</C.Container>
  )
}

export default Resume