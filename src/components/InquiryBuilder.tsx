import React, { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface InquiryBuilderProps {
  initialService?: string;
}

export const InquiryBuilder: React.FC<InquiryBuilderProps> = ({ initialService = '' }) => {
  const [deviceBrand, setDeviceBrand] = useState('Samsung');
  const [deviceModel, setDeviceModel] = useState('');
  const [issueType, setIssueType] = useState(initialService || 'Screen Issue');
  const [symptoms, setSymptoms] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const brands = [
    'Samsung',
    'Apple iPhone',
    'Xiaomi / Redmi',
    'Infinix',
    'Tecno',
    'Oppo',
    'Vivo',
    'Realme',
    'Other Brand',
  ];

  const issueCategories = [
    'Screen Issue (Cracked / Black Display)',
    'Battery Drain / Swelling / Shutdowns',
    'Charging Port / Not Charging',
    'Software / Boot Loop / Update Error',
    'Water or Liquid Damage',
    'Speaker / Mic / Audio Issue',
    'Camera / Lens Problem',
    'Complete Device Diagnosis (Unknown Cause)',
  ];

  const generateWhatsAppMessage = () => {
    let msg = `Hi Star City Mobile Repairing,\nI want to inquire about a mobile repair at your Quetta shop.`;
    msg += `\nDevice: ${deviceBrand} ${deviceModel ? `(${deviceModel})` : ''}`;
    msg += `\nIssue: ${issueType}`;
    if (symptoms.trim()) {
      msg += `\nSymptoms: ${symptoms.trim()}`;
    }
    msg += `\nPlease let me know when I can bring it in for assessment.`;
    return msg;
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(generateWhatsAppMessage());
    window.open(`https://wa.me/923458919199?text=${text}`, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-[#0b1222] border border-blue-500/20 rounded-xl p-5 sm:p-7 shadow-xl shadow-black/40">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-5">
        <div>
          <h3 className="font-display font-semibold text-lg text-white">
            Quick Repair Inquiry
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Select your device details to prepare a direct inquiry for our Quetta workshop
          </p>
        </div>
        <div className="text-xs text-blue-400 font-mono">
          DIRECT ROUTING · MALAK PLAZA
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
        {/* Brand */}
        <div>
          <label className="block text-slate-300 font-medium mb-1.5 text-xs">
            Mobile Brand
          </label>
          <select
            value={deviceBrand}
            onChange={(e) => setDeviceBrand(e.target.value)}
            className="w-full bg-[#0f172a] border border-slate-700/80 rounded-md px-3 py-2 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500"
          >
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Model */}
        <div>
          <label className="block text-slate-300 font-medium mb-1.5 text-xs">
            Device Model (e.g. A54, iPhone 13, Note 12)
          </label>
          <input
            type="text"
            placeholder="Type your model if known"
            value={deviceModel}
            onChange={(e) => setDeviceModel(e.target.value)}
            className="w-full bg-[#0f172a] border border-slate-700/80 rounded-md px-3 py-2 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 placeholder:text-slate-500"
          />
        </div>

        {/* Issue Type */}
        <div className="md:col-span-2">
          <label className="block text-slate-300 font-medium mb-1.5 text-xs">
            Issue Category
          </label>
          <select
            value={issueType}
            onChange={(e) => setIssueType(e.target.value)}
            className="w-full bg-[#0f172a] border border-slate-700/80 rounded-md px-3 py-2 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500"
          >
            {issueCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Symptoms */}
        <div className="md:col-span-2">
          <label className="block text-slate-300 font-medium mb-1.5 text-xs">
            Describe the problem (optional)
          </label>
          <textarea
            rows={2}
            placeholder="e.g. Fell from hand, screen went black, or battery drains very quickly when connected to Wi-Fi"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            className="w-full bg-[#0f172a] border border-slate-700/80 rounded-md px-3 py-2 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 placeholder:text-slate-500 resize-none"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-[11px] text-slate-400 w-full sm:w-auto text-center sm:text-left">
          No automated robots. Direct message to our team in Quetta.
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
          <button
            type="button"
            onClick={handleCopy}
            className="px-3 py-2 text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
          >
            {isCopied ? 'Copied to Clipboard' : 'Copy Message'}
          </button>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Star City</span>
          </a>

          <button
            type="button"
            onClick={handleWhatsAppSend}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-all shadow-md shadow-emerald-950/50"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Open in WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
