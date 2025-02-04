const blogPosts = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends in web development and what's coming next in 2025",
    date: "Feb 4, 2025",
    category: "Technology",
    image: "/blog1.jpg"
  },
  {
    title: "Microservices Architecture",
    excerpt: "A deep dive into building scalable systems with microservices architecture",
    date: "Feb 2, 2025",
    category: "Architecture",
    image: "/blog2.jpg"
  },
  {
    title: "AI in Modern Applications",
    excerpt: "How artificial intelligence is transforming software development",
    date: "Jan 30, 2025",
    category: "AI & ML",
    image: "/blog3.jpg"
  }
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Latest Insights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with our latest thoughts on technology, development, and industry trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="h-48 bg-gray-700 relative">
                {/* Add blog post image here */}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-400">{post.category}</span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <button className="text-blue-400 hover:text-blue-300 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
