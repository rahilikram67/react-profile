import { ReactNode } from "react";
interface Props {
    src: string
    rating: ReactNode | JSX.Element
    className?: string
}
export default function SkillRating({ rating, src, className }: Props): JSX.Element {
    return <div className={"flex flex-row items-center mx-auto justify-center " + className}>
        <img src={src} width={40} />
        <span className="ml-10">{rating}</span>
    </div>
} 