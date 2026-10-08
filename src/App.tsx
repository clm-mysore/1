/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

// ============================================================================
// CONFIGURATION & EXACT OFFICIAL VIDEOS & HOTLINE
// ============================================================================
export const MINISTRY_CONFIG = {
  name: "Christ's Love Ministries",
  founder: "Ruben Ranjith",
  title: "Founder & Trustee",
  establishedDate: "November 25, 2016",
  location: "Mysore, Karnataka, India",
  youtubeHandle: "@treasureforthedayclmmysuru2720",
  youtubeUrl: "https://www.youtube.com/@treasureforthedayclmmysuru2720",
  instagramUrl: "https://www.instagram.com/rubenranjith?stkn=bWtpN3ozbGhydmo=",
  instagramHandle: "@rubenranjith",
  facebookUrl: "https://www.facebook.com/share/1BfGqXS3wA/",
  facebookName: "Christ's Love Ministries Mysuru",
  // Official Contact / WhatsApp Hotline:
  contactPhone: "+91 9980027875",
  whatsappNumber: "919980027875",
  email: "christsloveministriesmysuru@gmail.com",
  bankDetails: {
    accountName: "Christ's Love Ministries Trust",
    accountNumber: "XXXXXXXXXXXXXX",
    bankName: "State Bank of India / HDFC Bank",
    ifscCode: "SBIN000XXXX",
    branch: "Mysuru, Karnataka",
    upiId: "christsloveministries@upi"
  }
};

// Official 6 YouTube Videos provided by the Ministry
export interface VideoItem {
  id: string;
  badgeEn: string;
  badgeKn: string;
  badgeHi: string;
  titleEn: string;
  titleKn: string;
  titleHi: string;
  speaker: string;
}

export const OFFICIAL_YOUTUBE_VIDEOS: VideoItem[] = [
  {
    id: "-WMNkmehk_g",
    badgeEn: "Today's Message",
    badgeKn: "ಇಂದಿನ ಸಂದೇಶ",
    badgeHi: "आज का संदेश",
    titleEn: "Treasure for the Day — Today's Divine Inspiration",
    titleKn: "ದಿನದ ನಿಧಿ — ಇಂದಿನ ದೈವಿಕ ಸಂದೇಶ",
    titleHi: "ट्रेजर फॉर द डे — आज की आत्मिक प्रेरणा",
    speaker: "Ruben Ranjith"
  },
  {
    id: "TeeUL-ixqg0",
    badgeEn: "Yesterday's Message",
    badgeKn: "ನಿನ್ನೆಯ ಸಂದೇಶ",
    badgeHi: "कल का संदेश",
    titleEn: "Treasure for the Day — Faith & Victorious Living",
    titleKn: "ದಿನದ ನಿಧಿ — ನಂಬಿಕೆ ಮತ್ತು ಜಯದ ಜೀವನ",
    titleHi: "ट्रेजर फॉर द डे — विश्वास और विजयी जीवन",
    speaker: "Ruben Ranjith"
  },
  {
    id: "u100oAwDlnQ",
    badgeEn: "Recent Video 3",
    badgeKn: "ಇತ್ತೀಚಿನ ವೀಡಿಯೊ 3",
    badgeHi: "हालिया वीडियो 3",
    titleEn: "Walking in Divine Purpose & God's Promises",
    titleKn: "ದೈವಿಕ ಉದ್ದೇಶ ಮತ್ತು ದೇವರ ವಾಗ್ದಾನಗಳಲ್ಲಿ ನಡೆಯುವುದು",
    titleHi: "ईश्वरीय उद्देश्य और परमेश्वर की प्रतिज्ञाओं में चलना",
    speaker: "Ruben Ranjith"
  },
  {
    id: "D11pEOfx1DM",
    badgeEn: "Recent Video 4",
    badgeKn: "ಇತ್ತೀಚಿನ ವೀಡಿಯೊ 4",
    badgeHi: "हालिया वीडियो 4",
    titleEn: "The Power of Persistent Prayer & Intercession",
    titleKn: "ನಿರಂತರ ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಮಧ್ಯಸ್ಥಿಕೆಯ ಸಾಮರ್ಥ್ಯ",
    titleHi: "निरंतर प्रार्थना और मध्यस्थता की सामर्थ्य",
    speaker: "Ruben Ranjith"
  },
  {
    id: "5C2vX9fFLuo",
    badgeEn: "Recent Video 5",
    badgeKn: "ಇತ್ತೀಚಿನ ವೀಡಿಯೊ 5",
    badgeHi: "हालिया वीडियो 5",
    titleEn: "Overcoming Anxiety with Heavenly Peace",
    titleKn: "ಪರಲೋಕದ ಶಾಂತಿಯಿಂದ ಆತಂಕವನ್ನು ಜಯಿಸುವುದು",
    titleHi: "स्वर्गीय शांति से चिंताओं पर विजय",
    speaker: "Ruben Ranjith"
  },
  {
    id: "wXUuXIlSwzs",
    badgeEn: "Recent Video 6",
    badgeKn: "ಇತ್ತೀಚಿನ ವೀಡಿಯೊ 6",
    badgeHi: "हालिया वीडियो 6",
    titleEn: "Strength in the Storm — Christ's Love Fellowship",
    titleKn: "ಬಿರುಗಾಳಿಯಲ್ಲಿ ಬಲ — ಕ್ರಿಸ್ತನ ಪ್ರೀತಿಯ ಒಡನಾಟ",
    titleHi: "तूफानों में सामर्थ्य — मसीह का प्रेम संगति",
    speaker: "Ruben Ranjith"
  }
];

export type Language = 'en' | 'kn' | 'hi';

const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      pillars: "Four Pillars",
      media: "Video Player",
      community: "Active Community People",
      prayer: "Prayer Request",
      donate: "Support Us",
      contact: "Contact"
    },
    hero: {
      badge: "Est. November 25, 2016 • Mysuru, Karnataka",
      heading: "Spreading Love, Faith, Hope & Education",
      subheading: "Christ's Love Ministries, Mysore (Serving since Nov 25, 2016) under Founder & Trustee Ruben Ranjith through Church Pioneering, Education Centre, Social Work, and Daily Devotional Content.",
      watchBtn: "Watch Today's Message",
      prayerBtn: "WhatsApp Prayer Request",
      tagline: "“For we walk by faith, not by sight.” — Dedicated to transforming lives across Karnataka."
    },
    communityMetrics: {
      badge: "Global Impact & Network",
      title: "Active Community People",
      subtitle: "Connecting believers, students, and families across Karnataka and worldwide through active digital devotionals and grassroots community outreach.",
      ytLabel: "YouTube Community",
      ytSub: "@treasureforthedayclmmysuru2720 • Daily Video Messages & Devotionals by Ruben Ranjith",
      igLabel: "Instagram Outreach",
      igSub: "@rubenranjith • Daily Spiritual Quotes & Youth Ministry Updates",
      fbLabel: "Facebook Fellowship",
      fbSub: "Christ's Love Ministries • Ministry Highlights & Church Pioneering",
      visitChannelBtn: "Visit Official YouTube Channel"
    },
    about: {
      badge: "Our Heritage & Calling",
      title: "Rooted in Faith, Dedicated to Service",
      subtitle: "Founded on November 25, 2016 in Mysuru, Karnataka by Ruben Ranjith.",
      founderBadge: "Founder & Trustee",
      founderName: "Ruben Ranjith",
      founderTitle: "Visionary Pastor, Educator & Social Worker",
      p1: "Christ's Love Ministries was established on November 25, 2016 in the heritage city of Mysuru, Karnataka. Under the prayerful guidance of Founder & Trustee Ruben Ranjith, our sacred mission is to spread Christ's unconditional love through spiritual revival, church pioneering, and holistic community transformation.",
      p2: "Over the past decade, the ministry has nurtured vibrant faith communities, launched free educational tuition centers for needy children, and extended critical relief and support to widows and underprivileged families across Karnataka.",
      p3: "Through 'Treasure for the Day', Ruben Ranjith ministers daily to thousands across the globe with audio-visual devotionals anchored in God's promises.",
      quote: "“Our calling is not only to preach hope, but to be the hands and feet of Christ to those who need education, dignity, and prayerful support.”",
      pillarsBtn: "Our 4 Core Pillars"
    },
    pillars: {
      badge: "Core Pillars",
      title: "Four Pillars of Christ's Love Ministries",
      subtitle: "A balanced, four-fold vision touching both spiritual depth and practical social transformation.",
      p1Title: "Church Pioneering",
      p1Desc: "Planting and nurturing Bible-based, prayer-centered church fellowships across Mysore and neighboring districts of Karnataka, bringing revival and hope.",
      p2Title: "Education Centre",
      p2Desc: "Providing free tuition, notebooks, school bags, and value-based education to underprivileged children in Mysore.",
      p3Title: "Community Social Work",
      p3Desc: "Organizing medical check-ups, food distribution drives, widows' support, emergency relief, and compassionate care for vulnerable families.",
      p4Title: "Treasure for the Day",
      p4Desc: "Daily inspirational video messages and scriptures by Ruben Ranjith on YouTube (@treasureforthedayclmmysuru2720) to uplift souls daily."
    },
    media: {
      badge: "Embedded Video Player",
      title: "Official YouTube Video Broadcasts",
      subtitle: "Click any video below to stream Ruben Ranjith's message directly inside our player without leaving the website.",
      nowPlaying: "Now Playing in Player",
      inlineNote: "Direct inline playback • Official Videos from @treasureforthedayclmmysuru2720",
      selectTitle: "Select Daily Message to Play (6 Official Videos):"
    },
    prayer: {
      badge: "Direct Intercession",
      title: "Prayer Request via WhatsApp",
      subtitle: "Send your prayer requests directly to Ruben Ranjith and our pastoral intercession team via WhatsApp (+91 9980027875). No email registration required.",
      nameLabel: "Your Full Name *",
      namePlaceholder: "e.g., Joseph Samuel",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+91 99800 27875",
      messageLabel: "Prayer Request Message *",
      messagePlaceholder: "Write your burdens, thanksgiving, or specific prayer requirements here in detail...",
      sendBtn: "Send Directly on WhatsApp (+91 9980027875)",
      note: "Your confidentiality is strictly preserved. All messages route directly to WhatsApp number +91 9980027875."
    },
    support: {
      badge: "Partner With Us",
      title: "Support Education & Community Relief",
      subtitle: "Your charitable partnership helps us sustain free evening tuitions, feed impoverished families, and plant churches across Karnataka.",
      bankTitle: "Official Bank Account Transfer (NEFT / IMPS)",
      bankName: "Bank:",
      accountName: "Account Name:",
      accountNo: "Account No:",
      ifsc: "IFSC Code:",
      branch: "Branch:",
      upiTitle: "Instant UPI Donation (Google Pay / PhonePe / Paytm)",
      upiIdLabel: "Direct UPI ID:",
      copyBtn: "Copy",
      copied: "Copied!",
      scannerNote: "Scan using any UPI App to donate towards free children education & social work in Mysuru."
    },
    contact: {
      badge: "Get in Touch",
      title: "Ministry Office & Sanctuary",
      subtitle: "Located in the historic city of Mysuru, Karnataka, India.",
      hotlineTitle: "Official Contact & WhatsApp Hotline",
      hotlineDesc: "Direct helpline for prayer, inquiries, pastoral counsel, or community initiatives.",
      addressTitle: "Sanctuary Address",
      addressDesc: "Christ's Love Ministries Trust, Mysuru, Karnataka 570001, India.",
      timingsTitle: "Ministry Gatherings & Visiting Hours",
      timingsDesc: "Sunday Worship: 9:30 AM | Mid-week Intercession: Wednesday 6:30 PM | Daily Devotional: 6:00 AM on YouTube."
    },
    footer: {
      tagline: "Spreading Love, Faith, Hope & Education since November 25, 2016.",
      rights: "Christ's Love Ministries (Regd). All rights reserved."
    }
  },

  kn: {
    nav: {
      home: "ಮುಖಪುಟ",
      about: "ನಮ್ಮ ಬಗ್ಗೆ",
      pillars: "ನಾಲ್ಕು ಸ್ತಂಭಗಳು",
      media: "ವೀಡಿಯೊ ಪ್ಲೇಯರ್",
      community: "ಸಮುದಾಯದ ಸದಸ್ಯರು",
      prayer: "ಪ್ರಾರ್ಥನಾ ವಿನಂತಿ",
      donate: "ಸಹಾಯ ಮಾಡಿ",
      contact: "ಸಂಪರ್ಕ"
    },
    hero: {
      badge: "ಸ್ಥಾಪನೆ: ನವೆಂಬರ್ 25, 2016 • ಮೈಸೂರು, ಕರ್ನಾಟಕ",
      heading: "ಪ್ರೀತಿ, ನಂಬಿಕೆ, ನಿರೀಕ್ಷೆ ಮತ್ತು ಶಿಕ್ಷಣವನ್ನು ಹರಡುವುದು",
      subheading: "ಕ್ರೈಸ್ಟ್ಸ್ ಲವ್ ಮಿನಿಸ್ಟ್ರೀಸ್, ಮೈಸೂರು (ನವೆಂಬರ್ 25, 2016 ರಿಂದ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದೆ) - ಸಂಸ್ಥಾಪಕರು ಮತ್ತು ಟ್ರಸ್ಟಿ ರೂಬೆನ್ ರಂಜಿತ್ ನೇತೃತ್ವದಲ್ಲಿ ಚರ್ಚ್ ಸ್ಥಾಪನೆ, ಶಿಕ್ಷಣ ಕೇಂದ್ರ, ಸಮಾಜ ಸೇವೆ ಮತ್ತು ದೈನಂದಿನ ಭಕ್ತಿ ಸಂದೇಶಗಳು.",
      watchBtn: "ಇಂದಿನ ಸಂದೇಶವನ್ನು ವೀಕ್ಷಿಸಿ",
      prayerBtn: "ವಾಟ್ಸಾಪ್ ಪ್ರಾರ್ಥನಾ ವಿನಂತಿ",
      tagline: "“ನಾವು ನೋಟದಿಂದಲ್ಲ, ನಂಬಿಕೆಯಿಂದಲೇ ನಡೆಯುತ್ತೇವೆ.” — ಕರ್ನಾಟಕದಾದ್ಯಂತ ಜನರ ಜೀವನವನ್ನು ಪರಿವರ್ತಿಸಲು ಸಮರ್ಪಿತ."
    },
    communityMetrics: {
      badge: "ಜಾಗತಿಕ ಪ್ರಭಾವ ಮತ್ತು ನೆಟ್‌ವರ್ಕ್",
      title: "ಸಕ್ರಿಯ ಸಮುದಾಯದ ಸದಸ್ಯರು",
      subtitle: "ದೈನಂದಿನ ಡಿಜಿಟಲ್ ಭಕ್ತಿ ಸಂದೇಶಗಳು ಮತ್ತು ತಳಮಟ್ಟದ ಸಮಾಜ ಸೇವೆಯ ಮೂಲಕ ಕರ್ನಾಟಕ ಮತ್ತು ಪ್ರಪಂಚದಾದ್ಯಂತ ಜನರನ್ನು ಬೆಸೆಯುವುದು.",
      ytLabel: "ಯೂಟ್ಯೂಬ್ ಸಮುದಾಯ",
      ytSub: "@treasureforthedayclmmysuru2720 • ರೂಬೆನ್ ರಂಜಿತ್ ಅವರ ದೈನಂದಿನ ವೀಡಿಯೊ ಸಂದೇಶಗಳು",
      igLabel: "ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್ ಸೇವೆ",
      igSub: "@rubenranjith • ದೈನಂದಿನ ಆತ್ಮಿಕ ಸಂದೇಶಗಳು ಮತ್ತು ಯುವ ಸಚಿವಾಲಯದ ನವೀಕರಣಗಳು",
      fbLabel: "ಫೇಸ್‌ಬುಕ್ ಸಹಭಾಗಿತ್ವ",
      fbSub: "ಕ್ರೈಸ್ಟ್ಸ್ ಲವ್ ಮಿನಿಸ್ಟ್ರೀಸ್ • ಸಚಿವಾಲಯದ ಮುಖ್ಯಾಂಶಗಳು ಮತ್ತು ಚರ್ಚ್ ಸ್ಥಾಪನೆ",
      visitChannelBtn: "ಅಧಿಕೃತ ಯೂಟ್ಯೂಬ್ ಚಾನಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ"
    },
    about: {
      badge: "ನಮ್ಮ ಪರಂಪರೆ ಮತ್ತು ದೈವಿಕ ಕರೆ",
      title: "ನಂಬಿಕೆಯಲ್ಲಿ ಬೇರೂರಿದೆ, ಸೇವೆಗೆ ಮುಡಿಪಾಗಿದೆ",
      subtitle: "ನವೆಂಬರ್ 25, 2016 ರಂದು ಕರ್ನಾಟಕದ ಮೈಸೂರಿನಲ್ಲಿ ರೂಬೆನ್ ರಂಜಿತ್ ಅವರಿಂದ ಸ್ಥಾಪಿತ.",
      founderBadge: "ಸಂಸ್ಥಾಪಕರು ಮತ್ತು ಟ್ರಸ್ಟಿ",
      founderName: "ರೂಬೆನ್ ರಂಜಿತ್",
      founderTitle: "ದೂರದೃಷ್ಟಿಯ ಪಾಸ್ಟರ್, ಶಿಕ್ಷಣತಜ್ಞ ಮತ್ತು ಸಮಾಜ ಸೇವಕರು",
      p1: "ಕ್ರೈಸ್ಟ್ಸ್ ಲವ್ ಮಿನಿಸ್ಟ್ರೀಸ್ ನವೆಂಬರ್ 25, 2016 ರಂದು ಮೈಸೂರು ಸಾಂಸ್ಕೃತಿಕ ನಗರದಲ್ಲಿ ಸ್ಥಾಪನೆಯಾಯಿತು. ಸಂಸ್ಥಾಪಕರು ಮತ್ತು ಟ್ರಸ್ಟಿ ರೂಬೆನ್ ರಂಜಿತ್ ಅವರ ಪ್ರಾರ್ಥನಾಪೂರ್ವಕ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ, ಸುವಾರ್ತೆ ಪ್ರಚಾರ, ಚರ್ಚ್ ಸ್ಥಾಪನೆ ಮತ್ತು ಸಮಗ್ರ ಸಮಾಜ ಸುಧಾರಣೆಯ ಮೂಲಕ ಕ್ರಿಸ್ತನ ಪ್ರೀತಿಯನ್ನು ಸಾರಲಾಗುತ್ತಿದೆ.",
      p2: "ಕಳೆದ ದಶಕದಲ್ಲಿ, ಈ ಸಚಿವಾಲಯವು ಪ್ರಾರ್ಥನಾ ಸಭೆಗಳನ್ನು ಸ್ಥಾಪಿಸಿದೆ, ಅಗತ್ಯವಿರುವ ಮಕ್ಕಳಿಗೆ ಉಚಿತ ಸಂಜೆ ಶಿಕ್ಷಣ ಕೇಂದ್ರಗಳನ್ನು ಆರಂಭಿಸಿದೆ ಮತ್ತು ಕರ್ನಾಟಕದಾದ್ಯಂತ ವಿಧವೆಯರು ಹಾಗೂ ಬಡ ಕುಟುಂಬಗಳಿಗೆ ಅಗತ್ಯ ನೆರವು ನೀಡಿದೆ.",
      p3: "'ದಿನದ ನಿಧಿ' (Treasure for the Day) ಮೂಲಕ ರೂಬೆನ್ ರಂಜಿತ್ ಅವರು ಪ್ರತಿದಿನ ಜಗತ್ತಿನ ಸಾವಿರಾರು ಜನರಿಗೆ ದೇವರ ವಾಕ್ಯ ಮತ್ತು ಆಶೀರ್ವಾದದ ಸಂದೇಶವನ್ನು ನೀಡುತ್ತಿದ್ದಾರೆ.",
      quote: "“ನಮ್ಮ ಕರೆಯು ಕೇವಲ ನಿರೀಕ್ಷೆಯನ್ನು ಸಾರುವುದಲ್ಲ, ಶಿಕ್ಷಣ, ಗೌರವ ಮತ್ತು ಪ್ರಾರ್ಥನೆಯ ಅಗತ್ಯವಿರುವ ಜನರಿಗೆ ಪ್ರೀತಿಯ ಹಸ್ತವನ್ನು ಚಾಚುವುದಾಗಿದೆ.”",
      pillarsBtn: "ನಮ್ಮ 4 ಪ್ರಮುಖ ಸ್ತಂಭಗಳು"
    },
    pillars: {
      badge: "ಪ್ರಮುಖ ಸ್ತಂಭಗಳು",
      title: "ಕ್ರೈಸ್ಟ್ಸ್ ಲವ್ ಮಿನಿಸ್ಟ್ರೀಸ್‌ನ ನಾಲ್ಕು ಸ್ತಂಭಗಳು",
      subtitle: "ಆತ್ಮಿಕ ಬೆಳವಣಿಗೆ ಮತ್ತು ಪ್ರಾಯೋಗಿಕ ಸಮಾಜ ಪರಿವರ್ತನೆಯ ಸಮತೋಲಿತ ನಾಲ್ಕು ಮುಖಗಳ ದೃಷ್ಟಿಕೋನ.",
      p1Title: "ಚರ್ಚ್ ಸ್ಥಾಪನೆ",
      p1Desc: "ಮೈಸೂರು ಮತ್ತು ಕರ್ನಾಟಕದಾದ್ಯಂತ ಬೈಬಲ್ ಆಧಾರಿತ, ಪ್ರಾರ್ಥನಾ ಕೇಂದ್ರಿತ ಚರ್ಚ್ ಫೆಲೋಶಿಪ್‌ಗಳನ್ನು ಸ್ಥಾಪಿಸುವುದು ಮತ್ತು ಪೋಷಿಸುವುದು.",
      p2Title: "ಶಿಕ್ಷಣ ಕೇಂದ್ರ",
      p2Desc: "ಮೈಸೂರಿನ ಹಿಂದುಳಿದ ಮಕ್ಕಳಿಗೆ ಉಚಿತ ಬೋಧನೆ, ಪುಸ್ತಕಗಳು, ಬ್ಯಾಗ್‌ಗಳು ಮತ್ತು ನೈತಿಕ ಶಿಕ್ಷಣವನ್ನು ಒದಗಿಸುವುದು.",
      p3Title: "ಸಮುದಾಯ ಸಮಾಜ ಸೇವೆ",
      p3Desc: "ಉಚಿತ ಆರೋಗ್ಯ ತಪಾಸಣೆ, ಆಹಾರ ವಿತರಣೆ, ವಿಧವೆಯರ ಬೆಂಬಲ, ತುರ್ತು ಪರಿಹಾರ ಮತ್ತು ಅಗತ್ಯವಿರುವ ಕುಟುಂಬಗಳಿಗೆ ಸಾಂತ್ವನ ನೀಡುವುದು.",
      p4Title: "ದಿನದ ನಿಧಿ",
      p4Desc: "ಯೂಟ್ಯೂಬ್‌ನಲ್ಲಿ (@treasureforthedayclmmysuru2720) ರೂಬೆನ್ ರಂಜಿತ್ ಅವರ ದೈನಂದಿನ ಪ್ರೇರಣಾದಾಯಕ ಸಂದೇಶಗಳು."
    },
    media: {
      badge: "ವೀಡಿಯೊ ಪ್ಲೇಯರ್",
      title: "ಅಧಿಕೃತ ಯೂಟ್ಯೂಬ್ ವೀಡಿಯೊ ಪ್ರಸಾರಗಳು",
      subtitle: "ವೆಬ್‌ಸೈಟ್‌ನಿಂದ ಹೊರಹೋಗದೆ ನೇರವಾಗಿ ನಮ್ಮ ಪ್ಲೇಯರ್‌ನಲ್ಲಿ ರೂಬೆನ್ ರಂಜಿತ್ ಅವರ ಸಂದೇಶವನ್ನು ವೀಕ್ಷಿಸಲು ಕೆಳಗಿನ ಯಾವುದೇ ವೀಡಿಯೊವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.",
      nowPlaying: "ಪ್ಲೇಯರ್‌ನಲ್ಲಿ ಪ್ರಸಾರವಾಗುತ್ತಿದೆ",
      inlineNote: "ನೇರ ಇನ್‌ಲೈನ್ ಪ್ಲೇಬ್ಯಾಕ್ • @treasureforthedayclmmysuru2720 ಅಧಿಕೃತ ವೀಡಿಯೊಗಳು",
      selectTitle: "ವೀಕ್ಷಿಸಲು ದೈನಂದಿನ ಸಂದೇಶವನ್ನು ಆರಿಸಿ (6 ಅಧಿಕೃತ ವೀಡಿಯೊಗಳು):"
    },
    prayer: {
      badge: "ನೇರ ಮಧ್ಯಸ್ಥಿಕೆ ಪ್ರಾರ್ಥನೆ",
      title: "ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಪ್ರಾರ್ಥನಾ ವಿನಂತಿ",
      subtitle: "ಯಾವುದೇ ಇಮೇಲ್ ನೋಂದಣಿ ಅಗತ್ಯವಿಲ್ಲದೇ, ವಾಟ್ಸಾಪ್ (+91 9980027875) ಮೂಲಕ ರೂಬೆನ್ ರಂಜಿತ್ ಮತ್ತು ನಮ್ಮ ಪ್ರಾರ್ಥನಾ ತಂಡಕ್ಕೆ ನೇರವಾಗಿ ನಿಮ್ಮ ಪ್ರಾರ್ಥನಾ ಕೋರಿಕೆಗಳನ್ನು ಕಳುಹಿಸಿ.",
      nameLabel: "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು *",
      namePlaceholder: "ಉದಾಹರಣೆಗೆ: ಜೋಸೆಫ್ ಸ್ಯಾಮ್ಯುಯೆಲ್",
      phoneLabel: "ಫೋನ್ ಸಂಖ್ಯೆ",
      phonePlaceholder: "+91 99800 27875",
      messageLabel: "ನಿಮ್ಮ ಪ್ರಾರ್ಥನಾ ವಿನಂತಿಯ ವಿವರ *",
      messagePlaceholder: "ನಿಮ್ಮ ಸಂಕಷ್ಟಗಳು, ಧನ್ಯವಾದಗಳು ಅಥವಾ ನಿರ್ದಿಷ್ಟ ಪ್ರಾರ್ಥನಾ ಅಗತ್ಯಗಳನ್ನು ಇಲ್ಲಿ ವಿವರವಾಗಿ ಬರೆಯಿರಿ...",
      sendBtn: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ನೇರವಾಗಿ ಕಳುಹಿಸಿ (+91 9980027875)",
      note: "ನಿಮ್ಮ ಗೌಪ್ಯತೆಯನ್ನು ರಕ್ಷಿಸಲಾಗುತ್ತದೆ. ಸಂದೇಶಗಳು ನೇರವಾಗಿ ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ +91 9980027875 ಗೆ ಹೋಗುತ್ತವೆ."
    },
    support: {
      badge: "ನಮ್ಮೊಂದಿಗೆ ಕೈಜೋಡಿಸಿ",
      title: "ಶಿಕ್ಷಣ ಮತ್ತು ಸಮುದಾಯ ಸೇವೆಗೆ ನೆರವಾಗಿ",
      subtitle: "ನಿಮ್ಮ ದಾನವು ಉಚಿತ ಶಿಕ್ಷಣ ನೀಡಲು, ಬಡ ಕುಟುಂಬಗಳಿಗೆ ಅನ್ನದಾನ ಮಾಡಲು ಮತ್ತು ಚರ್ಚ್ ಸ್ಥಾಪಿಸಲು ನೆರವಾಗುತ್ತದೆ.",
      bankTitle: "ಅಧಿಕೃತ ಬ್ಯಾಂಕ್ ಖಾತೆ ವರ್ಗಾವಣೆ (NEFT / IMPS)",
      bankName: "ಬ್ಯಾಂಕ್:",
      accountName: "ಖಾತೆದಾರರ ಹೆಸರು:",
      accountNo: "ಖಾತೆ ಸಂಖ್ಯೆ:",
      ifsc: "IFSC ಕೋಡ್:",
      branch: "ಶಾಖೆ:",
      upiTitle: "ತ್ವರಿತ ಯುಪಿಐ ದೇಣಿಗೆ (Google Pay / PhonePe / Paytm)",
      upiIdLabel: "ನೇರ ಯುಪಿಐ ಐಡಿ:",
      copyBtn: "ಕಾಪಿ ಮಾಡಿ",
      copied: "ಕಾಪಿಯಾಗಿದೆ!",
      scannerNote: "ಮಕ್ಕಳ ಉಚಿತ ಶಿಕ್ಷಣ ಮತ್ತು ಸಮಾಜ ಸೇವೆಗೆ ದೇಣಿಗೆ ನೀಡಲು ಯಾವುದೇ UPI ಆಪ್ ಬಳಸಿ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ."
    },
    contact: {
      badge: "ಸಂಪರ್ಕಿಸಿ",
      title: "ಸಚಿವಾಲಯದ ಕಚೇರಿ ಮತ್ತು ಪ್ರಾರ್ಥನಾಲಯ",
      subtitle: "ಕರ್ನಾಟಕದ ಐತಿಹಾಸಿಕ ನಗರ ಮೈಸೂರಿನಲ್ಲಿದೆ.",
      hotlineTitle: "ಅಧಿಕೃತ ಸಂಪರ್ಕ ಮತ್ತು ವಾಟ್ಸಾಪ್ ಸಹಾಯವಾಣಿ",
      hotlineDesc: "ಪ್ರಾರ್ಥನೆ, ವಿಚಾರಣೆಗಳು ಮತ್ತು ಸಮಾಜ ಸೇವೆಗಾಗಿ ನೇರ ಸಹಾಯವಾಣಿ.",
      addressTitle: "ಕಚೇರಿ ವಿಳಾಸ",
      addressDesc: "ಕ್ರೈಸ್ಟ್ಸ್ ಲವ್ ಮಿನಿಸ್ಟ್ರೀಸ್ ಟ್ರಸ್ಟ್, ಮೈಸೂರು, ಕರ್ನಾಟಕ 570001, ಭಾರತ.",
      timingsTitle: "ಪ್ರಾರ್ಥನಾ ಸಮಯಗಳು",
      timingsDesc: "ಭಾನುವಾರದ ಆರಾಧನೆ: ಬೆಳಗ್ಗೆ 9:30 | ವಾರದ ಮಧ್ಯದ ಪ್ರಾರ್ಥನೆ: ಬುಧವಾರ ಸಂಜೆ 6:30 | ದೈನಂದಿನ ವಾಕ್ಯ: ಬೆಳಗ್ಗೆ 6:00 (ಯೂಟ್ಯೂಬ್)."
    },
    footer: {
      tagline: "ನವೆಂಬರ್ 25, 2016 ರಿಂದ ಪ್ರೀತಿ, ನಂಬಿಕೆ, ನಿರೀಕ್ಷೆ ಮತ್ತು ಶಿಕ್ಷಣವನ್ನು ಹರಡುತ್ತಿದೆ.",
      rights: "ಕ್ರೈಸ್ಟ್ಸ್ ಲವ್ ಮಿನಿಸ್ಟ್ರೀಸ್ (ರಿ). ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ."
    }
  },

  hi: {
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      pillars: "चार स्तंभ",
      media: "वीडियो प्लेयर",
      community: "सक्रिय समुदाय के लोग",
      prayer: "प्रार्थना निवेदन",
      donate: "सहयोग करें",
      contact: "संपर्क"
    },
    hero: {
      badge: "स्थापना: 25 नवंबर 2016 • मैसूर, कर्नाटक",
      heading: "प्रेम, विश्वास, आशा और शिक्षा का प्रसार",
      subheading: "क्राइस्ट्स लव मिनिस्ट्रीज, मैसूर (25 नवंबर 2016 से निरंतर सेवारत) - संस्थापक और ट्रस्टी रूबेन रंजीत के मार्गदर्शन में कलीसिया स्थापना, शिक्षा केंद्र, समाज सेवा और दैनिक आत्मिक संदेश।",
      watchBtn: "आज का संदेश देखें",
      prayerBtn: "व्हाट्सएप प्रार्थना निवेदन",
      tagline: "“क्योंकि हम रूप देखकर नहीं, पर विश्वास से चलते हैं।” — कर्नाटक भर में जीवन बदलने हेतु समर्पित।"
    },
    communityMetrics: {
      badge: "वैश्विक प्रभाव और नेटवर्क",
      title: "सक्रिय समुदाय के लोग",
      subtitle: "दैनिक डिजिटल वचनों और जमीनी स्तर पर सेवा कार्यों द्वारा कर्नाटक और दुनिया भर के परिवारों को जोड़ना।",
      ytLabel: "यूट्यूब समुदाय",
      ytSub: "@treasureforthedayclmmysuru2720 • रूबेन रंजीत द्वारा दैनिक आत्मिक वीडियो संदेश",
      igLabel: "इंस्टाग्राम सेवा",
      igSub: "@rubenranjith • दैनिक आत्मिक विचार और युवा सेवा की जानकारी",
      fbLabel: "फेसबुक संगति",
      fbSub: "क्राइस्ट्स लव मिनिस्ट्रीज • मंत्रालय की झलकियां और कलीसिया स्थापना",
      visitChannelBtn: "आधिकारिक यूट्यूब चैनल पर जाएं"
    },
    about: {
      badge: "हमारी विरासत और ईश्वरीय बुलाहट",
      title: "विश्वास में दृढ़, सेवा के लिए समर्पित",
      subtitle: "25 नवंबर 2016 को मैसूर, कर्नाटक में रूबेन रंजीत द्वारा स्थापित।",
      founderBadge: "संस्थापक और ट्रस्टी",
      founderName: "रूबेन रंजीत",
      founderTitle: "दूरदर्शी पास्टर, शिक्षक और समाज सेवी",
      p1: "क्राइस्ट्स लव मिनिस्ट्रीज की स्थापना 25 नवंबर 2016 को ऐतिहासिक शहर मैसूर, कर्नाटक में हुई थी। संस्थापक और ट्रस्टी रूबेन रंजीत के प्रार्थनापूर्ण नेतृत्व में, हमारा पावन उद्देश्य आत्मिक जागृति, कलीसिया स्थापना और समग्र समाज कल्याण के माध्यम से मसीह के प्रेम को फैलाना है।",
      p2: "पिछले एक दशक में, इस मंत्रालय ने जीवंत कलीसियाई संगतियों को रोपा है, जरूरतमंद बच्चों के लिए मुफ्त संध्याकालीन शिक्षा केंद्र शुरू किए हैं, और विधवाओं तथा निर्धन परिवारों को महत्वपूर्ण राहत पहुंचाई है।",
      p3: "'ट्रेजर फॉर द डे' (Treasure for the Day) के माध्यम से रूबेन रंजीत प्रतिदिन विश्व भर के हजारों लोगों को परमेश्वर के वचनों और प्रार्थना से प्रेरित करते हैं।",
      quote: "“हमारी बुलाहट केवल आशा का प्रचार करना नहीं है, बल्कि उन लोगों के लिए मसीह के हाथ और पैर बनना है जिन्हें शिक्षा, सम्मान और प्रार्थना की आवश्यकता है।”",
      pillarsBtn: "हमारे 4 मुख्य स्तंभ"
    },
    pillars: {
      badge: "मुख्य स्तंभ",
      title: "क्राइस्ट्स लव मिनिस्ट्रीज के चार आधार स्तंभ",
      subtitle: "आत्मिक गहराई और व्यावहारिक सामाजिक बदलाव को छूने वाला संतुलित चार-आयामी दृष्टिकोण।",
      p1Title: "कलीसिया स्थापना",
      p1Desc: "मैसूर और कर्नाटक के पड़ोसी जिलों में बाइबल-आधारित, प्रार्थना-केंद्रित कलीसियाई संगतियों की स्थापना और पोषण करना।",
      p2Title: "शिक्षा केंद्र",
      p2Desc: "मैसूर के वंचित बच्चों को मुफ्त ट्यूशन, नोटबुक, स्कूल बैग और नैतिक शिक्षा प्रदान करना।",
      p3Title: "सामुदायिक समाज कार्य",
      p3Desc: "निःशुल्क स्वास्थ्य जांच, राशन वितरण, विधवाओं की सहायता, आपातकालीन राहत और जरूरतमंद परिवारों की देखभाल।",
      p4Title: "ट्रेजर फॉर द डे",
      p4Desc: "यूट्यूब (@treasureforthedayclmmysuru2720) पर रूबेन रंजीत द्वारा दैनिक प्रेरक वीडियो संदेश और पवित्र वचन।"
    },
    media: {
      badge: "वीडियो प्लेयर",
      title: "आधिकारिक यूट्यूब वीडियो प्रसारण",
      subtitle: "वेबसाइट छोड़े बिना सीधे हमारे प्लेयर में रूबेन रंजीत का संदेश सुनने के लिए नीचे दिए गए किसी भी वीडियो पर क्लिक करें।",
      nowPlaying: "प्लेयर में प्रसारित हो रहा है",
      inlineNote: "सीधा इनलाइन प्लेबैक • @treasureforthedayclmmysuru2720 आधिकारिक वीडियो",
      selectTitle: "चलाने के लिए दैनिक संदेश चुनें (6 आधिकारिक वीडियो):"
    },
    prayer: {
      badge: "सीधी मध्यस्थता प्रार्थना",
      title: "व्हाट्सएप द्वारा प्रार्थना निवेदन",
      subtitle: "बिना किसी ईमेल पंजीकरण के, सीधे व्हाट्सएप (+91 9980027875) पर रूबेन रंजीत और हमारी पास्टोरल प्रार्थना टीम को अपना प्रार्थना निवेदन भेजें।",
      nameLabel: "आपका पूरा नाम *",
      namePlaceholder: "उदा: जोसेफ सैमुअल",
      phoneLabel: "फोन नंबर",
      phonePlaceholder: "+91 99800 27875",
      messageLabel: "प्रार्थना निवेदन का विवरण *",
      messagePlaceholder: "अपनी समस्याएं, धन्यवाद या विशेष प्रार्थना की जरूरतें यहां विस्तार से लिखें...",
      sendBtn: "सीधे व्हाट्सएप पर भेजें (+91 9980027875)",
      note: "आपकी गोपनीयता सुरक्षित रखी जाती है। सभी संदेश सीधे व्हाट्सएप नंबर +91 9980027875 पर जाते हैं।"
    },
    support: {
      badge: "हमारे सहभागी बनें",
      title: "शिक्षा और समाज सेवा में सहयोग दें",
      subtitle: "आपका दान जरूरतमंद बच्चों को मुफ्त शिक्षा देने, गरीब परिवारों को भोजन कराने और कलीसिया स्थापना में सहायक होता है।",
      bankTitle: "आधिकारिक बैंक खाता स्थानांतरण (NEFT / IMPS)",
      bankName: "बैंक:",
      accountName: "खाताधारक का नाम:",
      accountNo: "खाता संख्या:",
      ifsc: "IFSC कोड:",
      branch: "शाखा:",
      upiTitle: "त्वरित यूपीआई दान (Google Pay / PhonePe / Paytm)",
      upiIdLabel: "सीधा यूपीआई आईडी:",
      copyBtn: "कॉपी करें",
      copied: "कॉपी हो गया!",
      scannerNote: "बच्चों की मुफ्त शिक्षा और समाज सेवा में सहयोग देने के लिए किसी भी UPI ऐप से स्कैन करें।"
    },
    contact: {
      badge: "संपर्क करें",
      title: "कार्यालय और प्रार्थना भवन",
      subtitle: "कर्नाटक के ऐतिहासिक शहर मैसूर में स्थित।",
      hotlineTitle: "आधिकारिक संपर्क और व्हाट्सएप हेल्पलाइन",
      hotlineDesc: "प्रार्थना, पूछताछ, पास्टोरल परामर्श या सामाजिक कार्यों के लिए सीधी हेल्पलाइन।",
      addressTitle: "कार्यालय का पता",
      addressDesc: "क्राइस्ट्स लव मिनिस्ट्रीज ट्रस्ट, मैसूर, कर्नाटक 570001, भारत।",
      timingsTitle: "प्रार्थना का समय",
      timingsDesc: "रविवार की आराधना: सुबह 9:30 बजे | मध्य-सप्ताह प्रार्थना: बुधवार शाम 6:30 बजे | दैनिक वचन: सुबह 6:00 बजे (यूट्यूब)।"
    },
    footer: {
      tagline: "25 नवंबर 2016 से प्रेम, विश्वास, आशा और शिक्षा का निरंतर प्रसार।",
      rights: "क्राइस्ट्स लव मिनिस्ट्रीज (रजि)। सर्वाधिकार सुरक्षित।"
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currentVideoId, setCurrentVideoId] = useState<string>(OFFICIAL_YOUTUBE_VIDEOS[0].id);
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prayer Form State
  const [prayerForm, setPrayerForm] = useState({
    name: '',
    phone: '',
    request: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const t = TRANSLATIONS[lang];

  // Active playing video details
  const activeVideo = OFFICIAL_YOUTUBE_VIDEOS.find(v => v.id === currentVideoId) || OFFICIAL_YOUTUBE_VIDEOS[0];

  const handleVideoSelect = (id: string) => {
    setCurrentVideoId(id);
    const playerElement = document.getElementById('main-player-container');
    if (playerElement) {
      playerElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prayerForm.name.trim() || !prayerForm.request.trim()) {
      return;
    }

    const now = new Date();
    const dateFormatted = now.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    const whatsappMessage = 
`🙏 *PRAYER REQUEST — CHRIST'S LOVE MINISTRIES (MYSURU)*
───────────────────────
👤 *Name:* ${prayerForm.name.trim()}
📞 *Phone Number:* ${prayerForm.phone.trim() || "Not specified"}
📅 *Date:* ${dateFormatted}
🌐 *Preferred Language:* ${lang.toUpperCase()}

📜 *Prayer Request Details:*
"${prayerForm.request.trim()}"

───────────────────────
_Sent directly via Christ's Love Ministries Official Portal_
_Founder & Trustee: Ruben Ranjith, Mysuru_
_Official Hotline: +91 9980027875_`;

    const encodedText = encodeURIComponent(whatsappMessage);
    const targetUrl = `https://wa.me/${MINISTRY_CONFIG.whatsappNumber}?text=${encodedText}`;

    setFormSubmitted(true);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  const copyToClipboard = (text: string, type: 'bank' | 'upi') => {
    navigator.clipboard.writeText(text);
    if (type === 'bank') {
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2000);
    } else {
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-500 selection:text-white">
      
      {/* ==================================================================== */}
      {/* 1. TOP HEADER & OFFICIAL HOTLINE + LANGUAGE SWITCHER                */}
      {/* ==================================================================== */}
      <div className="bg-slate-950 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <i className="fa-solid fa-cross mr-1"></i> {t.hero.badge}
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-300">
              Founder & Trustee: <strong className="text-white font-medium">Ruben Ranjith</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
            <a 
              href={`tel:${MINISTRY_CONFIG.contactPhone}`} 
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
              title="Call Official Hotline"
            >
              <i className="fa-solid fa-phone text-xs"></i>
              <span>{MINISTRY_CONFIG.contactPhone}</span>
            </a>

            <a 
              href={`https://wa.me/${MINISTRY_CONFIG.whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              title="Chat on WhatsApp"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i>
              <span>WhatsApp</span>
            </a>

            <div className="hidden sm:flex items-center gap-2.5 text-slate-400">
              <a 
                href={MINISTRY_CONFIG.youtubeUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Official YouTube Channel"
                className="hover:text-red-400 transition-colors"
              >
                <i className="fa-brands fa-youtube text-sm"></i>
              </a>
              <a 
                href={MINISTRY_CONFIG.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Instagram @rubenranjith"
                className="hover:text-pink-400 transition-colors"
              >
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a 
                href={MINISTRY_CONFIG.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Facebook Page"
                className="hover:text-blue-400 transition-colors"
              >
                <i className="fa-brands fa-facebook text-sm"></i>
              </a>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-700">
              <span className="text-slate-400 px-2 text-[11px] hidden lg:inline">
                <i className="fa-solid fa-globe mr-1 text-amber-400"></i> Lang:
              </span>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                  lang === 'en' 
                    ? 'bg-amber-500 text-slate-950 shadow-sm' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang('kn')}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                  lang === 'kn' 
                    ? 'bg-amber-500 text-slate-950 shadow-sm' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                ಕನ್ನಡ
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                  lang === 'hi' 
                    ? 'bg-amber-500 text-slate-950 shadow-sm' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. STICKY MAIN NAVIGATION (WITH ORIGINAL UNEDITED LOGO)             */}
      {/* ==================================================================== */}
      <nav className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo and Brand Title - Unedited, Crisp Original Logo */}
            <a href="#home" className="flex items-center gap-3.5 group">
              <div className="relative">
                <img 
                  src="logo.png" 
                  alt="Christ's Love Ministries Logo" 
                  className="site-logo h-14 w-14 rounded-full object-contain bg-white p-0.5 shadow-md border-2 border-amber-400/80 group-hover:scale-105 transition-transform"
                />
                <span className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 text-[9px] font-black px-1 rounded-full uppercase">
                  Regd
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-serif font-black tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  Christ's Love Ministries
                </span>
                <span className="text-xs text-amber-400 font-medium tracking-wide flex items-center gap-1.5">
                  <span>ಮೈಸೂರು • Mysore, Karnataka</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-5 text-sm font-medium">
              <a href="#home" className="text-slate-200 hover:text-amber-400 transition-colors">{t.nav.home}</a>
              <a href="#about" className="text-slate-200 hover:text-amber-400 transition-colors">{t.nav.about}</a>
              <a href="#pillars" className="text-slate-200 hover:text-amber-400 transition-colors">{t.nav.pillars}</a>
              <a href="#media" className="text-slate-200 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                {t.nav.media}
              </a>
              <a href="#community-metrics" className="text-slate-200 hover:text-amber-400 transition-colors">{t.nav.community}</a>
              <a href="#support" className="text-slate-200 hover:text-amber-400 transition-colors">{t.nav.donate}</a>
              <a href="#contact" className="text-slate-200 hover:text-amber-400 transition-colors">{t.nav.contact}</a>
            </div>

            {/* Quick Action Hotline Button & WhatsApp Prayer */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={`tel:${MINISTRY_CONFIG.contactPhone}`}
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-800 text-xs font-semibold text-amber-300 border border-slate-700 hover:border-amber-400 hover:bg-slate-750 transition-colors"
                title="Direct Ministry Phone"
              >
                <i className="fa-solid fa-phone text-amber-400"></i>
                <span>+91 9980027875</span>
              </a>

              <a
                href="#prayer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-emerald-900/30 transition-transform hover:scale-105"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
                <span className="hidden sm:inline">{t.nav.prayer}</span>
                <span className="sm:hidden">Prayer</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 pt-3 pb-6 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs text-amber-400 font-semibold">Hotline: +91 9980027875</span>
              <a href="tel:+919980027875" className="text-xs text-emerald-400 font-bold">Call Now</a>
            </div>
            <a onClick={() => setMobileMenuOpen(false)} href="#home" className="block text-slate-200 hover:text-amber-400 font-medium py-1">{t.nav.home}</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#about" className="block text-slate-200 hover:text-amber-400 font-medium py-1">{t.nav.about}</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#pillars" className="block text-slate-200 hover:text-amber-400 font-medium py-1">{t.nav.pillars}</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#media" className="block text-slate-200 hover:text-amber-400 font-medium py-1">{t.nav.media}</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#community-metrics" className="block text-slate-200 hover:text-amber-400 font-medium py-1">{t.nav.community}</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#prayer" className="block text-slate-200 hover:text-amber-400 font-medium py-1">{t.nav.prayer}</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#support" className="block text-slate-200 hover:text-amber-400 font-medium py-1">{t.nav.donate}</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="block text-slate-200 hover:text-amber-400 font-medium py-1">{t.nav.contact}</a>
          </div>
        )}
      </nav>

      {/* ==================================================================== */}
      {/* 3. HERO BANNER WITH WATERMARK OVERLAY (logo.png)                    */}
      {/* ==================================================================== */}
      <header id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-royal-950 text-white py-20 lg:py-28 border-b border-slate-800">
        
        {/* Subtle, Clean Watermark Overlay with Original Logo (logo.png) */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url('logo.png')` }}
          aria-hidden="true"
        ></div>

        <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 text-center lg:text-left space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-xs">
                <i className="fa-solid fa-church text-amber-400"></i>
                <span>{t.hero.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-tight text-white">
                {t.hero.heading}
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
                {t.hero.subheading}
              </p>

              <blockquote className="border-l-4 border-amber-500 pl-4 py-1 text-slate-400 italic text-sm sm:text-base">
                {t.hero.tagline}
              </blockquote>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="#media"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-950/40 transition-transform hover:scale-105"
                >
                  <i className="fa-solid fa-circle-play text-base"></i>
                  <span>{t.hero.watchBtn}</span>
                </a>

                <a
                  href="#prayer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/40 transition-transform hover:scale-105"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>{t.hero.prayerBtn}</span>
                </a>
              </div>
            </div>

            {/* Founder Card with Official Emblem */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group max-w-sm w-full bg-slate-900/90 rounded-3xl p-6 border-2 border-amber-400/40 shadow-2xl backdrop-blur-md text-center">
                
                <div className="w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-tr from-amber-400 via-royal-600 to-amber-500 shadow-xl mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="logo.png"
                    alt="Ruben Ranjith - Christ's Love Ministries Mysuru"
                    className="w-full h-full rounded-full object-contain bg-white p-1"
                  />
                </div>

                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-2">
                  {t.about.founderBadge}
                </span>

                <h3 className="text-2xl font-serif font-black text-white">{t.about.founderName}</h3>
                <p className="text-xs text-slate-300 font-medium mb-3">{t.about.founderTitle}</p>

                <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                  <p className="flex items-center justify-center gap-1.5">
                    <i className="fa-solid fa-location-dot text-amber-400"></i>
                    <span>Mysore, Karnataka, India</span>
                  </p>
                  <p className="flex items-center justify-center gap-1.5 text-amber-300 font-semibold">
                    <i className="fa-solid fa-phone text-amber-400"></i>
                    <span>+91 9980027875</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ==================================================================== */}
      {/* 4. ABOUT US & KEY PILLARS                                           */}
      {/* ==================================================================== */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-blue-100 text-blue-900 border border-blue-200">
                {t.about.badge}
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 leading-tight">
                {t.about.title}
              </h2>

              <p className="text-sm font-semibold text-amber-700">
                {t.about.subtitle}
              </p>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>

              <blockquote className="bg-amber-50 rounded-2xl p-5 border-l-4 border-amber-500 text-amber-950 italic text-sm font-medium">
                {t.about.quote}
              </blockquote>
            </div>

            {/* 4 Pillars Grid */}
            <div id="pillars" className="lg:col-span-7">
              <div className="text-left mb-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-100 text-amber-900 border border-amber-200 mb-2">
                  {t.pillars.badge}
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900">{t.pillars.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{t.pillars.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Pillar 1 */}
                <div className="bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center text-lg mb-3 shadow">
                    <i className="fa-solid fa-church"></i>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1.5">{t.pillars.p1Title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{t.pillars.p1Desc}</p>
                </div>

                {/* Pillar 2 */}
                <div className="bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200 hover:border-emerald-400 shadow-xs hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-emerald-800 text-emerald-300 flex items-center justify-center text-lg mb-3 shadow">
                    <i className="fa-solid fa-graduation-cap"></i>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1.5">{t.pillars.p2Title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{t.pillars.p2Desc}</p>
                </div>

                {/* Pillar 3 */}
                <div className="bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-amber-700 text-white flex items-center justify-center text-lg mb-3 shadow">
                    <i className="fa-solid fa-hand-holding-heart"></i>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1.5">{t.pillars.p3Title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{t.pillars.p3Desc}</p>
                </div>

                {/* Pillar 4 */}
                <div className="bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200 hover:border-red-400 shadow-xs hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-red-800 text-white flex items-center justify-center text-lg mb-3 shadow">
                    <i className="fa-solid fa-video"></i>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1.5">{t.pillars.p4Title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{t.pillars.p4Desc}</p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5. VIDEO SECTION WITH 6 YOUTUBE VIDEOS (INLINE PLAYBACK)             */}
      {/* ==================================================================== */}
      <section id="media" className="py-20 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-red-500/20 text-red-400 border border-red-500/30 mb-3">
              <i className="fa-brands fa-youtube mr-1"></i> {t.media.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mb-3">
              {t.media.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.media.subtitle}
            </p>
          </div>

          {/* Main Embedded Player */}
          <div id="main-player-container" className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-4 sm:p-6 border border-slate-800 shadow-2xl mb-12">
            
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {t.media.nowPlaying}:
                </span>
                <span className="text-xs font-medium text-slate-300">
                  {lang === 'en' ? activeVideo.titleEn : (lang === 'kn' ? activeVideo.titleKn : activeVideo.titleHi)}
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">
                Speaker: <strong>{activeVideo.speaker}</strong>
              </span>
            </div>

            {/* Main Player Iframe */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner border border-slate-800">
              <iframe
                id="main-player"
                src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&rel=0`}
                title="Christ's Love Ministries Official Broadcast"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-400 px-2 gap-2">
              <span>{t.media.inlineNote}</span>
              <a
                href={MINISTRY_CONFIG.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 flex items-center gap-1 font-semibold"
              >
                <span>{MINISTRY_CONFIG.youtubeHandle}</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            </div>

          </div>

          {/* 6 Clickable Video Cards */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <i className="fa-solid fa-list-check text-amber-400"></i>
              <span>{t.media.selectTitle}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {OFFICIAL_YOUTUBE_VIDEOS.map((video) => {
                const isSelected = video.id === currentVideoId;
                const badge = lang === 'en' ? video.badgeEn : (lang === 'kn' ? video.badgeKn : video.badgeHi);
                const title = lang === 'en' ? video.titleEn : (lang === 'kn' ? video.titleKn : video.titleHi);

                return (
                  <button
                    key={video.id}
                    onClick={() => handleVideoSelect(video.id)}
                    className={`text-left rounded-2xl overflow-hidden border p-4 transition-all duration-200 group flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-900 border-amber-400 ring-2 ring-amber-400/30 shadow-xl'
                        : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      {/* Video Thumbnail */}
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 mb-3 border border-slate-800 group-hover:scale-[1.02] transition-transform">
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                          alt={title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors flex items-center justify-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 ${
                            isSelected ? 'bg-amber-500 text-slate-950' : 'bg-red-600 text-white'
                          }`}>
                            <i className="fa-solid fa-play text-sm ml-0.5"></i>
                          </div>
                        </div>

                        {/* Top Badge */}
                        <div className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-xs text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
                          {badge}
                        </div>
                      </div>

                      <h4 className={`text-sm font-bold line-clamp-2 transition-colors ${
                        isSelected ? 'text-amber-400' : 'text-white group-hover:text-amber-300'
                      }`}>
                        {title}
                      </h4>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <i className="fa-solid fa-user-tie text-amber-400"></i>
                        <span>{video.speaker}</span>
                      </span>
                      <span className={`font-semibold ${isSelected ? 'text-amber-400' : 'text-slate-400'}`}>
                        {isSelected ? '● Playing' : 'Click to Play'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 6. OFFICIAL "ACTIVE COMMUNITY PEOPLE" SECTION                       */}
      {/* ==================================================================== */}
      <section id="community-metrics" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-100 text-amber-900 border border-amber-200 mb-3">
              {t.communityMetrics.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 mb-3">
              {t.communityMetrics.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.communityMetrics.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* YouTube Community Card */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-red-400 shadow-sm hover:shadow-xl transition-all text-center flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-red-100 text-red-600 flex items-center justify-center text-3xl mb-4 shadow-sm">
                  <i className="fa-brands fa-youtube"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{t.communityMetrics.ytLabel}</h3>
                <p className="text-xs text-slate-500 mb-4">{t.communityMetrics.ytSub}</p>
                <div className="text-3xl font-black text-red-600 font-mono tracking-tight mb-1">
                  Daily Viewers
                </div>
                <p className="text-xs text-slate-400">Treasure for the Day Broadcasts</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <a
                  href={MINISTRY_CONFIG.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700"
                >
                  <span>{t.communityMetrics.visitChannelBtn}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Instagram Outreach Card */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-pink-400 shadow-sm hover:shadow-xl transition-all text-center flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-amber-100 via-pink-100 to-purple-100 text-pink-600 flex items-center justify-center text-3xl mb-4 shadow-sm">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{t.communityMetrics.igLabel}</h3>
                <p className="text-xs text-slate-500 mb-4">{t.communityMetrics.igSub}</p>
                <div className="text-3xl font-black text-pink-600 font-mono tracking-tight mb-1">
                  Youth & Seekers
                </div>
                <p className="text-xs text-slate-400">Spiritual Quotes & Updates</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <a
                  href={MINISTRY_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-pink-600 hover:text-pink-700"
                >
                  <span>Connect on Instagram</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Facebook Fellowship Card */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all text-center flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl mb-4 shadow-sm">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{t.communityMetrics.fbLabel}</h3>
                <p className="text-xs text-slate-500 mb-4">{t.communityMetrics.fbSub}</p>
                <div className="text-3xl font-black text-blue-600 font-mono tracking-tight mb-1">
                  Mysore & Karnataka
                </div>
                <p className="text-xs text-slate-400">Church Fellowships & Events</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <a
                  href={MINISTRY_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Join Facebook Fellowship</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7. DIRECT WHATSAPP PRAYER REQUEST (NO EMAIL)                        */}
      {/* ==================================================================== */}
      <section id="prayer" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-3">
              <i className="fa-brands fa-whatsapp mr-1"></i> {t.prayer.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mb-3">
              {t.prayer.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.prayer.subtitle}
            </p>
          </div>

          <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl backdrop-blur-md">
            
            {formSubmitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500 text-emerald-200 text-xs flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-emerald-400 text-lg"></i>
                <div>
                  <strong className="block font-semibold">Opening WhatsApp (+91 9980027875)...</strong>
                  Your prayer details are formatted and routing directly to Ruben Ranjith's WhatsApp.
                </div>
              </div>
            )}

            <form onSubmit={handlePrayerSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {t.prayer.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={prayerForm.name}
                    onChange={(e) => setPrayerForm({ ...prayerForm, name: e.target.value })}
                    placeholder={t.prayer.namePlaceholder}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {t.prayer.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={prayerForm.phone}
                    onChange={(e) => setPrayerForm({ ...prayerForm, phone: e.target.value })}
                    placeholder={t.prayer.phonePlaceholder}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  {t.prayer.messageLabel}
                </label>
                <textarea
                  required
                  rows={4}
                  value={prayerForm.request}
                  onChange={(e) => setPrayerForm({ ...prayerForm, request: e.target.value })}
                  placeholder={t.prayer.messagePlaceholder}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-950/50 flex items-center justify-center gap-3 transition-transform hover:scale-[1.01]"
                >
                  <i className="fa-brands fa-whatsapp text-2xl"></i>
                  <span>{t.prayer.sendBtn}</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                <i className="fa-solid fa-lock text-amber-400 mr-1"></i>
                {t.prayer.note}
              </p>

            </form>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 8. SUPPORT US / DONATION & LOCATION                                 */}
      {/* ==================================================================== */}
      <section id="support" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-100 text-amber-900 border border-amber-200 mb-3">
              {t.support.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 mb-3">
              {t.support.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.support.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Bank Transfer Details */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-royal-100 text-royal-800 flex items-center justify-center text-xl shadow-xs">
                    <i className="fa-solid fa-building-columns"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{t.support.bankTitle}</h3>
                    <p className="text-xs text-slate-500">Christ's Love Ministries Trust (Mysuru)</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-500">{t.support.bankName}</span>
                    <span className="font-semibold text-slate-900">{MINISTRY_CONFIG.bankDetails.bankName}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-500">{t.support.accountName}</span>
                    <span className="font-semibold text-slate-900">{MINISTRY_CONFIG.bankDetails.accountName}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-500">{t.support.accountNo}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-slate-900">{MINISTRY_CONFIG.bankDetails.accountNumber}</span>
                      <button
                        onClick={() => copyToClipboard(MINISTRY_CONFIG.bankDetails.accountNumber, 'bank')}
                        className="px-2 py-0.5 text-[10px] bg-slate-100 hover:bg-slate-200 rounded font-bold text-slate-700"
                      >
                        {copiedBank ? t.support.copied : t.support.copyBtn}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-500">{t.support.ifsc}</span>
                    <span className="font-mono font-semibold text-slate-900">{MINISTRY_CONFIG.bankDetails.ifscCode}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-500">{t.support.branch}</span>
                    <span className="font-semibold text-slate-900">{MINISTRY_CONFIG.bankDetails.branch}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
                <i className="fa-solid fa-circle-info text-amber-500"></i>
                <span>Directly supports free tuition kits & community meals in Mysore.</span>
              </div>
            </div>

            {/* UPI & QR Section */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl shadow-xs">
                    <i className="fa-solid fa-qrcode"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{t.support.upiTitle}</h3>
                    <p className="text-xs text-slate-500">Instant transfer via any UPI App</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-40 h-40 bg-slate-900 rounded-2xl p-3 flex flex-col items-center justify-center text-center shadow-md border-2 border-amber-400">
                    <i className="fa-solid fa-qrcode text-6xl text-white mb-2"></i>
                    <span className="text-[10px] font-mono text-amber-300 font-bold uppercase">Christ's Love UPI</span>
                  </div>

                  <div className="space-y-3 text-center sm:text-left">
                    <div>
                      <span className="text-xs text-slate-500 block">{t.support.upiIdLabel}</span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-mono font-bold text-slate-900 text-sm">{MINISTRY_CONFIG.bankDetails.upiId}</span>
                        <button
                          onClick={() => copyToClipboard(MINISTRY_CONFIG.bankDetails.upiId, 'upi')}
                          className="px-2 py-0.5 text-[10px] bg-amber-100 hover:bg-amber-200 rounded font-bold text-amber-900"
                        >
                          {copiedUpi ? t.support.copied : t.support.copyBtn}
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.support.scannerNote}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center sm:justify-start gap-4 text-xs font-medium text-slate-600">
                <span className="flex items-center gap-1"><i className="fa-brands fa-google-pay text-lg text-blue-600"></i> GPay</span>
                <span>•</span>
                <span className="flex items-center gap-1"><i className="fa-solid fa-mobile-screen-button text-purple-600"></i> PhonePe</span>
                <span>•</span>
                <span className="flex items-center gap-1"><i className="fa-solid fa-wallet text-sky-600"></i> Paytm</span>
              </div>
            </div>

          </div>

          {/* Location, Map & Official Hotline Details */}
          <div id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-slate-900 rounded-3xl p-6 sm:p-8 text-white">
            
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-2">
                  {t.contact.badge}
                </span>
                <h3 className="text-2xl font-serif font-black text-white">{t.contact.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">{t.contact.subtitle}</p>
              </div>

              {/* Dedicated Official Hotline Card */}
              <div className="bg-gradient-to-r from-emerald-950/80 via-slate-800 to-slate-900 rounded-2xl p-5 border-2 border-emerald-500/40 space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 uppercase tracking-wide">
                  {t.contact.hotlineTitle}
                </span>
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  <i className="fa-solid fa-phone text-emerald-400"></i>
                  <a href={`tel:${MINISTRY_CONFIG.contactPhone}`} className="hover:text-emerald-300">
                    {MINISTRY_CONFIG.contactPhone}
                  </a>
                </h4>
                <p className="text-xs text-slate-300">
                  {t.contact.hotlineDesc}
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <a 
                    href={`https://wa.me/${MINISTRY_CONFIG.whatsappNumber}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                  >
                    <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                  </a>
                  <a 
                    href={`tel:${MINISTRY_CONFIG.contactPhone}`} 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-amber-300 text-xs font-semibold"
                  >
                    <i className="fa-solid fa-phone"></i> Call Now
                  </a>
                </div>
              </div>

              <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-2">
                <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>{t.contact.addressTitle}</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.contact.addressDesc}
                </p>
                <p className="text-xs text-slate-400">Founder & Trustee: Ruben Ranjith</p>
              </div>

              <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-2">
                <h4 className="text-sm font-bold text-blue-400 flex items-center gap-2">
                  <i className="fa-solid fa-clock"></i>
                  <span>{t.contact.timingsTitle}</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.contact.timingsDesc}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-slate-950 border border-slate-700 h-[380px]">
              <iframe
                title="Christ's Love Ministries Location Map - Mysore, Karnataka"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124741.5647668638!2d76.5656494323214!3d12.31063625442526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d572ef9%3A0x2b89e8c277024f!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 9. FOOTER WITH OFFICIAL HOTLINE                                     */}
      {/* ==================================================================== */}
      <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <img 
              src="logo.png" 
              alt="Christ's Love Ministries Logo" 
              className="site-logo w-9 h-9 rounded-full bg-white p-0.5 object-contain"
            />
            <span className="text-base font-serif font-bold text-white">Christ's Love Ministries</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a href={`tel:${MINISTRY_CONFIG.contactPhone}`} className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5">
              <i className="fa-solid fa-phone"></i>
              <span>Official Hotline: +91 9980027875</span>
            </a>
            <span>•</span>
            <a href={`https://wa.me/${MINISTRY_CONFIG.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5">
              <i className="fa-brands fa-whatsapp"></i>
              <span>WhatsApp: +91 9980027875</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 text-slate-400 text-sm">
            <a href={MINISTRY_CONFIG.youtubeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors" title="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href={MINISTRY_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors" title="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href={MINISTRY_CONFIG.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" title="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>

          <p>{t.footer.tagline}</p>
          <p className="text-slate-500">
            © 2016 – 2026 {t.footer.rights} Founder & Trustee: Ruben Ranjith. Mysuru, Karnataka, India.
          </p>
        </div>
      </footer>

    </div>
  );
}
