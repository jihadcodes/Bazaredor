import { useState, useEffect } from "react";

const divisions = {
  "ঢাকা": ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ", "মানিকগঞ্জ", "মুন্সীগঞ্জ", "নরসিংদী", "ফরিদপুর", "গোপালগঞ্জ", "মাদারীপুর", "রাজবাড়ী", "শরীয়তপুর", "কিশোরগঞ্জ", "টাঙ্গাইল"],
  "চট্টগ্রাম": ["চট্টগ্রাম", "কক্সবাজার", "কুমিল্লা", "ফেনী", "ব্রাহ্মণবাড়িয়া", "রাঙামাটি", "নোয়াখালী", "চাঁদপুর", "লক্ষ্মীপুর", "খাগড়াছড়ি", "বান্দরবান"],
  "রাজশাহী": ["রাজশাহী", "বগুড়া", "পাবনা", "নাটোর", "চাঁপাইনবাবগঞ্জ", "নওগাঁ", "জয়পুরহাট", "সিরাজগঞ্জ"],
  "খুলনা": ["খুলনা", "বাগেরহাট", "সাতক্ষীরা", "যশোর", "ঝিনাইদহ", "মাগুরা", "নড়াইল", "কুষ্টিয়া", "চুয়াডাঙ্গা", "মেহেরপুর"],
  "বরিশাল": ["বরিশাল", "পটুয়াখালী", "ভোলা", "পিরোজপুর", "বরগুনা", "ঝালকাঠি"],
  "সিলেট": ["সিলেট", "মৌলভীবাজার", "হবিগঞ্জ", "সুনামগঞ্জ"],
  "রংপুর": ["রংপুর", "দিনাজপুর", "গাইবান্ধা", "নীলফামারী", "কুড়িগ্রাম", "লালমনিরহাট", "ঠাকুরগাঁও", "পঞ্চগড়"],
  "ময়মনসিংহ": ["ময়মনসিংহ", "নেত্রকোণা", "জামালপুর", "শেরপুর"],
};

export default function LocationModal({ isOpenExternal, onSelect, onClose }) {
  const [animateIn, setAnimateIn] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    if (isOpenExternal) {
      setTimeout(() => setAnimateIn(true), 10);
    } else {
      setAnimateIn(false);
    }
  }, [isOpenExternal]);

  useEffect(() => {
    if (isOpenExternal) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.documentElement.style.setProperty("--scrollbar-width", `${scrollBarWidth}px`);
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.documentElement.style.removeProperty("--scrollbar-width");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.documentElement.style.removeProperty("--scrollbar-width");
    };
  }, [isOpenExternal]);

  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
    setSelectedDistrict("");
  };

  const handleSelect = () => {
    if (!selectedDivision || !selectedDistrict) {
      alert("অনুগ্রহ করে বিভাগ এবং জেলা নির্বাচন করুন।");
      return;
    }
    onSelect(selectedDivision, selectedDistrict);
  };

  const handleClose = () => {
    setAnimateIn(false);
    setTimeout(() => onClose(), 200);
  };

  if (!isOpenExternal) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          right: var(--scrollbar-width, 0px);
          bottom: 0;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(3px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: opacity 0.2s ease;
          opacity: ${animateIn ? 1 : 0};
          font-family: 'Hind Siliguri', sans-serif;
        }
        .modal-box {
          background: #ffffff;
          border-radius: 16px;
          padding: 28px 28px 24px;
          width: 100%;
          max-width: 420px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease;
          transform: ${animateIn ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)"};
          opacity: ${animateIn ? 1 : 0};
        }
        .modal-header { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 24px; }
        .header-icon {
          background: #e8f5e9; border-radius: 10px;
          width: 46px; height: 46px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 2px;
        }
        .header-text h2 { font-size: 20px; font-weight: 700; color: #1a1a1a; line-height: 1.3; margin-bottom: 4px; }
        .header-text p  { font-size: 13px; color: #777; line-height: 1.5; }
        .field-group { margin-bottom: 18px; }
        .field-label {
          display: flex; align-items: center; gap: 7px;
          font-size: 13.5px; font-weight: 600; color: #444; margin-bottom: 8px;
        }
        .field-label svg { color: #2e7d32; }
        .styled-select {
          width: 100%; padding: 12px 16px;
          border: 1.5px solid #e0e0e0; border-radius: 10px;
          font-size: 14.5px; color: #333;
          font-family: 'Hind Siliguri', sans-serif;
          background: #fafafa; appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 14px center;
          cursor: pointer; transition: border-color 0.2s, box-shadow 0.2s; outline: none;
        }
        .styled-select:focus { border-color: #2e7d32; box-shadow: 0 0 0 3px rgba(46,125,50,0.12); background-color: #fff; }
        .styled-select:disabled { opacity: 0.5; cursor: not-allowed; }
        .loc-divider { height: 1px; background: #f0f0f0; margin: 20px 0; }
        .btn-row { display: flex; align-items: center; gap: 12px; }
        .btn-cancel {
          display: flex; align-items: center; gap: 6px;
          background: none; border: none; font-size: 14px;
          font-family: 'Hind Siliguri', sans-serif;
          color: #777; cursor: pointer; padding: 10px 4px;
          transition: color 0.2s; white-space: nowrap;
        }
        .btn-cancel:hover { color: #333; }
        .btn-select {
          flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px;
          background: #2e7d32; color: white; border: none; border-radius: 10px;
          padding: 13px 20px; font-size: 15px; font-weight: 600;
          font-family: 'Hind Siliguri', sans-serif;
          cursor: pointer; transition: background 0.2s, transform 0.1s;
        }
        .btn-select:hover { background: #1b5e20; }
        .btn-select:active { transform: scale(0.98); }
      `}</style>

      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>

          <div className="modal-header">
            <div className="header-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </div>
            <div className="header-text">
              <h2>আপনার লোকেশন সিলেক্ট করুন</h2>
              <p>সঠিক বাজারদর দেখতে আপনার এলাকা নির্বাচন করুন</p>
            </div>
          </div>

          <div className="field-group">
            <div className="field-label">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
              </svg>
              বিভাগ নির্বাচন করুন
            </div>
            <select className="styled-select" value={selectedDivision} onChange={handleDivisionChange}>
              <option value="">বিভাগ বেছে নিন</option>
              {Object.keys(divisions).map((div) => (
                <option key={div} value={div}>{div}</option>
              ))}
            </select>
          </div>

          <div className="field-group">
            <div className="field-label">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
              </svg>
              জেলা নির্বাচন করুন
            </div>
            <select className="styled-select" value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              disabled={!selectedDivision}>
              <option value="">জেলা বেছে নিন</option>
              {selectedDivision && divisions[selectedDivision].map((dist) => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>

          <div className="loc-divider" />

          <div className="btn-row">
            <button className="btn-cancel" onClick={handleClose}>
              <span>✕</span> বাতিল করুন
            </button>
            <button className="btn-select" onClick={handleSelect}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              সিলেক্ট করুন
            </button>
          </div>

        </div>
      </div>
    </>
  );
}