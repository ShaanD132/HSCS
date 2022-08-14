import { Container, Box, Heading, useColorModeValue} from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/layouts/section"

const QuestionBank = () => {
    const textColor = useColorModeValue("#1B1725", "#B9D8C2")
    return(
        <Layout>
            <Container maxW = "container.lg">
                <Section delay = {0.1}>
                    <Box mt = {20}>
                        <Heading as = "h2" variant = "page-title" fontWeight = "normal" color = {textColor}>
                            Under Construction
                        </Heading>
                        <Box  px = {10} mt = {8} fontFamily = "Hibana" fontSize = {23}>
                            The Contact section is still under construction and should be ready by 14/09/22. Please be patient until then.
                        </Box>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default QuestionBank