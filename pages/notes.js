import { Container, Box, Heading, useColorModeValue } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/layouts/section"

const Notes = () => {
    const textColor = useColorModeValue("#1B1725", "#B9D8C2")
    return(
        <Layout>
            <Container maxW = "container.lg">
                <Section delay = {0.1}>
                    <Box mt = {20}>
                        <Heading as = "h2" variant = "page-title" fontWeight = "normal" color = {textColor}>
                            HSCS Welcomes You
                        </Heading>
                        <Box  px = {10} mt = {8} fontFamily = "Hibana" fontSize = {23}>
                            <p className = "logo-letters">H</p>igh-<p className = "logo-letters">S</p>chool <p className = "logo-letters">C</p>omputer <p className = "logo-letters">S</p>cience is a platform made for IGCSE and IB students. We aim to provide the support needed to pass their international examinations regarding Computer Science. <br /><br /> The website is still under construction.
                        </Box>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Notes