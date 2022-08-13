import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: props => ({
        body: {
            bg: mode("#e7dfc6", "#1B1725")(props),
            transitionProperty: "background-color",
            transitionDuration: "normal"
        }
    })
}

const components = {
    Heading: {

        variants: {
            "section-title": {
                fontSize: 50,
                fontFamily: "Evolventa"
            },
            "page-title": {
                fontSize: 52,
                fontFamily: "Evolventa"
            }
        },
    }
}

const fonts = {
    heading: "'Galhau'",
}

const colors = {
    accentColor: "#2274A5",
}

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true
}

const theme = extendTheme({
    config, styles, components, colors, fonts
})

export default theme