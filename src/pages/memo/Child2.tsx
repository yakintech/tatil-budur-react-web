
import React, { useMemo } from 'react'

function Child2() {

    const getRandom = () => {
        return Math.random() * 100;
    }

    const random = useMemo(() => {
        return getRandom();
    }, [])



  return (<>
            <h1>{random}</h1>
  </>  )
}

export default  Child2