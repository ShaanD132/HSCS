import {Container, Text} from "@chakra-ui/react"

const Footer = () => {
    return(
        <Container maxW = "container.lg" mt = {28}>
            <Container  align = "center">
                <Text fontSize = {14} fontFamily = "altertype">Designed and Developed by <a href = "https://shaan-d.mareliafarm.online" target = "__blank">Shaan Dussoye</a></Text>
            </Container>
        </Container>
    )
}

export default Footer