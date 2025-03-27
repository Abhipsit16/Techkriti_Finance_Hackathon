type MemberProps = {
    name: string;
    role: string;
  };
  
  export default function Member({ name, role }: MemberProps) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    );
  }
  