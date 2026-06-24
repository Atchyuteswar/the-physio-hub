export default function TrustBar() {
  const stats = [
    { value: "500+", label: "Patients Treated" },
    { value: "10+", label: "Years Experience" },
    { value: "98%", label: "Success Rate" },
    { value: "8+", label: "Specialized Programs" },
  ];

  return (
    <div className="bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 divide-y md:divide-y-0 md:divide-x divide-slate-800/50">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center justify-center text-center ${idx > 1 ? "pt-8 md:pt-0" : ""}`}
            >
              <p className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm md:text-base font-medium text-slate-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
