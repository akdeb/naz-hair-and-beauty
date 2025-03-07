"use client";

import React, { useState, useEffect } from "react";
// Array of greetings in different languages and scripts
const greetings = [
	{ text: "Hi", lang: "English" },
	{ text: "नमस्ते", lang: "Hindi" },
	{ text: "Hola", lang: "Spanish" },
	{ text: "你好", lang: "Chinese (Mandarin)" },
	{ text: "Bonjour", lang: "French" },
	{ text: "こんにちは", lang: "Japanese" },
	{ text: "안녕하세요", lang: "Korean" },
	{ text: "Hallo", lang: "German" },
	{ text: "مرحبا", lang: "Arabic" },
	{ text: "Ciao", lang: "Italian" },
	{ text: "Olá", lang: "Portuguese" },
  ];
  
  // Typewriter component
  export default function Typewriter() {
	const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	
	useEffect(() => {
	  const greeting = greetings[currentGreetingIndex].text;
	  
	  const timer = setTimeout(() => {
		if (!isDeleting) {
		  // Typing effect
		  setCurrentText(greeting.substring(0, currentText.length + 1));
		  
		  // If completed typing
		  if (currentText === greeting) {
			// Pause at the end of typing
			setTimeout(() => setIsDeleting(true), 1500);
		  }
		} else {
		  // Deleting effect
		  setCurrentText(greeting.substring(0, currentText.length - 1));
		  
		  // If completed deleting
		  if (currentText === "") {
			setIsDeleting(false);
			setCurrentGreetingIndex((currentGreetingIndex + 1) % greetings.length);
		  }
		}
	  }, isDeleting ? 50 : 150); // Faster when deleting
	  
	  return () => clearTimeout(timer);
	}, [currentGreetingIndex, currentText, isDeleting]);
	
	return (
	  <span className="inline-block min-w-[120px]">{currentText}{" "}</span>
	);
  }
  