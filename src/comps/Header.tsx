import { AppBar, Typography } from "@mui/material"
import Logo from "../assets/react.svg"
import insta from "../assets/insta.png"
import twitter from "../assets/twitter.png"
import upwork from "../assets/upwork.png"
import linkdin from "../assets/linkdin.png"
import { useState } from "react"

export default function Header() {
    const [view, setView] = useState(0)
    const profiles = [
        "https://www.instagram.com/m.rahil.ikram/",
        "https://twitter.com/RahilIkram67",
        "https://www.upwork.com/freelancers/~01208cc515c1264744",
        "https://www.linkedin.com/in/rahil-ikram/"
    ]
    return <AppBar sx={{ backgroundColor: "white" }} className="py-3 px-10">
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <Typography variant="h2" color="black" fontFamily={"'Tangerine', serif"}>Rahil</Typography>
                <img src={Logo} className="ml-6" width={70} height={70} />
            </div>
            <div className="flex justify-around">
                <a href={profiles[0]} target="_blank">
                    <img className="hover:scale-125 mx-1 bg-white rounded-xl" width={50} src={insta} />
                </a>
                <a href={profiles[1]} target="_blank">
                    <img className="hover:scale-125 mx-1" width={50} src={twitter} />
                </a>
                <a href={profiles[2]} target="_blank">
                    <img className="hover:scale-125 mx-1 rounded-3xl" width={50} src={upwork} />
                </a>
                <a href={profiles[3]} target="_blank">
                    <img className="hover:scale-125 mx-1 rounded-3xl" width={50} src={linkdin} />
                </a>
            </div>
        </div>
    </AppBar>
}