import React from "react";

const blogs = [
    {
        img: "/assets/imgs/blog/blog-1.jpg",
        title: "The Best Organic Products Online",
        date: "2025-06-20",
        excerpt: "Discover the top organic products and tips for healthy living.",
        link: "/blog-post-1",
    },
    {
        img: "/assets/imgs/blog/blog-2.jpg",
        title: "Fresh Fruits for Your Family",
        date: "2025-06-19",
        excerpt: "Why you should choose fresh fruits every day for your family.",
        link: "/blog-post-2",
    },
    {
        img: "/assets/imgs/blog/blog-3.jpg",
        title: "Dairy Products: What You Need to Know",
        date: "2025-06-18",
        excerpt: "Learn all about dairy benefits and selection tips.",
        link: "/blog-post-3",
    },
];

export default function BlogSection() {
    return (
        <section className="container mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-6">Latest Blog Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogs.map((blog, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition flex flex-col">
                        <img src={blog.img} alt={blog.title} className="rounded w-full h-40 object-cover mb-3" />
                        <div className="text-xs text-gray-400 mb-1">{blog.date}</div>
                        <a href={blog.link} className="font-semibold text-lg mb-2 hover:text-green-700">{blog.title}</a>
                        <p className="text-gray-600 flex-1">{blog.excerpt}</p>
                        <a href={blog.link} className="text-green-600 font-semibold mt-2">Read more &rarr;</a>
                    </div>
                ))}
            </div>
        </section>
    );
}