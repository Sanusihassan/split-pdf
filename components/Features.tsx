import { useSelector } from "react-redux";
import { ToolState } from "../src/store";
import QuickIcon from "./icons/QuickIcon";
import ArrowIcon from "./icons/ArrowIcon";
import { LockClosedIcon } from "@heroicons/react/outline";

export const Features = ({ features }: {
    features: { title: string; description: string }[];
}) => {
    const stateShowTool = useSelector(
        (state: { tool: ToolState }) => state.tool.showTool
    );
    const icons = [ArrowIcon, QuickIcon, LockClosedIcon]
    return (
        <div className={`features${stateShowTool ? "" : " d-none"}`}>
            {features.map(({ title, description }, i) => {
                const Icon = icons[i];
                return (
                    <div className="feature">
                        <Icon className={`feature-icon${i=== 2? " no-fill" : ""}`} />
                        <div className="title">{title}</div>
                        <p className="description">{description}</p>
                    </div>
                )
            })}
        </div>
    )
}