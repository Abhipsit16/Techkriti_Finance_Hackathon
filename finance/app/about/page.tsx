import Member from "../components/member";
export default function About() {

  type MemberType = {
    name: string;
    role: string;
  };
  
  const members: MemberType[] = [
    { name: "Abhipsit", role: "Lord of all the gay people of the world" },
    { name: "Pranay", role: "Lord of Lord" },
    { name: "Annie Leonhart", role: "Female Titan" },
    { name: "Manas", role: "Pta nhi" },
    { name: "Tanvi", role: "pta nhi" },
  ];
  
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white text-center py-20 px-6">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-3 text-lg">
            Learn more about our mission, values, and the team behind this website.
          </p>
        </section>
  
        {/* About Content */}
        <section className="max-w-4xl mx-auto mt-10 px-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-3 text-gray-700">
            Our goal is to create an innovative and user friendly Web app that helps user to grasp knowledge about financial statement and help them to make an informed decision. We
            believe in quality, creativity, and pushing boundaries to deliver the
            best solutions for our users.
          </p>
        </section>
  
        {/* Optional Team Section */}
        <section className="max-w-4xl mx-auto mt-10 px-6">
          <h2 className="text-2xl font-semibold text-gray-800">Meet the Team</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {members.map((element) => (
             <Member key={element.name} name={element.name} role={element.role} />
          ))}
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-white shadow-md p-4 text-center text-gray-600 mt-10">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </footer>
      </div>
    );
  }
  