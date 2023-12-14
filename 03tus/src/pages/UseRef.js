import { useRef, useState, useEffect} from 'react'

function UseRef() {
  const [ count, setCount ] = useState(180)

  let prevCount = useRef()
  useEffect(() => {
    console.log('Re-render')
    let idInterval = setInterval(() => {
      setCount(prev => {
        prevCount.current = prev
        return prev -1
      })
    }, 1000);
    return () => {
      clearInterval(idInterval)
    }
  }, [])

  console.log(`${count} - ${prevCount.current}`);
  return (
    <div>
      <h1>{count}</h1>
      <h3>UseRef</h3>

    </div>
  )
}

export default UseRef