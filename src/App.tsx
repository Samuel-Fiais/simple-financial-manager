import { useState, useEffect } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header/Header";
import Resume from "./components/Resume/Resume";
import Form from "./components/Form/Form";
import Transaction from "./models/Transaction";

const App = () => {
	const data = localStorage.getItem("transactions")
	const [transactions, setTransactions] = useState<Transaction[]>(
		data ? JSON.parse(data) : []
	)
	const [income, setIncome] = useState<string>("")
	const [expense, setExpense] = useState<string>("")
	const [total, setTotal] = useState<string>("")

	useEffect(() => {
		const amountExpense = transactions
			.filter((item: Transaction) => item.expense)
			.map((item: Transaction) => item.amount)

		const amountIncome = transactions
			.filter((item: Transaction) => !item.expense)
			.map((item: Transaction) => item.amount)

		const expense = Number(amountExpense.reduce((acc: number, cur: number) => acc + cur, 0).toFixed(2))
		const income = Number(amountIncome.reduce((acc: number, cur: number) => acc + cur, 0).toFixed(2))

		const total = Math.abs(income - expense).toFixed(2)

		setIncome(`R$ ${income}`)	
		setExpense(`R$ ${expense}`)
		setTotal(`${income < expense ? '-' : ''}R$ ${total}`)

	}, [transactions])

	const handleAdd = (transaction: Transaction) => {
		const newArrayTransaction = [...transactions, transaction]
		setTransactions(newArrayTransaction)

		localStorage.setItem('transactions', JSON.stringify(newArrayTransaction))
	}

	return (
		<>
			<Header />
			<Resume income={income} expense={expense} total={total} />
			<Form onClick={handleAdd} transactions={transactions} setItems={setTransactions}/>
			<GlobalStyle />
		</>
	);
}

export default App