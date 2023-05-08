import { useState } from 'react'
import * as C from './FormStyle'
import Transaction from '../../models/Transaction'
import Grid from '../Grid/Grid'

type FormProps = {
	onClick?: (transaction: Transaction) => void
	transactions: Transaction[]
	setItems: (transaction: Transaction[]) => void,
}

const Form = (props: FormProps) => {
	const [description, setDescription] = useState<string>("")
	const [amount, setAmount] = useState<number>(0)
	const [isExpense, setIsExpense] = useState<boolean>(false)

	const generateId = () => Math.round(Math.random() * 10000);

	const handleSave = () => {
		if (!description || !amount) {
			alert("Informe a descrição e o valor")
			return;
		}
		else if (amount < 1) {
			alert("O valor tem que ser positivo")
			return;
		}

		const newTransaction: Transaction = {
			id: generateId(),
			description,
			amount,
			expense: isExpense
		}

		props.onClick && props.onClick(newTransaction);

		setDescription("")
		setAmount(0)
	}

	return (
		<>
			<C.Container>

				<C.InputContent>
					<C.Label>Descrição</C.Label>
					<C.Input value={description} onChange={(e) => setDescription(e.target.value)}></C.Input>
				</C.InputContent>
				
				<C.InputContent>
					<C.Label>Valor</C.Label>
					<C.Input value={amount} type='number' onChange={(e) => setAmount(Number(e.target.value))}></C.Input>
				</C.InputContent>

				<C.RadioGroup>
					<C.Input
						type='radio'
						id='rIncome'
						defaultChecked
						name='group1'
						onChange={() => setIsExpense(!isExpense)}
					/>
					<C.Label htmlFor='rIncome'>Entrada</C.Label>

					<C.Input
						type='radio'
						id='rExpense'
						name='group1'
						onChange={() => setIsExpense(!isExpense)}
					/>
					<C.Label htmlFor='rExpense'>Saída</C.Label>
				</C.RadioGroup>

				<C.Button onClick={handleSave}>ADICIONAR</C.Button>

			</C.Container>

			<Grid items={props.transactions} setItems={props.setItems} />
		</>
	)
}

export default Form