export type NavBarItemProps = {
    title: string,
    url: string,
    children?: JSX.Element,
}

export default function NavBarItem({ title, url, ...props }: NavBarItemProps) {
    const defaultElement = <a href={url}>{title}</a>
    
    return (
        <li>
            { props.children ?? defaultElement }
        </li>
    )
}