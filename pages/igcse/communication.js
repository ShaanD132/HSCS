import { Box, Container, Heading, ListItem, OrderedList, UnorderedList, Image, useColorModeValue, Link, IconButton, Text } from "@chakra-ui/react"
import Layout from "../../components/layouts/article"
import Section from "../../components/layouts/section"
import { ChevronUpIcon } from "@chakra-ui/icons"

const Communication = () => {
    const textColor = useColorModeValue("#1B1725", "#B9D8C2")

    return(
        <Layout>
            <Section delay = {0.1}>
                <Container maxW = "container.lg">
                    <Container position = "fixed" maxW = "container.lg" className = "scroll-container">
                        <Link href = "#top" className = "scroll-top"><IconButton borderRadius = {100}  aria-label = "back-to-top" icon = {<ChevronUpIcon />} size = "lg" color = "white" /></Link>
                    </Container>

                    <Box>
                        <Heading as = "h2" pt = {3} variant = "page-title" fontWeight = "normal" color = {textColor} fontSize = {{base: 30, sm: 40, md: 45}} id = "top">
                            Topic 2 - Communication and Internet Technologies
                        </Heading>

                        <Box mt = {{base: 5, sm: 10}} px = {{base: 0, md: 10}}>
                            <Heading as = "h2" fontWeight = "normal" color = {textColor} fontFamily = "Meedori Regular" fontSize = {{base: 27, sm: 35, md: 40}}>
                                Table of Contents
                            </Heading>

                            <Box mt = {5} px = {{base: 0, md: 10}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                <Box px = {3}>
                                    <Heading as = "h2" fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 25, sm: 28, md: 30}}>
                                        Data Transmission
                                    </Heading>

                                    <OrderedList px = {8}>
                                        <ListItem py = {2}>
                                            <Link href = "#dt">
                                                Basics of Data Transmission
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#simplex">
                                                Simplex
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#half-duplex">
                                                Half-Duplex
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#full-duplex">
                                                Full-Duplex
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#async">
                                                Asynchronous
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#sync">
                                                Synchronous
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#usb">
                                                USB (Universal Serial Bus)
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#ic">
                                                Integrated Circuit (IC)
                                            </Link>
                                        </ListItem>
                                    </OrderedList>
                                </Box>

                                <Box px = {3} mt = {10}>
                                    <Heading as = "h2" fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 25, sm: 28, md: 30}}>
                                        Error-Checking Methods
                                    </Heading>

                                    <OrderedList px = {8}>
                                        <ListItem py = {2}>
                                            <Link href = "#parity">
                                                Parity Checking
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#arq">
                                                Automatic Repeat Request (ARQ)
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#checksum">
                                                Checksum
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#echo">
                                                Echo Check
                                            </Link>
                                        </ListItem>
                                    </OrderedList>
                                </Box>

                                <Box px = {3} mt = {10}>
                                    <Heading as = "h2" fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 25, sm: 28, md: 30}}>
                                        Internet Technologies
                                    </Heading>

                                    <OrderedList px = {8}>
                                        <ListItem py = {2}>
                                            <Link href = "#dvd">
                                                DVD Basics
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#dvd-ram">
                                                DVD-RAM
                                            </Link>
                                        </ListItem>
                                    </OrderedList>
                                </Box>
                            </Box>
                        </Box>

                        <Box mt = {{base: 8, sm: 14}} px = {{base: 0, md: 10}}>
                            <Heading as = "h2" variant = "sub-title" fontWeight = "normal" color = {textColor} fontFamily = "Meedori Regular" fontSize = {{base: 36, sm: 36, md: 40}}>
                                Data Transmission
                            </Heading>

                            <Box px = {{base: 0, md: 10}} id = "dt">
                                <Heading as = "h3" pt = {8} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    Basics of Data Transmission
                                </Heading>
                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Computers hold data in binary form. Computers can turn binary into a stream of signals which can be sent to other devices, examples are:

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            Electrical Pulses down metal cables
                                        </ListItem>

                                        <ListItem py = {2}>
                                            Pulses of light in a fibre-optic cable
                                        </ListItem>

                                        <ListItem py = {2}>
                                            Wireless Signals
                                        </ListItem>
                                    </UnorderedList>
                                </Box>

                                <Box mt = {10} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    3 main factors affect data transmission

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            Direction (is it in one direction or two directions?)
                                        </ListItem>

                                        <ListItem py = {2}>
                                            How transmission is taking place (how many bits at a time?)
                                        </ListItem>

                                        <ListItem py = {2}>
                                            How are the bits synchronized between devices (synchronous or asynchronous?)
                                        </ListItem>
                                    </UnorderedList>
                                </Box>
                            </Box>

                            <Box px = {{base: 0, md: 10}} id = "dt">
                                <Heading as = "h3" pt = {8} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    Directions of Transmission
                                </Heading>
                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Computers hold data in binary form. Computers can turn binary into a stream of signals which can be sent to other devices, examples are:

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            Electrical Pulses down metal cables
                                        </ListItem>

                                        <ListItem py = {2}>
                                            Pulses of light in a fibre-optic cable
                                        </ListItem>

                                        <ListItem py = {2}>
                                            Wireless Signals
                                        </ListItem>
                                    </UnorderedList>
                                </Box>

                                <Box mt = {10} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    3 main factors affect data transmission

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            Direction (is it in one direction or two directions?)
                                        </ListItem>

                                        <ListItem py = {2}>
                                            How transmission is taking place (how many bits at a time?)
                                        </ListItem>

                                        <ListItem py = {2}>
                                            How are the bits synchronized between devices (synchronous or asynchronous?)
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

export default Communication