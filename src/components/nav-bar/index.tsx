import NavBarItem, { NavBarItemProps } from "./nav-bar-item"

export type NavBarProps = Partial<{
    logo: string,
    children: JSX.Element[]
}>

export default function NavBar({ logo, children, ...props }: NavBarProps) {
    return (
        <ul>
            <NavBarItem title="logo" url="/">
                <a href="/">
                    <img src="image.png" alt="my-logo" />
                </a>
            </NavBarItem>
            {children}
        </ul>
    )
}