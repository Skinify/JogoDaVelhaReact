import React from 'react'

interface Props{
    Children: Function,
    size: number,
    color: string
}

const Icon : React.FC<Props> = ({Children, size, color}) => {
    return(
        <Children size={size} color={color}></Children>
    )
}

export default Icon;