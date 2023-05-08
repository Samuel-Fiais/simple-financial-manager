import { createRoot } from "react-dom/client"
import App from "./App"

const element: Element | null = document.querySelector('#root')

if (element != null) {
	const root = createRoot(element)
	root.render(<App />)
}
else throw new Error('Root element not found')