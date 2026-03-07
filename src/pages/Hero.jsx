
export default function Hero() {
  return (
    <section className="bg-white px-6 py-10">
      <div className="max-w-7xl mx-auto bg-blue-50 rounded-3xl px-10 py-10 flex items-center justify-between gap-8">
        
        {/* Left Content */}
        <div className="flex-1 w-[45%]">
          {/* Badge */}
          <span className="inline-block bg-white border border-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full mb-5 shadow-sm ">
            দৈনিক আপডেট
          </span>

          {/* Heading */}
          <h1 className="text-[60px] font-black leading-tight text-gray-900 mb-4"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
            বাংলাদেশের
            <br />
            দৈনিক{" "}
            <span className="text-blue-600">বাজারদর</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-500 text-sm leading-relaxed mb-7">
            সঠিক মূল্য দেখে কেনাকাটা করুন। আমরা প্রতিদিনের
            <br />
            বাজারের সর্বশেষ তথ্য সরবরাহ করি।
          </p>

          {/* CTA Button */}
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-semibold px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-[1.02]">
            বিস্তারিত দেখুন 
          </button>
        </div>

        {/* Right Image */}
        <div className="shrink-0 w-[50%]  rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80"
            alt="বাজার"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@700;800&display=swap');
      `}</style>
    </section>
  );
}
