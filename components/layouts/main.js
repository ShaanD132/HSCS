import Head from "next/head"
import { Box, Container } from "@chakra-ui/react"
import Navbar from "../navbar.js"
import Footer from "../footer.js"

const Main = ({children, router}) => {
    return(
        <Box as = "main" pb = {8}>
            <Head>
                <meta name = "viewport" content = "width = device-width, initial-scale = 1" />
                <title>HSCS</title>
            </Head>

            <Navbar path = {router.asPath} zIndex = {1} />

            <Container maxW  = "container.xl" pt = {32} zIndex = {5}>
                {children}
            </Container>

            <Footer />

        </Box>
    )
}

export default Main