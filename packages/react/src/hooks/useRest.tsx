import { useState } from "react";

function useRest() {
  const [addResult, setAddResult] = useState<number | null>(null)
  const [subResult, setSubResult] = useState<number | null>(null)

  const handleAdd = async (num1: number, num2: number) => {
    const response = await fetch(`/api/rest/v1/add/${num1}/${num2}`)
    const json = await response.json()
    setAddResult(json.data)
  }

  const handleSubtract = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent page reload
    const formData = new FormData(e.currentTarget)
    const num1 = formData.get('num1')
    const num2 = formData.get('num2')
    
    const response = await fetch(`/api/rest/v1/sub?num1=${num1}&num2=${num2}`)
    const json = await response.json()
    setSubResult(json.data)
  }

  return { addResult, subResult, handleAdd, handleSubtract };
}

export default useRest;