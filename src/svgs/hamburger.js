import * as React from "react";

export const HamburgerSvg = (props) => (
	<svg viewBox="0 0 100 80" width={40} height={20} {...props} fill="white">
		<path d="M0 0h100v20H0zM0 30h100v20H0zM0 60h100v20H0z" />
	</svg>
);
