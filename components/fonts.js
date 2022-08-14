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
        font-family: "Outfit";
        src:
            url("/fonts/Outfit-Medium.ttf")
            format("truetype");
    }

    @font-face {
        font-family: "Zacbel X";
        src:
            url("/fonts/zacbelx-medium.ttf")
            format("truetype");
    }

    @font-face {
        font-family: "altertype";
        src:
            url("/fonts/altertype.otf")
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