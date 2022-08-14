import {Box, Heading, Container, useColorModeValue, OrderedList, ListItem} from "@chakra-ui/react"

const Page = () => {
    const textColor = useColorModeValue("#1B1725", "#B9D8C2")
    return(
        <Container maxW = "container.lg">
            <Box mt = {20}>
                <Heading as = "h2" variant = "page-title" fontWeight = "normal" color = {textColor} fontSize = {{base: 45, md: 50}}>
                    HSCS Welcomes You
                </Heading>
                <Box  px = {10} mt = {8} fontFamily = "Hibana" fontSize = {{base: 20, md: 23}}>
                    <p className = "logo-letters">H</p>igh-<p className = "logo-letters">S</p>chool <p className = "logo-letters">C</p>omputer <p className = "logo-letters">S</p>cience is a platform made for IGCSE and IB students. We aim to provide the support needed to pass their international examinations regarding Computer Science. <br /><br /> This was made by an ex IB (SL) and IGCSE Computer Science student who earned a 7 and A* respectively. <br /><br />The website is still under construction.
                </Box>
            </Box>
            <Box mt = {16} px = {10}>
                <Heading as = "h2" variant = "section-title" color = {textColor} fontSize = {{base: 45, md: 50}}>
                    IGCSE Topics
                </Heading>
                <Box mt = {5} px = {10}>
                    <OrderedList fontFamily = "Hibana" fontSize = {{base: 18, md: 20}} lineHeight = {2.5}>
                        <ListItem>
                            Binary Systems and Hexadecimal
                        </ListItem>

                        <ListItem>
                            Communication and Internet Technologies
                        </ListItem>

                        <ListItem>
                            Logic Gates and Logic Circuits
                        </ListItem>

                        <ListItem>
                            Operating Systems and Computer Architecture
                        </ListItem>

                        <ListItem>
                            Input and Output Devices
                        </ListItem>

                        <ListItem>
                            Memory and Data Storage
                        </ListItem>

                        <ListItem>
                            High-Level and Low-Level Languages
                        </ListItem>

                        <ListItem>
                            Security and Ethics
                        </ListItem>

                        <ListItem>
                            Revision Tips
                        </ListItem>
                    </OrderedList>
                </Box>
            </Box>
            <Box mt = {16} px = {10}>
                <Heading as = "h2" variant = "section-title" color = {textColor} fontSize = {{base: 45, md: 50}}>
                    IB Topics
                </Heading>
                <Box mt = {5} px = {10}>
                    <OrderedList fontFamily = "Hibana" fontSize = {{base: 18, md: 20}} lineHeight = {2.5}>
                        <ListItem>
                            System Fundamentals
                        </ListItem>

                        <ListItem>
                            Computer Organization
                        </ListItem>

                        <ListItem>
                            Networks
                        </ListItem>

                        <ListItem>
                            Computational Thinking
                        </ListItem>

                        <ListItem>
                            Revision Tips
                        </ListItem>
                    </OrderedList>
                </Box>
            </Box>
        </Container>
    )
}

export default Page