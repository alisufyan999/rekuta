"use client";

import React from "react";
import Image from "next/image";

interface Technology {
    id: number;
    logo: string;
}
interface TrustSliderProps {
    heading?: string;
    technologies?: Technology[];
}
const TrustSlider: React.FC<TrustSliderProps> = ({
    heading = "Trusted by 11,000+ organizations worldwide",
    technologies = [
        // Row 1 - Scrolling Left
        {
            id: 1,
            logo: "/assets/images/trust_slider_01.png",
        },
        {
            id: 2,
            logo: "/assets/images/trust_slider_02.png",
        },
        {
            id: 3,
            logo: "/assets/images/trust_slider_03.png",
        },
        {
            id: 4,
            logo: "/assets/images/trust_slider_04.png",
        },
        {
            id: 5,
            logo: "/assets/images/trust_slider_05.png",
        },
        {
            id: 6,
            logo: "/assets/images/trust_slider_06.png",
        },
        {
            id: 7,
            logo: "/assets/images/trust_slider_07.png",
        },

        // Row 2 - Scrolling Right
        {
            id: 8,
            logo: "/assets/images/trust_slider_01.png",
        },
        {
            id: 9,
            logo: "/assets/images/trust_slider_02.png",
        },
        {
            id: 10,
            logo: "/assets/images/trust_slider_03.png",
        },
        {
            id: 11,
            logo: "/assets/images/trust_slider_04.png",
        },
        {
            id: 12,
            logo: "/assets/images/trust_slider_05.png",
        },

        // Row 3 - Scrolling Left
        {
            id: 13,
            logo: "/assets/images/trust_slider_06.png",
        },
        {
            id: 14,
            logo: "/assets/images/trust_slider_07.png",
        },
        {
            id: 15,
            logo: "/assets/images/trust_slider_01.png",
        },
        {
            id: 16,
            logo: "/assets/images/trust_slider_02.png",
        },
        {
            id: 17,
            logo: "/assets/images/trust_slider_03.png",
        },
        {
            id: 18,
            logo: "/assets/images/trust_slider_04.png",
        },
        {
            id: 19,
            logo: "/assets/images/trust_slider_05.png",
        },
        {
            id: 20,
            logo: "/assets/images/trust_slider_06.png",
        },
        {
            id: 21,
            logo: "/assets/images/trust_slider_07.png",
        },
        {
            id: 22,
            logo: "/assets/images/trust_slider_01.png",
        },
        {
            id: 23,
            logo: "/assets/images/trust_slider_02.png",
        },
        {
            id: 24,
            logo: "/assets/images/trust_slider_03.png",
        },
        {
            id: 25,
            logo: "/assets/images/trust_slider_03.png",
        },
        {
            id: 26,
            logo: "/assets/images/trust_slider_03.png",
        },
        {
            id: 27,
            logo: "/assets/images/trust_slider_03.png",
        },
        {
            id: 28,
            logo: "/assets/images/trust_slider_03.png",
        },
        {
            id: 29,
            logo: "/assets/images/trust_slider_03.png",
        },
        {
            id: 30,
            logo: "/assets/images/trust_slider_03.png",
        },
        {
            id: 31,
            logo: "/assets/images/trust_slider_03.png",
        },
        {
            id: 32,
            logo: "/assets/images/trust_slider_03.png",
        },
        {
            id: 33,
            logo: "/assets/images/trust_slider_03.png",
        },
        {
            id: 34,
            logo: "/assets/images/trust_slider_03.png",
        },
        {
            id: 35,
            logo: "/assets/images/trust_slider_03.png",
        },
        {
            id: 36,
            logo: "/assets/images/trust_slider_03.png",
        },
    ],
}) => {
    const row1 = technologies.slice(0, 12);
    const row2 = technologies.slice(12, 24);
    const row3 = technologies.slice(12);

    return (
        <div className="section-padding">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <h2 className="display-5 mb-4 mb-md-5">
                            {heading}
                        </h2>
                    </div>
                </div>
                <div className="technologies-container technologySliderFade">
                    <div className="tech-row tech-row-left">
                        <div className="tech-track">
                            {[...row1, ...row1].map((tech, index) => (
                                <div key={`${tech.id}-${index}`} className="tech-card">
                                    <div className="tech-logo">
                                        <Image
                                            src={tech.logo}
                                            alt={"slider-logo"}
                                            width={180}
                                            height={180}
                                            className="tech-icon"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="tech-row tech-row-right">
                        <div className="tech-track">
                            {[...row2, ...row2].map((tech, index) => (
                                <div key={`${tech.id}-${index}`} className="tech-card">
                                    <div className="tech-logo">
                                        <Image
                                            src={tech.logo}
                                            alt={"slider-logo"}
                                            width={180}
                                            height={180}
                                            className="tech-icon"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="tech-row tech-row-left">
                        <div className="tech-track">
                            {[...row3, ...row3].map((tech, index) => (
                                <div key={`${tech.id}-${index}`} className="tech-card">
                                    <div className="tech-logo">
                                        <Image
                                            src={tech.logo}
                                            alt={"slider-logo"}
                                            width={180}
                                            height={180}
                                            className="tech-icon"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustSlider;
