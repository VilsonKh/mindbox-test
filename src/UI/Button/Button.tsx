import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
	children: React.ReactNode;
	onClickEvent: (e: React.MouseEvent<HTMLButtonElement>) => void;
	isActive?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClickEvent, isActive }) => {
	return (
		<button
			className={`${styles.button} ${isActive ? styles.active : ""}`}
			onClick={onClickEvent}
		>
			{children}
		</button>
	);
};

export default Button;
