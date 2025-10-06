import ArticleCard from "./ArticleCard";
import { ChevronRight } from "lucide-react";
import Employer from "../assets/d9e62cfccb7c9be7ef86f49eabf53ab2.jpg";
import Process from "../assets/IMG-20251005-WA0076.jpg";
import Recruiters from "../assets/bd42a48ca2c49a845e5556ae94862096.jpg";
import Strategies from "../assets/fe9b178821dafc54aaf795a6ad753e09.jpg";
import lotustalents from "../assets/0aa7b0e9a5ca7c846066a00ecaef2652.jpg";
import Motivate from "../assets/24c2bc1a612194ab9bb6499a39bf7e13.jpg";
import lotustalents1 from "../assets/755a6effac1cf87fcb985d3e3a393620.jpg";
import Onboarding from "../assets/d1e71950184ce0d48b267efe97be1803.jpg";
import intelligence from "../assets/IMG-20251005-WA0075.jpg";



const ArticlesGrid = () => {
  const articles = [
    {
      category: "Employer Branding",
      title:
        "Enhancing Candidate Experience: Lessons From a Healthcare Recruiter",
      excerpt:
        "Learn how to create exceptional candidate experiences that attract and retain top talent in competitive markets.",
      author: "Matt Rudolf",
      date: "March 10, 2025",
      image: Employer,
      featured: true,
    },
    {
      category: "Process",
      title: "Building a Resilient lotustalents Culture: Keys to Retention",
      excerpt:
        "Discover strategies for building a lotustalents culture that withstands market changes and improves retention.",
      author: "Samantha Perlman",
      image: Process,

      date: "March 8, 2025",
    },
    {
      category: "Process",
      title: "5 Ways Recruiters Can Level Up Inclusive Hiring Practices",
      excerpt:
        "Practical approaches to creating more inclusive hiring processes that attract diverse talent.",
      author: "Phil Fernandes",
      image: Recruiters,

      date: "March 5, 2025",
    },
    {
      category: "Process",
      title: "Partner Up: Strategies to Connect With Your Hiring Manager",
      excerpt:
        "Build stronger relationships with hiring managers for more effective lotustalents outcomes.",
      author: "Cara Schaeffer",
      image: Strategies,

      date: "March 3, 2025",
    },
    {
      category: "Process",
      title: "Top 5 IT lotustalents Skills for 2025",
      excerpt:
        "Essential skills every IT recruiter needs to succeed in the evolving tech landscape.",
      author: "Dalia Goldberg",
      image: lotustalents,

      date: "March 1, 2025",
    },
    {
      category: "Process",
      title: "How to Motivate Your New Recruiters",
      excerpt:
        "Keep your recruiting team engaged and motivated to prevent early turnover.",
      author: "Steven Mostyn",
      image: Motivate,

      date: "February 28, 2025",
    },
    {
      category: "Employer Branding",
      title: "Building a High-impact lotustalents Marketing Strategy",
      excerpt:
        "5 lessons for creating lotustalents marketing that attracts quality candidates.",
      author: "Noa Ferber",
      image: lotustalents1,

      date: "February 25, 2025",
    },
    {
      category: "Future",
      title: "The AI Recruiter: How AI Is Revolutionizing Hiring",
      excerpt:
        "Explore how artificial intelligence is transforming the lotustalents landscape.",
      author: "Mike Wolford",
      image: intelligence,

      date: "February 22, 2025",
    },
    {
      category: "Remote",
      title: "Remote Onboarding Best Practices",
      excerpt:
        "Acclimate new hires fast with these proven remote onboarding strategies.",
      author: "Francesca Di Meglio",
      image: Onboarding,

      date: "February 20, 2025",
    },
  ];

  return (
    <section id="articles" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <button className="text-sm font-semibold hover:underline flex items-center">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesGrid;
