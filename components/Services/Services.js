// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

import SectionHOC from "@/hoc/Section/Section";
import Service from "./Service/Service";
import classes from "./Services.module.scss";

function Services(props) {
    const services = [
        {
            src: "images/service2.png",
            alt: "Landing page",
            title: "Landing page",
            description:
                "Website for your company brand with beautiful UI design and animated interactions and adapatable to all devices",
        },
        {
            src: "images/service5.webp",
            alt: "Frontend development",
            title: "Frontend development",
            description:
                "Building interactive user interfaces using a popular JavaScript library, ReactJS",
        },
        {
            src: "images/service6.webp",
            alt: "Backend development",
            title: "Backend development",
            description:
                "Dynamic web application with user data using NodeJS, ExpressJS and MongoDB database",
        },
    ];

    return (
        <SectionHOC
            id="services"
            title="Services"
            subtitle="What I offer"
            classname={classes.services}
        >
            <div className={`container ${classes.services__container}`} id="services-container">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    loop={true}
                    grabCursor={true}
                    spaceBetween={48}
                >
                    {services.map((service, i) => (
                        <SwiperSlide key={i}>
                            <Service service={service} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </SectionHOC>
    );
}

export default Services;
