export const QUIZ_QUESTIONS = [
  // L01 Questions
  {
    id: "q1_1",
    lectureId: "L01",
    question: {
      en: "The Internet is the same as WWW.",
      ms: "Internet adalah sama dengan WWW."
    },
    options: {
      en: ["True", "False"],
      ms: ["Benar", "Palsu"]
    },
    correctIndex: 1,
    explanation: {
      en: "False! The WWW is 'just one application of the Internet'. The Internet is the global physical network infrastructure, whereas WWW is the web of linked documents transmitted via HTTP.",
      ms: "Palsu! WWW hanyalah 'satu aplikasi di atas Internet'. Internet ialah infrastruktur rangkaian fizikal global, manakala WWW ialah rangkaian dokumen berpautan yang dihantar melalui HTTP."
    },
    isCurated20: true
  },
  {
    id: "q1_2",
    lectureId: "L01",
    question: {
      en: "HTTP stands for",
      ms: "HTTP bermaksud"
    },
    options: {
      en: ["Hypertext Transmission Protocol", "Hypertext Transfer Protocol", "Hypertext Trading Protocol"],
      ms: ["Protokol Penghantaran Hiperteks", "Protokol Pemindahan Hiperteks (Hypertext Transfer Protocol)", "Protokol Perdagangan Hiperteks"]
    },
    correctIndex: 1,
    explanation: {
      en: "HTTP stands for Hypertext Transfer Protocol, the fundamental protocol used to transmit web pages across the WWW.",
      ms: "HTTP bermaksud Hypertext Transfer Protocol, iaitu protokol asas yang digunakan untuk menghantar laman web merentasi WWW."
    },
    isCurated20: true
  },
  {
    id: "q1_3",
    lectureId: "L01",
    question: {
      en: "AltaVista's search engine ranking was primarily based on",
      ms: "Peringkat enjin carian AltaVista pada utamanya berasaskan"
    },
    options: {
      en: ["Keyword frequencies", "Inlinks and outlinks", "Human-curated directories"],
      ms: ["Frekuensi kata kunci", "Pautan masuk dan keluar", "Direktori dikelola manusia"]
    },
    correctIndex: 0,
    explanation: {
      en: "AltaVista relied heavily on keyword frequencies on web pages, which spammers eventually manipulated by stuffing keywords.",
      ms: "AltaVista bergantung kepada frekuensi kata kunci pada laman web, yang akhirnya disalah guna oleh penggodam dengan membanjiri kata kunci."
    },
    isCurated20: false
  },
  {
    id: "q1_4",
    lectureId: "L01",
    question: {
      en: "Yahoo's early search platform relied primarily on",
      ms: "Platform carian awal Yahoo bergantung terutamanya kepada"
    },
    options: {
      en: ["Keyword frequencies", "Inlinks and outlinks", "Human-curated directories"],
      ms: ["Frekuensi kata kunci", "Pautan masuk dan keluar", "Direktori dikelola manusia"]
    },
    correctIndex: 2,
    explanation: {
      en: "Yahoo initially organized the web using human editors who manually vetted and categorized websites into structured directories.",
      ms: "Yahoo pada awalnya menyusun web menggunakan editor manusia yang menyemak dan mengkategori laman web secara manual."
    },
    isCurated20: false
  },
  {
    id: "q1_5",
    lectureId: "L01",
    question: {
      en: "Google's search engine algorithm is famously based on",
      ms: "Algoritma enjin carian Google terkenal berasaskan"
    },
    options: {
      en: ["Keyword frequencies", "Inlinks and outlinks (PageRank)", "Directories"],
      ms: ["Frekuensi kata kunci", "Pautan masuk dan keluar (PageRank)", "Direktori"]
    },
    correctIndex: 1,
    explanation: {
      en: "Google revolutionized web discovery by analyzing the network graph of inlinks and outlinks between web pages.",
      ms: "Google merevolusikan penemuan web dengan menganalisis graf rangkaian pautan masuk dan keluar antara laman web."
    },
    isCurated20: false
  },
  {
    id: "q1_6",
    lectureId: "L01",
    question: {
      en: "Natural Language Processing (NLP) was originally used by which search engine?",
      ms: "Pemprosesan Bahasa Semulajadi (NLP) pada asalnya digunakan oleh enjin carian mana?"
    },
    options: {
      en: ["Google", "Lycos", "Ask Jeeves"],
      ms: ["Google", "Lycos", "Ask Jeeves"]
    },
    correctIndex: 2,
    explanation: {
      en: "Ask Jeeves invited users to type plain natural language questions rather than keyword strings back in the 1990s.",
      ms: "Ask Jeeves menjemput pengguna menaip soalan bahasa semulajadi dan bukan sekadar kata kunci pada tahun 1990-an."
    },
    isCurated20: true
  },
  {
    id: "q1_7",
    lectureId: "L01",
    question: {
      en: "Which of the following AI platforms originated from China?",
      ms: "Manakah antara platform AI berikut berasal dari China?"
    },
    options: {
      en: ["Sina Weibo", "Ren-ren", "Deepseek"],
      ms: ["Sina Weibo", "Ren-ren", "Deepseek"]
    },
    correctIndex: 2,
    explanation: {
      en: "Deepseek is an AI model developed in China. Sina Weibo and Renren are social networking services.",
      ms: "Deepseek ialah model AI yang dibangunkan di China. Sina Weibo dan Renren ialah perkhidmatan rangkaian sosial."
    },
    isCurated20: true
  },
  {
    id: "q1_8",
    lectureId: "L01",
    question: {
      en: "Which AI platform is primarily specialized for image generation only?",
      ms: "Platform AI manakah yang khusus terutamanya untuk janaan imej sahaja?"
    },
    options: {
      en: ["ChatGPT", "Midjourney", "Gemini"],
      ms: ["ChatGPT", "Midjourney", "Gemini"]
    },
    correctIndex: 1,
    explanation: {
      en: "Midjourney is an AI image generation model, whereas ChatGPT and Gemini are multimodal/LLM platforms.",
      ms: "Midjourney ialah model janaan imej AI, manakala ChatGPT dan Gemini ialah platform LLM/pelbagai modal."
    },
    isCurated20: false
  },
  {
    id: "q1_9",
    lectureId: "L01",
    question: {
      en: "Which of the following characteristics does NOT describe Web 2.0?",
      ms: "Manakah antara ciri berikut TIDAK menggambarkan Web 2.0?"
    },
    options: {
      en: ["Read-only", "Dynamic", "Mass amateurization"],
      ms: ["Baca-sahaja (Read-only)", "Dinamik", "Amaturisasi massa"]
    },
    correctIndex: 0,
    explanation: {
      en: "'Read-only' was the defining trait of Web 1.0. Web 2.0 is characterized by write-and-contribute user interaction.",
      ms: "'Baca-sahaja' ialah ciri Web 1.0. Web 2.0 dicirikan oleh interaksi sumbangan dan penulisan pengguna."
    },
    isCurated20: false
  },
  {
    id: "q1_10",
    lectureId: "L01",
    question: {
      en: "The Internet of Things (IoT) can be driven by",
      ms: "Internet Benda (IoT) boleh dipacu oleh"
    },
    options: {
      en: ["Simplistic Web", "Semantic Web", "Syntactic Web"],
      ms: ["Web Mudah", "Web Semantik", "Web Sintaktik"]
    },
    correctIndex: 1,
    explanation: {
      en: "The Semantic Web (Web 3.0) provides machine-readable data sharing that powers intelligent IoT device communication.",
      ms: "Web Semantik (Web 3.0) menyediakan perkongsian data janaan mesin yang memacu komunikasi peranti IoT."
    },
    isCurated20: false
  },

  // L02 Questions
  {
    id: "q2_1",
    lectureId: "L02",
    question: {
      en: "When was the term 'weblog' (blog) coined?",
      ms: "Bilakah istilah 'weblog' (blog) dicipta?"
    },
    options: {
      en: ["1980s", "1990s", "2000s"],
      ms: ["Dekad 1980-an", "Dekad 1990-an", "Dekad 2000-an"]
    },
    correctIndex: 1,
    explanation: {
      en: "The term was coined by Peter Merholz in 1999 during the late 1990s digital publishing emergence.",
      ms: "Istilah ini dicipta oleh Peter Merholz pada tahun 1999 semasa kebangkitan penerbitan digital 1990-an."
    },
    isCurated20: true
  },
  {
    id: "q2_2",
    lectureId: "L02",
    question: {
      en: "What is another name for the printing press mentioned in lectures?",
      ms: "Apakah nama lain bagi mesin cetak yang disebut dalam syarahan?"
    },
    options: {
      en: ["Guttenberg Machine", "Gothenburg Machine", "Gotham Machine"],
      ms: ["Mesin Guttenberg", "Mesin Gothenburg", "Mesin Gotham"]
    },
    correctIndex: 0,
    explanation: {
      en: "Named after Johannes Gutenberg, who invented the movable type printing press in Europe.",
      ms: "Dinamakan sempena Johannes Gutenberg, yang mencipta mesin cetak jenis bergerak di Eropah."
    },
    isCurated20: true
  },
  {
    id: "q2_3",
    lectureId: "L02",
    question: {
      en: "Which feature is NOT TRUE for traditional websites?",
      ms: "Ciri manakah TIDAK BENAR bagi laman web tradisional?"
    },
    options: {
      en: ["Limited free hosting", "Harder to create", "Chronological order"],
      ms: ["Penhosan percuma terhad", "Sukar dicipta", "Susunan mengikut urutan masa (Chronological)"]
    },
    correctIndex: 2,
    explanation: {
      en: "Traditional websites have no fixed timestamp order. Reverse-chronological post feeds are a key defining feature of blogs.",
      ms: "Laman web tradisional tiada susunan cap masa. Susunan mengikut urutan masa terbalik ialah ciri utama blog."
    },
    isCurated20: false
  },
  {
    id: "q2_4",
    lectureId: "L02",
    question: {
      en: "When sharing a specific post, which element do you use?",
      ms: "Apabila berkongsi hantaran spesifik, elemen manakah yang anda guna?"
    },
    options: {
      en: ["Inlink", "Outlink", "Permalink"],
      ms: ["Pautan Masuk (Inlink)", "Pautan Keluar (Outlink)", "Pautan Kekal (Permalink)"]
    },
    correctIndex: 2,
    explanation: {
      en: "A permalink is a permanent static URL link intended to point to a specific blog post indefinitely.",
      ms: "Pautan kekal (permalink) ialah URL statik yang bertujuan merujuk kepada hantaran blog spesifik."
    },
    isCurated20: false
  },
  {
    id: "q2_5",
    lectureId: "L02",
    question: {
      en: "// on Weibo means it is a",
      ms: "// di Weibo bermaksud ia adalah"
    },
    options: {
      en: ["Retweet", "Reply", "Direct Message"],
      ms: ["Retweet / Hantar Semula", "Balasan", "Mesej Langsung (DM)"]
    },
    correctIndex: 0,
    explanation: {
      en: "The '//' syntax on Weibo is used to forward or re-share a post with added user comments.",
      ms: "Simbol '//' di Weibo digunakan untuk menghantar semula hantaran bersama ulasan pengguna."
    },
    isCurated20: false
  },
  {
    id: "q2_6",
    lectureId: "L02",
    question: {
      en: "Which feature is TRUE for self-hosted blogs?",
      ms: "Ciri manakah BENAR bagi blog self-hosted?"
    },
    options: {
      en: ["Easy to create", "Easy to customize", "Freely available without hosting costs"],
      ms: ["Mudah dicipta", "Mudah diubah suai (Easy to customize)", "Bebas didapati tanpa kos penhosan"]
    },
    correctIndex: 1,
    explanation: {
      en: "Self-hosted blogs grant full access to code, themes, and database structure, making them highly customizable.",
      ms: "Blog self-hosted memberi akses penuh kepada kod, tema, dan pangkalan data, menjadikannya sangat mudah diubah suai."
    },
    isCurated20: false
  },

  // L04 & L05 Questions
  {
    id: "q4_1",
    lectureId: "L04",
    question: {
      en: "Instagram's distinctive photo format prior to August 2015 was:",
      ms: "Format foto tersendiri Instagram sebelum Ogos 2015 ialah:"
    },
    options: {
      en: ["Rectangle-shaped", "Round-shaped", "Square-shaped", "Triangle-shaped"],
      ms: ["Bentuk Segi Empat Tepat", "Bentuk Bulat", "Bentuk Segi Empat Sama (Square)", "Bentuk Segi Tiga"]
    },
    correctIndex: 2,
    explanation: {
      en: "Instagram originally enforced a strict 1:1 square aspect ratio for all photo posts before opening landscape/portrait uploads.",
      ms: "Instagram pada asalnya menetapkan nisbah segi empat sama 1:1 untuk semua muat naik foto."
    },
    isCurated20: true
  },
  {
    id: "q4_2",
    lectureId: "L04",
    question: {
      en: "Facebook can make money from any pic you post.",
      ms: "Facebook boleh menjana wang daripada mana-mana foto yang anda muat naik."
    },
    options: {
      en: ["True", "False"],
      ms: ["Benar", "Palsu"]
    },
    correctIndex: 0,
    explanation: {
      en: "True. You retain legal copyright ownership, but platform ToS grant Facebook a royalty-free, transferable, sub-licensable global license.",
      ms: "Benar. Anda memegang hak cipta, tetapi terma perkhidmatan Facebook memberi mereka lesen bebas royalti untuk memindahkan dan melesenkan semula foto anda."
    },
    isCurated20: true
  },
  {
    id: "q5_1",
    lectureId: "L05",
    question: {
      en: "These are examples of content networks EXCEPT",
      ms: "Berikut adalah contoh rangkaian kandungan KECUALI"
    },
    options: {
      en: ["Astro", "Wikipedia", "Malay Mail", "IIUM Confessions"],
      ms: ["Astro", "Wikipedia", "Malay Mail", "IIUM Confessions"]
    },
    correctIndex: 1,
    explanation: {
      en: "Wikipedia is an open User-Generated Content (UGC) system built by community contributions, not a closed editorial Content Network.",
      ms: "Wikipedia ialah sistem Kandungan Janaan Pengguna (UGC) terbuka berasaskan sumbangan komuniti."
    },
    isCurated20: true
  },
  {
    id: "q5_2",
    lectureId: "L05",
    question: {
      en: "Facebook Stars is an example of monetization using",
      ms: "Facebook Stars ialah contoh penjanaan pendapatan menggunakan"
    },
    options: {
      en: ["Advertising", "Micro-donations", "Subscriptions", "Endorsements"],
      ms: ["Pengiklanan", "Derma Mikro (Micro-donations)", "Langganan", "Pengesahan/Endorsement"]
    },
    correctIndex: 1,
    explanation: {
      en: "Facebook Stars are digital items purchased by viewers to send small tips or financial cheers to live streamers.",
      ms: "Facebook Stars ialah barangan digital yang dibeli penonton untuk memberi tip kepada penstrim langsung."
    },
    isCurated20: true
  },

  // L06 Questions
  {
    id: "q6_1",
    lectureId: "L06",
    question: {
      en: "These are types of portfolios EXCEPT",
      ms: "Berikut adalah jenis-jenis portfolio KECUALI"
    },
    options: {
      en: ["Showcase", "Assessment", "Developmental", "Interpersonal"],
      ms: ["Showcase", "Penilaian (Assessment)", "Pembangunan (Developmental)", "Interpersonal"]
    },
    correctIndex: 3,
    explanation: {
      en: "The four main e-portfolio types are Showcase, Assessment, Developmental, and Integrated portfolios.",
      ms: "Empat jenis utama e-portfolio ialah Showcase, Penilaian, Pembangunan, dan Bersepadu."
    },
    isCurated20: true
  },
  {
    id: "q6_2",
    lectureId: "L06",
    question: {
      en: "Paper portfolios have these attributes EXCEPT",
      ms: "Portfolio kertas mempunyai ciri-ciri berikut KECUALI"
    },
    options: {
      en: ["Solar model", "Distributed to target audience", "Can have redundant copies", "Copies may be outdated"],
      ms: ["Model Solar", "Diedarkan kepada khalayak sasaran", "Boleh mempunyai salinan bertindih", "Salinan mungkin lapuk"]
    },
    correctIndex: 0,
    explanation: {
      en: "Paper portfolios use a 'Satellite' model. The 'Solar' model (centralized access hub) is exclusive to digital e-Portfolios.",
      ms: "Portfolio kertas menggunakan Model Satelit. Model Solar (pusat akses utama) adalah khas untuk e-Portfolio digital."
    },
    isCurated20: false
  },
  {
    id: "q6_3",
    lectureId: "L06",
    question: {
      en: "Which VLE platform does Imperial College London use?",
      ms: "Platform VLE manakah yang digunakan oleh Imperial College London?"
    },
    options: {
      en: ["Pebblepad", "Europass", "Moodle", "Facebook"],
      ms: ["Pebblepad", "Europass", "Moodle", "Facebook"]
    },
    correctIndex: 0,
    explanation: {
      en: "Imperial College London utilizes Pebblepad for student e-portfolio creation and assessment.",
      ms: "Imperial College London menggunakan Pebblepad untuk pembangunan e-portfolio pelajar."
    },
    isCurated20: true
  },
  {
    id: "q6_4",
    lectureId: "L06",
    question: {
      en: "Which docs are NOT part of the Europass framework?",
      ms: "Dokumen manakah BUKAN sebahagian daripada rangka kerja Europass?"
    },
    options: {
      en: ["CV", "Language passport", "Mobility", "Food supplements"],
      ms: ["CV", "Pasport Bahasa", "Mobiliti", "Suplemen Makanan (Food supplements)"]
    },
    correctIndex: 3,
    explanation: {
      en: "Europass includes CV, Language Passport, Certificate Supplements, Mobility, and Diploma Supplements.",
      ms: "Europass merangkumi CV, Pasport Bahasa, Suplemen Sijil, Mobiliti, dan Suplemen Diploma."
    },
    isCurated20: false
  },
  {
    id: "q6_5",
    lectureId: "L06",
    question: {
      en: "Programmers can show their work using",
      ms: "Pengaturcara boleh menunjuk karya mereka menggunakan"
    },
    options: {
      en: ["GitHub", "LinkedIn", "Instagram", "YouTube"],
      ms: ["GitHub", "LinkedIn", "Instagram", "YouTube"]
    },
    correctIndex: 0,
    explanation: {
      en: "GitHub is the primary social coding and repository platform used by developers to demonstrate portfolio code.",
      ms: "GitHub ialah platform pengaturcaraan sosial utama yang digunakan pembangun untuk menunjuk kod portfolio."
    },
    isCurated20: false
  },

  // L07 Questions
  {
    id: "q7_1",
    lectureId: "L07",
    question: {
      en: "These are examples of ODS services EXCEPT",
      ms: "Berikut adalah contoh perkhidmatan ODS KECUALI"
    },
    options: {
      en: ["Google Drive", "eCloud", "Dropbox", "OneDrive"],
      ms: ["Google Drive", "eCloud", "Dropbox", "OneDrive"]
    },
    correctIndex: 1,
    explanation: {
      en: "'eCloud' is not a recognized major ODS platform. Major ODS providers include Google Drive, Dropbox, OneDrive, and iCloud.",
      ms: "'eCloud' bukan platform ODS utama. Penyedia ODS utama merangkumi Google Drive, Dropbox, OneDrive, dan iCloud."
    },
    isCurated20: true
  },
  {
    id: "q7_2",
    lectureId: "L07",
    question: {
      en: "Dropbox and Netflix used to rely on which ODS infra?",
      ms: "Dropbox dan Netflix pernah bergantung kepada infrastruktur ODS manakah?"
    },
    options: {
      en: ["Google Cloud", "Amazon Web Service (AWS)", "Microsoft Azure", "SDEC"],
      ms: ["Google Cloud", "Amazon Web Service (AWS)", "Microsoft Azure", "SDEC"]
    },
    correctIndex: 1,
    explanation: {
      en: "Both Netflix and Dropbox scaled their early cloud infrastructure on Amazon Web Services (AWS).",
      ms: "Kedua-dua Netflix dan Dropbox membangunkan infrastruktur awan awal mereka di Amazon Web Services (AWS)."
    },
    isCurated20: true
  },
  {
    id: "q7_3",
    lectureId: "L07",
    question: {
      en: "Most people are willing to pay for online content.",
      ms: "Kebanyakan orang bersedia membayar untuk kandungan atas talian."
    },
    options: {
      en: ["True", "False"],
      ms: ["Benar", "Palsu"]
    },
    correctIndex: 1,
    explanation: {
      en: "False. The vast majority of internet users expect online content to be free, posing monetization challenges.",
      ms: "Palsu. Majoriti pengguna internet menganggap kandungan atas talian patut percuma."
    },
    isCurated20: true
  },
  {
    id: "q7_4",
    lectureId: "L07",
    question: {
      en: "Which threat to permanence involves outdated technology?",
      ms: "Ancaman kekekalan manakah yang melibatkan teknologi lapuk?"
    },
    options: {
      en: ["Corruption", "Findability", "Application Obsolescence", "Completeness"],
      ms: ["Kerosakan Bit", "Kebolehbandingan", "Keusangan Aplikasi (Application Obsolescence)", "Kesempurnaan"]
    },
    correctIndex: 2,
    explanation: {
      en: "Application Obsolescence happens when software updates or discontinued formats make legacy files unreadable.",
      ms: "Keusangan Aplikasi berlaku apabila kemas kini perisian atau format lama tidak lagi boleh dibuka."
    },
    isCurated20: false
  },
  {
    id: "q7_5",
    lectureId: "L07",
    question: {
      en: "Which threat to permanence involves broken metadata?",
      ms: "Ancaman kekekalan manakah yang melibatkan metadata rosak?"
    },
    options: {
      en: ["Corruption", "Findability", "Application Obsolescence", "Completeness"],
      ms: ["Kerosakan Bit", "Kebolehbandingan", "Keusangan Aplikasi", "Kesempurnaan (Completeness)"]
    },
    correctIndex: 3,
    explanation: {
      en: "Completeness requires metadata context (creation history, author, manifest) to keep files meaningful.",
      ms: "Kesempurnaan memerlukan konteks metadata (sejarah penulisan, manifes) untuk memastikan fail kekal difahami."
    },
    isCurated20: false
  },
  {
    id: "q7_6",
    lectureId: "L07",
    question: {
      en: "Which threat to permanence involves dead bits?",
      ms: "Ancaman kekekalan manakah yang melibatkan bit mati?"
    },
    options: {
      en: ["Corruption", "Findability", "Application Obsolescence", "Completeness"],
      ms: ["Kerosakan Bit (Corruption)", "Kebolehbandingan", "Keusangan Aplikasi", "Kesempurnaan"]
    },
    correctIndex: 0,
    explanation: {
      en: "Corruption occurs at the binary bit level. A single flipped or corrupt bit can render an entire file unusable.",
      ms: "Kerosakan berlaku di tahap bit binarie. Bit rosak tunggal boleh memusnahkan keseluruhan rekod fail."
    },
    isCurated20: false
  },
  {
    id: "q7_7",
    lectureId: "L07",
    question: {
      en: "Which threat to permanence involves unclear filenames?",
      ms: "Ancaman kekekalan manakah yang melibatkan nama fail tidak jelas?"
    },
    options: {
      en: ["Corruption", "Findability", "Application Obsolescence", "Completeness"],
      ms: ["Kerosakan Bit", "Kebolehbandingan (Findability)", "Keusangan Aplikasi", "Kesempurnaan"]
    },
    correctIndex: 1,
    explanation: {
      en: "Findability requires consistent file-naming customs and metadata tags so stored items can actually be searched and retrieved.",
      ms: "Kebolehbandingan memerlukan kaedah penamaan fail teratur supaya item boleh dicari semula."
    },
    isCurated20: false
  },

  // L08 Questions
  {
    id: "q8_1",
    lectureId: "L08",
    question: {
      en: "Social bookmarking is also known as",
      ms: "Penanda buku sosial juga dikenali sebagai"
    },
    options: {
      en: ["Taxonomy", "Folksonomy", "Economy", "Astronomy"],
      ms: ["Taksonomi", "Folksonomi (Folksonomy)", "Ekonomi", "Astronomi"]
    },
    correctIndex: 1,
    explanation: {
      en: "Folksonomy (Folks + Taxonomy) refers to collaborative categorization of web content using open social tags.",
      ms: "Folksonomi (Folks + Taksonomi) merujuk kepada pengkategorian penanda buku secara kolaboratif menggunakan kata tag."
    },
    isCurated20: true
  },

  // L09 Questions
  {
    id: "q9_1",
    lectureId: "L09",
    question: {
      en: "AI stands for?",
      ms: "AI bermaksud?"
    },
    options: {
      en: ["Automated Interface", "Artificial Intelligence", "Audio Integration", "Advanced Interaction"],
      ms: ["Antara Muka Automatik", "Kecerdasan Buatan (Artificial Intelligence)", "Integrasi Audio", "Interaksi Lanjutan"]
    },
    correctIndex: 1,
    explanation: {
      en: "AI stands for Artificial Intelligence.",
      ms: "AI bermaksud Artificial Intelligence (Kecerdasan Buatan)."
    },
    isCurated20: true
  },
  {
    id: "q9_2",
    lectureId: "L09",
    question: {
      en: "Which AI tool can clone voices?",
      ms: "Alat AI manakah yang boleh mengklon suara?"
    },
    options: {
      en: ["Audacity", "ElevenLabs", "GarageBand", "YouTube"],
      ms: ["Audacity", "ElevenLabs", "GarageBand", "YouTube"]
    },
    correctIndex: 1,
    explanation: {
      en: "ElevenLabs (elevenlabs.io) is a generative AI engine specialized for voice cloning and high-fidelity text-to-speech.",
      ms: "ElevenLabs (elevenlabs.io) ialah enjin AI khusus untuk klon suara dan pertuturan tinggi."
    },
    isCurated20: true
  },
  {
    id: "q9_3",
    lectureId: "L09",
    question: {
      en: "Which is NOT an AI tool constraint?",
      ms: "Manakah BUKAN kekangan alat AI?"
    },
    options: {
      en: ["Engines", "Quota", "Speed", "Creativity"],
      ms: ["Enjin", "Kuota", "Kelajuan", "Kreativiti (Creativity)"]
    },
    correctIndex: 3,
    explanation: {
      en: "Generative AI technical constraints include engines, capacity quotas, queue times, guardrails, and upscaling resolution. Human creativity is not an engine constraint.",
      ms: "Kekangan AI janaan merangkumi enjin, kuota, giliran, penapis, dan resolusi. Kreativiti bukan kekangan enjin."
    },
    isCurated20: false
  },
  {
    id: "q9_4",
    lectureId: "L09",
    question: {
      en: "What is a major ethical concern regarding AI?",
      ms: "Apakah isu etika utama berkaitan AI?"
    },
    options: {
      en: ["Speed of AI", "Deepfakes", "Cost of tools", "Design layouts"],
      ms: ["Kelajuan AI", "Deepfake (Deepfakes)", "Kos alat", "Susun atur reka bentuk"]
    },
    correctIndex: 1,
    explanation: {
      en: "Deepfakes enable impersonation, political manipulation, and massive financial fraud.",
      ms: "Deepfake membolehkan penyamaran, manipulasi politik, dan penipuan kewangan."
    },
    isCurated20: false
  },
  {
    id: "q9_5",
    lectureId: "L09",
    question: {
      en: "AI _____ human creativity.",
      ms: "AI _____ kreativiti manusia."
    },
    options: {
      en: ["compliments", "replaces", "destroys", "complements"],
      ms: ["memuji", "menggantikan", "memusnahkan", "melengkapi (complements)"]
    },
    correctIndex: 3,
    explanation: {
      en: "AI complements human creativity by serving as an expressive tool rather than replacing human experience.",
      ms: "AI melengkapi kreativiti manusia sebagai alat sokongan dan bukannya menggantikan manusia."
    },
    isCurated20: false
  },

  // L10 Questions
  {
    id: "q10_1",
    lectureId: "L10",
    question: {
      en: "Semantic Web refers to",
      ms: "Web Semantik merujuk kepada"
    },
    options: {
      en: ["Web 1.0", "Web 2.0", "Web 3.0", "Web 4.0"],
      ms: ["Web 1.0", "Web 2.0", "Web 3.0", "Web 4.0"]
    },
    correctIndex: 2,
    explanation: {
      en: "Web 3.0, defined by Sir Tim Berners-Lee in 2006, is synonymous with the Semantic Web and machine-readable Linked Data.",
      ms: "Web 3.0, yang didefinisikan oleh Sir Tim Berners-Lee pada 2006, adalah sinonim dengan Web Semantik."
    },
    isCurated20: true
  },
  {
    id: "q10_2",
    lectureId: "L10",
    question: {
      en: "Technology emerges when problems grow from",
      ms: "Teknologi muncul apabila masalah berkembang daripada"
    },
    options: {
      en: ["macro to micro", "micro to macro", "issues to ideas", "ideas to design"],
      ms: ["makro ke mikro", "mikro ke makro (micro to macro)", "isu ke idea", "idea ke rekaan"]
    },
    correctIndex: 1,
    explanation: {
      en: "The tech emergence cycle explicitly moves from micro-level problem observations to macro-environmental social impact.",
      ms: "Kitaran kebangkitan teknologi bergerak daripada pengamatan mikro kepada impak sosial makro."
    },
    isCurated20: true
  },
  {
    id: "q10_3",
    lectureId: "L10",
    question: {
      en: "These are concepts of Web 3.0 EXCEPT",
      ms: "Berikut adalah konsep Web 3.0 KECUALI"
    },
    options: {
      en: ["Semantic Web", "Linked Data", "Internet of Things", "Human-readable data sharing"],
      ms: ["Web Semantik", "Data Berpautan", "Internet Benda", "Perkongsian data bacaan manusia sahaja"]
    },
    correctIndex: 3,
    explanation: {
      en: "Web 3.0 focuses on machine-readable data sharing so computers can independently process content.",
      ms: "Web 3.0 menumpukan perkongsian data janaan mesin dan bukan bacaan manusia sahaja."
    },
    isCurated20: false
  },
  {
    id: "q10_4",
    lectureId: "L10",
    question: {
      en: "These are examples of IoT software/hardware EXCEPT",
      ms: "Berikut adalah contoh perisian/peranti IoT KECUALI"
    },
    options: {
      en: ["Amazon Alexa", "Raspberry Pi", "Armadillo", "Google Home"],
      ms: ["Amazon Alexa", "Raspberry Pi", "Armadillo", "Google Home"]
    },
    correctIndex: 2,
    explanation: {
      en: "Alexa, Google Home, and Raspberry Pi are standard IoT examples. 'Armadillo' is not.",
      ms: "Alexa, Google Home, dan Raspberry Pi ialah contoh biasa IoT. 'Armadillo' bukan."
    },
    isCurated20: false
  },
  {
    id: "q10_5",
    lectureId: "L10",
    question: {
      en: "Gig economy is mainly driven by",
      ms: "Ekonomi gig didorong utamanya oleh"
    },
    options: {
      en: ["Freelancers", "Singers", "Bosses", "Politicians"],
      ms: ["Pekerja Bebas (Freelancers)", "Penyanyi", "Majikan", "Ahli Politik"]
    },
    correctIndex: 0,
    explanation: {
      en: "The gig economy relies on freelance workers delivering on-demand services via digital platform matching.",
      ms: "Ekonomi gig bergantung kepada pekerja bebas yang menyampaikan perkhidmatan berasaskan platform."
    },
    isCurated20: false
  },
  {
    id: "q10_6",
    lectureId: "L10",
    question: {
      en: "These are examples of gig economy platforms EXCEPT",
      ms: "Berikut adalah contoh platform ekonomi gig KECUALI"
    },
    options: {
      en: ["Maukerja", "Fiverr", "Amazon Mechanical Turk", "PeoplePerHour"],
      ms: ["Maukerja", "Fiverr", "Amazon Mechanical Turk", "PeoplePerHour"]
    },
    correctIndex: 0,
    explanation: {
      en: "Fiverr, Mechanical Turk, and PeoplePerHour are global micro-task/freelance marketplaces.",
      ms: "Fiverr, Mechanical Turk, dan PeoplePerHour ialah platform pasaran bebas global."
    },
    isCurated20: false
  },
  {
    id: "q10_7",
    lectureId: "L10",
    question: {
      en: "The future of teaching is UNLIKELY to involve",
      ms: "Masa depan pengajaran TIDAK MUNGKIN melibatkan"
    },
    options: {
      en: ["MOOCs", "Chalk and blackboard", "Holographic lecturers", "Smart whiteboards"],
      ms: ["MOOC", "Kapur dan papan hitam (Chalk and blackboard)", "Penceramah Hologram", "Papan putih pintar"]
    },
    correctIndex: 1,
    explanation: {
      en: "Future teaching concepts highlight holograms and MOOCs. Traditional chalk and blackboards are unlikely to dominate.",
      ms: "Masa depan pendidikan menekankan hologram dan MOOC. Kapur dan papan hitam tradisional adalah semakin ditinggalkan."
    },
    isCurated20: false
  }
];
