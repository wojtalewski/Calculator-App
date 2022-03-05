import { useEffect, useRef } from 'react'

const useKeyPress = (key, cb) => {
  const callbackRef = useRef(cb)

  useEffect(() => {
    callbackRef.current = cb
  })

  useEffect(() => {
    const handle = (event) => {
      if (event.key === key) {
        callbackRef.current(event)
      }
    }

    document.addEventListener('keydown', handle)
    return () => document.removeEventListener('keydown', handle)
  }, [key])
}

export default useKeyPress
