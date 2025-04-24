import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
    color?: string;
    width?: number;
    height?: number;
}

const CommunityIcon = ({ color = "#D1D5DB", width = 21, height = 20, ...props }: Props) => (
    <Svg width={width} height={height} viewBox="0 0 21 20" fill="none" {...props}>
        <Path
            d="M7.16667 11.6667V14.1667M10.5 11.6667V14.1667M13.8333 11.6667V14.1667M3 17.5H18M3 8.33333H18M3 5.83333L10.5 2.5L18 5.83333M3.83333 8.33333H17.1667V17.5H3.83333V8.33333Z"
            stroke={color}
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default CommunityIcon; 