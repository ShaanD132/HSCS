import {OrderedList, Link, ListItem, Box, Heading, useColorModeValue, UnorderedList} from "@chakra-ui/react"
import NextLink from "next/link"

const Igcse = () => {
    const textColor = useColorModeValue("#1B1725", "#B9D8C2")

    return(
        <Box>
            <Heading as = "h2" variant = "page-title" fontWeight = "normal" color = {textColor} fontSize = {{base: 30, sm: 40,  md: 50}}>
                IGCSE Computer Science - 0478
            </Heading>
            <Box px = {{base: 0, md: 10}} mt = {8} fontFamily = "Hibana" fontSize = {{base: 20, md: 23}}>
                <OrderedList>
                <ListItem py = {1}>
                    Binary Systems and Hexadecimal

                        <UnorderedList fontSize = {{base: 18, md: 20}} py = {1} ml = {{base: 8, md: 14}}>
                            <ListItem py = {1}>
                                Binary System
                            </ListItem>

                            <ListItem py = {1}>
                                Hexadecimal System
                            </ListItem>
                        </UnorderedList>
                </ListItem>

                <NextLink href = "/igcse/communication" passHref>
                    <Link>
                        <ListItem py = {1}>
                            Communication and Internet Technologies

                            <UnorderedList fontSize = {{base: 18, md: 20}} py = {1} ml = {{base: 8, md: 14}}>
                                    <ListItem py = {1}>
                                        Data Transmission
                                    </ListItem>

                                    <ListItem py = {1}>
                                        Error-Checking Methods
                                    </ListItem>

                                    <ListItem py = {1}>
                                        Internet Technologies
                                    </ListItem>
                                </UnorderedList>
                        </ListItem>
                    </Link>
                </NextLink>

                <ListItem py = {1}>
                    Logic Gates and Logic Circuits

                    <UnorderedList fontSize = {{base: 18, md: 20}} py = {1} ml = {{base: 8, md: 14}}>
                            <ListItem py = {1}>
                                Logic Gates + Truth Tables
                            </ListItem>

                            <ListItem py = {1}>
                                Logic Circuits
                            </ListItem>
                        </UnorderedList>
                </ListItem>

                <ListItem py = {1}>
                    Operating Systems and Computer Architecture

                    <UnorderedList fontSize = {{base: 18, md: 20}} py = {1} ml = {{base: 8, md: 14}}>
                            <ListItem py = {1}>
                                Operating Systems
                            </ListItem>

                            <ListItem py = {1}>
                                Computer Architecture
                            </ListItem>

                            <ListItem py = {1}>
                                Fetch-Execute Cycle
                            </ListItem>
                        </UnorderedList>
                </ListItem>

                <ListItem py = {1}>
                    Input and Output Devices

                    <UnorderedList fontSize = {{base: 18, md: 20}} py = {1} ml = {{base: 8, md: 14}}>
                            <ListItem py = {1}>
                                Input Devices
                            </ListItem>

                            <ListItem py = {1}>
                                Output Devices
                            </ListItem>
                        </UnorderedList>
                </ListItem>


                <NextLink href = "/igcse/memory" passHref>
                    <Link>
                        <ListItem py = {1}>
                            Memory and Data Storage

                            <UnorderedList fontSize = {{base: 18, md: 20}} py = {1} ml = {{base: 8, md: 14}}>
                                    <ListItem py = {1}>
                                        File Formats and Compression
                                    </ListItem>

                                    <ListItem py = {1}>
                                        Memory and Storage
                                    </ListItem>
                                </UnorderedList>
                        </ListItem>
                    </Link>
                </NextLink>

                <ListItem py = {1}>
                    High-Level and Low-Level Languages

                    <UnorderedList fontSize = {{base: 18, md: 20}} py = {1} ml = {{base: 8, md: 14}}>
                            <ListItem py = {1}>
                                Programming Languages
                            </ListItem>

                            <ListItem py = {1}>
                                Translators
                            </ListItem>
                        </UnorderedList>
                </ListItem>

                <ListItem py = {1}>
                    Security and Ethics

                    <UnorderedList fontSize = {{base: 18, md: 20}} py = {1} ml = {{base: 8, md: 14}}>
                            <ListItem py = {1}>
                                Security and Data Integrity
                            </ListItem>

                            <ListItem py = {1}>
                                Data Loss and Data Corruption
                            </ListItem>

                            <ListItem py = {1}>
                                Security Protocols
                            </ListItem>

                            <ListItem py = {1}>
                                Computer Ethics
                            </ListItem>

                            <ListItem py = {1}>
                                Types of Software
                            </ListItem>
                        </UnorderedList>
                </ListItem>

                <ListItem py = {1}>
                    Revision Tips

                    <UnorderedList fontSize = {{base: 18, md: 20}} py = {1} ml = {{base: 8, md: 14}}>
                            <ListItem py = {1}>
                                How to Study during the Year
                            </ListItem>

                            <ListItem py = {1}>
                                How to Study before Exams
                            </ListItem>
                        </UnorderedList>
                </ListItem>
                </OrderedList>
            </Box>
        </Box>

    )
}

export default Igcse