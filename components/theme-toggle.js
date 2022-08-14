import  {AnimatePresence, motion} from "../node_modules/framer-motion"
import { IconButton, useColorMode, useColorModeValue} from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"


const ThemeToggle = () => {
    const {toggleColorMode} = useColorMode()
    const ThemeButtonColors = useColorModeValue("#2b94d1","#fdf0bd")

    return(
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
            style={{ display: 'inline-block' }}
            key={useColorModeValue('light', 'dark')}
            initial={{ rotate: -180, x: -50, opacity: 0 }}
            animate={{ rotate: -360, x: 0, opacity: 1 }}
            exit={{ rotate: -180, x: 50,  opacity: 0 }}
            transition={{ duration: 0.35 }}
            >
                <IconButton
                    aria-label = "Toggle theme"
                    borderRadius = {100}
                    bg = {useColorModeValue('accentColor', '#fbe384')}
                    color = {useColorModeValue ("white", "black")}
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}
                    _hover={{ bg: ThemeButtonColors }}
                    my = {1}
                />
            </motion.div>
      </AnimatePresence>
    )
}

export default ThemeToggle