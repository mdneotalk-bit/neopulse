// Blog articles — the "written down" version of each MD-Neo Talks video.
// Each entry merges the video metadata (from videos.js) with authored,
// plain-language article content. Add a new video to videos.js and give it an
// entry here to publish a new post. Everything below is general health
// education, not medical advice.

import { VIDEOS, thumbUrl, thumbUrlHq, watchUrl, categoryMeta } from './videos'

export const AUTHOR = {
  name: 'Sunmbola Neo Oladimeji',
  role: 'Doctor in Training · MD-Neo Talks',
  handle: '@MDNeoTalks',
}

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[’'"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 70)

// Approximate publish dates (newest → oldest), matched to the channel order.
const DATES = [
  '2026-07-15', '2026-07-09', '2026-07-05', '2026-07-02', '2026-06-25',
  '2026-06-23', '2026-06-16', '2026-06-12', '2026-06-09', '2026-06-05',
  '2026-06-02', '2026-05-30', '2026-05-20', '2026-05-15', '2026-05-10',
  '2026-05-06', '2026-05-02', '2026-04-28', '2026-04-22', '2026-04-15',
  '2026-04-10', '2026-04-05', '2026-04-01', '2026-03-28', '2026-03-24',
  '2026-03-20', '2026-03-16', '2026-03-12', '2026-03-05', '2026-02-28',
]

// Article bodies keyed by video id.
// Fields: lead, takeaways[], sections[{h, p?, list?}], seeDoctor, bottomLine, readTime.
const ARTICLES = {
  feP7IXpgr64: {
    readTime: 8,
    lead: 'Your thyroid is a small, butterfly-shaped gland sitting at the front of your neck — and despite its size, it acts like the throttle for your entire body. It releases hormones that tell your cells how fast to work. When it slows down even slightly, the effects are so gradual and so easy to blame on “just being tired” or “getting older” that most people live with them for months, or even years, before the real cause is found.',
    takeaways: [
      'The thyroid controls your metabolism — how quickly your body turns food into usable energy.',
      'An underactive thyroid (hypothyroidism) tends to cause fatigue, weight gain, feeling cold, dry skin, constipation and low mood.',
      'An overactive thyroid (hyperthyroidism) can cause a racing heart, unexplained weight loss, anxiety, sweating and trouble sleeping.',
      'A simple blood test that measures TSH is usually the first and most important step in checking it.',
      'Thyroid problems are extremely common — and, in most cases, very treatable once identified.',
    ],
    sections: [
      {
        h: 'What your thyroid actually does',
        p: 'The thyroid produces two main hormones, T3 and T4, which travel in your blood to almost every organ. They set the pace of your metabolism: your heart rate, body temperature, digestion, energy levels and even how quickly you think. A separate signal from your brain, called TSH (thyroid-stimulating hormone), tells the thyroid how much to produce. That feedback loop is why a TSH blood test is so useful — it reflects how hard your body is having to “push” the gland.',
      },
      {
        h: 'When it slows down: hypothyroidism',
        p: 'An underactive thyroid means your whole system runs a little too slowly. Because it affects so many organs at once, the symptoms are broad and vague, which is exactly why they get missed. Common signs build up quietly over time:',
        list: [
          'Persistent tiredness that rest does not fix',
          'Gradual weight gain despite no change in diet',
          'Feeling cold when others are comfortable',
          'Dry skin, brittle nails and thinning hair',
          'Constipation, low mood and difficulty concentrating (“brain fog”)',
        ],
      },
      {
        h: 'When it speeds up: hyperthyroidism',
        p: 'An overactive thyroid is the opposite — everything runs too fast. People often notice a pounding or racing heartbeat, losing weight without trying, feeling hot and sweaty, shaky hands, irritability or anxiety, and struggling to sleep. It can feel like being permanently “wired,” and it deserves medical attention because, over time, it puts real strain on the heart.',
      },
      {
        h: 'Why the symptoms are so easy to miss',
        p: 'Thyroid symptoms rarely arrive all at once. Tiredness creeps in, the scale drifts, your hair thins a little — and each one has an easy everyday explanation. That slow, one-at-a-time pattern is precisely why a thyroid problem can run in the background for a long time. The good news is that the diagnosis is usually straightforward, and treatment (often a daily tablet, or other options for an overactive gland) can transform how you feel.',
      },
    ],
    seeDoctor:
      'If you have had unexplained fatigue, weight change, temperature intolerance, or persistent mood changes for more than a few weeks, ask your doctor about a thyroid blood test. It is quick, widely available and inexpensive. Women over 60, people with a family history of thyroid disease, and anyone who is pregnant or planning pregnancy have extra reason to get checked.',
    bottomLine:
      'A tiny gland can have an outsized effect on how you feel every single day. If your energy, weight or mood have quietly shifted and you cannot explain why, your thyroid is worth ruling in or out — because when it is the cause, it is one of the more fixable ones.',
  },

  lz89kdYmiSE: {
    readTime: 7,
    lead: 'Garlic has been used as both food and medicine for thousands of years, and modern research keeps circling back to it for good reason. Much of its benefit comes from a compound called allicin, which is only released when you crush, chop or chew a fresh clove. Used regularly as part of a balanced diet, garlic gently supports three of your hardest-working organs — the heart, the kidneys and the liver.',
    takeaways: [
      'Garlic’s active compound, allicin, forms when a fresh clove is crushed or chopped — not before.',
      'It may modestly support healthy blood pressure and cholesterol levels.',
      'By helping circulation, it indirectly supports the kidneys and liver too.',
      'Crush your garlic and let it rest ~10 minutes before cooking to preserve its benefits.',
      'It is a helpful addition to a good diet — never a replacement for prescribed medicine.',
    ],
    sections: [
      {
        h: 'Why fresh, crushed garlic matters',
        p: 'A whole garlic clove contains a compound called alliin and an enzyme kept separate from it. When you crush or chop the clove, the two mix and produce allicin — the pungent, biologically active substance behind most of garlic’s reputation. This is why pre-minced garlic from a jar, or a clove swallowed whole, delivers far less benefit. It also explains a simple kitchen trick: crush or chop your garlic and let it sit for about 10 minutes before it hits the heat, so the allicin has time to form and becomes more stable during cooking.',
      },
      {
        h: 'What it does for your heart',
        p: 'The most studied benefit of garlic is on the cardiovascular system. Regular garlic intake has been linked in research to small but meaningful improvements in blood pressure and cholesterol, and it may help blood vessels stay flexible. None of this is a dramatic, overnight effect — think of it as one supportive habit stacked alongside others, not a cure.',
      },
      {
        h: 'How it helps kidneys and liver',
        p: 'Your kidneys and liver both depend on healthy blood flow to do their filtering and detoxifying work. By supporting circulation and healthy blood pressure, garlic indirectly eases the load on these organs. Garlic also contains antioxidant compounds that help the body deal with everyday oxidative stress. The key word, again, is “support” — as part of a varied, vegetable-rich diet.',
      },
      {
        h: 'How to actually get the benefit',
        list: [
          'Use fresh garlic where you can — the pre-minced jars lose potency quickly.',
          'Crush or chop, then wait about 10 minutes before heating.',
          'Add it near the end of cooking rather than burning it early.',
          'Pair it with vegetables, legumes and olive oil for a heart-friendly plate.',
        ],
      },
    ],
    seeDoctor:
      'Garlic — especially concentrated supplements — can thin the blood and interact with anticoagulant medication such as warfarin. If you take blood thinners, are due for surgery, or are considering a garlic supplement, check with your doctor or pharmacist first.',
    bottomLine:
      'Garlic is not a miracle, but it is a genuinely useful, affordable, everyday ally for your heart and circulation. Buy it fresh, crush it, let it rest, and make it a regular part of an already healthy plate.',
  },

  JjLz_X8gDzk: {
    readTime: 7,
    lead: 'Your liver is one of the most quietly heroic organs you have. It filters your blood, processes nearly everything you eat and drink, stores energy, makes proteins and helps you digest fat. It is also remarkably resilient — but that resilience has limits, and certain everyday foods make its job far harder than it needs to be. The encouraging part is that the liver can recover impressively well once you ease the load.',
    takeaways: [
      'Ultra-processed foods, added sugar and heavy alcohol are among the biggest strains on the liver.',
      'Non-alcoholic fatty liver disease is now very common and usually has no early symptoms.',
      'The liver can heal and regenerate when you reduce the pressure on it early enough.',
      'You do not need a “detox” — you need consistent, ordinary good choices.',
    ],
    sections: [
      {
        h: 'The foods that quietly overload it',
        p: 'Two things drive most diet-related liver strain: too much added sugar (especially from sugary drinks and fructose-heavy processed foods) and too much alcohol. Excess sugar gets converted to fat, some of which is stored in the liver itself. Over time this can lead to fatty liver disease — fat building up inside liver cells — which is now one of the most common liver conditions in the world and often causes no symptoms until it is advanced.',
        list: [
          'Sugary drinks, energy drinks and fruit juices with added sugar',
          'Deep-fried and heavily processed foods',
          'Excess alcohol of any kind',
          'Very large portions of refined carbohydrates (white bread, pastries, sweets)',
        ],
      },
      {
        h: 'The foods that genuinely help',
        p: 'You do not need expensive supplements or cleanses. The liver responds best to steady, ordinary nourishment: plenty of vegetables and fibre, whole grains, healthy fats like olive oil and oily fish, and enough water. Interestingly, moderate coffee intake has repeatedly been associated with better liver health in research. Building meals around whole, minimally processed foods does more for your liver than any single “superfood.”',
      },
      {
        h: 'Why “detox teas” are the wrong idea',
        p: 'Your liver is your detox system — that is literally its job. No tea, juice or supplement “flushes” it, and some products marketed that way can actually harm the liver. The real way to support it is unglamorous but effective: cut the added sugar and alcohol, move your body, keep a healthy weight, and eat mostly whole foods. Weight loss of even 5–10% can meaningfully reduce liver fat in people with fatty liver disease.',
      },
    ],
    seeDoctor:
      'Persistent fatigue, pain or discomfort under the right side of your ribs, yellowing of the skin or eyes, or unexplained nausea should always be checked by a doctor. Simple blood tests (liver function tests) and, if needed, a scan can tell you a great deal.',
    bottomLine:
      'You cannot see your liver, so it is easy to forget — but it is doing constant, quiet work for you. Ease its load by cutting back on sugar and alcohol and leaning into whole foods, and it will very often repair itself.',
  },

  '5G_2JapLq7o': {
    readTime: 6,
    lead: 'Beetroot has earned its reputation among athletes and heart-health researchers, and the science behind it is surprisingly elegant. It is packed with natural nitrates, which your body converts into nitric oxide — a molecule that signals blood vessels to relax and widen. That single mechanism explains most of what a daily beet can do inside your body.',
    takeaways: [
      'Beetroot is rich in dietary nitrates, which the body turns into nitric oxide.',
      'Nitric oxide relaxes and widens blood vessels, supporting healthy blood pressure and circulation.',
      'Better blood flow is why athletes use beetroot juice to support stamina.',
      'It is also high in fibre, folate and antioxidants.',
      'Harmless but surprising: beetroot can turn your urine or stool pink or red.',
    ],
    sections: [
      {
        h: 'The nitrate-to-nitric-oxide pathway',
        p: 'When you eat beetroot, bacteria in your mouth and gut help convert its nitrates into nitric oxide. Nitric oxide tells the smooth muscle in your blood vessel walls to relax, which lowers resistance and can gently reduce blood pressure. Because blood flows more freely, more oxygen reaches your muscles — which is exactly why endurance athletes drink concentrated beetroot juice before events.',
      },
      {
        h: 'What a daily beet may support',
        list: [
          'Healthy blood pressure, as part of an overall balanced diet',
          'Circulation and exercise stamina',
          'Digestive health, thanks to its fibre content',
          'General nutrition — it delivers folate, potassium and antioxidants',
        ],
      },
      {
        h: 'How to include it (and what is normal)',
        p: 'You can roast it, grate it raw into salads, blend it into a smoothie, or drink it as juice. There is no need to overdo it — a serving most days is plenty. And do not be alarmed if your urine turns pink after eating beetroot; this harmless effect is called beeturia and simply reflects the pigment passing through.',
      },
    ],
    seeDoctor:
      'If you already take blood-pressure medication, adding concentrated beetroot juice every day could lower it further than intended — mention it to your doctor. People prone to kidney stones may also want to moderate beetroot, which is relatively high in oxalate.',
    bottomLine:
      'Beetroot is a simple, whole-food way to support your circulation and blood pressure. It will not replace medicine or a broadly healthy lifestyle, but as a regular addition to your plate, few vegetables give you more for the effort.',
  },

  mCytT3Feb2o: {
    readTime: 7,
    lead: 'Alcohol-related liver damage is dangerous precisely because it is so quiet. The liver has very few pain nerves, so it rarely “hurts” until problems are advanced. That means the early warning signs it does give are worth learning by heart — because caught early, a great deal of the damage is reversible.',
    takeaways: [
      'The liver rarely causes pain, so early alcohol damage is easy to miss.',
      'Ongoing fatigue, poor appetite and mild nausea can be early clues.',
      'Easy bruising, swelling and yellowing skin are more advanced warning signs.',
      'The liver can heal significantly if alcohol is reduced early enough.',
      'There is no “safe” amount that guarantees no risk — less is genuinely better.',
    ],
    sections: [
      {
        h: 'How alcohol damages the liver, step by step',
        p: 'Your liver breaks down most of the alcohol you drink, and that process produces toxic by-products and fat. With heavy or frequent drinking, fat first accumulates in the liver (fatty liver), which can then progress to inflammation (hepatitis) and, over years, to permanent scarring (cirrhosis). The earlier stages are often reversible; the later ones are not. That is why noticing the early signals matters so much.',
      },
      {
        h: '5 silent signs worth taking seriously',
        list: [
          'Unusual, lasting tiredness that sleep does not resolve',
          'Loss of appetite, mild nausea or discomfort under the right ribs',
          'A yellow tint to the skin or the whites of the eyes (jaundice)',
          'Easy bruising or bleeding, as the liver makes fewer clotting proteins',
          'Swelling in the abdomen or ankles from fluid buildup',
        ],
      },
      {
        h: 'What actually helps',
        p: 'The single most powerful step is reducing or stopping alcohol — the liver begins to recover surprisingly quickly once the pressure is off. Alcohol-free days each week, smaller quantities, and honest tracking of how much you really drink all help. A nutritious diet and a healthy weight support recovery too. If cutting down feels hard, that is itself a reason to talk to a professional; support is available and effective.',
      },
    ],
    seeDoctor:
      'See a doctor if you notice yellowing skin or eyes, swelling of the abdomen or legs, vomiting blood, black stools, or confusion — these can signal serious liver problems and need prompt care. Even without symptoms, if you regularly drink more than you would like, a check-up and simple liver blood tests are a sensible move.',
    bottomLine:
      'Your liver gives you a head start if you are willing to listen. Spotting these quiet signs early — and easing off alcohol — can be the difference between damage that heals and damage that lasts.',
  },

  '59HkwtLo8uw': {
    readTime: 7,
    lead: 'Your two kidneys filter around 180 litres of blood every single day, balancing your fluids, salts and minerals while clearing out waste. Protecting them is mostly about steady, unglamorous habits — and knowing which foods lighten their workload versus which quietly add to it.',
    takeaways: [
      'The kidneys filter waste, balance fluids and help control blood pressure.',
      'Keeping blood pressure and blood sugar in a healthy range protects them most of all.',
      'Very high salt and lots of processed meat add strain over time.',
      'Staying adequately hydrated helps — but you do not need to force huge amounts.',
      'Kidney disease is often silent, so prevention and regular checks matter.',
    ],
    sections: [
      {
        h: 'What quietly harms your kidneys',
        p: 'The two biggest long-term threats to kidney health are high blood pressure and diabetes — together they cause the majority of kidney disease worldwide. Both damage the tiny filtering units inside the kidneys slowly and silently. On the diet side, consistently high salt intake raises blood pressure, and very high protein or heavy processed-meat diets can add to the workload. Frequent use of certain over-the-counter painkillers (NSAIDs) at high doses can also stress the kidneys.',
      },
      {
        h: 'Eat this',
        list: [
          'Plenty of vegetables and fruit',
          'Whole grains and legumes',
          'Water as your main everyday drink',
          'Herbs and spices to flavour food instead of extra salt',
        ],
      },
      {
        h: 'Go easy on this',
        list: [
          'Excess salt — most of it hides in processed and packaged food',
          'Sugary drinks',
          'Very large amounts of processed and red meat',
          'Routine high-dose painkillers without medical advice',
        ],
      },
      {
        h: 'The habits that matter most',
        p: 'Beyond specific foods, the fundamentals do the heavy lifting: keep your blood pressure and blood sugar in a healthy range, stay active, avoid smoking, and drink enough water for pale-yellow urine. If you have diabetes or high blood pressure, these steps are not optional extras — they are the core of protecting your kidneys for the long term.',
      },
    ],
    seeDoctor:
      'People with diabetes, high blood pressure, or a family history of kidney disease should have their kidney function checked regularly with a simple blood and urine test. See a doctor sooner if you notice swelling, foamy urine, blood in the urine, or a marked change in how often you pass urine.',
    bottomLine:
      'Your kidneys ask for very little: manage your blood pressure and sugar, go easy on salt, stay hydrated, and get checked if you are at risk. Small, boring habits protect an organ you cannot afford to lose.',
  },

  '8hzbB1IX6NU': {
    readTime: 7,
    lead: 'When the whites of the eyes or the skin take on a yellow tint, it is called jaundice — and it is always a sign worth taking seriously. Jaundice itself is not a disease; it is a visible clue that a yellow pigment called bilirubin is building up in the blood, and finding out why is what matters.',
    takeaways: [
      'Jaundice is a symptom, not a diagnosis — it points to a problem with the liver, blood or bile ducts.',
      'It is caused by a buildup of bilirubin, a yellow pigment from the breakdown of red blood cells.',
      'Common causes include hepatitis, gallstones blocking a bile duct, and certain inherited conditions.',
      'Dark urine and pale, clay-coloured stools often appear alongside the yellowing.',
      'New jaundice in an adult should always be assessed by a doctor.',
    ],
    sections: [
      {
        h: 'Where the yellow comes from',
        p: 'Your body constantly recycles old red blood cells, and one by-product of that process is bilirubin. Normally the liver picks up bilirubin, processes it, and sends it out with bile into the gut, where it eventually leaves the body. If any step in that chain is blocked or overwhelmed, bilirubin backs up into the blood and stains the skin and eyes yellow.',
      },
      {
        h: 'The three broad causes',
        list: [
          'Before the liver: red blood cells breaking down too fast, overwhelming the liver’s capacity',
          'In the liver: conditions like hepatitis or other liver disease reducing its ability to process bilirubin',
          'After the liver: a blockage — often a gallstone or, less commonly, a tumour — stopping bile from draining',
        ],
      },
      {
        h: 'The clues that come with it',
        p: 'Jaundice rarely travels alone. Because bilirubin normally colours the stool and is cleared through urine, a blockage often produces dark, tea-coloured urine and pale, putty-coloured stools at the same time. Itching, tiredness and discomfort in the upper right abdomen can also occur. Noting these accompanying signs helps a doctor work out where the problem lies.',
      },
    ],
    seeDoctor:
      'Any new yellowing of the skin or eyes in an adult warrants prompt medical assessment, especially if it comes with abdominal pain, fever, dark urine, pale stools, or confusion. In newborns, jaundice is common but still needs monitoring by a health professional.',
    bottomLine:
      'Yellow skin and eyes are your body flagging that something upstream — in the blood, liver or bile ducts — needs attention. It is a signal to get checked, not to panic, and the underlying cause is what treatment targets.',
  },

  '1tX3vSpS1rI': {
    readTime: 7,
    lead: 'The liver is a stoic organ. It can lose a remarkable amount of function before it ever complains, which is why the subtle, early signs it does give are worth committing to memory. Most people miss them — often because each one looks like an ordinary, unrelated annoyance.',
    takeaways: [
      'The liver can lose significant function before obvious symptoms appear.',
      'Persistent fatigue, poor appetite and unexplained weight change are early clues.',
      'Itchy skin without a rash, easy bruising and swelling can all point to liver strain.',
      'Yellowing eyes, dark urine and pale stools are important red flags.',
      'Catching problems early gives the liver its best chance to recover.',
    ],
    sections: [
      {
        h: '5 signs your liver may be struggling',
        list: [
          'Lasting tiredness and low energy that rest does not fix',
          'Loss of appetite, nausea, or discomfort under the right ribs',
          'Persistent itching of the skin without any visible rash',
          'Easy bruising or bleeding, and swelling in the belly or ankles',
          'Yellowing of the skin or eyes, dark urine and pale stools',
        ],
      },
      {
        h: 'The sign most people overlook',
        p: 'Itching without a rash is a classic but easily dismissed clue. When bile does not flow normally, substances that would usually be cleared can build up under the skin and cause a deep, persistent itch. On its own it is easy to blame on dry skin — but alongside fatigue or changes in urine and stool colour, it becomes far more meaningful.',
      },
      {
        h: 'Why early attention pays off',
        p: 'Because the liver can regenerate, many early problems improve dramatically once the underlying cause — excess alcohol, excess weight and fatty liver, a viral hepatitis, or a medication issue — is addressed. The window where change makes the biggest difference is early, before scarring sets in. That is exactly why noticing these quiet signals is worth it.',
      },
    ],
    seeDoctor:
      'If several of these signs appear together, or any single one persists, book a check-up. A simple set of liver blood tests, and sometimes an ultrasound scan, can reveal what is going on long before serious damage occurs.',
    bottomLine:
      'Your liver whispers before it shouts. Learning its early language — fatigue, itch, appetite and colour changes — lets you act while the organ can still heal itself.',
  },

  i77fcsYpaes: {
    readTime: 7,
    lead: 'Kidney disease is often called a silent condition, and the name is well earned. The kidneys can lose a large share of their function while causing almost no symptoms at all. By the time obvious signs appear, a lot of ground may already be lost — so the subtle, easy-to-dismiss clues are the ones worth knowing.',
    takeaways: [
      'Chronic kidney disease frequently causes no symptoms in its early stages.',
      'Early clues can include fatigue, poor sleep and trouble concentrating.',
      'Swollen ankles, puffy eyes and foamy urine deserve attention.',
      'Needing to urinate more often at night can be an early sign.',
      'People with diabetes or high blood pressure are at highest risk and should be screened.',
    ],
    sections: [
      {
        h: 'Why the kidneys stay quiet for so long',
        p: 'You have a lot of spare kidney capacity, and the healthy tissue compensates as damage accumulates. That built-in redundancy is a blessing day to day, but it also means problems can advance silently. This is why screening — rather than waiting for symptoms — is the best way to catch kidney disease early in people at risk.',
      },
      {
        h: '5 warning signs to never ignore',
        list: [
          'Ongoing tiredness, weakness and difficulty concentrating',
          'Swelling in the ankles, feet or around the eyes',
          'Foamy or bubbly urine (a sign of protein leaking through)',
          'Needing to pass urine more often, especially waking at night',
          'Poor appetite, nausea, or itchy skin as waste builds up',
        ],
      },
      {
        h: 'Who should be especially watchful',
        p: 'If you have diabetes, high blood pressure, heart disease, or a family history of kidney problems, your risk is meaningfully higher. For you, a routine blood test (checking a value called eGFR) and a urine test (checking for protein) are among the most valuable checks you can have — they can flag trouble years before you would ever feel it.',
      },
    ],
    seeDoctor:
      'These signs have many possible causes, but if several appear together — or if you are in a higher-risk group — ask your doctor for a simple kidney check. Early detection genuinely changes outcomes and can slow or prevent progression.',
    bottomLine:
      'Kidney disease is quiet until it is not. Knowing the soft early signs, and getting screened if you are at risk, is the surest way to protect kidneys that rarely ask for help until it is late.',
  },

  BFJh28g0kRg: {
    readTime: 6,
    lead: 'Ebola is one of the most feared viruses in the world — and fear thrives on misunderstanding. Learning how it actually spreads, and how outbreaks are brought under control, replaces that fear with clear, practical knowledge.',
    takeaways: [
      'Ebola spreads through direct contact with the bodily fluids of an infected, symptomatic person — not casually through the air.',
      'Early symptoms resemble the flu: fever, severe weakness, muscle aches and headache.',
      'Later stages can involve internal and external bleeding, which is where the disease gets its fearsome reputation.',
      'Outbreaks are controlled through isolation, careful hygiene, safe burials and, now, vaccines.',
    ],
    sections: [
      {
        h: 'How it actually spreads',
        p: 'Ebola is not an airborne virus like measles or COVID. It passes through direct contact with blood or other bodily fluids from someone who is already sick, or with contaminated surfaces and materials. This is why caregivers and healthcare workers are most at risk, and why safe practices around the sick and the deceased are central to stopping an outbreak.',
      },
      {
        h: 'What it does to the body',
        p: 'After an incubation period, Ebola typically begins with sudden fever, profound fatigue, muscle pain and headache — symptoms easily mistaken for many other illnesses. As it progresses it can cause vomiting, diarrhoea and, in severe cases, bleeding. Rapid supportive care, including fluids and treatment of complications, significantly improves survival.',
      },
      {
        h: 'Why outbreaks can be stopped',
        p: 'Because Ebola requires close contact to spread, it can be contained with disciplined public-health measures: identifying and isolating cases, tracing contacts, practising strict hygiene, ensuring safe burials, and — a major modern advance — deploying effective vaccines to those at risk. Understanding the virus is the first step to being unafraid of it.',
      },
    ],
    seeDoctor:
      'Ebola is rare and largely limited to specific regions during outbreaks. Anyone who develops a fever after travelling to an affected area should seek medical care promptly and be sure to mention their travel history so they can be assessed safely.',
    bottomLine:
      'Ebola is serious, but it is not the invisible, unstoppable threat popular imagination suggests. It spreads through close contact, and it is beaten by knowledge, hygiene, coordinated care and vaccines.',
  },

  CZXiC_vLNCw: {
    readTime: 8,
    lead: 'Diabetes is one of the most common conditions on earth, and one of the most misunderstood. It is often called “silent but deadly” because high blood sugar can quietly damage blood vessels and nerves for years — long before you feel that anything is wrong. The good news buried inside that warning is powerful: type 2 diabetes is often preventable, and always manageable.',
    takeaways: [
      'Diabetes means blood sugar (glucose) stays too high, damaging blood vessels and nerves over time.',
      'Type 2, the most common form, develops gradually and is linked to genetics and lifestyle.',
      'Classic symptoms: increased thirst, frequent urination, fatigue, blurred vision and slow-healing wounds.',
      'Uncontrolled blood sugar harms the eyes, kidneys, nerves, heart and feet.',
      'Diet, activity, weight and — when needed — medication can control it very effectively.',
    ],
    sections: [
      {
        h: 'What is actually happening',
        p: 'Glucose is your body’s main fuel, and the hormone insulin lets it move from your blood into your cells. In type 2 diabetes, the body either does not make enough insulin or stops responding to it properly, so glucose accumulates in the blood. Persistently high glucose acts like a slow, corrosive tide on your blood vessels — which is why the long-term complications affect so many different organs.',
      },
      {
        h: 'The warning signs to know',
        list: [
          'Feeling unusually thirsty and drinking more than normal',
          'Needing to urinate frequently, including at night',
          'Persistent tiredness and blurred vision',
          'Cuts, sores or infections that heal slowly',
          'Unintended weight loss (more typical of type 1)',
        ],
      },
      {
        h: 'Why it is called the silent killer',
        p: 'The damage from high blood sugar builds without pain. Over years it can quietly injure the small vessels in the eyes (threatening sight), the kidneys (leading to kidney disease), and the nerves (causing numbness, especially in the feet), while also raising the risk of heart attack and stroke. Because it is painless, many people are diagnosed only after complications have already begun — which is exactly why screening matters.',
      },
      {
        h: 'The genuinely hopeful part',
        p: 'Small, consistent changes have an outsized effect. Moving more, cutting back on sugary drinks and ultra-processed food, and losing even a modest amount of weight can dramatically lower risk and improve control — sometimes enough to push early type 2 diabetes into remission. Where medication is needed, today’s options are effective and keep improving. Control is very achievable.',
      },
    ],
    seeDoctor:
      'If you have any of the classic symptoms, or risk factors such as a family history, excess weight around the middle, or high blood pressure, ask for a simple blood sugar test (fasting glucose or HbA1c). Early action prevents complications, and regular check-ups protect your eyes, kidneys, nerves and feet.',
    bottomLine:
      'Diabetes does its harm quietly, but it is far from unbeatable. Knowing the signs, getting tested, and leaning into steady lifestyle changes puts you — not the disease — in control.',
  },

  ztGq3QNLw4c: {
    readTime: 6,
    lead: 'Hay fever feels harmless — a bit of sneezing, itchy eyes and a runny nose when the pollen count climbs. For most people it is exactly that: an allergic nuisance. But a few of its “warning” versions are worth recognising, because some symptoms can affect your breathing or point to something more than pollen.',
    takeaways: [
      'Typical hay fever (allergic rhinitis) is an immune overreaction to pollen and is not dangerous.',
      'Wheezing or shortness of breath can signal allergic asthma and needs proper treatment.',
      'Symptoms all year round may mean an allergy to something other than pollen — like dust mites or pets.',
      'Simple measures and over-the-counter treatments help most people considerably.',
    ],
    sections: [
      {
        h: 'What hay fever really is',
        p: 'Hay fever happens when your immune system mistakes harmless pollen for a threat and releases histamine to fight it. That histamine causes the familiar symptoms: sneezing, a runny or blocked nose, and itchy, watery eyes. It is seasonal for many people, tracking the pollen calendar for trees, grasses and weeds.',
      },
      {
        h: 'When it is more than a nuisance',
        list: [
          'Wheezing, chest tightness or breathlessness — possible allergic asthma',
          'Symptoms that never let up, even out of pollen season',
          'A blocked nose with facial pain and thick discharge — possible sinus infection',
          'Symptoms severe enough to disrupt sleep, school or work',
        ],
      },
      {
        h: 'What actually helps',
        p: 'Practical steps make a real difference: check pollen forecasts, keep windows closed on high-pollen days, shower and change clothes after being outside, and consider wraparound sunglasses. Over-the-counter antihistamines and steroid nasal sprays are effective for most people. If breathing symptoms appear, that changes the picture and deserves medical attention rather than self-treatment alone.',
      },
    ],
    seeDoctor:
      'See a doctor if hay fever ever comes with wheezing, chest tightness or breathlessness — that combination should not be ignored. Also seek advice if symptoms are severe, last all year, or do not respond to usual over-the-counter treatments.',
    bottomLine:
      'For most people hay fever is a manageable seasonal irritation. Knowing the handful of signs that point to asthma or infection means you can treat the ordinary version confidently — and get help for the versions that need it.',
  },

  OIVnQJD48u8: {
    readTime: 7,
    lead: 'Lassa fever and Hantavirus are both spread by rodents, both can be serious, and both are widely misunderstood. Putting them side by side makes each one far easier to understand — and shows why simple precautions around rodents matter more than fear.',
    takeaways: [
      'Both viruses are caught mainly from contact with rodent urine, droppings or saliva.',
      'Lassa fever is common in parts of West Africa and spread mostly by a specific rat.',
      'Hantavirus occurs in many regions worldwide and is often linked to deer mice.',
      'Good rodent control and careful, dust-free cleaning are the main forms of prevention.',
    ],
    sections: [
      {
        h: 'How each one spreads',
        p: 'Lassa fever spreads chiefly through contact with food or surfaces contaminated by the urine or droppings of infected multimammate rats, and it can also pass between people through bodily fluids in some settings. Hantavirus typically spreads when dust contaminated with infected rodent droppings or urine is stirred up and breathed in — for example when sweeping out a shed, barn or cabin that mice have lived in.',
      },
      {
        h: 'How the illnesses compare',
        list: [
          'Lassa fever: often mild or symptom-free, but can cause fever, weakness, and in severe cases bleeding and hearing loss',
          'Hantavirus: can cause a flu-like illness that, in some forms, progresses to serious lung or kidney problems',
          'Both: early symptoms are non-specific and flu-like, which is why exposure history matters',
        ],
      },
      {
        h: 'Which is “worse”?',
        p: 'There is no simple winner — it depends on the specific virus strain, how early it is caught, and the care available. What they share is more useful than what separates them: both are rodent-borne, both start with vague flu-like symptoms, and both are largely preventable with the same sensible habits around keeping rodents out of living spaces and cleaning contaminated areas safely.',
      },
    ],
    seeDoctor:
      'Fever with breathing difficulty, unusual bleeding, or severe weakness after possible rodent exposure needs urgent medical attention — and tell the clinician about the exposure. If you live in or travel to an affected region, that context helps doctors act quickly.',
    bottomLine:
      'Rodent-borne viruses sound exotic and frightening, but the protective playbook is refreshingly ordinary: keep rodents out, never dry-sweep their droppings, and seek care early if flu-like illness follows exposure.',
  },

  mViZkVM9zPs: {
    readTime: 6,
    lead: 'Hantavirus is rare, but it can be serious — and it hides somewhere most people would never think to look: dried mouse droppings. When those droppings are disturbed, say by sweeping out a cabin, shed or garage, infected particles can become airborne and be breathed in.',
    takeaways: [
      'Hantavirus spreads mainly by inhaling dust contaminated with rodent droppings, urine or saliva.',
      'Deer mice and some other wild rodents are the usual carriers.',
      'Early symptoms mimic the flu; in some people it can progress to serious lung problems.',
      'Never dry-sweep or vacuum droppings — ventilate and dampen the area first.',
    ],
    sections: [
      {
        h: 'Why cleaning is the risky moment',
        p: 'The danger is not usually the live mouse — it is the dried droppings and nesting material left behind. Sweeping or vacuuming sends fine, contaminated dust into the air, which is exactly how people breathe the virus in. Enclosed spaces that have been shut up for a while, like cabins, barns and storage sheds, are the classic settings.',
      },
      {
        h: 'How to clean safely',
        list: [
          'Open doors and windows and let the space air out for at least 30 minutes first',
          'Wear gloves and avoid stirring up dust',
          'Dampen droppings and nests with disinfectant or a bleach solution before wiping — do not sweep or vacuum dry',
          'Double-bag waste, wash hands thoroughly, and clean surfaces afterwards',
        ],
      },
      {
        h: 'What the illness looks like',
        p: 'Hantavirus often starts with fever, muscle aches, fatigue, and sometimes headaches, nausea or stomach upset — very much like other viral illnesses. In its more severe form it can cause a dangerous buildup of fluid in the lungs, leading to breathlessness. Because the early stage is so ordinary, the key detail is recent exposure to rodents or their droppings.',
      },
    ],
    seeDoctor:
      'If a flu-like illness with worsening breathlessness follows cleaning a rodent-infested space, seek medical care promptly and mention the exposure. Early recognition and supportive hospital care make a real difference in severe cases.',
    bottomLine:
      'The virus hides in what mice leave behind, and the moment of risk is cleaning it up carelessly. Ventilate, dampen, never dry-sweep — and take flu-like symptoms after rodent exposure seriously.',
  },

  v7gaZYmLy5U: {
    readTime: 6,
    lead: 'Most sore throats are caused by viruses and settle on their own within a few days. But tonsillitis — especially the bacterial kind — has a handful of tell-tale features that help you tell when a sore throat is more than a passing cold and might need treatment.',
    takeaways: [
      'Most sore throats are viral and improve on their own with rest and fluids.',
      'White or yellow patches on the tonsils suggest possible bacterial infection.',
      'High fever and swollen, tender neck glands point more towards bacteria.',
      'A sore throat without a cough or runny nose is more likely to be bacterial.',
      'Difficulty breathing, drooling or inability to swallow is an emergency.',
    ],
    sections: [
      {
        h: 'Viral vs bacterial: reading the clues',
        p: 'Doctors weigh a few features to judge whether antibiotics might help. Bacterial tonsillitis (often from streptococcus) tends to come with a higher fever, white or yellow pus-like spots on the tonsils, tender swollen glands in the neck, and — importantly — an absence of typical cold symptoms like coughing and a runny nose. Viral sore throats more often travel alongside those cold symptoms.',
      },
      {
        h: '5 warning signs worth noting',
        list: [
          'White or yellow patches or coating on the tonsils',
          'High fever with chills',
          'Swollen, tender lymph nodes in the neck',
          'Severe pain on swallowing, or a muffled “hot potato” voice',
          'Symptoms getting worse rather than better after a few days',
        ],
      },
      {
        h: 'How it is usually managed',
        p: 'Viral tonsillitis is treated with rest, fluids, and pain relief while your immune system clears it. If a bacterial cause is likely, a doctor may prescribe antibiotics — not to speed things up dramatically, but to lower the small risk of complications and reduce spread. Soothing measures like warm drinks, salt-water gargles and throat lozenges help either way.',
      },
    ],
    seeDoctor:
      'Seek urgent care for severe difficulty swallowing, drooling, or any trouble breathing. Otherwise, see a doctor if a bad sore throat lasts more than a few days, comes with a high fever, or you can see pus on the tonsils — especially if you have no cough or cold symptoms.',
    bottomLine:
      'A sore throat is usually nothing to fear, but a few signs — pus, high fever, swollen glands and no cough — nudge it towards the kind that benefits from a doctor’s eye. Knowing the difference saves both worry and unnecessary antibiotics.',
  },

  xkPUpEnUgXs: {
    readTime: 7,
    lead: 'Few health topics carry as much fear, stigma and misinformation as HIV. The reality today is genuinely hopeful: HIV is a manageable long-term condition, and with modern treatment people live long, healthy lives and cannot pass the virus on to their partners. Understanding the facts replaces fear with power.',
    takeaways: [
      'HIV is a virus that weakens the immune system if untreated; AIDS is the advanced stage that treatment now prevents.',
      'It spreads through specific fluids — mainly unprotected sex and sharing needles — not everyday contact.',
      'Effective treatment can make the virus “undetectable,” which means it cannot be passed on sexually (U=U).',
      'PrEP is a highly effective medicine that prevents HIV in people at higher risk.',
      'Testing is quick, confidential and often free — and knowing your status is empowering.',
    ],
    sections: [
      {
        h: 'How HIV spreads — and how it does not',
        p: 'HIV passes through certain bodily fluids: blood, semen, vaginal and rectal fluids, and breast milk. In practice, that mostly means unprotected sex and sharing injecting equipment. It is not spread by hugging, shaking hands, sharing food or cutlery, toilet seats, insect bites, or everyday social contact. Clearing up this point alone dissolves a huge amount of unnecessary fear and stigma.',
      },
      {
        h: 'The revolution of modern treatment',
        p: 'Antiretroviral therapy (ART) keeps the virus under control so the immune system stays healthy. When treatment lowers the virus to undetectable levels in the blood, it becomes untransmittable through sex — a landmark fact summed up as U=U (Undetectable = Untransmittable). This is why early diagnosis and staying on treatment are so important, both for the person’s health and for prevention.',
      },
      {
        h: 'Prevention you can control',
        list: [
          'Condoms remain highly effective at reducing transmission',
          'PrEP (pre-exposure prophylaxis) is a preventive medicine for people at higher risk',
          'PEP (post-exposure prophylaxis) can prevent infection if started quickly after a possible exposure',
          'Never sharing needles or injecting equipment',
          'Regular testing, so anyone positive can start treatment early',
        ],
      },
    ],
    seeDoctor:
      'HIV testing is fast, confidential and widely available — many clinics offer it free, and some tests give results in minutes. If you think you may have been exposed very recently, ask urgently about PEP, which is time-sensitive. Knowing your status protects you and the people you care about.',
    bottomLine:
      'HIV today is not the diagnosis it was decades ago. With testing, treatment and tools like PrEP, it is preventable and manageable — and the stigma, not casual contact, is what does the most harm now.',
  },

  ohxnAu3P9f8: {
    readTime: 7,
    lead: 'How likely is HIV transmission, really? A lot of anxiety around HIV comes from overestimating everyday risk and from persistent myths and conspiracy theories. Separating the actual routes of transmission from the noise helps replace fear with facts you can act on.',
    takeaways: [
      'Real transmission risk depends heavily on the type of exposure — many common fears are unfounded.',
      'HIV is not spread by casual contact, saliva, sharing food, or toilet seats.',
      'Treatment as prevention (U=U) means an undetectable person cannot pass it on sexually.',
      'Stigma and misinformation, not casual contact, cause much of the harm around HIV.',
    ],
    sections: [
      {
        h: 'Chance: what the risk actually depends on',
        p: 'Not all exposures carry the same risk. Transmission depends on the type of contact, whether the person living with HIV is on effective treatment, and other factors like the presence of other infections. Someone on treatment with an undetectable viral load does not transmit HIV sexually at all. This nuance is usually missing from fearful, all-or-nothing thinking about the virus.',
      },
      {
        h: 'Contact: separating myth from reality',
        p: 'HIV is fragile outside the body and is not spread through the routes people most often worry about — hugging, sharing cups or cutlery, coughs and sneezes, mosquito bites, or toilet seats. Understanding this is not just reassuring; it is the foundation for treating people living with HIV with the dignity and normalcy they deserve.',
      },
      {
        h: 'Conspiracy: why misinformation is its own harm',
        p: 'Conspiracy theories about HIV — about where it came from or how it spreads — are not harmless curiosities. They discourage testing, fuel stigma, and push people away from the treatment and prevention that actually work. Grounding yourself in the evidence protects both your health and your judgement.',
      },
    ],
    seeDoctor:
      'If you think you may have been exposed, do not sit with uncertainty: emergency medicine called PEP can prevent infection if started quickly (ideally within hours, and no later than 72 hours). Contact a clinic, sexual health service or emergency department right away, and get tested to know your status.',
    bottomLine:
      'Real HIV risk is specific and, in the era of effective treatment, often far lower than fear suggests. Facts beat conspiracy every time — they lower anxiety, reduce stigma, and point you towards the tools that genuinely protect people.',
  },

  lag0v5fzTU4: {
    readTime: 7,
    lead: '“The silent killer” is a phrase used for conditions that do their damage without symptoms — and high blood pressure is the classic example. It affects a huge share of adults, quietly raising the risk of stroke, heart attack and kidney disease, often with no warning at all. That is exactly why certain signals should never be brushed aside.',
    takeaways: [
      'High blood pressure usually causes no symptoms yet steadily raises the risk of stroke and heart disease.',
      'Because it is silent, the only reliable way to catch it is to measure it.',
      'Certain symptoms — chest pain, sudden severe headache, breathlessness — are emergencies.',
      'Regular, simple checks catch silent problems before they cause lasting harm.',
    ],
    sections: [
      {
        h: 'Why “silent” is the whole problem',
        p: 'Most people with high blood pressure feel completely normal. There is no pain, no obvious sign — the pressure simply runs high, day after day, stiffening and damaging arteries and forcing the heart to work harder. Because you cannot feel it, you cannot manage what you do not measure, which is why a blood pressure check is one of the highest-value few minutes in medicine.',
      },
      {
        h: 'The warning signs you must not ignore',
        list: [
          'Chest pain or pressure, especially if it spreads to the arm, neck or jaw',
          'Sudden, severe headache unlike your usual headaches',
          'Sudden weakness or numbness, drooping face, or slurred speech (signs of stroke)',
          'Breathlessness, or a sudden change in vision',
          'Fainting or a sense of impending collapse',
        ],
      },
      {
        h: 'What lowers your risk',
        p: 'The everyday fundamentals are powerful: reduce salt, eat plenty of vegetables and fruit, stay active, keep a healthy weight, limit alcohol, avoid smoking, and manage stress and sleep. Where lifestyle is not enough, effective and safe medications can bring pressure down. Knowing your numbers is the starting point for all of it.',
      },
    ],
    seeDoctor:
      'Chest pain, face drooping, arm weakness or slurred speech are medical emergencies — call for help immediately (remember the stroke test: Face, Arms, Speech, Time). Short of an emergency, if you have never had your blood pressure checked, or it has been a while, book a check-up.',
    bottomLine:
      'The most dangerous thing about high blood pressure is how little it announces itself. Measure it, know your numbers, and treat the emergency warning signs as exactly that — because acting fast can save your life.',
  },

  '85OVimJ7PB4': {
    readTime: 5,
    lead: 'It is not the most glamorous health check, but the colour of your urine is a genuinely useful window into your body — reflecting your hydration and, occasionally, hinting at something that needs attention. Learning to read it takes seconds and costs nothing.',
    takeaways: [
      'Pale straw-yellow usually means you are well hydrated.',
      'Dark yellow or amber most often just means you should drink more water.',
      'Some colours come from harmless foods or supplements — like beetroot or B vitamins.',
      'Red, brown, or persistently cloudy urine should be checked by a doctor.',
    ],
    sections: [
      {
        h: 'A quick colour guide',
        list: [
          'Pale straw to light yellow: well hydrated — the goal for most people',
          'Dark yellow or amber: a nudge to drink more water',
          'Orange: possibly dehydration, certain medicines, or occasionally a liver issue',
          'Pink or red: could be beetroot or certain foods — but also possibly blood, which needs checking',
          'Brown: dehydration or, less commonly, a liver or muscle issue',
          'Cloudy: sometimes normal, but persistently cloudy urine can suggest infection',
        ],
      },
      {
        h: 'Harmless causes worth knowing',
        p: 'Not every colour change is a worry. Beetroot and blackberries can tint urine pink or red; B vitamins can turn it bright, almost neon yellow; and some medications change its colour too. Context matters — if you just ate a beet salad, that pink is very likely nothing at all.',
      },
      {
        h: 'When colour is a real signal',
        p: 'The colours that warrant attention are red or pink without a food explanation (possible blood), persistent brown, and cloudy urine with burning or urgency (possible infection). Blood in the urine in particular should never be ignored, even if it happens only once — the cause is usually treatable and worth finding.',
      },
    ],
    seeDoctor:
      'See a doctor for any blood in your urine (even a single episode), persistent cloudiness, strong pain on passing urine, or colour changes that do not resolve with better hydration. A simple urine test can quickly clarify the cause.',
    bottomLine:
      'Your urine offers a free daily health check. Aim for pale yellow, top up your water when it darkens, and take red, brown or persistently cloudy urine as your cue to get it looked at.',
  },

  KlNB2nhzTos: {
    readTime: 8,
    lead: 'Rosacea is a common, long-term skin condition that causes facial redness, flushing and sometimes small bumps — and it is frequently mistaken for acne or simply “having a red face.” Understanding what triggers it changes everything, because while rosacea cannot be cured, it can very often be managed well. In this one, I sat down with Andreas to break it down.',
    takeaways: [
      'Rosacea mainly affects the central face — cheeks, nose, chin and forehead.',
      'It tends to flare and settle, and can include redness, visible blood vessels and bumps.',
      'Common triggers include sun, heat, alcohol, spicy food, stress and temperature changes.',
      'It cannot be cured, but the right routine and treatments keep it well controlled.',
      'It can also affect the eyes, causing dryness and irritation.',
    ],
    sections: [
      {
        h: 'What rosacea looks like',
        p: 'Rosacea usually shows up as persistent redness across the central face, often with easy flushing or blushing. Some people develop small red bumps or pus-filled spots (which is why it is confused with acne), visible tiny blood vessels, or — over time in some cases — thickening of the skin, particularly on the nose. It most commonly appears in adults and can affect anyone, though it is often more noticeable on fairer skin.',
      },
      {
        h: 'What sets it off',
        list: [
          'Sun exposure — one of the most common triggers',
          'Heat, hot drinks and spicy food',
          'Alcohol, particularly red wine',
          'Stress and strong emotions',
          'Sudden changes in temperature and harsh skincare products',
        ],
      },
      {
        h: 'How to keep it calm',
        p: 'Management is about reducing flare-ups and treating what does appear. Identifying and avoiding your personal triggers is the foundation — a simple diary can reveal patterns. Daily sun protection is essential. Gentle, fragrance-free skincare helps, while harsh scrubs and strong actives often make things worse. For persistent symptoms, a doctor or dermatologist can offer prescription creams, oral medicines, or treatments for the visible vessels.',
      },
    ],
    seeDoctor:
      'See a doctor or dermatologist if facial redness is persistent, worsening, or affecting your confidence — effective treatments exist. Seek advice promptly if your eyes become dry, gritty or irritated, as rosacea can involve the eyes and benefits from specific care.',
    bottomLine:
      'Rosacea is common, manageable, and nothing to be embarrassed about. Learn your triggers, protect your skin from the sun, be gentle with it, and get professional help for the stubborn parts — most people gain real control with the right plan.',
  },

  upVB_B8F6xI: {
    readTime: 8,
    lead: 'Feeling tired, foggy or run-down all the time is one of the most common reasons people feel “off” — and sometimes the cause is a simple nutrient gap. Several common deficiencies produce vague, overlapping symptoms that are easy to dismiss, and just as easy to fix once they are identified.',
    takeaways: [
      'Iron, vitamin B12, vitamin D, magnesium and folate are among the most common shortfalls.',
      'Symptoms overlap heavily: fatigue, weakness, poor concentration and low mood.',
      'A blood test is the only reliable way to confirm a deficiency before supplementing.',
      'Guessing and taking high-dose supplements you do not need can cause its own problems.',
    ],
    sections: [
      {
        h: '7 deficiencies that commonly drain your energy',
        list: [
          'Iron — fatigue, breathlessness and pale skin, especially common in menstruating women',
          'Vitamin B12 — tiredness, tingling, and memory or mood changes, more common in older adults and those on plant-based diets',
          'Vitamin D — fatigue, low mood, aches and weaker bones, especially in winter',
          'Magnesium — muscle cramps, fatigue and poor sleep',
          'Folate — tiredness and, importantly, needed before and during pregnancy',
          'Iodine — affects thyroid function and energy',
          'Vitamin C — fatigue, easy bruising and slow healing when very low',
        ],
      },
      {
        h: 'Why the symptoms are so easy to miss',
        p: 'Almost every nutrient deficiency can cause fatigue, and many overlap with each other and with ordinary tiredness from poor sleep or stress. That is why you cannot reliably guess which one (if any) you have from symptoms alone. Two people with identical “low energy” might have completely different causes — or none nutritional at all.',
      },
      {
        h: 'Why testing beats guessing',
        p: 'Taking supplements at random is not harmless. Some fat-soluble vitamins build up and become toxic in excess, iron overload can damage organs, and masking a B12 deficiency with folate can hide nerve problems. A blood test lets you treat the right gap, at the right dose, for the right length of time — and confirm when levels are back to normal.',
      },
    ],
    seeDoctor:
      'Persistent tiredness is worth investigating rather than pushing through. Ask your doctor which blood tests make sense for you — especially if you are pregnant, follow a restricted diet, have heavy periods, are over 60, or have a condition affecting absorption.',
    bottomLine:
      'Chronic fatigue sometimes has a simple, fixable cause hiding in your bloodwork. Test before you treat, correct the specific gap, and you may be surprised how much better “ordinary tiredness” can get.',
  },

  'j-oKpfo8p8o': {
    readTime: 8,
    lead: 'Bursitis is a surprisingly common cause of joint pain that often gets overlooked or mistaken for arthritis. A bursa is a small, fluid-filled cushion that reduces friction near a joint; when one becomes inflamed, everyday movements start to hurt. In this longer conversation with Andreas, we unpack why it is so often missed.',
    takeaways: [
      'A bursa is a small fluid-filled sac that cushions joints; bursitis is its inflammation.',
      'It commonly affects the shoulder, elbow, hip and knee.',
      'Pain typically worsens with pressure or repetitive movement.',
      'Rest, gentle movement and reducing the aggravating activity usually help.',
      'A hot, red, very swollen joint with fever needs urgent care to rule out infection.',
    ],
    sections: [
      {
        h: 'Why bursitis gets missed',
        p: 'Because bursitis causes joint pain and stiffness, it is easily blamed on arthritis, a muscle strain or “just getting older.” But the cause and treatment differ. Bursitis often follows repetitive movements, prolonged pressure (like leaning on the elbows or kneeling), an injury, or overuse — so the story behind the pain is a big clue.',
      },
      {
        h: 'Where it strikes and how it feels',
        list: [
          'Shoulder: pain lifting the arm or lying on that side',
          'Elbow: a tender, sometimes visibly swollen lump at the tip of the elbow',
          'Hip: pain over the outer hip, worse when climbing stairs or lying on it',
          'Knee: pain and swelling at the front of the knee, common in people who kneel a lot',
        ],
      },
      {
        h: 'How it is usually managed',
        p: 'Most bursitis settles with self-care: relative rest, avoiding the movement or pressure that triggered it, ice, and simple anti-inflammatory measures. Gentle movement and, where helpful, physiotherapy prevent stiffness and address the underlying pattern. Persistent cases may need a doctor to drain the fluid or, occasionally, inject anti-inflammatory medication. The key is also fixing the cause — the repetitive strain or pressure — so it does not simply return.',
      },
    ],
    seeDoctor:
      'Seek urgent care if a joint becomes hot, red and very swollen, especially with fever — this can mean an infected bursa, which needs prompt treatment. Otherwise, see a doctor if pain is severe, does not improve with rest over a couple of weeks, or keeps coming back.',
    bottomLine:
      'Bursitis is a common, treatable cause of joint pain that is too often overlooked. Rest the joint, remove the repetitive trigger, and get help for pain that lingers — and always take a hot, swollen joint with fever seriously.',
  },

  OTrpwXkNT4M: {
    readTime: 8,
    lead: 'Your body has many ways of asking for help, and it rarely stays completely silent when something is wrong. This round-up covers ten warning signs that — taken seriously rather than ignored — can help catch problems early. Most have harmless explanations, but every one is worth paying attention to.',
    takeaways: [
      'Unexplained weight loss, persistent fatigue and lasting pain are classic alarms.',
      'Changes you can see — in moles, in the mirror, in the toilet — deserve attention.',
      'A symptom that is new, persistent, or getting worse is the pattern that matters most.',
      'Most of these have benign causes, but they are worth checking, not ignoring.',
    ],
    sections: [
      {
        h: '10 signals worth taking seriously',
        list: [
          'Unexplained weight loss without trying',
          'Persistent, unusual fatigue that rest does not fix',
          'A lump anywhere that is new or growing',
          'A change in a mole’s size, shape or colour',
          'A persistent change in bowel or bladder habits',
          'Unexplained bleeding or bruising',
          'A cough or hoarseness that will not go away',
          'Difficulty swallowing or persistent indigestion',
          'A sore or wound that will not heal',
          'Night sweats or fevers with no clear cause',
        ],
      },
      {
        h: 'The pattern that matters more than any single sign',
        p: 'One-off symptoms are usually nothing. What raises the priority is persistence and change: a symptom that is new for you, that lasts longer than you would expect, or that is steadily getting worse. Those three qualities — new, persistent, progressive — are the ones doctors pay closest attention to, and so should you.',
      },
      {
        h: 'Why acting early is worth it',
        p: 'Catching a problem early almost always means simpler treatment and better outcomes. The goal here is not to make you anxious about every ache — it is to help you recognise when your body is doing more than grumbling, so you can get reassurance or early treatment rather than waiting and worrying.',
      },
    ],
    seeDoctor:
      'A symptom that is new, that persists beyond a couple of weeks, or that keeps getting worse is always a good reason to see your doctor. Trust your instincts — if something feels genuinely different for your body, get it checked.',
    bottomLine:
      'Your body sends signals for a reason. You do not need to fear every twinge, but you do owe it to yourself to listen when something is new, lasting, or worsening — early attention is almost always the easier path.',
  },

  o3rm26PTmC4: {
    readTime: 6,
    lead: 'Every new COVID variant brings a fresh wave of questions and headlines. The practical answer is usually reassuringly consistent: know the current symptoms, know when to rest and test, and stay up to date with the protection that works. Here is a calm, useful look at the latest “Cicada” variant.',
    takeaways: [
      'New variants usually bring familiar symptoms: sore throat, congestion, fatigue and cough.',
      'Most people recover at home with rest, fluids and time.',
      'Staying current with recommended vaccines remains the best protection against severe illness.',
      'Certain warning signs — breathlessness, chest pain, confusion — need urgent care.',
    ],
    sections: [
      {
        h: 'Why variants keep appearing',
        p: 'Viruses mutate as they spread — that is normal and expected. Most new variants differ only slightly, often becoming better at spreading rather than more dangerous. The names change and the news cycle spins up, but for most people the practical playbook stays the same: recognise symptoms, avoid spreading it, and protect the vulnerable.',
      },
      {
        h: 'Symptoms to watch for',
        list: [
          'Sore throat, congestion and runny nose',
          'Cough and fatigue',
          'Fever, headache and body aches',
          'Sometimes loss of taste or smell, though less commonly than early in the pandemic',
        ],
      },
      {
        h: 'What to do if you catch it',
        p: 'Most people manage at home: rest, drink plenty of fluids, and use simple remedies for fever and aches. Avoid close contact with people at higher risk while you are unwell. Vaccination — kept up to date, especially for older adults and those with health conditions — remains the strongest tool for preventing severe illness, whatever the variant is called this season.',
      },
    ],
    seeDoctor:
      'Seek urgent medical attention for breathlessness or difficulty breathing, persistent chest pain or pressure, confusion, bluish lips, or an inability to stay awake. People at higher risk should ask early about antiviral treatments, which work best when started promptly.',
    bottomLine:
      'A new variant name is rarely a reason to panic. Know the symptoms, rest and recover at home when it is mild, keep your vaccines current, and act fast on the genuine emergency signs.',
  },

  JsLCczawuqk: {
    readTime: 5,
    lead: 'This is where it all began — the welcome to MD-Neo Talks. The idea behind the channel is simple but, I believe, important: your body is always sending signals, and learning to read them is one of the most useful skills you can have. Good health information should belong to everyone, not just people in white coats.',
    takeaways: [
      'Health information should be clear, honest and free of jargon.',
      'Understanding your own body helps you make better decisions and ask better questions.',
      'This channel turns what a doctor in training learns into plain language for everyone.',
      'Knowledge is not a replacement for your doctor — it is what helps you work with them.',
    ],
    sections: [
      {
        h: 'Why “your body is speaking”',
        p: 'Your body communicates constantly — through energy levels, sleep, digestion, skin, mood and more. Much of the time we ignore or explain away these signals until something forces our attention. The aim of MD-Neo Talks is to help you notice and understand them earlier, so you can act sooner and worry less.',
      },
      {
        h: 'What you can expect',
        p: 'Each video — and now each written article — takes a real medical topic and breaks it down the way I would explain it to my own family: in plain words, grounded in evidence, without fear-mongering. From organ health to nutrition, from warning signs to common conditions, the goal is always the same: make medical knowledge accessible and genuinely useful.',
      },
      {
        h: 'The bigger mission',
        p: 'There is a real gap between what medical science knows and what everyday people actually hear. Bridging that gap — clearly, reliably and freely — is the mission behind everything here. If a video helps one person ask a better question at their next appointment, or notice a warning sign a little sooner, it has done its job.',
      },
    ],
    seeDoctor:
      'Everything on MD-Neo Talks is education to help you understand your body — never a replacement for your own doctor. For anything affecting your personal health, please speak with a qualified healthcare professional.',
    bottomLine:
      'Your body is always talking. This channel exists to help you listen — in plain language, backed by evidence, and free for everyone. Welcome; I am glad you are here.',
  },

  '1uG4LYXaxIg': {
    readTime: 5,
    lead: 'Constipation and diarrhoea are two of the most common — and most telling — signals your gut sends. Both are usually short-lived and harmless, often tied to diet, travel or stress. But the pattern and how long they last carry useful information about your digestive health.',
    takeaways: [
      'Fibre, fluids and regular movement are the foundations of healthy digestion.',
      'Occasional changes are normal and usually resolve on their own.',
      'A lasting change in your normal bowel pattern is worth checking.',
      'Blood in the stool, or diarrhoea lasting more than a few days, needs medical attention.',
    ],
    sections: [
      {
        h: 'What your gut rhythm reveals',
        p: 'There is a wide range of “normal” — from a few times a day to a few times a week. What matters more than a fixed number is what is normal for you, and whether that has changed. Constipation often reflects too little fibre or fluid, low activity, or ignoring the urge to go. Diarrhoea is frequently caused by infections, food, stress or certain medications.',
      },
      {
        h: 'Simple ways to keep things regular',
        list: [
          'Eat enough fibre from vegetables, fruit, wholegrains and legumes',
          'Drink enough water through the day',
          'Move your body — physical activity helps the gut move too',
          'Do not routinely ignore the urge to go',
        ],
      },
      {
        h: 'When a change is worth noticing',
        p: 'Short episodes come and go. The signals worth acting on are a persistent change in your usual pattern, diarrhoea that lasts beyond a few days or causes dehydration, and — importantly — any blood in the stool. These deserve a proper look rather than waiting them out.',
      },
    ],
    seeDoctor:
      'See a doctor for diarrhoea lasting more than a few days or with signs of dehydration, any blood in the stool, unexplained weight loss, or a persistent change in your normal bowel habit — especially over the age of 40.',
    bottomLine:
      'Your bowels are a surprisingly honest health monitor. Occasional ups and downs are normal; a lasting change, dehydration, or blood is your cue to get checked.',
  },

  sYS1RU0Cs7A: {
    readTime: 5,
    lead: 'Urinary tract infections are extremely common and usually straightforward to treat — but a few warning signs mean an infection may be climbing to the kidneys, which is far more serious. Knowing the difference helps you act at the right moment.',
    takeaways: [
      'Typical UTI signs: burning when you urinate, needing to go often, and cloudy or strong-smelling urine.',
      'Fever, back or flank pain, and feeling generally unwell can signal a kidney infection.',
      'Drinking water helps, but bacterial UTIs often need antibiotics.',
      'UTIs in pregnancy, young children, or men always deserve prompt medical review.',
    ],
    sections: [
      {
        h: 'What a lower UTI feels like',
        p: 'Most UTIs affect the bladder and urethra. The classic symptoms are a burning or stinging sensation when passing urine, a frequent and urgent need to go (often producing little), lower abdominal discomfort, and cloudy or strong-smelling urine. These are uncomfortable but usually not dangerous when treated.',
      },
      {
        h: 'The warning signs it is spreading',
        list: [
          'Fever and chills',
          'Pain in the back or side (the flank), below the ribs',
          'Nausea or vomiting',
          'Feeling generally very unwell or confused (especially in older adults)',
        ],
      },
      {
        h: 'Why the kidneys change everything',
        p: 'When an infection travels up to the kidneys, it becomes a more serious illness that can affect the whole body and, if untreated, damage the kidneys or spread to the bloodstream. That is why the appearance of fever and back pain shifts a simple UTI into “seek care promptly” territory. Staying hydrated supports treatment, but it does not replace antibiotics when they are needed.',
      },
    ],
    seeDoctor:
      'See a doctor promptly for a UTI with fever, back or side pain, vomiting, or feeling very unwell — these suggest a possible kidney infection. Also seek care for UTIs during pregnancy, in children, in men, or any UTI that does not improve or keeps returning.',
    bottomLine:
      'Most UTIs are minor and easily treated — but fever and back pain are the signs that it may be reaching the kidneys. Recognising that shift, and getting antibiotics when needed, keeps a common infection from becoming a dangerous one.',
  },

  Rq8yipEuS94: {
    readTime: 5,
    lead: 'Your immune system fights off infections quietly in the background all the time. But certain signs mean an infection has the upper hand and needs medical help rather than just time and rest. Recognising them early can prevent a manageable problem from becoming a dangerous one.',
    takeaways: [
      'A high or persistent fever, spreading redness, and worsening pain are key warnings.',
      'Confusion, a very fast heartbeat, or breathlessness can signal a serious, body-wide infection.',
      'Wounds that get redder, hotter, more swollen or start oozing may be infected.',
      'Trust escalation: an infection getting worse rather than better is the pattern to act on.',
    ],
    sections: [
      {
        h: '7 signs an infection needs help',
        list: [
          'A fever that is very high or will not come down',
          'Redness around a wound that is spreading, especially with red streaks',
          'Increasing pain, swelling, warmth, or pus at a wound site',
          'Feeling confused, unusually drowsy, or “not yourself”',
          'A rapid heartbeat or fast breathing',
          'Shaking chills, or feeling colder and clammier as illness worsens',
          'Symptoms that keep getting worse instead of slowly improving',
        ],
      },
      {
        h: 'Why these matter: recognising sepsis',
        p: 'Some of these signs — confusion, fast heart rate and breathing, feeling extremely unwell — can point towards sepsis, the body’s dangerous, overwhelming response to infection. Sepsis is a medical emergency where every hour counts. You do not need to diagnose it yourself; you just need to recognise that “this infection is getting worse and I feel really unwell” is a reason to seek urgent help.',
      },
      {
        h: 'Everyday wound care',
        p: 'Most minor cuts and grazes heal fine with basic cleaning and covering. Keep an eye on them: healing wounds gradually improve, while infected ones get redder, more painful and more swollen over time. That direction of travel — better versus worse — is your simplest guide.',
      },
    ],
    seeDoctor:
      'Seek urgent care for signs of a spreading or severe infection — spreading redness or red streaks, high fever, confusion, a racing heart or breathlessness. If you ever think “this could be sepsis,” say those words to a health professional; it prompts fast action.',
    bottomLine:
      'Your body usually handles infections well, but it tells you when it is losing the fight. Spreading redness, high fever, confusion or breathlessness mean stop waiting and get help — quickly.',
  },

  XRhO4BHDwt4: {
    readTime: 5,
    lead: 'Calcium is essential for strong bones, healthy muscles and a steady heartbeat — but “essential” does not mean “everyone needs a supplement.” For a lot of people, food is the better and safer source, and taking calcium pills you do not need can carry its own risks.',
    takeaways: [
      'Most people can meet their calcium needs through diet alone.',
      'Good sources include dairy, leafy greens, tofu, tinned fish with bones, and fortified foods.',
      'Supplements help specific groups but are not automatically good for everyone.',
      'Vitamin D helps your body actually absorb the calcium you take in.',
    ],
    sections: [
      {
        h: 'Food first',
        p: 'Calcium from food comes packaged with other useful nutrients and is generally well absorbed and well tolerated. Dairy is the classic source, but there are plenty of alternatives: dark leafy greens, calcium-set tofu, tinned sardines or salmon (with the soft bones), almonds, and fortified plant milks and cereals. A varied diet gets many people to their target without a single tablet.',
      },
      {
        h: 'Who might genuinely benefit from a supplement',
        list: [
          'People who cannot get enough from food (for example, some who avoid dairy)',
          'Those with osteoporosis or a high fracture risk, on medical advice',
          'Certain older adults and post-menopausal women, if diet falls short',
          'People with specific conditions affecting calcium — guided by their doctor',
        ],
      },
      {
        h: 'Why “more” is not better',
        p: 'Very high calcium intake from supplements has been linked in some studies to kidney stones and, debated but worth noting, possible cardiovascular concerns — risks you do not run by getting calcium from food. And calcium works hand in hand with vitamin D, which is needed to absorb it. The sensible approach is: prioritise food, and supplement only for a clear reason, at the right dose.',
      },
    ],
    seeDoctor:
      'Before starting a calcium supplement — especially if you have kidney problems, heart disease, or a history of kidney stones — check with your doctor. They can advise whether you need one at all, and the right dose alongside vitamin D.',
    bottomLine:
      'Calcium matters, but a supplement is not a default. Build your intake from food first, remember vitamin D helps you absorb it, and reach for pills only when there is a real reason to.',
  },

  yMSBHMYKHoM: {
    readTime: 6,
    lead: 'Vitamin D is vital for strong bones, healthy muscles and a well-functioning immune system, and a large share of people run low on it — especially in winter. But the popular belief that “more is always better” is a genuine myth: very high doses can actually be harmful.',
    takeaways: [
      'Sunlight on the skin helps your body make vitamin D; many people still fall short, especially in winter.',
      'Low vitamin D can contribute to fatigue, low mood, aches and weaker bones.',
      'A sensible supplement helps if you are deficient or at risk.',
      'Extremely high doses can push blood calcium to dangerous levels — stick to recommended amounts.',
    ],
    sections: [
      {
        h: 'Why so many people are low',
        p: 'Your skin makes vitamin D when exposed to sunlight, but modern life, indoor work, higher latitudes, darker skin tones, sunscreen use and the winter months all reduce how much you produce. Food provides some (oily fish, eggs, fortified products), but often not enough on its own. This is why deficiency is common, and why many health bodies recommend a supplement during darker months.',
      },
      {
        h: 'What low levels can feel like',
        list: [
          'Persistent tiredness and low energy',
          'Low mood, particularly in winter',
          'Bone and muscle aches or weakness',
          'More frequent minor infections in some people',
        ],
      },
      {
        h: 'The real danger: too much',
        p: 'Because vitamin D is fat-soluble, it builds up in the body, and megadoses can cause toxicity. The core problem is that excess vitamin D drives blood calcium too high (hypercalcaemia), which can cause nausea, weakness, kidney stones and, in extreme cases, damage to the kidneys and heart rhythm. This almost never comes from sunlight or food — it comes from taking very high-dose supplements without guidance. Sensible, recommended doses are safe and effective; “more” is where the risk lies.',
      },
    ],
    seeDoctor:
      'A simple blood test can show whether you are truly low. Ask your doctor about the right dose for you rather than guessing — particularly before taking high-strength supplements, and if you have kidney problems or conditions affecting calcium.',
    bottomLine:
      'Vitamin D is one of the most worthwhile supplements for many people, especially in winter — but it is also one where excess genuinely backfires. Correct a real deficiency, stick to recommended doses, and leave the megadoses alone.',
  },
}

// Fallback body for any video without a hand-written article yet.
const fallbackArticle = (v) => ({
  readTime: 5,
  lead: `${v.blurb} In this episode of MD-Neo Talks, we break the topic down in clear, plain language so you can understand what is happening in your body and what to do about it.`,
  takeaways: [
    'A clear, jargon-free explanation of the topic.',
    'What to watch for and when it actually matters.',
    'Practical, everyday takeaways you can use.',
  ],
  sections: [
    {
      h: 'What you’ll learn',
      p: 'This article walks through the essentials in plain language — what the topic means for your body, the signs worth noticing, and the sensible steps that help. Watch the full episode above for the complete explanation.',
    },
  ],
  seeDoctor:
    'This article is general health education. For anything affecting your own health, please speak with a qualified healthcare professional.',
  bottomLine:
    'Understanding your body is the first step to looking after it. Watch the full video for the complete breakdown, and explore the rest of the library for more.',
})

export const POSTS = VIDEOS.map((v, i) => {
  const art = ARTICLES[v.id] || fallbackArticle(v)
  const cat = categoryMeta(v.category)
  return {
    ...v,
    ...art,
    slug: slugify(v.title),
    date: DATES[i] || '2026-01-01',
    excerpt: art.lead ? art.lead.slice(0, 155).trim() + '…' : v.blurb,
    category: v.category,
    categoryLabel: cat.label,
    accent: cat.accent,
    soft: cat.soft,
    emoji: cat.emoji,
    thumb: thumbUrl(v.id),
    thumbHq: thumbUrlHq(v.id),
    watch: watchUrl(v.id),
  }
})

// Parse view counts like "1.9k" or "867" into a sortable number.
export const numViews = (v) => {
  if (!v) return 0
  const s = String(v).toLowerCase().trim()
  if (s.endsWith('k')) return Math.round(parseFloat(s) * 1000)
  if (s.endsWith('m')) return Math.round(parseFloat(s) * 1000000)
  return parseInt(s.replace(/[^0-9]/g, ''), 10) || 0
}

// Posts ranked by views (best performing first).
export const postsByViews = (list = POSTS) =>
  [...list].sort((a, b) => numViews(b.views) - numViews(a.views))

export const postBySlug = (slug) => POSTS.find((p) => p.slug === slug)

export const relatedPosts = (post, n = 3) =>
  POSTS.filter((p) => p.slug !== post.slug && p.category === post.category)
    .concat(POSTS.filter((p) => p.category !== post.category))
    .slice(0, n)

export const formatDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number)
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ]
  return `${months[m - 1]} ${d}, ${y}`
}
