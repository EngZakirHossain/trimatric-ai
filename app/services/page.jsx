"use client";
import HeaderBreadcrumb from "@/Components/HeaderBreadcrumb";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

const Services = () => {

    const [services, setServices] = useState([]);
    
    useEffect(() => {
        const loadServices = async () => {
        try {
            const res = await fetchFromAPI("/services");
            setServices(res?.data || []);
        } catch (error) {
            console.error("Failed to load services", error);
        }
        };

        loadServices();
    }, []);

    return (
    <>
      <HeaderBreadcrumb pageTitle="Our Services" />

      <section className="services-page section-space">
        <div className="container">
          <div className="row gutter-y-30">
            {services.map((service, index) => (
              <div
                key={service.id || index}
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay={`${index * 100}ms`}
              >
                <div className="service-card-two">
                  <div className="service-card-two__bg" />

                  <div className="service-card-two__content">
                    <h3 className="service-card-two__title">
                      <Link href="#">
                        {service.title}
                      </Link>
                    </h3>

                    <p className="service-card-two__text">
                      {service.description}
                    </p>

                    <div className="service-card-two__image">
                      <Image
                        src={service.banner}
                        alt={service.title}
                        width={300}
                        height={220}
                        className="img-fluid"
                        unoptimized
                      />

                      <Link
                        href="#"
                        className="service-card-two__btn"
                      >
                        <span className="service-card-two__btn__icon">
                          <FaArrowRight size={30} color="#FFFFFF" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {services.length === 0 && (
              <div className="col-12 text-center">
                <p>No services found.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;