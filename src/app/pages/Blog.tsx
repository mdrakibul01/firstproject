import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: 'Building Scalable React Applications',
      date: 'April 15, 2026',
      excerpt: 'Best practices and patterns for building large-scale React applications that maintain performance and code quality as your project grows.',
      readTime: '5 min read',
      category: 'React'
    },
    {
      title: 'Modern CSS Techniques in 2026',
      date: 'April 8, 2026',
      excerpt: 'Exploring the latest CSS features including container queries, cascade layers, and advanced grid techniques for responsive designs.',
      readTime: '7 min read',
      category: 'CSS'
    },
    {
      title: 'TypeScript Tips for Better Code',
      date: 'March 28, 2026',
      excerpt: 'Advanced TypeScript patterns that will make your code more maintainable, type-safe, and easier to refactor in the long run.',
      readTime: '6 min read',
      category: 'TypeScript'
    },
    {
      title: 'State Management in Modern React',
      date: 'March 20, 2026',
      excerpt: 'A comprehensive guide to choosing the right state management solution for your React application in 2026.',
      readTime: '8 min read',
      category: 'React'
    },
    {
      title: 'Web Performance Optimization',
      date: 'March 12, 2026',
      excerpt: 'Practical techniques and strategies to optimize your web applications for better performance and user experience.',
      readTime: '10 min read',
      category: 'Performance'
    },
    {
      title: 'Design Systems at Scale',
      date: 'March 5, 2026',
      excerpt: 'How to build and maintain design systems that scale across large organizations and multiple products.',
      readTime: '9 min read',
      category: 'Design'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-4">
              <span className="text-sm font-medium text-indigo-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                Blog
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Latest Articles
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Thoughts, insights, and tutorials on web development, design, and technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-indigo-300 transition-all duration-500 hover:shadow-2xl transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 text-xs font-medium text-white rounded-full"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)'
                    }}
                  >
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {post.date}
                  </span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
