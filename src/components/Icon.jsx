import React from "react";
import remixIcons from "src/libs/iconManager";

export default function Icon({ name, color = null, size, className = null }) {
    return (
        <span>
            {React.createElement(remixIcons[name], { size: size, color, className: className })}
        </span>
    );
}
