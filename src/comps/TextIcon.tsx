import { Typography } from "@mui/material"
import { ReactNode } from 'react';
interface Props {
    text: string | ReactNode
    icon: ReactNode
};
export default function TextIcon({ text, icon }: Props): JSX.Element {
    return <div className="flex flex-row mt-2">
        {icon}
        <Typography className="my-2 text-gray-600 pl-4">{text}</Typography>
    </div>
}