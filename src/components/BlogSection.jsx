import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
  const blogEntries = [
    {
      id: 'bg-1',
      blogTag: 'Paid Advertising',
      blogTitle: 'A Beginner\'s Guide to Running Profitable Ad Cam...',
      blogExcerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      blogImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=260&fit=crop',
      blogLink: '#blog-1'
    },
    {
      id: 'bg-2',
      blogTag: 'SEO',
      blogTitle: 'Top 10 SEO Strategies That Still Work in 2025',
      blogExcerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      blogImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=260&fit=crop',
      blogLink: '#blog-2'
    },
    {
      id: 'bg-3',
      blogTag: 'Content Marketing',
      blogTitle: 'Why Long-Form Content Still Dominates in 2025',
      blogExcerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      blogImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=260&fit=crop',
      blogLink: '#blog-3'
    }
  ];

  return (
    <section className="blog-outer">
      {/* Top diagonal decoration */}
      <div className="blog-diag blog-diag-top"></div>

      <div className="blog-inner">
        {/* Header Row */}
        <div className="blog-headerrow">
          <div className="blog-headerleft">
            <div className="blog-emblem">
              <div className="blog-emblem-shape">
                <div className="blog-emblem-bar"></div>
                <div className="blog-emblem-bar"></div>
              </div>
              <span className="blog-emblem-txt">News & Blogs</span>
            </div>
            <h2 className="blog-headline">
              Our Latest<br />
              News & Blogs
            </h2>
          </div>
          <a href="#blogs" className="blog-viewall">
            View All Blogs
            <span className="blog-viewall-arrow">→</span>
          </a>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {blogEntries.map((entry) => (
            <a key={entry.id} href={entry.blogLink} className="blog-card">
              <div className="blog-visual">
                <img
                  src={entry.blogImage}
                  alt={entry.blogTitle}
                  className="blog-img"
                />
                <span className="blog-tag">{entry.blogTag}</span>
              </div>
              <div className="blog-body">
                <h3 className="blog-title">{entry.blogTitle}</h3>
                <p className="blog-excerpt">{entry.blogExcerpt}</p>
                <span className="blog-readmore">
                  Read More
                  <span className="blog-readmore-arrow">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom diagonal decoration */}
      <div className="blog-diag blog-diag-bottom"></div>
    </section>
  );
};

export default BlogSection;