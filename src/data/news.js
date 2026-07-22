// Health News & Insights.
//
// Each item is a full, readable article with its own page (/news/:slug) and
// links out to LIVE Google News results for its topic, plus trusted sources.
// These are evidence-based health explainers written for the site — edit or
// add freely. For a true auto-updating live feed, see the note in the README.

const slugify = (s) =>
  s.toLowerCase().replace(/[’'"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 70)

// Live Google News search for a topic (opens current, real headlines).
export const googleNewsUrl = (q) =>
  `https://news.google.com/search?q=${encodeURIComponent(q)}%20when%3A30d&hl=en-US`

// Trusted live sources for the "Live health headlines" panel.
export const LIVE_SOURCES = [
  {
    id: 'gnews',
    label: 'Google News · Health',
    desc: 'Current health & medical headlines from around the world.',
    url: 'https://news.google.com/search?q=health%20medicine&hl=en-US',
  },
  {
    id: 'trends',
    label: 'Google Trends · Health',
    desc: 'See which health topics are trending right now.',
    url: 'https://trends.google.com/trends/explore?cat=45',
  },
  {
    id: 'who',
    label: 'WHO · News',
    desc: 'Official updates from the World Health Organization.',
    url: 'https://www.who.int/news',
  },
  {
    id: 'cdc',
    label: 'CDC · Newsroom',
    desc: 'Public-health news and alerts from the CDC.',
    url: 'https://www.cdc.gov/media/index.html',
  },
]

const RAW = [
  {
    kind: 'Trending',
    category: 'signs',
    headline: 'Why doctors keep urging earlier screening for “silent” conditions',
    summary:
      'High blood pressure, diabetes and kidney disease often develop for years with no symptoms. Here’s why simple, regular checks are back in the spotlight.',
    date: '2026-07-15',
    readTime: 4,
    hot: true,
    topic: 'health screening blood pressure diabetes',
    lead: 'Some of the most consequential health conditions share an unsettling trait: they cause no symptoms until they are advanced. High blood pressure, type 2 diabetes and chronic kidney disease can all progress silently for years, which is why health bodies keep returning to the same message — get checked before you feel unwell.',
    sections: [
      {
        h: 'The problem with “feeling fine”',
        p: 'Feeling well is reassuring, but it is not the same as being well. Conditions like hypertension quietly strain the heart, kidneys and blood vessels long before any warning sign appears. By the time symptoms show up, damage may already be done — damage that early detection could have prevented or slowed.',
      },
      {
        h: 'The checks that matter most',
        list: [
          'Blood pressure — quick, painless, and the single most valuable routine check',
          'Blood sugar (HbA1c or fasting glucose) — to catch prediabetes and diabetes early',
          'Kidney function (a simple blood and urine test) — especially with diabetes or high blood pressure',
          'Cholesterol — part of understanding your heart-disease risk',
        ],
      },
      {
        h: 'Who should pay closest attention',
        p: 'Risk rises with age, a family history, excess weight around the middle, and conditions like diabetes or high blood pressure. If any of those apply to you, regular screening is one of the highest-value things you can do for your long-term health.',
      },
    ],
  },
  {
    kind: 'Seasonal',
    category: 'infections',
    headline: 'Sore throats are surging — when is it more than a passing bug?',
    summary:
      'As seasonal viruses circulate, clinics see a familiar rise in sore throats. Most are harmless, but a few signs mean it’s worth getting checked.',
    date: '2026-07-12',
    readTime: 4,
    topic: 'sore throat strep tonsillitis season',
    lead: 'Every season brings a wave of sore throats, and every season brings the same question: is this just a cold, or something that needs treatment? The reassuring answer is that most sore throats are viral and clear on their own — but a handful of features are worth knowing.',
    sections: [
      {
        h: 'Viral vs bacterial',
        p: 'Viral sore throats usually travel with other cold symptoms — a runny nose, a cough, mild fever. Bacterial infections like strep throat more often come without a cough, but with a higher fever, swollen neck glands, and white or yellow patches on the tonsils.',
      },
      {
        h: 'Signs it’s worth a visit',
        list: [
          'White or yellow patches on the tonsils',
          'High fever with swollen, tender neck glands',
          'Severe pain on swallowing, or a muffled voice',
          'Symptoms that worsen rather than ease after a few days',
        ],
      },
      {
        h: 'When it’s an emergency',
        p: 'Difficulty breathing, drooling, or an inability to swallow are red flags that need urgent care. Short of that, rest, fluids and simple pain relief handle most sore throats while your immune system does its work.',
      },
    ],
  },
  {
    kind: 'Nutrition',
    category: 'nutrition',
    headline: 'The everyday foods researchers keep linking to heart health',
    summary:
      'No single “superfood” protects your heart — but a familiar cast of affordable, everyday foods keeps showing up in the research.',
    date: '2026-07-08',
    readTime: 5,
    topic: 'foods heart health research diet',
    lead: 'Headlines love a miracle food, but the science tells a calmer, more useful story. Heart health is built from patterns, not single ingredients — and the foods that keep appearing in the research are refreshingly ordinary and affordable.',
    sections: [
      {
        h: 'The usual (healthy) suspects',
        list: [
          'Vegetables, fruit and legumes — fibre, potassium and antioxidants',
          'Oily fish — a source of heart-friendly omega-3 fats',
          'Whole grains instead of refined ones',
          'Olive oil, nuts and seeds in place of heavily processed fats',
          'Garlic, which research links to modest blood-pressure benefits',
        ],
      },
      {
        h: 'Patterns beat single foods',
        p: 'Diets like the Mediterranean pattern work not because of one hero ingredient, but because of the overall mix: more plants, more healthy fats, less ultra-processed food and added sugar. Small, consistent swaps compound over time.',
      },
      {
        h: 'What to cut back on',
        p: 'The other half of the equation is easing off the things that quietly add up: sugary drinks, ultra-processed snacks, and excess salt, which raises blood pressure. You do not need perfection — you need a direction.',
      },
    ],
  },
  {
    kind: 'Awareness',
    category: 'organ',
    headline: 'Fatty liver disease is now remarkably common — and often silent',
    summary:
      'Non-alcoholic fatty liver disease affects a large share of adults, usually without symptoms. The encouraging part: it often improves with everyday changes.',
    date: '2026-07-03',
    readTime: 5,
    topic: 'fatty liver disease NAFLD',
    lead: 'One of the most common liver conditions in the world is one many people have never heard of. Non-alcoholic fatty liver disease — a buildup of fat inside liver cells — affects a large and growing share of adults, and it usually causes no symptoms until it is advanced.',
    sections: [
      {
        h: 'Why it’s on the rise',
        p: 'Fatty liver is closely tied to excess weight, high blood sugar and diets heavy in added sugar and ultra-processed food. Because these are increasingly common, so is the condition — often discovered by chance on a scan or blood test.',
      },
      {
        h: 'The good news',
        p: 'The liver is remarkably able to heal. In its early stages, fatty liver frequently improves — or even reverses — with the same steps that help the whole body: losing even a modest amount of weight, cutting sugary drinks, moving more, and easing off alcohol.',
      },
      {
        h: 'What to do',
        list: [
          'Prioritise whole foods and cut back on added sugar',
          'Aim for regular physical activity',
          'Ask your doctor about a simple liver check if you’re at higher risk',
        ],
      },
    ],
  },
  {
    kind: 'Global Health',
    category: 'infections',
    headline: 'Antibiotic resistance: the slow-moving threat that affects everyone',
    summary:
      'Overusing antibiotics is making some infections harder to treat. Understanding why — and using them wisely — is something we all have a part in.',
    date: '2026-06-28',
    readTime: 5,
    topic: 'antibiotic resistance antimicrobial',
    lead: 'Antibiotics transformed medicine, but their power is not guaranteed forever. When they are used too often or incorrectly, bacteria adapt — and some infections become harder, or occasionally impossible, to treat. Health organisations call antibiotic resistance one of the biggest long-term threats to global health.',
    sections: [
      {
        h: 'How resistance happens',
        p: 'Every time antibiotics are used, they kill vulnerable bacteria and leave behind any that can survive. Those survivors multiply. Overuse — including taking antibiotics for viral illnesses they cannot treat, like most colds and sore throats — speeds this process up.',
      },
      {
        h: 'What you can do',
        list: [
          'Only take antibiotics when a doctor prescribes them',
          'Never pressure a clinician for antibiotics for a viral illness',
          'Take the full course exactly as prescribed, and never share leftovers',
          'Prevent infections in the first place — hygiene and vaccines both help',
        ],
      },
      {
        h: 'Why it’s everyone’s issue',
        p: 'Resistance does not stay with one person — resistant bacteria can spread. That is why using antibiotics responsibly protects not just you, but your family and community. Small, individual choices add up to a global effect.',
      },
    ],
  },
  {
    kind: 'Wellbeing',
    category: 'conditions',
    headline: 'Sleep is medicine: the growing case for taking rest seriously',
    summary:
      'Consistent, good-quality sleep supports the heart, immune system, mood and metabolism. It may be one of the most underrated health habits there is.',
    date: '2026-06-22',
    readTime: 4,
    topic: 'sleep and health immune system',
    lead: 'Sleep is often the first thing we sacrifice and the last thing we protect — yet the evidence for its importance keeps growing. Far from being “time off,” sleep is when the body repairs, the brain consolidates, and countless systems reset.',
    sections: [
      {
        h: 'What sleep does for the body',
        list: [
          'Supports the immune system’s ability to fight infection',
          'Helps regulate blood pressure and heart health',
          'Balances hormones that control appetite and blood sugar',
          'Consolidates memory and steadies mood',
        ],
      },
      {
        h: 'Protecting your sleep',
        p: 'Consistency matters more than perfection: a regular sleep and wake time, a wind-down routine, less screen light late at night, and a cool, dark room all help. Caffeine late in the day and alcohol before bed both quietly disrupt sleep quality.',
      },
      {
        h: 'When to seek help',
        p: 'Ongoing trouble falling or staying asleep, loud snoring with daytime exhaustion, or waking unrefreshed despite enough hours can point to a treatable sleep problem. It’s worth raising with a doctor rather than pushing through.',
      },
    ],
  },
]

export const NEWS = RAW.map((n) => ({
  ...n,
  slug: slugify(n.headline),
  source: 'MD-Neo Health Desk',
}))

export const newsBySlug = (slug) => NEWS.find((n) => n.slug === slug)

export const relatedNews = (item, k = 3) =>
  NEWS.filter((n) => n.slug !== item.slug).slice(0, k)

export const formatNewsDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  return `${months[m - 1]} ${d}, ${y}`
}
