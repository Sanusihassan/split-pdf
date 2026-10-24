import { LockClosedIcon } from "@heroicons/react/outline";
import ArrowIcon from "./icons/ArrowIcon";
import QuickIcon from "./icons/QuickIcon";
export const Features = ({
  features,
}: {
  features: { title: string; description: string }[];
}) => {
  const icons = [ArrowIcon, QuickIcon, LockClosedIcon];
  return (
    <div className="features hide-when-editing">
      {features.map(({ title, description }, i) => {
        const Icon = icons[i];
        return (
          <div className="feature" key={i}>
            <Icon className={`feature-icon${i === 2 ? " no-fill" : ""}`} />
            <div className="title">{title}</div>
            <p className="description">{description}</p>
          </div>
        );
      })}
    </div>
  );
};
