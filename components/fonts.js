import {Global} from "@emotion/react"

const Fonts = () => (
    <Global
    styles = {`
    @font-face {
        font-family: Teriyake;
        src:
            url("/fonts/Teriyake-Medium.otf")
            format("opentype");
    }

    @font-face {
        font-family: "Hibana";
        src:
            url("/fonts/Hibana-SubMedium.otf")
            format("opentype");
    }

    @font-face {
        font-family: "Evolventa";
        src:
            url("/fonts/Evolventa-Bold.otf")
            format("opentype");
    }
    
    @font-face {
        font-family: "Trap";
        src:
            url("/fonts/Trap-Bold.otf")
            format("opentype");
    }

    `} />
)

export default Fonts