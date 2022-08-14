import { Box, Container, Heading, ListItem, UnorderedList, useColorModeValue } from "@chakra-ui/react"
import Layout from "../../components/layouts/article"
import Section from "../../components/layouts/section"

const IgMemory = () => {
    const textColor = useColorModeValue("#1B1725", "#B9D8C2")


    return(
        <Layout>
            <Section delay = {0.1}>
                <Container maxW = "container.lg">
                    <Box mt = {20}>
                        <Heading as = "h2" variant = "page-title" fontWeight = "normal" color = {textColor} fontSize = {{base: 45, md: 50}}>
                            Topic 8 - Memory and Data Storage
                        </Heading>

                        <Box mt = {16} px = {8}>
                            <Heading as = "h2" variant = "sub-title" fontWeight = "normal" color = {textColor} fontFamily = "Outfit" fontSize = {{base: 36, md: 40}}>
                                Memory and Storage
                            </Heading>
                            <Box mt = {8} px = {10}>
                                <Heading as = "h3" fontWeight = "normal" color = {textColor} fontFamily = "Zacbel X" fontSize = {{base: 30, md: 35}}>
                                    Random Access Memory (RAM)
                                </Heading>
                                <Box mt = {5} px = {7} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    RAM refers to a volatile (meaning temporary) memory. Volatile memory loses its contents once power is lost to the component.

                                    <UnorderedList mt = {3} px = {8} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            SSDs are non-volatile as even if your laptop is shut down and there is no power, the contents are stored
                                        </ListItem>

                                        <ListItem py = {2}>
                                            RAMs are volatile as once your laptop is shut down, the contents are lost: e.g. Word Document File you were writing but auto-save was off and you didn't save before it was shutting down.
                                        </ListItem>
                                    </UnorderedList>
                                </Box>

                                <Box mt = {10} px = {7} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    It is used to store:

                                    <UnorderedList mt = {3} px = {8} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            Data
                                        </ListItem>

                                        <ListItem py = {2}>
                                            Files
                                        </ListItem>

                                        <ListItem py = {2}>
                                            Parts of the Operating System that are currently in use
                                        </ListItem>
                                    </UnorderedList>
                                </Box>

                                <Box mt = {10} px = {7} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    For IGCSE exams, we define RAM as so:

                                    <UnorderedList mt = {3} px = {8} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            The RAM stores the data, instructions and applications that are currently in use.
                                        </ListItem>
                                    </UnorderedList>
                                </Box>

                                <Box mt = {10} px = {7} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    RAM is much faster to write and read to, compared to the hard-drive (whether it is SSD or HDD), this is because:

                                    <UnorderedList mt = {3} px = {8} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            It is located much closer to the CPU
                                        </ListItem>

                                        <ListItem py = {2}>
                                            It has faster write/read speeds compared to the SSD/HDD
                                        </ListItem>
                                    </UnorderedList>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Section>
        </Layout>
    )
}

export default IgMemory