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
                        <Heading as = "h2" variant = "page-title" fontWeight = "normal" color = {textColor} fontSize = {{base: 30, sm: 40, md: 45}}>
                            Topic 8 - Memory and Data Storage
                        </Heading>

                        <Box mt = {{base: 8, sm: 14}} px = {{base: 0, md: 10}}>
                            <Heading as = "h2" variant = "sub-title" fontWeight = "normal" color = {textColor} fontFamily = "Meedori Regular" fontSize = {{base: 36, sm: 36, md: 40}}>
                                Memory and Storage
                            </Heading>
                            <Box mt = {8} px = {{base: 0, md: 10}}>
                                <Heading as = "h3" fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    Random Access Memory (RAM)
                                </Heading>
                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    RAM refers to a volatile (meaning temporary) memory. Volatile memory loses its contents once power is lost to the component.

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            SSDs are non-volatile as even if your laptop is shut down and there is no power, the contents are stored
                                        </ListItem>

                                        <ListItem py = {2}>
                                            RAMs are volatile as once your laptop is shut down, the contents are lost: e.g. Word Document File you were writing but auto-save was off and you didn&apos;t save before it was shutting down.
                                        </ListItem>
                                    </UnorderedList>
                                </Box>

                                <Box mt = {10} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    It is used to store:

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
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

                                <Box mt = {10} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    For IGCSE exams, we define RAM as so:

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            The RAM stores the data, instructions and applications that are currently in use.
                                        </ListItem>
                                    </UnorderedList>
                                </Box>

                                <Box mt = {10} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    RAM is much faster to write and read to, compared to the hard-drive (whether it is SSD or HDD), this is because:

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            It is located much closer to the CPU
                                        </ListItem>

                                        <ListItem py = {2}>
                                            It has faster write/read speeds compared to the SSD/HDD
                                        </ListItem>
                                    </UnorderedList>
                                </Box>
                            </Box>
                            <Box mt = {8} px = {{base: 0, md: 10}}>
                                <Heading as = "h3" fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 30, md: 35}}>
                                    Dynamic Random Access Memory (DRAM)
                                </Heading>
                                <Box mt = {5} px = {{base: 0, md: 8}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    There are several chips on a DRAM board. Each chip contains a number of transistors and capacitors.
                                </Box>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Capacitors hold charge (electrical current).

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            A capacitor that holds charge corresponds to a bit value of 1
                                        </ListItem>

                                        <ListItem py = {2}>
                                            A capacitor that does not hold charge corresponds to a bit value of 0
                                        </ListItem>

                                        <ListItem py = {2}>
                                            (imagine converting analogue data to digital data - electrical current present = 1, current not present = 0)
                                        </ListItem>
                                    </UnorderedList>
                                </Box>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Transistors act as a switch - they allow the chip control circuitry to read the capacitor and they change the capacitor&aposs value
                                </Box>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    DRAM has to be constantly refreshed, this is so that the capacitors can retiain their charge. For example:

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            Imagine we are looking at a specific piece of data for 2 exact minutes (text file), if we do not keep supplying charge to the capacitors that are meant to show a binary value of 1, the data that is being shown will change as capacitors do not hold charge by themselves for a long period.
                                        </ListItem>

                                        <ListItem py = {2}>
                                            Capicitors hold their charge for 15 microseconds before having to be &aposrefreshed&apos. i.e. filled with charge again
                                        </ListItem>
                                    </UnorderedList>
                                </Box>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    DRAMs have the following advantages over SRAM

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            They are much less expensive to manufacture
                                        </ListItem>

                                        <ListItem py = {2}>
                                            They consume less power
                                        </ListItem>

                                        <ListItem py = {2}>
                                            They have a higher storage capacity
                                        </ListItem>
                                    </UnorderedList>
                                </Box>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    DRAMs have the following advantages over SRAM

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            They are much less expensive to manufacture
                                        </ListItem>

                                        <ListItem py = {2}>
                                            They consume less power
                                        </ListItem>

                                        <ListItem py = {2}>
                                            They have a higher storage capacity
                                        </ListItem>
                                    </UnorderedList>
                                </Box>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    The name Dynamic RAM comes from the fact that it has to be refreshed constantly
                                </Box>

                            </Box>
                            <Box mt = {8} px = {{base: 0, md: 10}}>
                                <Heading as = "h3" fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 30, md: 35}}>
                                    Static Random Access Memory (SRAM)
                                </Heading>

                                <Box mt = {5} px = {{base: 0, md: 8}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    SRAM does not need to be constantly refreshed unlike DRAM.
                                </Box>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    It uses &aposflip flops&apos to store each bit of memory
                                </Box>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    SRAM is much faster than DRAM in terms of memory access speeds.

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            Access time for SRAM = 25 nanoseconds
                                        </ListItem>

                                        <ListItem py = {2}>
                                            Access time for DRAM = 60 nanoseconds
                                        </ListItem>
                                    </UnorderedList>
                                </Box>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    The name Static Ram comes from the fact that it does not have to be refreshed constantly
                                </Box>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    DRAM is used in most computers but when speed is vital, SRAM is used
                                </Box>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    An example would be the Cache Memory in your computer:

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            The Cache Memory is even closer to the CPU than the RAM and has even higher read/write speeds than the RAM, but it has a low memory capacity
                                        </ListItem>

                                        <ListItem py = {2}>
                                            Since Cache Memory is meant to be faster than the RAM, SRAM is used (this choice is made while creating the computers) while standard computer RAM uses DRAM.
                                        </ListItem>

                                        <ListItem py = {2}>
                                            The Cache Memory stores data or instructions that are frequently used (most applications use the same data and instructions several times, thus these are stored in the cache memory so that the computer operates faster)
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