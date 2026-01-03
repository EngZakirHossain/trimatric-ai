"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderBreadcrumb from "@/Components/HeaderBreadcrumb";
import { fetchFromAPI } from "@/lib/api";
import { useEffect, useState } from "react";
import { FaLightbulb,FaUser} from "react-icons/fa";

const blogsDetails = ({ params }) => {
  const { slug } = React.use(params);

  const [blogsDetails, setBlogDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogDetails = async () => {
      try {
        const res = await fetchFromAPI(`/blogs/${slug}`);
        setBlogDetails(res?.data || null);
      } catch (err) {
        setBlogDetails(null);
      } finally {
        setLoading(false);
      }
    };

    loadBlogDetails();
    }, []);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (!blogsDetails) {
    return <div className="container">Blog not found</div>;
  }

  return (
    <>
      <HeaderBreadcrumb pageTitle={blogsDetails.blog.title} />

      <section className="blog-details-sec pt-120 pb-70">
        <div className="container">
          <div className="row gx-5">
            <div className="col-xl-8">
              <div className="blog-details-wrapper">
                <div className="blog-post-main mb-70">
                  <div className="blog-post-item">
                    <div className="post-thumbnail">
                      {blogsDetails.blog.feature_image && (
                        <Image
                          src={blogsDetails.blog.feature_image}
                          alt={blogsDetails.blog.title}
                          width={800}
                          height={400}
                          unoptimized
                        />
                      )}
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="far fa-user" /> By Admin
                        </span>                        
                      </div>
                      <h4 className="title mt-3">{blogsDetails.blog.title}</h4>
                      <p className="mb-4">{blogsDetails.blog.sub_title}</p>
                      <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: blogsDetails.blog.content }}
                      />
                    </div>
                  </div>
                </div>
                {blogsDetails.related_blogs.length > 0 && (
                  <div className="related-blogs mt-5">
                    <h4>Related Posts</h4>
                    <ul>
                      {blogsDetails.related_blogs.map((item) => (
                        <li key={item.id}>
                          <Link href={`/blogs/${item.slug}`}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-4 ">
              <div className="sidebar-widget-area">
                <div className="sidebar-widget sidebar-nav-widget mb-30">
                  <h4 className="widget-title">Categories</h4>
                  <ul>
                    {blogsDetails.categories.map((cat) => (
                      <li key={cat.id}>
                        <Link href={`/blogs/category/${cat.slug}`}>
                          {cat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar-widget sidebar-tag-widget mb-30">
                  <h4 className="widget-title">Popular Tags</h4>
                  <div>
                    {blogsDetails.tags.length ? blogsDetails.tags.map((t, i) => <span key={i}>{t}</span>) : "No Tags"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default blogsDetails;
