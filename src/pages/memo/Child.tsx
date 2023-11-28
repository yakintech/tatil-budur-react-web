import React from 'react'

function Child() {

    console.log('Child Rendered!');

    return (
        <div>Child</div>
    )
}

export default React.memo(Child)