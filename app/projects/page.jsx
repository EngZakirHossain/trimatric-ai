"use client";

import HeaderBreadcrumb from "@/Components/HeaderBreadcrumb";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      const res = await fetchFromAPI("/projects");
      setProjects(res?.data || []);
    };
    loadProjects();
  }, []);

  return (
    <>
      <HeaderBreadcrumb pageTitle="Projects" />

      <section className="services-page section-space">
        <div className="container">
          <div className="row gutter-y-30">

            {projects.map((project, index) => (
              <div
                key={project.id}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay={`${index * 100}ms`}
              >
                <div className="service-card">
                  <div className="service-card__bg">
                    <div
                      className="service-card__bg__one"
                      style={{
                        backgroundImage:
                          "url(/images/service-card-bg.png)"
                      }}
                    />
                  </div>

                  <div className="service-card__content">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="service-card__btn"
                    >
                      <span className="service-card__btn__icon">
                        <FaArrowRight size={30} color="#FFFFFF" />
                      </span>
                    </Link>

                    <h3 className="service-card__title">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="service-card__text">
                      {project.description?.length > 150
                        ? project.description.slice(0, 200) + "..."
                        : project.description}
                    </p>

                    <div className="service-card__image">
                      <Image
                        src={project.cover_image}
                        alt={project.title}
                        width={350}
                        height={250}
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
