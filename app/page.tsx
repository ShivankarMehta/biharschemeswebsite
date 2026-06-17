"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { categories, commonDocs, copy, schemes, type Language, type Scheme } from "../data/schemes";

const governments = ["state", "central"] as const;
const cleanHindiCopy = {
  brand: "बिहार के लोगों के लिए योजनाएं",
  eyebrow: "बिहार और केंद्र सरकार की मदद की जानकारी",
  heroTitle: "बिहार के लोगों के काम आने वाली योजनाएं आसान भाषा में समझें।",
  heroText:
    "पढ़ाई, नौकरी, खेती, इलाज, घर, पेंशन, राशन, महिला सहायता और छोटे व्यवसाय से जुड़ी योजनाएं यहां सरल भाषा में समझाई गई हैं।",
  browseSchemes: "योजनाएं देखें",
  quickChecklist: "जरूरी दस्तावेज",
  noticeTitle: "जरूरी बात:",
  noticeText:
    "यह वेबसाइट जानकारी देने के लिए है। आवेदन करने से पहले योजना की तारीख, पात्रता और दस्तावेज आधिकारिक पोर्टल पर जरूर जांचें।",
  schemesListed: "योजनाएं शामिल",
  governmentsCovered: "सरकारें शामिल",
  languageSupport: "भाषा सुविधा",
  directory: "योजना खोजें",
  findScheme: "अपनी जरूरत की योजना खोजें",
  searchLabel: "योजना का नाम, लाभ, विभाग या दस्तावेज लिखकर खोजें",
  searchPlaceholder: "योजना खोजें...",
  emptyState: "आपकी खोज से कोई योजना नहीं मिली।",
  prepare: "आवेदन से पहले तैयारी",
  checklistTitle: "आम तौर पर लगने वाले दस्तावेज",
  checklistText: "हर योजना में दस्तावेज अलग हो सकते हैं, लेकिन ये दस्तावेज अक्सर मांगे जाते हैं।",
  footerText: "आधिकारिक पोर्टलों के आधार पर जन-सूचना गाइड। अंतिम समीक्षा: 15 जून 2026।",
  allCategories: "सभी श्रेणियां",
  allGovernments: "सभी सरकारें",
  state: "बिहार सरकार",
  central: "केंद्र सरकार",
  benefit: "क्या लाभ मिलेगा",
  eligibility: "कौन आवेदन कर सकता है",
  documents: "कौन से कागज लगेंगे",
  points: "ध्यान रखने वाली बातें",
  apply: "आवेदन पोर्टल",
  source: "आधिकारिक जानकारी"
} as const;
const categoryLabelsHi: Record<string, string> = {
  education: "शिक्षा",
  youth: "युवा और रोजगार",
  women: "महिला और बाल",
  farmers: "किसान",
  health: "स्वास्थ्य",
  housing: "आवास",
  pension: "पेंशन",
  food: "राशन और खाद्य सुरक्षा",
  business: "व्यवसाय",
  workers: "श्रमिक"
};
const commonDocsHi = [
  "आधार कार्ड",
  "आधार से जुड़ा मोबाइल नंबर",
  "बैंक पासबुक या खाता विवरण",
  "पासपोर्ट फोटो",
  "निवास प्रमाण पत्र",
  "आय प्रमाण पत्र, जहां जरूरत हो",
  "जाति/EWS/दिव्यांग प्रमाण पत्र, जहां लागू हो",
  "राशन कार्ड या परिवार विवरण",
  "मार्कशीट या प्रवेश प्रमाण, छात्र योजनाओं के लिए",
  "भूमि रिकॉर्ड या किसान पंजीकरण, किसान योजनाओं के लिए",
  "प्रोजेक्ट रिपोर्ट, व्यवसाय योजनाओं के लिए",
  "आवेदन जमा करने के बाद मिली रसीद या आवेदन नंबर"
];

const districts = [
  { id: "araria", nameHi: "अररिया", nameEn: "Araria", website: "https://araria.nic.in" },
  { id: "arwal", nameHi: "अरवल", nameEn: "Arwal", website: "https://arwal.nic.in" },
  { id: "aurangabad", nameHi: "औरंगाबाद", nameEn: "Aurangabad", website: "https://aurangabad.bih.nic.in" },
  { id: "banka", nameHi: "बांका", nameEn: "Banka", website: "https://banka.nic.in" },
  { id: "begusarai", nameHi: "बेगूसराय", nameEn: "Begusarai", website: "https://begusarai.nic.in" },
  { id: "bhagalpur", nameHi: "भागलपुर", nameEn: "Bhagalpur", website: "https://bhagalpur.nic.in" },
  { id: "bhojpur", nameHi: "भोजपुर", nameEn: "Bhojpur", website: "https://bhojpur.nic.in" },
  { id: "buxar", nameHi: "बक्सर", nameEn: "Buxar", website: "https://buxar.nic.in" },
  { id: "darbhanga", nameHi: "दरभंगा", nameEn: "Darbhanga", website: "https://darbhanga.nic.in" },
  { id: "east-champaran", nameHi: "पूर्वी चंपारण", nameEn: "East Champaran", website: "https://eastchamparan.nic.in" },
  { id: "gaya", nameHi: "गया", nameEn: "Gaya", website: "https://gaya.nic.in" },
  { id: "gopalganj", nameHi: "गोपालगंज", nameEn: "Gopalganj", website: "https://gopalganj.nic.in" },
  { id: "jamui", nameHi: "जमुई", nameEn: "Jamui", website: "https://jamui.nic.in" },
  { id: "jehanabad", nameHi: "जहानाबाद", nameEn: "Jehanabad", website: "https://jehanabad.nic.in" },
  { id: "kaimur", nameHi: "कैमूर", nameEn: "Kaimur", website: "https://kaimur.nic.in" },
  { id: "katihar", nameHi: "कटिहार", nameEn: "Katihar", website: "https://katihar.nic.in" },
  { id: "khagaria", nameHi: "खगड़िया", nameEn: "Khagaria", website: "https://khagaria.nic.in" },
  { id: "kishanganj", nameHi: "किशनगंज", nameEn: "Kishanganj", website: "https://kishanganj.nic.in" },
  { id: "lakhisarai", nameHi: "लखीसराय", nameEn: "Lakhisarai", website: "https://lakhisarai.nic.in" },
  { id: "madhepura", nameHi: "मधेपुरा", nameEn: "Madhepura", website: "https://madhepura.nic.in" },
  { id: "madhubani", nameHi: "मधुबनी", nameEn: "Madhubani", website: "https://madhubani.nic.in" },
  { id: "munger", nameHi: "मुंगेर", nameEn: "Munger", website: "https://munger.nic.in" },
  { id: "muzaffarpur", nameHi: "मुजफ्फरपुर", nameEn: "Muzaffarpur", website: "https://muzaffarpur.nic.in" },
  { id: "nalanda", nameHi: "नालंदा", nameEn: "Nalanda", website: "https://nalanda.nic.in" },
  { id: "nawada", nameHi: "नवादा", nameEn: "Nawada", website: "https://nawada.nic.in" },
  { id: "patna", nameHi: "पटना", nameEn: "Patna", website: "https://patna.nic.in" },
  { id: "purnea", nameHi: "पूर्णिया", nameEn: "Purnea", website: "https://purnea.nic.in" },
  { id: "rohtas", nameHi: "रोहतास", nameEn: "Rohtas", website: "https://rohtas.nic.in" },
  { id: "saharsa", nameHi: "सहरसा", nameEn: "Saharsa", website: "https://saharsa.nic.in" },
  { id: "samastipur", nameHi: "समस्तीपुर", nameEn: "Samastipur", website: "https://samastipur.nic.in" },
  { id: "saran", nameHi: "सारण", nameEn: "Saran", website: "https://saran.nic.in" },
  { id: "sheikhpura", nameHi: "शेखपुरा", nameEn: "Sheikhpura", website: "https://sheikhpura.nic.in" },
  { id: "sheohar", nameHi: "शिवहर", nameEn: "Sheohar", website: "https://sheohar.nic.in" },
  { id: "sitamarhi", nameHi: "सीतामढ़ी", nameEn: "Sitamarhi", website: "https://sitamarhi.nic.in" },
  { id: "siwan", nameHi: "सिवान", nameEn: "Siwan", website: "https://siwan.nic.in" },
  { id: "supaul", nameHi: "सुपौल", nameEn: "Supaul", website: "https://supaul.nic.in" },
  { id: "vaishali", nameHi: "वैशाली", nameEn: "Vaishali", website: "https://vaishali.nic.in" },
  { id: "west-champaran", nameHi: "पश्चिमी चंपारण", nameEn: "West Champaran", website: "https://westchamparan.nic.in" }
];

const officeGuidanceByCategory: Record<
  string,
  {
    officeHi: string;
    officeEn: string;
    officerHi: string;
    officerEn: string;
    hintHi: string;
    hintEn: string;
  }
> = {
  education: {
    officeHi: "जिला शिक्षा कार्यालय या DRCC केंद्र",
    officeEn: "District Education Office or DRCC centre",
    officerHi: "जिला शिक्षा पदाधिकारी, DRCC प्रबंधक या छात्रवृत्ति प्रभारी",
    officerEn: "District Education Officer, DRCC Manager, or scholarship officer",
    hintHi: "छात्र योजना में स्कूल/कॉलेज से प्रमाण पत्र और जिला शिक्षा/DRCC सत्यापन की जरूरत पड़ सकती है।",
    hintEn: "Student schemes may need school/college proof and verification through the education office or DRCC."
  },
  youth: {
    officeHi: "DRCC केंद्र, जिला नियोजनालय या कौशल प्रशिक्षण केंद्र",
    officeEn: "DRCC centre, District Employment Exchange, or skill centre",
    officerHi: "DRCC प्रबंधक, जिला नियोजन पदाधिकारी या केंद्र समन्वयक",
    officerEn: "DRCC Manager, District Employment Officer, or centre coordinator",
    hintHi: "युवा योजनाओं में उम्र, पढ़ाई और बेरोजगारी/प्रशिक्षण से जुड़े कागज पूछे जा सकते हैं।",
    hintEn: "Youth schemes may ask for age, education, unemployment, or training-related documents."
  },
  women: {
    officeHi: "जिला कार्यक्रम कार्यालय ICDS, आंगनवाड़ी केंद्र या जिला कल्याण कार्यालय",
    officeEn: "District Programme Office ICDS, Anganwadi centre, or District Welfare Office",
    officerHi: "CDPO, आंगनवाड़ी सेविका, जिला कार्यक्रम पदाधिकारी या कल्याण पदाधिकारी",
    officerEn: "CDPO, Anganwadi worker, District Programme Officer, or Welfare Officer",
    hintHi: "महिला और बाल योजनाओं में आंगनवाड़ी/स्वास्थ्य केंद्र से फॉर्म और सत्यापन में मदद मिलती है।",
    hintEn: "Women and child schemes are often supported through Anganwadi or health-centre verification."
  },
  farmers: {
    officeHi: "जिला कृषि कार्यालय, प्रखंड कृषि कार्यालय या किसान सलाहकार केंद्र",
    officeEn: "District Agriculture Office, Block Agriculture Office, or farmer advisory centre",
    officerHi: "जिला कृषि पदाधिकारी, प्रखंड कृषि पदाधिकारी या किसान सलाहकार",
    officerEn: "District Agriculture Officer, Block Agriculture Officer, or farmer advisor",
    hintHi: "किसान योजनाओं में किसान पंजीकरण, जमीन रिकॉर्ड, बैंक और e-KYC सही होना जरूरी है।",
    hintEn: "Farmer schemes usually need farmer registration, land records, bank details, and e-KYC."
  },
  health: {
    officeHi: "जिला स्वास्थ्य समिति, सिविल सर्जन कार्यालय या सूचीबद्ध अस्पताल का आयुष्मान हेल्प डेस्क",
    officeEn: "District Health Society, Civil Surgeon Office, or Ayushman help desk at an empanelled hospital",
    officerHi: "सिविल सर्जन, जिला कार्यक्रम समन्वयक या आयुष्मान मित्र",
    officerEn: "Civil Surgeon, District Programme Coordinator, or Ayushman Mitra",
    hintHi: "इलाज वाली योजना में पहले पात्रता, कार्ड और अस्पताल की सूची जांच लें।",
    hintEn: "For health schemes, check eligibility, card status, and hospital empanelment first."
  },
  housing: {
    officeHi: "प्रखंड विकास कार्यालय, पंचायत कार्यालय या नगर निकाय कार्यालय",
    officeEn: "Block Development Office, Panchayat Office, or urban local body office",
    officerHi: "BDO, पंचायत सचिव, ग्रामीण आवास सहायक या नगर निकाय कार्यपालक पदाधिकारी",
    officerEn: "BDO, Panchayat Secretary, Rural Housing Assistant, or Executive Officer of the urban body",
    hintHi: "आवास योजनाओं में लाभार्थी सूची, ग्राम सभा/स्थानीय सत्यापन और बैंक जानकारी महत्वपूर्ण होती है।",
    hintEn: "Housing schemes depend on beneficiary lists, local verification, and correct bank details."
  },
  pension: {
    officeHi: "प्रखंड कार्यालय, RTPS काउंटर या जिला सामाजिक सुरक्षा कोषांग",
    officeEn: "Block Office, RTPS counter, or District Social Security Cell",
    officerHi: "BDO, सामाजिक सुरक्षा सहायक निदेशक या पंचायत सचिव",
    officerEn: "BDO, Assistant Director Social Security, or Panchayat Secretary",
    hintHi: "पेंशन योजनाओं में उम्र, विधवा/दिव्यांग प्रमाण और बैंक खाता सही होना जरूरी है।",
    hintEn: "Pension schemes need age, widow/disability proof where applicable, and correct bank details."
  },
  food: {
    officeHi: "प्रखंड आपूर्ति कार्यालय, अनुमंडल आपूर्ति कार्यालय या PDS दुकान",
    officeEn: "Block Supply Office, Sub-Divisional Supply Office, or PDS shop",
    officerHi: "प्रखंड आपूर्ति पदाधिकारी, अनुमंडल पदाधिकारी या जिला आपूर्ति पदाधिकारी",
    officerEn: "Block Supply Officer, Sub-Divisional Officer, or District Supply Officer",
    hintHi: "राशन कार्ड में परिवार के सभी सदस्यों का आधार और सही पता अपडेट रखें।",
    hintEn: "For ration services, keep Aadhaar and address details updated for all family members."
  },
  business: {
    officeHi: "जिला उद्योग केंद्र, बैंक शाखा, KVIC/KVIB कार्यालय या उद्यम सहायता केंद्र",
    officeEn: "District Industries Centre, bank branch, KVIC/KVIB office, or enterprise support centre",
    officerHi: "जिला उद्योग केंद्र के महाप्रबंधक, लीड बैंक मैनेजर या बैंक शाखा प्रबंधक",
    officerEn: "General Manager DIC, Lead Bank Manager, or bank branch manager",
    hintHi: "व्यवसाय योजनाओं में प्रोजेक्ट रिपोर्ट, प्रशिक्षण, बैंक स्वीकृति और श्रेणी प्रमाण पूछे जा सकते हैं।",
    hintEn: "Business schemes may need project reports, training, bank approval, and category proof."
  },
  workers: {
    officeHi: "जिला श्रम कार्यालय, CSC केंद्र, पंचायत कार्यालय या नगर निकाय कार्यालय",
    officeEn: "District Labour Office, CSC centre, Panchayat Office, or urban local body office",
    officerHi: "श्रम अधीक्षक, CSC ऑपरेटर, पंचायत सचिव या नगर निकाय नोडल पदाधिकारी",
    officerEn: "Labour Superintendent, CSC operator, Panchayat Secretary, or urban body nodal officer",
    hintHi: "श्रमिक योजनाओं में काम का प्रकार, उम्र, बैंक खाता और मोबाइल नंबर सही रखें।",
    hintEn: "Worker schemes usually need work details, age, bank account, and a working mobile number."
  }
};

const officeLocationTemplates = [
  {
    key: "collectorate",
    titleHi: "जिला समाहरणालय / DM कार्यालय",
    titleEn: "District Collectorate / DM Office",
    addressHi: "जिला समाहरणालय परिसर",
    addressEn: "District Collectorate campus",
    askHi: "हेल्प डेस्क, जन शिकायत शाखा या संबंधित विभाग का काउंटर",
    askEn: "Help desk, public grievance branch, or the relevant department counter"
  },
  {
    key: "drcc",
    titleHi: "DRCC केंद्र",
    titleEn: "DRCC Centre",
    addressHi: "जिला निबंधन एवं परामर्श केंद्र",
    addressEn: "District Registration and Counselling Centre",
    askHi: "DRCC प्रबंधक या योजना सहायक",
    askEn: "DRCC Manager or scheme assistant"
  },
  {
    key: "education",
    titleHi: "जिला शिक्षा कार्यालय",
    titleEn: "District Education Office",
    addressHi: "जिला शिक्षा कार्यालय",
    addressEn: "District Education Office",
    askHi: "जिला शिक्षा पदाधिकारी या छात्रवृत्ति प्रभारी",
    askEn: "District Education Officer or scholarship officer"
  },
  {
    key: "agriculture",
    titleHi: "जिला कृषि कार्यालय",
    titleEn: "District Agriculture Office",
    addressHi: "जिला कृषि कार्यालय",
    addressEn: "District Agriculture Office",
    askHi: "जिला कृषि पदाधिकारी या प्रखंड कृषि पदाधिकारी",
    askEn: "District Agriculture Officer or Block Agriculture Officer"
  },
  {
    key: "health",
    titleHi: "सिविल सर्जन / जिला स्वास्थ्य कार्यालय",
    titleEn: "Civil Surgeon / District Health Office",
    addressHi: "सिविल सर्जन कार्यालय या जिला स्वास्थ्य समिति",
    addressEn: "Civil Surgeon Office or District Health Society",
    askHi: "सिविल सर्जन, आयुष्मान मित्र या स्वास्थ्य योजना प्रभारी",
    askEn: "Civil Surgeon, Ayushman Mitra, or health scheme officer"
  },
  {
    key: "supply",
    titleHi: "जिला / प्रखंड आपूर्ति कार्यालय",
    titleEn: "District / Block Supply Office",
    addressHi: "जिला आपूर्ति कार्यालय या प्रखंड आपूर्ति कार्यालय",
    addressEn: "District Supply Office or Block Supply Office",
    askHi: "जिला आपूर्ति पदाधिकारी या प्रखंड आपूर्ति पदाधिकारी",
    askEn: "District Supply Officer or Block Supply Officer"
  },
  {
    key: "industry",
    titleHi: "जिला उद्योग केंद्र",
    titleEn: "District Industries Centre",
    addressHi: "जिला उद्योग केंद्र",
    addressEn: "District Industries Centre",
    askHi: "महाप्रबंधक, जिला उद्योग केंद्र या उद्यमी योजना प्रभारी",
    askEn: "General Manager, DIC, or enterprise scheme officer"
  },
  {
    key: "labour",
    titleHi: "जिला श्रम कार्यालय",
    titleEn: "District Labour Office",
    addressHi: "जिला श्रम कार्यालय",
    addressEn: "District Labour Office",
    askHi: "श्रम अधीक्षक या श्रमिक पंजीकरण प्रभारी",
    askEn: "Labour Superintendent or worker registration officer"
  },
  {
    key: "social-security",
    titleHi: "सामाजिक सुरक्षा / कल्याण कार्यालय",
    titleEn: "Social Security / Welfare Office",
    addressHi: "जिला सामाजिक सुरक्षा कोषांग या जिला कल्याण कार्यालय",
    addressEn: "District Social Security Cell or District Welfare Office",
    askHi: "सामाजिक सुरक्षा सहायक निदेशक या जिला कल्याण पदाधिकारी",
    askEn: "Assistant Director Social Security or District Welfare Officer"
  },
  {
    key: "block",
    titleHi: "प्रखंड विकास कार्यालय",
    titleEn: "Block Development Office",
    addressHi: "अपने प्रखंड का BDO कार्यालय",
    addressEn: "Your Block Development Office",
    askHi: "BDO, पंचायत सचिव या आवास/पेंशन सहायक",
    askEn: "BDO, Panchayat Secretary, or housing/pension assistant"
  }
];

const officeLocationKeyByCategory: Record<string, string> = {
  education: "education",
  youth: "drcc",
  women: "social-security",
  farmers: "agriculture",
  health: "health",
  housing: "block",
  pension: "social-security",
  food: "supply",
  business: "industry",
  workers: "labour"
};
const easySchemeInfo: Record<string, { nameHi: string; easyHi: string; easyEn: string }> = {
  "bihar-student-credit-card": {
    nameHi: "बिहार स्टूडेंट क्रेडिट कार्ड योजना",
    easyHi: "अगर बिहार का बच्चा 12वीं के बाद आगे पढ़ना चाहता है और पैसे की दिक्कत है, तो इस योजना से पढ़ाई के खर्च के लिए बैंक से सहायता मिलती है। आवेदन के बाद कागज जांचे जाते हैं और DRCC में सत्यापन हो सकता है।",
    easyEn: "This helps Bihar students continue studies after Class 12 when money is a problem. The student applies online, documents are checked, and DRCC may verify the application."
  },
  "kushal-yuva-program": {
    nameHi: "कुशल युवा कार्यक्रम",
    easyHi: "यह योजना युवाओं को कंप्यूटर, बोलचाल और नौकरी में काम आने वाली बुनियादी ट्रेनिंग देती है। जिन युवाओं को काम सीखना है, वे नजदीकी केंद्र से प्रशिक्षण ले सकते हैं।",
    easyEn: "This gives youth basic computer, communication, and job-readiness training through nearby training centres."
  },
  "swayam-sahayata-bhatta": {
    nameHi: "मुख्यमंत्री निश्चय स्वयं सहायता भत्ता",
    easyHi: "यह योजना बेरोजगार युवाओं को कुछ समय के लिए आर्थिक सहारा देती है, ताकि वे नौकरी या कौशल प्रशिक्षण की तैयारी कर सकें। आवेदन के बाद पात्रता और दस्तावेज जांचे जाते हैं।",
    easyEn: "This gives temporary financial support to eligible unemployed youth while they look for work or training."
  },
  "kanya-utthan": {
    nameHi: "मुख्यमंत्री कन्या उत्थान योजना",
    easyHi: "यह योजना बिहार की बेटियों को पढ़ाई जारी रखने के लिए प्रोत्साहन राशि देती है। स्कूल, इंटर या स्नातक जैसे चरणों पर पात्र छात्राओं को DBT से पैसा मिल सकता है।",
    easyEn: "This supports girls in Bihar with incentive money at education milestones so they continue studying."
  },
  "post-matric-scholarship-bihar": {
    nameHi: "बिहार पोस्ट मैट्रिक छात्रवृत्ति",
    easyHi: "मैट्रिक के बाद पढ़ने वाले पात्र SC, ST, BC और EBC छात्रों को फीस और पढ़ाई के खर्च में सहायता मिलती है। छात्र और संस्थान दोनों का ऑनलाइन सत्यापन होता है।",
    easyEn: "This helps eligible SC, ST, BC, and EBC students pay for studies after matriculation."
  },
  "bihar-udyami": {
    nameHi: "मुख्यमंत्री उद्यमी योजना",
    easyHi: "अगर बिहार का कोई पात्र व्यक्ति अपना छोटा उद्योग या व्यवसाय शुरू करना चाहता है, तो इस योजना में प्रोजेक्ट के लिए ऋण और अनुदान जैसी सहायता मिल सकती है। आवेदन केवल खुली तिथि में होता है।",
    easyEn: "This helps eligible Bihar residents start a small business or industry with project-based financial support."
  },
  "dbt-agriculture-bihar": {
    nameHi: "बिहार कृषि DBT योजनाएं",
    easyHi: "किसानों को बीज, कृषि यंत्र, सिंचाई और दूसरी कृषि योजनाओं की सब्सिडी इसी पोर्टल से मिलती है। पहले किसान पंजीकरण जरूरी होता है।",
    easyEn: "This portal helps Bihar farmers register and apply for agriculture subsidies such as seed, machinery, irrigation, and inputs."
  },
  "ssp-pension-bihar": {
    nameHi: "बिहार सामाजिक सुरक्षा पेंशन",
    easyHi: "वृद्ध, विधवा और दिव्यांग पात्र लोगों को हर महीने पेंशन देने के लिए यह योजना है। पैसा सीधे बैंक खाते में आता है, इसलिए बैंक और आधार जानकारी सही होना जरूरी है।",
    easyEn: "This gives monthly pension support to eligible elderly people, widows, and persons with disabilities."
  },
  "ration-card-bihar": {
    nameHi: "बिहार राशन कार्ड और PDS सेवा",
    easyHi: "पात्र परिवारों को सस्ते दर पर अनाज लेने के लिए राशन कार्ड की जरूरत होती है। परिवार के सदस्यों का आधार और सही जानकारी अपडेट रखना जरूरी है।",
    easyEn: "This helps eligible families get subsidized food grains through ration card and PDS services."
  },
  "rtps-bihar": {
    nameHi: "बिहार RTPS प्रमाण पत्र सेवा",
    easyHi: "जाति, आय, निवास और EWS जैसे प्रमाण पत्र कई योजनाओं में लगते हैं। RTPS/ServicePlus से ये प्रमाण पत्र ऑनलाइन बनवाए जा सकते हैं।",
    easyEn: "This service helps citizens get certificates like caste, income, residence, and EWS that are needed for many schemes."
  },
  "pm-kisan": {
    nameHi: "पीएम किसान सम्मान निधि",
    easyHi: "पात्र किसान परिवारों को खेती के खर्च में मदद के लिए सरकार किस्तों में पैसा देती है। जमीन रिकॉर्ड, बैंक खाता और e-KYC सही होना बहुत जरूरी है।",
    easyEn: "This gives eligible farmer families income support in installments. Land records, bank account, and e-KYC must be correct."
  },
  "ayushman-bharat": {
    nameHi: "आयुष्मान भारत PM-JAY",
    easyHi: "पात्र परिवारों को बड़े इलाज के समय सूचीबद्ध अस्पतालों में कैशलेस इलाज की सुविधा मिलती है। पहले पोर्टल पर पात्रता और आयुष्मान कार्ड जांचें।",
    easyEn: "This helps eligible families get cashless hospital treatment at empanelled hospitals."
  },
  "pmay-g": {
    nameHi: "प्रधानमंत्री आवास योजना ग्रामीण",
    easyHi: "ग्रामीण क्षेत्र के पात्र गरीब परिवारों को पक्का घर बनाने के लिए सहायता मिलती है। लाभार्थी चयन सरकारी सूची और ग्राम सभा प्रक्रिया से होता है।",
    easyEn: "This helps eligible rural households build a pucca house through official beneficiary selection."
  },
  "pm-ujjwala": {
    nameHi: "प्रधानमंत्री उज्ज्वला योजना",
    easyHi: "गरीब परिवार की पात्र महिला को LPG गैस कनेक्शन दिलाने में यह योजना मदद करती है। परिवार में पहले से LPG कनेक्शन नहीं होना चाहिए।",
    easyEn: "This helps eligible women from poor households get an LPG connection."
  },
  "pm-vishwakarma": {
    nameHi: "पीएम विश्वकर्मा",
    easyHi: "बढ़ई, लोहार, कुम्हार, दर्जी जैसे पारंपरिक काम करने वाले कारीगरों को पहचान, प्रशिक्षण, टूलकिट और ऋण सहायता मिल सकती है।",
    easyEn: "This supports traditional artisans with registration, training, toolkit support, and credit linkage."
  },
  "pm-svanidhi": {
    nameHi: "पीएम स्वनिधि",
    easyHi: "शहरी ठेला, रेहड़ी या फुटपाथ दुकानदारों को काम चलाने के लिए बिना गारंटी छोटा ऋण मिल सकता है। समय पर चुकाने से अगला बड़ा ऋण मिल सकता है।",
    easyEn: "This gives collateral-free working capital loans to eligible urban street vendors."
  },
  mgnrega: {
    nameHi: "मनरेगा जॉब कार्ड और काम मांग",
    easyHi: "ग्रामीण परिवार के वयस्क सदस्य ग्राम पंचायत से मजदूरी का काम मांग सकते हैं। जॉब कार्ड और बैंक खाता सही होना जरूरी है।",
    easyEn: "This lets adult members of rural households demand wage work through the Gram Panchayat."
  },
  eshram: {
    nameHi: "ई-श्रम कार्ड",
    easyHi: "असंगठित मजदूर, घरेलू कामगार, रेहड़ी वाले और गिग वर्कर अपना ई-श्रम कार्ड बनवा सकते हैं। इससे भविष्य की श्रमिक योजनाओं में पहचान आसान होती है।",
    easyEn: "This registers unorganised workers so they can be identified for worker and social-security services."
  },
  nsap: {
    nameHi: "राष्ट्रीय सामाजिक सहायता कार्यक्रम",
    easyHi: "बहुत गरीब वृद्ध, विधवा, दिव्यांग या मृत्यु से प्रभावित परिवारों को पेंशन या सहायता देने के लिए यह केंद्रीय कार्यक्रम है। आवेदन अक्सर राज्य/स्थानीय प्रक्रिया से होता है।",
    easyEn: "This provides pension or assistance to vulnerable poor people through state/local systems."
  },
  pmmvy: {
    nameHi: "प्रधानमंत्री मातृ वंदना योजना",
    easyHi: "गर्भवती और स्तनपान कराने वाली पात्र माताओं को स्वास्थ्य और पोषण में मदद के लिए किस्तों में पैसा मिल सकता है। आंगनवाड़ी या स्वास्थ्य केंद्र से जानकारी लें।",
    easyEn: "This gives maternity benefit support to eligible pregnant women and lactating mothers."
  },
  "national-scholarship-portal": {
    nameHi: "राष्ट्रीय छात्रवृत्ति पोर्टल",
    easyHi: "कई केंद्रीय छात्रवृत्तियों के लिए यह एक ही पोर्टल है। छात्र सही योजना चुनकर आवेदन करता है, फिर स्कूल/कॉलेज और विभाग सत्यापन करते हैं।",
    easyEn: "This is a common portal for many central scholarships with online student and institution verification."
  },
  "pm-surya-ghar": {
    nameHi: "पीएम सूर्य घर मुफ्त बिजली योजना",
    easyHi: "घर की छत पर सोलर पैनल लगवाने में सरकार सब्सिडी देती है। इससे बिजली बिल कम हो सकता है। पहले बिजली उपभोक्ता नंबर से पोर्टल पर रजिस्टर करना होता है।",
    easyEn: "This helps households install rooftop solar with subsidy, which can reduce electricity bills."
  },
  pmegp: {
    nameHi: "प्रधानमंत्री रोजगार सृजन कार्यक्रम",
    easyHi: "जो व्यक्ति नया छोटा उद्योग या सेवा व्यवसाय शुरू करना चाहता है, उसे बैंक ऋण और मार्जिन मनी सब्सिडी मिल सकती है। प्रोजेक्ट रिपोर्ट और बैंक स्वीकृति जरूरी है।",
    easyEn: "This helps people start new micro-enterprises with bank loan and margin money subsidy."
  },
  "sukanya-samriddhi": {
    nameHi: "सुकन्या समृद्धि खाता",
    easyHi: "बेटी के भविष्य की पढ़ाई और जरूरतों के लिए माता-पिता डाकघर या बैंक में बचत खाता खोल सकते हैं। इसमें लंबे समय तक बचत की जाती है।",
    easyEn: "This is a savings account for a girl child's future education and needs."
  },
  "atal-pension-yojana": {
    nameHi: "अटल पेंशन योजना",
    easyHi: "कम उम्र में थोड़ा-थोड़ा पैसा जमा करके 60 साल के बाद पेंशन पाने की योजना है। बैंक खाते से हर महीने पैसा अपने आप कटता है।",
    easyEn: "This helps people contribute regularly through a bank account and receive pension after age 60."
  },
  "jan-dhan-yojana": {
    nameHi: "प्रधानमंत्री जन धन योजना",
    easyHi: "जिन लोगों का बैंक खाता नहीं है, वे बेसिक बैंक खाता खुलवा सकते हैं। इसी खाते में सरकारी योजनाओं का पैसा सीधे आ सकता है।",
    easyEn: "This helps people open a basic bank account to receive banking services and direct benefit transfers."
  }
};

function normalize(value: string) {
  return value.toLowerCase();
}

function getSchemeSearchText(scheme: Scheme) {
  const easyInfo = easySchemeInfo[scheme.id];
  return normalize(
    [
      scheme.name.en,
      scheme.name.hi,
      scheme.department.en,
      scheme.department.hi,
      scheme.summary.en,
      scheme.summary.hi,
      scheme.category,
      scheme.government,
      easyInfo?.nameHi,
      easyInfo?.easyHi,
      easyInfo?.easyEn,
      ...scheme.benefit.en,
      ...scheme.benefit.hi,
      ...scheme.eligibility.en,
      ...scheme.eligibility.hi,
      ...scheme.documents.en,
      ...scheme.documents.hi
    ].join(" ")
  );
}

function getSchemeDisplayName(scheme: Scheme, language: Language) {
  return language === "hi" ? easySchemeInfo[scheme.id]?.nameHi ?? scheme.name.hi : scheme.name.en;
}

function getCategoryDisplayName(category: { id: string; en: string; hi: string }, language: Language) {
  return language === "hi" ? categoryLabelsHi[category.id] ?? category.hi : category.en;
}

function getSimpleEligibilityHi(scheme: Scheme) {
  const category = categoryLabelsHi[scheme.category] ?? "इस श्रेणी";
  return [
    `जो व्यक्ति ${category} से जुड़ी जरूरत रखता है और योजना की शर्तें पूरी करता है, वह आवेदन कर सकता है।`,
    "आय, उम्र, जाति, निवास, किसान/छात्र/श्रमिक स्थिति जैसी शर्तें योजना के अनुसार अलग हो सकती हैं।",
    "अंतिम पात्रता हमेशा आधिकारिक पोर्टल या नजदीकी सरकारी कार्यालय से जांचें।"
  ];
}

function getSimpleDocumentsHi(scheme: Scheme) {
  const base = ["आधार कार्ड", "मोबाइल नंबर", "बैंक खाता/पासबुक", "पासपोर्ट फोटो"];
  const byCategory: Record<string, string[]> = {
    education: ["मार्कशीट", "प्रवेश प्रमाण पत्र", "आय/जाति प्रमाण पत्र यदि लागू हो"],
    youth: ["शैक्षणिक प्रमाण पत्र", "निवास प्रमाण पत्र", "बेरोजगारी या स्व-घोषणा यदि मांगी जाए"],
    women: ["महिला/बालिका से जुड़ा प्रमाण", "बैंक खाता", "स्वास्थ्य या शिक्षा रिकॉर्ड यदि लागू हो"],
    farmers: ["भूमि रिकॉर्ड या किसान पंजीकरण", "फसल/खाता विवरण", "बैंक खाता"],
    health: ["राशन कार्ड या परिवार विवरण", "पहचान पत्र", "स्वास्थ्य कार्ड यदि उपलब्ध हो"],
    housing: ["निवास प्रमाण", "बिजली बिल या भूमि/घर से जुड़ा कागज", "परिवार विवरण"],
    pension: ["आयु प्रमाण", "विधवा/दिव्यांग/मृत्यु प्रमाण पत्र यदि लागू हो", "बैंक खाता"],
    food: ["परिवार के सदस्यों का आधार", "राशन कार्ड या परिवार विवरण", "निवास प्रमाण"],
    business: ["PAN", "प्रोजेक्ट रिपोर्ट", "जाति/श्रेणी प्रमाण पत्र यदि लागू हो", "बैंक विवरण"],
    workers: ["काम/पेशा विवरण", "निवास या पहचान प्रमाण", "नॉमिनी विवरण यदि मांगा जाए"]
  };
  return [...base, ...(byCategory[scheme.category] ?? [])];
}

function getSimplePointsHi() {
  return [
    "फॉर्म भरने से पहले सभी कागज की फोटो या स्कैन साफ रखें।",
    "नाम, जन्मतिथि, बैंक खाता और आधार नंबर में गलती न करें।",
    "आवेदन जमा करने के बाद रसीद या आवेदन नंबर संभालकर रखें।",
    "किसी दलाल को पैसा देने से बचें; आधिकारिक पोर्टल या सरकारी केंद्र का उपयोग करें।"
  ];
}

function getOfficeGuidance(scheme: Scheme) {
  return officeGuidanceByCategory[scheme.category] ?? officeGuidanceByCategory.workers;
}

function getOfficeLocationForCategory(categoryId: string) {
  const officeKey = officeLocationKeyByCategory[categoryId] ?? "collectorate";
  return officeLocationTemplates.find((office) => office.key === officeKey) ?? officeLocationTemplates[0];
}

function getDistrictOfficeAddress(
  office: (typeof officeLocationTemplates)[number],
  district: (typeof districts)[number],
  language: Language
) {
  return language === "hi"
    ? `${office.addressHi}, ${district.nameHi}, बिहार`
    : `${office.addressEn}, ${district.nameEn}, Bihar`;
}

function getOfficeMapUrl(officeName: string, districtName: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${officeName}, ${districtName}, Bihar`)}`;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("hi");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeGovernment, setActiveGovernment] = useState<"all" | "state" | "central">("all");
  const [query, setQuery] = useState("");
  const [selectedDistrictId, setSelectedDistrictId] = useState("patna");
  const selectedDistrict = districts.find((district) => district.id === selectedDistrictId) ?? districts[25];

  const text = language === "hi" ? cleanHindiCopy : copy.en;

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const menuLabels = {
    menu: language === "en" ? "Menu" : "\u092e\u0947\u0928\u0942",
    home: language === "en" ? "Home" : "\u0939\u094b\u092e",
    allSchemes: language === "en" ? "Bihar schemes" : "\u092c\u093f\u0939\u093e\u0930 \u092f\u094b\u091c\u0928\u093e\u090f\u0902",
    documents: language === "en" ? "Documents" : "\u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c",
    offices: language === "en" ? "District offices" : "जिला कार्यालय",
    listTitle: language === "en" ? "Schemes for people of Bihar" : "\u092c\u093f\u0939\u093e\u0930 \u0915\u0947 \u0932\u094b\u0917\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u092f\u094b\u091c\u0928\u093e\u090f\u0902",
    listHelp:
      language === "en"
        ? "Use the search bar and filters below to narrow this list."
        : "\u0907\u0938 \u0938\u0942\u091a\u0940 \u0915\u094b \u0915\u092e \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0928\u0940\u091a\u0947 \u0938\u0930\u094d\u091a \u092c\u093e\u0930 \u0914\u0930 \u092b\u093f\u0932\u094d\u091f\u0930 \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0947\u0902.",
    showing: language === "en" ? "Showing" : "\u0926\u093f\u0916 \u0930\u0939\u0940 \u0939\u0948\u0902",
    of: language === "en" ? "of" : "\u0915\u0941\u0932",
    schemes: language === "en" ? "schemes" : "\u092f\u094b\u091c\u0928\u093e\u090f\u0902",
    expandList: language === "en" ? "Open list" : "सूची खोलें",
    collapseList: language === "en" ? "Close list" : "सूची बंद करें"
  };
  const officeLabels = {
    kicker: language === "en" ? "District help" : "जिले में सहायता",
    title:
      language === "en"
        ? "Choose your district and know which office to visit"
        : "अपना जिला चुनें और समझें किस कार्यालय में जाना है",
    intro:
      language === "en"
        ? "Most schemes are applied online, but document checking or help is usually available at district, block, panchayat, DRCC, agriculture, health, labour, supply, or industry offices."
        : "ज्यादातर योजनाओं में आवेदन ऑनलाइन होता है, लेकिन कागज जांच, सुधार या मदद के लिए जिला, प्रखंड, पंचायत, DRCC, कृषि, स्वास्थ्य, श्रम, आपूर्ति या उद्योग कार्यालय जाना पड़ सकता है।",
    chooseDistrict: language === "en" ? "Select district" : "जिला चुनें",
    officialSite: language === "en" ? "Official district website" : "आधिकारिक जिला वेबसाइट",
    contactPage: language === "en" ? "Contact / directory page" : "संपर्क / कार्यालय निर्देशिका",
    addressTitle: language === "en" ? "Office addresses for selected district" : "चुने हुए जिले के कार्यालयों के पते",
    addressIntro:
      language === "en"
        ? "Use these location rows to reach the correct office. The map button opens the latest live location for that office in the selected district."
        : "इन पते वाली पंक्तियों से सही कार्यालय तक पहुंचें। मैप बटन चुने हुए जिले में उस कार्यालय की नई लाइव लोकेशन खोलता है।",
    addressLabel: language === "en" ? "Address" : "पता",
    mapLink: language === "en" ? "Open exact map location" : "सटीक लोकेशन मैप में खोलें",
    expandOffices: language === "en" ? "Open office details" : "कार्यालय जानकारी खोलें",
    collapseOffices: language === "en" ? "Close office details" : "कार्यालय जानकारी बंद करें",
    mainOffice: language === "en" ? "Main office to start" : "सबसे पहले यहां पूछें",
    mainOfficeText:
      language === "en"
        ? "District Collectorate / DM Office help desk, or the department office mentioned in the scheme card."
        : "जिला समाहरणालय / DM कार्यालय के हेल्प डेस्क, या योजना कार्ड में लिखे संबंधित विभाग के कार्यालय में पूछें।",
    person: language === "en" ? "Person or role to ask for" : "किस व्यक्ति/पद से बात करें",
    office: language === "en" ? "Office to visit" : "कहां जाएं",
    note:
      language === "en"
        ? "Officer names and phone numbers change often. Use the district contact page for the latest name, phone number, email, and room address."
        : "अधिकारी का नाम और फोन नंबर बदलता रहता है। सबसे सही नाम, फोन, ईमेल और कमरे का पता जानने के लिए जिले की संपर्क पेज खोलें।",
    schemeOfficeTitle: language === "en" ? "Office help for this scheme" : "इस योजना के लिए कार्यालय सहायता",
    schemeHint:
      language === "en"
        ? "Take your documents and ask for the role below in your district/block office."
        : "अपने कागज लेकर अपने जिला/प्रखंड के इसी विभाग में जाएं और नीचे लिखे पद के व्यक्ति से पूछें।"
  };
  const footerLabels = {
    title: language === "en" ? "Bihar Scheme for People of Bihar" : "\u092c\u093f\u0939\u093e\u0930 \u0915\u0947 \u0932\u094b\u0917\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u092f\u094b\u091c\u0928\u093e\u090f\u0902",
    intro:
      language === "en"
        ? "A bilingual public guide for finding important Bihar and Central Government schemes, documents, and official application links."
        : "\u092c\u093f\u0939\u093e\u0930 \u0914\u0930 \u0915\u0947\u0902\u0926\u094d\u0930 \u0938\u0930\u0915\u093e\u0930 \u0915\u0940 \u092e\u0939\u0924\u094d\u0935\u092a\u0942\u0930\u094d\u0923 \u092f\u094b\u091c\u0928\u093e\u0913\u0902, \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u094b\u0902 \u0914\u0930 \u0906\u0927\u093f\u0915\u093e\u0930\u093f\u0915 \u0906\u0935\u0947\u0926\u0928 \u0932\u093f\u0902\u0915 \u0916\u094b\u091c\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0926\u094d\u0935\u093f\u092d\u093e\u0937\u0940 \u091c\u0928-\u0938\u0942\u091a\u0928\u093e \u0917\u093e\u0907\u0921.",
    quickLinks: language === "en" ? "Quick links" : "\u0924\u094d\u0935\u0930\u093f\u0924 \u0932\u093f\u0902\u0915",
    categories: language === "en" ? "Categories" : "\u0936\u094d\u0930\u0947\u0923\u093f\u092f\u093e\u0902",
    officialPortals: language === "en" ? "Official portals" : "\u0906\u0927\u093f\u0915\u093e\u0930\u093f\u0915 \u092a\u094b\u0930\u094d\u091f\u0932",
    disclaimer: language === "en" ? "Disclaimer" : "\u0905\u0938\u094d\u0935\u0940\u0915\u0930\u0923",
    disclaimerText:
      language === "en"
        ? "This is an informational website, not an official government portal. Scheme amounts, dates, eligibility, and required documents can change. Always verify on the official portal before applying."
        : "\u092f\u0939 \u090f\u0915 \u0938\u0942\u091a\u0928\u093e\u0924\u094d\u092e\u0915 \u0935\u0947\u092c\u0938\u093e\u0907\u091f \u0939\u0948, \u0906\u0927\u093f\u0915\u093e\u0930\u093f\u0915 \u0938\u0930\u0915\u093e\u0930\u0940 \u092a\u094b\u0930\u094d\u091f\u0932 \u0928\u0939\u0940\u0902. \u092f\u094b\u091c\u0928\u093e \u0930\u093e\u0936\u093f, \u0924\u093e\u0930\u0940\u0916, \u092a\u093e\u0924\u094d\u0930\u0924\u093e \u0914\u0930 \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c \u092c\u0926\u0932 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902. \u0906\u0935\u0947\u0926\u0928 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0906\u0927\u093f\u0915\u093e\u0930\u093f\u0915 \u092a\u094b\u0930\u094d\u091f\u0932 \u092a\u0930 \u091c\u0930\u0942\u0930 \u091c\u093e\u0902\u091a\u0947\u0902.",
    review: language === "en" ? "Last reviewed: 15 June 2026" : "\u0905\u0902\u0924\u093f\u092e \u0938\u092e\u0940\u0915\u094d\u0937\u093e: 15 \u091c\u0942\u0928 2026",
    madeFor: language === "en" ? "Made for Bihar residents" : "\u092c\u093f\u0939\u093e\u0930 \u0928\u093f\u0935\u093e\u0938\u093f\u092f\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f",
    createdBy: language === "en" ? "Created by Shivankar Mehta" : "\u0928\u093f\u0930\u094d\u092e\u093e\u0924\u093e: \u0936\u093f\u0935\u093e\u0902\u0915\u0930 \u092e\u0947\u0939\u0924\u093e",
    email: "shivankarmehta60@gmail.com"
  };
  const helpSteps = [
    {
      title: language === "en" ? "1. Search your need" : "1. अपनी जरूरत खोजें",
      text:
        language === "en"
          ? "Type words like farmer, pension, ration, student, job, house, or health."
          : "किसान, पेंशन, राशन, छात्र, नौकरी, घर या इलाज जैसे शब्द लिखें।"
    },
    {
      title: language === "en" ? "2. Read simple meaning" : "2. सरल बात पढ़ें",
      text:
        language === "en"
          ? "Each card first explains the scheme in plain language, then shows documents and rules."
          : "हर कार्ड में पहले आसान भाषा में बताया गया है कि योजना किस काम की है।"
    },
    {
      title: language === "en" ? "3. Apply on official portal" : "3. आधिकारिक पोर्टल पर जाएं",
      text:
        language === "en"
          ? "Use only the official apply link and keep the acknowledgement number."
          : "केवल आधिकारिक आवेदन लिंक इस्तेमाल करें और आवेदन नंबर संभालकर रखें।"
    }
  ];

  const visibleSchemes = useMemo(() => {
    const normalizedQuery = normalize(query.trim());
    return schemes.filter((scheme) => {
      const categoryMatch = activeCategory === "all" || scheme.category === activeCategory;
      const governmentMatch = activeGovernment === "all" || scheme.government === activeGovernment;
      const searchMatch = !normalizedQuery || getSchemeSearchText(scheme).includes(normalizedQuery);
      return categoryMatch && governmentMatch && searchMatch;
    });
  }, [activeCategory, activeGovernment, query]);

  return (
    <>
      <header className="hero">
        <Image
          className="hero__image"
          src="/assets/bihar-schemes-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="hero__shade" />
        <nav className="topbar" aria-label="Primary">
          <a className="brand" href="#top" aria-label="Bihar Scheme home">
            <span className="brand__mark">BG</span>
            <span>{text.brand}</span>
          </a>
          <div className="site-menu">
            <a href="#top">{menuLabels.home}</a>
            <a href="#schemeList">{menuLabels.allSchemes}</a>
            <a href="#districtOffices">{menuLabels.offices}</a>
            <a href="#quickHelp">{menuLabels.documents}</a>
            <details className="scheme-menu">
              <summary>{menuLabels.menu}</summary>
              <div className="scheme-menu__panel">
                {schemes.map((scheme) => (
                  <a href={`#${scheme.id}`} key={scheme.id}>
                    {getSchemeDisplayName(scheme, language)}
                  </a>
                ))}
              </div>
            </details>
          </div>
          <div className="lang-toggle" role="group" aria-label="Language">
            {(["en", "hi"] as const).map((lang) => (
              <button
                className={`lang-toggle__button ${language === lang ? "is-active" : ""}`}
                type="button"
                onClick={() => setLanguage(lang)}
                key={lang}
              >
                {lang === "en" ? "English" : "\u0939\u093f\u0928\u094d\u0926\u0940"}
              </button>
            ))}
          </div>
        </nav>

        <section className="hero__content" id="top">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>{text.heroTitle}</h1>
          <p className="hero__text">{text.heroText}</p>
          <div className="hero__actions">
            <a className="primary-link" href="#schemes">
              {text.browseSchemes}
            </a>
            <a className="ghost-link" href="#quickHelp">
              {text.quickChecklist}
            </a>
          </div>
        </section>
      </header>

      <main>
        <section className="notice" aria-label="Important note">
          <strong>{text.noticeTitle}</strong> <span>{text.noticeText}</span>
        </section>

        <section className="stats" aria-label="Directory summary">
          <article>
            <strong>{schemes.length}</strong>
            <span>{text.schemesListed}</span>
          </article>
          <article>
            <strong>2</strong>
            <span>{text.governmentsCovered}</span>
          </article>
          <article>
            <strong>EN / HI</strong>
            <span>{text.languageSupport}</span>
          </article>
        </section>

        <section className="help-steps" aria-label={language === "en" ? "How to use this site" : "इस वेबसाइट का उपयोग कैसे करें"}>
          {helpSteps.map((step) => (
            <article key={step.title}>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </article>
          ))}
        </section>

        <section className="controls" id="schemes" aria-label="Scheme search and filters">
          <div>
            <p className="section-kicker">{text.directory}</p>
            <h2>{text.findScheme}</h2>
          </div>
          <label className="search">
            <span>{text.searchLabel}</span>
            <input
              type="search"
              placeholder={text.searchPlaceholder}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <div className="filter-row" aria-label="Categories">
            <button
              className={`filter-button ${activeCategory === "all" ? "is-active" : ""}`}
              type="button"
              onClick={() => setActiveCategory("all")}
            >
              {text.allCategories}
            </button>
            {categories.map((category) => (
              <button
                className={`filter-button ${activeCategory === category.id ? "is-active" : ""}`}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                key={category.id}
              >
                {getCategoryDisplayName(category, language)}
              </button>
            ))}
          </div>

          <div className="filter-row" aria-label="Government type">
            <button
              className={`filter-button ${activeGovernment === "all" ? "is-active" : ""}`}
              type="button"
              onClick={() => setActiveGovernment("all")}
            >
              {text.allGovernments}
            </button>
            {governments.map((government) => (
              <button
                className={`filter-button ${activeGovernment === government ? "is-active" : ""}`}
                type="button"
                onClick={() => setActiveGovernment(government)}
                key={government}
              >
                {text[government]}
              </button>
            ))}
          </div>
        </section>

        <details className="scheme-list-panel collapsible-panel" id="schemeList" aria-label={menuLabels.listTitle}>
          <summary className="collapsible-summary">
            <div className="scheme-list-panel__head">
              <div>
                <p className="section-kicker">{menuLabels.allSchemes}</p>
                <h2>{menuLabels.listTitle}</h2>
                <p>{menuLabels.listHelp}</p>
              </div>
              <div className="summary-side">
                <strong>
                  {menuLabels.showing} {visibleSchemes.length} {menuLabels.of} {schemes.length} {menuLabels.schemes}
                </strong>
                <span className="summary-action">
                  <span className="summary-action__open">{menuLabels.expandList}</span>
                  <span className="summary-action__close">{menuLabels.collapseList}</span>
                </span>
              </div>
            </div>
          </summary>
          <div className="collapsible-body">
            <div className="scheme-name-list">
              {visibleSchemes.map((scheme, index) => (
                <a href={`#${scheme.id}`} key={scheme.id}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {getSchemeDisplayName(scheme, language)}
                </a>
              ))}
            </div>
          </div>
        </details>

        <details className="district-office-panel collapsible-panel" id="districtOffices">
          <summary className="collapsible-summary">
            <div className="district-office-panel__intro">
              <div>
                <p className="section-kicker">{officeLabels.kicker}</p>
                <h2>{officeLabels.title}</h2>
                <p>{officeLabels.intro}</p>
              </div>
              <div className="summary-side">
                <strong>{language === "hi" ? selectedDistrict.nameHi : selectedDistrict.nameEn}</strong>
                <span className="summary-action">
                  <span className="summary-action__open">{officeLabels.expandOffices}</span>
                  <span className="summary-action__close">{officeLabels.collapseOffices}</span>
                </span>
              </div>
            </div>
          </summary>

          <div className="collapsible-body">
            <label className="district-select">
              <span>{officeLabels.chooseDistrict}</span>
              <select value={selectedDistrictId} onChange={(event) => setSelectedDistrictId(event.target.value)}>
                {districts.map((district) => (
                  <option value={district.id} key={district.id}>
                    {language === "hi" ? district.nameHi : district.nameEn}
                  </option>
                ))}
              </select>
            </label>

            <div className="district-contact-card">
              <div>
                <h3>{language === "hi" ? selectedDistrict.nameHi : selectedDistrict.nameEn}</h3>
                <p>
                  <strong>{officeLabels.mainOffice}:</strong> {officeLabels.mainOfficeText}
                </p>
                <p>{officeLabels.note}</p>
              </div>
              <div className="district-contact-card__actions">
                <a href={selectedDistrict.website} target="_blank" rel="noopener noreferrer">
                  {officeLabels.officialSite}
                </a>
                <a href={`${selectedDistrict.website}/contact-us/`} target="_blank" rel="noopener noreferrer">
                  {officeLabels.contactPage}
                </a>
              </div>
            </div>

            <div className="office-address-section">
              <div>
                <h3>{officeLabels.addressTitle}</h3>
                <p>{officeLabels.addressIntro}</p>
              </div>
              <div className="office-address-list">
                {officeLocationTemplates.map((office) => {
                  const officeName = language === "hi" ? office.titleHi : office.titleEn;
                  const searchOfficeName = office.titleEn;
                  const address = getDistrictOfficeAddress(office, selectedDistrict, language);
                  return (
                    <article className="office-address-card" key={office.key}>
                      <div>
                        <h4>{officeName}</h4>
                        <p>
                          <strong>{officeLabels.addressLabel}:</strong> {address}
                        </p>
                        <p>
                          <strong>{officeLabels.person}:</strong> {language === "hi" ? office.askHi : office.askEn}
                        </p>
                      </div>
                      <a href={getOfficeMapUrl(searchOfficeName, selectedDistrict.nameEn)} target="_blank" rel="noopener noreferrer">
                        {officeLabels.mapLink}
                      </a>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="office-type-grid">
              {categories.map((category) => {
                const guidance = officeGuidanceByCategory[category.id];
                if (!guidance) return null;
                return (
                  <article className="office-type-card" key={category.id}>
                    <h3>{getCategoryDisplayName(category, language)}</h3>
                    <p>
                      <strong>{officeLabels.office}:</strong> {language === "hi" ? guidance.officeHi : guidance.officeEn}
                    </p>
                    <p>
                      <strong>{officeLabels.person}:</strong>{" "}
                      {language === "hi" ? guidance.officerHi : guidance.officerEn}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </details>

        <section className="scheme-grid" aria-live="polite">
          {visibleSchemes.map((scheme) => (
            <SchemeCard
              scheme={scheme}
              language={language}
              officeLabels={officeLabels}
              selectedDistrict={selectedDistrict}
              key={scheme.id}
            />
          ))}
        </section>

        {visibleSchemes.length === 0 ? <p className="empty-state">{text.emptyState}</p> : null}

        <section className="quick-help" id="quickHelp">
          <div>
            <p className="section-kicker">{text.prepare}</p>
            <h2>{text.checklistTitle}</h2>
            <p>{text.checklistText}</p>
          </div>
          <ul className="document-list">
            {(language === "hi" ? commonDocsHi : commonDocs.en).map((doc) => (
              <li key={doc}>{doc}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <section className="footer-brand" aria-label={footerLabels.title}>
            <span className="brand__mark">BG</span>
            <h2>{footerLabels.title}</h2>
            <p>{footerLabels.intro}</p>
            <strong>{footerLabels.madeFor}</strong>
          </section>

          <section className="footer-column">
            <h3>{footerLabels.quickLinks}</h3>
            <a href="#top">{menuLabels.home}</a>
            <a href="#schemeList">{menuLabels.allSchemes}</a>
            <a href="#districtOffices">{menuLabels.offices}</a>
            <a href="#schemes">{text.findScheme}</a>
            <a href="#quickHelp">{menuLabels.documents}</a>
          </section>

          <section className="footer-column">
            <h3>{footerLabels.categories}</h3>
            {categories.slice(0, 7).map((category) => (
              <button
                type="button"
                onClick={() => {
                  setActiveCategory(category.id);
                  document.querySelector("#schemes")?.scrollIntoView({ behavior: "smooth" });
                }}
                key={category.id}
              >
                {getCategoryDisplayName(category, language)}
              </button>
            ))}
          </section>

          <section className="footer-column">
            <h3>{footerLabels.officialPortals}</h3>
            <a href="https://serviceonline.bihar.gov.in/" target="_blank" rel="noopener noreferrer">
              Bihar ServicePlus
            </a>
            <a href="https://dbtagriculture.bihar.gov.in/" target="_blank" rel="noopener noreferrer">
              Bihar Agriculture DBT
            </a>
            <a href="https://www.myscheme.gov.in/" target="_blank" rel="noopener noreferrer">
              myScheme
            </a>
            <a href="https://beneficiary.nha.gov.in/" target="_blank" rel="noopener noreferrer">
              Ayushman Bharat
            </a>
          </section>
        </div>

        <div className="footer-bottom">
          <div>
            <strong>{footerLabels.disclaimer}</strong>
            <p>{footerLabels.disclaimerText}</p>
            <p className="creator-credit">
              {footerLabels.createdBy} ·{" "}
              <a href={`mailto:${footerLabels.email}`}>{footerLabels.email}</a>
            </p>
          </div>
          <span>{footerLabels.review}</span>
        </div>
      </footer>
    </>
  );
}

function SchemeCard({
  scheme,
  language,
  officeLabels,
  selectedDistrict
}: {
  scheme: Scheme;
  language: Language;
  officeLabels: {
    addressLabel: string;
    mapLink: string;
    person: string;
    office: string;
    schemeOfficeTitle: string;
    schemeHint: string;
  };
  selectedDistrict: (typeof districts)[number];
}) {
  const text = language === "hi" ? cleanHindiCopy : copy.en;
  const category = categories.find((item) => item.id === scheme.category);
  const officeGuidance = getOfficeGuidance(scheme);
  const officeLocation = getOfficeLocationForCategory(scheme.category);
  const officeLocationName = language === "hi" ? officeLocation.titleHi : officeLocation.titleEn;
  const officeAddress = getDistrictOfficeAddress(officeLocation, selectedDistrict, language);
  const easyInfo = easySchemeInfo[scheme.id];
  const isHindi = language === "hi";
  const displayName = language === "hi" && easyInfo ? easyInfo.nameHi : scheme.name[language];
  const displaySummary = language === "hi" && easyInfo ? easyInfo.easyHi : scheme.summary[language];
  const easyTitle = language === "en" ? "In simple words" : "सरल भाषा में समझें";
  const easyText = language === "hi" ? easyInfo?.easyHi : easyInfo?.easyEn;
  const departmentName = isHindi ? scheme.department.en : scheme.department.en;
  const benefitItems = isHindi
    ? [easyInfo?.easyHi ?? "यह योजना पात्र लोगों को सरकारी सहायता या सेवा दिलाने के लिए है।"]
    : scheme.benefit.en;
  const eligibilityItems = isHindi ? getSimpleEligibilityHi(scheme) : scheme.eligibility.en;
  const documentItems = isHindi ? getSimpleDocumentsHi(scheme) : scheme.documents.en;
  const pointItems = isHindi ? getSimplePointsHi() : scheme.points.en;
  const howToApplyTitle = language === "en" ? "How to apply" : "\u0906\u0935\u0947\u0926\u0928 \u0915\u0948\u0938\u0947 \u0915\u0930\u0947\u0902";
  const howToApplyItems =
    scheme.howToApply?.[language] ??
    (language === "en"
      ? [
          "Open the official portal linked below and read the latest instructions",
          "Keep eligibility proof and documents ready before starting the form",
          "Submit the application and save the acknowledgement or reference number"
        ]
      : [
          "\u0928\u0940\u091a\u0947 \u0926\u093f\u090f \u0906\u0927\u093f\u0915\u093e\u0930\u093f\u0915 \u092a\u094b\u0930\u094d\u091f\u0932 \u092a\u0930 \u091c\u093e\u0915\u0930 \u0928\u0935\u0940\u0928\u0924\u092e \u0928\u093f\u0930\u094d\u0926\u0947\u0936 \u092a\u0922\u093c\u0947\u0902",
          "\u092b\u0949\u0930\u094d\u092e \u0936\u0941\u0930\u0942 \u0915\u0930\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u092a\u093e\u0924\u094d\u0930\u0924\u093e \u092a\u094d\u0930\u092e\u093e\u0923 \u0914\u0930 \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c \u0924\u0948\u092f\u093e\u0930 \u0930\u0916\u0947\u0902",
          "\u0906\u0935\u0947\u0926\u0928 \u091c\u092e\u093e \u0915\u0930\u0947\u0902 \u0914\u0930 \u0930\u0938\u0940\u0926 \u092f\u093e \u0930\u0947\u092b\u0930\u0947\u0902\u0938 \u0928\u0902\u092c\u0930 \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u0930\u0916\u0947\u0902"
        ]);

  return (
    <article className="scheme-card" id={scheme.id}>
      <div className="scheme-card__head">
        <div className="scheme-meta">
          <span className={`pill ${scheme.government === "central" ? "pill--central" : ""}`}>
            {text[scheme.government]}
          </span>
          <span className="pill">{category ? getCategoryDisplayName(category, language) : scheme.category}</span>
          <span className="pill pill--urgent">{departmentName}</span>
        </div>
        <h3>{displayName}</h3>
        <p>{displaySummary}</p>
      </div>

      {easyText ? (
        <div className="easy-explainer">
          <h4>{easyTitle}</h4>
          <p>{easyText}</p>
        </div>
      ) : null}

      <div className="office-help">
        <h4>{officeLabels.schemeOfficeTitle}</h4>
        <p>{officeLabels.schemeHint}</p>
        <dl>
          <div>
            <dt>{officeLabels.office}</dt>
            <dd>{language === "hi" ? officeGuidance.officeHi : officeGuidance.officeEn}</dd>
          </div>
          <div>
            <dt>{officeLabels.addressLabel}</dt>
            <dd>{officeLocationName}: {officeAddress}</dd>
          </div>
          <div>
            <dt>{officeLabels.person}</dt>
            <dd>{language === "hi" ? officeGuidance.officerHi : officeGuidance.officerEn}</dd>
          </div>
        </dl>
        <a className="office-help__map" href={getOfficeMapUrl(officeLocation.titleEn, selectedDistrict.nameEn)} target="_blank" rel="noopener noreferrer">
          {officeLabels.mapLink}
        </a>
      </div>

      <div className="detail-columns">
        <DetailBlock title={text.benefit} items={benefitItems} />
        <DetailBlock title={text.eligibility} items={eligibilityItems} />
        <DetailBlock title={text.documents} items={documentItems} />
        <DetailBlock title={text.points} items={pointItems} />
        <DetailBlock title={howToApplyTitle} items={howToApplyItems} />
      </div>

      <div className="card-actions">
        <a className="apply" href={scheme.apply} target="_blank" rel="noopener noreferrer">
          {text.apply}
        </a>
        <a className="source" href={scheme.source} target="_blank" rel="noopener noreferrer">
          {text.source}
        </a>
      </div>
    </article>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="detail-block">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

