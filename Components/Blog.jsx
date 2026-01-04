"use client";

import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
  
    useEffect(() => {
      const loadBlogs = async () => {
        const res = await fetchFromAPI("/blogs");
        setBlogs(res?.data || []);
      };

      loadBlogs();
    }, []);

    return <>
      <section className="blog-one section-space-bottom">
        <div className="container">
          <h2 className="sec-title sec-title--center bw-split-in-left">
            Recent Blogs
          </h2>
          <div className="row gutter-y-30">
            {blogs.map((blog) => (
              <div className="col-lg-6 col-md-6" key={blog.id}>
                <div
                  className="blog-card wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="00ms"
                >
                  <div className="blog-card__image">
                    <Image src={blog.feature_image} width={400} height={300} alt={blog.title} unoptimized />
                    <Link href={`/blog/${blog.slug}`} className="blog-card__image__link">
                      <span className="sr-only">{blog.title}</span>
                    </Link>
                  </div>
                  <div className="blog-card__content">
                    <div className="blog-card__meta list-unstyle">
                      <div className="blog-card__admin">
                        <Image
                          src={blog.profile_picture}
                          alt={blog.creator_name}
                          width={40}
                          height={40}
                          className="blog-card__admin__image"
                          unoptimized
                        />
                        <h4 className="blog-card__admin__name">{blog.creator_name}</h4>
                      </div>
                      <div className="blog-card__date">
                        <span className="blog-card__date__day">{new Date(blog.created_at).getDate()}</span>
                        <span className="blog-card__date__month">{new Date(blog.created_at).toLocaleString("en-US", { month: "short" })}</span>
                      </div>
                    </div>
                    <h3 className="blog-card__title">
                      <Link href={`/blog/${blog.slug}`}>
                      {blog.title.length > 60 ? blog.title.substring(0, 60) + "..." : blog.title}
                      </Link>
                    </h3>
                    <p className="blog-card__text">{blog.category_name}</p>
                    <Link href={`/blog/${blog.slug}`} className="blog-card__btn">
                      <span className="blog-card__btn__icon">
                        <FaArrowRight size={30} color="#35a6ed" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>

} 
export default Blog;