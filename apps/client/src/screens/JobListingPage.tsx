import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechCorp",
    location: "San Francisco, CA",
    salary: "$120,000",
    description:
      "The Role You Will Be Responsible ForDesigning and developing high-quality, scalable, and responsive web applications using React and NextJS.Collaborating with cross-functional teams to define, design, and ship new features.Ensuring optimal application performance and user experience.Implementing modern JavaScript practices and integrating with backend services.Contributing to code reviews, documentation, and continuous improvement of development practices.Developing and maintaining UI component libraries.Proactively identifying and addressing issues and tapping on new opportunities.Ideal ProfileYou possess a Bachelor's in Engineering, Computer Science or a related field.Hands-on proficiency in React, NextJS, and TypeScript is a must.You possess strong knowledge of JavaScript, HTML, CSS (CSS modules/SCSS) and Web Fundamentals.You have experience with state management libraries such as Zustand and React Query.Proficiency in version control systems, preferably Git, is a plusYou are a driven professional who thrives in fast-paced environmentsGood communication abilities are required to interact and work in distributed remote teamsWhat's on Offer?Join ZenAdmin's diverse team of highly motivated people who are committed to achieving outstanding results, and helping companies build manage distributed teams with ease!Fast-track career growth while working in a remote work environment",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "BizInc",
    location: "New York, NY",
    salary: "$110,000",
    description:
      "The Role You Will Be Responsible ForDesigning and developing high-quality, scalable, and responsive web applications using React and NextJS.Collaborating with cross-functional teams to define, design, and ship new features.Ensuring optimal application performance and user experience.Implementing modern JavaScript practices and integrating with backend services.Contributing to code reviews, documentation, and continuous improvement of development practices.Developing and maintaining UI component libraries.Proactively identifying and addressing issues and tapping on new opportunities.Ideal ProfileYou possess a Bachelor's in Engineering, Computer Science or a related field.Hands-on proficiency in React, NextJS, and TypeScript is a must.You possess strong knowledge of JavaScript, HTML, CSS (CSS modules/SCSS) and Web Fundamentals.You have experience with state management libraries such as Zustand and React Query.Proficiency in version control systems, preferably Git, is a plusYou are a driven professional who thrives in fast-paced environmentsGood communication abilities are required to interact and work in distributed remote teamsWhat's on Offer?Join ZenAdmin's diverse team of highly motivated people who are committed to achieving outstanding results, and helping companies build manage distributed teams with ease!Fast-track career growth while working in a remote work environment",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "DesignStudio",
    location: "Remote",
    salary: "$95,000",
    description:
      "The Role You Will Be Responsible ForDesigning and developing high-quality, scalable, and responsive web applications using React and NextJS.Collaborating with cross-functional teams to define, design, and ship new features.Ensuring optimal application performance and user experience.Implementing modern JavaScript practices and integrating with backend services.Contributing to code reviews, documentation, and continuous improvement of development practices.Developing and maintaining UI component libraries.Proactively identifying and addressing issues and tapping on new opportunities.Ideal ProfileYou possess a Bachelor's in Engineering, Computer Science or a related field.Hands-on proficiency in React, NextJS, and TypeScript is a must.You possess strong knowledge of JavaScript, HTML, CSS (CSS modules/SCSS) and Web Fundamentals.You have experience with state management libraries such as Zustand and React Query.Proficiency in version control systems, preferably Git, is a plusYou are a driven professional who thrives in fast-paced environmentsGood communication abilities are required to interact and work in distributed remote teamsWhat's on Offer?Join ZenAdmin's diverse team of highly motivated people who are committed to achieving outstanding results, and helping companies build manage distributed teams with ease!Fast-track career growth while working in a remote work environment",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataWorks",
    location: "Austin, TX",
    salary: "$130,000",
    description:
      "The Role You Will Be Responsible ForDesigning and developing high-quality, scalable, and responsive web applications using React and NextJS.Collaborating with cross-functional teams to define, design, and ship new features.Ensuring optimal application performance and user experience.Implementing modern JavaScript practices and integrating with backend services.Contributing to code reviews, documentation, and continuous improvement of development practices.Developing and maintaining UI component libraries.Proactively identifying and addressing issues and tapping on new opportunities.Ideal ProfileYou possess a Bachelor's in Engineering, Computer Science or a related field.Hands-on proficiency in React, NextJS, and TypeScript is a must.You possess strong knowledge of JavaScript, HTML, CSS (CSS modules/SCSS) and Web Fundamentals.You have experience with state management libraries such as Zustand and React Query.Proficiency in version control systems, preferably Git, is a plusYou are a driven professional who thrives in fast-paced environmentsGood communication abilities are required to interact and work in distributed remote teamsWhat's on Offer?Join ZenAdmin's diverse team of highly motivated people who are committed to achieving outstanding results, and helping companies build manage distributed teams with ease!Fast-track career growth while working in a remote work environment",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudNet",
    location: "Seattle, WA",
    salary: "$125,000",
    description:
      "The Role You Will Be Responsible ForDesigning and developing high-quality, scalable, and responsive web applications using React and NextJS.Collaborating with cross-functional teams to define, design, and ship new features.Ensuring optimal application performance and user experience.Implementing modern JavaScript practices and integrating with backend services.Contributing to code reviews, documentation, and continuous improvement of development practices.Developing and maintaining UI component libraries.Proactively identifying and addressing issues and tapping on new opportunities.Ideal ProfileYou possess a Bachelor's in Engineering, Computer Science or a related field.Hands-on proficiency in React, NextJS, and TypeScript is a must.You possess strong knowledge of JavaScript, HTML, CSS (CSS modules/SCSS) and Web Fundamentals.You have experience with state management libraries such as Zustand and React Query.Proficiency in version control systems, preferably Git, is a plusYou are a driven professional who thrives in fast-paced environmentsGood communication abilities are required to interact and work in distributed remote teamsWhat's on Offer?Join ZenAdmin's diverse team of highly motivated people who are committed to achieving outstanding results, and helping companies build manage distributed teams with ease!Fast-track career growth while working in a remote work environment",
  },
];

const JobListingPage = () => {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <Card key={job.id} className="mb-4">
            <CardHeader>
              <CardTitle>
                {job.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>Company:</strong> {job.company}
              </p>
              <p className="text-gray-700">
                <strong>Location:</strong> {job.location}
              </p>
              <p className="text-gray-700">
                <strong>Salary:</strong> {job.salary}
              </p>
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default JobListingPage;
