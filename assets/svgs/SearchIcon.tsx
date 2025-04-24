import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
    color?: string;
    width?: number;
    height?: number;
}

const SearchIcon = ({ color = "#D1D5DB", width = 16, height = 16, ...props }: Props) => (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none" {...props}>
        <Path
            fill={color}
            fillRule="evenodd"
            d="M6 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM0 6a6 6 0 1 1 10.89 3.477l4.817 4.816a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 0 6Z"
            clipRule="evenodd"
        />
    </Svg>
);

export default SearchIcon; 