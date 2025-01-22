import React, { useEffect,useState } from 'react'

function Github() {
    const [Data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((response) => response.json())
        .then((data) => setData(data))

    }, [])
  return (
    <div>
      Github followers: {Data.followers}
    </div>
  )
}

export default Github
