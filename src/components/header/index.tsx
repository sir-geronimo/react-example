import NavBar from "../nav-bar";
import NavBarItem from "../nav-bar/nav-bar-item";

export default function Header() {
    return (
        <NavBar logo="Vite">
            <NavBarItem key="1" title="First" url="#" />
            <NavBarItem key="2" title="Second" url="#" />
            <NavBarItem key="3" title="Third" url="#" />
        </NavBar>
    )
}