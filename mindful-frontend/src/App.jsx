import React, { useState } from 'react'
import HomePage from './components/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router'
import Events from './components/Events'
import Contactus from './components/Contactus'
import Aboutus from './components/Aboutus'
import Login from './components/Login'
import EventDetailsPage from './components/EventDetailsPage'
import CreateEvent from './components/CreateEvent'
import RegistrationPage from './components/RegistrationPage'


function App() {
  const [mockevents, setmockEvents] = useState([
    {
      id: 1,
      title: "World Summit on Leadership",
      theme: "Developing the Next Generation of Leaders",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bannerUrl: "/image.png",
      location: "Dubai, UAE",
      Date: "February 19-20, 2026",
      Dates: "2026-02-19",
     desc1: "World Summit on Leadership, hosted by ICON STAR conferences, offers an unparalleled opportunity for women of diverse backgrounds and cultures to connect, collaborate and network on a variety of issues affecting their lives. The theme of the conference:- 'Developing the Next Generation of Leaders' The forum serves as a catalyst for positive change and aims to promote gender equality, economic empowerment, education, health, and political participation for women worldwide.",
      desc2: "Join us for the World Summit on Leadership to be held on February 19-20, 2026 in Dubai, UAE. This is an opportunity to show your passion on a global stage and connect with like-minded individuals who share your commitment to gender equality, economic empowerment, leadership, education, health, and political participation for women worldwide. We believe that by coming together virtually, we can create a powerful force for positive change and make a real impact in the world. We invite you to be a part of this inclusive platform and share your experiences, success stories, and ideas for a more equitable future for all women",
      sessions: [
        "The Neuroscience of Leadership: Decision-Making and Emotional Intelligence",
        "Transformational vs. Transactional Leadership: Evolving Models in the 21st Century",
        "Systems Thinking and Complexity in Leadership Research",
        "Cross-Cultural Leadership: Global Challenges and Best Practices",
        "Ethical and Responsible Leadership in Times of Crisis",
        "Innovation Leadership: Driving Creativity in Organizations",
        "Strategic Leadership for Organizational Sustainability",
        "Leadership and Corporate Governance in a Digital Economy",
        "Leading High-Performance Teams: Science of Collaboration and Motivation",
        "Women in Leadership: Breaking Barriers and Building Futures",
        "AI and Leadership: Human-Machine Collaboration in Decision Making",
        "Leading Remote & Hybrid Teams: The Science of Virtual Leadership",
        "Leadership in the Era of Industry 4.0 and Digital Transformation",
        "Cybersecurity Leadership: Building Resilience in Organizations",
        "Leadership Competencies for the Future of Work",
        "Political and Civic Leadership in an Age of Polarization",
        "Leadership for Global Peace and Conflict Resolution",
        "Sustainability Leadership: Climate Change, Energy, and Social Responsibility",
        "Leadership in Education: Transforming Learning Systems",
        "Health Leadership: Lessons from Global Pandemics and Public Health Crises",
        "Mindfulness and Resilient Leadership Practices",
        "Coaching Science: Building Next-Generation Leaders",
        "Emotional Intelligence and Adaptive Leadership in Complex Environments",
        "Leadership Communication: Science of Influence and Persuasion",
        "Measuring Leadership Impact: Metrics, Analytics, and Big Data Approaches"
      ],
      agenda: {
  day1: {
  time: [
    "08:00 – 08:30", "08:30 – 09:00", "09:00 – 09:30", 
    "09:30 – 10:00", "10:00 – 10:30", "10:30 – 11:00",
    "11:00 – 11:30", "11:30 – 12:00", "12:00 – 12:30",
    "12:30 – 13:00", "13:00 – 13:30", "13:30 – 14:00",
    "14:00 – 14:30", "14:30 – 15:00", "15:00 – 15:30",
    "15:30 – 16:00", "16:00 – 16:30"
  ],
  speaker: [
    "Opening Ceremony", 
    "Keynote Speaker", 
    "Dr. Ananya Rao",
    "", "", "", "", "", "", "", "", "", "", "", "", "", ""
  ],
  talkTitle: [
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available"
  ]
},
  day2: {
  time: [
    "08:00 – 08:30", "08:30 – 09:00", "09:00 – 09:30", 
    "09:30 – 10:00", "10:00 – 10:30", "10:30 – 11:00",
    "11:00 – 11:30", "11:30 – 12:00", "12:00 – 12:30",
    "12:30 – 13:00", "13:00 – 13:30", "13:30 – 14:00",
    "14:00 – 14:30", "14:30 – 15:00", "15:00 – 15:30",
    "15:30 – 16:00", "16:00 – 16:30"
  ],
  speaker: [
    "Opening Ceremony", 
    "Keynote Speaker", 
    "Dr. Ananya Rao",
    "", "", "", "", "", "", "", "", "", "", "", "", "", ""
  ],
  talkTitle: [
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available"
  ]
},
}
    },
    {
      id: 2,
      title: "World Summit on Psychiatry, Mental Health",
      theme: "Women Leading the Way in Mental Health, Psychiatry, Nursing & Healthcare",
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bannerUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Dubai, UAE",
      Date: "February 19-20, 2026",
      Dates: "2026-02-19",
      desc1: "ICON STAR  Conferences are excited to invite you to the upcoming 'World Summit on Psychiatry, Mental Health', a summit that will be held on February 19-20, 2026  in Dubai, UAE This main theme is 'Women Leading the Way in Mental Health, Psychiatry, Nursing & Healthcare'. Our goal is to raise awareness about the critical need for action to ensure that populations worldwide have access to proper mental healthcare.",
      desc2: "During this summit, we will bring together experts, advocates, and stakeholders to discuss the challenges and solutions related to mental health on a global scale. Our hope is to initiate a call to action that prioritizes mental health and well-being as a fundamental aspect of public health. We believe that by working together, we can address the barriers that limit access to mental healthcare and create a happier and healthier world for all. We welcome you to join us in this important event and contribute to the discussion on promoting mental health and well-being worldwide.",
      sessions: [
        "Adult and Pediatric Spinal Deformities",
        "Adolescent Idiopathic Scoliosis",
        "Aging Spine and Spinal Fracture",
        "Case Reports and Debate on Spinal Disorders",
        "Degenerative Disc Disease",
        "Diagnosis of Spinal Disorders",
        "Imaging Modalities in Spinal Radiology",
        "Metastatic and Primary Spinal Tumors",
        "Minimally Invasive Spine Surgery",
        "Navigation-Assisted Spine Surgery",
        "Neuro Spinal Complications",
        "Neuromuscular/Syndromic Deformity",
        "Non-Operative Treatment Methods",
        "Radiomics and Artificial Intelligence (AI)",
        "Robotic Technology in Spine Surgery",
        "Spasticity, Spinal Pain, and Spinal Infection",
        "Spinal Arthroplasty and Motion Preservation",
        "Spinal Biologics",
        "Spinal Cord Injury",
        "Spinal Imaging",
        "Spinal Interventional Radiology",
        "Spinal Pathology",
        "Spinal Rehabilitation and Nursing Care",
        "Spine Surgery",
        "Surgical Approaches to the Spine"
      ],
        agenda: {
  day1: {
  time: [
    "08:00 – 08:30", "08:30 – 09:00", "09:00 – 09:30", 
    "09:30 – 10:00", "10:00 – 10:30", "10:30 – 11:00",
    "11:00 – 11:30", "11:30 – 12:00", "12:00 – 12:30",
    "12:30 – 13:00", "13:00 – 13:30", "13:30 – 14:00",
    "14:00 – 14:30", "14:30 – 15:00", "15:00 – 15:30",
    "15:30 – 16:00", "16:00 – 16:30"
  ],
  speaker: [
    "Opening Ceremony", 
    "Keynote Speaker", 
    "Dr. Ananya Rao",
    "", "", "", "", "", "", "", "", "", "", "", "", "", ""
  ],
  talkTitle: [
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available"
  ]
},
  day2: {
  time: [
    "08:00 – 08:30", "08:30 – 09:00", "09:00 – 09:30", 
    "09:30 – 10:00", "10:00 – 10:30", "10:30 – 11:00",
    "11:00 – 11:30", "11:30 – 12:00", "12:00 – 12:30",
    "12:30 – 13:00", "13:00 – 13:30", "13:30 – 14:00",
    "14:00 – 14:30", "14:30 – 15:00", "15:00 – 15:30",
    "15:30 – 16:00", "16:00 – 16:30"
  ],
  speaker: [
    "Opening Ceremony", 
    "Keynote Speaker", 
    "Dr. Ananya Rao",
    "", "", "", "", "", "", "", "", "", "", "", "", "", ""
  ],
  talkTitle: [
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available"
  ]
},
    },
  },
    {
      id: 3,
      title: "2nd World Summit on Feminism",
      theme: "Achieve gender equality and empower all women and girls",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bannerUrl: "/feminism.png",
      location: "London, UK",
      Date: "October 08-09, 2026",
      Dates: "2026-08-08",
      desc1: "World Summit on Leadership, hosted by ICON STAR conferences, offers an unparalleled opportunity for women of diverse backgrounds and cultures to connect, collaborate and network on a variety of issues affecting their lives. The theme of the conference:- 'Developing the Next Generation of Leaders' The forum serves as a catalyst for positive change and aims to promote gender equality, economic empowerment, education, health, and political participation for women worldwide.",
      desc2: "Join us for the World Summit on Leadership to be held on February 19-20, 2026 in Dubai, UAE. This is an opportunity to show your passion on a global stage and connect with like-minded individuals who share your commitment to gender equality, economic empowerment, leadership, education, health, and political participation for women worldwide. We believe that by coming together virtually, we can create a powerful force for positive change and make a real impact in the world. We invite you to be a part of this inclusive platform and share your experiences, success stories, and ideas for a more equitable future for all women",
      sessions: [
        "Gender, Identity, and Representation",
        "Health, Well-Being, and Body Politics",
        "LGBTQ+ Rights and Legal Frameworks",
        "Digital Activism, Social Media, and Technology",
        "Economic Justice and Labor Rights",
        "Education, Literature, and Historical Perspectives",
        "Masculinity and Feminism",
        "Aging, Feminism, and LGBTQ+ Identity",
        "Sports, Activism, and Representation",
        "Feminism, LGBTQ+ Movements, and Populism",
        "Religion, Spirituality, and LGBTQ+ Identities",
        "Disability Justice and Feminism",
        "Sex, Pleasure, and Queer Feminist Eroticism",
        "Global Perspectives on Reproductive Justice",
        "Climate Justice and Feminism/LGBTQ+ Activism",
        "Feminist and Queer Approaches to Conflict & Peacebuilding",
        "Political Leadership and Representation",
        "Digital Spaces and Online Feminist & LGBTQ+ Activism",
        "Queer and Feminist Perspectives on Migration & Borders",
        "Art, Fashion, and Cultural Expression",
        "Sexuality, Consent, and Relationships",
        "Feminism, LGBTQ+ Rights, and Global Politics",
        "Digital Activism, Social Media, and Technology",
        "Intersectionality and Marginalized Voices",
        "Gender, Identity, and Representation"
      ],
        agenda: {
  day1: {
  time: [
    "08:00 – 08:30", "08:30 – 09:00", "09:00 – 09:30", 
    "09:30 – 10:00", "10:00 – 10:30", "10:30 – 11:00",
    "11:00 – 11:30", "11:30 – 12:00", "12:00 – 12:30",
    "12:30 – 13:00", "13:00 – 13:30", "13:30 – 14:00",
    "14:00 – 14:30", "14:30 – 15:00", "15:00 – 15:30",
    "15:30 – 16:00", "16:00 – 16:30"
  ],
  speaker: [
    "Opening Ceremony", 
    "Keynote Speaker", 
    "Dr. Ananya Rao",
    "", "", "", "", "", "", "", "", "", "", "", "", "", ""
  ],
  talkTitle: [
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available"
  ]
},
  day2: {
  time: [
    "08:00 – 08:30", "08:30 – 09:00", "09:00 – 09:30", 
    "09:30 – 10:00", "10:00 – 10:30", "10:30 – 11:00",
    "11:00 – 11:30", "11:30 – 12:00", "12:00 – 12:30",
    "12:30 – 13:00", "13:00 – 13:30", "13:30 – 14:00",
    "14:00 – 14:30", "14:30 – 15:00", "15:00 – 15:30",
    "15:30 – 16:00", "16:00 – 16:30"
  ],
  speaker: [
    "Opening Ceremony", 
    "Keynote Speaker", 
    "Dr. Ananya Rao",
    "", "", "", "", "", "", "", "", "", "", "", "", "", ""
  ],
  talkTitle: [
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available"
  ]
}
      
    },
  },
    {
      id: 4,
      title: "2nd World Summit on Spine and Spinal Disorders",
      theme: "Modern Approaches to Spinal Recovery: Innovation, Cure, and Treatment.",
      imageUrl: "/spinal.png",
      bannerUrl: "/spinal.png",
      location: "London, UK",
      Date: "October 08-09, 2026",
      Dates: "2026-08-08",
      desc1: "ICON STAR  Conferences are excited to invite you to the upcoming '2nd World Summit on Spine and Spinal Disorders' , a summit that will be held on October 08-09, 2026  in London, UK This main theme is 'Modern Approaches to Spinal Recovery: Innovation, Cure, and Treatment.'. Our goal is to raise awareness about the critical need for action to ensure that populations worldwide have access to proper mental healthcare.",
      desc2: "During this summit, we will bring together experts, advocates, and stakeholders to discuss the challenges and solutions related to mental health on a global scale. Our hope is to initiate a call to action that prioritizes mental health and well-being as a fundamental aspect of public health.",
      sessions: [
        "Advances in Neuropsychiatry and Brain Science",
        "Global Burden of Mental Disorders and Public Health Policies",
        "Child and Adolescent Psychiatry: Early Intervention and Care",
        "Geriatric Psychiatry: Mental Health in Aging Populations",
        "Depression, Anxiety, and Stress Disorders: New Perspectives",
        "Schizophrenia and Psychotic Disorders: Diagnosis and Management",
        "Substance Use Disorders and Addiction Psychiatry",
        "Suicide Prevention Strategies and Crisis Intervention",
        "Trauma, PTSD, and Resilience Building",
        "Personality Disorders: Clinical and Therapeutic Approaches",
        "Women's Mental Health: Hormonal, Social, and Cultural Perspectives",
        "Neurodevelopmental Disorders: Autism and ADHD",
        "Digital Psychiatry: Telemedicine, AI, and Mobile Health Tools",
        "Mindfulness, Meditation, and Integrative Mental Health",
        "Cross-Cultural Psychiatry and Global Perspectives",
        "Stigma Reduction and Mental Health Advocacy",
        "Forensic Psychiatry: Law, Ethics, and Mental Illness",
        "Psychopharmacology: Innovations and Challenges",
        "Psychotherapy: Evidence-Based Practices and Emerging Trends",
        "Occupational Mental Health and Workplace Wellbeing",
        "Sleep Disorders and Mental Health Connection",
        "Eating Disorders and Body Image Issues",
        "Community Mental Health and Primary Care Integration",
        "Climate Change, Disasters, and Mental Health Impacts",
        "Future Directions in Psychiatry: Precision Medicine and Genomics"
      ],
      agenda: {
  day1: {
  time: [
    "08:00 – 08:30", "08:30 – 09:00", "09:00 – 09:30", 
    "09:30 – 10:00", "10:00 – 10:30", "10:30 – 11:00",
    "11:00 – 11:30", "11:30 – 12:00", "12:00 – 12:30",
    "12:30 – 13:00", "13:00 – 13:30", "13:30 – 14:00",
    "14:00 – 14:30", "14:30 – 15:00", "15:00 – 15:30",
    "15:30 – 16:00", "16:00 – 16:30"
  ],
  speaker: [
    "Opening Ceremony", 
    "Keynote Speaker", 
    "Dr. Ananya Rao",
    "", "", "", "", "", "", "", "", "", "", "", "", "", ""
  ],
  talkTitle: [
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available"
  ]
},
  day2: {
  time: [
    "08:00 – 08:30", "08:30 – 09:00", "09:00 – 09:30", 
    "09:30 – 10:00", "10:00 – 10:30", "10:30 – 11:00",
    "11:00 – 11:30", "11:30 – 12:00", "12:00 – 12:30",
    "12:30 – 13:00", "13:00 – 13:30", "13:30 – 14:00",
    "14:00 – 14:30", "14:30 – 15:00", "15:00 – 15:30",
    "15:30 – 16:00", "16:00 – 16:30"
  ],
  speaker: [
    "Opening Ceremony", 
    "Keynote Speaker", 
    "Dr. Ananya Rao",
    "", "", "", "", "", "", "", "", "", "", "", "", "", ""
  ],
  talkTitle: [
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available"
  ]
},

      
    },
  },
    {
      id: 5,
      title: "3rd world summit on unstoppable womens LED",
      theme: "Empowering women to inspire and mentor the next Gen of LED",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8ndLzvhJ4UllWgfGmpWRtPEv17dEYx7PAfbemI0_EpWproDxqfGbW81hX47bYeDfiK4lP9_KtfUsrQ1N1bHGd7i8YT1nMB0tk9Q-GeAinRZUsXhSex84m1gdlXq2lzLpTrGy-s0ZV9-PIxPf88NLCrlTutwGpFtk5ggOe-7a8cJNzHaBsAX46ncW6sWr8ceYvxNAFnVhaMsQJpP0G_DWg9oel84de3EqeYtLEFQv9EH3oXo38oGKd6pzziptAX_N6oARrKrv76q1b",
      bannerUrl: "/sinagapore-logo.png",
      location: "Singapore",
      Date: "March 08-09, 2026",
      Dates: "2026-03-08",
      desc1: "3rd world summit on unstoppable womens LED  , hosted by ICON STAR conferences, offers an unparalleled opportunity for women of diverse backgrounds and cultures to connect, collaborate and network on a variety of issues affecting their lives. The theme of the conference:-  'empowering women to inspire and mentor the next Gen of LED' .The forum serves as a catalyst for positive change and aims to promote gender equality, economic empowerment, education, health, and political participation for women worldwide.",
      desc2: "Join us for the World Summit on Leadership to be held on march 08-09-2027  in Singapore. This is an opportunity to show your passion on a global stage and connect with like-minded individuals who share your commitment to gender equality, economic empowerment, leadership, education, health, and political participation for women worldwide. We believe that by coming together virtually, we can create a powerful force for positive change and make a real impact in the world. We invite you to be a part of this inclusive platform and share your experiences, success stories, and ideas for a more equitable future for all women",
      sessions: [
        
      ],
    agenda: {
  day1: {
  time: [
    "08:00 – 08:30", "08:30 – 09:00", "09:00 – 09:30", 
    "09:30 – 10:00", "10:00 – 10:30", "10:30 – 11:00",
    "11:00 – 11:30", "11:30 – 12:00", "12:00 – 12:30",
    "12:30 – 13:00", "13:00 – 13:30", "13:30 – 14:00",
    "14:00 – 14:30", "14:30 – 15:00", "15:00 – 15:30",
    "15:30 – 16:00", "16:00 – 16:30"
  ],
  speaker: [
    "Opening Ceremony", 
    "Keynote Speaker", 
    "Dr. Ananya Rao",
    "", "", "", "", "", "", "", "", "", "", "", "", "", ""
  ],
  talkTitle: [
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available"
  ]
},
  day2: {
  time: [
    "08:00 – 08:30", "08:30 – 09:00", "09:00 – 09:30", 
    "09:30 – 10:00", "10:00 – 10:30", "10:30 – 11:00",
    "11:00 – 11:30", "11:30 – 12:00", "12:00 – 12:30",
    "12:30 – 13:00", "13:00 – 13:30", "13:30 – 14:00",
    "14:00 – 14:30", "14:30 – 15:00", "15:00 – 15:30",
    "15:30 – 16:00", "16:00 – 16:30"
  ],
  speaker: [
    "Opening Ceremony", 
    "Keynote Speaker", 
    "Dr. Ananya Rao",
    "", "", "", "", "", "", "", "", "", "", "", "", "", ""
  ],
  talkTitle: [
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available"
  ]
}
    }
    },
    {
      id: 6,
      title: "3rd world summit on Neurology and Psychology",
      theme: "Neuroscience & Mental Health: Translating Discoveries into Global Wellness",
      imageUrl: "/neuro.png",
      bannerUrl: "/neuro.png",
      location: "Singapore",
      Date: "March 08-09, 2026",
      Dates: "2026-03-08",
      desc1: "ICON STAR  Conferences are excited to invite you to the upcoming 3rd world summit on Neurology and Psychology , a summit that will be held on 08-09 202  in  Singapore. This main theme is“Neuroscience & Mental Health: Translating Discoveries into Global Wellness' . Our goal is to raise awareness about the critical need for action to ensure that populations worldwide have access to proper mental healthcare.",
      desc2: "During this summit, we will bring together experts, advocates, and stakeholders to discuss the challenges and solutions related to mental health on a global scale. Our hope is to initiate a call to action that prioritizes mental health and well-being as a fundamental aspect of public health.",
      sessions: [
        
      ],
   agenda: {
  day1: {
  time: [
    "08:00 – 08:30", "08:30 – 09:00", "09:00 – 09:30", 
    "09:30 – 10:00", "10:00 – 10:30", "10:30 – 11:00",
    "11:00 – 11:30", "11:30 – 12:00", "12:00 – 12:30",
    "12:30 – 13:00", "13:00 – 13:30", "13:30 – 14:00",
    "14:00 – 14:30", "14:30 – 15:00", "15:00 – 15:30",
    "15:30 – 16:00", "16:00 – 16:30"
  ],
  speaker: [
    "Opening Ceremony", 
    "Keynote Speaker", 
    "Dr. Ananya Rao",
    "", "", "", "", "", "", "", "", "", "", "", "", "", ""
  ],
  talkTitle: [
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available"
  ]
},
  day2: {
  time: [
    "08:00 – 08:30", "08:30 – 09:00", "09:00 – 09:30", 
    "09:30 – 10:00", "10:00 – 10:30", "10:30 – 11:00",
    "11:00 – 11:30", "11:30 – 12:00", "12:00 – 12:30",
    "12:30 – 13:00", "13:00 – 13:30", "13:30 – 14:00",
    "14:00 – 14:30", "14:30 – 15:00", "15:00 – 15:30",
    "15:30 – 16:00", "16:00 – 16:30"
  ],
  speaker: [
    "Opening Ceremony", 
    "Keynote Speaker", 
    "Dr. Ananya Rao",
    "", "", "", "", "", "", "", "", "", "", "", "", "", ""
  ],
  talkTitle: [
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available",
    "Keynote Speaker Slot available"
  ]
},}
    }
  ])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/events' element={<Events mockEvents={mockevents} />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='/eventdetails/:id' element={<EventDetailsPage mockEvents={mockevents} />} />
        <Route path='/createevent' element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App