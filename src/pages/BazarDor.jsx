import { useState } from "react";

const products = [
  { id: 1, name: "টমেটো (দেশি)", category: "সবজি", price: 60, unit: "কেজি", updatedAt: "২ ঘণ্টা আগে", trend: "down", image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&q=80" },
  { id: 2, name: "ইলিশ (মাঝারি)", category: "মাছ", price: 1200, unit: "কেজি", updatedAt: "৪ ঘণ্টা আগে", trend: "up", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80" },
  { id: 3, name: "গরুর মাংস", category: "মাংস", price: 750, unit: "কেজি", updatedAt: "১ দিন আগে", trend: "stable", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=400&q=80" },
  { id: 4, name: "মিনিকেট চাল", category: "চাল", price: 68, unit: "কেজি", updatedAt: "৫ ঘণ্টা আগে", trend: "down", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80" },
  { id: 5, name: "আলু (দেশি)", category: "সবজি", price: 35, unit: "কেজি", updatedAt: "৩ ঘণ্টা আগে", trend: "stable", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80" },
  { id: 6, name: "রুই মাছ", category: "মাছ", price: 380, unit: "কেজি", updatedAt: "২ ঘণ্টা আগে", trend: "up", image: "https://images.unsplash.com/photo-1559734840-f9509ee5677f?w=400&q=80" },
  { id: 7, name: "মুরগির মাংস", category: "মাংস", price: 220, unit: "কেজি", updatedAt: "৬ ঘণ্টা আগে", trend: "down", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&q=80" },
  { id: 8, name: "নাজিরশাইল চাল", category: "চাল", price: 85, unit: "কেজি", updatedAt: "১ ঘণ্টা আগে", trend: "stable", image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&q=80" },
  { id: 9, name: "বেগুন", category: "সবজি", price: 50, unit: "কেজি", updatedAt: "৩ ঘণ্টা আগে", trend: "up", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80" },
  { id: 10, name: "কাতলা মাছ", category: "মাছ", price: 320, unit: "কেজি", updatedAt: "৫ ঘণ্টা আগে", trend: "stable", image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=400&q=80" },
  { id: 11, name: "খাসির মাংস", category: "মাংস", price: 950, unit: "কেজি", updatedAt: "২ দিন আগে", trend: "up", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80" },
  { id: 12, name: "পাইজাম চাল", category: "চাল", price: 55, unit: "কেজি", updatedAt: "৪ ঘণ্টা আগে", trend: "down", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80" },
];

const categories = ["সব", "সবজি", "মাছ", "মাংস", "চাল"];
const districts = ["ঢাকা", "চট্টগ্রাম", "সিলেট", "রাজশাহী", "খুলনা"];
const categoryIcons = { সব: "", সবজি: "", মাছ: "", মাংস: "", চাল: "" };
const categoryColors = { সবজি: "bg-green-500", মাছ: "bg-blue-500", মাংস: "bg-red-500", চাল: "bg-amber-500" };

const TrendIcon = ({ trend }) => {
  if (trend === "up") return <span className="text-emerald-500 font-bold text-lg">↗</span>;
  if (trend === "down") return <span className="text-red-400 font-bold text-lg">↘</span>;
  return <span className="text-gray-400 font-bold text-lg">—</span>;
};

const ProductCard = ({ product }) => (
  <div className="card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer">
    <div className="relative h-44 overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover"
        onError={(e) => { e.target.src = "https://placehold.co/400x176/f3f4f6/9ca3af?text=No+Image"; }} />
      <span className={`absolute top-3 left-3 ${categoryColors[product.category]} text-white text-xs font-semibold px-2.5 py-1 rounded-full`}>
        {product.category}
      </span>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-gray-900 text-base mb-1">{product.name}</h3>
      <p className="text-gray-400 text-xs mb-3 flex items-center gap-1">
        <span>🕐</span><span>সর্বশেষ আপডেট: {product.updatedAt}</span>
      </p>
      <div className="flex items-center justify-between">
        <span className="text-blue-600 font-bold text-lg">৳ {product.price.toLocaleString()} / {product.unit}</span>
        <TrendIcon trend={product.trend} />
      </div>
    </div>
  </div>
);

const SearchBar = ({ value, onChange }) => (
  <div className="relative flex-1">
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
    <input type="text" value={value} onChange={(e) => onChange(e.target.value)}
      placeholder="খুঁজুন (যেমন: আলু, ইলিশ, বাসমতি চাল)"
      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm text-sm" />
  </div>
);

const DistrictDropdown = ({ selected, onSelect }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative sm:w-52">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm text-sm text-gray-700">
        <span className="flex items-center gap-2"><span>📍</span><span>{selected}</span></span>
        <span className="text-gray-400 text-xs">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
          {districts.map((d) => (
            <button key={d} onClick={() => { onSelect(d); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-blue-50 transition-colors ${selected === d ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"}`}>
              {d}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const CategoryPills = ({ active, onChange }) => (
  <div className="flex gap-2 flex-wrap">
    {categories.map((cat) => (
      <button key={cat} onClick={() => onChange(cat)}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
          active === cat
            ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200"
            : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"
        }`}>
        <span>{categoryIcons[cat]}</span><span>{cat}</span>
      </button>
    ))}
  </div>
);

// ─── PAGE: ALL PRODUCTS ──────────────────────────────────────────────────────
const AllProductsPage = ({ district, onBack }) => {
  const [activeCategory, setActiveCategory] = useState("সব");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(district);

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "সব" || p.category === activeCategory;
    const matchSearch = searchQuery === "" || p.name.includes(searchQuery);
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Back */}
        <button onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm mb-6 transition-colors">
          <span className="text-lg">←</span> হোমে ফিরে যান
        </button>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">সকল পণ্যের বাজারদর</h1>
          <p className="text-gray-500 text-sm mt-1">{filtered.length}টি পণ্য পাওয়া গেছে • {selectedDistrict}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <DistrictDropdown selected={selectedDistrict} onSelect={setSelectedDistrict} />
        </div>

        <div className="mb-8">
          <CategoryPills active={activeCategory} onChange={setActiveCategory} />
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <div className="text-5xl mb-3">🔍</div>
            <p>কোনো পণ্য পাওয়া যায়নি</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        )}

        <p className="text-center text-gray-400 text-xs mt-10">
          📊 দামগুলো স্থানীয় বাজার থেকে সংগ্রহ করা • {selectedDistrict} জেলা
        </p>
      </div>
    </div>
  );
};

// ─── PAGE: HOME ──────────────────────────────────────────────────────────────
const HomePage = ({ onViewAll }) => {
  const [activeCategory, setActiveCategory] = useState("সব");
  const [selectedDistrict, setSelectedDistrict] = useState("ঢাকা");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "সব" || p.category === activeCategory;
    const matchSearch = searchQuery === "" || p.name.includes(searchQuery);
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">বাজার দর</h1>
          <p className="text-gray-500 text-sm">প্রতিদিনের তাজা বাজারের দাম জানুন</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <DistrictDropdown selected={selectedDistrict} onSelect={setSelectedDistrict} />
        </div>

        <div className="mb-8">
          <CategoryPills active={activeCategory} onChange={setActiveCategory} />
        </div>

        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-900">আজকের প্রধান বাজারদর</h2>
          <button onClick={() => onViewAll(selectedDistrict)}
            className="text-blue-600 text-sm font-medium hover:underline">
            সবগুলো দেখুন →
          </button>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <div className="text-5xl mb-3">🔍</div>
            <p>কোনো পণ্য পাওয়া যায়নি</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filtered.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}
            </div>

            {filtered.length > 4 && (
              <div className="mt-8 text-center">
                <button onClick={() => onViewAll(selectedDistrict)}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-8 py-3 rounded-xl font-medium text-sm transition-all shadow-lg shadow-blue-200">
                  সকল {filtered.length}টি পণ্য দেখুন →
                </button>
              </div>
            )}
          </>
        )}

        <p className="text-center text-gray-400 text-xs mt-10">
          📊 দামগুলো স্থানীয় বাজার থেকে সংগ্রহ করা • {selectedDistrict} জেলা
        </p>
      </div>
    </div>
  );
};

// ─── APP ROOT ────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [district, setDistrict] = useState("ঢাকা");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Hind Siliguri', sans-serif; }
        .card-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.12); }
        .page-enter { animation: fadeSlideIn 0.3s ease; }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {page === "home"
        ? <HomePage onViewAll={(d) => { setDistrict(d); setPage("all"); }} />
        : <AllProductsPage district={district} onBack={() => setPage("home")} />
      }
    </>
  );
}