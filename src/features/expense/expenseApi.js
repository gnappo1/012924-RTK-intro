const baseUrl = "http://localhost:3000/expenses"

export const getExpenses = async () => {
    try {
        const response = await fetch(baseUrl)
        const data = await response.json()
        if (response.ok) {
            return data
        }
        throw new Error(data)
        
    } catch (error) {
        return error
    }
}