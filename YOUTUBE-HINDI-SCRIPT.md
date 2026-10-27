# Campora School Admin | React JS YouTube सीरीज

यह नोट Campora React प्रोजेक्ट की YouTube सीरीज है।  
फोल्डर: `campora-react`

प्लेलिस्ट का नाम:

**Campora School Admin Panel | React JS UI Series**

इस सीरीज में हम Campora स्कूल एडमिन पैनल React JS में बनाते हैं।  
यह सिर्फ UI है। लॉगिन, सेव, सर्च और डिलीट का बैकएंड नहीं है। बटन दिखेंगे, पेज खुलेंगे, डेटा स्क्रीन पर पहले से लिखा हुआ रहेगा।

हर वीडियो का टारगेट समय **10 से 15 मिनट** है।  
रिकॉर्डिंग लेआउट: बाईं तरफ VS Code, नीचे टर्मिनल, दाईं तरफ ब्राउज़र।

कुल वीडियो: **22**

---

## वीडियो बनाने का क्रम

इस क्रम में फाइल बनाओ। आगे का स्क्रिप्ट इसी क्रम पर है।

| क्रम | वीडियो | पहले यह फाइल या काम |
|---|---|---|
| 1 | परिचय | कोई नई फाइल नहीं |
| 2 | Vite प्रोजेक्ट इंस्टॉल | `campora-react` फोल्डर |
| 3 | फोल्डर साफ करना और Router | `src` के अंदर फोल्डर |
| 4 | Google Font और Icons | `index.html` |
| 5 | CSS जोड़ना | `src/assets/css/style.css` और `src/assets/images/hero-bg.jpg` |
| 6 | ऐप शुरू करना और रूट | `src/main.jsx`, `src/App.jsx`, खाली पेज फाइलें |
| 7 | नकली डेटा | `src/data/mockData.js` |
| 8 | लेआउट | `Sidebar.jsx`, `Topbar.jsx`, `AdminLayout.jsx` |
| 9 | छोटे कॉमन कंपोनेंट | `PageHeader`, `Badge`, `StatCard`, `UserCell`, `Button`, `Chip` |
| 10 | फॉर्म कंपोनेंट | `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `FormCard` |
| 11 | टेबल कंपोनेंट | `Table`, `Panel`, `Toolbar`, `Toggle` |
| 12 | लॉगिन पेज | `LoginPage.jsx` |
| 13 | डैशबोर्ड | `DashboardPage.jsx` |
| 14 | स्टूडेंट लिस्ट | `StudentsPage.jsx` |
| 15 | स्टूडेंट जोड़ना | `AddStudentPage.jsx` |
| 16 | अटेंडेंस | `AttendancePage.jsx` |
| 17 | टीचर और क्लास | `TeachersPage.jsx`, `ClassesPage.jsx` |
| 18 | सब्जेक्ट और टाइमटेबल | `SubjectsPage.jsx`, `TimetablePage.jsx` |
| 19 | एग्जाम और फीस | `ExamsPage.jsx`, `FeesPage.jsx` |
| 20 | ट्रांसपोर्ट और सेटिंग्स | `TransportPage.jsx`, `SettingsPage.jsx` |
| 21 | कोलैप्स मेनू फिक्स | `Sidebar.jsx`, `AdminLayout.jsx` |
| 22 | फाइनल डेमो और बिल्ड | पूरी वेबसाइट |

खाली पेज का पैटर्न, वीडियो 6 में हर पेज के लिए यही लिखना है:

```jsx
export default function DashboardPage() {
  return <h1>Dashboard</h1>;
}
```

बाद के वीडियो में इसी फाइल के अंदर असली UI लिखेंगे।

---

## वीडियो 1 — परिचय

**टाइटल:** Campora School Admin React JS सीरीज का परिचय | हम क्या बनाएंगे

**डिस्क्रिप्शन:**

इस वीडियो में Campora School Admin Panel की React JS सीरीज शुरू होती है। हम देखेंगे कि यह पैनल किन पेजों से बनेगा। इस सीरीज में बैकएंड नहीं है। सिर्फ स्क्रीन, मेनू और कॉमन कंपोनेंट बनेंगे।

इस वीडियो में:
- प्रोजेक्ट का नाम Campora
- लॉगिन, डैशबोर्ड, स्टूडेंट, टीचर, क्लास, सब्जेक्ट, टाइमटेबल, एग्जाम, फीस, ट्रांसपोर्ट और सेटिंग्स
- UI only का मतलब
- आगे के 22 वीडियो का क्रम

अगला वीडियो: Vite से React प्रोजेक्ट इंस्टॉल करना।

#ReactJS #SchoolAdmin #Campora #Vite #ReactTutorial #Hindi

**समय:** 10–12 मिनट

**स्क्रीन पर क्या दिखाओ**

1. व्हाइटबोर्ड या स्लाइड पर Campora के पेजों की लिस्ट लिखो।
2. साइडबार का छोटा नक्शा बनाओ: Dashboard, Students ड्रॉपडाउन, Teachers से Settings तक।
3. इस वीडियो में कोड मत खोलो। सिर्फ प्लान बताओ।

**बोलने का स्क्रिप्ट**

1. नमस्ते दोस्तों। Campora School Admin Panel की React JS सीरीज में आपका स्वागत है। इस सीरीज में हम एक स्कूल एडमिन पैनल का UI बनाएंगे।
2. लॉगिन स्क्रीन होगी, डैशबोर्ड होगा, और बाईं तरफ मेनू होगा। हर स्क्रीन अलग React कंपोनेंट होगी।
3. नाम है Campora। यह एक स्कूल मैनेजमेंट एडमिन पैनल है। रंग हल्का हरा और टील है। फॉन्ट Outfit है, और बड़े हेडिंग के लिए Source Serif 4 है।
4. एक बात शुरू में साफ कर देता हूँ। यह सीरीज सिर्फ UI की है। डेटाबेस नहीं लगेगा। लॉगिन चेक नहीं होगा। सर्च रिजल्ट नहीं बदलेगा। सेव बटन रिकॉर्ड नहीं बनाएगा। हम स्क्रीन बनाएंगे।
5. पेज ये बनेंगे। लॉगिन। डैशबोर्ड। ऑल स्टूडेंट्स। ऐड स्टूडेंट। अटेंडेंस। टीचर्स। क्लासेस। सब्जेक्ट्स। टाइमटेबल। एग्जाम्स। फीस। ट्रांसपोर्ट। सेटिंग्स।
6. साइडबार में Students एक ड्रॉपडाउन है। उसके अंदर तीन लिंक हैं: All Students, Add Student और Attendance। बाकी मेनू सीधे पेज खोलते हैं।
7. स्टाइल एक फाइल में रहेगी: `src/assets/css/style.css`। साइडबार और टॉपबार हर पेज पर दोबारा नहीं लिखेंगे। उसके लिए Layout कंपोनेंट बनेगा। टेबल, इनपुट, बटन, रेडियो और सेलेक्ट कॉमन कंपोनेंट बनेंगे, क्योंकि ये कई पेज पर आएंगे।
8. फाइल बनाने का क्रम भी फिक्स है। पहले Vite प्रोजेक्ट। फिर `index.html` में Google Font और Bootstrap Icons। फिर CSS। फिर `main.jsx` और राउट्स। फिर नकली डेटा। फिर लेआउट। फिर कॉमन कंपोनेंट। आखिर में एक-एक पेज।
9. अगले वीडियो में हम टर्मिनल खोलेंगे, Node चेक करेंगे, और `campora-react` नाम से Vite React प्रोजेक्ट बनाएँगे। मिलते हैं अगले वीडियो में।

---

## वीडियो 2 — प्रोजेक्ट इंस्टॉल

**टाइटल:** React JS प्रोजेक्ट कैसे इंस्टॉल करें | Vite + npm run dev | Campora

**डिस्क्रिप्शन:**

इस वीडियो में हम Campora के लिए नया React प्रोजेक्ट बनाते हैं। Node और npm चेक करेंगे, Vite का React टेम्पलेट लगाएँगे, डिपेंडेंसी इंस्टॉल करेंगे और डेवलपमेंट सर्वर चलाएँगे।

कमांड:
- node -v
- npm -v
- npm create vite@latest campora-react -- --template react
- cd campora-react
- npm install
- npm run dev

फाइल जो अपने आप बनेगी: `package.json`, `index.html`, `src/main.jsx`, `src/App.jsx`, `vite.config.js`।

अगला वीडियो: डिफॉल्ट फाइलें हटाना और फोल्डर स्ट्रक्चर।

#ReactJS #Vite #npm #Campora #ReactInstall

**समय:** 12–15 मिनट

**स्क्रीन पर क्या करो**

1. जिस फोल्डर में नया प्रोजेक्ट बनाना है, टर्मिनल वहीं खोलो।
2. ये कमांड एक-एक करके चलाओ और आउटपुट पढ़ो।

```bash
node -v
npm -v
npm create vite@latest campora-react -- --template react
cd campora-react
npm install
npm run dev
```

3. ब्राउज़र में जो लोकल पता आए, आमतौर पर `http://127.0.0.1:5173/`, उसे खोलो। Vite का डिफॉल्ट पेज दिखेगा।
4. VS Code में `package.json` खोलकर `react`, `react-dom` और स्क्रिप्ट `dev`, `build` दिखाओ।

**बोलने का स्क्रिप्ट**

1. दोस्तों, पिछले वीडियो में हमने प्लान देखा। आज प्रोजेक्ट की नींव रखते हैं।
2. टर्मिनल उस फोल्डर में खोलो जहाँ `campora-react` बनाना है। Vite इसी जगह नया फोल्डर बना देगा।
3. `node -v` चलाओ। Node इंस्टॉल होना चाहिए। अगर वर्जन नहीं आता, तो पहले nodejs.org से Node लगाओ, फिर यही वीडियो आगे बढ़ाओ।
4. `npm -v` से npm चेक करो। npm Node के साथ आता है। इसी से पैकेज लगेंगे।
5. अब प्रोजेक्ट बनाने की कमांड है: `npm create vite@latest campora-react -- --template react`। Vite तेज डेवलपमेंट सर्वर है। टेम्पलेट `react` चुनो। TypeScript वाला टेम्पलेट नहीं चुनना।
6. फोल्डर का नाम `campora-react` रखो। अंदर आओ: `cd campora-react`।
7. `npm install` चलाओ। यह `package.json` पढ़कर React और Vite के पैकेज `node_modules` में लाता है। `node_modules` को हम हाथ से नहीं बदलते।
8. `npm run dev` से सर्वर शुरू होता है। टर्मिनल में लोकल URL आएगा। ब्राउज़र में खोलो। अभी Vite और React का डिफॉल्ट पेज दिखेगा। यही सही है। असली Campora UI अगले वीडियो से बनेगा।
9. `package.json` में तीन स्क्रिप्ट याद रखो। `dev` काम करते समय। `build` फाइनल फाइल बनाने के लिए। `preview` बिल्ड को देखने के लिए।
10. सर्वर बंद करना हो तो टर्मिनल में Ctrl + C दबाओ। अगले वीडियो में हम डिफॉल्ट `App.css` हटाएँगे और अपने फोल्डर बनाएँगे।

---

## वीडियो 3 — फोल्डर स्ट्रक्चर

**टाइटल:** React प्रोजेक्ट का फोल्डर स्ट्रक्चर | डिफॉल्ट फाइलें हटाना और React Router

**डिस्क्रिप्शन:**

Vite का डिफॉल्ट काउंटर पेज हटाकर Campora का फोल्डर स्ट्रक्चर बनाते हैं। React Router भी इंस्टॉल करेंगे, ताकि लॉगिन और डैशबोर्ड अलग-अलग URL पर खुलें।

कमांड:

```bash
npm install react-router-dom
```

फोल्डर:
- src/assets/css
- src/assets/images
- src/components/layout
- src/components/common
- src/data
- src/pages

हटानी वाली डिफॉल्ट फाइलें: `src/App.css`, `src/index.css`, `src/assets/react.svg`।

अगला वीडियो: Google Font और Bootstrap Icons।

#ReactRouter #FolderStructure #Campora #ReactJS

**समय:** 12–15 मिनट

**स्क्रीन पर क्या करो**

1. `npm run dev` रोक दो।
2. `npm install react-router-dom` चलाओ।
3. डिफॉल्ट फाइलें डिलीट करो: `src/App.css`, `src/index.css`, और `src/assets` के अंदर वाला `react.svg`। `public/favicon.svg` रहने दो।
4. खाली फोल्डर बनाओ। Linux या macOS पर:

```bash
mkdir -p src/assets/css src/assets/images src/components/layout src/components/common src/data src/pages
```

5. `src/App.jsx` को कुछ सेकंड के लिए इतना ही रखो, ताकि सर्वर एरर न दे:

```jsx
export default function App() {
  return <h1>Campora</h1>;
}
```

6. `src/main.jsx` में से `import './index.css'` वाली लाइन हटा दो, क्योंकि वह फाइल हमने डिलीट की है।
7. `npm run dev` फिर चलाओ। स्क्रीन पर सिर्फ Campora लिखा दिखना चाहिए।

**बोलने का स्क्रिप्ट**

1. प्रोजेक्ट बन गया है, पर अंदर Vite का सैंपल काउंटर है। आज हम उसे हटाकर अपना स्ट्रक्चर रखेंगे।
2. पेज बदलने के लिए `react-router-dom` लगा रहे हैं। एक ही ऐप रहेगा और URL बदलेगा, जैसे `/login` और `/dashboard`। हर स्क्रीन की अपनी फाइल `src/pages` में होगी।
3. कमांड है `npm install react-router-dom`। इंस्टॉल के बाद `package.json` की dependencies में यह नाम दिखना चाहिए।
4. `App.css` और `index.css` डिफॉल्ट स्टाइल हैं। हमारी स्टाइल एक ही फाइल `style.css` में रहेगी, इसलिए इन दोनों को हटा दो। `main.jsx` से `index.css` का इंपोर्ट भी हटाओ, वरना ऐप टूट जाएगा।
5. अब फोल्डर समझो। `src/pages` में हर स्क्रीन की फाइल होगी। `src/components/layout` में साइडबार, टॉपबार और उनका खोल। `src/components/common` में बटन, इनपुट, टेबल जैसे टुकड़े जो कई पेज पर चलेंगे। `src/data` में स्क्रीन का नकली डेटा। `src/assets/css` में स्टाइल। `src/assets/images` में लॉगिन की बैकग्राउंड इमेज।
6. खाली फोल्डर Git में हमेशा दिखें, यह जरूरी नहीं। फाइल आते ही फोल्डर दिखने लगेगा।
7. `App.jsx` में अभी सिर्फ एक हेडिंग रखो। अगले वीडियो में हम फॉन्ट और आइकन लगाएँगे। सर्वर चलाकर ब्राउज़र में Campora लिखा कन्फर्म कर लो।

---

## वीडियो 4 — Google Font और Icons

**टाइटल:** React में Google Font और Bootstrap Icons कैसे लगाएँ | index.html

**डिस्क्रिप्शन:**

Campora का फॉन्ट और आइकन `index.html` में लगते हैं। Outfit और Source Serif 4 Google Fonts से आते हैं। आइकन Bootstrap Icons की CDN लिंक से आते हैं। React कंपोनेंट में क्लास `bi bi-icon-name` लिखनी होती है।

लिंक्स:
- Google Fonts: Outfit और Source Serif 4
- Bootstrap Icons 1.11.3 CDN

फाइल: `campora-react/index.html`

अगला वीडियो: CSS फाइल जोड़ना।

#GoogleFonts #BootstrapIcons #ReactJS #Campora

**समय:** 10–14 मिनट

**स्क्रीन पर क्या करो**

`index.html` का `<head>` इस तरह पूरा करो। टाइटल भी बदलो।

```html
<title>Campora | School Admin</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&display=swap"
  rel="stylesheet"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
/>
```

जाँच के लिए `App.jsx` में कुछ सेकंड के लिए यह लिखो, फिर वीडियो 6 में इसे हटा देंगे:

```jsx
export default function App() {
  return (
    <div style={{ fontFamily: "Outfit, sans-serif", padding: 24 }}>
      <h1 style={{ fontFamily: "Source Serif 4, serif" }}>Campora</h1>
      <i className="bi bi-mortarboard" /> Students
    </div>
  );
}
```

ब्राउज़र रिफ्रेश करके फॉन्ट और ग्रेजुएशन कैप आइकन दिखाओ।

**बोलने का स्क्रिप्ट**

1. आज दो बाहरी चीजें जोड़ते हैं। एक फॉन्ट, दूसरी आइकन। दोनों `index.html` में लगती हैं, किसी React फाइल में `link` टैग नहीं लिखना।
2. `index.html` पूरे ऐप का खोल है। Vite इसी फाइल को खोलता है और `<div id="root">` के अंदर React अपना UI डालता है।
3. टाइटल बदलो: `Campora | School Admin`। यह ब्राउज़र टैब पर दिखेगा। बाद में हर पेज अपना टाइटल खुद सेट करेगा।
4. Google Fonts की दो लाइन `preconnect` कनेक्शन जल्दी शुरू करती हैं। तीसरी लाइन असली फॉन्ट है। Outfit बाकी लिखाइश के लिए है। Source Serif 4 सिर्फ बड़े शीर्षक के लिए है। वज़न 400 से 800 तक माँगे हैं, क्योंकि बटन और हेडिंग मोटे हैं।
5. आइकन के लिए Bootstrap Icons इस्तेमाल हो रहे हैं। यह आइकन फॉन्ट है। लिंक है `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css`। वर्जन 1.11.3 फिक्स रखो, ताकि आइकन के नाम बाद में न बदलें।
6. React में क्लास `className` होती है। आइकन ऐसे लिखते हैं: `className="bi bi-mortarboard"`। `bi` कॉमन क्लास है। दूसरा नाम आइकन का है। सर्च, बेल, गियर, बस, ऐसे ही नाम आगे चलेंगे।
7. ब्राउज़र में हेडिंग का फॉन्ट सेरिफ दिखे और कैप आइकन दिखे, तो यह वीडियो पूरा है। इनलाइन स्टाइल सिर्फ जाँच के लिए था। अगले वीडियो में असली CSS फाइल आएगी।

---

## वीडियो 5 — CSS सेटअप

**टाइटल:** React में CSS फाइल कैसे जोड़ें | Campora का style.css और लॉगिन इमेज

**डिस्क्रिप्शन:**

Campora की स्टाइल फाइल `src/assets/css/style.css` बनाते हैं और `main.jsx` से इंपोर्ट करते हैं। लॉगिन पेज की बैकग्राउंड इमेज `src/assets/images/hero-bg.jpg` में रखते हैं। इस वीडियो में पूरी CSS लाइन-दर-लाइन नहीं पढ़ेंगे। डिफॉल्ट सेटिंग समझेंगे: reset, CSS variables, बॉडी बैकग्राउंड और फॉन्ट।

फाइलें:
- src/assets/css/style.css
- src/assets/images/hero-bg.jpg

अगला वीडियो: main.jsx, राउट्स और खाली पेज।

#CSS #ReactJS #Campora #StyleCSS

**समय:** 12–15 मिनट

**स्क्रीन पर क्या करो**

1. जाँच वाला इनलाइन स्टाइल `App.jsx` से हटाकर फिर सिर्फ `<h1>Campora</h1>` कर दो।
2. `src/assets/css/style.css` फाइल बनाओ। लॉगिन की बैकग्राउंड इमेज `src/assets/images/hero-bg.jpg` के नाम से रखो।
3. `src/main.jsx` में यह इंपोर्ट जोड़ो:

```jsx
import "./assets/css/style.css";
```

4. `style.css` के ये तीन हिस्से स्क्रीन पर दिखाओ और समझाओ:
   - `*` वाला reset
   - `:root` के अंदर `--teal`, `--ink`, `--font`, `--sidebar-w`
   - `body` का बैकग्राउंड और `font-family: var(--font)`
5. CSS में लॉगिन इमेज का पाथ `url("../images/hero-bg.jpg")` है। CSS फाइल `css` फोल्डर में है, इमेज उसके बगल वाले `images` फोल्डर में है। इसलिए `../images` सही है।

**बोलने का स्क्रिप्ट**

1. फॉन्ट और आइकन लग गए। आज रंग और लेआउट की CSS लिखते हैं। सारी स्टाइल एक फाइल में रहेगी: `src/assets/css/style.css`।
2. लॉगिन की इमेज `src/assets/images/hero-bg.jpg` रखो। CSS में उसका पाथ `url("../images/hero-bg.jpg")` है, क्योंकि CSS फाइल `css` फोल्डर में है और इमेज बगल के `images` फोल्डर में है।
3. CSS अपने आप लागू नहीं होती। `main.jsx` में इंपोर्ट लिखना पड़ता है: `import "./assets/css/style.css"`। यह लाइन ऐप की एंट्री पर एक बार चलेगी, हर पेज पर अलग इंपोर्ट की जरूरत नहीं।
4. फाइल के शुरू में reset है। स्टार सेलेक्टर मार्जिन और पैडिंग शून्य करता है और `box-sizing: border-box` लगाता है। इससे चौड़ी चीजें पैडिंग जोड़कर बाहर नहीं निकलतीं।
5. `:root` में कलर वेरिएबल हैं। `--ink` लिखाई का गहरा रंग है। `--muted` हल्की ग्रे-हरी लिखाई। `--teal` ब्रांड का हरा रंग। `--sidebar-w` खुले साइडबार की चौड़ाई है, 268 पिक्सल। `--sidebar-c` बंद साइडबार की चौड़ाई है, 84 पिक्सल। `--font` Outfit है। `--display` हेडिंग वाला सेरिफ फॉन्ट है।
6. आगे बटन, इनपुट और टेबल की डिफॉल्ट सेटिंग भी इसी फाइल में है। `button` और `input` का बॉर्डर और बैकग्राउंड हटाया गया है, ताकि बाद की क्लास अपना लुक लगा सके। फॉर्म के इनपुट को ऊँचाई, बॉर्डर और फोकस रिंग `.form-field` और `.toolbar` के अंदर मिलती है।
7. पूरी फाइल आज लाइन-दर-लाइन मत पढ़ो। वह लंबी है। नियम याद रखो: नया रंग चाहिए तो वेरिएबल इस्तेमाल करो। नई स्क्रीन पर नई CSS फाइल मत खोलो। क्लास के नाम यहीं फिक्स हैं, जैसे `btn`, `panel` और `table-wrap`।
8. ब्राउज़र रिफ्रेश करो। पेज का बैकग्राउंड हल्का हरा हो जाना चाहिए, क्योंकि बॉडी की CSS लग गई। अगले वीडियो में हम पेजों के रास्ते जोड़ेंगे।

---

## वीडियो 6 — main.jsx और राउट्स

**टाइटल:** React Router सेटअप | main.jsx और App.jsx में सभी पेज के रास्ते

**डिस्क्रिप्शन:**

आज ऐप की एंट्री और सारे URL जोड़ते हैं। `/` अपने आप `/login` पर जाएगा। इस वीडियो में पेज फाइलें खाली हेडिंग के साथ बनेंगी। साइडबार वाला Layout अगले लेआउट वीडियो में जुड़ेगा। असली डिजाइन उसके बाद भरा जाएगा।

फाइलें:
- src/main.jsx
- src/App.jsx
- src/pages के अंदर 13 पेज फाइलें

रास्ते: /login, /dashboard, /students, /students/add, /attendance, /teachers, /classes, /subjects, /timetable, /exams, /fees, /transport, /settings

अगला वीडियो: mockData.js

#ReactRouter #mainjsx #Campora #ReactJS

**समय:** 14–15 मिनट

**स्क्रीन पर क्या करो**

`src/main.jsx`:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./assets/css/style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
```

हर पेज फाइल में नाम के हिसाब से खाली कंपोनेंट बनाओ। उदाहरण `src/pages/LoginPage.jsx`:

```jsx
export default function LoginPage() {
  return <h1>Login</h1>;
}
```

यही पैटर्न: `DashboardPage`, `StudentsPage`, `AddStudentPage`, `AttendancePage`, `TeachersPage`, `ClassesPage`, `SubjectsPage`, `TimetablePage`, `ExamsPage`, `FeesPage`, `TransportPage`, `SettingsPage`।

`src/App.jsx` में `BrowserRouter` दोबारा मत लगाओ। वह `main.jsx` में है। `App.jsx` में सिर्फ `Routes` रखो। लेआउट अगले वीडियो के बाद जुड़ेगा, इसलिए आज हर रास्ता सीधा पेज खोले:

```jsx
import { Navigate, Route, Routes } from "react-router-dom";
import AddStudentPage from "./pages/AddStudentPage.jsx";
import AttendancePage from "./pages/AttendancePage.jsx";
import ClassesPage from "./pages/ClassesPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ExamsPage from "./pages/ExamsPage.jsx";
import FeesPage from "./pages/FeesPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import StudentsPage from "./pages/StudentsPage.jsx";
import SubjectsPage from "./pages/SubjectsPage.jsx";
import TeachersPage from "./pages/TeachersPage.jsx";
import TimetablePage from "./pages/TimetablePage.jsx";
import TransportPage from "./pages/TransportPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/students/add" element={<AddStudentPage />} />
      <Route path="/attendance" element={<AttendancePage />} />
      <Route path="/teachers" element={<TeachersPage />} />
      <Route path="/classes" element={<ClassesPage />} />
      <Route path="/subjects" element={<SubjectsPage />} />
      <Route path="/timetable" element={<TimetablePage />} />
      <Route path="/exams" element={<ExamsPage />} />
      <Route path="/fees" element={<FeesPage />} />
      <Route path="/transport" element={<TransportPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}
```

ब्राउज़र में `/login`, `/dashboard`, `/students/add` खोलकर हेडिंग दिखाओ। वीडियो 8 के बाद `App.jsx` में लेआउट वाला रास्ता जोड़ना है। आज का कोड अस्थायी है, यह वीडियो में बोल देना।

**बोलने का स्क्रिप्ट**

1. आज ऐप को पेजों से जोड़ते हैं। अभी डिजाइन नहीं लिखेंगे। सिर्फ रास्ते बनाएँगे, ताकि आगे हर वीडियो एक फाइल भर सके।
2. `main.jsx` दरवाजा है। `createRoot` उस डिव को पकड़ता है जिसकी आईडी `root` है। `StrictMode` डेवलपमेंट में गलती पकड़ने में मदद करता है।
3. `BrowserRouter` पूरे ऐप को राउटर के अंदर ले आता है। इसे एक ही जगह लगाओ, `main.jsx` में। `App.jsx` में दोबारा लगाने से जरूरत नहीं।
4. CSS का इंपोर्ट भी यहीं है। एक बार इंपोर्ट, सारे पेज पर स्टाइल।
5. हर स्क्रीन की अपनी फाइल `src/pages` में है। नाम बड़े अक्षर से शुरू होता है, क्योंकि React कंपोनेंट का नाम बड़ा होता है। फाइल के आखिर में `.jsx` है।
6. `Route` का `path` URL है। `element` वह कंपोनेंट है जो उस URL पर दिखेगा। `/` को `Navigate` से `/login` पर भेज रहे हैं, क्योंकि साइट खुलते ही लॉगिन दिखना चाहिए।
7. `/students` और `/students/add` दो अलग रास्ते हैं। ऑल स्टूडेंट्स वाले लिंक पर `end` बाद में लगेगा, वरना ऐड स्टूडेंट पर भी ऑल स्टूडेंट्स एक्टिव दिख सकता है। यह बात साइडबार वाले वीडियो में फिर आएगी।
8. ब्राउज़र में एड्रेस बदलकर तीन पेज चेक करो। हेडिंग बदल रही है, मतलब राउटर काम कर रहा है। अगला वीडियो डेटा की फाइल का है।

---

## वीडियो 7 — mockData.js

**टाइटल:** React में नकली डेटा कहाँ रखें | mockData.js | Campora UI

**डिस्क्रिप्शन:**

क्योंकि यह प्रोजेक्ट सिर्फ UI है, स्टूडेंट, टीचर, फीस और टाइमटेबल का डेटा `src/data/mockData.js` में लिखा है। पेज इसी फाइल से पढ़ेंगे। आज फाइल बनाएँगे और समझेंगे कि हर लिस्ट में कौन से फील्ड हैं।

फाइल: `src/data/mockData.js`

मुख्य एक्सपोर्ट: stats, admissions, students, attendanceRows, teachers, classes, subjects, timetableRows, exams, payments, routes, notificationSettings।

अगला वीडियो: साइडबार, टॉपबार और AdminLayout।

#ReactJS #MockData #Campora #UIOnly

**समय:** 12–15 मिनट

**स्क्रीन पर क्या करो**

`src/data/mockData.js` बनाओ। कैमरे पर फील्ड समझाओ। पूरा डेटा टाइप करने में समय लगे तो फाइल लिखकर हर ऐरे का पहला ऑब्जेक्ट पढ़ो।

कैमरे पर ये ऑब्जेक्ट जरूर दिखाओ:

```js
export const students = [
  {
    initials: "RS",
    name: "Riya Sharma",
    id: "STU-2401",
    className: "Class 8-A",
    parent: "Meena Sharma",
    status: "Active",
    tone: "success",
  },
];
```

```js
export const timetableRows = [
  {
    time: "09:00",
    slots: [
      ["Maths", "P. Deshmukh"],
      ["English", "A. Nair"],
      ["Science", "R. Kale"],
      ["Maths", "P. Deshmukh"],
      ["CS", "V. Shah"],
    ],
  },
];
```

बोलना: `className` इसलिए है क्योंकि `class` JavaScript का रिजर्व्ड शब्द है। `tone` बैज का रंग है: `success`, `warning`, `danger`। `avatar` की वैल्यू `warm` या `cool` अवतार का दूसरा रंग है।

**बोलने का स्क्रिप्ट**

1. पेजों पर नाम और नंबर बार-बार नहीं लिखने। आज एक डेटा फाइल बनाते हैं।
2. फाइल का नाम `mockData.js` है। मॉक का मतलब नकली डेटा। सर्वर से नहीं आ रहा। हमने खुद लिख दिया है, ताकि UI भरा-भरा दिखे।
3. हर लिस्ट `export` है। पेज में हम लिखेंगे `import { students } from "../data/mockData.js"`।
4. स्टूडेंट ऑब्जेक्ट देखो। `initials` छोटे अवतार में RS जैसा पाठ है। `tone` बैज का रंग तय करता है। हरा एक्टिव, पीला पेंडिंग, लाल ऑन होल्ड।
5. टाइमटेबल थोड़ा अलग है। हर रो में समय है, और `slots` में पाँच दिन के जोड़े हैं। पहला शब्द सब्जेक्ट, दूसरा टीचर।
6. सेटिंग्स की नोटिफिकेशन लिस्ट में `id`, `label` और `on` है। `on` true है तो स्विच ऑन दिखेगा। यह अकेला जगह है जहाँ क्लिक पर स्क्रीन का स्विच बदलेगा, क्योंकि वह सिर्फ दिखावट है।
7. इस फाइल में फंक्शन नहीं है। कोई फ़िल्टर नहीं है। सर्च बॉक्स बाद में `readOnly` रहेगा। डेटा यहीं स्थिर रहेगा।
8. फाइल सेव करके अगले वीडियो में साइडबार बनाएँगे। डेटा तब काम आएगा जब टेबल वाले पेज भरेंगे।

---

## वीडियो 8 — लेआउट

**टाइटल:** React Admin Layout | Sidebar, Topbar और Outlet | Campora

**डिस्क्रिप्शन:**

लॉगिन के बाद हर पेज पर एक जैसा साइडबार और टॉपबार चाहिए। आज तीन फाइलें बनेंगी: Sidebar, Topbar और AdminLayout। AdminLayout के अंदर React Router का Outlet पेज दिखाता है। साइडबार को डेस्कटॉप पर छोटा करना और मोबाइल पर खोलना भी इसी वीडियो में है। Students ड्रॉपडाउन बनेगा। कोलैप्स में क्लिक का फिक्स वीडियो 21 में अलग से है।

फाइलें:
- src/components/layout/Sidebar.jsx
- src/components/layout/Topbar.jsx
- src/components/layout/AdminLayout.jsx
- src/App.jsx अपडेट

अगला वीडियो: PageHeader, Badge, Button और दूसरे छोटे कॉमन कंपोनेंट।

#ReactLayout #Sidebar #ReactRouter #Campora

**समय:** 15 मिनट

**स्क्रीन पर क्या करो**

1. तीन लेआउट फाइलें बनाओ। रिकॉर्डिंग में पूरा साइडबार टाइप करो। मेनू की लिस्ट ऐरे में रखो, हर लिंक अलग से मत लिखो।
2. Students के लिंक:

```jsx
const studentLinks = [
  { to: "/students", label: "All Students", end: true },
  { to: "/students/add", label: "Add Student" },
  { to: "/attendance", label: "Attendance" },
];
```

3. `NavLink` अपने आप एक्टिव लिंक पर क्लास `active` लगाता है। CSS में `.menu > a.active` पहले से है।
4. `AdminLayout` में `useState` से `collapsed` और `mobileOpen` रखो। `Outlet` को `<main className="content">` के अंदर रखो।
5. `App.jsx` बदलो। लॉगिन अकेला रहे। बाकी रास्ते लेआउट के बच्चे बनें:

```jsx
<Route path="/login" element={<LoginPage />} />
<Route element={<AdminLayout />}>
  <Route path="/dashboard" element={<DashboardPage />} />
  {/* बाकी पेज इसी के अंदर */}
</Route>
```

6. ब्राउज़र में `/dashboard` खोलो। साइडबार दिखे। किसी लिंक पर क्लिक करके हेडिंग बदलती दिखे। कोलैप्स बटन दबाओ। मोबाइल चौड़ाई पर मेनू बटन दिखाओ, अगर समय हो।

**बोलने का स्क्रिप्ट**

1. साइडबार और टॉपबार हर पेज पर दोबारा नहीं लिखेंगे। एक बार Layout में लिखेंगे और बीच का पेज बदलता रहेगा।
2. `Topbar` ऊपर की पट्टी है। सर्च बॉक्स, नोटिफिकेशन और एडमिन का नाम यहीं है। सर्च इनपुट `readOnly` रखो। यह UI है, सर्च नहीं करनी।
3. बाईं तरफ दो बटन हैं। `menu-toggle` मोबाइल पर मेनू खोलता है। `sidebar-collapse` डेस्कटॉप पर साइडबार को आइकन जितना छोटा करता है। CSS इन बटन को स्क्रीन के हिसाब से छुपाती है।
4. `Sidebar` में `NavLink` इस्तेमाल करो, साधारण `<a href>` नहीं। `href` पूरा पेज रीलोड कर देता है। `NavLink` React के अंदर पेज बदलता है।
5. Students बटन लिंक नहीं है। वह ड्रॉपडाउन है। क्लिक पर `studentsOpen` टॉगल होगा। स्टूडेंट वाले URL पर मेनू खुला रहे, इसके लिए `useLocation` से पाथ चेक करो। `/students` और `/attendance` दोनों इस ग्रुप में हैं।
6. `All Students` वाले `NavLink` पर `end` जरूर लगाओ। नहीं तो `/students/add` पर भी वह लिंक एक्टिव रहेगा।
7. `AdminLayout` खोल है। साइडबार और टॉपबार फिक्स हैं। `Outlet` वह जगह है जहाँ राउटर आज का पेज डालता है। डैशबोर्ड URL पर Outlet में DashboardPage आएगा।
8. `App.jsx` में लेआउट वाला रास्ता बिना `path` के है। उसके अंदर के रास्ते बच्चे हैं। लॉगिन इस खोल के बाहर है, क्योंकि लॉगिन पर साइडबार नहीं चाहिए।
9. कोलैप्स दबाने पर क्लास `collapsed` साइडबार और मेन पर लगती है। CSS चौड़ाई घटाती है। Students का सबमेनू इस हालत में छिप जाता है। उस क्लिक को वीडियो 21 में ठीक करेंगे। आज बस मेनू खुलता और पेज बदलता दिखाना है।

---

## वीडियो 9 — छोटे कॉमन कंपोनेंट

**टाइटल:** React कॉमन कंपोनेंट पार्ट 1 | Button, Badge, PageHeader, StatCard

**डिस्क्रिप्शन:**

जो चीज दो या ज्यादा पेज पर एक जैसी है, उसे कॉमन कंपोनेंट बनाते हैं। इस वीडियो में पेज का शीर्षक, रंगीन बैज, स्टैट कार्ड, यूजर सेल, बटन और चिप बनेगा। Button कंपोनेंट आइकन और React Router लिंक दोनों संभालता है।

फाइलें `src/components/common/` में:
- PageHeader.jsx
- Badge.jsx
- StatCard.jsx
- UserCell.jsx
- iconClass.js
- Button.jsx
- Chip.jsx

अगला वीडियो: Input, Select, Radio और फॉर्म।

#ReactComponents #ReusableComponents #Campora

**समय:** 14–15 मिनट

**स्क्रीन पर क्या करो**

`Button.jsx` का यह हिस्सा ज़रूर टाइप करके समझाओ:

```jsx
const classes = ["btn", `btn-${variant}`, size === "sm" ? "btn-sm" : "", className]
  .filter(Boolean)
  .join(" ");
```

बोलना:
- `variant="primary"` क्लास `btn btn-primary` बनाता है।
- `variant="ghost"` एक्सपोर्ट जैसा हल्का बटन।
- `variant="secondary"` एडिट।
- `variant="danger"` रिमूव।
- `size="sm"` छोटी ऊँचाई।
- `icon="plus-lg"` अंदर `<i className="bi bi-plus-lg" />` लगाता है।
- `to="/students"` होने पर बटन की जगह `Link` रेंडर होता है।

`PageHeader` टाइटल के साथ `document.title` को `Campora | टाइटल` कर देता है।

`Badge` को `tone="success"` दो तो क्लास `badge success` बने।

एक अस्थायी जाँच `DashboardPage` में लगाकर हटाओ, या वीडियो के अंत में डैशबोर्ड अभी खाली रहने दो और कंपोनेंट फाइल ही दिखाओ। बेहतर है स्टोरी के लिए डैशबोर्ड को अगले पेज वीडियो तक खाली छोड़ो।

**बोलने का स्क्रिप्ट**

1. आज से हम वो टुकड़े बनाएँगे जो कई स्क्रीन पर दोबारा आने वाले हैं। इन्हें कॉमन कंपोनेंट कहते हैं।
2. `PageHeader` हर पेज के ऊपर शीर्षक और छोटा वाक्य रखता है। बच्चों में बटन आते हैं, जो दाईं तरफ `page-actions` में बैठते हैं। साथ में ब्राउज़र टैब का टाइटल भी यही सेट करता है।
3. `Badge` स्टेटस की गोली है। success हरा, warning पीला, danger लाल। टोन न दो तो साधारण बैज रहता है। एग्जाम के Scheduled पर टोन नहीं है।
4. `StatCard` डैशबोर्ड और क्लास पेज के ऊपर के चार बॉक्स हैं। आइकन, लेबल, वैल्यू और ट्रेंड आते हैं।
5. `UserCell` नाम के साथ छोटे अक्षरों वाला अवतार है। `avatar="warm"` पीला बैकग्राउंड देता है, `cool` नीला।
6. `Button` सबसे काम का कंपोनेंट है। हम हर जगह `className="btn btn-primary"` नहीं लिखेंगे। प्रॉप्स से क्लास बनेगी।
7. अगर `to` प्रॉप है, तो यह असली बटन नहीं, राउटर का लिंक है। ऐड स्टूडेंट ऐसा ही है। वह पेज खोलता है, फॉर्म सेव नहीं करता।
8. `iconClass` छोटी हेल्पर फाइल है। हम `plus-lg` लिखते हैं, वह `bi bi-plus-lg` बना देती है।
9. `Chip` छोटी गोली है, जैसे तारीख या अटेंडेंस का जोड़। अगले वीडियो में इनपुट और रेडियो बनाएंगे।

---

## वीडियो 10 — फॉर्म कंपोनेंट

**टाइटल:** React फॉर्म कंपोनेंट | Input, Select, Textarea, Checkbox, RadioGroup

**डिस्क्रिप्शन:**

Campora के फॉर्म एक जैसे हैं। आज इनपुट, टेक्स्टएरिया, सेलेक्ट, चेकबॉक्स और रेडियो ग्रुप बनाएँगे। लेबल होने पर कंपोनेंट अपने आप `form-field` का डिव लगाता है। लेबल न हो तो सिर्फ इनपुट आता है, ताकि टूलबार और टेबल में भी वही कंपोनेंट चले। Gender के लिए RadioGroup है।

फाइलें:
- FormField.jsx
- Input.jsx
- Textarea.jsx
- Select.jsx
- Checkbox.jsx
- RadioGroup.jsx
- FormCard.jsx

अगला वीडियो: Table, Panel और Toolbar।

#ReactForms #RadioButton #InputComponent #Campora

**समय:** 15 मिनट

**स्क्रीन पर क्या करो**

`Input` के दो रूप दिखाओ।

बिना लेबल, टूलबार के लिए:

```jsx
<Input type="text" placeholder="Search by name or ID" readOnly />
```

लेबल के साथ:

```jsx
<Input label="First Name" defaultValue="Riya" readOnly />
```

आइकन के साथ, लॉगिन के लिए:

```jsx
<Input icon="envelope" label="Email" type="email" defaultValue="admin@campora.edu" readOnly />
```

`Select`:

```jsx
<Select label="Class" defaultValue="Class 8-A" options={["Class 8-A", "Class 5-B", "Class 10-A"]} />
```

`RadioGroup`:

```jsx
<RadioGroup label="Gender" name="gender" value="Female" options={["Female", "Male", "Other"]} />
```

`FormCard.jsx` में तीन एक्सपोर्ट दिखाओ: `FormCard`, `FormGrid`, `FormActions`। `FormCard` सबमिट पर `preventDefault` करता है, ताकि पेज रीलोड न हो।

CSS में `.radio-group` पहले से `style.css` के आखिर में है। flex में रेडियो एक लाइन में बैठते हैं।

**बोलने का स्क्रिप्ट**

1. इनपुट कई जगह है। लॉगिन, ऐड स्टूडेंट, सर्च बार, अटेंडेंस की रिमार्क, सेटिंग्स। एक कंपोनेंट तीनों जगह चलेगा।
2. नियम सरल है। `label` प्रॉप हो तो ऊपर लेबल और नीचे फील्ड। `label` न हो तो खाली इनपुट, क्योंकि टूलबार में लेबल नहीं है।
3. लॉगिन का इनपुट अलग दिखता है। बाईं तरफ आइकन है। उसके लिए `icon` प्रॉप है। तब मार्कअप `field` और `field-input` क्लास इस्तेमाल करता है। वही क्लास CSS में बनी है।
4. सारे डेमो इनपुट `readOnly` हैं। दर्शक वैल्यू देख सकें, पर यह वीडियो डेटा सेव करने का नहीं है। `defaultValue` शुरू की वैल्यू है।
5. `Select` ऑप्शन की लिस्ट लेता है। स्ट्रिंग की ऐरे काफी है। अंदर वह `<option>` खुद बनाता है।
6. चेकबॉक्स लॉगिन के Remember me के लिए है। क्लास `check` है, जो CSS में टील कलर का चेक रखती है।
7. रेडियो Gender के लिए है। तीन ऑप्शन हैं: Female, Male, Other। `name` एक ही रखो, तभी एक समय पर एक रेडियो चुनेगा। `value="Female"` शुरू में Female को चुना हुआ दिखाता है।
8. `FormCard` सफेद फॉर्म का डिब्बा है। `FormGrid` दो कॉलम। `full` प्रॉप पता को पूरी चौड़ाई देता है। `FormActions` बटन को दाईं तरफ रखता है।
9. इन कंपोनेंट को अभी पेज पर मत जोड़ो। अगले वीडियो में टेबल बनेगी, उसके बाद पेज भरेंगे।

---

## वीडियो 11 — टेबल, पैनल और टूलबार

**टाइटल:** React में कॉमन टेबल कैसे बनाएँ | Table, Panel, Toolbar, Toggle

**डिस्क्रिप्शन:**

स्टूडेंट, टीचर, एग्जाम और फीस सब जगह एक जैसी टेबल है। आज एक Table कंपोनेंट बनाएँगे। कॉलम की लिस्ट और रो की लिस्ट बाहर से आएगी। Panel सफेद कार्ड है। Toolbar सर्च और फिल्टर की पट्टी है। Toggle सेटिंग्स के स्विच के लिए है।

फाइलें:
- Table.jsx
- Panel.jsx
- Toolbar.jsx
- Toggle.jsx

टेबल को मोबाइल पर कार्ड बनाने वाली CSS पहले से `style.css` में है। `data-label` जरूरी है।

अगला वीडियो: लॉगिन पेज।

#ReactTable #ReusableTable #Campora #ReactJS

**समय:** 14–15 मिनट

**स्क्रीन पर क्या करो**

`Table.jsx` में हेडर `column.header` से और सेल `column.render` से भरो। रेंडर न हो तो `row[column.key]` दिखाओ। हर `td` पर `data-label={column.header}` लगाओ।

उदाहरण कॉलम, बोलकर समझाओ, पेज में अगले वीडियो में पेस्ट होगा:

```jsx
const columns = [
  { key: "id", header: "ID" },
  {
    key: "status",
    header: "Status",
    render: (student) => <Badge tone={student.tone}>{student.status}</Badge>,
  },
  {
    key: "action",
    header: "Action",
    className: "actions",
    render: () => <Button variant="secondary" size="sm">Edit</Button>,
  },
];
```

`Panel` में `title` हो तो `panel-header` दिखे, नहीं तो सिर्फ बच्चों को कार्ड में लपेटो।

`Toolbar` के दो प्रॉप हैं: `left` और `right`।

**बोलने का स्क्रिप्ट**

1. टेबल इस प्रोजेक्ट की सबसे दोहराई गई चीज है। अगर हर पेज पर `table`, `thead` और `tbody` लिखेंगे, तो एक ही बदलाहट दस फाइलों में करनी पड़ेगी।
2. Table कंपोनेंट दो चीजें माँगता है। `columns` बताती है कॉलम का नाम और सेल में क्या दिखे। `rows` डेटा है। `getRowKey` हर रो की यूनिक की देता है, जैसे स्टूडेंट आईडी।
3. साधारण कॉलम में `key` डेटा के फील्ड का नाम है। `header` ऊपर की लिखाई है और मोबाइल पर लेबल भी यही बनता है।
4. अगर सेल में बैज या बटन चाहिए, तो `render` फंक्शन दो। वह उस रो का ऑब्जेक्ट प्राप्त करता है।
5. एक्शन वाले सेल पर क्लास `actions` लगाओ। CSS बटन को एक लाइन में रखती है।
6. `data-label` मोबाइल के लिए है। छोटी स्क्रीन पर टेबल कार्ड बन जाती है और हर सेल के बाईं तरफ यह लेबल दिखता है। यह CSS पहले से लिखी है। हम सिर्फ एट्रिब्यूट दे रहे हैं।
7. Panel सफेद गोल कार्ड है। डैशबोर्ड पर कार्ड के अंदर शीर्षक भी है, इसलिए `title` और `action` प्रॉप हैं। स्टूडेंट लिस्ट पर शीर्षक पेज हेडर में है, इसलिए Panel खाली रहेगा और अंदर सिर्फ टेबल होगी।
8. Toolbar फिल्टर की लाइन है। बाईं तरफ इनपुट और सेलेक्ट। दाईं तरफ एक्सपोर्ट बटन या चिप।
9. Toggle सेटिंग्स का स्विच है। यह बटन है। `on` true हो तो क्लास `toggle on` लगती है। CSS गोला दाईं तरफ खिसकाती है।
10. कॉमन कंपोनेंट पूरे हो गए। अगले वीडियो से असली पेज भरना शुरू होगा। पहला पेज लॉगिन है।

---

## वीडियो 12 — लॉगिन पेज

**टाइटल:** React में लॉगिन पेज UI | Campora LoginPage | बिना बैकएंड

**डिस्क्रिप्शन:**

आज खाली LoginPage को असली Campora लॉगिन स्क्रीन बनाते हैं। बाईं तरफ स्कूल की इमेज और दाईं तरफ साइन-इन कार्ड। ईमेल और पासवर्ड कॉमन Input से आएँगे। Remember me कॉमन Checkbox है। लॉगिन बटन सिर्फ `/dashboard` खोलता है। पासवर्ड चेक नहीं होता।

फाइल: `src/pages/LoginPage.jsx`

क्लास जो CSS में पहले से हैं: `login-page`, `login-shell`, `login-visual`, `login-card`, `btn-login`।

अगला वीडियो: डैशबोर्ड।

#ReactLogin #LoginUI #Campora #ReactJS

**समय:** 12–15 मिनट

**स्क्रीन पर क्या करो**

`LoginPage.jsx` लिखो। फॉर्म का सबमिट:

```jsx
onSubmit={(event) => {
  event.preventDefault();
  navigate("/dashboard");
}}
```

इनपुट `readOnly` और `defaultValue` के साथ। ईमेल `admin@campora.edu`। पासवर्ड `password`।

ब्राउज़र में `/login` खोलो। डेस्कटॉप पर दो कॉलम दिखाओ। चौड़ाई कम करके इमेज वाला हिस्सा ऊपर आ जाए, यह CSS का मीडिया क्वेरी है। लॉगिन दबाकर डैशबोर्ड की खाली हेडिंग या लेआउट दिखाओ।

**बोलने का स्क्रिप्ट**

1. पहला असली पेज लॉगिन है। यह लेआउट के बाहर है, इसलिए साइडबार नहीं दिखेगा।
2. बायाँ हिस्सा `login-visual` है। बैकग्राउंड में `hero-bg.jpg` है और उसके ऊपर टील ग्रेडिएंट है। यह इमेज हम वीडियो 5 में `src/assets/images` में रख चुके हैं।
3. लिखा है: Run your campus from one calm place। नीचे तीन पॉइंट हैं। आइकन Bootstrap के हैं: `bi-people`, `bi-calendar3`, `bi-wallet2`।
4. दायाँ कार्ड कॉमन Input इस्तेमाल करता है। `icon="envelope"` और `icon="lock"`। ये लॉगिन वाली फील्ड स्टाइल चुनते हैं।
5. Remember me कॉमन Checkbox है। `defaultChecked` से वह चुना हुआ खुलेगा।
6. लॉगिन बटन की क्लास `btn-login` है। यह कॉमन Button से अलग है, क्योंकि इसका आकार और ग्रेडिएंट सिर्फ इस पेज का है।
7. फॉर्म सबमिट पर `preventDefault` जरूरी है। नहीं तो ब्राउज़र पेज रीलोड कर देगा। उसके बाद `navigate("/dashboard")`। कोई ईमेल मैच नहीं हो रहा। खाली फॉर्म भी डैशबोर्ड खोल देगा। यह बात दर्शकों को साफ बोल दो।
8. `useEffect` से टाइटल `Campora | Login` रखो। बाकी पेजों पर यह काम PageHeader करेगा। लॉगिन पर PageHeader नहीं है।
9. पेज चेक करो। फिर अगले वीडियो में डैशबोर्ड के कार्ड और टेबल भरेंगे।

---

## वीडियो 13 — डैशबोर्ड

**टाइटल:** React डैशबोर्ड UI | स्टैट कार्ड, एडमिशन टेबल और अटेंडेंस | Campora

**डिस्क्रिप्शन:**

खाली DashboardPage को Campora डैशबोर्ड बनाते हैं। चार स्टैट कार्ड, हाल की एडमिशन की टेबल, आज की अटेंडेंस, आने वाले इवेंट और फीस का स्नैपशॉट। डेटा `mockData.js` से आएगा। टेबल कॉमन Table है। कार्ड कॉमन StatCard और Panel हैं।

फाइल: `src/pages/DashboardPage.jsx`

अगला वीडियो: ऑल स्टूडेंट्स पेज।

#ReactDashboard #AdminDashboard #Campora #ReactJS

**समय:** 15 मिनट

**स्क्रीन पर क्या करो**

1. `DashboardPage.jsx` में PageHeader, चार StatCard, दो `grid-2` सेक्शन लिखो।
2. एडमिशन कॉलम में UserCell और Badge रेंडर करो।
3. अटेंडेंस बार में चौड़ाई इनलाइन स्टाइल से दो: `style={{ width: item.width }}`। CSS एनिमेशन बार को भरती है।
4. View all और Calendar साधारण `Link` रखो। उन्हें Button मत बनाओ। CSS `.panel-header a` उन्हें टील लिंक बनाती है।
5. ब्राउज़र में `/dashboard` खोलो। चार कार्ड, टेबल और इवेंट दिखाओ। Add Student लिंक `/students/add` खोले। अभी वहाँ खाली हेडिंग हो सकती है।

**बोलने का स्क्रिप्ट**

1. डैशबोर्ड स्कूल की आज की तस्वीर है। नंबर नकली हैं: 1248 स्टूडेंट, 86 टीचर, 42 क्लास, फीस 18.4 लाख।
2. PageHeader में दो बटन हैं। Export गोस्ट बटन है, वह कुछ डाउनलोड नहीं करता। Add Student लिंक है, `to="/students/add"`।
3. स्टैट कार्ड की ऐरे `stats` है। `map` से चार StatCard बनते हैं। `key` लेबल है, क्योंकि लेबल इस लिस्ट में यूनिक है।
4. नीचे दो कॉलम हैं। क्लास `grid-2` है। बायाँ कॉलम थोड़ा चौड़ा है। छोटी स्क्रीन पर CSS इन्हें एक कॉलम कर देती है।
5. एडमिशन टेबल कॉमन Table है। स्टूडेंट सेल UserCell है। स्टेटस Badge है। टोन डेटा में लिखा है।
6. अटेंडेंस लिस्ट टेबल नहीं है। तीन बार हैं: Present, Absent, Late। चौड़ाई परसेंट में है। कलर CSS क्लास `bar`, `absent` और `late` से आता है।
7. इवेंट में तारीख का छोटा बॉक्स है। amber और green क्लास दूसरे और तीसरे इवेंट का रंग बदलती हैं।
8. फीस के चार छोटे बॉक्स और एक नोट है। नोट में `bi-info-circle` आइकन है।
9. पेज स्क्रॉल करके सब सेक्शन दिखाओ। अगला वीडियो स्टूडेंट की पूरी लिस्ट है।

---

## वीडियो 14 — ऑल स्टूडेंट्स

**टाइटल:** React में स्टूडेंट लिस्ट पेज | सर्च, फिल्टर और टेबल | Campora

**डिस्क्रिप्शन:**

All Students पेज बनाते हैं। ऊपर Add Student बटन, बीच में टूलबार, नीचे स्टूडेंट टेबल। सर्च और सेलेक्ट सिर्फ दिखावट के लिए readOnly या डिफॉल्ट वैल्यू पर हैं। Edit और Remove बटन काम नहीं करेंगे। वे कॉमन Button हैं।

फाइल: `src/pages/StudentsPage.jsx`

डेटा: `students` from mockData.js

अगला वीडियो: Add Student फॉर्म और रेडियो बटन।

#ReactTable #StudentsPage #Campora #ReactJS

**समय:** 12–15 मिनट

**स्क्रीन पर क्या करो**

Toolbar का लेफ्ट हिस्सा:

```jsx
<Toolbar
  left={
    <>
      <Input type="text" placeholder="Search by name or ID" readOnly />
      <Select defaultValue="All Classes" options={["All Classes", "Class 5-B", "Class 8-A", "Class 10-A"]} />
      <Select defaultValue="All Status" options={["All Status", "Active", "Pending"]} />
    </>
  }
  right={<Button variant="ghost" icon="download">Export</Button>}
/>
```

टेबल Panel के अंदर। आखिरी कॉलम की क्लास `actions`। Edit secondary है, Remove danger है। दोनों `size="sm"`।

साइडबार से All Students खोलो। पांच रो दिखाओ: Riya, Aarav, Neha, Vivaan, Sara। स्टेटस के तीन रंग दिखाओ।

**बोलने का स्क्रिप्ट**

1. ऑल स्टूडेंट्स असली काम वाली लिस्ट जैसी दिखती है, पर फिल्टर डेटा नहीं काटते। सेलेक्ट बदलोगे तो लिस्ट वही रहेगी। यह सीमा शुरू में बोल दो।
2. पेज हेडर का बटन Add Student पर ले जाता है। टूलबार का एक्सपोर्ट गोस्ट बटन है।
3. सर्च इनपुट लेबल के बिना है। Toolbar की CSS उसे छोटी चौड़ाई देती है। `readOnly` है, इसलिए टाइपिंग का डेमो मत करना। बोल देना कि प्रोडक्ट में यहाँ स्टेट और फिल्टर लगता।
4. टेबल की पहली सेल UserCell है। आईडी, क्लास और पेरेंट सीधे फील्ड हैं। स्टेटस Badge है।
5. एक्शन कॉलम में दो बटन एक फ्रैगमेंट में हैं। टेबल सेल पर क्लास `actions` है, इसलिए बटन पास-पास रहेंगे।
6. `getRowKey` में `student.id` दो। नाम दो लोगों के एक हो सकते हैं, आईडी नहीं।
7. ब्राउज़र में पांच रो चेक करो। Sara Joshi का बैज लाल On Hold होना चाहिए। अगले वीडियो में उसी फ्लो का फॉर्म बनेगा।

---

## वीडियो 15 — ऐड स्टूडेंट

**टाइटल:** React में Add Student फॉर्म | Input, Select और Radio बटन | Campora

**डिस्क्रिप्शन:**

नए स्टूडेंट का फॉर्म बनाते हैं। नाम, तारीख, क्लास, फोन और पता कॉमन कंपोनेंट से आते हैं। Gender रेडियो बटन है: Female, Male, Other। Save और Cancel दोनों स्टूडेंट लिस्ट पर ले जाते हैं। रिकॉर्ड सेव नहीं होता।

फाइल: `src/pages/AddStudentPage.jsx`

कंपोनेंट: FormCard, FormGrid, FormActions, Input, Select, RadioGroup, Textarea, Button।

अगला वीडियो: अटेंडेंस पेज।

#ReactForm #RadioButton #AddStudent #Campora

**समय:** 12–15 मिनट

**स्क्रीन पर क्या करो**

फॉर्म ग्रिड में यह रेडियो जरूर दिखाओ:

```jsx
<RadioGroup
  label="Gender"
  name="gender"
  value="Female"
  options={["Female", "Male", "Other"]}
/>
```

पता:

```jsx
<Textarea label="Address" full placeholder="Full address" defaultValue="12 Green Avenue, Pune" readOnly />
```

बटन:

```jsx
<FormActions>
  <Button variant="ghost" to="/students">Cancel</Button>
  <Button to="/students">Save Student</Button>
</FormActions>
```

`/students/add` खोलो। Female चुना हुआ दिखाओ। Male पर क्लिक करके रेडियो बदलता दिखाओ। Save पर लिस्ट खुलनी चाहिए। नया नाम लिस्ट में नहीं आएगा। यही बात बोलो।

**बोलने का स्क्रिप्ट**

1. ऐड स्टूडेंट फॉर्म है, डेटाबेस फॉर्म नहीं। वैल्यू भरी हुई हैं, ताकि स्क्रीन खाली न लगे।
2. FormCard सफेद कार्ड है और सबमिट पर पेज को रीलोड होने से रोकता है। Save असल में लिंक है, सबमिट बटन नहीं।
3. ग्रिड दो कॉलम की है। First Name और Last Name एक लाइन में। Date of Birth के बगल Gender।
4. Gender रेडियो ग्रुप है। तीनों का `name` एक है, `gender`। शुरू में Female चुना है। दर्शक क्लिक करके दूसरा चुन सकता है। रिफ्रेश पर फिर Female आ जाएगा, क्योंकि हम स्टेट सेव नहीं कर रहे।
5. Class सेलेक्ट है। पता टेक्स्टएरिया है और `full` से दोनों कॉलम लेता है।
6. इनपुट `readOnly` हैं। रेडियो और सेलेक्ट पढ़ने लायक नहीं हैं, इसलिए दर्शक उन्हें बदलकर देख सकता है। बदली हुई वैल्यू कहीं नहीं जाती।
7. Cancel और Save दोनों `/students` खोलते हैं। Save के बाद लिस्ट में Riya नया रिकॉर्ड बनकर नहीं आएगी। कैमरे पर यह दिखाकर बोलो: UI डेमो में बटन सिर्फ पेज बदलता है।
8. मोबाइल चौड़ाई पर ग्रिड एक कॉलम हो जाता है। समय हो तो ब्राउज़र की चौड़ाई घटाकर दिखाओ।

---

## वीडियो 16 — अटेंडेंस

**टाइटल:** React अटेंडेंस पेज | टेबल के अंदर Select और Input | Campora

**डिस्क्रिप्शन:**

क्लास 8-A की अटेंडेंस स्क्रीन बनाते हैं। टूलबार में क्लास सेलेक्ट और तारीख है। टेबल की हर रो में स्टेटस का ड्रॉपडाउन और रिमार्क का इनपुट है। ये वही कॉमन Select और Input हैं, बिना लेबल के। Save Attendance बटन डेटा सेव नहीं करता।

फाइल: `src/pages/AttendancePage.jsx`

डेटा: `attendanceRows`

अगला वीडियो: टीचर और क्लास पेज।

#Attendance #ReactTable #Campora #ReactJS

**समय:** 10–13 मिनट

**स्क्रीन पर क्या करो**

कॉलम में:

```jsx
{
  key: "status",
  header: "Status",
  render: (row) => <Select defaultValue={row.status} options={["Present", "Absent", "Late"]} />,
},
{
  key: "remark",
  header: "Remark",
  render: (row) => (
    <Input type="text" placeholder="Optional note" defaultValue={row.remark} readOnly />
  ),
},
```

Aarav की रो Late और Bus delay। Vivaan की रो Absent और Sick leave। चिप में लिखा है: Present 28 · Absent 2 · Late 1।

**बोलने का स्क्रिप्ट**

1. अटेंडेंस स्टूडेंट मेनू का तीसरा पेज है। साइडबार में यह लिंक Students के अंदर है, अलग टॉप लेवल मेनू नहीं।
2. ऊपर सेव बटन प्राइमरी है। आइकन `check2-circle`। क्लिक पर कुछ नहीं होता।
3. टूलबार की दाईं तरफ चिप है, संख्या का सारांश। यह संख्या टेबल से कैलकुलेट नहीं हो रही। हमने लिख दी है।
4. टेबल के अंदर भी फॉर्म कंट्रोल हो सकते हैं। Select और Input बिना लेबल के रेंडर होते हैं, इसलिए सेल के अंदर सिर्फ ड्रॉपडाउन और इनपुट दिखते हैं।
5. हर रो का अपना `defaultValue` है। Aarav लेट है। Vivaan एब्सेंट है। बाकी प्रेजेंट।
6. रिमार्क `readOnly` है। स्टेटस ड्रॉपडाउन बदला जा सकता है, पर सेव नहीं होगा।
7. पेज खोलो और साइडबार में Attendance एक्टिव दिखाओ। Students ग्रुप खुला रहना चाहिए। अगले वीडियो में टीचर और क्लास दो पेज एक साथ बनेंगे।

---

## वीडियो 17 — टीचर और क्लास

**टाइटल:** React में Teachers और Classes पेज | एक जैसी टेबल, दो स्क्रीन | Campora

**डिस्क्रिप्शन:**

एक ही Table कंपोनेंट से दो पेज बनाते हैं। Teachers में सर्च, डिपार्टमेंट फिल्टर और स्टेटस बैज है। Classes में ऊपर चार स्टैट कार्ड हैं और नीचे सेक्शन, टीचर और रूम की टेबल है। Add Teacher, Add Class, Edit और View बटन सिर्फ UI हैं।

फाइलें:
- src/pages/TeachersPage.jsx
- src/pages/ClassesPage.jsx

अगला वीडियो: सब्जेक्ट और टाइमटेबल।

#Teachers #Classes #ReactJS #Campora

**समय:** 13–15 मिनट

**स्क्रीन पर क्या करो**

टीचर टेबल: नाम UserCell, सब्जेक्ट, क्लास, फोन, Badge, Edit बटन।

क्लास स्टैट: `classStats` को StatCard पर मैप करो। टेबल की की `` `${item.name}-${item.section}` `` रखो, क्योंकि क्लास 8 कई सेक्शन की हो सकती है।

दोनों URL खोलो: `/teachers` और `/classes`। Ananya Nair का बैज On Leave दिखाओ।

**बोलने का स्क्रिप्ट**

1. आज दो पेज हैं, पर नया कंपोनेंट नहीं। यही इस सीरीज का फायदा है।
2. टीचर पेज का हेडर Add Teacher बटन दिखाता है। वह कहीं नहीं ले जाता। टूलबार में सर्च और डिपार्टमेंट सेलेक्ट है।
3. तीन टीचर हैं। Priya गणित, Rohan साइंस, Ananya अंग्रेजी। Ananya की टोन warning है, इसलिए बैज पीला On Leave है।
4. क्लास पेज पर टेबल से पहले चार आँकड़े हैं। टोटल क्लास 42, औसत स्टूडेंट 30, रूम 38, क्लास टीचर 42। यह StatCard वही है जो डैशबोर्ड पर था।
5. टेबल में सेक्शन अलग कॉलम है। Priya कक्षा 8 सेक्शन A की क्लास टीचर है। रूम नंबर R-204 है।
6. View बटन secondary और स्मॉल है। वह डिटेल पेज नहीं खोलता।
7. साइडबार में Teachers और Classes सीधे लिंक हैं। Students ड्रॉपडाउन इन पेजों पर अपने आप खुला नहीं रहना चाहिए, जब तक दर्शक ने उसे खुद न खोला हो।
8. दोनों पेज ब्राउज़र में एक-एक बार खोलकर वीडियो खत्म करो।

---

## वीडियो 18 — सब्जेक्ट और टाइमटेबल

**टाइटल:** React Subjects टेबल और Timetable ग्रिड | Campora

**डिस्क्रिप्शन:**

Subjects पेज टेबल है। Timetable पेज टेबल नहीं है। वह CSS ग्रिड है: समय का कॉलम और सोमवार से शुक्रवार। क्लास चुनने का सेलेक्ट पेज हेडर में है और क्लास `field-control` लेता है। डेटा timetableRows से आता है।

फाइलें:
- src/pages/SubjectsPage.jsx
- src/pages/TimetablePage.jsx

अगला वीडियो: एग्जाम और फीस।

#Timetable #ReactCSSGrid #Campora #ReactJS

**समय:** 13–15 मिनट

**स्क्रीन पर क्या करो**

टाइमटेबल की रो को `display: contents` वाले डिव में रखो, ताकि बच्चे ग्रिड के असली आइटम बनें। की में इंडेक्स मिलाओ, क्योंकि Maths एक दिन में दो बार आ सकता है।

```jsx
{timetableRows.map((row) => (
  <div key={row.time} style={{ display: "contents" }}>
    <div className="tt-time">{row.time}</div>
    {row.slots.map(([subject, teacher], index) => (
      <div className="tt-cell" key={`${row.time}-${index}`}>
        <strong>{subject}</strong>
        <span>{teacher}</span>
      </div>
    ))}
  </div>
))}
```

हेडर का सेलेक्ट:

```jsx
<Select className="field-control" defaultValue="Class 8-A" options={["Class 8-A", "Class 5-B", "Class 10-A"]} />
```

सब्जेक्ट में Mathematics से Physical Education तक पांच रो दिखाओ। टाइप Core, Elective और Activity है।

**बोलने का स्क्रिप्ट**

1. सब्जेक्ट पेज आसान टेबल है। कोड MATH, SCI, ENG, CS और PE हैं। आखिरी कॉलम में Edit बटन है।
2. टाइमटेबल को टेबल टैग से नहीं बनाया। CSS ग्रिड है। पहली लाइन हेडर है: Time, Mon, Tue, Wed, Thu, Fri।
3. हर समय की रो में छह चीजें हैं। एक समय, और पाँच पीरियड। ग्रिड को सीधे बच्चे चाहिए। React में हम एक डिव से रो लपेटते हैं, पर `display: contents` से वह डिव खुद ग्रिड आइटम नहीं बनता। उसके बच्चे बनते हैं।
4. की सिर्फ सब्जेक्ट नाम नहीं हो सकती। सोम और गुरु दोनों में Maths और P. Deshmukh है। इसलिए की में समय और इंडेक्स है।
5. सेलेक्ट क्लास बदलने पर ग्रिड नहीं बदलता। तीनों ऑप्शन दिखावट हैं। बोल देना।
6. छोटी स्क्रीन पर ग्रिड क्षैतिज स्क्रॉल होता है। `timetable-scroll` यही काम करता है। ब्राउज़र सँकरा करके स्क्रॉल दिखाओ।
7. शुक्रवार का पीरियड भी मौजूद है। अगर विंडो छोटी हो तो दाईं तरफ स्क्रॉल करके CS और Art दिखाओ।

---

## वीडियो 19 — एग्जाम और फीस

**टाइटल:** React Exams और Fees पेज | बैज के तीन रंग | Campora

**डिस्क्रिप्शन:**

एग्जाम शेड्यूल और फीस कलेक्शन की दो स्क्रीन बनाते हैं। एग्जाम में Upcoming, Completed और Scheduled तीन स्टेटस हैं। Scheduled बैज पर अलग टोन नहीं है। फीस पेज पर चार स्टैट कार्ड और हाल की पेमेंट टेबल है। Paid, Partial और Overdue बैज हैं।

फाइलें:
- src/pages/ExamsPage.jsx
- src/pages/FeesPage.jsx

अगला वीडियो: ट्रांसपोर्ट और सेटिंग्स।

#Fees #Exams #ReactJS #Campora

**समय:** 12–14 मिनट

**स्क्रीन पर क्या करो**

एग्जाम की आखिरी कॉलम में बटन का टेक्स्ट डेटा से आए: Manage या Results।

फीस हेडर में दो बटन: Send Reminders गोस्ट, Record Payment प्राइमरी।

पेमेंट टेबल Panel के टाइटल के साथ। View all एक साधारण `<a href="#payments">` है।

`/exams` और `/fees` दोनों ब्राउज़र में खोलो।

**बोलने का स्क्रिप्ट**

1. एग्जाम पेज लिस्ट है। मिड टर्म अभी आने वाला है, इसलिए बैज पीला Upcoming है। यूनिट टेस्ट पूरा हो चुका है, बैज हरा Completed है। प्री बोर्ड Scheduled है। उसके पास टोन नहीं है, इसलिए बैज न्यूट्रल रहता है।
2. बटन का नाम भी डेटा में है। किसी रो पर Manage, किसी पर Results। क्लिक खाली है।
3. फीस पेज डैशबोर्ड के फीस नंबर दोहराता है: कलेक्टेड 18.4 लाख, पेंडिंग 1.6 लाख, ओवरड्यू 42 हजार, स्कॉलरशिप 64।
4. Send Reminders और Record Payment दोनों दिखावट हैं।
5. टेबल में रसीद नंबर, स्टूडेंट, टर्म और राशि है। Riya की फीस Paid है। Aarav Partial। Vivaan Overdue। तीनों बैज कॉमन Badge से आ रहे हैं।
6. इस पेज पर नया कंपोनेंट नहीं बना। अगर टेबल या बैज में बदलाव करना हो तो कॉमन फाइल में एक बार करना होगा। यही बात एक वाक्य में कह देना।
7. दोनों पेज दिखाकर अगले वीडियो का नाम बोलो: ट्रांसपोर्ट और सेटिंग्स।

---

## वीडियो 20 — ट्रांसपोर्ट और सेटिंग्स

**टाइटल:** React Transport टेबल और Settings टॉगल | Campora

**डिस्क्रिप्शन:**

सीरीज के आखिरी दो पेज। ट्रांसपोर्ट में बस रूट, ड्राइवर और स्टेटस हैं। सेटिंग्स में स्कूल का नाम, बोर्ड, साल और चार नोटिफिकेशन स्विच हैं। स्विच क्लिक पर ऑन और ऑफ होते हैं, पर यह बदलाव सेव नहीं होता। रिफ्रेश पर शुरू की स्थिति वापस आ जाती है।

फाइलें:
- src/pages/TransportPage.jsx
- src/pages/SettingsPage.jsx

डेटा: `routes`, `notificationSettings`

अगला वीडियो: कोलैप्स साइडबार में Students क्लिक का फिक्स।

#Settings #Transport #ReactJS #Campora

**समय:** 13–15 मिनट

**स्क्रीन पर क्या करो**

सेटिंग्स में `useState(notificationSettings)` रखो। Toggle का `onClick` उसी `id` वाले आइटम का `on` पलट दे।

```jsx
<Toggle
  label={item.label}
  on={item.on}
  onClick={() =>
    setToggles((current) =>
      current.map((toggle) =>
        toggle.id === item.id ? { ...toggle, on: !toggle.on } : toggle,
      ),
    )
  }
/>
```

स्कूल नाम, बोर्ड और साल Input और Select से। Save Changes खाली बटन।

ट्रांसपोर्ट में West Park का स्टेटस Maintenance दिखाओ।

सेटिंग्स पर Exam schedule updates वाले स्विच को कैमरे पर ऑन करो।

**बोलने का स्क्रिप्ट**

1. ट्रांसपोर्ट फिर एक टेबल है। तीन रूट हैं। नॉर्थ और ईस्ट एक्टिव हैं। वेस्ट पार्क मेंटेनेंस पर है, इसलिए बैज पीला है।
2. सेटिंग्स दो कार्ड में बँटी है। बायाँ स्कूल प्रोफाइल। दायाँ नोटिफिकेशन। क्लास `settings-grid` है।
3. स्कूल का नाम Campora Public School है। बोर्ड CBSE है। साल 2026-27 है। ये इनपुट readOnly हैं।
4. नोटिफिकेशन असली सेटिंग नहीं है, पर स्विच हिलता है। इसके लिए स्टेट चाहिए। शुरू की लिस्ट mock डेटा से आती है।
5. Toggle कंपोनेंट लेबल और ऑन की स्थिति लेता है। क्लिक पर हम नई ऐरे बनाते हैं। जिस स्विच का आईडी मिला, उसका `on` उलटा। बाकी वही रहते हैं। सीधे मौजूदा ऑब्जेक्ट को मत बदलो।
6. चार स्विच में से तीन शुरू में ऑन हैं। एग्जाम वाला ऑफ है। कैमरे पर उसे ऑन करो। फिर पेज रिफ्रेश करो। वह फिर ऑफ हो जाएगा। बोलो: स्टेट सिर्फ इस पेज के मेमोरी में था।
7. Save Changes भी सेव नहीं करता। बटन इसलिए है क्योंकि असली सेटिंग स्क्रीन पर सेव दिखता है।
8. इन दो पेजों के साथ सारी स्क्रीन बन गईं। अगले वीडियो में एक असली इस्तेमाल की दिक्कत ठीक करेंगे।

---

## वीडियो 21 — कोलैप्स मेनू फिक्स

**टाइटल:** React साइडबार बग फिक्स | कोलैप्स में Students क्लिक पर मेनू खोलना | Campora

**डिस्क्रिप्शन:**

साइडबार छोटा होने पर Dashboard, Teachers और बाकी आइकन काम करते हैं, क्योंकि वे लिंक हैं। Students आइकन दबाने पर कुछ नहीं दिखता, क्योंकि उसका सबमेनू कोलैप्स CSS में छिपा है। इस वीडियो में क्लिक को ऐसा बनाते हैं कि साइडबार फिर से खुले और Students का ड्रॉपडाउन दिखे।

फाइलें:
- src/components/layout/Sidebar.jsx
- src/components/layout/AdminLayout.jsx

व्यवहार: कोलैप्स अवस्था में Students क्लिक, फिर `onExpand` और `studentsOpen` true।

अगला वीडियो: पूरी वेबसाइट चेक और प्रोडक्शन बिल्ड।

#BugFix #ReactSidebar #Campora #ReactJS

**समय:** 10–14 मिनट

**स्क्रीन पर क्या करो**

पहले बग दिखाओ। डैशबोर्ड खोलो। कोलैप्स दबाओ। Teachers आइकन पर क्लिक करके पेज बदलता दिखाओ। फिर Students आइकन पर क्लिक करो। कुछ न खुलने दो।

फिर `Sidebar` के Students बटन में:

```jsx
onClick={() => {
  if (collapsed) {
    onExpand?.();
    setStudentsOpen(true);
    return;
  }
  setStudentsOpen((open) => !open);
}}
```

`AdminLayout` से प्रॉप पास करो:

```jsx
<Sidebar
  collapsed={collapsed}
  mobileOpen={mobileOpen}
  onNavigate={() => setMobileOpen(false)}
  onExpand={() => setCollapsed(false)}
/>
```

फिर वही टेस्ट: कोलैप्स, Students क्लिक, साइडबार खुले, All Students, Add Student और Attendance दिखें।

**बोलने का स्क्रिप्ट**

1. आज नया पेज नहीं। एक दिक्कत है जो इस्तेमाल करते समय दिखी।
2. साइडबार जब खुला है, Students ड्रॉपडाउन खुलता और बंद होता है। जब साइडबार कोलैप्स होता है, CSS सबमेनू पर `display: none` लगा देती है। आइकन बचता है, लिखाइश छिप जाती है।
3. दूसरे मेनू आइकन लिंक हैं। क्लिक पर पेज खुल जाता है, इसलिए वे कोलैप्स में भी सही लगते हैं।
4. Students लिंक नहीं है। वह बटन है। क्लिक सिर्फ ड्रॉपडाउन टॉगल करता था। ड्रॉपडाउन छिपा होने से दर्शक को लगता है कि क्लिक खाली है।
5. सही व्यवहार यह है: अगर साइडबार बंद है और यूजर Students दबाता है, तो पहले साइडबार खोलो, फिर ड्रॉपडाउन खोलो। यूजर को तीन लिंक पढ़ने की जगह मिलनी चाहिए।
6. साइडबार को यह नहीं पता कि लेआउट की स्टेट कैसे बदले। इसलिए `onExpand` प्रॉप है। AdminLayout उस प्रॉप में `setCollapsed(false)` देता है।
7. साइडबार खुला हो तो यह क्लिक अब भी सिर्फ ड्रॉपडाउन टॉगल करेगा। वह व्यवहार मत बदलो।
8. मोबाइल पर कोलैप्स बटन दिखता ही नहीं। वहाँ मेनू ओवरले से खुलता है। यह फिक्स डेस्कटॉप कोलैप्स के लिए है।
9. ब्राउज़र में पहले और बाद का फर्क दिखाओ। वीडियो का आखिरी शॉट खुला हुआ Students मेनू हो।

---

## वीडियो 22 — फाइनल डेमो और बिल्ड

**टाइटल:** Campora React UI पूरा डेमो | सारे पेज और npm run build

**डिस्क्रिप्शन:**

सीरीज के आखिरी वीडियो में हम लॉगिन से सेटिंग्स तक हर पेज एक बार खोलते हैं। उसके बाद प्रोडक्शन बिल्ड बनाते हैं। `npm run build` फाइलें `dist` फोल्डर में डालता है। `npm run preview` उस बिल्ड को लोकल पर चलाता है।

कमांड:

```bash
npm run build
npm run preview
```

यह प्रोजेक्ट UI डेमो है। आगे बैकएंड जोड़ने का जगह साफ है: पेज कॉमन कंपोनेंट इस्तेमाल करते हैं, डेटा `mockData.js` में है।

#ReactBuild #Vite #Campora #ReactJS #ProjectComplete

**समय:** 12–15 मिनट

**स्क्रीन पर क्या करो**

इस क्रम में क्लिक करो, हर पेज पर दो सेकंड रुककर नाम पढ़ो:

1. `/login` और Login बटन
2. डैशबोर्ड के चार कार्ड
3. Students ड्रॉपडाउन: All Students, Add Student, Attendance
4. Teachers, Classes, Subjects
5. Timetable में दाईं तरफ स्क्रॉल
6. Exams, Fees, Transport
7. Settings में एक टॉगल
8. साइडबार कोलैप्स करके Students क्लिक
9. Logout से लॉगिन

टर्मिनल:

```bash
npm run build
npm run preview
```

`dist` फोल्डर दिखाओ। बोलना: यही फोल्डर होस्टिंग पर जाता है। सोर्स `src` होस्टिंग पर अपलोड करने की जरूरत नहीं, अगर बिल्ड डिप्लॉय कर रहे हो।

**बोलने का स्क्रिप्ट**

1. सारे पेज बन चुके हैं। आज पूरी यात्रा एक बार चलाकर देखते हैं, फिर बिल्ड निकालते हैं।
2. लॉगिन खोलो। कोई भी पासवर्ड चलेगा, क्योंकि चेक नहीं है। बटन डैशबोर्ड खोलेगा।
3. डैशबोर्ड पर नंबर, एडमिशन, अटेंडेंस और इवेंट एक नज़र में दिखाओ।
4. साइडबार से हर पेज खोलो। यह बताओ कि साइडबार और टॉपबार वही रहते हैं, बीच का हिस्सा Outlet बदलता है।
5. ऐड स्टूडेंट पर रेडियो दिखाओ। अटेंडेंस पर ड्रॉपडाउन दिखाओ। सेटिंग्स पर स्विच दिखाओ।
6. कोलैप्स टेस्ट फिर से करो, क्योंकि पिछला वीडियो उसी बग का था।
7. `npm run build` प्रोडक्शन फाइल बनाता है। Vite JavaScript और CSS को छोटा करके `dist` में रखता है। इमेज भी वहीं चली जाती है।
8. `npm run preview` उस `dist` को चलाता है। डेव सर्वर और प्रीव्यू में अंतर यह है कि प्रीव्यू असली बिल्ड दिखाता है।
9. इस सीरीज में हमने इंस्टॉल किया, फॉन्ट और आइकन जोड़े, एक CSS फाइल जोड़ी, राउटर लगाया, कॉमन कंपोनेंट बनाए और हर स्क्रीन भरी।
10. अगर आगे इस प्रोजेक्ट में असली लॉगिन या एपीआई लगाना हो, तो पेज का डिजाइन नहीं टूटेगा। `mockData` की जगह एपीआई का डेटा आ सकता है। कॉमन टेबल और इनपुट वैसे ही रहेंगे।
11. सीरीज यहीं पूरी होती है। देखने के लिए धन्यवाद। कमेंट में बताओ अगला हिस्सा बैकएंड का चाहिए या किसी एक पेज को और विस्तार से देखना है।

---

## YouTube पर अपलोड करते समय

हर वीडियो के टाइटल और डिस्क्रिप्शन को ऊपर वाले सेक्शन से कॉपी करो।

प्लेलिस्ट का डिस्क्रिप्शन:

Campora School Admin Panel को React JS में बनाने की पूरी हिंदी सीरीज। Vite इंस्टॉल, Google Font, Bootstrap Icons, CSS, React Router, कॉमन कंपोनेंट, और लॉगिन से सेटिंग्स तक हर स्क्रीन। यह UI डेमो है, बैकएंड नहीं।

थंबनेल पर छोटा टेक्स्ट रखो, जैसे `PART 4` और `Google Font`। एक ही फॉन्ट और टील रंग पूरे थंबनेल पर रखो, ताकि प्लेलिस्ट एक जैसी दिखे।

एंड स्क्रीन में अगला वीडियो वही लगाओ जो उस वीडियो के डिस्क्रिप्शन में “अगला वीडियो” लिखा है।
