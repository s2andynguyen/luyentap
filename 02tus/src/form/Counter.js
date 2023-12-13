import React, { useEffect, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log('useEffect :>> ');
    setTotal(() => count * 2)
  }, [count])

  console.log('render :>> ');

  return (
    <div>
      <h3>Counter</h3>
      <h1>count: {count}</h1>
      <h5>total: {total}</h5>
      <button onClick={() => setCount(prev => prev+1)}>Count</button>
    </div>
  )
}

export default Counter