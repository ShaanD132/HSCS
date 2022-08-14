import { Container, Box, Heading, useColorModeValue } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/layouts/section"
import Igcse from "../components/igcse"

const Notes = () => {
    const textColor = useColorModeValue("#1B1725", "#B9D8C2")
    return(
        <Layout>
            <Container maxW = "container.lg">
                <Section delay = {0.1}>
                    <Box mt = {20}>
                        <Heading as = "h2" variant = "page-title" fontWeight = "normal" color = {textColor} fontSize = {{base: 30,  sm: 40, md: 50}}>
                            Under Construction
                        </Heading>
                        <Box  px = {{base: 0, md: 10}} mt = {8} fontFamily = "Hibana" fontSize = {{base: 20, md: 23}}>
                            The Notes section is still under construction and should be ready by 29/08/22. Please be patient until then.
                        </Box>
                    </Box>
                </Section>

                <Section delay = {0.3}>
                    <Box mt = {20}>
                        <Igcse />
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Notes