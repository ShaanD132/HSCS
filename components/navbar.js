import NextLink from "next/link"
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import ThemeToggle from "../components/theme-toggle.js"

const LinkItem = ({href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900")
    return(
        <NextLink href = {href}>
            <Link
            py = {1.5}
            px = {3}
            fontSize = {17.2}
            borderRadius = {50}
            bg = {active ? "accentColor" : undefined}
            color = {active ? "white" : inactiveColor}
            fontFamily = "Teriyake"
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
        as = "nav"
        w = "100%"
        bg = {useColorModeValue("#e7dfc6", "#1B1725")}
        style = {{backdropFilter: "blur(10px)"}}
        zIndex = {1}
        {...props}>

            <Container display = "flex"
            p = {2} maxW = "container.lg"
            wrap = "wrap"
            align = "center"
            justify = "space-between">
                <Flex align = "center" mt = {2} mr = {5} ml = {3}>
                    <NextLink href = "/" path = {path}>
                        <a>
                            <Heading as = "h1" fontSize = {30} fontFamily = "Trap" fontWeight = "normal" color = "#A60067">
                                HSCS
                            </Heading>
                        </a>
                    </NextLink>
                </Flex>

                <Stack
                direction = {{base: "column", md: "row"}}
                display = {{base: "none", md: "flex"}}
                width = {{base: "full", md: "auto"}}
                align = "center"
                alignItems = "center"
                flexGrow = {1}
                spacing = {10}
                ml = {5}
                mt = {{base: 4, nmd: 0}}
                >

                <LinkItem href = "/notes" path = {path}>
                    Notes
                </LinkItem>

                <LinkItem href = "/qb" path = {path}>
                    Question Bank
                </LinkItem>

                <LinkItem href = "/contact" path = {path}>
                    Contact Us
                </LinkItem>
                </Stack>

                <Box flex = {1} align = "right">
                    <ThemeToggle />
                    <Box ml = {2} display = {{base: "inline-block", md: "none"}}>
                        <Menu>
                            <MenuButton as = {IconButton} icon = {<HamburgerIcon/>} variant = "outline" aria-label = "Options" />
                            <MenuList bg = {useColorModeValue("#F0E68C", "#555555")}>
                                <NextLink href = "/" passHref>
                                    <MenuItem as = {Link}>About Us</MenuItem>
                                </NextLink>
                                <NextLink href = "/notes" passHref>
                                    <MenuItem as = {Link}>Notes</MenuItem>
                                </NextLink>
                                <NextLink href = "/qb" passHref>
                                    <MenuItem as = {Link}>Question Bank</MenuItem>
                                </NextLink>
                                <NextLink href = "/contact" passHref>
                                    <MenuItem as = {Link}>Contact Us</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>

            </Container>

        </Box>
    )
}

export default Navbar