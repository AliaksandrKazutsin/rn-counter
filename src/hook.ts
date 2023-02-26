import { useCallback, useRef, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

const delay: number = 1000;

export const useCounter = () => {
	const [count, setCount] = useState<number>(0);
  	const ref = useRef(count); 

	useFocusEffect(
		useCallback(() => {
			ref.current = setInterval(() => {
				setCount(prevState => prevState + 1);
			}, delay);

			return () => clearInterval(ref.current);
		}, [count]),
	);   

	return {
		count,
	}
}
