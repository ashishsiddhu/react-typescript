interface Type {
    heading: string
}
const Header: React.FC<Type> = (props) => {
    return (
        <header>{props.heading}</header>
    )
}

export default Header;