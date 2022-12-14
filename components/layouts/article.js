import { motion } from "../../node_modules/framer-motion"
import Head from "next/head"

const variants = {
    hidden: {opacity: 0, x: 0 },
    enter: { opacity: 1, x: 0},
    exit: { opacity: 1, x: 30}
}

const Layout = ({ children, title }) =>  (
    <motion.article
    initial = "hidden" animate = "enter" exit = "exit" variants = {variants} transition = {{duration: 0.5, type: "easeInOut"}} style = {{position: "relative"}}>
    <>
        {title && ( <Head>
        <title>{title} - Shaan Dussoye</title></Head>)}
        {children}
    </>
    </motion.article>
)

export default Layout