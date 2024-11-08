import { Email, Instagram, LinkedIn, Phone, Twitter, GitHub } from "@mui/icons-material"
import { Card, CardContent, Grid, Typography, Rating, Link } from "@mui/material"
import react from "../assets/react.svg"
import angular from "../assets/angular.png"
import nodejs from "../assets/nodejs.png"
import mongo from "../assets/mongodb.png"
import ionic from "../assets/ionic.png"

import typescript from "../assets/typescript.png"
import javascript from "../assets/javascript.png"
import python from "../assets/python.png"
import golang from "../assets/golang.png"

import TextIcon from "./TextIcon"
import SkillRating from "./SkillRating"
import Github from "./Github"
import Animate from "./Animate"


export default function Main() {


    const sidebar = [
        { text: "rahilikram67", icon: <GitHub className="text-gray-600" />, link: "https://github.com/rahilikram67" },
        { text: "(+92) 308 8212344", icon: <Phone className="text-gray-600" />, link: "tel:+923088212344" },
        { text: "rahil.ikram67@gmail.com", icon: <Email className="text-gray-600" />, link: "mailto:rahil.ikram67@gmail.com" },
        { text: "m.rahil.ikram", icon: <Instagram className="text-gray-600" />, link: "https://instagram.com/m.rahil.ikram" },
        { text: "rahil-ikram", icon: <LinkedIn className="text-gray-600" />, link: "https://www.linkedin.com/in/rahil-ikram/" }
    ]


    return <Grid container spacing={1} className="py-3 bg-gray-100 justify-around">
        <Grid item md={4}>
            <div className="md:ml-48">

                {sidebar.map((el, i) => <Link target="_blank" href={el.link}>
                    <TextIcon icon={el.icon} text={el.text} />
                </Link>)}

            </div>
        </Grid>
        <Grid item md={4} width="400px">
            <Animate>
                <Card variant="outlined">
                    <CardContent>
                        <Typography fontFamily="revert" className="text-gray-600" variant="h5" gutterBottom>
                            About Me
                        </Typography>
                        <Typography fontFamily="sans-serif" variant="body1">
                            Passionate and creative Full stack developer with experience of 4+ years in
                            <b className="mx-2">
                                ME
                                <img className="inline-block py-auto mb-1" src={react} width={20} />
                                <img className="inline-block py-auto mb-1" src={angular} width={20} />
                                N</b>
                            ,
                            with a vast array of knowledge in many different front end and back end languages,
                            responsive frameworks,
                            databases,
                            and best code practices.
                            My objective is simply to be the best web developer that I can be and to contribute to the technology
                            industry all that I know and can do.
                        </Typography>
                    </CardContent>
                </Card>
            </Animate>
            {/* Skills */}
            <Animate>
                <Card className="my-2">
                    <CardContent>
                        <Typography fontFamily="revert" className="text-gray-600" variant="h5" gutterBottom>
                            Skills
                        </Typography>
                        <SkillRating rating={<Rating value={6} readOnly max={10} />} src={angular} />
                        <SkillRating className="mt-4" rating={<Rating value={8} readOnly max={10} />} src={react} />
                        <SkillRating className="mt-4" rating={<Rating value={7} readOnly max={10} />} src={nodejs} />
                        <SkillRating className="mt-4" rating={<Rating value={5} readOnly max={10} />} src={mongo} />
                        <SkillRating className="mt-4" rating={<Rating value={7} readOnly max={10} />} src={ionic} />
                    </CardContent>
                </Card>
            </Animate>
            {/* Languages */}
            <Animate>
                <Card className="my-2">
                    <CardContent>
                        <Typography fontFamily="revert" className="text-gray-600" variant="h5" gutterBottom>
                            Programming Languages
                        </Typography>
                        <SkillRating rating={<Rating value={6} readOnly max={10} />} src={typescript} />
                        <SkillRating className="mt-4" rating={<Rating value={8} readOnly max={10} />} src={javascript} />
                        <SkillRating className="mt-4" rating={<Rating value={5} readOnly max={10} />} src={python} />
                        <SkillRating className="mt-4" rating={<Rating value={3} readOnly max={10} />} src={golang} />
                    </CardContent>
                </Card>
            </Animate>
        </Grid>
        <Grid item md={4}>
            <Github />
        </Grid>
    </Grid>
}