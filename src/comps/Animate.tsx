import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { ReactNode, useEffect } from "react"

interface Props {
    children?: ReactNode
}


export default function Animate({ children }: Props): JSX.Element {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
        hidden: { opacity: 0, scale: 0, transition: { duration: 0.7 } },
    }
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
        else {
            control.start("hidden");
        }
    }, [control, inView]);

    return <motion.div
        variants={boxVariant}
        ref={ref}
        animate={control}
        initial="hidden"
        className="box"
    >
        {children}
    </motion.div>
}