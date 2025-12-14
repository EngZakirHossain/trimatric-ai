"use client";
import HeaderBreadcrumb from "@/Components/HeaderBreadcrumb";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "@/lib/api";
import Image from "next/image";

const Teams = () => {

    const [teamMembers, setTeamMembers] = useState([]);
    
    useEffect(() => {
        const loadTeamMembers = async () => {
        const res = await fetchFromAPI("/teams");
        setTeamMembers(res?.data || []);
        };

        loadTeamMembers();
    }, []);

    return <>
        <HeaderBreadcrumb pageTitle="Our Teams" />
        <section className="team-page section-space">
            <div className="container">
                <div className="row gutter-y-30">
                     {teamMembers.map((member) => (
                        <div key={member.id} className="col-lg-4 col-md-6">
                            <div
                            className="team-card wow fadeInUp"
                            data-wow-duration="1500ms"
                            data-wow-delay="00ms"
                            >
                            <div className="team-card__shape" />
                            <div className="team-card__image">
                                <Image src={member.image} width={400} height={400} alt={member.name} unoptimized />
                            </div>
                            <div className="team-card__social">
                                <span className="team-card__social__icon" />
                                <div className="team-card__social__links social-links">
                                    {member.email && (
                                        <a
                                        href={`mailto:${member.email}`}
                                        title={member.email}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        <FaEnvelope size={20} color="#1877F2" />
                                        </a>
                                    )}
                                    {member.phone && (
                                        <a
                                        href={`tel:${member.phone}`}
                                        title={member.phone}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        <FaPhone size={20} color="#1877F2" />
                                        </a>
                                    )}
                                    {/* <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    <FaLinkedin size={20} color="#1DA1F2" />
                                    </a>                             */}
                                   
                                </div>
                            </div>
                            <div className="team-card__info">
                                <h3 className="team-card__name">
                                <a href="#">{member.name}</a>
                                </h3>
                                <p className="team-card__designation">{member.designation}</p>
                            </div>
                            </div>
                        </div>
                  ))}
                </div>                
            </div>
        </section>
    </>
};
export default Teams;