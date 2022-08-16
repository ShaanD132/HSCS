import { Box, Container, Heading, ListItem, OrderedList, UnorderedList, useColorModeValue, Link, IconButton } from "@chakra-ui/react"
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
                                            <Link href = "#cables">
                                                Types Of Cables
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#serial">
                                                Serial Transmission
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#parallel">
                                                Parallel Transmission
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#async">
                                                Asynchronous Transmission
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#sync">
                                                Synchronous Transmission
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

                        <Box mt = {{base: 8, sm: 14}} px = {{base: 0, md: 10}} lineHeight = {1.6}>
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

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
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

                            <Box px = {{base: 0, md: 10}} id = "simplex">
                                <Heading as = "h3" pt = {16} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    Simplex
                                </Heading>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    One Direction only from sender to receiver.

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            E.g. CCTV camera to Security Guard&apos;s Camera
                                        </ListItem>
                                    </UnorderedList>
                                </Box>
                            </Box>

                            <Box px = {{base: 0, md: 10}} id = "half-duplex">
                                <Heading as = "h3" pt = {16} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    Half-Duplex
                                </Heading>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    In both directions but not at the same time. The two sides take turns to send signals.

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            E.g. A walkie talkie system where you must wait for one person to finish talking before talking.
                                        </ListItem>
                                    </UnorderedList>
                                </Box>
                            </Box>

                            <Box px = {{base: 0, md: 10}} id = "full-duplex">
                                <Heading as = "h3" pt = {16} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    Full-Duplex
                                </Heading>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    When data can be sent in both directions simultaneously.

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            E.g. A phone conversation where you can listen and speak at the same time.
                                        </ListItem>
                                    </UnorderedList>
                                </Box>
                            </Box>

                            <Box px = {{base: 0, md: 10}} id = "cables">
                                <Heading as = "h3" pt = {16} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    Types of Cables
                                </Heading>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Twisted Pair Cables: They are made with pairs of copper wires insulated individually then twisted together. It is not suited for long distance transmission but it is inexpensive, flexible and convenient (as copper is not rare or fragile). It is susceptible to interference which results in errors during data transmission. It is used for short distance links.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Coaxial Cables: They are a metal cable wrapped with 2 layers of insulation. It does not suffer from interference issues. However, it is more expensive than Twisted Pair Cables and less flexible. It is typically used when cables go close to electrical or radio equipment.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Optic Fibre Cables: They are usually made out of glass and are much more expensive than Twisted Pair Cables or Coaxial Cables. However, they are not affected by interference and are suited for long-distance links. They also have the highest data transmission speeds out of the 3 types of cables.
                                </Box>
                            </Box>

                            <Box px = {{base: 0, md: 10}} id = "serial">
                                <Heading as = "h3" pt = {16} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    Serial Transmission
                                </Heading>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Most data transmission that occurs is through serial. Bits are sent one at a time and are sent along a single wire/channel. The bits arrive at their destination one at a time.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    It is the most reliable form of data transmission as bits are kept separate from each other and the order is maintained. It is normally used for long distance communication.
                                </Box>
                            </Box>

                            <Box px = {{base: 0, md: 10}} id = "parallel">
                                <Heading as = "h3" pt = {16} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    Parallel Transmission
                                </Heading>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Multiple bits are sent at once. Over several wires/channels. One bit is sent per wire/channel. The bits should all arrive at their destination at the same time
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Parallel Transmission vs Serial Transmission:

                                    <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            It is faster than serial transmission
                                        </ListItem>

                                        <ListItem py = {2}>
                                            Tiny differences in wires may lead to slightly different speeds across different wires. Hence bits would not reach the destination at the same time.
                                            <UnorderedList px = {5}>
                                                <ListItem py = {2}>
                                                    Especially over long distances, the differences in speed add up.
                                                </ListItem>

                                                <ListItem py = {2}>
                                                    The bits won&apos;t be transmitted accurately if there are differences in speed amongst the several wires/channels.
                                                </ListItem>

                                                <ListItem py = {2}>
                                                    Thus it is only used for short distances. E.g. Computer to Monitor
                                                </ListItem>
                                            </UnorderedList>
                                        </ListItem>

                                    </UnorderedList>
                                </Box>
                            </Box>

                            <Box px = {{base: 0, md: 10}} id = "usb">
                                <Heading as = "h3" pt = {16} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    Universal Serial Bus (USB)
                                </Heading>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Computers require other devices apart from a CPU. Examples would be Mice, Keyboards, Monitors, etc. These are called peripherals. Buses are used to connect peripherals to the processor.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Peripherals work much slower than the processor. A serial bus is serial than a parallel bus but it is fast enough to manage peripherals.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Since peripherals are made by many different companies, computer manufacturers would like to make it easier to connect peripherals to computers. The solution they thought of was an industry standard connection - USB.
                                </Box>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    What is USB? It is an asynchronous serial connection. It is universal and can connect to almost any modern computer.
                                </Box>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    What happens when we plug a peripheral to our computers through USB?

                                    <OrderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            The computer automatically detects that a device is present.
                                        </ListItem>
                                        <ListItem py = {2}>
                                            The device will be recognized automatically
                                        </ListItem>
                                    </OrderedList>
                                </Box>
                            </Box>

                            <Box px = {{base: 0, md: 10}} id = "ic">
                                <Heading as = "h3" pt = {16} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    Integrated Circuit (IC)
                                </Heading>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    They are a collection of microscopic electronic circuits sealed into a single plastic or ceramic package. Different ICs have different roles. The CPU is considered to be an IC. Different ICs are connected through data buses. The parts of an IC work very quickly.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Some ICs have internal buses  as well, like the CPU. The buses inside the CPU and between the RAM and CPU, both use parallel buses (buses using parallel data transmission).
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    This heavily reduces data transfer time as the speed increases. However, by using parallel buses, there is less space available on the IC due to several channels/wires being used.
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