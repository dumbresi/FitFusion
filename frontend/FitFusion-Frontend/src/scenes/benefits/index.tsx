import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className= "h-6 w-6" />,
        title: "State of the Art Facilities",
        description: 
          "State-of-the-art facilities in a gym refer to cutting-edge, top-tier amenities and equipment that embody the latest advancements in fitness technology and design. These facilities provide users with a premium and innovative workout experience, featuring modern exercise equipment, high-tech training tools, and an environment optimized for optimal fitness outcomes.",
    },
    {
        icon: <UserGroupIcon className= "h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: 
          "Experience a fitness revolution with our gym's offering of 100's of diverse classes, catering to every fitness level and interest. From high-energy cardio sessions to mind-body practices like yoga and Pilates, our extensive class selection ensures there's something for everyone. Led by expert instructors, these classes provide a dynamic and engaging way to achieve your fitness goals while fostering a sense of community. ",
    },
    {
        icon: <AcademicCapIcon className= "h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: 
          "Our trainers bring a wealth of knowledge, experience, and professional expertise to every session, ensuring personalized and effective workouts. Whether you're a beginner looking for foundational guidance or an experienced fitness enthusiast seeking advanced techniques, our expert trainers are here to inspire, challenge, and support you on your path to a healthier, stronger, and more confident you."
    }
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2}
    }
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
    return (
    <section id="benefits" className = "mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            {/* HEADER */}
            <motion.div 
                className = "md:my-5 md:w-3/5"
                initial = "hidden"
                whileInView = "visible"
                viewport = {{ once: true, amount: 0.5}}
                transition = {{ duration: 0.5 }}
                variants = {{
                    hidden: { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0},
                }}
            >
                <HText>MORE THAN JUST A GYM.</HText>
                <p className = "my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div 
                className = "mt:5 items-center justify-between gap-8 md:flex"
                initial="hidden"
                whileInView = "visible"
                viewport={{ once: true, amount: 0.5}}
                variants = {container}
                >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key = {benefit.title}
                        icon = {benefit.icon}
                        title = {benefit.title}
                        description = {benefit.description}
                        setSelectedPage = {setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className = "mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img 
                    className = "mx-auto"
                    alt = "benefits-page-graphic"
                    src = {BenefitsPageGraphic}
                />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className = "relative">
                        <div className = "before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                                initial = "hidden"
                                whileInView = "visible"
                                viewport = {{ once: true, amount: 0.5}}
                                transition = {{ duration: 0.5 }}
                                variants = {{
                                    hidden: { opacity: 0, x: 50},
                                    visible: { opacity: 1, x: 0},
                                }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className = "text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPT */}
                    <motion.div
                        initial = "hidden"
                        whileInView = "visible"
                        viewport = {{ once: true, amount: 0.5}}
                        transition = {{ delay: 0.2 , duration: 0.5 }}
                        variants = {{
                            hidden: { opacity: 0, x: 50},
                            visible: { opacity: 1, x: 0},
                        }}
                    >
                        <p className = "my-5">
                            At our gym, join the thriving community of millions of happy members who are achieving their fitness goals and embracing a healthier lifestyle. Our inclusive and supportive environment is designed to inspire individuals from all walks of life, fostering a sense of belonging and encouragement. With a diverse range of fitness programs, state-of-the-art facilities, and a team of expert trainers, our members experience a transformative fitness journey that goes beyond exercise – it's a lifestyle revolution.
                        </p>
                        <p className = "mb-5">
                            Whether you're a fitness enthusiast, someone starting their wellness journey, or seeking a vibrant social atmosphere, our gym is the ultimate destination. Witness the power of collective motivation as millions of members forge friendships, celebrate achievements, and experience the joy of getting fit together. Join the movement and become a part of our fitness family where success stories are written every day, and the pursuit of well-being is a shared, uplifting experience.
                        </p>
                    </motion.div>

                    {/* BUTTON */}
                    <div className = "relative mt-16">
                        <div className = "before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage = {setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
    );
};

export default Benefits;