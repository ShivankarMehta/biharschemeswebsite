export type Language = "en" | "hi";
export type Government = "state" | "central";

export type LocalizedText = Record<Language, string>;
export type LocalizedList = Record<Language, string[]>;

export type Category = {
  id: string;
  en: string;
  hi: string;
};

export type Scheme = {
  id: string;
  government: Government;
  category: string;
  name: LocalizedText;
  department: LocalizedText;
  summary: LocalizedText;
  benefit: LocalizedList;
  eligibility: LocalizedList;
  documents: LocalizedList;
  points: LocalizedList;
  howToApply?: LocalizedList;
  apply: string;
  source: string;
};

export const copy = {
  "en": {
    "brand": "Bihar Scheme for People of Bihar",
    "eyebrow": "Bihar + Central Government Welfare Directory",
    "heroTitle": "Find important schemes, documents, and official apply links in one place.",
    "heroText": "Search major welfare schemes for Bihar residents across education, jobs, farming, health, housing, women welfare, pensions, food security, and small business support.",
    "browseSchemes": "Browse schemes",
    "quickChecklist": "Application checklist",
    "noticeTitle": "Important:",
    "noticeText": "This page is a citizen-friendly guide. Always confirm final eligibility, dates, and document rules on the linked official portal before applying.",
    "schemesListed": "schemes listed",
    "governmentsCovered": "governments covered",
    "languageSupport": "language support",
    "directory": "Directory",
    "findScheme": "Find the right scheme",
    "searchLabel": "Search by scheme, benefit, department, or document",
    "searchPlaceholder": "Search schemes...",
    "emptyState": "No schemes match your search.",
    "prepare": "Prepare Before Applying",
    "checklistTitle": "Common documents to keep ready",
    "checklistText": "Exact documents differ by scheme, but these are commonly requested on Bihar and Central portals.",
    "footerText": "Built as a public information guide using official scheme portals. Last reviewed: 15 June 2026.",
    "allCategories": "All categories",
    "allGovernments": "All governments",
    "state": "Bihar Government",
    "central": "Central Government",
    "benefit": "Benefit",
    "eligibility": "Eligibility",
    "documents": "Documents",
    "points": "Important points",
    "apply": "Apply / Portal",
    "source": "Official info"
  },
  "hi": {
    "brand": "बिहार योजनाएं",
    "eyebrow": "बिहार + केंद्र सरकार कल्याण निर्देशिका",
    "heroTitle": "महत्वपूर्ण योजनाएं, दस्तावेज और आधिकारिक आवेदन लिंक एक ही जगह देखें.",
    "heroText": "बिहार निवासियों के लिए शिक्षा, रोजगार, खेती, स्वास्थ्य, आवास, महिला कल्याण, पेंशन, खाद्य सुरक्षा और छोटे व्यवसाय की प्रमुख योजनाएं खोजें.",
    "browseSchemes": "योजनाएं देखें",
    "quickChecklist": "आवेदन चेकलिस्ट",
    "noticeTitle": "महत्वपूर्ण:",
    "noticeText": "यह पेज नागरिक सुविधा के लिए बनाया गया गाइड है. आवेदन से पहले अंतिम पात्रता, तारीख और दस्तावेज नियम आधिकारिक पोर्टल पर जरूर जांचें.",
    "schemesListed": "योजनाएं सूचीबद्ध",
    "governmentsCovered": "सरकारें शामिल",
    "languageSupport": "भाषा सुविधा",
    "directory": "निर्देशिका",
    "findScheme": "सही योजना खोजें",
    "searchLabel": "योजना, लाभ, विभाग या दस्तावेज से खोजें",
    "searchPlaceholder": "योजनाएं खोजें...",
    "emptyState": "आपकी खोज से कोई योजना नहीं मिली.",
    "prepare": "आवेदन से पहले तैयारी",
    "checklistTitle": "आम तौर पर जरूरी दस्तावेज",
    "checklistText": "हर योजना में दस्तावेज अलग हो सकते हैं, लेकिन बिहार और केंद्रीय पोर्टल पर ये दस्तावेज अक्सर मांगे जाते हैं.",
    "footerText": "आधिकारिक योजना पोर्टलों के आधार पर जन-सूचना गाइड. अंतिम समीक्षा: 15 जून 2026.",
    "allCategories": "सभी श्रेणियां",
    "allGovernments": "सभी सरकारें",
    "state": "बिहार सरकार",
    "central": "केंद्र सरकार",
    "benefit": "लाभ",
    "eligibility": "पात्रता",
    "documents": "दस्तावेज",
    "points": "महत्वपूर्ण बातें",
    "apply": "आवेदन / पोर्टल",
    "source": "आधिकारिक जानकारी"
  }
} as const;

export const categories: Category[] = [
  {
    "id": "education",
    "en": "Education",
    "hi": "शिक्षा"
  },
  {
    "id": "youth",
    "en": "Youth & Jobs",
    "hi": "युवा और रोजगार"
  },
  {
    "id": "women",
    "en": "Women & Child",
    "hi": "महिला और बाल"
  },
  {
    "id": "farmers",
    "en": "Farmers",
    "hi": "किसान"
  },
  {
    "id": "health",
    "en": "Health",
    "hi": "स्वास्थ्य"
  },
  {
    "id": "housing",
    "en": "Housing",
    "hi": "आवास"
  },
  {
    "id": "pension",
    "en": "Pension",
    "hi": "पेंशन"
  },
  {
    "id": "food",
    "en": "Food Security",
    "hi": "खाद्य सुरक्षा"
  },
  {
    "id": "business",
    "en": "Business",
    "hi": "व्यवसाय"
  },
  {
    "id": "workers",
    "en": "Workers",
    "hi": "श्रमिक"
  }
];

export const commonDocs = {
  "en": [
    "Aadhaar card and mobile number linked with Aadhaar",
    "Residence certificate or Bihar domicile certificate, where required",
    "Caste, income, EWS, disability, or minority certificate, where applicable",
    "Bank passbook with IFSC and account in applicant's name",
    "Passport-size photograph and signature scan",
    "Ration card, family ID, or household details for family-based schemes",
    "Education marksheet, admission proof, or bonafide certificate for student schemes",
    "Land records, LPC, farmer registration, or crop details for agriculture schemes",
    "Business project report, quotation, Udyam registration, or trade certificate for enterprise schemes",
    "Death certificate, age proof, pregnancy record, or health card for special benefit schemes"
  ],
  "hi": [
    "आधार कार्ड और आधार से जुड़ा मोबाइल नंबर",
    "जहां जरूरी हो, निवास प्रमाण पत्र या बिहार डोमिसाइल प्रमाण पत्र",
    "लागू होने पर जाति, आय, ईडब्ल्यूएस, दिव्यांग या अल्पसंख्यक प्रमाण पत्र",
    "आवेदक के नाम की बैंक पासबुक, IFSC सहित",
    "पासपोर्ट फोटो और हस्ताक्षर स्कैन",
    "परिवार आधारित योजनाओं के लिए राशन कार्ड, परिवार ID या परिवार विवरण",
    "छात्र योजनाओं के लिए मार्कशीट, प्रवेश प्रमाण या बोनाफाइड प्रमाण पत्र",
    "कृषि योजनाओं के लिए भूमि रिकॉर्ड, LPC, किसान पंजीकरण या फसल विवरण",
    "उद्यम योजनाओं के लिए प्रोजेक्ट रिपोर्ट, कोटेशन, उद्यम पंजीकरण या ट्रेड प्रमाण",
    "विशेष लाभ योजनाओं के लिए मृत्यु प्रमाण पत्र, आयु प्रमाण, गर्भावस्था रिकॉर्ड या स्वास्थ्य कार्ड"
  ]
} as const;

export const schemes: Scheme[] = [
  {
    "id": "bihar-student-credit-card",
    "government": "state",
    "category": "education",
    "name": {
      "en": "Bihar Student Credit Card Scheme",
      "hi": "बिहार स्टूडेंट क्रेडिट कार्ड योजना"
    },
    "department": {
      "en": "Education Department / MNSSBY",
      "hi": "शिक्षा विभाग / MNSSBY"
    },
    "summary": {
      "en": "Education loan support up to Rs 4 lakh for eligible Bihar students pursuing higher education.",
      "hi": "उच्च शिक्षा के लिए पात्र बिहार छात्रों को 4 लाख रुपये तक शिक्षा ऋण सहायता."
    },
    "benefit": {
      "en": [
        "Loan support for course fees, books, hostel and related expenses",
        "Online application with DRCC verification"
      ],
      "hi": [
        "कोर्स फीस, किताब, हॉस्टल और संबंधित खर्च के लिए ऋण सहायता",
        "ऑनलाइन आवेदन और DRCC सत्यापन"
      ]
    },
    "eligibility": {
      "en": [
        "Bihar resident student",
        "Passed Class 12 or equivalent",
        "Admitted to an eligible higher education course"
      ],
      "hi": [
        "बिहार निवासी छात्र",
        "कक्षा 12 या समकक्ष उत्तीर्ण",
        "मान्य उच्च शिक्षा कोर्स में प्रवेश"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "Class 10 and 12 marksheets",
        "Admission proof",
        "Fee structure",
        "Residence certificate",
        "Bank details"
      ],
      "hi": [
        "आधार",
        "कक्षा 10 और 12 मार्कशीट",
        "प्रवेश प्रमाण",
        "फीस स्ट्रक्चर",
        "निवास प्रमाण पत्र",
        "बैंक विवरण"
      ]
    },
    "points": {
      "en": [
        "Apply through the 7 Nishchay Yuva portal",
        "Visit District Registration and Counselling Centre when called"
      ],
      "hi": [
        "7 निश्चय युवा पोर्टल से आवेदन करें",
        "बुलाए जाने पर जिला निबंधन एवं परामर्श केंद्र जाएं"
      ]
    },
    "apply": "https://www.7nishchay-yuvaupmission.bihar.gov.in/",
    "source": "https://www.7nishchay-yuvaupmission.bihar.gov.in/"
  },
  {
    "id": "kushal-yuva-program",
    "government": "state",
    "category": "youth",
    "name": {
      "en": "Kushal Yuva Program",
      "hi": "कुशल युवा कार्यक्रम"
    },
    "department": {
      "en": "Bihar Skill Development Mission",
      "hi": "बिहार कौशल विकास मिशन"
    },
    "summary": {
      "en": "Skill training in communication, computer basics, and soft skills for Bihar youth.",
      "hi": "बिहार के युवाओं के लिए संवाद कौशल, कंप्यूटर बेसिक्स और सॉफ्ट स्किल प्रशिक्षण."
    },
    "benefit": {
      "en": [
        "Short-term skill training",
        "Improves employability and digital confidence"
      ],
      "hi": [
        "कम अवधि का कौशल प्रशिक्षण",
        "रोजगार क्षमता और डिजिटल आत्मविश्वास बढ़ता है"
      ]
    },
    "eligibility": {
      "en": [
        "Bihar resident youth",
        "Usually Class 10 passed or above",
        "Age rules apply as per portal"
      ],
      "hi": [
        "बिहार निवासी युवा",
        "आम तौर पर कक्षा 10 पास या अधिक",
        "पोर्टल के अनुसार आयु नियम लागू"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "Education certificate",
        "Residence proof",
        "Photo",
        "Bank details"
      ],
      "hi": [
        "आधार",
        "शैक्षणिक प्रमाण पत्र",
        "निवास प्रमाण",
        "फोटो",
        "बैंक विवरण"
      ]
    },
    "points": {
      "en": [
        "Choose the nearest training center after registration",
        "Keep mobile number active for updates"
      ],
      "hi": [
        "पंजीकरण के बाद निकटतम प्रशिक्षण केंद्र चुनें",
        "अपडेट के लिए मोबाइल नंबर सक्रिय रखें"
      ]
    },
    "apply": "https://www.7nishchay-yuvaupmission.bihar.gov.in/",
    "source": "https://skillmissionbihar.org/"
  },
  {
    "id": "swayam-sahayata-bhatta",
    "government": "state",
    "category": "youth",
    "name": {
      "en": "Mukhyamantri Nishchay Swayam Sahayata Bhatta",
      "hi": "मुख्यमंत्री निश्चय स्वयं सहायता भत्ता"
    },
    "department": {
      "en": "Planning and Development Department / MNSSBY",
      "hi": "योजना एवं विकास विभाग / MNSSBY"
    },
    "summary": {
      "en": "Monthly allowance support for eligible unemployed youth while they search for work or training.",
      "hi": "रोजगार या प्रशिक्षण की तलाश कर रहे पात्र बेरोजगार युवाओं के लिए मासिक भत्ता सहायता."
    },
    "benefit": {
      "en": [
        "Temporary financial assistance",
        "Linked with counselling and skill development support"
      ],
      "hi": [
        "अस्थायी आर्थिक सहायता",
        "काउंसलिंग और कौशल विकास सहायता से जुड़ा"
      ]
    },
    "eligibility": {
      "en": [
        "Bihar resident unemployed youth",
        "Class 12 passed",
        "Age and income rules as notified"
      ],
      "hi": [
        "बिहार निवासी बेरोजगार युवा",
        "कक्षा 12 उत्तीर्ण",
        "सूचना के अनुसार आयु और आय नियम"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "Class 12 marksheet",
        "Residence certificate",
        "Bank passbook",
        "Self-declaration"
      ],
      "hi": [
        "आधार",
        "कक्षा 12 मार्कशीट",
        "निवास प्रमाण पत्र",
        "बैंक पासबुक",
        "स्व-घोषणा"
      ]
    },
    "points": {
      "en": [
        "Apply on MNSSBY portal",
        "Physical verification may be required at DRCC"
      ],
      "hi": [
        "MNSSBY पोर्टल पर आवेदन करें",
        "DRCC में भौतिक सत्यापन हो सकता है"
      ]
    },
    "apply": "https://www.7nishchay-yuvaupmission.bihar.gov.in/",
    "source": "https://www.7nishchay-yuvaupmission.bihar.gov.in/"
  },
  {
    "id": "kanya-utthan",
    "government": "state",
    "category": "women",
    "name": {
      "en": "Mukhyamantri Kanya Utthan Yojana",
      "hi": "मुख्यमंत्री कन्या उत्थान योजना"
    },
    "department": {
      "en": "Education / Social Welfare, Bihar",
      "hi": "शिक्षा / समाज कल्याण विभाग, बिहार"
    },
    "summary": {
      "en": "Incentive support for girls at different education milestones, including higher education stages.",
      "hi": "बालिकाओं को शिक्षा के अलग-अलग चरणों पर प्रोत्साहन सहायता, उच्च शिक्षा चरण सहित."
    },
    "benefit": {
      "en": [
        "Direct benefit transfer for eligible girl students",
        "Encourages school completion and graduation"
      ],
      "hi": [
        "पात्र छात्राओं को DBT के माध्यम से प्रोत्साहन",
        "स्कूल पूरा करने और स्नातक शिक्षा को बढ़ावा"
      ]
    },
    "eligibility": {
      "en": [
        "Girl student resident of Bihar",
        "Passed notified education stage from eligible institution",
        "Only eligible applications accepted on active portal window"
      ],
      "hi": [
        "बिहार निवासी छात्रा",
        "मान्य संस्थान से निर्धारित शैक्षणिक चरण उत्तीर्ण",
        "सक्रिय पोर्टल अवधि में पात्र आवेदन"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "Bank account",
        "Marksheet or certificate",
        "Institution details",
        "Photo",
        "Mobile number"
      ],
      "hi": [
        "आधार",
        "बैंक खाता",
        "मार्कशीट या प्रमाण पत्र",
        "संस्थान विवरण",
        "फोटो",
        "मोबाइल नंबर"
      ]
    },
    "points": {
      "en": [
        "Use MedhaSoft or the currently notified education portal",
        "Check application window and bank account validation"
      ],
      "hi": [
        "MedhaSoft या वर्तमान अधिसूचित शिक्षा पोर्टल का उपयोग करें",
        "आवेदन अवधि और बैंक खाता सत्यापन जांचें"
      ]
    },
    "apply": "https://medhasoft.bih.nic.in/",
    "source": "https://medhasoft.bih.nic.in/"
  },
  {
    "id": "post-matric-scholarship-bihar",
    "government": "state",
    "category": "education",
    "name": {
      "en": "Bihar Post Matric Scholarship",
      "hi": "बिहार पोस्ट मैट्रिक छात्रवृत्ति"
    },
    "department": {
      "en": "Education Department, Bihar",
      "hi": "शिक्षा विभाग, बिहार"
    },
    "summary": {
      "en": "Scholarship support for eligible SC, ST, BC, and EBC students studying after matriculation.",
      "hi": "मैट्रिक के बाद पढ़ रहे पात्र SC, ST, BC और EBC छात्रों के लिए छात्रवृत्ति सहायता."
    },
    "benefit": {
      "en": [
        "Tuition fee and maintenance support as per rules",
        "Online institution and student verification"
      ],
      "hi": [
        "नियमों के अनुसार फीस और मेंटेनेंस सहायता",
        "ऑनलाइन संस्थान और छात्र सत्यापन"
      ]
    },
    "eligibility": {
      "en": [
        "Eligible caste/category student of Bihar",
        "Studying in approved post-matric course",
        "Income ceiling as per current rules"
      ],
      "hi": [
        "बिहार का पात्र जाति/श्रेणी छात्र",
        "मान्य पोस्ट-मैट्रिक कोर्स में अध्ययनरत",
        "वर्तमान नियमों के अनुसार आय सीमा"
      ]
    },
    "documents": {
      "en": [
        "Caste certificate",
        "Income certificate",
        "Residence certificate",
        "Marksheets",
        "Fee receipt",
        "Bank details",
        "Aadhaar"
      ],
      "hi": [
        "जाति प्रमाण पत्र",
        "आय प्रमाण पत्र",
        "निवास प्रमाण पत्र",
        "मार्कशीट",
        "फीस रसीद",
        "बैंक विवरण",
        "आधार"
      ]
    },
    "points": {
      "en": [
        "Register on official PMS portal during open cycle",
        "Institution verification is required before payment"
      ],
      "hi": [
        "आवेदन अवधि में आधिकारिक PMS पोर्टल पर रजिस्टर करें",
        "भुगतान से पहले संस्थान सत्यापन जरूरी है"
      ]
    },
    "apply": "https://pmsonline.bih.nic.in/",
    "source": "https://pmsonline.bih.nic.in/"
  },
  {
    "id": "bihar-udyami",
    "government": "state",
    "category": "business",
    "name": {
      "en": "Mukhyamantri Udyami Yojana",
      "hi": "मुख्यमंत्री उद्यमी योजना"
    },
    "department": {
      "en": "Department of Industries, Bihar",
      "hi": "उद्योग विभाग, बिहार"
    },
    "summary": {
      "en": "Financial support to promote entrepreneurship among eligible Bihar residents from notified categories.",
      "hi": "अधिसूचित श्रेणियों के पात्र बिहार निवासियों में उद्यमिता बढ़ाने के लिए वित्तीय सहायता."
    },
    "benefit": {
      "en": [
        "Project-based assistance, subsidy, and loan support as per scheme rules",
        "Online selection and training process"
      ],
      "hi": [
        "नियमों के अनुसार प्रोजेक्ट आधारित सहायता, अनुदान और ऋण",
        "ऑनलाइन चयन और प्रशिक्षण प्रक्रिया"
      ]
    },
    "eligibility": {
      "en": [
        "Bihar resident",
        "Category, age, and qualification rules as notified",
        "New enterprise or eligible project proposal"
      ],
      "hi": [
        "बिहार निवासी",
        "सूचना के अनुसार श्रेणी, आयु और योग्यता नियम",
        "नया उद्यम या पात्र परियोजना प्रस्ताव"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "PAN",
        "Caste/category certificate if applicable",
        "Residence certificate",
        "Education proof",
        "Bank details",
        "Project report"
      ],
      "hi": [
        "आधार",
        "PAN",
        "लागू होने पर जाति/श्रेणी प्रमाण पत्र",
        "निवास प्रमाण",
        "शिक्षा प्रमाण",
        "बैंक विवरण",
        "प्रोजेक्ट रिपोर्ट"
      ]
    },
    "points": {
      "en": [
        "Application windows are time-bound",
        "Read the latest category-specific advertisement before applying"
      ],
      "hi": [
        "आवेदन अवधि सीमित होती है",
        "आवेदन से पहले नवीनतम श्रेणीवार विज्ञापन पढ़ें"
      ]
    },
    "apply": "https://udyami.bihar.gov.in/",
    "source": "https://udyami.bihar.gov.in/"
  },
  {
    "id": "dbt-agriculture-bihar",
    "government": "state",
    "category": "farmers",
    "name": {
      "en": "Bihar Agriculture DBT Schemes",
      "hi": "बिहार कृषि DBT योजनाएं"
    },
    "department": {
      "en": "Agriculture Department, Bihar",
      "hi": "कृषि विभाग, बिहार"
    },
    "summary": {
      "en": "Single agriculture DBT portal for farmer registration and subsidy schemes such as seed, machinery, irrigation, and inputs.",
      "hi": "किसान पंजीकरण और बीज, यंत्र, सिंचाई तथा इनपुट जैसी सब्सिडी योजनाओं के लिए कृषि DBT पोर्टल."
    },
    "benefit": {
      "en": [
        "Scheme-wise subsidy and DBT support",
        "Farmer registration used across agriculture services"
      ],
      "hi": [
        "योजना अनुसार सब्सिडी और DBT सहायता",
        "कृषि सेवाओं में किसान पंजीकरण उपयोगी"
      ]
    },
    "eligibility": {
      "en": [
        "Farmer or eligible agricultural beneficiary of Bihar",
        "Land or lease details as required by scheme"
      ],
      "hi": [
        "बिहार का किसान या पात्र कृषि लाभार्थी",
        "योजना के अनुसार भूमि या पट्टा विवरण"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "Bank passbook",
        "Land records or LPC",
        "Mobile number",
        "Photo",
        "Category certificate if needed"
      ],
      "hi": [
        "आधार",
        "बैंक पासबुक",
        "भूमि रिकॉर्ड या LPC",
        "मोबाइल नंबर",
        "फोटो",
        "जरूरत होने पर श्रेणी प्रमाण पत्र"
      ]
    },
    "points": {
      "en": [
        "Register as farmer before applying for individual schemes",
        "Subsidy rates and deadlines differ by scheme"
      ],
      "hi": [
        "व्यक्तिगत योजनाओं से पहले किसान पंजीकरण करें",
        "सब्सिडी दर और अंतिम तारीख योजना अनुसार बदलती है"
      ]
    },
    "apply": "https://dbtagriculture.bihar.gov.in/",
    "source": "https://dbtagriculture.bihar.gov.in/"
  },
  {
    "id": "ssp-pension-bihar",
    "government": "state",
    "category": "pension",
    "name": {
      "en": "Bihar Social Security Pension",
      "hi": "बिहार सामाजिक सुरक्षा पेंशन"
    },
    "department": {
      "en": "Social Welfare Department, Bihar",
      "hi": "समाज कल्याण विभाग, बिहार"
    },
    "summary": {
      "en": "Pension support for eligible elderly persons, widows, and persons with disabilities through SSPMIS.",
      "hi": "SSPMIS के माध्यम से पात्र वृद्धजन, विधवा और दिव्यांग व्यक्तियों को पेंशन सहायता."
    },
    "benefit": {
      "en": [
        "Monthly pension credited through DBT",
        "Online status and beneficiary tracking"
      ],
      "hi": [
        "DBT के माध्यम से मासिक पेंशन",
        "ऑनलाइन स्थिति और लाभार्थी ट्रैकिंग"
      ]
    },
    "eligibility": {
      "en": [
        "Resident of Bihar",
        "Age, widowhood, disability, and income conditions as per pension type"
      ],
      "hi": [
        "बिहार निवासी",
        "पेंशन प्रकार के अनुसार आयु, विधवा, दिव्यांगता और आय शर्तें"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "Bank details",
        "Residence proof",
        "Age proof",
        "Death certificate for widow pension",
        "Disability certificate if applicable"
      ],
      "hi": [
        "आधार",
        "बैंक विवरण",
        "निवास प्रमाण",
        "आयु प्रमाण",
        "विधवा पेंशन के लिए मृत्यु प्रमाण पत्र",
        "लागू होने पर दिव्यांग प्रमाण पत्र"
      ]
    },
    "points": {
      "en": [
        "Applications may route through RTPS or local office depending on service",
        "Track payment and approval on SSPMIS"
      ],
      "hi": [
        "सेवा के अनुसार आवेदन RTPS या स्थानीय कार्यालय से हो सकता है",
        "SSPMIS पर भुगतान और स्वीकृति ट्रैक करें"
      ]
    },
    "apply": "https://www.sspmis.bihar.gov.in/",
    "source": "https://www.sspmis.bihar.gov.in/"
  },
  {
    "id": "ration-card-bihar",
    "government": "state",
    "category": "food",
    "name": {
      "en": "Bihar Ration Card and PDS Services",
      "hi": "बिहार राशन कार्ड और PDS सेवाएं"
    },
    "department": {
      "en": "Food and Consumer Protection Department, Bihar",
      "hi": "खाद्य एवं उपभोक्ता संरक्षण विभाग, बिहार"
    },
    "summary": {
      "en": "Ration card services and subsidized food grain access for eligible households under NFSA/PDS.",
      "hi": "NFSA/PDS के तहत पात्र परिवारों के लिए राशन कार्ड सेवाएं और सब्सिडी खाद्यान्न सुविधा."
    },
    "benefit": {
      "en": [
        "Monthly subsidized food grains through fair price shops",
        "Online ration card and transaction services"
      ],
      "hi": [
        "जन वितरण दुकानों से मासिक सब्सिडी खाद्यान्न",
        "ऑनलाइन राशन कार्ड और लेनदेन सेवाएं"
      ]
    },
    "eligibility": {
      "en": [
        "Eligible household as per NFSA and state rules",
        "No duplicate ration card in household"
      ],
      "hi": [
        "NFSA और राज्य नियमों के अनुसार पात्र परिवार",
        "परिवार में डुप्लीकेट राशन कार्ड नहीं"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar of family members",
        "Residence proof",
        "Income or category proof if required",
        "Family photo",
        "Mobile number"
      ],
      "hi": [
        "परिवार सदस्यों के आधार",
        "निवास प्रमाण",
        "जरूरत पर आय या श्रेणी प्रमाण",
        "परिवार फोटो",
        "मोबाइल नंबर"
      ]
    },
    "points": {
      "en": [
        "Apply or track through RTPS/EPDS services as available",
        "Keep Aadhaar seeding updated for household members"
      ],
      "hi": [
        "उपलब्धता अनुसार RTPS/EPDS से आवेदन या ट्रैक करें",
        "परिवार सदस्यों की आधार सीडिंग अपडेट रखें"
      ]
    },
    "apply": "https://epds.bihar.gov.in/",
    "source": "https://epds.bihar.gov.in/"
  },
  {
    "id": "rtps-bihar",
    "government": "state",
    "category": "workers",
    "name": {
      "en": "Bihar RTPS and ServicePlus Certificates",
      "hi": "बिहार RTPS और ServicePlus प्रमाण पत्र"
    },
    "department": {
      "en": "General Administration Department, Bihar",
      "hi": "सामान्य प्रशासन विभाग, बिहार"
    },
    "summary": {
      "en": "Online services for income, caste, residence, EWS, and other certificates needed for many schemes.",
      "hi": "कई योजनाओं में जरूरी आय, जाति, निवास, EWS और अन्य प्रमाण पत्रों की ऑनलाइन सेवा."
    },
    "benefit": {
      "en": [
        "Apply for certificates online",
        "Download approved certificates and track status"
      ],
      "hi": [
        "प्रमाण पत्रों के लिए ऑनलाइन आवेदन",
        "स्वीकृत प्रमाण पत्र डाउनलोड और स्थिति ट्रैक करें"
      ]
    },
    "eligibility": {
      "en": [
        "Bihar residents needing citizen certificates",
        "Service-specific conditions apply"
      ],
      "hi": [
        "नागरिक प्रमाण पत्र चाहने वाले बिहार निवासी",
        "सेवा अनुसार शर्तें लागू"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "Address proof",
        "Family details",
        "Income details",
        "Category evidence where applicable"
      ],
      "hi": [
        "आधार",
        "पता प्रमाण",
        "परिवार विवरण",
        "आय विवरण",
        "लागू होने पर श्रेणी प्रमाण"
      ]
    },
    "points": {
      "en": [
        "Many scheme applications require these certificates first",
        "Use the certificate number exactly as issued"
      ],
      "hi": [
        "कई योजनाओं से पहले ये प्रमाण पत्र जरूरी होते हैं",
        "जारी प्रमाण पत्र संख्या सही भरें"
      ]
    },
    "apply": "https://serviceonline.bihar.gov.in/",
    "source": "https://serviceonline.bihar.gov.in/"
  },
  {
    "id": "pm-kisan",
    "government": "central",
    "category": "farmers",
    "name": {
      "en": "PM-KISAN Samman Nidhi",
      "hi": "पीएम-किसान सम्मान निधि"
    },
    "department": {
      "en": "Ministry of Agriculture and Farmers Welfare",
      "hi": "कृषि एवं किसान कल्याण मंत्रालय"
    },
    "summary": {
      "en": "Income support for eligible farmer families, paid in installments through DBT.",
      "hi": "पात्र किसान परिवारों को DBT के माध्यम से किस्तों में आय सहायता."
    },
    "benefit": {
      "en": [
        "Financial assistance paid directly to bank account",
        "Online e-KYC, status, and beneficiary services"
      ],
      "hi": [
        "बैंक खाते में सीधे वित्तीय सहायता",
        "ऑनलाइन e-KYC, स्थिति और लाभार्थी सेवाएं"
      ]
    },
    "eligibility": {
      "en": [
        "Eligible landholding farmer family",
        "Exclusion categories apply for higher-income or institutional holders"
      ],
      "hi": [
        "पात्र भूमिधारी किसान परिवार",
        "उच्च आय या संस्थागत धारकों पर अपवर्जन लागू"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "Land record details",
        "Bank account",
        "Mobile number",
        "Farmer registration details"
      ],
      "hi": [
        "आधार",
        "भूमि रिकॉर्ड विवरण",
        "बैंक खाता",
        "मोबाइल नंबर",
        "किसान पंजीकरण विवरण"
      ]
    },
    "points": {
      "en": [
        "Complete e-KYC and bank account seeding",
        "Check beneficiary status before visiting offices"
      ],
      "hi": [
        "e-KYC और बैंक खाते की सीडिंग पूरी करें",
        "कार्यालय जाने से पहले लाभार्थी स्थिति जांचें"
      ]
    },
    "apply": "https://pmkisan.gov.in/",
    "source": "https://pmkisan.gov.in/"
  },
  {
    "id": "ayushman-bharat",
    "government": "central",
    "category": "health",
    "name": {
      "en": "Ayushman Bharat PM-JAY",
      "hi": "आयुष्मान भारत PM-JAY"
    },
    "department": {
      "en": "National Health Authority",
      "hi": "राष्ट्रीय स्वास्थ्य प्राधिकरण"
    },
    "summary": {
      "en": "Health cover for eligible families for cashless treatment at empanelled hospitals.",
      "hi": "पात्र परिवारों को सूचीबद्ध अस्पतालों में कैशलेस इलाज के लिए स्वास्थ्य कवर."
    },
    "benefit": {
      "en": [
        "Cashless hospitalization cover as per PM-JAY package rules",
        "Ayushman card generation and hospital search"
      ],
      "hi": [
        "PM-JAY पैकेज नियमों के अनुसार कैशलेस अस्पताल उपचार",
        "आयुष्मान कार्ड और अस्पताल खोज"
      ]
    },
    "eligibility": {
      "en": [
        "Family listed as eligible in PM-JAY database or state-linked coverage list",
        "Identity verification required"
      ],
      "hi": [
        "PM-JAY डेटाबेस या राज्य कवरेज सूची में पात्र परिवार",
        "पहचान सत्यापन जरूरी"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar or approved ID",
        "Ration card or family details",
        "Mobile number",
        "Existing health card if any"
      ],
      "hi": [
        "आधार या मान्य ID",
        "राशन कार्ड या परिवार विवरण",
        "मोबाइल नंबर",
        "यदि हो तो मौजूदा स्वास्थ्य कार्ड"
      ]
    },
    "points": {
      "en": [
        "Check eligibility on beneficiary portal",
        "Use only empanelled hospitals for cashless treatment"
      ],
      "hi": [
        "लाभार्थी पोर्टल पर पात्रता जांचें",
        "कैशलेस इलाज के लिए केवल सूचीबद्ध अस्पताल का उपयोग करें"
      ]
    },
    "apply": "https://beneficiary.nha.gov.in/",
    "source": "https://pmjay.gov.in/"
  },
  {
    "id": "pmay-g",
    "government": "central",
    "category": "housing",
    "name": {
      "en": "Pradhan Mantri Awas Yojana - Gramin",
      "hi": "प्रधानमंत्री आवास योजना - ग्रामीण"
    },
    "department": {
      "en": "Ministry of Rural Development",
      "hi": "ग्रामीण विकास मंत्रालय"
    },
    "summary": {
      "en": "Housing assistance for eligible rural households to build pucca houses.",
      "hi": "पात्र ग्रामीण परिवारों को पक्का घर बनाने के लिए आवास सहायता."
    },
    "benefit": {
      "en": [
        "Financial assistance for rural house construction",
        "Convergence with toilet, electricity, LPG, and wage support where applicable"
      ],
      "hi": [
        "ग्रामीण घर निर्माण के लिए वित्तीय सहायता",
        "लागू होने पर शौचालय, बिजली, LPG और मजदूरी सहायता से जोड़ाव"
      ]
    },
    "eligibility": {
      "en": [
        "Rural household identified through official deprivation and priority lists",
        "Household should not already own a pucca house as per rules"
      ],
      "hi": [
        "आधिकारिक वंचना और प्राथमिकता सूची में पहचाना गया ग्रामीण परिवार",
        "नियमों के अनुसार पहले से पक्का घर नहीं होना चाहिए"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "Job card if applicable",
        "Bank account",
        "Land or site details",
        "Beneficiary ID details"
      ],
      "hi": [
        "आधार",
        "लागू होने पर जॉब कार्ड",
        "बैंक खाता",
        "भूमि या साइट विवरण",
        "लाभार्थी ID विवरण"
      ]
    },
    "points": {
      "en": [
        "Beneficiaries are selected through official lists and Gram Sabha process",
        "Track status on AwaasSoft"
      ],
      "hi": [
        "लाभार्थी आधिकारिक सूची और ग्राम सभा प्रक्रिया से चुने जाते हैं",
        "AwaasSoft पर स्थिति ट्रैक करें"
      ]
    },
    "apply": "https://pmayg.nic.in/",
    "source": "https://pmayg.nic.in/"
  },
  {
    "id": "pm-ujjwala",
    "government": "central",
    "category": "women",
    "name": {
      "en": "Pradhan Mantri Ujjwala Yojana",
      "hi": "प्रधानमंत्री उज्ज्वला योजना"
    },
    "department": {
      "en": "Ministry of Petroleum and Natural Gas",
      "hi": "पेट्रोलियम और प्राकृतिक गैस मंत्रालय"
    },
    "summary": {
      "en": "LPG connection support for eligible adult women from poor households.",
      "hi": "गरीब परिवारों की पात्र वयस्क महिलाओं को LPG कनेक्शन सहायता."
    },
    "benefit": {
      "en": [
        "Deposit-free LPG connection as per scheme rules",
        "Connection through selected oil marketing company distributor"
      ],
      "hi": [
        "योजना नियमों के अनुसार जमा-मुक्त LPG कनेक्शन",
        "चयनित तेल कंपनी वितरक के माध्यम से कनेक्शन"
      ]
    },
    "eligibility": {
      "en": [
        "Adult woman from eligible household",
        "No existing LPG connection in household",
        "Meets SECC or notified eligibility category"
      ],
      "hi": [
        "पात्र परिवार की वयस्क महिला",
        "परिवार में पहले से LPG कनेक्शन नहीं",
        "SECC या अधिसूचित पात्रता श्रेणी"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "Ration card",
        "Bank account",
        "Address proof",
        "KYC form",
        "Category proof if applicable"
      ],
      "hi": [
        "आधार",
        "राशन कार्ड",
        "बैंक खाता",
        "पता प्रमाण",
        "KYC फॉर्म",
        "लागू होने पर श्रेणी प्रमाण"
      ]
    },
    "points": {
      "en": [
        "Apply online or through LPG distributor",
        "Use official PMUY portal for current KYC process"
      ],
      "hi": [
        "ऑनलाइन या LPG वितरक के माध्यम से आवेदन करें",
        "वर्तमान KYC प्रक्रिया के लिए आधिकारिक PMUY पोर्टल देखें"
      ]
    },
    "apply": "https://www.pmuy.gov.in/",
    "source": "https://www.pmuy.gov.in/"
  },
  {
    "id": "pm-vishwakarma",
    "government": "central",
    "category": "business",
    "name": {
      "en": "PM Vishwakarma",
      "hi": "पीएम विश्वकर्मा"
    },
    "department": {
      "en": "Ministry of Micro, Small and Medium Enterprises",
      "hi": "सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय"
    },
    "summary": {
      "en": "Support for traditional artisans and craftspeople through registration, training, toolkit support, and credit linkage.",
      "hi": "पारंपरिक कारीगरों और शिल्पकारों के लिए पंजीकरण, प्रशिक्षण, टूलकिट सहायता और ऋण लिंक सहायता."
    },
    "benefit": {
      "en": [
        "Skill training and stipend as per scheme",
        "Toolkit incentive and collateral-free credit support"
      ],
      "hi": [
        "योजना अनुसार कौशल प्रशिक्षण और स्टाइपेंड",
        "टूलकिट प्रोत्साहन और बिना गारंटी ऋण सहायता"
      ]
    },
    "eligibility": {
      "en": [
        "Artisan or craftsperson in notified traditional trades",
        "Minimum age and family restrictions as per guidelines"
      ],
      "hi": [
        "अधिसूचित पारंपरिक ट्रेड का कारीगर या शिल्पकार",
        "दिशानिर्देश अनुसार न्यूनतम आयु और परिवार नियम"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "Mobile number",
        "Bank account",
        "Ration card or family details",
        "Trade details"
      ],
      "hi": [
        "आधार",
        "मोबाइल नंबर",
        "बैंक खाता",
        "राशन कार्ड या परिवार विवरण",
        "ट्रेड विवरण"
      ]
    },
    "points": {
      "en": [
        "Registration is usually through CSC/official portal workflow",
        "Verification is done at multiple administrative levels"
      ],
      "hi": [
        "पंजीकरण आम तौर पर CSC/आधिकारिक पोर्टल प्रक्रिया से होता है",
        "कई प्रशासनिक स्तरों पर सत्यापन होता है"
      ]
    },
    "apply": "https://pmvishwakarma.gov.in/",
    "source": "https://pmvishwakarma.gov.in/"
  },
  {
    "id": "pm-svanidhi",
    "government": "central",
    "category": "business",
    "name": {
      "en": "PM SVANidhi",
      "hi": "पीएम स्वनिधि"
    },
    "department": {
      "en": "Ministry of Housing and Urban Affairs",
      "hi": "आवास और शहरी कार्य मंत्रालय"
    },
    "summary": {
      "en": "Working capital loan support for eligible urban street vendors.",
      "hi": "पात्र शहरी स्ट्रीट वेंडरों के लिए कार्यशील पूंजी ऋण सहायता."
    },
    "benefit": {
      "en": [
        "Collateral-free working capital loans",
        "Interest subsidy and digital transaction incentives as per rules"
      ],
      "hi": [
        "बिना गारंटी कार्यशील पूंजी ऋण",
        "नियमों के अनुसार ब्याज सब्सिडी और डिजिटल लेनदेन प्रोत्साहन"
      ]
    },
    "eligibility": {
      "en": [
        "Urban street vendor identified by ULB or holding vendor certificate/letter",
        "Eligible vendors from notified cut-off rules"
      ],
      "hi": [
        "ULB द्वारा पहचाना गया या वेंडर प्रमाण/पत्र वाला शहरी स्ट्रीट वेंडर",
        "अधिसूचित नियमों के पात्र वेंडर"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "Mobile number",
        "Bank account",
        "Vendor certificate or letter of recommendation",
        "ULB details"
      ],
      "hi": [
        "आधार",
        "मोबाइल नंबर",
        "बैंक खाता",
        "वेंडर प्रमाण पत्र या सिफारिश पत्र",
        "ULB विवरण"
      ]
    },
    "points": {
      "en": [
        "Repay on time to become eligible for higher loan cycles",
        "Application may require ULB verification"
      ],
      "hi": [
        "समय पर भुगतान करने से अगले उच्च ऋण चक्र की पात्रता मिलती है",
        "आवेदन में ULB सत्यापन हो सकता है"
      ]
    },
    "apply": "https://pmsvanidhi.mohua.gov.in/",
    "source": "https://pmsvanidhi.mohua.gov.in/"
  },
  {
    "id": "mgnrega",
    "government": "central",
    "category": "workers",
    "name": {
      "en": "MGNREGA Job Card and Work Demand",
      "hi": "मनरेगा जॉब कार्ड और काम मांग"
    },
    "department": {
      "en": "Ministry of Rural Development",
      "hi": "ग्रामीण विकास मंत्रालय"
    },
    "summary": {
      "en": "Legal guarantee of wage employment for rural households seeking unskilled manual work.",
      "hi": "अकुशल श्रम कार्य चाहने वाले ग्रामीण परिवारों के लिए मजदूरी रोजगार की कानूनी गारंटी."
    },
    "benefit": {
      "en": [
        "Wage employment through Gram Panchayat works",
        "Job card, muster roll, and payment details available online"
      ],
      "hi": [
        "ग्राम पंचायत कार्यों में मजदूरी रोजगार",
        "जॉब कार्ड, मस्टर रोल और भुगतान विवरण ऑनलाइन उपलब्ध"
      ]
    },
    "eligibility": {
      "en": [
        "Adult members of rural household willing to do unskilled manual work",
        "Job card registration through Gram Panchayat"
      ],
      "hi": [
        "अकुशल श्रम करने को इच्छुक ग्रामीण परिवार के वयस्क सदस्य",
        "ग्राम पंचायत से जॉब कार्ड पंजीकरण"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "Residence proof",
        "Family details",
        "Bank or post office account",
        "Photo"
      ],
      "hi": [
        "आधार",
        "निवास प्रमाण",
        "परिवार विवरण",
        "बैंक या डाकघर खाता",
        "फोटो"
      ]
    },
    "points": {
      "en": [
        "Demand work through Gram Panchayat or official channels",
        "Check payment status on NREGA portal"
      ],
      "hi": [
        "ग्राम पंचायत या आधिकारिक माध्यम से काम मांगें",
        "NREGA पोर्टल पर भुगतान स्थिति देखें"
      ]
    },
    "apply": "https://nrega.nic.in/",
    "source": "https://nrega.nic.in/"
  },
  {
    "id": "eshram",
    "government": "central",
    "category": "workers",
    "name": {
      "en": "e-Shram Card",
      "hi": "ई-श्रम कार्ड"
    },
    "department": {
      "en": "Ministry of Labour and Employment",
      "hi": "श्रम एवं रोजगार मंत्रालय"
    },
    "summary": {
      "en": "National database registration for unorganised workers and gig/platform workers.",
      "hi": "असंगठित, गिग और प्लेटफॉर्म श्रमिकों के लिए राष्ट्रीय डेटाबेस पंजीकरण."
    },
    "benefit": {
      "en": [
        "Universal Account Number for unorganised workers",
        "Helps access social security schemes and worker services"
      ],
      "hi": [
        "असंगठित श्रमिकों के लिए यूनिवर्सल अकाउंट नंबर",
        "सामाजिक सुरक्षा योजनाओं और श्रमिक सेवाओं तक पहुंच में मदद"
      ]
    },
    "eligibility": {
      "en": [
        "Unorganised worker in eligible age group",
        "Not a member of EPFO/ESIC/NPS government-funded pension, as per rules"
      ],
      "hi": [
        "पात्र आयु वर्ग का असंगठित श्रमिक",
        "नियमों के अनुसार EPFO/ESIC/NPS सरकारी पेंशन का सदस्य नहीं"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar linked mobile",
        "Bank account",
        "Occupation details",
        "Nominee details"
      ],
      "hi": [
        "आधार से जुड़ा मोबाइल",
        "बैंक खाता",
        "पेशा विवरण",
        "नामिनी विवरण"
      ]
    },
    "points": {
      "en": [
        "Self-register with Aadhaar OTP or visit CSC",
        "Keep occupation and bank details updated"
      ],
      "hi": [
        "आधार OTP से स्वयं रजिस्टर करें या CSC जाएं",
        "पेशा और बैंक विवरण अपडेट रखें"
      ]
    },
    "apply": "https://eshram.gov.in/",
    "source": "https://eshram.gov.in/"
  },
  {
    "id": "nsap",
    "government": "central",
    "category": "pension",
    "name": {
      "en": "National Social Assistance Programme",
      "hi": "राष्ट्रीय सामाजिक सहायता कार्यक्रम"
    },
    "department": {
      "en": "Ministry of Rural Development",
      "hi": "ग्रामीण विकास मंत्रालय"
    },
    "summary": {
      "en": "Central social assistance for elderly, widows, persons with disabilities, and bereaved families, implemented through states.",
      "hi": "वृद्ध, विधवा, दिव्यांग और मृत्यु से प्रभावित परिवारों के लिए केंद्रीय सामाजिक सहायता, राज्यों के माध्यम से लागू."
    },
    "benefit": {
      "en": [
        "Pension or one-time assistance under NSAP sub-schemes",
        "Often delivered through state pension systems"
      ],
      "hi": [
        "NSAP उप-योजनाओं के तहत पेंशन या एकमुश्त सहायता",
        "अक्सर राज्य पेंशन प्रणाली से भुगतान"
      ]
    },
    "eligibility": {
      "en": [
        "Belongs to eligible vulnerable category and poverty criteria",
        "Age, disability, widowhood, or death conditions by sub-scheme"
      ],
      "hi": [
        "पात्र कमजोर श्रेणी और गरीबी मानदंड",
        "उप-योजना अनुसार आयु, दिव्यांगता, विधवा या मृत्यु शर्तें"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "Bank details",
        "Age proof",
        "Disability or death certificate if applicable",
        "Residence and income details"
      ],
      "hi": [
        "आधार",
        "बैंक विवरण",
        "आयु प्रमाण",
        "लागू होने पर दिव्यांग या मृत्यु प्रमाण पत्र",
        "निवास और आय विवरण"
      ]
    },
    "points": {
      "en": [
        "Apply through state/local pension process",
        "Use NSAP portal for scheme information and reports"
      ],
      "hi": [
        "राज्य/स्थानीय पेंशन प्रक्रिया से आवेदन करें",
        "योजना जानकारी और रिपोर्ट के लिए NSAP पोर्टल देखें"
      ]
    },
    "apply": "https://nsap.nic.in/",
    "source": "https://nsap.nic.in/"
  },
  {
    "id": "pmmvy",
    "government": "central",
    "category": "women",
    "name": {
      "en": "Pradhan Mantri Matru Vandana Yojana",
      "hi": "प्रधानमंत्री मातृ वंदना योजना"
    },
    "department": {
      "en": "Ministry of Women and Child Development",
      "hi": "महिला एवं बाल विकास मंत्रालय"
    },
    "summary": {
      "en": "Maternity benefit support for eligible pregnant women and lactating mothers.",
      "hi": "पात्र गर्भवती महिलाओं और स्तनपान कराने वाली माताओं के लिए मातृत्व लाभ सहायता."
    },
    "benefit": {
      "en": [
        "Cash incentive in installments as per current PMMVY rules",
        "Linked with pregnancy registration and child birth records"
      ],
      "hi": [
        "वर्तमान PMMVY नियमों के अनुसार किस्तों में नकद प्रोत्साहन",
        "गर्भावस्था पंजीकरण और जन्म रिकॉर्ड से जुड़ा"
      ]
    },
    "eligibility": {
      "en": [
        "Eligible pregnant woman or lactating mother",
        "Conditions differ for first and second child benefits as notified"
      ],
      "hi": [
        "पात्र गर्भवती महिला या स्तनपान कराने वाली माता",
        "अधिसूचना अनुसार पहले और दूसरे बच्चे के लाभ की शर्तें अलग"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "Bank account",
        "Mother and child protection card",
        "Pregnancy registration",
        "Child birth certificate where required"
      ],
      "hi": [
        "आधार",
        "बैंक खाता",
        "मदर एंड चाइल्ड प्रोटेक्शन कार्ड",
        "गर्भावस्था पंजीकरण",
        "जहां जरूरी हो जन्म प्रमाण पत्र"
      ]
    },
    "points": {
      "en": [
        "Apply through Anganwadi/health system or official portal route",
        "Aadhaar and bank validation are important"
      ],
      "hi": [
        "आंगनवाड़ी/स्वास्थ्य प्रणाली या आधिकारिक पोर्टल मार्ग से आवेदन करें",
        "आधार और बैंक सत्यापन महत्वपूर्ण है"
      ]
    },
    "apply": "https://pmmvy.wcd.gov.in/",
    "source": "https://pmmvy.wcd.gov.in/"
  },
  {
    "id": "national-scholarship-portal",
    "government": "central",
    "category": "education",
    "name": {
      "en": "National Scholarship Portal",
      "hi": "राष्ट्रीय छात्रवृत्ति पोर्टल"
    },
    "department": {
      "en": "Government of India Scholarship Platform",
      "hi": "भारत सरकार छात्रवृत्ति प्लेटफॉर्म"
    },
    "summary": {
      "en": "Common portal for central scholarships including minority, disability, higher education, and department-specific schemes.",
      "hi": "अल्पसंख्यक, दिव्यांग, उच्च शिक्षा और विभागीय केंद्रीय छात्रवृत्तियों के लिए कॉमन पोर्टल."
    },
    "benefit": {
      "en": [
        "Single registration for multiple scholarship schemes",
        "Online verification and payment tracking"
      ],
      "hi": [
        "कई छात्रवृत्ति योजनाओं के लिए एकल पंजीकरण",
        "ऑनलाइन सत्यापन और भुगतान ट्रैकिंग"
      ]
    },
    "eligibility": {
      "en": [
        "Student must match chosen scholarship scheme criteria",
        "Institution and bank verification required"
      ],
      "hi": [
        "छात्र चुनी गई छात्रवृत्ति योजना की पात्रता पूरी करे",
        "संस्थान और बैंक सत्यापन जरूरी"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "Income certificate",
        "Caste/minority/disability certificate if applicable",
        "Marksheets",
        "Fee receipt",
        "Bank details"
      ],
      "hi": [
        "आधार",
        "आय प्रमाण पत्र",
        "लागू होने पर जाति/अल्पसंख्यक/दिव्यांग प्रमाण पत्र",
        "मार्कशीट",
        "फीस रसीद",
        "बैंक विवरण"
      ]
    },
    "points": {
      "en": [
        "Choose the correct scheme and academic year",
        "Watch institute and district verification deadlines"
      ],
      "hi": [
        "सही योजना और शैक्षणिक वर्ष चुनें",
        "संस्थान और जिला सत्यापन अंतिम तारीख पर ध्यान दें"
      ]
    },
    "apply": "https://scholarships.gov.in/",
    "source": "https://scholarships.gov.in/"
  },
  {
    "id": "pm-surya-ghar",
    "government": "central",
    "category": "housing",
    "name": {
      "en": "PM Surya Ghar: Muft Bijli Yojana",
      "hi": "\u092a\u0940\u090f\u092e \u0938\u0942\u0930\u094d\u092f \u0918\u0930: \u092e\u0941\u092b\u094d\u0924 \u092c\u093f\u091c\u0932\u0940 \u092f\u094b\u091c\u0928\u093e"
    },
    "department": {
      "en": "Ministry of New and Renewable Energy",
      "hi": "\u0928\u0935\u0940\u0928 \u0914\u0930 \u0928\u0935\u0940\u0915\u0930\u0923\u0940\u092f \u090a\u0930\u094d\u091c\u093e \u092e\u0902\u0924\u094d\u0930\u093e\u0932\u092f"
    },
    "summary": {
      "en": "Rooftop solar support for residential households, with central financial assistance and net-metering through the official national portal.",
      "hi": "\u0918\u0930\u0947\u0932\u0942 \u0918\u0930\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u0930\u0942\u092b\u091f\u0949\u092a \u0938\u094b\u0932\u0930 \u0938\u0939\u093e\u092f\u0924\u093e, \u0915\u0947\u0902\u0926\u094d\u0930\u0940\u092f \u0935\u093f\u0924\u094d\u0924\u0940\u092f \u0938\u0939\u093e\u092f\u0924\u093e \u0914\u0930 \u0928\u0947\u091f-\u092e\u0940\u091f\u0930\u093f\u0902\u0917 \u0915\u0947 \u0938\u093e\u0925."
    },
    "benefit": {
      "en": [
        "Central subsidy for rooftop solar systems as per approved capacity",
        "Lower electricity bills and option to export surplus power through net metering",
        "Application, vendor selection, inspection, and subsidy tracking through one portal"
      ],
      "hi": [
        "\u0938\u094d\u0935\u0940\u0915\u0943\u0924 \u0915\u094d\u0937\u092e\u0924\u093e \u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930 \u0930\u0942\u092b\u091f\u0949\u092a \u0938\u094b\u0932\u0930 \u092a\u0930 \u0915\u0947\u0902\u0926\u094d\u0930\u0940\u092f \u0938\u092c\u094d\u0938\u093f\u0921\u0940",
        "\u092c\u093f\u091c\u0932\u0940 \u092c\u093f\u0932 \u092e\u0947\u0902 \u0915\u092e\u0940 \u0914\u0930 \u0928\u0947\u091f \u092e\u0940\u091f\u0930\u093f\u0902\u0917 \u0938\u0947 \u0905\u0927\u093f\u0936\u0947\u0937 \u092c\u093f\u091c\u0932\u0940 \u0928\u093f\u0930\u094d\u092f\u093e\u0924 \u0915\u0930\u0928\u0947 \u0915\u093e \u0935\u093f\u0915\u0932\u094d\u092a",
        "\u0906\u0935\u0947\u0926\u0928, \u0935\u0947\u0902\u0921\u0930 \u091a\u092f\u0928, \u0928\u093f\u0930\u0940\u0915\u094d\u0937\u0923 \u0914\u0930 \u0938\u092c\u094d\u0938\u093f\u0921\u0940 \u091f\u094d\u0930\u0948\u0915\u093f\u0902\u0917 \u090f\u0915 \u092a\u094b\u0930\u094d\u091f\u0932 \u092a\u0930"
      ]
    },
    "eligibility": {
      "en": [
        "Indian residential household with a valid electricity connection",
        "Owns a suitable rooftop or has permission to install rooftop solar",
        "Should not have already received another government rooftop solar subsidy for the same connection"
      ],
      "hi": [
        "\u0935\u0948\u0927 \u092c\u093f\u091c\u0932\u0940 \u0915\u0928\u0947\u0915\u094d\u0936\u0928 \u0935\u093e\u0932\u093e \u092d\u093e\u0930\u0924\u0940\u092f \u0918\u0930\u0947\u0932\u0942 \u092a\u0930\u093f\u0935\u093e\u0930",
        "\u0909\u092a\u092f\u0941\u0915\u094d\u0924 \u091b\u0924 \u0915\u093e \u0938\u094d\u0935\u093e\u092e\u093f\u0924\u094d\u0935 \u092f\u093e \u0938\u094b\u0932\u0930 \u0932\u0917\u093e\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092e\u0924\u093f",
        "\u0909\u0938\u0940 \u0915\u0928\u0947\u0915\u094d\u0936\u0928 \u092a\u0930 \u092a\u0939\u0932\u0947 \u0915\u093f\u0938\u0940 \u0905\u0928\u094d\u092f \u0938\u0930\u0915\u093e\u0930\u0940 \u0930\u0942\u092b\u091f\u0949\u092a \u0938\u094b\u0932\u0930 \u0938\u092c\u094d\u0938\u093f\u0921\u0940 \u0928 \u0932\u0940 \u0939\u094b"
      ]
    },
    "documents": {
      "en": [
        "Electricity consumer number and latest bill",
        "Aadhaar and mobile number",
        "Bank account details",
        "Rooftop or property details",
        "Photograph and applicant address details"
      ],
      "hi": [
        "\u092c\u093f\u091c\u0932\u0940 \u0915\u0902\u091c\u094d\u092f\u0942\u092e\u0930 \u0928\u0902\u092c\u0930 \u0914\u0930 \u0928\u0935\u0940\u0928\u0924\u092e \u092c\u093f\u0932",
        "\u0906\u0927\u093e\u0930 \u0914\u0930 \u092e\u094b\u092c\u093e\u0907\u0932 \u0928\u0902\u092c\u0930",
        "\u092c\u0948\u0902\u0915 \u0916\u093e\u0924\u093e \u0935\u093f\u0935\u0930\u0923",
        "\u091b\u0924 \u092f\u093e \u0938\u0902\u092a\u0924\u094d\u0924\u093f \u0935\u093f\u0935\u0930\u0923",
        "\u092b\u094b\u091f\u094b \u0914\u0930 \u0906\u0935\u0947\u0926\u0915 \u092a\u0924\u093e \u0935\u093f\u0935\u0930\u0923"
      ]
    },
    "points": {
      "en": [
        "Choose only empanelled vendors shown on the official portal",
        "Subsidy is processed after installation, inspection, and DISCOM approval",
        "Check Bihar DISCOM/net-metering instructions before final installation"
      ],
      "hi": [
        "\u0915\u0947\u0935\u0932 \u0906\u0927\u093f\u0915\u093e\u0930\u093f\u0915 \u092a\u094b\u0930\u094d\u091f\u0932 \u092a\u0930 \u0926\u093f\u0916\u093e\u090f \u0917\u090f \u090f\u092e\u094d\u092a\u0948\u0928\u0932\u094d\u0921 \u0935\u0947\u0902\u0921\u0930 \u091a\u0941\u0928\u0947\u0902",
        "\u0938\u092c\u094d\u0938\u093f\u0921\u0940 \u0938\u094d\u0925\u093e\u092a\u0928\u093e, \u0928\u093f\u0930\u0940\u0915\u094d\u0937\u0923 \u0914\u0930 DISCOM \u0938\u094d\u0935\u0940\u0915\u0943\u0924\u093f \u0915\u0947 \u092c\u093e\u0926 \u092a\u094d\u0930\u094b\u0938\u0947\u0938 \u0939\u094b\u0924\u0940 \u0939\u0948",
        "\u0905\u0902\u0924\u093f\u092e \u0938\u094d\u0925\u093e\u092a\u0928\u093e \u0938\u0947 \u092a\u0939\u0932\u0947 \u092c\u093f\u0939\u093e\u0930 DISCOM/\u0928\u0947\u091f-\u092e\u0940\u091f\u0930\u093f\u0902\u0917 \u0928\u093f\u0930\u094d\u0926\u0947\u0936 \u091c\u093e\u0902\u091a\u0947\u0902"
      ]
    },
    "howToApply": {
      "en": [
        "Register on the national PM Surya Ghar portal with state, DISCOM, consumer number, mobile, and email",
        "Apply for rooftop solar, wait for feasibility approval, then select a registered vendor",
        "After installation, apply for net meter and submit bank details for subsidy"
      ],
      "hi": [
        "\u0930\u093e\u091c\u094d\u092f, DISCOM, \u0915\u0902\u091c\u094d\u092f\u0942\u092e\u0930 \u0928\u0902\u092c\u0930, \u092e\u094b\u092c\u093e\u0907\u0932 \u0914\u0930 \u0908\u092e\u0947\u0932 \u0938\u0947 \u0930\u093e\u0937\u094d\u091f\u094d\u0930\u0940\u092f \u092a\u094b\u0930\u094d\u091f\u0932 \u092a\u0930 \u0930\u091c\u093f\u0938\u094d\u091f\u0930 \u0915\u0930\u0947\u0902",
        "\u0930\u0942\u092b\u091f\u0949\u092a \u0938\u094b\u0932\u0930 \u0915\u0947 \u0932\u093f\u090f \u0906\u0935\u0947\u0926\u0928 \u0915\u0930\u0947\u0902, \u092b\u0940\u091c\u093f\u092c\u093f\u0932\u093f\u091f\u0940 \u0938\u094d\u0935\u0940\u0915\u0943\u0924\u093f \u0915\u093e \u0907\u0902\u0924\u091c\u093e\u0930 \u0915\u0930\u0947\u0902, \u092b\u093f\u0930 \u0930\u091c\u093f\u0938\u094d\u091f\u0930\u094d\u0921 \u0935\u0947\u0902\u0921\u0930 \u091a\u0941\u0928\u0947\u0902",
        "\u0938\u094d\u0925\u093e\u092a\u0928\u093e \u0915\u0947 \u092c\u093e\u0926 \u0928\u0947\u091f \u092e\u0940\u091f\u0930 \u0915\u0947 \u0932\u093f\u090f \u0906\u0935\u0947\u0926\u0928 \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u092c\u094d\u0938\u093f\u0921\u0940 \u0915\u0947 \u0932\u093f\u090f \u092c\u0948\u0902\u0915 \u0935\u093f\u0935\u0930\u0923 \u0926\u0947\u0902"
      ]
    },
    "apply": "https://www.pmsuryaghar.gov.in/",
    "source": "https://www.pmsuryaghar.gov.in/"
  },
  {
    "id": "pmegp",
    "government": "central",
    "category": "business",
    "name": {
      "en": "Prime Minister's Employment Generation Programme",
      "hi": "\u092a\u094d\u0930\u0927\u093e\u0928\u092e\u0902\u0924\u094d\u0930\u0940 \u0930\u094b\u091c\u0917\u093e\u0930 \u0938\u0943\u091c\u0928 \u0915\u093e\u0930\u094d\u092f\u0915\u094d\u0930\u092e"
    },
    "department": {
      "en": "KVIC / Ministry of MSME",
      "hi": "KVIC / MSME \u092e\u0902\u0924\u094d\u0930\u093e\u0932\u092f"
    },
    "summary": {
      "en": "Credit-linked subsidy programme for setting up new micro-enterprises in manufacturing, services, and rural or urban self-employment.",
      "hi": "\u092e\u0948\u0928\u094d\u092f\u0942\u092b\u0948\u0915\u094d\u091a\u0930\u093f\u0902\u0917, \u0938\u0947\u0935\u093e \u0914\u0930 \u0938\u094d\u0935\u0930\u094b\u091c\u0917\u093e\u0930 \u0915\u0947 \u0928\u090f \u0938\u0942\u0915\u094d\u0937\u094d\u092e \u0909\u0926\u094d\u092f\u092e\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u0915\u094d\u0930\u0947\u0921\u093f\u091f-\u0932\u093f\u0902\u0915\u094d\u0921 \u0938\u092c\u094d\u0938\u093f\u0921\u0940 \u0915\u093e\u0930\u094d\u092f\u0915\u094d\u0930\u092e."
    },
    "benefit": {
      "en": [
        "Bank loan with margin money subsidy as per PMEGP guidelines",
        "Online application for new units and second loan for eligible existing units",
        "EDP training support after bank sanction"
      ],
      "hi": [
        "PMEGP \u0926\u093f\u0936\u093e\u0928\u093f\u0930\u094d\u0926\u0947\u0936\u094b\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930 \u092e\u093e\u0930\u094d\u091c\u093f\u0928 \u092e\u0928\u0940 \u0938\u092c\u094d\u0938\u093f\u0921\u0940 \u0915\u0947 \u0938\u093e\u0925 \u092c\u0948\u0902\u0915 \u0932\u094b\u0928",
        "\u0928\u0908 \u0907\u0915\u093e\u0908 \u0914\u0930 \u092a\u093e\u0924\u094d\u0930 \u092e\u094c\u091c\u0942\u0926\u093e \u0907\u0915\u093e\u0908 \u0915\u0947 \u0926\u0942\u0938\u0930\u0947 \u0932\u094b\u0928 \u0915\u0947 \u0932\u093f\u090f \u0911\u0928\u0932\u093e\u0907\u0928 \u0906\u0935\u0947\u0926\u0928",
        "\u092c\u0948\u0902\u0915 \u0938\u094d\u0935\u0940\u0915\u0943\u0924\u093f \u0915\u0947 \u092c\u093e\u0926 EDP \u092a\u094d\u0930\u0936\u093f\u0915\u094d\u0937\u0923 \u0938\u0939\u093e\u092f\u0924\u093e"
      ]
    },
    "eligibility": {
      "en": [
        "Individual applicant generally 18 years or above",
        "New project or eligible expansion, not an existing subsidized unit unless applying under the second-loan route",
        "Education qualification and project-cost conditions apply for higher project sizes"
      ],
      "hi": [
        "\u0906\u092e \u0924\u094c\u0930 \u092a\u0930 18 \u0935\u0930\u094d\u0937 \u092f\u093e \u0905\u0927\u093f\u0915 \u0906\u092f\u0941 \u0915\u093e \u0935\u094d\u092f\u0915\u094d\u0924\u093f\u0917\u0924 \u0906\u0935\u0947\u0926\u0915",
        "\u0928\u092f\u093e \u092a\u094d\u0930\u094b\u091c\u0947\u0915\u094d\u091f \u092f\u093e \u092a\u093e\u0924\u094d\u0930 \u0935\u093f\u0938\u094d\u0924\u093e\u0930; \u0926\u0942\u0938\u0930\u0947 \u0932\u094b\u0928 \u092e\u093e\u0930\u094d\u0917 \u0915\u0947 \u0905\u0932\u093e\u0935\u093e \u092a\u0939\u0932\u0947 \u0938\u0947 \u0938\u092c\u094d\u0938\u093f\u0921\u0940 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0907\u0915\u093e\u0908 \u0928\u0939\u0940\u0902",
        "\u092c\u0921\u093c\u0947 \u092a\u094d\u0930\u094b\u091c\u0947\u0915\u094d\u091f \u0906\u0915\u093e\u0930 \u0915\u0947 \u0932\u093f\u090f \u0936\u0948\u0915\u094d\u0937\u0923\u093f\u0915 \u092f\u094b\u0917\u094d\u092f\u0924\u093e \u0914\u0930 \u092a\u094d\u0930\u094b\u091c\u0947\u0915\u094d\u091f \u0915\u0949\u0938\u094d\u091f \u0936\u0930\u094d\u0924\u0947\u0902 \u0932\u093e\u0917\u0942"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar and PAN",
        "Caste or special category certificate if applicable",
        "Education proof where required",
        "Project report and cost estimates",
        "Bank details, photo, and address proof",
        "Rural area certificate if claiming rural category benefits"
      ],
      "hi": [
        "\u0906\u0927\u093e\u0930 \u0914\u0930 PAN",
        "\u0932\u093e\u0917\u0942 \u0939\u094b\u0928\u0947 \u092a\u0930 \u091c\u093e\u0924\u093f \u092f\u093e \u0935\u093f\u0936\u0947\u0937 \u0936\u094d\u0930\u0947\u0923\u0940 \u092a\u094d\u0930\u092e\u093e\u0923 \u092a\u0924\u094d\u0930",
        "\u091c\u0930\u0942\u0930\u0924 \u0939\u094b\u0928\u0947 \u092a\u0930 \u0936\u0948\u0915\u094d\u0937\u0923\u093f\u0915 \u092a\u094d\u0930\u092e\u093e\u0923",
        "\u092a\u094d\u0930\u094b\u091c\u0947\u0915\u094d\u091f \u0930\u093f\u092a\u094b\u0930\u094d\u091f \u0914\u0930 \u0932\u093e\u0917\u0924 \u0905\u0928\u0941\u092e\u093e\u0928",
        "\u092c\u0948\u0902\u0915 \u0935\u093f\u0935\u0930\u0923, \u092b\u094b\u091f\u094b \u0914\u0930 \u092a\u0924\u093e \u092a\u094d\u0930\u092e\u093e\u0923",
        "\u0917\u094d\u0930\u093e\u092e\u0940\u0923 \u0932\u093e\u092d \u0932\u0947\u0928\u0947 \u092a\u0930 \u0917\u094d\u0930\u093e\u092e\u0940\u0923 \u0915\u094d\u0937\u0947\u0924\u094d\u0930 \u092a\u094d\u0930\u092e\u093e\u0923"
      ]
    },
    "points": {
      "en": [
        "KVIC cautions applicants not to use private middlemen for sanction or promotion",
        "Bank appraisal and sanction are required before subsidy/EDP steps",
        "Keep project report practical and aligned with local demand"
      ],
      "hi": [
        "KVIC \u0928\u093f\u091c\u0940 \u092e\u0927\u094d\u092f\u0938\u094d\u0925\u094b\u0902 \u0915\u0947 \u092e\u093e\u0927\u094d\u092f\u092e \u0938\u0947 \u0938\u094d\u0935\u0940\u0915\u0943\u0924\u093f \u092f\u093e \u092a\u094d\u0930\u092e\u094b\u0936\u0928 \u0928 \u0915\u0930\u0928\u0947 \u0915\u0940 \u091a\u0947\u0924\u093e\u0935\u0928\u0940 \u0926\u0947\u0924\u093e \u0939\u0948",
        "\u0938\u092c\u094d\u0938\u093f\u0921\u0940/EDP \u0938\u0947 \u092a\u0939\u0932\u0947 \u092c\u0948\u0902\u0915 \u0905\u092a\u094d\u0930\u0948\u091c\u0932 \u0914\u0930 \u0938\u094d\u0935\u0940\u0915\u0943\u0924\u093f \u091c\u0930\u0942\u0930\u0940 \u0939\u0948",
        "\u092a\u094d\u0930\u094b\u091c\u0947\u0915\u094d\u091f \u0930\u093f\u092a\u094b\u0930\u094d\u091f \u0935\u094d\u092f\u0935\u0939\u093e\u0930\u093f\u0915 \u0914\u0930 \u0938\u094d\u0925\u093e\u0928\u0940\u092f \u092e\u093e\u0902\u0917 \u0915\u0947 \u0905\u0928\u0941\u0930\u0942\u092a \u0930\u0916\u0947\u0902"
      ]
    },
    "howToApply": {
      "en": [
        "Open the PMEGP e-portal and choose Application for New Unit or Existing Unit second-loan route",
        "Fill applicant, agency, project, bank, and document details online",
        "Track bank processing and complete EDP training after sanction when required"
      ],
      "hi": [
        "PMEGP \u0908-\u092a\u094b\u0930\u094d\u091f\u0932 \u092a\u0930 \u091c\u093e\u0915\u0930 New Unit \u092f\u093e Existing Unit \u0926\u0942\u0938\u0930\u093e \u0932\u094b\u0928 \u092e\u093e\u0930\u094d\u0917 \u091a\u0941\u0928\u0947\u0902",
        "\u0906\u0935\u0947\u0926\u0915, \u090f\u091c\u0947\u0902\u0938\u0940, \u092a\u094d\u0930\u094b\u091c\u0947\u0915\u094d\u091f, \u092c\u0948\u0902\u0915 \u0914\u0930 \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c \u0935\u093f\u0935\u0930\u0923 \u0911\u0928\u0932\u093e\u0907\u0928 \u092d\u0930\u0947\u0902",
        "\u092c\u0948\u0902\u0915 \u092a\u094d\u0930\u094b\u0938\u0947\u0938\u093f\u0902\u0917 \u091f\u094d\u0930\u0948\u0915 \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094d\u0935\u0940\u0915\u0943\u0924\u093f \u0915\u0947 \u092c\u093e\u0926 \u091c\u0930\u0942\u0930\u0924 \u0939\u094b\u0928\u0947 \u092a\u0930 EDP \u092a\u094d\u0930\u0936\u093f\u0915\u094d\u0937\u0923 \u092a\u0942\u0930\u093e \u0915\u0930\u0947\u0902"
      ]
    },
    "apply": "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp",
    "source": "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp"
  },
  {
    "id": "sukanya-samriddhi",
    "government": "central",
    "category": "women",
    "name": {
      "en": "Sukanya Samriddhi Account",
      "hi": "\u0938\u0941\u0915\u0928\u094d\u092f\u093e \u0938\u092e\u0943\u0926\u094d\u0927\u093f \u0916\u093e\u0924\u093e"
    },
    "department": {
      "en": "Department of Posts / Ministry of Finance",
      "hi": "\u0921\u093e\u0915 \u0935\u093f\u092d\u093e\u0917 / \u0935\u093f\u0924\u094d\u0924 \u092e\u0902\u0924\u094d\u0930\u093e\u0932\u092f"
    },
    "summary": {
      "en": "Small savings account for a girl child, opened by a guardian through post offices or authorized banks.",
      "hi": "\u092c\u093e\u0932\u093f\u0915\u093e \u0915\u0947 \u0928\u093e\u092e \u092a\u0930 \u0905\u092d\u093f\u092d\u093e\u0935\u0915 \u0926\u094d\u0935\u093e\u0930\u093e \u0921\u093e\u0915\u0918\u0930 \u092f\u093e \u0905\u0927\u093f\u0915\u0943\u0924 \u092c\u0948\u0902\u0915 \u092e\u0947\u0902 \u0916\u094b\u0932\u093e \u091c\u093e\u0928\u0947 \u0935\u093e\u0932\u093e \u0932\u0918\u0941 \u092c\u091a\u0924 \u0916\u093e\u0924\u093e."
    },
    "benefit": {
      "en": [
        "Long-term savings for girl child's education and marriage goals",
        "Government-notified small savings interest rate",
        "Tax benefits as per current income-tax rules"
      ],
      "hi": [
        "\u092c\u093e\u0932\u093f\u0915\u093e \u0915\u0940 \u0936\u093f\u0915\u094d\u0937\u093e \u0914\u0930 \u0935\u093f\u0935\u093e\u0939 \u0932\u0915\u094d\u0937\u094d\u092f \u0915\u0947 \u0932\u093f\u090f \u0932\u0902\u092c\u0940 \u0905\u0935\u0927\u093f \u092c\u091a\u0924",
        "\u0938\u0930\u0915\u093e\u0930 \u0926\u094d\u0935\u093e\u0930\u093e \u0905\u0927\u093f\u0938\u0942\u091a\u093f\u0924 \u0932\u0918\u0941 \u092c\u091a\u0924 \u092c\u094d\u092f\u093e\u091c \u0926\u0930",
        "\u0935\u0930\u094d\u0924\u092e\u093e\u0928 \u0906\u092f\u0915\u0930 \u0928\u093f\u092f\u092e\u094b\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930 \u0915\u0930 \u0932\u093e\u092d"
      ]
    },
    "eligibility": {
      "en": [
        "Account can be opened for a girl child by parent or legal guardian",
        "Age limit and number-of-accounts rules apply as per current scheme rules",
        "Resident Indian status is generally required"
      ],
      "hi": [
        "\u092e\u093e\u0924\u093e-\u092a\u093f\u0924\u093e \u092f\u093e \u0935\u0948\u0927 \u0905\u092d\u093f\u092d\u093e\u0935\u0915 \u092c\u093e\u0932\u093f\u0915\u093e \u0915\u0947 \u0928\u093e\u092e \u092a\u0930 \u0916\u093e\u0924\u093e \u0916\u094b\u0932 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902",
        "\u0935\u0930\u094d\u0924\u092e\u093e\u0928 \u0928\u093f\u092f\u092e\u094b\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930 \u0906\u092f\u0941 \u0938\u0940\u092e\u093e \u0914\u0930 \u0916\u093e\u0924\u094b\u0902 \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0915\u0947 \u0928\u093f\u092f\u092e \u0932\u093e\u0917\u0942",
        "\u0906\u092e \u0924\u094c\u0930 \u092a\u0930 \u0928\u093f\u0935\u093e\u0938\u0940 \u092d\u093e\u0930\u0924\u0940\u092f \u0938\u094d\u0925\u093f\u0924\u093f \u091c\u0930\u0942\u0930\u0940"
      ]
    },
    "documents": {
      "en": [
        "Girl child's birth certificate",
        "Guardian's Aadhaar or KYC documents",
        "Guardian's PAN where required",
        "Address proof",
        "Initial deposit amount"
      ],
      "hi": [
        "\u092c\u093e\u0932\u093f\u0915\u093e \u0915\u093e \u091c\u0928\u094d\u092e \u092a\u094d\u0930\u092e\u093e\u0923 \u092a\u0924\u094d\u0930",
        "\u0905\u092d\u093f\u092d\u093e\u0935\u0915 \u0915\u093e \u0906\u0927\u093e\u0930 \u092f\u093e KYC \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c",
        "\u091c\u0930\u0942\u0930\u0924 \u0939\u094b\u0928\u0947 \u092a\u0930 \u0905\u092d\u093f\u092d\u093e\u0935\u0915 \u0915\u093e PAN",
        "\u092a\u0924\u093e \u092a\u094d\u0930\u092e\u093e\u0923",
        "\u092a\u094d\u0930\u093e\u0930\u0902\u092d\u093f\u0915 \u091c\u092e\u093e \u0930\u093e\u0936\u093f"
      ]
    },
    "points": {
      "en": [
        "Interest rates and deposit limits are notified periodically by the Government of India",
        "Keep the passbook and account details safe for future withdrawals or maturity",
        "Check premature withdrawal and maturity rules before planning funds"
      ],
      "hi": [
        "\u092c\u094d\u092f\u093e\u091c \u0926\u0930 \u0914\u0930 \u091c\u092e\u093e \u0938\u0940\u092e\u093e \u092d\u093e\u0930\u0924 \u0938\u0930\u0915\u093e\u0930 \u0926\u094d\u0935\u093e\u0930\u093e \u0938\u092e\u092f-\u0938\u092e\u092f \u092a\u0930 \u0905\u0927\u093f\u0938\u0942\u091a\u093f\u0924 \u0939\u094b\u0924\u0940 \u0939\u0948",
        "\u092d\u0935\u093f\u0937\u094d\u092f \u0928\u093f\u0915\u093e\u0938\u0940 \u092f\u093e \u092e\u0948\u091a\u094d\u092f\u094b\u0930\u093f\u091f\u0940 \u0915\u0947 \u0932\u093f\u090f \u092a\u093e\u0938\u092c\u0941\u0915 \u0914\u0930 \u0916\u093e\u0924\u093e \u0935\u093f\u0935\u0930\u0923 \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u0930\u0916\u0947\u0902",
        "\u092b\u0902\u0921 \u092f\u094b\u091c\u0928\u093e \u092c\u0928\u093e\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u092a\u0942\u0930\u094d\u0935 \u0928\u093f\u0915\u093e\u0938\u0940 \u0914\u0930 \u092e\u0948\u091a\u094d\u092f\u094b\u0930\u093f\u091f\u0940 \u0928\u093f\u092f\u092e \u091c\u093e\u0902\u091a\u0947\u0902"
      ]
    },
    "howToApply": {
      "en": [
        "Visit a post office or authorized bank branch with guardian and child documents",
        "Fill the Sukanya Samriddhi account opening form and complete KYC",
        "Make the initial deposit and collect passbook/account acknowledgement"
      ],
      "hi": [
        "\u0905\u092d\u093f\u092d\u093e\u0935\u0915 \u0914\u0930 \u092c\u093e\u0932\u093f\u0915\u093e \u0915\u0947 \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c \u0915\u0947 \u0938\u093e\u0925 \u0921\u093e\u0915\u0918\u0930 \u092f\u093e \u0905\u0927\u093f\u0915\u0943\u0924 \u092c\u0948\u0902\u0915 \u0936\u093e\u0916\u093e \u091c\u093e\u090f\u0902",
        "\u0938\u0941\u0915\u0928\u094d\u092f\u093e \u0938\u092e\u0943\u0926\u094d\u0927\u093f \u0916\u093e\u0924\u093e \u0916\u094b\u0932\u0928\u0947 \u0915\u093e \u092b\u0949\u0930\u094d\u092e \u092d\u0930\u0947\u0902 \u0914\u0930 KYC \u092a\u0942\u0930\u093e \u0915\u0930\u0947\u0902",
        "\u092a\u094d\u0930\u093e\u0930\u0902\u092d\u093f\u0915 \u091c\u092e\u093e \u0915\u0930\u0947\u0902 \u0914\u0930 \u092a\u093e\u0938\u092c\u0941\u0915/\u0916\u093e\u0924\u093e \u0930\u0938\u0940\u0926 \u0932\u0947\u0902"
      ]
    },
    "apply": "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx",
    "source": "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
  },
  {
    "id": "atal-pension-yojana",
    "government": "central",
    "category": "pension",
    "name": {
      "en": "Atal Pension Yojana",
      "hi": "\u0905\u091f\u0932 \u092a\u0947\u0902\u0936\u0928 \u092f\u094b\u091c\u0928\u093e"
    },
    "department": {
      "en": "PFRDA / Department of Financial Services",
      "hi": "PFRDA / \u0935\u093f\u0924\u094d\u0924\u0940\u092f \u0938\u0947\u0935\u093e\u090f\u0902 \u0935\u093f\u092d\u093e\u0917"
    },
    "summary": {
      "en": "Pension scheme for workers and citizens seeking a fixed pension after age 60 through regular bank-account contributions.",
      "hi": "\u092c\u0948\u0902\u0915 \u0916\u093e\u0924\u0947 \u0938\u0947 \u0928\u093f\u092f\u092e\u093f\u0924 \u0905\u0902\u0936\u0926\u093e\u0928 \u0915\u0947 \u092e\u093e\u0927\u094d\u092f\u092e \u0938\u0947 60 \u0935\u0930\u094d\u0937 \u0915\u0947 \u092c\u093e\u0926 \u0928\u093f\u0936\u094d\u091a\u093f\u0924 \u092a\u0947\u0902\u0936\u0928 \u0915\u0947 \u0932\u093f\u090f \u092f\u094b\u091c\u0928\u093e."
    },
    "benefit": {
      "en": [
        "Fixed monthly pension after age 60 based on selected contribution slab",
        "Auto-debit contribution through bank account",
        "Nominee and spouse benefits as per APY rules"
      ],
      "hi": [
        "\u091a\u0941\u0928\u0947 \u0917\u090f \u0905\u0902\u0936\u0926\u093e\u0928 \u0938\u094d\u0932\u0948\u092c \u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930 60 \u0935\u0930\u094d\u0937 \u0915\u0947 \u092c\u093e\u0926 \u0928\u093f\u0936\u094d\u091a\u093f\u0924 \u092e\u093e\u0938\u093f\u0915 \u092a\u0947\u0902\u0936\u0928",
        "\u092c\u0948\u0902\u0915 \u0916\u093e\u0924\u0947 \u0938\u0947 \u0911\u091f\u094b-\u0921\u0947\u092c\u093f\u091f \u0905\u0902\u0936\u0926\u093e\u0928",
        "APY \u0928\u093f\u092f\u092e\u094b\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930 \u0928\u0949\u092e\u093f\u0928\u0940 \u0914\u0930 \u092a\u0924\u093f/\u092a\u0924\u094d\u0928\u0940 \u0932\u093e\u092d"
      ]
    },
    "eligibility": {
      "en": [
        "Indian citizen with savings bank account",
        "Entry age generally 18 to 40 years",
        "Income-tax payer restrictions apply as per current APY rules"
      ],
      "hi": [
        "\u092c\u091a\u0924 \u092c\u0948\u0902\u0915 \u0916\u093e\u0924\u0947 \u0935\u093e\u0932\u093e \u092d\u093e\u0930\u0924\u0940\u092f \u0928\u093e\u0917\u0930\u093f\u0915",
        "\u092a\u094d\u0930\u0935\u0947\u0936 \u0906\u092f\u0941 \u0906\u092e \u0924\u094c\u0930 \u092a\u0930 18 \u0938\u0947 40 \u0935\u0930\u094d\u0937",
        "\u0935\u0930\u094d\u0924\u092e\u093e\u0928 APY \u0928\u093f\u092f\u092e\u094b\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930 \u0906\u092f\u0915\u0930 \u0926\u093e\u0924\u093e \u092a\u0930 \u092a\u094d\u0930\u0924\u093f\u092c\u0902\u0927 \u0932\u093e\u0917\u0942"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar",
        "Savings bank account",
        "Mobile number",
        "Nominee details",
        "Spouse details if applicable"
      ],
      "hi": [
        "\u0906\u0927\u093e\u0930",
        "\u092c\u091a\u0924 \u092c\u0948\u0902\u0915 \u0916\u093e\u0924\u093e",
        "\u092e\u094b\u092c\u093e\u0907\u0932 \u0928\u0902\u092c\u0930",
        "\u0928\u0949\u092e\u093f\u0928\u0940 \u0935\u093f\u0935\u0930\u0923",
        "\u0932\u093e\u0917\u0942 \u0939\u094b\u0928\u0947 \u092a\u0930 \u092a\u0924\u093f/\u092a\u0924\u094d\u0928\u0940 \u0935\u093f\u0935\u0930\u0923"
      ]
    },
    "points": {
      "en": [
        "Choose pension amount carefully because monthly contribution depends on age and pension slab",
        "Keep sufficient bank balance for auto-debit",
        "Update nominee and mobile details with bank when needed"
      ],
      "hi": [
        "\u092a\u0947\u0902\u0936\u0928 \u0930\u093e\u0936\u093f \u0938\u094b\u091a-\u0938\u092e\u091d\u0915\u0930 \u091a\u0941\u0928\u0947\u0902 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u092e\u093e\u0938\u093f\u0915 \u0905\u0902\u0936\u0926\u093e\u0928 \u0906\u092f\u0941 \u0914\u0930 \u092a\u0947\u0902\u0936\u0928 \u0938\u094d\u0932\u0948\u092c \u092a\u0930 \u0928\u093f\u0930\u094d\u092d\u0930 \u0939\u0948",
        "\u0911\u091f\u094b-\u0921\u0947\u092c\u093f\u091f \u0915\u0947 \u0932\u093f\u090f \u092c\u0948\u0902\u0915 \u092e\u0947\u0902 \u092a\u0930\u094d\u092f\u093e\u092a\u094d\u0924 \u092c\u0948\u0932\u0947\u0902\u0938 \u0930\u0916\u0947\u0902",
        "\u091c\u0930\u0942\u0930\u0924 \u0939\u094b\u0928\u0947 \u092a\u0930 \u0928\u0949\u092e\u093f\u0928\u0940 \u0914\u0930 \u092e\u094b\u092c\u093e\u0907\u0932 \u0935\u093f\u0935\u0930\u0923 \u092c\u0948\u0902\u0915 \u092e\u0947\u0902 \u0905\u092a\u0921\u0947\u091f \u0915\u0930\u093e\u090f\u0902"
      ]
    },
    "howToApply": {
      "en": [
        "Visit your bank branch, banking app, or APY enrollment channel",
        "Select pension slab, fill nominee/spouse details, and authorize auto-debit",
        "Keep the acknowledgement/PRAN details for future tracking"
      ],
      "hi": [
        "\u0905\u092a\u0928\u0947 \u092c\u0948\u0902\u0915 \u0936\u093e\u0916\u093e, \u092c\u0948\u0902\u0915\u093f\u0902\u0917 \u090f\u092a \u092f\u093e APY \u090f\u0928\u0930\u094b\u0932\u092e\u0947\u0902\u091f \u092e\u093e\u0927\u094d\u092f\u092e \u092a\u0930 \u091c\u093e\u090f\u0902",
        "\u092a\u0947\u0902\u0936\u0928 \u0938\u094d\u0932\u0948\u092c \u091a\u0941\u0928\u0947\u0902, \u0928\u0949\u092e\u093f\u0928\u0940/\u092a\u0924\u093f-\u092a\u0924\u094d\u0928\u0940 \u0935\u093f\u0935\u0930\u0923 \u092d\u0930\u0947\u0902 \u0914\u0930 \u0911\u091f\u094b-\u0921\u0947\u092c\u093f\u091f \u0905\u0927\u093f\u0915\u0943\u0924 \u0915\u0930\u0947\u0902",
        "\u092d\u0935\u093f\u0937\u094d\u092f \u091f\u094d\u0930\u0948\u0915\u093f\u0902\u0917 \u0915\u0947 \u0932\u093f\u090f \u0930\u0938\u0940\u0926/PRAN \u0935\u093f\u0935\u0930\u0923 \u0930\u0916\u0947\u0902"
      ]
    },
    "apply": "https://jansuraksha.gov.in/",
    "source": "https://jansuraksha.gov.in/"
  },
  {
    "id": "jan-dhan-yojana",
    "government": "central",
    "category": "workers",
    "name": {
      "en": "Pradhan Mantri Jan Dhan Yojana",
      "hi": "\u092a\u094d\u0930\u0927\u093e\u0928\u092e\u0902\u0924\u094d\u0930\u0940 \u091c\u0928 \u0927\u0928 \u092f\u094b\u091c\u0928\u093e"
    },
    "department": {
      "en": "Department of Financial Services",
      "hi": "\u0935\u093f\u0924\u094d\u0924\u0940\u092f \u0938\u0947\u0935\u093e\u090f\u0902 \u0935\u093f\u092d\u093e\u0917"
    },
    "summary": {
      "en": "Basic savings bank account programme for financial inclusion, DBT receipt, RuPay card access, and banking services.",
      "hi": "\u0935\u093f\u0924\u094d\u0924\u0940\u092f \u0938\u092e\u093e\u0935\u0947\u0936\u0928, DBT \u092a\u094d\u0930\u093e\u092a\u094d\u0924\u093f, RuPay \u0915\u093e\u0930\u094d\u0921 \u0914\u0930 \u092c\u0948\u0902\u0915\u093f\u0902\u0917 \u0938\u0947\u0935\u093e\u0913\u0902 \u0915\u0947 \u0932\u093f\u090f \u092c\u0947\u0938\u093f\u0915 \u092c\u091a\u0924 \u092c\u0948\u0902\u0915 \u0916\u093e\u0924\u093e \u0915\u093e\u0930\u094d\u092f\u0915\u094d\u0930\u092e."
    },
    "benefit": {
      "en": [
        "Zero-balance basic savings bank account",
        "Direct benefit transfer support for government schemes",
        "RuPay debit card and overdraft/insurance features subject to rules"
      ],
      "hi": [
        "\u0936\u0942\u0928\u094d\u092f-\u092c\u0948\u0932\u0947\u0902\u0938 \u092c\u0947\u0938\u093f\u0915 \u092c\u091a\u0924 \u092c\u0948\u0902\u0915 \u0916\u093e\u0924\u093e",
        "\u0938\u0930\u0915\u093e\u0930\u0940 \u092f\u094b\u091c\u0928\u093e\u0913\u0902 \u0915\u0947 \u0932\u093f\u090f DBT \u0938\u0939\u093e\u092f\u0924\u093e",
        "\u0928\u093f\u092f\u092e\u094b\u0902 \u0915\u0947 \u0905\u0927\u0940\u0928 RuPay \u0921\u0947\u092c\u093f\u091f \u0915\u093e\u0930\u094d\u0921 \u0914\u0930 \u0913\u0935\u0930\u0921\u094d\u0930\u093e\u092b\u094d\u091f/\u092c\u0940\u092e\u093e \u0938\u0941\u0935\u093f\u0927\u093e"
      ]
    },
    "eligibility": {
      "en": [
        "Indian citizen without a basic bank account, or eligible person needing financial inclusion banking",
        "Minors can be covered as per bank rules",
        "KYC or simplified KYC conditions apply"
      ],
      "hi": [
        "\u092c\u0947\u0938\u093f\u0915 \u092c\u0948\u0902\u0915 \u0916\u093e\u0924\u0947 \u0915\u0947 \u092c\u093f\u0928\u093e \u092d\u093e\u0930\u0924\u0940\u092f \u0928\u093e\u0917\u0930\u093f\u0915 \u092f\u093e \u0935\u093f\u0924\u094d\u0924\u0940\u092f \u0938\u092e\u093e\u0935\u0947\u0936\u0928 \u092c\u0948\u0902\u0915\u093f\u0902\u0917 \u0915\u0940 \u091c\u0930\u0942\u0930\u0924 \u0935\u093e\u0932\u093e \u092a\u093e\u0924\u094d\u0930 \u0935\u094d\u092f\u0915\u094d\u0924\u093f",
        "\u092c\u0948\u0902\u0915 \u0928\u093f\u092f\u092e\u094b\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930 \u0928\u093e\u092c\u093e\u0932\u093f\u0917 \u092d\u0940 \u0936\u093e\u092e\u093f\u0932 \u0939\u094b \u0938\u0915\u0924\u0947 \u0939\u0948\u0902",
        "KYC \u092f\u093e \u0938\u0930\u0932 KYC \u0936\u0930\u094d\u0924\u0947\u0902 \u0932\u093e\u0917\u0942"
      ]
    },
    "documents": {
      "en": [
        "Aadhaar or other officially valid KYC document",
        "Mobile number",
        "Photograph",
        "Address details",
        "Guardian details for minor account"
      ],
      "hi": [
        "\u0906\u0927\u093e\u0930 \u092f\u093e \u0905\u0928\u094d\u092f \u0906\u0927\u093f\u0915\u093e\u0930\u093f\u0915 \u0935\u0948\u0927 KYC \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c",
        "\u092e\u094b\u092c\u093e\u0907\u0932 \u0928\u0902\u092c\u0930",
        "\u092b\u094b\u091f\u094b",
        "\u092a\u0924\u093e \u0935\u093f\u0935\u0930\u0923",
        "\u0928\u093e\u092c\u093e\u0932\u093f\u0917 \u0916\u093e\u0924\u0947 \u0915\u0947 \u0932\u093f\u090f \u0905\u092d\u093f\u092d\u093e\u0935\u0915 \u0935\u093f\u0935\u0930\u0923"
      ]
    },
    "points": {
      "en": [
        "A Jan Dhan account is often useful for DBT benefits from multiple schemes",
        "Keep Aadhaar seeding and mobile number updated",
        "Insurance and overdraft features have activation and usage conditions"
      ],
      "hi": [
        "Jan Dhan \u0916\u093e\u0924\u093e \u0915\u0908 \u092f\u094b\u091c\u0928\u093e\u0913\u0902 \u0915\u0947 DBT \u0932\u093e\u092d \u0915\u0947 \u0932\u093f\u090f \u0909\u092a\u092f\u094b\u0917\u0940 \u0939\u094b\u0924\u093e \u0939\u0948",
        "\u0906\u0927\u093e\u0930 \u0938\u0940\u0921\u093f\u0902\u0917 \u0914\u0930 \u092e\u094b\u092c\u093e\u0907\u0932 \u0928\u0902\u092c\u0930 \u0905\u092a\u0921\u0947\u091f \u0930\u0916\u0947\u0902",
        "\u092c\u0940\u092e\u093e \u0914\u0930 \u0913\u0935\u0930\u0921\u094d\u0930\u093e\u092b\u094d\u091f \u0938\u0941\u0935\u093f\u0927\u093e\u0913\u0902 \u0915\u0947 \u0932\u093f\u090f \u0938\u0915\u094d\u0930\u093f\u092f\u0924\u093e \u0914\u0930 \u0909\u092a\u092f\u094b\u0917 \u0936\u0930\u094d\u0924\u0947\u0902 \u0939\u094b\u0924\u0940 \u0939\u0948\u0902"
      ]
    },
    "howToApply": {
      "en": [
        "Visit any bank branch or Bank Mitra/Business Correspondent point",
        "Submit account opening form and KYC document",
        "Collect account details, RuPay card instructions, and activate mobile alerts if available"
      ],
      "hi": [
        "\u0915\u093f\u0938\u0940 \u092d\u0940 \u092c\u0948\u0902\u0915 \u0936\u093e\u0916\u093e \u092f\u093e Bank Mitra/Business Correspondent \u0915\u0947\u0902\u0926\u094d\u0930 \u092a\u0930 \u091c\u093e\u090f\u0902",
        "\u0916\u093e\u0924\u093e \u0916\u094b\u0932\u0928\u0947 \u0915\u093e \u092b\u0949\u0930\u094d\u092e \u0914\u0930 KYC \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c \u091c\u092e\u093e \u0915\u0930\u0947\u0902",
        "\u0916\u093e\u0924\u093e \u0935\u093f\u0935\u0930\u0923, RuPay \u0915\u093e\u0930\u094d\u0921 \u0928\u093f\u0930\u094d\u0926\u0947\u0936 \u0932\u0947\u0902 \u0914\u0930 \u0909\u092a\u0932\u092c\u094d\u0927 \u0939\u094b \u0924\u094b \u092e\u094b\u092c\u093e\u0907\u0932 \u0905\u0932\u0930\u094d\u091f \u0938\u0915\u094d\u0930\u093f\u092f \u0915\u0930\u0947\u0902"
      ]
    },
    "apply": "https://pmjdy.gov.in/",
    "source": "https://pmjdy.gov.in/"
  }
];
