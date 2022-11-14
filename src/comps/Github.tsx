import { Forward } from "@mui/icons-material";
import { Card, CardContent, Typography } from "@mui/material";

const data = [
    {
        text: "Vehicle Sharing App",
        link: "https://github.com/rahilikram67/vekishare"
    },
    {
        text: "Ionic,Angular RealTime Share (Android+Desktop)",
        link: "https://github.com/rahilikram67/ionic-react-hyrid-sharing"
    },
    {
        text: "Crypto Information Android App (Angular,Ionic)",
        link: "https://github.com/rahilikram67/cryptonia"
    },
    {
        text: "React,Nodejs Socket.IO Realtime Quiz App",
        link: "https://github.com/rahilikram67/React-Socket.io-TS-RealTime-QUIZ"
    },
    {
        text: "Instagram Clone (incomplete)",
        link: "https://github.com/rahilikram67/instagram"
    }
]

export default function Github(): JSX.Element {

    return <Card sx={{ backgroundColor: "#B6F3F6" }} className="md:w-80">
        <CardContent>
            <Typography fontFamily="revert" className="text-gray-600" variant="h5" gutterBottom>
                <a target="_blank" href="https://github.com/rahilikram67">
                    Github
                </a>
            </Typography>
            {
                data.map(({ link, text }, index) => <Typography key={index} variant="body2" className="py-2 flex text-blue-500 hover:underline">
                    <Forward />
                    <a className="ml-4" href={link} target="_blank" >
                        {text}
                    </a>
                </Typography>)
            }
        </CardContent>
    </Card>
}