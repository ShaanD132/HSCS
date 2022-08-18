import { Box, Container, Heading, ListItem, OrderedList, UnorderedList, useColorModeValue, Link, IconButton, Image } from "@chakra-ui/react"
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
                        <Link href = "#top" className = "scroll-top"><IconButton borderRadius = {100} bg = {textColor} _hover = {{bg: textColor}}  aria-label = "back-to-top" icon = {<ChevronUpIcon />} size = "lg" color = {useColorModeValue("white", "black")} /></Link>
                    </Container>

                    <Box>
                        <Heading as = "h2" pt = {3} variant = "page-title" fontWeight = "normal" color = {textColor} fontSize = {{base: 30, sm: 40, md: 45}} id = "top">
                            Topic 2 - Communication and the Internet
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
                                            <Link href = "#ISP">
                                                Internet Service Provider (ISP)
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#IP">
                                                IP addresses
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#MAC">
                                                MAC addresses
                                            </Link>
                                        </ListItem>

                                        <ListItem py = {2}>
                                            <Link href = "#html">
                                                HTML Structure and Presentation
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

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    What is USB? It is an asynchronous serial connection. It is universal and can connect to almost any modern computer.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    What happens when we plug a peripheral to our computers through USB?

                                    <OrderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                        <ListItem py = {2}>
                                            The computer automatically detects that a device is present.
                                        </ListItem>

                                        <ListItem py = {2}>
                                            The device will be recognized automatically (if it has already been used before) and the device driver needed (software that allows the peripheral to communicate with the computer) is loaded.
                                        </ListItem>

                                        <ListItem py = {2}>
                                            If a new device is connected, the computer looks for a device driver that matches the device. If a suitable driver is not found, the user is prompted to download the necessary driver.
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

                        <Box mt = {{base: 8, sm: 14}} px = {{base: 0, md: 10}} lineHeight = {1.6}></Box>
                            <Heading as = "h2" variant = "sub-title" fontWeight = "normal" color = {textColor} fontFamily = "Meedori Regular" fontSize = {{base: 36, sm: 36, md: 40}}>
                                Error-Checking Methods
                            </Heading>

                            <Box px = {{base: 0, md: 10}} id = "parity">
                                <Heading as = "h3" pt = {8} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    Parity Checking
                                </Heading>
                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Parity is a mathematical term that means whether a number is odd or even. Parity checks are simple checks on data to see whether errors have occurred during transmission.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Parity bits can be added to the start or the end of a byte. When figuring out the values of the parity bit, you must ask yourself: &apos; Do I need to add a 1 at the start or end of the byte for the number of 1s in the byte to become even? &apos;
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    There are two ways that parity checks can be used: either by using an even parity or an odd parity. Even parity refers to when the number of 1s in a byte (8 bits) is even. Odd parity refers to when the number of 1s in a byte is odd.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    In IGCSE exams, there are two types of questions that may come out for parity bits:
                                        <OrderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                            <ListItem py = {2}>
                                                It will indicate whether the question is using odd parity or even parity.
                                            </ListItem>

                                            <ListItem py = {2}>
                                                It will show multiple bytes and state that a few of them are correct and a few are incorrect. It will ask you to figure out which ones are incorrect.
                                            </ListItem>
                                        </OrderedList>
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    There are two main drawbacks to using parity bits:
                                        <OrderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                            <ListItem py = {2}>
                                                If there are transposition errors. i.e. if a 2 bits switch places. By using a parity check, the number of 1s would still be odd, thus considered correct even if it is incorrect.
                                                <Box mt = {6} mb = {6} align = "center">
                                                    <Image src = "/images/parity.jpg" height = {100} alt = "parity"/>
                                                </Box>
                                            </ListItem>

                                            <ListItem py = {2}>
                                                If there are an even number of errors (e.g. 2 errors). This will lead to the errors cancelling each other out, this is because if there are two errors, it means that a 1 turns into a 0 AND a 0 turns into a 1 in the byte. The byte will still have an even/odd number of 1s as the number of 1s would not change.
                                            </ListItem>
                                        </OrderedList>
                                </Box>
                            </Box>

                            <Box px = {{base: 0, md: 10}} id = "arq">
                                <Heading as = "h3" pt = {16} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    Automatic Repeat Request (ARQ)
                                </Heading>
                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    The 2 most important aspects of ARQ are the fact that it uses an acknowledgement as well as a time-out.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    The whole process is as follows:
                                    <Box px = {5} py = {5}>
                                        A transmitter sends data (as a packet). The receiver checks the packet for errors. If there are no errors, an acknowledgement is sent. If there is an error, the receiver will automatically send a request to the sender to re-send the data. <br/><br/> If no acknowledgement is received after re-sending the data, the data will be resent. The data is automatically resent several times until an acknowledgement is received or the request times out.
                                    </Box>
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    It is important to remember the entire process of ARQ for the exams. In past papers, there are frequently questions about how ARQ works.
                                </Box>
                            </Box>

                            <Box px = {{base: 0, md: 10}} id = "checksum">
                                <Heading as = "h3" pt = {16} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    Checksum
                                </Heading>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    The whole process is as follows:
                                        <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                            <ListItem py = {2}>
                                                The sender will calculate the total denary value for a block of data/numbers. It will transmit this total along with the block of data.
                                            </ListItem>

                                            <ListItem py = {2}>
                                                The receiver will calculate the total value of the block of data/numbers after transmission and it will compare the total it calculated against the original total.
                                            </ListItem>

                                            <ListItem py = {2}>
                                                If they do not match, it means that an error has occurred. The data must then be re-sent.
                                            </ListItem>
                                        </UnorderedList>
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana" lineHeight = {1.8}>
                                    Checksum can be used to check for data transmission errors even if the total does not represent a real total. For example, when sending phone numbers we can send and calculate a total. However since the total of phone numbers does not exist, this sort of total is called a hash total.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    The main drawback of using Checksum is if:
                                        <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                            <ListItem py = {2}>
                                                An error occurs when transmitting the total that was originally calculated. This means that even if the block of data was transmitted correctly, if the total was not, the data will be considered incorrect as the checksums do not match.
                                            </ListItem>
                                        </UnorderedList>
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    The way to calculate the Checksum is as follows:
                                        <UnorderedList mt = {3} px = {{base: 0, md: 8}} fontSize = {{base: 16, md: 20}}>
                                            <ListItem py = {2}>
                                                Assume that the checksum is 1 byte in length. This means that its maximum value is (2<sup>8</sup> - 1) which is equal to 255. The reason we do (2<sup>8</sup> - 1) is because we ignore 00000000 as a possibility for the checksum value.
                                            </ListItem>

                                            <ListItem py = {2}>
                                                X = The total sum of numbers
                                            </ListItem>

                                            <ListItem py = {2}>
                                                Y = X / 256
                                            </ListItem>

                                            <ListItem py = {2}>
                                                Round Y down ot the nearest whole number
                                            </ListItem>

                                            <ListItem py = {2}>
                                                Z = Y * 256
                                            </ListItem>

                                            <ListItem py = {2}>
                                                Checksum Value = X - Z
                                            </ListItem>
                                        </UnorderedList>
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    The process of calculating the checksum can be simplified by using the modulo function:
                                    <Box py = {5} px = {8}>
                                        Checksum Value = X % 256 (X modulo 256)
                                    </Box>
                                </Box>
                            </Box>

                            <Box px = {{base: 0, md: 10}} id = "echo">
                                <Heading as = "h3" pt = {16} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    Echo Check
                                </Heading>

                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    An echo check is when the receiver re-sends the data received to the sender. The sender will compare the original data to the version of the data that was sent by the receiver.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana" lineHeight = {1.8}>
                                    However, this is not a very reliable way to check for errors. An error could occur when the receiver re-sends the data rather than when the data was initially sent to the receiver. It increases the risk of errors.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    It can still be used for error checking if no errors occur during transmission when resending the data. The sender can accurately confirm the accuracy of the data between the data sent and the data received.
                                </Box>
                            </Box>
                        </Box>

                        <Box mt = {{base: 8, sm: 14}} px = {{base: 0, md: 10}} lineHeight = {1.6}>
                            <Heading as = "h2" variant = "sub-title" fontWeight = "normal" color = {textColor} fontFamily = "Meedori Regular" fontSize = {{base: 36, sm: 36, md: 40}}>
                                Internet Technologies
                            </Heading>

                            <Box px = {{base: 0, md: 10}} id = "ISP">
                                <Heading as = "h3" pt = {8} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    Internet Service Provider (ISP)
                                </Heading>
                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Computers are connected to the internet through an ISP. E.g. Verzion in America.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    It is an organization that allows people to use the Internet, they normally charge a monthly fee for this service.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    The ISP sets up a username and password for the user and usually provides an email address as well.
                                </Box>
                            </Box>

                            <Box px = {{base: 0, md: 10}} id = "IP">
                                <Heading as = "h3" pt = {16} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    IP addresses
                                </Heading>
                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    IP address stands for Internet Protocol address. Each device on the Internet is given a unique IP address. It is a 32-bit number that is written like this: 192.102.100.1
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    IP addresses are given to devices once they connect to the Internet. This is given to the computer by the ISP and it is unique for that session of Internet use.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Thus the IP address can change after a new session is started. An IP address gives the location of a device. It is important to remember that IP addresses use hexadecimal notation.
                                </Box>
                            </Box>

                            <Box px = {{base: 0, md: 10}} id = "MAC">
                                <Heading as = "h3" pt = {16} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    MAC addresses
                                </Heading>
                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    MAC (Media Access Control) addresses are created along with your device (if it can connect to the Internet). Every device has a unique MAC address even if they are owned by the same user:
                                    <Box mt = {5} px = {8}>
                                        e.g. your Samsung Android and Dell Laptop have different MAC addresses
                                    </Box>
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    They are used to identify specific devices connected to the Internet. The first half of a device's MAC address is the manufacturer's ID. The second half of the MAC address is the device ID.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    Unlike the IP address, the MAC address does not change. It is important to remember that it is set by the manufacturer.
                                </Box>
                            </Box>

                            <Box px = {{base: 0, md: 10}} id = "html">
                                <Heading as = "h3" pt = {16} fontWeight = "normal" color = {textColor} fontFamily = "Arual" fontSize = {{base: 28, sm: 28, md: 32}}>
                                    HTML structure & Presentation
                                </Heading>
                                <Box mt = {5} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    The structure of HTML is the essential part of the HTML document. It contains the meaning and structural mark-up of the document, i.e. how elements are ordered,
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    The presentation of HTML is the formatting of the website, it describes the style, color and look of the website.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    In structure of an HTML website is like the skeleton and body while the presentation is the clothes and accessories of the website.
                                </Box>

                                <Box mt = {12} px = {{base: 0, md: 7}} fontSize = {{base: 18, md: 22}} fontFamily = "Hibana">
                                    The HTML (HyperText Markup Language) file contains the structure while the CSS (Cascading Style Sheet) contains the presentation of the website.
                                </Box>
                            </Box>
                        </Box>
                </Container>
            </Section>
        </Layout>
    )
}

export default Communication