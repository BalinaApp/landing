export type Country = { iso: string; name: string; dial: string; flag: string; flagUrl: string; format: string };

function flagFromIso(iso: string) {
  return iso
    .toUpperCase()
    .replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));
}

// Windows Chromium ships no flag-emoji glyphs (renders the 2-letter fallback text instead), so the
// emoji is only used as an aria-label/alt fallback — the actual visual is this Twemoji flag SVG,
// which renders identically on every OS.
function flagUrlFromIso(iso: string) {
  const codepoints = iso
    .toUpperCase()
    .split("")
    .map((c) => (127397 + c.charCodeAt(0)).toString(16))
    .join("-");
  return `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codepoints}.svg`;
}

// { iso, name (Türkçe), dial code, format mask ("#" = digit) }
const raw: [string, string, string, string?][] = [
  ["TR", "Türkiye", "90", "5## ### ## ##"],
  ["US", "Amerika Birleşik Devletleri", "1", "(###) ###-####"],
  ["GB", "Birleşik Krallık", "44", "#### ######"],
  ["DE", "Almanya", "49", "### #######"],
  ["FR", "Fransa", "33", "# ## ## ## ##"],
  ["NL", "Hollanda", "31", "# ########"],
  ["BE", "Belçika", "32", "### ## ## ##"],
  ["AT", "Avusturya", "43", "### #######"],
  ["CH", "İsviçre", "41", "## ### ## ##"],
  ["IT", "İtalya", "39", "### #######"],
  ["ES", "İspanya", "34", "### ## ## ##"],
  ["PT", "Portekiz", "351", "### ### ###"],
  ["IE", "İrlanda", "353", "## ### ####"],
  ["DK", "Danimarka", "45", "## ## ## ##"],
  ["SE", "İsveç", "46", "##-### ## ##"],
  ["NO", "Norveç", "47", "### ## ###"],
  ["FI", "Finlandiya", "358", "## ### ## ##"],
  ["PL", "Polonya", "48", "### ### ###"],
  ["CZ", "Çekya", "420", "### ### ###"],
  ["SK", "Slovakya", "421", "### ### ###"],
  ["HU", "Macaristan", "36", "## ### ####"],
  ["RO", "Romanya", "40", "### ### ###"],
  ["BG", "Bulgaristan", "359", "## ### ####"],
  ["GR", "Yunanistan", "30", "### ### ####"],
  ["HR", "Hırvatistan", "385", "## ### ####"],
  ["SI", "Slovenya", "386", "## ### ###"],
  ["RS", "Sırbistan", "381", "## #######"],
  ["AL", "Arnavutluk", "355", "## ### ####"],
  ["MK", "Kuzey Makedonya", "389", "## ### ###"],
  ["BA", "Bosna Hersek", "387", "## ######"],
  ["ME", "Karadağ", "382", "## ######"],
  ["XK", "Kosova", "383", "## ######"],
  ["UA", "Ukrayna", "380", "## ### ## ##"],
  ["MD", "Moldova", "373", "#### ####"],
  ["BY", "Belarus", "375", "## #######"],
  ["RU", "Rusya", "7", "### ###-##-##"],
  ["EE", "Estonya", "372", "#### ####"],
  ["LV", "Letonya", "371", "## ### ###"],
  ["LT", "Litvanya", "370", "### #####"],
  ["IS", "İzlanda", "354", "### ####"],
  ["LU", "Lüksemburg", "352", "### ###"],
  ["MT", "Malta", "356", "#### ####"],
  ["CY", "Kıbrıs", "357", "## ######"],
  ["AZ", "Azerbaycan", "994", "## ### ## ##"],
  ["GE", "Gürcistan", "995", "### ### ###"],
  ["AM", "Ermenistan", "374", "## ######"],
  ["KZ", "Kazakistan", "7", "### ###-##-##"],
  ["UZ", "Özbekistan", "998", "## ### ## ##"],
  ["TM", "Türkmenistan", "993", "# ######"],
  ["TJ", "Tacikistan", "992", "## ### ####"],
  ["KG", "Kırgızistan", "996", "### ######"],
  ["AE", "Birleşik Arap Emirlikleri", "971", "## ### ####"],
  ["SA", "Suudi Arabistan", "966", "## ### ####"],
  ["QA", "Katar", "974", "#### ####"],
  ["KW", "Kuveyt", "965", "#### ####"],
  ["BH", "Bahreyn", "973", "#### ####"],
  ["OM", "Umman", "968", "#### ####"],
  ["JO", "Ürdün", "962", "# #### ####"],
  ["LB", "Lübnan", "961", "## ### ###"],
  ["IL", "İsrail", "972", "##-###-####"],
  ["PS", "Filistin", "970", "## ### ####"],
  ["IQ", "Irak", "964", "### ### ####"],
  ["IR", "İran", "98", "### ### ####"],
  ["SY", "Suriye", "963", "## #### ###"],
  ["YE", "Yemen", "967", "### ### ###"],
  ["EG", "Mısır", "20", "## #### ####"],
  ["MA", "Fas", "212", "##-####-###"],
  ["DZ", "Cezayir", "213", "### ### ###"],
  ["TN", "Tunus", "216", "## ### ###"],
  ["LY", "Libya", "218", "##-#######"],
  ["SD", "Sudan", "249", "## ### ####"],
  ["ET", "Etiyopya", "251", "## ### ####"],
  ["KE", "Kenya", "254", "### ######"],
  ["TZ", "Tanzanya", "255", "### ######"],
  ["UG", "Uganda", "256", "### ######"],
  ["GH", "Gana", "233", "## ### ####"],
  ["NG", "Nijerya", "234", "### ### ####"],
  ["CI", "Fildişi Sahili", "225", "## ## ## ## ##"],
  ["SN", "Senegal", "221", "## ### ## ##"],
  ["CM", "Kamerun", "237", "# ## ## ## ##"],
  ["ZA", "Güney Afrika", "27", "## ### ####"],
  ["ZM", "Zambiya", "260", "## #######"],
  ["ZW", "Zimbabve", "263", "## ### ####"],
  ["MZ", "Mozambik", "258", "## ### ####"],
  ["AO", "Angola", "244", "### ### ###"],
  ["CN", "Çin", "86", "### #### ####"],
  ["JP", "Japonya", "81", "##-####-####"],
  ["KR", "Güney Kore", "82", "##-####-####"],
  ["KP", "Kuzey Kore", "850", "### ### ####"],
  ["IN", "Hindistan", "91", "##### #####"],
  ["PK", "Pakistan", "92", "### #######"],
  ["BD", "Bangladeş", "880", "####-######"],
  ["LK", "Sri Lanka", "94", "## ### ####"],
  ["NP", "Nepal", "977", "###-#######"],
  ["MM", "Myanmar", "95", "# ### ####"],
  ["TH", "Tayland", "66", "##-###-####"],
  ["VN", "Vietnam", "84", "## #### ###"],
  ["KH", "Kamboçya", "855", "## ### ###"],
  ["LA", "Laos", "856", "## ## ### ###"],
  ["MY", "Malezya", "60", "##-#### ####"],
  ["SG", "Singapur", "65", "#### ####"],
  ["ID", "Endonezya", "62", "###-###-####"],
  ["PH", "Filipinler", "63", "### ### ####"],
  ["TW", "Tayvan", "886", "#### ######"],
  ["HK", "Hong Kong", "852", "#### ####"],
  ["MO", "Makao", "853", "#### ####"],
  ["MN", "Moğolistan", "976", "#### ####"],
  ["AF", "Afganistan", "93", "## ### ####"],
  ["AU", "Avustralya", "61", "### ### ###"],
  ["NZ", "Yeni Zelanda", "64", "##-### ####"],
  ["FJ", "Fiji", "679", "### ####"],
  ["CA", "Kanada", "1", "(###) ###-####"],
  ["MX", "Meksika", "52", "## #### ####"],
  ["BR", "Brezilya", "55", "## #####-####"],
  ["AR", "Arjantin", "54", "## ####-####"],
  ["CL", "Şili", "56", "# #### ####"],
  ["CO", "Kolombiya", "57", "### ### ####"],
  ["PE", "Peru", "51", "### ### ###"],
  ["VE", "Venezuela", "58", "###-#######"],
  ["EC", "Ekvador", "593", "##-###-####"],
  ["BO", "Bolivya", "591", "# ### ####"],
  ["PY", "Paraguay", "595", "### ######"],
  ["UY", "Uruguay", "598", "# ### ## ##"],
  ["CU", "Küba", "53", "# #######"],
  ["DO", "Dominik Cumhuriyeti", "1", "(###) ###-####"],
  ["JM", "Jamaika", "1", "(###) ###-####"],
  ["PA", "Panama", "507", "####-####"],
  ["CR", "Kosta Rika", "506", "####-####"],
  ["GT", "Guatemala", "502", "####-####"],
  ["HN", "Honduras", "504", "####-####"],
  ["SV", "El Salvador", "503", "####-####"],
  ["NI", "Nikaragua", "505", "####-####"],
];

export const countries: Country[] = raw.map(([iso, name, dial, format]) => ({
  iso,
  name,
  dial,
  flag: flagFromIso(iso),
  flagUrl: flagUrlFromIso(iso),
  format: format ?? "### ### ## ##",
}));

export const defaultCountry = countries[0];

export function formatPhoneForCountry(digits: string, format: string) {
  let out = "";
  let di = 0;
  for (let i = 0; i < format.length && di < digits.length; i++) {
    if (format[i] === "#") {
      out += digits[di];
      di++;
    } else {
      out += format[i];
    }
  }
  return out;
}
