import React from 'react';
import { FaPython } from "react-icons/fa";
import { SiScikitlearn, SiTensorflow } from "react-icons/si";
import { TbLanguage, TbBrain } from "react-icons/tb";

export const skills = [
    { id: 1, name: "Python", icon: <FaPython size={24}/> },
    { id: 2, name: "NLP" , icon: <TbLanguage size={24}/>},
    { id: 3, name: "scikit-learn", icon: <SiScikitlearn size={24}/> },
    { id: 4, name: "Neural Networks", icon: <TbBrain size={24}/> },
    { id: 5, name: "Tensorflow", icon: <SiTensorflow size={24}/> }
  ];