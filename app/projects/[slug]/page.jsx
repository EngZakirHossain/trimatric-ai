"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderBreadcrumb from "@/Components/HeaderBreadcrumb";
import { fetchFromAPI } from "@/lib/api";
import { useEffect, useState } from "react";
import { FaLightbulb,FaUser} from "react-icons/fa";

const ProjectDetails = ({ params }) => {
  const { slug } = React.use(params);

  const [project, setProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [projectRes, listRes] = await Promise.all([
          fetchFromAPI(`/projects/${slug}`),
          fetchFromAPI("/projects"),
        ]);

        setProject(projectRes?.data || null);
        setProjects(listRes?.data || []);
      } catch (err) {
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [slug]);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (!project) {
    return <div className="container">Project not found</div>;
  }

  return (
    <>
      <HeaderBreadcrumb pageTitle={project.title} />

      <section className="service-details section-space">
        <div className="container">
          <div className="row gutter-y-50">
            <div className="col-lg-4">
              <div className="service-sidebar">

                <div className="service-sidebar__pages service-sidebar__single">
                  <h3 className="service-sidebar__pages__title">All Projects</h3>
                  <ul className="list-unstyled service-sidebar__nav">
                    {projects.map((item) => (
                      <li key={item.id} className={item.slug === slug ? "active" : ""}>
                        <Link href={`/projects/${item.slug}`}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-sidebar__contact service-sidebar__single">
                  <div className="service-sidebar__contact__content">
                    <h3 className="service-sidebar__contact__title">
                      Have a Project <br /> in Mind?
                    </h3>
                    <Link
                      href="/contact"
                      className="service-sidebar__contact__btn"
                    >
                      Get in Touch
                    </Link>
                  </div>
                  <div className="service-sidebar__contact__shape" />
                </div>

              </div>
            </div>

            <div className="col-lg-8">
              <div className="service-details__content">

                {project.cover_image && (
                  <div className="service-details__thumbnail">
                    <Image
                      src={project.cover_image}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="img-fluid"
                      unoptimized
                    />
                  </div>
                )}

                <div className="service-details__box service-details__box--1">
                  <h3 className="service-details__title">{project.title}</h3>
                  <p className="service-details__text">
                    {project.description}
                  </p>
                </div>

                {project.features && (
                  <div className="service-details__box service-details__box--2">
                    <h3 className="service-details__sm-title">
                      Key Highlights
                    </h3>
                    <p className="service-details__text">
                      {project.features}
                    </p>
                  </div>
                )}

              </div>
              <div className="service-details__why-choose">
                <h3
                    className="service-details__title wow fadeInUp"
                    data-wow-duration="1500ms"
                >
                    Why Choose Trimatric AI?
                </h3>
                <div className="row gutter-y-30">
                    <div
                    className="col-md-6 wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="00ms"
                    >
                    <div className="service-details__why-choose__card">
                        <div className="service-details__why-choose__icon-box">
                        <span className="service-details__why-choose__icon">
                            <FaLightbulb size={30} color="#35a6ed" />
                        </span>
                        </div>
                        <div className="service-details__why-choose__content">
                        <h3 className="service-details__why-choose__title">
                            24/7 Support
                        </h3>
                        <p className="service-details__why-choose__text">
                            We are always Ready to help you .
                        </p>
                        </div>
                    </div>
                    </div>
                    <div
                    className="col-md-6 wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="100ms"
                    >
                    <div className="service-details__why-choose__card">
                        <div className="service-details__why-choose__icon-box">
                        <span className="service-details__why-choose__icon">
                            <FaUser size={30} color="#35a6ed" />
                        </span>
                        </div>
                        <div className="service-details__why-choose__content">
                        <h3 className="service-details__why-choose__title">
                            Professional Bots
                        </h3>
                        <p className="service-details__why-choose__text">
                            Bring to the table win-win survival strategies to.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>        
      </section>
    </>
  );
};

export default ProjectDetails;
