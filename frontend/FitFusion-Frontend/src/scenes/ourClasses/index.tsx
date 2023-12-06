import { SelectedPage, ClassType, ExerciseType } from "@/shared/types"
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
import { useEffect, useState } from "react";
import axios from "axios";
import Exercise from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Sculpt and strengthen your body in our dynamic Weight Training Classes, where expert instructors guide you through targeted exercises to maximize muscle development and overall fitness.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: "Discover inner balance and physical harmony in our rejuvenating Yoga Classes, led by experienced instructors in a serene environment to enhance flexibility, strength, and mindfulness.",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "Define and tone your core with precision in our Ab Core Classes, a specialized workout designed to sculpt and strengthen your abdominal muscles for a toned and resilient midsection.",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description: "Embark on a fitness journey like never before with our Adventure Classes, where dynamic workouts combine excitement and challenge, ensuring a thrilling and effective approach to achieving your fitness goals.",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description: "Elevate your fitness experience with our diverse Fitness Classes, offering a range of dynamic workouts led by expert instructors to cater to every individual's goals and preferences.",
        image: image5,
    },
    {
        name: "Training Classes",
        description: "Transform your fitness journey with our comprehensive Training Classes, led by expert instructors, providing personalized guidance and a motivating environment to help you reach your fitness aspirations.",
        image: image6,
    },
]

type Props = {
    setSelectedPage : ( value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage } : Props) => {
    const images = [image1, image2, image3, image4, image5];
   const baseUrl:string = "http://localhost:8080/api/exercises";
   const [exercises, setExercises] = useState([]);
 useEffect(() =>{
    
    axios.get(baseUrl).then((response)=>{
        console.log(response.data);
        setExercises(response.data);
    });
 },[]);

 if (!exercises) {
    console.log("okay its null")
 }
    return <section id="ourclasses" className = "w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className = "mx-auto w-5/6"
                initial = "hidden"
                whileInView = "visible"
                viewport = {{ once: true, amount: 0.5}}
                transition = {{ duration: 0.5}}
                variants = {{
                    hidden: { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0},
                }}
            >
                <div className = "md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className = "py-5">
                        Explore a world of fitness possibilities with various classes at our gym. From invigorating cardio sessions to targeted strength training and mind-body practices, our diverse class offerings cater to all fitness levels and preferences. Led by expert instructors in a supportive community, these classes provide a holistic and engaging approach to achieving your wellness goals, ensuring a transformative and enjoyable fitness experience for every member.
                    </p>
                </div>
            </motion.div>
            <div className = "mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className = "w-[2800px] whitespace-nowrap">
                        {exercises.map((item: ExerciseType, index) => (
                            <Exercise 
                                key = {`${item.name}-${index}`}
                                name = {item.name}
                                intensity = {item.intensity}
                                duration = {item.duration}
                                image = {images[index%5]}
                            />
                        ))}
                </ul>
            </div>
        </motion.div>
    </section>;
};

export default OurClasses;