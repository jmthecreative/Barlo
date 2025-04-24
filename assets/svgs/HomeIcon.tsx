import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
    color?: string;
}

const HomeIcon = ({ color = "#D1D5DB", ...props }: Props) => (
    <Svg viewBox="0 0 16 16" fill="none" {...props}>
        <Path
            fill={color}
            d="M8.707.293a1 1 0 0 0-1.414 0l-7 7a1 1 0 0 0 1.414 1.414L2 8.414V15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8.414l.293.293a1 1 0 1 0 1.414-1.414l-7-7Z"
        />
    </Svg>
);

export default HomeIcon; 