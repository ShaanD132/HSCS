import {Box, Heading, Container, Text, useColorModeValue} from "@chakra-ui/react"

const Page = () => {
    const textColor = useColorModeValue("#1B1725", "#DDD5D0")
    return(
        <Container maxW = "container.lg">
            <Box mt = {20}>
                <Heading as = "h2" variant = "page-title" fontWeight = "normal" color = {textColor}>
                    HSCS Welcomes You
                </Heading>
                <Box  px = {10} mt = {8} fontFamily = "Hibana" fontSize = {23}>
                    <p className = "logo-letters">H</p>igh-<p className = "logo-letters">S</p>chool <p className = "logo-letters">C</p>omputer <p className = "logo-letters">S</p>cience is a platform made for IGCSE and IB students. We aim to provide the support needed to pass their international examinations regarding Computer Science. <br /><br /> The website is still under construction.
                </Box>
            </Box>
            <Box mt = {16}>
                <Heading as = "h2" variant = "section-title" color = {textColor}>
                    IGCSE Topics
                </Heading>
            </Box>
        </Container>
    )
}

export default Page