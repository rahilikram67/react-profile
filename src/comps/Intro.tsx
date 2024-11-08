import { Download, LocationOn, School } from "@mui/icons-material"
import { Typography } from "@mui/material"

import cv from "../assets/cv.pdf"
import Animate from "./Animate"

import TextIcon from "./TextIcon"
export default function Intro() {
    return <div className="h-44 w-full border flex justify-center">
        <Animate>
            <div className="py-2 text-left md:w-96">
                <Typography variant="h3" fontFamily="cursive">
                    Rahil Ikram
                    <a className="text-blue-400 ml-3 hover:text-blue-700" href={cv} download>
                        <Download fontSize="large" />
                    </a>
                </Typography>
                <Typography variant="h6" className="my-2 text-gray-600" fontFamily="monospace">Full Stack Developer</Typography>
                <TextIcon icon={<LocationOn color="action" />} text="Gujranwala, Punjab, Pakistan" />
                <TextIcon icon={<School color="action" />} text="GCUL Lahore, Punjab Pakistan" />
            </div>
        </Animate>
    </div>

}