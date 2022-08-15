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
        font-family: "Arual";
        src:
            url("/fonts/Arual.ttf")
            format("truetype");
    }
    
    @font-face {
        font-family: "Zacbel";
        src:
            url("/fonts/zacbelx-medium.ttf")
            format("truetype");
    }

    @font-face {
        font-family: "Meedori Bold";
        src:
            url("/fonts/Meedori Sans Bold.ttf")
            format("truetype");
    }
    
    @font-face {
        font-family: "Meedori Regular";
        src:
            url("/fonts/Meedori Sans Regular.ttf")
            format("truetype");
    }

    @font-face {
        font-family: "Red Rose";
        src:
            url("/fonts/Omega+Sans+Regular.ttf")
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