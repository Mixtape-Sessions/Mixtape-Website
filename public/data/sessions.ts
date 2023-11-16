interface CalendarDay {
  day: string;
  time: string;
  topics: string[];
}
export interface FAQ {
  id?: string;
  q: string;
  a: string;
}
export interface Date {
  date: string;
  dateComputer: string;
  url: string;
  eventbrite: string;
  calendar: CalendarDay[];
}
export interface Instructor {
  name: string;
  url: string;
  about: string;
  img: string;
  reviews?: string[];
}
export interface Session {
  id: string;
  title: string;
  type: "The Classics" | "The Singles" | "The Deep Cuts";
  gradientClass: string;
  buttonGradient: string;
  about: string;
  dates: Date[];
  faqs: FAQ[];
  instructors: Instructor[];
  repo?: string;
}

// Causal Inference I (Scott Cunningham)
let ci_I: Session = {
  id: "ci_I",
  title: "Causal Inference I",
  type: "The Classics",
  gradientClass: "sm:ci1-gradient",
  buttonGradient: "ci1-gradient",
  about: `Causal Inference Part I kickstarts a new 4-day series on design-based causal inference series.  It covers the foundations of causal inference grounded in a counterfactual theory of causality built on the Neyman-Rubin model of potential outcomes. It will also cover randomization inference, independence, matching, regression discontinuity and instrumental variables.  We will review the theory behind each of these designs in detail with the aim being comprehension, competency and confidence.  Each day is 8 hours with 15 minute breaks on the hour plus an hour for lunch.  To help accomplish this, we will hold ongoing discussions via Discourse, work through assignments and exercises together, and have detailed walk-throughs of code in R and Stata. This is the prequel to the Part II course that covers difference-in-differences and synthetic control.`,
  repo: "https://github.com/Mixtape-Sessions/Causal-Inference-1/",
  dates: [
    {
      date: "September 9th",
      dateComputer: "2023-09-09",
      url: "ci_I_sept9",
      eventbrite: "https://eventbrite.com/e/682636633547",
      calendar: [
        {
          day: "September 9th",
          time: "9am-5pm CST",
          topics: [
            "Introduction to causal inference",
            "Potential outcomes and counterfactuals",
            "Randomization, selection bias",
            "Randomization inference ",
          ],
        },
        {
          day: "September 10th",
          time: "9am-5pm CST",
          topics: [
            "Introduction to causal graphs",
            "Propensity score matching",
            "Nearest neighbor covariate matching",
          ],
        },
        {
          day: "September 16th",
          time: "9am-5pm CST",
          topics: [
            "Instrumental variables",
            "Canonical estimators (2SLS, Wald)",
            "Intuition and assumptions ",
            "Weak instruments and 2SLS bias",
            "Heterogenous treatment effects",
            "Local average treatment effect",
          ],
        },
        {
          day: "September 17th",
          time: "9am-5pm CST",
          topics: [
            "Introduction to regression discontinuity ",
            "Regression discontinuity identification",
            "Nonlinearities and estimation ",
            "Nonparametric estimation ",
            "General tips (data visualization, density tests, etc)",
          ],
        },
      ],
    },
  ],
  instructors: [
    {
      name: "Prof. Scott Cunningham",
      url: "http://scunning.com/",
      about: `<a href="https://www.scunning.com" class="text-violet-red-500 hover:text-violet-red-600">Scott Cunningham</a> is a professor of economics at Baylor University. Scott studies a number of topics including mental healthcare, sex work, abortion and drug policy. He loves his family, friends, colleagues, students, HBO, Ted Lasso, Keanu Reeves, Mister Rogers, my kittens Betty and Veronica, causal inference, and hip hop.`,
      img: `scott_cunningham.png`,
      reviews: [
        "I can't endorse these workshops highly enough. The ambitious syllabus is covered in great detail, interlaced with tangible examples and useful economic history lessons in addition to personal anecdotes. Anybody interested in gaining a deeper understanding in the science (art?) of causal inference and its recent developments will not regret investing a few hours (and a few dollars) in Scott's workshops",
        "Your effort to explain complex contents in such a practical way and your patience, please keep doing what you do, because it's excellent and so much needed in a difficult and sometimes not very inclusive field such economics.",
        "The course is taught in such a pedagogical manor, and communicates a lot of complex material in a short amount of time. It is a huge bonus how attentive Scott was to our questions and comments. This course would be super useful anyone working with causal inference (or hoping to) whether you are advanced or just a beginner. Only nice words to say - such an amazing week. I kind of want to do it again already.",
        "Scott's ability to explain fairly complex methods and concepts in an intuitive way, plus his complete openness and availability to answer questions as they come around, and his commitment to democratize causal inference (truly admirable and very rare within economics) make this a wonderful workshop that I would highly recommend to anyone wanting to learn more about the topic and methods.",
      ],
    },
  ],
  faqs: [
    {
      id: "discounts",
      q: "Are discounts available?",
      a: "Yes! Students, postdocs, predocs and residents of middle-income countries can attend for $50 plus a few dollars in fees. To receive your promo code, please include a photo of your student ID. International folks from <a href='https://g2lm-lic.iza.org/call-phase-iv/list-of-lic/'>low-income countries</a> can attend for $1. To receive promo codes, email us at <a href='mailto:causalinf@mixtape.consulting' class='text-violet-600 hover:text-violet-700'>causalinf@mixtape.consulting</a>.",
    },
    {
      q: "How do I access the material I need for the course?",
      a: "The course material will be availabe forever on <a href='https://github.com/Mixtape-Sessions/' class='text-violet-600 hover:text-violet-700 underline decoration-2'>Github</a>. We will also send you links to the video recordings on Vimeo after the workshop is completed.",
    },
    {
      q: "How long will it take me to master this?",
      a: "That's a great question. Causal inference, and econometrics more generally, is largely a “returns to experience” type of skill as much as it is a returns to education. The best way for you to learn anything in these classes is to work on projects that require it. Our class is designed as a fast track to both.",
    },
    {
      q: "Will we practice programming?",
      a: "Yes, I will distribute assignments with readings with directions the night before. We will help each other in Discord, asking questions, pointing out mistakes I'm making, and helping one another problem solve. I will usually assign more than we can do that faster workers always have something to work on. And in the end, I will distribute the solutions. It'll be fun I promise!",
    },
    {
      q: "Will there be recordings?",
      a: "We will upload recordings to Vimeo and they will be password protected, so that only attendees can watch the videos.",
    },
    {
      q: "I'm nervous that I can't handle the difficulty of the class.",
      a: "Don't be. I'm a good teacher. If I can learn this, so can you.",
    },
    {
      q: "How should I prepare?",
      a: "I encourage you to read my book, Causal Inference: The Mixtape which is available online for free <a href='https://mixtape.scunning.com' class='text-violet-600 hover:text-violet-700 underline decoration-2'>here</a>. Whenever possible, then read the underlying articles that interest you to go deeper.",
    },
    {
      q: "I don't have a Stata license. It's too expensive. What do I do?",
      a: "No worries! Stata has graciously provided a temporary license for all participants. Before the workshop starts, I will distribute to all of you your license so that you can have it.",
    },
    {
      q: "Are there office hours?",
      a: "If you are paying the full price, you get 30 minutes of office hours per workshop. So if someone paid for the bundled workshops, you would get 1 hour. I will be creating a calendy app with times so that you can sign up for office hours over the semester. We can talk about whatever you want.",
    },
  ],
};

// Causal Inference II (Scott Cunningham)
let ci_II: Session = {
  id: "ci_II",
  title: "Causal Inference II",
  type: "The Classics",
  gradientClass: "sm:ci2-gradient",
  buttonGradient: "ci2-gradient",
  about: `Causal inference Part II is a 4-day workshop in design based causal inference series. It will cover difference-in-differences starting from the basics and taking readers into more contemporary design elements with staggered adoption and the incorporation of covariates. Each day is 8 hours with 15 minute breaks on the hour plus an hour for lunch. We will review the theory behind each design, go into detail on the intuition of the estimation strategies and identification itself, as well as explore code in R and Stata and applications using these methods. The goal as always is that participants leave the workshop with competency and confidence. This class will be a sequel to the 4-day workshop on Causal Inference Part I and is followed by Causal Inference Part III.`,
  repo: "https://github.com/Mixtape-Sessions/Causal-Inference-2/",
  dates: [
    {
      date: "October 14th",
      dateComputer: "2023-10-14",
      url: "ci_II_oct14",
      eventbrite: "https://eventbrite.com/e/682635921417",
      calendar: [
        {
          day: "October 14th",
          time: "9am-5pm CST",
          topics: [
            "Introduction to DID",
            "ATT, DID equation and Parallel Trends",
            "OLS, Triple difference and Falsifications",
          ],
        },
        {
          day: "October 15th",
          time: "9am-5pm CST",
          topics: [
            "DID with Covariates (Sant'Anna and Zhao 2020; Abadie 2005; Heckman, Ichimura and Todd 1997)",
            "Two-way Fixed Effects (TWFE)",
            "Differential timing and Bacon decomposition (Goodman-Bacon 2021)",
          ],
        },
        {
          day: "October 21st",
          time: "9am-5pm CST",
          topics: [
            "Pathologies in TWFE and alternative estimator (deChaisemartin and D'Haultfœille 2020)",
            "Aggregating group-time average treatment effects (Callaway and Sant'Anna 2020)",
            "Analyzing event studies (Sun and Abraham 2020)",
          ],
        },
        {
          day: "October 22nd",
          time: "9am-5pm CST",
          topics: [
            "Imputation Estimators (Gardner 2021 and Borusyal et al 2021)",
            "Mundlak Estimator (Wooldridge 2022)",
            "Fuzzy Difference-in-differences (deChaisemartin and D'Haultfœille 2017)",
          ],
        },
      ],
    },
  ],
  instructors: [
    {
      name: "Prof. Scott Cunningham",
      url: "http://scunning.com/",
      about: `<a href="https://www.scunning.com" class="text-violet-red-500 hover:text-violet-red-600">Scott Cunningham</a> is a professor of economics at Baylor University. Scott studies a number of topics including mental healthcare, sex work, abortion and drug policy. He loves his family, friends, colleagues, students, HBO, Ted Lasso, Keanu Reeves, Mister Rogers, my kittens Betty and Veronica, causal inference, and hip hop.`,
      reviews: [
        "I can't endorse these workshops highly enough. The ambitious syllabus is covered in great detail, interlaced with tangible examples and useful economic history lessons in addition to personal anecdotes. Anybody interested in gaining a deeper understanding in the science (art?) of causal inference and its recent developments will not regret investing a few hours (and a few dollars) in Scott's workshops",
        "Your effort to explain complex contents in such a practical way and your patience, please keep doing what you do, because it's excellent and so much needed in a difficult and sometimes not very inclusive field such economics.",
        "The course is taught in such a pedagogical manor, and communicates a lot of complex material in a short amount of time. It is a huge bonus how attentive Scott was to our questions and comments. This course would be super useful anyone working with causal inference (or hoping to) whether you are advanced or just a beginner. Only nice words to say - such an amazing week. I kind of want to do it again already.",
        "Scott's ability to explain fairly complex methods and concepts in an intuitive way, plus his complete openness and availability to answer questions as they come around, and his commitment to democratize causal inference (truly admirable and very rare within economics) make this a wonderful workshop that I would highly recommend to anyone wanting to learn more about the topic and methods.",
      ],
      img: `scott_cunningham.png`,
    },
  ],
  faqs: [
    {
      id: "discounts",
      q: "Are discounts available?",
      a: "Yes! Students, postdocs, predocs and residents of middle-income countries can attend for $50 plus a few dollars in fees. To receive your promo code, please include a photo of your student ID. International folks from <a href='https://g2lm-lic.iza.org/call-phase-iv/list-of-lic/'>low-income countries</a> can attend for $1. To receive promo codes, email us at <a href='mailto:causalinf@mixtape.consulting' class='text-violet-600 hover:text-violet-700 underline decoration-2'>causalinf@mixtape.consulting</a>.",
    },
    {
      q: "How do I access the material I need for the course?",
      a: "The course material will be availabe forever on <a href='https://github.com/Mixtape-Sessions/' class='text-violet-600 hover:text-violet-700 underline decoration-2'>Github</a>. We will also send you links to the video recordings on Vimeo after the workshop is completed.",
    },
    {
      q: "How long will it take me to master this?",
      a: "That's a great question. Causal inference, and econometrics more generally, is largely a “returns to experience” type of skill as much as it is a returns to education. The best way for you to learn anything in these classes is to work on projects that require it. Our class is designed as a fast track to both.",
    },
    {
      q: "Will we practice programming?",
      a: "Yes, I will distribute assignments with readings with directions the night before. We will help each other in Discord, asking questions, pointing out mistakes I'm making, and helping one another problem solve. I will usually assign more than we can do that faster workers always have something to work on. And in the end, I will distribute the solutions. It'll be fun I promise!",
    },
    {
      q: "Will there be recordings?",
      a: "We will upload recordings to Vimeo and they will be password protected, so that only attendees can watch the videos.",
    },
    {
      q: "How will I communicate to you during the workshop?",
      a: "We will use Discord to communicate with one another. I will have a second monitor open so that I can see what you say. My experience has been positive with this kind of setup. Many people seem willing to talk by chat in ways they wouldn't verbally. Also participants tend to not think they are interrupting the speaker when they ask questions.",
    },
    {
      q: "I'm nervous that I can't handle the difficulty of the class.",
      a: "Don't be. I'm a good teacher. If I can learn this, so can you.",
    },
    {
      q: "How should I prepare?",
      a: "I encourage you to read my book, Causal Inference: The Mixtape which is available online for free <a href='https://mixtape.scunning.com' class='text-violet-600 hover:text-violet-700 underline decoration-2'>here</a>. Whenever possible, then read the underlying articles that interest you to go deeper.",
    },
    {
      q: "I don't have a Stata license. It's too expensive. What do I do?",
      a: "No worries! Stata has graciously provided a temporary license for all participants. Before the workshop starts, I will distribute to all of you your license so that you can have it.",
    },
    {
      q: "Are there office hours?",
      a: "If you are paying the full price, you get 30 minutes of office hours per workshop. So if someone paid for the bundled workshops, you would get 1 hour. I will be creating a calendy app with times so that you can sign up for office hours over the semester. We can talk about whatever you want.",
    },
  ],
};

// Causal Inference III (Scott Cunningham)
let ci_III: Session = {
  id: "ci_III",
  title: "Causal Inference III",
  type: "The Classics",
  gradientClass: "sm:ci3-gradient",
  buttonGradient: "ci3-gradient",
  about: `Synthetic control has been called the most important innovation in causal inference of the last two decades (Athey and Imbens 2018). It's use has been seen across the social sciences but even industry and government agencies.  The method combines many design elements from unconfoundedness principles to difference-in-differences estimation to help find suitable estimates of counterfactuals in panel settings. Each day is 8 hours with 15 minute breaks on the hour plus an hour for lunch. We will review the theory behind several estimators, go into detail on the intuition of the estimation strategies and identification itself, as well as explore code in R and Stata and applications using these methods. The goal as always is that participants leave the workshop with competency and confidence. This class will be a sequel to the Causal Inference I and II.`,
  repo: "https://github.com/Mixtape-Sessions/Causal-Inference-2/",
  dates: [
    {
      date: "November 11th",
      dateComputer: "2023-11-11",
      url: "ci_III_nov11",
      eventbrite: "https://eventbrite.com/e/685278003957",
      calendar: [
        {
          day: "November 11th",
          time: "9am-5pm CST",
          topics: [
            "Abadie's non-negative weighting method (Abadie, Diamond, and Hainmueller 2010)",
            "Role of covariates (Botosaru and Ferman 2019; Kaul et al. 2021)",
            "New forms of inference like conformal inference (Chernozhukov et al. 2021)",
            "Bias with imperfect fit and demeaned alternatives (Ferman and Pinto 2021)",
            "Ben-Michael, et al. (2021a) augmented synthetic control method and Powell (2021)"
          ],
        },
        {
          day: "November 12th",
          time: "9am-5pm CST",
          topics: [
            "Matrix completion with nuclear norm regularization (Athey et al. 2021)",
            "Augmented synthetic control with staggered rollout (Ben-Michael et al. 2021b)",
            "Synthetic difference-in-differences (Arkhangelsky et al. 2021)"
          ],
        }
      ],
    },
  ],
  instructors: [
    {
      name: "Prof. Scott Cunningham",
      url: "http://scunning.com/",
      about: `<a href="https://www.scunning.com" class="text-violet-red-500 hover:text-violet-red-600">Scott Cunningham</a> is a professor of economics at Baylor University. Scott studies a number of topics including mental healthcare, sex work, abortion and drug policy. He loves his family, friends, colleagues, students, HBO, Ted Lasso, Keanu Reeves, Mister Rogers, my kittens Betty and Veronica, causal inference, and hip hop.`,
      reviews: [
        "I can't endorse these workshops highly enough. The ambitious syllabus is covered in great detail, interlaced with tangible examples and useful economic history lessons in addition to personal anecdotes. Anybody interested in gaining a deeper understanding in the science (art?) of causal inference and its recent developments will not regret investing a few hours (and a few dollars) in Scott's workshops",
        "Your effort to explain complex contents in such a practical way and your patience, please keep doing what you do, because it's excellent and so much needed in a difficult and sometimes not very inclusive field such economics.",
        "The course is taught in such a pedagogical manor, and communicates a lot of complex material in a short amount of time. It is a huge bonus how attentive Scott was to our questions and comments. This course would be super useful anyone working with causal inference (or hoping to) whether you are advanced or just a beginner. Only nice words to say - such an amazing week. I kind of want to do it again already.",
        "Scott's ability to explain fairly complex methods and concepts in an intuitive way, plus his complete openness and availability to answer questions as they come around, and his commitment to democratize causal inference (truly admirable and very rare within economics) make this a wonderful workshop that I would highly recommend to anyone wanting to learn more about the topic and methods.",
      ],
      img: `scott_cunningham.png`,
    },
  ],
  faqs: [
    {
      id: "discounts",
      q: "Are discounts available?",
      a: "Yes! Students, postdocs, predocs and residents of middle-income countries can attend for $50 plus a few dollars in fees. To receive your promo code, please include a photo of your student ID. International folks from <a href='https://g2lm-lic.iza.org/call-phase-iv/list-of-lic/'>low-income countries</a> can attend for $1. To receive promo codes, email us at <a href='mailto:causalinf@mixtape.consulting' class='text-violet-600 hover:text-violet-700 underline decoration-2'>causalinf@mixtape.consulting</a>.",
    },
    {
      q: "How do I access the material I need for the course?",
      a: "The course material will be availabe forever on <a href='https://github.com/Mixtape-Sessions/' class='text-violet-600 hover:text-violet-700 underline decoration-2'>Github</a>. We will also send you links to the video recordings on Vimeo after the workshop is completed.",
    },
    {
      q: "How long will it take me to master this?",
      a: "That's a great question. Causal inference, and econometrics more generally, is largely a “returns to experience” type of skill as much as it is a returns to education. The best way for you to learn anything in these classes is to work on projects that require it. Our class is designed as a fast track to both.",
    },
    {
      q: "Will we practice programming?",
      a: "Yes, I will distribute assignments with readings with directions the night before. We will help each other in Discord, asking questions, pointing out mistakes I'm making, and helping one another problem solve. I will usually assign more than we can do that faster workers always have something to work on. And in the end, I will distribute the solutions. It'll be fun I promise!",
    },
    {
      q: "Will there be recordings?",
      a: "We will upload recordings to Vimeo and they will be password protected, so that only attendees can watch the videos.",
    },
    {
      q: "How will I communicate to you during the workshop?",
      a: "We will use Discord to communicate with one another. I will have a second monitor open so that I can see what you say. My experience has been positive with this kind of setup. Many people seem willing to talk by chat in ways they wouldn't verbally. Also participants tend to not think they are interrupting the speaker when they ask questions.",
    },
    {
      q: "I'm nervous that I can't handle the difficulty of the class.",
      a: "Don't be. I'm a good teacher. If I can learn this, so can you.",
    },
    {
      q: "How should I prepare?",
      a: "I encourage you to read my book, Causal Inference: The Mixtape which is available online for free <a href='https://mixtape.scunning.com' class='text-violet-600 hover:text-violet-700 underline decoration-2'>here</a>. Whenever possible, then read the underlying articles that interest you to go deeper.",
    },
    {
      q: "I don't have a Stata license. It's too expensive. What do I do?",
      a: "No worries! Stata has graciously provided a temporary license for all participants. Before the workshop starts, I will distribute to all of you your license so that you can have it.",
    },
    {
      q: "Are there office hours?",
      a: "If you are paying the full price, you get 30 minutes of office hours per workshop. So if someone paid for the bundled workshops, you would get 1 hour. I will be creating a calendy app with times so that you can sign up for office hours over the semester. We can talk about whatever you want.",
    },
  ],
};

// Doing Applied Research (Daniel Rees and Mark Anderson)
let applied: Session = {
  id: "applied",
  title: "Doing Applied Research",
  type: "The Singles",
  gradientClass: "sm:applied-gradient",
  buttonGradient: "applied-gradient",
  about: `This course is intended to be a practical guide for graduate students and early career economists doing applied research. The nuts and bolts of writing, publishing, and service to the profession are covered in two half-day sessions, each lasting roughly four hours (including short breaks). We begin by providing tips on how to start a research project, when to switch topics, and how to effectively manage multiple projects at once. Next, we provide practical advice on how to write an applied economics paper, from structing the introduction to crafting the conclusion. The second half of the course takes participants through the publication process.  In addition, we discuss networking, refereeing for economics journals, getting the most out of conferences, and how to successfully navigate the academic job market.`,
  repo: "https://github.com/Mixtape-Sessions/Doing-Applied-Research/",
  dates: [
    {
      date: "October 26th, 2023",
      dateComputer: "2023-10-26",
      url: "applied_oct26",
      eventbrite: "https://eventbrite.com/e/687409619677",
      calendar: [
        {
          day: "October 26th",
          time: "11am-3pm EST",
          topics: [
            "Starting Your Research Project",
            "Practical Tips for Writing Your Applied Paper",
            "Grad Student Job Market Q&A",
          ],
        },
        {
          day: "October 27th",
          time: "11am-3pm EST",
          topics: [
            "The Publication Process",
            "Refereeing",
            "Conferences and Networking",
            "Ask the editor!",
            "Grad Student Job Market Q&A",
          ],
        },
      ],
    },
  ],
  instructors: [
    {
      name: "Prof. Daniel Rees",
      url: "https://danielrees.weebly.com/",
      about: `<a href="https://danielrees.weebly.com/" class="text-violet-red-500 hover:text-violet-red-600">Daniel Rees</a> professor in the department of economics at the Universidad Carlos III de Madrid. He serves as a coeditor at the <i>American Journal of Health Economics</i> and at the <i>Journal of Policy Analysis and Management</i>. He was a professor in the Department of Economics at the University of Colorado Denver from 1993-2021 and Editor-in-Chief of the <i>Economics of Education Review</i> from 2014-2019. <br/><br/> Dr. Rees is currently studying the mortality transition at the turn of the 20th century, the relationship between hospital desegregation and the Black-White infant mortality gap, and the long-term effects of smoking on health.  His research has appeared in the <i>American Economic Journal: Applied Economics</i>, <i>Economic Journal</i>, <i>Journal of Development Economics</i>, <i>Journal of Economic Literature</i>, <i>Journal of Human Resources</i>, <i>Journal of Political Economy</i>, and <i>Review of Economics and Statistics</i>.`,
      img: `dan_rees.jpg`,
      reviews: [
        "As an econ grad student early in my research career, this workshop answered every question I had about how research actually gets done and how to deal with the inevitable issues, tradeoffs, and challenges of writing papers. In fact, it answered questions I didn't even know I had and delivered the hidden curriculum of research in an organized, encouraging fashion.",
        "A must attend for any aspiring researchers to learn the (unwritten) rules of applied research and the publishing process.",
        "The instructor's approach to showcasing examples of papers, review and publication process, and steps to better prepare for the job market was invaluable.",
        "Both the professors were extremely resourceful. The workshop was well-organized and allowed attendees sufficient insight into how to write an applied paper, what the publication process entails and how important conferences and networking is for graduate students.",
        "I thought the workshop was excellent.  As an incoming 3rd year PhD student, I received valuable insight into the publication process, as well as what the dos and don'ts are.",
        "Most of the information is generally not available to grad students easily and it's a learning process for everyone that takes a lot time.  This helps bridge the gap, which I'm really grateful for.",
        "Mark and Dan bring such great energy to accompany their expertise and knowledge and kept the material engaging all day."
      ],
    },
    {
      name: "Prof. D. Mark Anderson",
      url: "http://www.dmarkanderson.com/",
      about: `<a href="http://www.dmarkanderson.com/" class="text-violet-red-500 hover:text-violet-red-600">D. Mark Anderson</a> is an Associate Professor in the Department of Agricultural Economics & Economics at Montana State University, a research associate at the National Bureau of Economic Research, and a co-editor of <i>Economic Inquiry</i>.  He received his Ph.D. in economics from the University of Washington in 2011. <br/><br/> Dr. Anderson is an applied microeconomist with research interests in health and economic history.  His research has appeared in the <i>American Economic Journal: Applied Economics</i>, <i>Economic Journal</i>, <i>Journal of Economic Literature</i>, <i>Journal of Law and Economics</i>, <i>Journal of Urban Economics</i>, <i>Journal of Political Economy</i>, and <i>Review of Economics and Statistics</i>.`,
      img: `mark_anderson.jpg`,
    },
  ],
  faqs: [
    {
      q: "How do I access the material I need for the course?",
      a: "The course material will be availabe forever on <a href='https://github.com/Mixtape-Sessions/' class='text-violet-600 hover:text-violet-700 underline decoration-2'>Github</a>. We will also send you links to the video recordings on Vimeo after the workshop is completed.",
    },
    {
      q: "How long will it take me to master this?",
      a: "That's a great question. Causal inference, and econometrics more generally, is largely a “returns to experience” type of skill as much as it is a returns to education. The best way for you to learn anything in these classes is to work on projects that require it. Our class is designed as a fast track to both.",
    },
    {
      q: "Will there be recordings?",
      a: "We will upload recordings to Vimeo and they will be password protected, so that only attendees can watch the videos.",
    },
    {
      q: "I'm nervous that I can't handle the difficulty of the class.",
      a: "Don't be. We are good teachers. If we can learn this, so can you.",
    },
  ],
};

// Advanced DID (Jonathan Roth)
let advanced_did: Session = {
  id: "advanced_did",
  title: "Advanced DID",
  type: "The Deep Cuts",
  gradientClass: "sm:advanced-did-gradient",
  buttonGradient: "advanced-did-gradient",
  about: `This one-day workshop will cover advanced topics from the recent difference-in-differences literature. One question of particular focus will be, <i>"what should I do if I'm not 100% sure about the validity of the parallel trends assumption?"</i> We will cover a variety of relaxations to the parallel trends assumption, and new tools for power calculations and sensitivity analysis. The workshop will focus not just on the theory, but also on practical implementation in statistical software such as R and Stata.
  <br/><br/>
  This is one of our advanced courses. These courses are designed <strong>assuming a solid foundation in the basics of the difference-in-differences methodology</strong> and will cover the frontiers of the topic. A good review is: <a class="underline" href="https://github.com/Mixtape-Sessions/Causal-Inference-2">https://github.com/Mixtape-Sessions/Causal-Inference-2</a>.`,
  repo: "https://github.com/Mixtape-Sessions/Advanced-DID/",
  dates: [
    {
      date: "September 1st, 2023",
      dateComputer: "2023-09-01",
      url: "advanced_did_sept1",
      eventbrite: "https://eventbrite.com/e/682649612367",
      calendar: [
        {
          day: "September 1st",
          time: "10am-5pm EST",
          topics: [
            "Canonical Difference-in-Differences",
            "Staggered Treatment Timing",
            "Violations of Pre-Trends",
          ],
        },
      ],
    },
  ],
  instructors: [
    {
      name: "Prof. Jonathan Roth",
      url: "https://jonathandroth.github.io/",
      about: `<a href="https://jonathandroth.github.io/" class="text-violet-red-500 hover:text-violet-red-600">Jonathan Roth</a> is an assistant professor in the economics department at Brown University. His primary research interests are in econometrics, with a focus on causal inference. He has also worked on topics in labor economics, machine learning, and algorithmic fairness. He was previously a senior researcher in the Office of the Chief Economist at Microsoft. He received my PhD in economics in 2020 from Harvard, where He was awarded the David A. Wells prize for best dissertation. He obtained a BA summa cum laude in mathematics and economics from the University of Pennsylvania.`,
      img: `jonathan_roth.jpeg`,
    },
  ],
  faqs: [
    {
      id: "discounts",
      q: "Are discounts available?",
      a: "Yes! Students, postdocs, predocs and residents of middle-income countries can attend for $50 plus a few dollars in fees. To receive your promo code, please include a photo of your student ID. International folks from <a href='https://g2lm-lic.iza.org/call-phase-iv/list-of-lic/'>low-income countries</a> can attend for $1. To receive promo codes, email us at <a href='mailto:causalinf@mixtape.consulting' class='text-violet-600 hover:text-violet-700 underline decoration-2'>causalinf@mixtape.consulting</a>.",
    },
    {
      q: "How do I access the material I need for the course?",
      a: "The course material will be availabe forever on <a href='https://github.com/Mixtape-Sessions/' class='text-violet-600 hover:text-violet-700 underline decoration-2'>Github</a>. We will also send you links to the video recordings on Vimeo after the workshop is completed.",
    },
    {
      q: "How long will it take me to master this?",
      a: "That's a great question. Causal inference, and econometrics more generally, is largely a “returns to experience” type of skill as much as it is a returns to education. The best way for you to learn anything in these classes is to work on projects that require it. Our class is designed as a fast track to both.",
    },
    {
      q: "Will we practice programming?",
      a: "Yes, I will distribute assignments with readings with directions the night before. We will help each other in Discord, asking questions, pointing out mistakes I'm making, and helping one another problem solve. I will usually assign more than we can do that faster workers always have something to work on. And in the end, I will distribute the solutions. It'll be fun I promise!",
    },
    {
      q: "Will there be recordings?",
      a: "We will upload recordings to Vimeo and they will be password protected, so that only attendees can watch the videos.",
    },
    {
      q: "How will I communicate to you during the workshop?",
      a: "We will use Discord to communicate with one another. I will have a second monitor open so that I can see what you say. My experience has been positive with this kind of setup. Many people seem willing to talk by chat in ways they wouldn't verbally. Also participants tend to not think they are interrupting the speaker when they ask questions.",
    },
    {
      q: "I'm nervous that I can't handle the difficulty of the class.",
      a: "Don't be. I'm a good teacher. If I can learn this, so can you.",
    },
    {
      q: "How should I prepare?",
      a: "I encourage you to read my book, Causal Inference: The Mixtape which is available online for free <a href='https://mixtape.scunning.com' class='text-violet-600 hover:text-violet-700 underline decoration-2'>here</a>. Whenever possible, then read the underlying articles that interest you to go deeper.",
    },
    {
      q: "I don't have a Stata license. It's too expensive. What do I do?",
      a: "No worries! Stata has graciously provided a temporary license for all participants. Before the workshop starts, I will distribute to all of you your license so that you can have it.",
    },
  ],
};

// Synthetic Control and Clustering (Alberto Abadie)
let synth_and_clust: Session = {
  id: "synth_and_clust",
  title: "Synthetic Control and Clustering",
  type: "The Singles",
  gradientClass: "sm:synth-and-clust-gradient",
  buttonGradient: "synth-and-clust-gradient",
  about: `In this course, we will cover the fundamentals of synthetic control estimation and inference, with special emphasis on actionable guidance for applied research. We will discuss seven crucial guiding principles for empirical studies using synthetic controls and how these principles are applied in practice. Towards the end of the course, we will change topics to address “the” FAQ of econometrics office hours: When and how should we cluster standard errors?`,
  repo: "https://github.com/Mixtape-Sessions/Synthetic-Control-And-Clustering/",
  dates: [
    {
      date: "April 27th, 2023",
      dateComputer: "2023-04-27",
      url: "synth_and_clust_apr27",
      eventbrite: "https://eventbrite.com/e/498685209887",
      calendar: [
        {
          day: "April 27th",
          time: "6pm-9pm EST",
          topics: ["Synthetic Control"],
        },
        {
          day: "April 28th",
          time: "6pm-9pm EST",
          topics: ["Clustering"],
        },
      ],
    },
  ],
  instructors: [
    {
      name: "Prof. Alberto Abadie",
      url: "https://economics.mit.edu/people/faculty/alberto-abadie",
      about: `<a href="https://economics.mit.edu/people/faculty/alberto-abadie" class="text-violet-red-500 hover:text-violet-red-600">Alberto Abadie</a> is an econometrician and empirical microeconomist with broad disciplinary interests. Professor Abadie received his Ph.D. in Economics from MIT in 1999. Upon graduating, he joined the faculty at the Harvard Kennedy School, where he was promoted to full professor in 2005. He returned to MIT in 2016, where he is Professor of Economics and Associate Director of the Institute for Data, Systems, and Society (IDSS).
      <br /><br />
      His research areas are econometrics, statistics, causal inference, and program evaluation. Professor Abadie's methodological research focuses on econometric methods to estimate causal effects and, in particular, the effects of public policies, such as labor market, education, and health policy interventions. He is Associate Editor of AER: Insights, and has previously served as Editor of the Review of Economics and Statistics and Associate Editor of Econometrica and the Journal of Business and Economic Statistics. He is a Fellow of the Econometric Society and a Member of the American Academy of Arts and Sciences.`,
      img: `alberto_abadie.jpeg`,
    },
  ],
  faqs: [
    {
      id: "discounts",
      q: "Are discounts available?",
      a: "Yes! Students, postdocs, predocs and residents of middle-income countries can attend for $50 plus a few dollars in fees. To receive your promo code, please include a photo of your student ID. International folks from <a href='https://g2lm-lic.iza.org/call-phase-iv/list-of-lic/'>low-income countries</a> can attend for $1. To receive promo codes, email us at <a href='mailto:causalinf@mixtape.consulting' class='text-violet-600 hover:text-violet-700 underline decoration-2'>causalinf@mixtape.consulting</a>.",
    },
    {
      q: "How do I access the material I need for the course?",
      a: "The course material will be availabe forever on <a href='https://github.com/Mixtape-Sessions/' class='text-violet-600 hover:text-violet-700 underline decoration-2'>Github</a>. We will also send you links to the video recordings on Vimeo after the workshop is completed.",
    },
    {
      q: "How long will it take me to master this?",
      a: "That's a great question. Causal inference, and econometrics more generally, is largely a “returns to experience” type of skill as much as it is a returns to education. The best way for you to learn anything in these classes is to work on projects that require it. Our class is designed as a fast track to both.",
    },
    {
      q: "Will we practice programming?",
      a: "Yes, I will distribute assignments with readings with directions the night before. We will help each other in Discord, asking questions, pointing out mistakes I'm making, and helping one another problem solve. I will usually assign more than we can do that faster workers always have something to work on. And in the end, I will distribute the solutions. It'll be fun I promise!",
    },
    {
      q: "Will there be recordings?",
      a: "We will upload recordings to Vimeo and they will be password protected, so that only attendees can watch the videos.",
    },
    {
      q: "How will I communicate to you during the workshop?",
      a: "We will use Discord to communicate with one another. I will have a second monitor open so that I can see what you say. My experience has been positive with this kind of setup. Many people seem willing to talk by chat in ways they wouldn't verbally. Also participants tend to not think they are interrupting the speaker when they ask questions.",
    },
    {
      q: "I'm nervous that I can't handle the difficulty of the class.",
      a: "Don't be. I'm a good teacher. If I can learn this, so can you.",
    },
    {
      q: "How should I prepare?",
      a: "I encourage you to read my book, Causal Inference: The Mixtape which is available online for free <a href='https://mixtape.scunning.com' class='text-violet-600 hover:text-violet-700 underline decoration-2'>here</a>. Whenever possible, then read the underlying articles that interest you to go deeper.",
    },
    {
      q: "I don't have a Stata license. It's too expensive. What do I do?",
      a: "No worries! Stata has graciously provided a temporary license for all participants. Before the workshop starts, I will distribute to all of you your license so that you can have it.",
    },
  ],
};

// Regression Discontinuity Design (Rocío Titiunik)
let rdd: Session = {
  id: "rdd",
  title: "Regression Discontinuity Design",
  type: "The Singles",
  gradientClass: "sm:rdd-gradient",
  buttonGradient: "rdd-gradient",
  about: `This course covers methods for the analysis and interpretation of the Regression Discontinuity (RD) design, a non-experimental strategy to study treatment effects that can be used when units receive a treatment based on a score and a cutoff. The course covers methods for estimation, inference, and falsification of RD treatment effects using two different approaches: the continuity-based framework, implemented with local polynomials, and the local randomization framework, implemented with standard tools from the analysis of experiments. The focus is on conceptual understanding of the underlying methodological issues and effective empirical implementation. Every topic is illustrated with the analysis of RD examples using real-world data, walking through R and Stata codes that fully implement all the methods discussed. At the end of the course, participants will have acquired the necessary skills to rigorously interpret, visualize, validate, estimate, and characterize the uncertainty of RD treatment effects.`,
  repo: "https://github.com/Mixtape-Sessions/Regression-Discontinuity/",
  dates: [
    {
      date: "October 3rd, 2023",
      dateComputer: "2023-10-03",
      url: "rdd_oct3",
      eventbrite: "https://eventbrite.com/e/687626378007",
      calendar: [
        {
          day: "October 3rd",
          time: "6pm-9pm EST",
          topics: [
            "Sharp RD design: introduction and graphical illustration with RD plots",
            "Continuity based RD analysis",
            "Estimation of RD effects with local polynomials",
            "Optimal bandwidth selection",
          ],
        },
        {
          day: "October 4th",
          time: "6pm-9pm EST",
          topics: [
            "Continuity based RD analysis, continued",
            "Robust confidence intervals based on local polynomials",
            "Local Randomization RD analysis",
            "Inferences based on Fisherian methods",
            "Window selection based on covariates",
            "Inferences based on large-sample methods",
          ],
        },
        {
          day: "October 5th",
          time: "6pm-9pm EST",
          topics: [
            "Falsification of RD assumptions: density and covariate balance tests",
            "Imperfect compliance: The Fuzzy RD design",
          ],
        },
      ],
    },
  ],
  instructors: [
    {
      name: "Prof. Rocío Titiunik",
      url: "https://titiunik.scholar.princeton.edu",
      about: `<a href="https://titiunik.scholar.princeton.edu" class="text-violet-red-500 hover:text-violet-red-600">Rocío Titiunik</a> is Professor of Politics at Princeton University, where she is also an associated faculty with the Department of Operations Research and Financial Engineering, the Center for Statistics and Machine Learning, the Program in Latin American Studies, the Center for the Study of Democratic Politics, and the Research Program in Political Economy. She specializes in quantitative methodology for the social and behavioral sciences, with emphasis on quasi-experimental methods for causal inference and program evaluation. Her research interests lie at the intersection of political economy, political science, statistics, and data science, particularly on the development and application of quantitative methods to the study of political institutions. Her recent methodological research includes the development of statistical methods for regression discontinuity (RD) designs. Her recent substantive research centers on democratic accountability and the role of party systems in developing democracies.`,
      img: `rocio_titiunik.jpeg`,
    },
  ],
  faqs: [
    {
      id: "discounts",
      q: "Are discounts available?",
      a: "Yes! Students, postdocs, predocs and residents of middle-income countries can attend for $50 plus a few dollars in fees. To receive your promo code, please include a photo of your student ID. International folks from <a href='https://g2lm-lic.iza.org/call-phase-iv/list-of-lic/'>low-income countries</a> can attend for $1. To receive promo codes, email us at <a href='mailto:causalinf@mixtape.consulting' class='text-violet-600 hover:text-violet-700 underline decoration-2'>causalinf@mixtape.consulting</a>.",
    },
    {
      q: "How do I access the material I need for the course?",
      a: "The course material will be availabe forever on <a href='https://github.com/Mixtape-Sessions/' class='text-violet-600 hover:text-violet-700 underline decoration-2'>Github</a>. We will also send you links to the video recordings on Vimeo after the workshop is completed.",
    },
    {
      q: "How long will it take me to master this?",
      a: "That's a great question. Causal inference, and econometrics more generally, is largely a “returns to experience” type of skill as much as it is a returns to education. The best way for you to learn anything in these classes is to work on projects that require it. Our class is designed as a fast track to both.",
    },
    {
      q: "Will we practice programming?",
      a: "Yes, I will distribute assignments with readings with directions the night before. We will help each other in Discord, asking questions, pointing out mistakes I'm making, and helping one another problem solve. I will usually assign more than we can do that faster workers always have something to work on. And in the end, I will distribute the solutions. It'll be fun I promise!",
    },
    {
      q: "Will there be recordings?",
      a: "We will upload recordings to Vimeo and they will be password protected, so that only attendees can watch the videos.",
    },
    {
      q: "I'm nervous that I can't handle the difficulty of the class.",
      a: "Don't be. I'm a good teacher. If I can learn this, so can you.",
    },
  ],
};

// Machine Learning and CI (Brigham Frandsen)
let ml: Session = {
  id: "ml",
  title: "Machine Learning and Causal Inference",
  type: "The Singles",
  gradientClass: "sm:ml-gradient",
  buttonGradient: "ml-gradient",
  about: `Machine Learning's wheelhouse is out-of-sample prediction, but these powerful methods can be deployed in service of causal inference. This two-session workshop will introduce the basics of machine learning prediction methods, including lasso and random forests and how they feature in causal inference methods like double machine learning (DML) and post-double selection lasso (PDS lasso). The course covers the conceptual and theoretical basis for the methods and also gets into the nuts and bolts of implementation in python and Stata using real-world data.`,
  repo: "https://github.com/Mixtape-Sessions/Machine-Learning/",
  dates: [
    {
      date: "October 30th, 2023",
      dateComputer: "2023-10-30",
      url: "ml_oct30",
      eventbrite: "https://eventbrite.com/e/682653132897",
      calendar: [
        {
          day: "October 30th",
          time: "6pm-9pm EST",
          topics: [
            "Question your questions (are you asking a predictive or a causal question?)",
            "What is causality?",
            "What is prediction and how does it differ from causality?",
            "Review standard tools of causal inference (concepts + python/Stata)",
            "RCT gold standard",
            "Multiple regression",
            "Introduce ML prediction tools (concepts + python/Stata)",
            "Prediction objective",
            "Bias-variance tradeoff",
            "Lasso",
            "Random forest",
          ],
        },
        {
          day: "November 1st",
          time: "6pm-9pm EST",
          topics: [
            "Put ML to work in service of causality (concepts + python/Stata)",
            "Post-double selection lasso (PDS)",
            "Double/de-biased machine learning (DML)",
          ],
        },
      ],
    },
  ],
  instructors: [
    {
      name: "Prof. Brigham Frandsen",
      url: "https://economics.byu.edu/faculty-and-staff/frandsen",
      about: `<a href="https://economics.byu.edu/faculty-and-staff/frandsen" class="text-violet-red-500 hover:text-violet-red-600">Brigham Frandsen</a> is an associate professor at Brigham Young University after completing his Ph.D. in Economics at MIT, where his dissertation focused on econometric methodology and labor economics. After his Ph.D., Dr. Frandsen was selected as a Robert Wood Johnson Scholar in Health Policy Research at Harvard University where he spent two years in residence furthering his research in econometrics and labor economics, as well as adding health policy to his research agenda. Dr. Frandsen's methodological research focuses on causal inference on distributional effects. He applies these methodologies to questions about the impact of labor market institutions and interventions on education and earnings outcomes. His health policy research deals with the consequences of fragmentation in the U.S. health care system. In addition to research, Dr. Frandsen enjoys hiking and mountain biking with his wife, Christine, and their four children.`,
      img: `brigham_frandsen.jpeg`,
      reviews: [
        "Insightful, well-explained and hands-on workshop that taught me a lot. Dr Frandsen was super helpful and explained concepts clearly. It was a great mix of interactive, practical exercises and theoretical explanations!",
        "Outstanding selection of content and case studies. Excellent instructor. You will come out of this workshop with a very decent overview of Machine Learning methods and their applications in causal inference.",
      ],
    },
  ],
  faqs: [
    {
      id: "discounts",
      q: "Are discounts available?",
      a: "Yes! Students, postdocs, predocs and residents of middle-income countries can attend for $50 plus a few dollars in fees. To receive your promo code, please include a photo of your student ID. International folks from <a href='https://g2lm-lic.iza.org/call-phase-iv/list-of-lic/'>low-income countries</a> can attend for $1. To receive promo codes, email us at <a href='mailto:causalinf@mixtape.consulting' class='text-violet-600 hover:text-violet-700 underline decoration-2'>causalinf@mixtape.consulting</a>.",
    },
    {
      q: "How do I access the material I need for the course?",
      a: "The course material will be availabe forever on <a href='https://github.com/Mixtape-Sessions/' class='text-violet-600 hover:text-violet-700 underline decoration-2'>Github</a>. We will also send you links to the video recordings on Vimeo after the workshop is completed.",
    },
    {
      q: "How long will it take me to master this?",
      a: "That's a great question. Causal inference, and econometrics more generally, is largely a “returns to experience” type of skill as much as it is a returns to education. The best way for you to learn anything in these classes is to work on projects that require it. Our class is designed as a fast track to both.",
    },
    {
      q: "Will we practice programming?",
      a: "Yes, I will distribute assignments with readings with directions the night before. We will help each other in Discord, asking questions, pointing out mistakes I'm making, and helping one another problem solve. I will usually assign more than we can do that faster workers always have something to work on. And in the end, I will distribute the solutions. It'll be fun I promise!",
    },
    {
      q: "Will there be recordings?",
      a: "We will upload recordings to Vimeo and they will be password protected, so that only attendees can watch the videos.",
    },
    {
      q: "I'm nervous that I can't handle the difficulty of the class.",
      a: "Don't be. I'm a good teacher. If I can learn this, so can you.",
    },
  ],
};

// Machine Learning and Heterogeneous Effects (Brigham Frandsen)
let ml_het_effects: Session = {
  id: "ml_het_effects",
  title: "Machine Learning and Heterogeneous Effects",
  type: "The Deep Cuts",
  gradientClass: "sm:ml-het-effects-gradient",
  buttonGradient: "ml-het-effects-gradient",
  about: `The holy grail of causal inference is the individual-level treatment effect: how would a particular patient respond to a drug? Which users  will respond most to a targeted ad? Would a given student be helped or harmed by a classroom intervention? This session introduces machine learning tools for estimating heterogeneous treatment effects like random causal forests. The course goes over the theory and concepts as well as the nitty-gritty of coding the methods up in python, R, and Stata using real-world examples. This course can be taken as a follow-up to the Machine Learning and Causal Inference mixtape session, or as a stand-alone course.
  <br/><br/>
  This is one of our advanced courses. These courses are designed <strong>assuming a solid foundation in the basics of machine learning and causal inference</strong> and will cover the frontiers of the topic. A good review is the intro course: <a class="underline" href="https://github.com/Mixtape-Sessions/Machine-Learning">https://github.com/Mixtape-Sessions/Machine-Learning</a>.`,
  repo: "https://github.com/Mixtape-Sessions/Heterogeneous-Effects/",
  dates: [
    {
      date: "November 15th, 2023",
      dateComputer: "2023-11-15",
      url: "ml_het_effects_nov15",
      eventbrite: "https://eventbrite.com/e/682651197107",
      calendar: [
        {
          day: "November 15th",
          time: "6pm-9pm EST",
          topics: ["Machine Learning and Heterogeneous Effects"],
        },
      ],
    },
  ],
  instructors: [
    {
      name: "Prof. Brigham Frandsen",
      url: "https://economics.byu.edu/faculty-and-staff/frandsen",
      about: `<a href="https://economics.byu.edu/faculty-and-staff/frandsen" class="text-violet-red-500 hover:text-violet-red-600">Brigham Frandsen</a> is an associate professor at Brigham Young University after completing his Ph.D. in Economics at MIT, where his dissertation focused on econometric methodology and labor economics. After his Ph.D., Dr. Frandsen was selected as a Robert Wood Johnson Scholar in Health Policy Research at Harvard University where he spent two years in residence furthering his research in econometrics and labor economics, as well as adding health policy to his research agenda. Dr. Frandsen's methodological research focuses on causal inference on distributional effects. He applies these methodologies to questions about the impact of labor market institutions and interventions on education and earnings outcomes. His health policy research deals with the consequences of fragmentation in the U.S. health care system. In addition to research, Dr. Frandsen enjoys hiking and mountain biking with his wife, Christine, and their four children.`,
      img: `brigham_frandsen.jpeg`,
      reviews: [
        "Insightful, well-explained and hands-on workshop that taught me a lot. Dr Frandsen was super helpful and explained concepts clearly. It was a great mix of interactive, practical exercises and theoretical explanations!",
        "Outstanding selection of content and case studies. Excellent instructor. You will come out of this workshop with a very decent overview of Machine Learning methods and their applications in causal inference.",
      ],
    },
  ],
  faqs: [
    {
      id: "discounts",
      q: "Are discounts available?",
      a: "Yes! Students, postdocs, predocs and residents of middle-income countries can attend for $50 plus a few dollars in fees. To receive your promo code, please include a photo of your student ID. International folks from <a href='https://g2lm-lic.iza.org/call-phase-iv/list-of-lic/'>low-income countries</a> can attend for $1. To receive promo codes, email us at <a href='mailto:causalinf@mixtape.consulting' class='text-violet-600 hover:text-violet-700 underline decoration-2'>causalinf@mixtape.consulting</a>.",
    },
    {
      q: "How do I access the material I need for the course?",
      a: "The course material will be availabe forever on <a href='https://github.com/Mixtape-Sessions/' class='text-violet-600 hover:text-violet-700 underline decoration-2'>Github</a>. We will also send you links to the video recordings on Vimeo after the workshop is completed.",
    },
    {
      q: "How long will it take me to master this?",
      a: "That's a great question. Causal inference, and econometrics more generally, is largely a “returns to experience” type of skill as much as it is a returns to education. The best way for you to learn anything in these classes is to work on projects that require it. Our class is designed as a fast track to both.",
    },
    {
      q: "Will we practice programming?",
      a: "Yes, I will distribute assignments with readings with directions the night before. We will help each other in Discord, asking questions, pointing out mistakes I'm making, and helping one another problem solve. I will usually assign more than we can do that faster workers always have something to work on. And in the end, I will distribute the solutions. It'll be fun I promise!",
    },
    {
      q: "Will there be recordings?",
      a: "We will upload recordings to Vimeo and they will be password protected, so that only attendees can watch the videos.",
    },
    {
      q: "I'm nervous that I can't handle the difficulty of the class.",
      a: "Don't be. I'm a good teacher. If I can learn this, so can you.",
    },
  ],
};

// Shift-Share IV (Peter Hull)
let shift_share: Session = {
  id: "shift_share",
  title: "Shift-Share IV",
  type: "The Deep Cuts",
  gradientClass: "sm:shift-share-gradient",
  buttonGradient: "shift-share-gradient",
  about: `Shift-Share Instrumental Variables (SSIV) are used to address endogeneity and selection challenges in many economic settings. This workshop will last two evenings and will introduce the basics of SSIV and cover the recent literature on its econometric foundations. Special focus will be paid on the different assumptions underlying the “exogenous shares” and “exogenous shocks” approaches to SSIV identification, and their practical implications. We will also cover a more general class of instrumental variable strategies combining exogenous shocks and non-random exposure. Group programming exercises will be used to illustrate various theoretical concepts in real-world applications.
  <br/><br/>
  This is one of our advanced courses. These courses are designed <strong>assuming a solid foundation in the basics of instrumental variables</strong> and will cover the frontiers of the topic. A good review is the intro course: <a class="underline" href="https://github.com/Mixtape-Sessions/Instrumental-Variables">https://github.com/Mixtape-Sessions/Instrumental-Variables</a>.`,
  repo: "https://github.com/Mixtape-Sessions/Shift-Share/",
  dates: [
    {
    	date: "September 25th, 2023",
      dateComputer: "2023-09-25",
    	url: "shift_share_sept25",
    	eventbrite: "https://eventbrite.com/e/682650565217",
    	calendar: [
    		{
    			day: "September 25th",
    			time: "6pm-9pm EST",
    			topics: [
    				"Introducing Shift-Share IV: Recent Applications",
    				"The 'Exogenous Shares' Approach (Goldsmith-Pinkham et al. 2020)",
    				"The 'Exogenous Shocks' Approach (Borusyak et al., 2022)",
    			],
    		},
        {
    			day: "September 27th",
    			time: "6pm-9pm EST",
    			topics: [
    				"The 'Exogenous Shocks' Approach (Borusyak et al., 2022)",
    				"Practical Implications from Exogenous Shares vs. Shocks",
    				"Beyond SSIV: Non-Random Exposure to Exogenous Shocks (Borusyak and Hull, 2022)",
    				"Coding Lab",
    			],
    		},
    	],
    },
  ],
  instructors: [
    {
      name: "Prof. Peter Hull",
      url: "http://peterhull.net/",
      about: `<a href="https://peterhull.net/" class="text-violet-red-500 hover:text-violet-red-600">Peter Hull</a> is the Groos Family Assistant Professor of Economics at Brown Univeristy and a Faculty Research Fellow at the National Bureau of Economic Research. He has published papers on topics in applied econometrics, education, healthcare, and criminal justice, in outlets such as the American Economic Review, the Quarterly Journal of Economics, the Review of Economic Studies, and the New England Journal of Medicine. His research is focused on developing and applying new instrumental variable methods to measure the quality of institutions, such as schools or hospitals, as well as discrimination and bias in human and algorithmic decision-making. Prior to Brown, Professor Hull taught at the Kenneth C. Griffin Department of Economics at the University of Chicago and worked at Microsoft Research and the Federal Reserve Bank of New York. He earned his PhD in economics from MIT in 2017, under 2021 Nobel Laureate Josh Angrist.`,
      reviews: [
        "Using your Saturday to get a world-class tutorial in instrumental variables that would cost many thousands of dollars (or hours of RA work) to get otherwise is a pretty good deal. Peter is super clear and clearly prepared really well for the workshop, with great materials and interesting simulations and applications.",
        "The course is very organized and gives a comprehensive overview of IV designs and its recent advances. Peter is very kind and seems to be truly interested in making students understand the lessons. I strongly recommend the IV Mixtape session for anyone interested in enhancing knowledge about IV by getting to know practical applications and learning by coding.",
        "This workshop was expertly run. The exposure to a really amazing instructor in Peter Hull was valuable in and of itself. The lectures were well prepared, lots of helpful readings and lecture notes were provided. I came away having learning more about IV and feel more confident about how IV works, in theory and practice.",
      ],
      img: `peter_hull.png`,
    },
  ],
  faqs: [
    {
      id: "discounts",
      q: "Are discounts available?",
      a: "Yes! Students, postdocs, predocs and residents of middle-income countries can attend for $50 plus a few dollars in fees. To receive your promo code, please include a photo of your student ID. International folks from <a href='https://g2lm-lic.iza.org/call-phase-iv/list-of-lic/'>low-income countries</a> can attend for $1. To receive promo codes, email us at <a href='mailto:causalinf@mixtape.consulting' class='text-violet-600 hover:text-violet-700 underline decoration-2'>causalinf@mixtape.consulting</a>.",
    },
    {
      q: "How do I access the material I need for the course?",
      a: "The course material will be availabe forever on <a href='https://github.com/Mixtape-Sessions/' class='text-violet-600 hover:text-violet-700 underline decoration-2'>Github</a>. We will also send you links to the video recordings on Vimeo after the workshop is completed.",
    },
    {
      q: "How long will it take me to master this?",
      a: "That's a great question. Causal inference, and econometrics more generally, is largely a “returns to experience” type of skill as much as it is a returns to education. The best way for you to learn anything in these classes is to work on projects that require it. Our class is designed as a fast track to both.",
    },
    {
      q: "Will we practice programming?",
      a: "Yes, I will distribute assignments with readings with directions the night before. We will help each other in Discord, asking questions, pointing out mistakes I'm making, and helping one another problem solve. I will usually assign more than we can do that faster workers always have something to work on. And in the end, I will distribute the solutions. It'll be fun I promise!",
    },
    {
      q: "Will there be recordings?",
      a: "We will upload recordings to Vimeo and they will be password protected, so that only attendees can watch the videos.",
    },
    {
      q: "I'm nervous that I can't handle the difficulty of the class.",
      a: "Don't be. I'm a good teacher. If I can learn this, so can you.",
    },
  ],
};

// Instrumental Variables (Peter Hull)
let iv: Session = {
  id: "iv",
  title: "Instrumental Variables",
  type: "The Singles",
  gradientClass: "sm:iv-gradient",
  buttonGradient: "iv-gradient",
  about: `Instrumental variables (IV) is a powerful tool for leveraging external ("exogenous") variation to estimate the causal effects of otherwise confounded ("endogenous") variables. This two-day workshop will introduce the basics of IV through different practical examples, formalize the requirements of a valid and powerful IV, and discuss the mechanics of the two-stage least squares (2SLS) estimator. Special focus will be paid on interpreting linear IV under heterogeneous treatment effects and recent advances in judge leniency designs. The course will include substantial group programming exercises, where different IV techniques will be illustrated in real-world applications.`,
  repo: "https://github.com/Mixtape-Sessions/Instrumental-Variables/",
  dates: [
    {
    	date: "September 27th, 2022",
      dateComputer: "2022-09-27",
    	url: "iv_sept27",
    	eventbrite: "https://eventbrite.com/e/",
    	calendar: [
    		{
    			day: "September 27th",
    			time: "6pm-9pm EST",
    			topics: [
    				"Regression Review and Regression Endogeneity",
    				"Introduction to IV",
    				"Understanding Instrument Validity; 2SLS Mechanics; Applications",
    				"Coding Lab",
    			],
    		},
    		{
    			day: "September 28th",
    			time: "6pm-9pm EST",
    			topics: [
    				"Heterogeneous Treatment Effects; Characterizing Compliers; MTEs",
    				"Judge Leniency Designs",
    				"Coding Lab",
    			],
    		},
    	],
    },
  ],
  instructors: [
    {
      name: "Prof. Peter Hull",
      url: "http://peterhull.net/",
      about: `<a href="https://peterhull.net/" class="text-violet-red-500 hover:text-violet-red-600">Peter Hull</a> is the Groos Family Assistant Professor of Economics at Brown Univeristy and a Faculty Research Fellow at the National Bureau of Economic Research. He has published papers on topics in applied econometrics, education, healthcare, and criminal justice, in outlets such as the American Economic Review, the Quarterly Journal of Economics, the Review of Economic Studies, and the New England Journal of Medicine. His research is focused on developing and applying new instrumental variable methods to measure the quality of institutions, such as schools or hospitals, as well as discrimination and bias in human and algorithmic decision-making. Prior to Brown, Professor Hull taught at the Kenneth C. Griffin Department of Economics at the University of Chicago and worked at Microsoft Research and the Federal Reserve Bank of New York. He earned his PhD in economics from MIT in 2017, under 2021 Nobel Laureate Josh Angrist.`,
      reviews: [
        "Using your Saturday to get a world-class tutorial in instrumental variables that would cost many thousands of dollars (or hours of RA work) to get otherwise is a pretty good deal. Peter is super clear and clearly prepared really well for the workshop, with great materials and interesting simulations and applications.",
        "The course is very organized and gives a comprehensive overview of IV designs and its recent advances. Peter is very kind and seems to be truly interested in making students understand the lessons. I strongly recommend the IV Mixtape session for anyone interested in enhancing knowledge about IV by getting to know practical applications and learning by coding.",
        "This workshop was expertly run. The exposure to a really amazing instructor in Peter Hull was valuable in and of itself. The lectures were well prepared, lots of helpful readings and lecture notes were provided. I came away having learning more about IV and feel more confident about how IV works, in theory and practice.",
      ],
      img: `peter_hull.png`,
    },
  ],
  faqs: [
    {
      id: "discounts",
      q: "Are discounts available?",
      a: "Yes! Students, postdocs, predocs and residents of middle-income countries can attend for $50 plus a few dollars in fees. To receive your promo code, please include a photo of your student ID. International folks from <a href='https://g2lm-lic.iza.org/call-phase-iv/list-of-lic/'>low-income countries</a> can attend for $1. To receive promo codes, email us at <a href='mailto:causalinf@mixtape.consulting' class='text-violet-600 hover:text-violet-700'>causalinf@mixtape.consulting</a>.",
    },
    {
      q: "How do I access the material I need for the course?",
      a: "The course material will be availabe forever on <a href='https://github.com/Mixtape-Sessions/' class='text-violet-600 hover:text-violet-700'>Github</a>. We will also send you links to the video recordings on Vimeo after the workshop is completed.",
    },
    {
      q: "How long will it take me to master this?",
      a: "That's a great question. Causal inference, and econometrics more generally, is largely a “returns to experience” type of skill as much as it is a returns to education. The best way for you to learn anything in these classes is to work on projects that require it. Our class is designed as a fast track to both.",
    },
    {
      q: "Will we practice programming?",
      a: "Yes, I will distribute assignments with readings with directions the night before. We will help each other in Discord, asking questions, pointing out mistakes I'm making, and helping one another problem solve. I will usually assign more than we can do that faster workers always have something to work on. And in the end, I will distribute the solutions. It'll be fun I promise!",
    },
    {
      q: "Will there be recordings?",
      a: "We will upload recordings to Vimeo and they will be password protected, so that only attendees can watch the videos.",
    },
    {
      q: "I'm nervous that I can't handle the difficulty of the class.",
      a: "Don't be. I'm a good teacher. If I can learn this, so can you.",
    },
  ],
};

// Design-Based Inference (Peter Hull)
let design: Session = {
  id: "design",
  title: "Design-Based Inference",
  type: "The Deep Cuts",
  gradientClass: "sm:design-gradient",
  buttonGradient: "design-gradient",
  about: `This three-day workshop covers a wide range of practical results for regression and IV-based analyses of causal effects which leverage random or conditionally as-good-as-random shocks. Questions of particular focus include:
  <ul class="list-disc list-inside">
    <li>"What controls do I need to include to avoid omitted variables bias?"</li>
    <li>"Do I need to worry about 'negative weighting' of heterogeneous effects?"</li>
    <li>"How should I be clustering my standard errors?"</li>
    <li>"What's the payoff to considering nonlinear/'structural' analyses?"</li>
  </ul>
  Results will be illustrated through several real-world applications.
  <br/><br/>
  This is one of our advanced courses. These courses are designed <strong>assuming a solid foundation in the basics of causal inference</strong> and will cover advanced methods. A solid understanding of the material covered in the material from Scott's courses (<a class="underline" href="https://github.com/Mixtape-Sessions/Causal-Inference-1">Part 1</a> and <a class="underline" href="https://github.com/Mixtape-Sessions/Causal-Inference-2">Part 2</a>) will be assumed.`,
  repo: "https://github.com/Mixtape-Sessions/Design-Based-Inference",
  dates: [
    {
    	date: "April 22nd, 2024",
      dateComputer: "2024-04-22",
    	url: "design_apr22",
    	eventbrite: "https://eventbrite.com/e/760204802027",
    	calendar: [
    		{
    			day: "April 22nd",
    			time: "6pm-9pm EST",
    			topics: [
    				"Lecture 1: Introduction; Regression Recap",
            "Lecture 2: Selection on Observables",
            "Take-home Application"
    			],
    		},
    		{
    			day: "April 24th",
    			time: "6pm-9pm EST",
    			topics: [
    				"Lecture 3: Negative Weights",
            "Lecture 4: Clustering",
            "Take-home Application"
    			],
    		},
        {
    			day: "April 26th",
    			time: "6pm-9pm EST",
    			topics: [
    				"Lecture 5: Recentered IV",
            "Lecture 6: Nonlinear Models",
            "Take-home Application"
    			],
    		},
    	],
    },
  ],
  instructors: [
    {
      name: "Prof. Peter Hull",
      url: "http://peterhull.net/",
      about: `<a href="https://peterhull.net/" class="text-violet-red-500 hover:text-violet-red-600">Peter Hull</a> is the Groos Family Assistant Professor of Economics at Brown Univeristy and a Faculty Research Fellow at the National Bureau of Economic Research. He has published papers on topics in applied econometrics, education, healthcare, and criminal justice, in outlets such as the American Economic Review, the Quarterly Journal of Economics, the Review of Economic Studies, and the New England Journal of Medicine. His research is focused on developing and applying new instrumental variable methods to measure the quality of institutions, such as schools or hospitals, as well as discrimination and bias in human and algorithmic decision-making. Prior to Brown, Professor Hull taught at the Kenneth C. Griffin Department of Economics at the University of Chicago and worked at Microsoft Research and the Federal Reserve Bank of New York. He earned his PhD in economics from MIT in 2017, under 2021 Nobel Laureate Josh Angrist.`,
      reviews: [
        "Using your Saturday to get a world-class tutorial in instrumental variables that would cost many thousands of dollars (or hours of RA work) to get otherwise is a pretty good deal. Peter is super clear and clearly prepared really well for the workshop, with great materials and interesting simulations and applications.",
        "The course is very organized and gives a comprehensive overview of IV designs and its recent advances. Peter is very kind and seems to be truly interested in making students understand the lessons.",
        "This workshop was expertly run. The exposure to a really amazing instructor in Peter Hull was valuable in and of itself. The lectures were well prepared, lots of helpful readings and lecture notes were provided.",
      ],
      img: `peter_hull.png`,
    },
  ],
  faqs: [
    {
      id: "discounts",
      q: "Are discounts available?",
      a: "Yes! Students, postdocs, predocs and residents of middle-income countries can attend for $50 plus a few dollars in fees. To receive your promo code, please include a photo of your student ID. International folks from <a href='https://g2lm-lic.iza.org/call-phase-iv/list-of-lic/'>low-income countries</a> can attend for $1. To receive promo codes, email us at <a href='mailto:causalinf@mixtape.consulting' class='text-violet-600 hover:text-violet-700'>causalinf@mixtape.consulting</a>.",
    },
    {
      q: "How do I access the material I need for the course?",
      a: "The course material will be availabe forever on <a href='https://github.com/Mixtape-Sessions/' class='text-violet-600 hover:text-violet-700'>Github</a>. We will also send you links to the video recordings on Vimeo after the workshop is completed.",
    },
    {
      q: "How long will it take me to master this?",
      a: "That's a great question. Causal inference, and econometrics more generally, is largely a “returns to experience” type of skill as much as it is a returns to education. The best way for you to learn anything in these classes is to work on projects that require it. Our class is designed as a fast track to both.",
    },
    {
      q: "Will we practice programming?",
      a: "Yes, I will distribute assignments with readings with directions the night before. We will help each other in Discord, asking questions, pointing out mistakes I'm making, and helping one another problem solve. I will usually assign more than we can do that faster workers always have something to work on. And in the end, I will distribute the solutions. It'll be fun I promise!",
    },
    {
      q: "Will there be recordings?",
      a: "We will upload recordings to Vimeo and they will be password protected, so that only attendees can watch the videos.",
    },
    {
      q: "I'm nervous that I can't handle the difficulty of the class.",
      a: "Don't be. I'm a good teacher. If I can learn this, so can you.",
    },
  ],
};

// Experimentation (Rebecca Thornton)
let experimentation: Session = {
  id: "experiment",
  title: "Experimentation",
  type: "The Singles",
  gradientClass: "sm:experiment-gradient",
  buttonGradient: "experiment-gradient",
  about: `TBD.`,
  repo: "https://github.com/Mixtape-Sessions/Experimentation",
  dates: [
    {
    	date: "September XX, 2023",
      dateComputer: "2023-09-01",
    	url: "experimental",
    	eventbrite: "https://eventbrite.com/e/",
    	calendar: [
    		{
    			day: "September 27th",
    			time: "6pm-9pm EST",
    			topics: [
    				"TBD Day 1"
    			],
    		},
    		{
    			day: "September 29th",
    			time: "6pm-9pm EST",
    			topics: [
    				"TBD Day 2"
    			],
    		},
        {
    			day: "September 1st",
    			time: "6pm-9pm EST",
    			topics: [
    				"TBD Day 3"
    			],
    		},
    	],
    },
  ],
  instructors: [
    {
      name: "Prof. Rebecca Thornton",
      url: "https://www.rebeccathornton.net/",
      about: `<a href="https://www.rebeccathornton.net/" class="text-violet-red-500 hover:text-violet-red-600">Rebecca Thornton</a> is a Professor in the Department of Economics in the Hankamer School of Business at Baylor University. Prior to that she was an Associate Professor at the University of Illinois at Urbana-Champaign and an Assistant Professor at the University of Michigan in the Department of Economics and Population Studies Center. Dr. Thornton’s research focuses on health, education, and the status of women in developing countries. Across these topics, her work addresses core issues within Economics, including the role of subjective beliefs in decision-making and how social networks influence behavior and beliefs. Dr. Thornton has been the principal or co-investigator on studies in India, Jordan, Malawi, Nicaragua, Nepal, and Uganda. These studies have involved collecting longitudinal data and conducting field experiments to understand important development issues such as HIV prevention, family planning uptake, enrollment in health insurance, effects of merit-based scholarships, and effective ways to improve early grade literacy.`,
      reviews: [],
      img: `rebecca_thornton.jpg`,
    },
  ],
  faqs: [
    {
      id: "discounts",
      q: "Are discounts available?",
      a: "Yes! Students, postdocs, predocs and residents of middle-income countries can attend for $50 plus a few dollars in fees. To receive your promo code, please include a photo of your student ID. International folks from <a href='https://g2lm-lic.iza.org/call-phase-iv/list-of-lic/'>low-income countries</a> can attend for $1. To receive promo codes, email us at <a href='mailto:causalinf@mixtape.consulting' class='text-violet-600 hover:text-violet-700'>causalinf@mixtape.consulting</a>.",
    },
    {
      q: "How do I access the material I need for the course?",
      a: "The course material will be availabe forever on <a href='https://github.com/Mixtape-Sessions/' class='text-violet-600 hover:text-violet-700'>Github</a>. We will also send you links to the video recordings on Vimeo after the workshop is completed.",
    },
    {
      q: "How long will it take me to master this?",
      a: "That's a great question. Causal inference, and econometrics more generally, is largely a “returns to experience” type of skill as much as it is a returns to education. The best way for you to learn anything in these classes is to work on projects that require it. Our class is designed as a fast track to both.",
    },
    {
      q: "Will we practice programming?",
      a: "Yes, I will distribute assignments with readings with directions the night before. We will help each other in Discord, asking questions, pointing out mistakes I'm making, and helping one another problem solve. I will usually assign more than we can do that faster workers always have something to work on. And in the end, I will distribute the solutions. It'll be fun I promise!",
    },
    {
      q: "Will there be recordings?",
      a: "We will upload recordings to Vimeo and they will be password protected, so that only attendees can watch the videos.",
    },
    {
      q: "I'm nervous that I can't handle the difficulty of the class.",
      a: "Don't be. I'm a good teacher. If I can learn this, so can you.",
    },
  ],
};

// Frontiers in DID (Brantly Callaway)
let frontiers_did: Session = {
  id: "frontiers_did",
  title: "Frontiers in DID",
  type: "The Deep Cuts",
  gradientClass: "sm:frontiers-gradient",
  buttonGradient: "frontiers-gradient",
  about: `This course provides an in-depth introduction to panel data approaches to causal inference. The first part of the course reviews how new "heterogeneity-robust" estimation strategies address some important limitations of traditional two-way fixed effects regressions in difference-in-differences applications, and then provides an in-depth discussion/comparison of many of these approaches. This part also includes a number of practical extensions such as how to include covariates in the parallel trends assumption and dealing with "bad controls". The second part of the course discusses how the insights of recent work on difference-in-differences can apply in a number of other settings that frequently arise in empirical work. And, in particular, this part of the course provides connections between the difference-in-differences literature and alternative identification strategies (conditioning on lagged outcomes, change-in-changes, and interactive fixed effects models) and also how to deal with more complicated treatment regimes (continuous treatments or treatments that can change value over time).
  <br/></br>
  This is one of our advanced courses. These courses are designed <strong>assuming a solid foundation in the basics of the difference-in-differences methodology</strong> and will cover the frontiers of the topic. A good review is: https://github.com/Mixtape-Sessions/Causal-Inference-2.`,
  repo: "https://github.com/Mixtape-Sessions/Frontiers-in-DID",
  dates: [
    {
    	date: "October 17th, 2023",
      dateComputer: "2023-10-17",
    	url: "frontiers_did_oct17",
    	eventbrite: "https://eventbrite.com/e/719203335537",
    	calendar: [
    		{
    			day: "October 17th",
    			time: "6pm-9pm EST",
    			topics: [
    				"'Heterogeneity-robust' DID estimation",
            "Including covariates in the parallel trends assumption", 
            "Dealing with 'bad controls'",
    			],
    		},
    		{
    			day: "October 19th",
    			time: "6pm-9pm EST",
    			topics: [
    				"Alternative identification strategies (conditioning on lagged outcomes, change-in-changes, and interactive fixed effects models)",
            "More complicated treatment regimes (continuous treatments or treatments that can change value over time)"
    			],
    		}
    	],
    },
  ],
  instructors: [
    {
      name: "Prof. Brantly Callaway",
      url: "https://bcallaway11.github.io/",
      about: `<a href="https://bcallaway11.github.io/" class="text-violet-red-500 hover:text-violet-red-600">Brantly Callaway</a> is an Associate Professor in the Department of Economics at the University of Georgia.  His main research interests lie in econometrics, and, in particular, developing methods to use panel data (that is, repeated observations on the same location, firm, or person over time) to evaluate the effects of economic policies.  He also has substantive research interests in labor economics and has studied intergenerational income mobility, job displacement, minimum wage policies, and unions.`,
      reviews: [],
      img: `brantly_callaway.jpeg`,
    },
  ],
  faqs: [
    {
      id: "discounts",
      q: "Are discounts available?",
      a: "Yes! Students, postdocs, predocs and residents of middle-income countries can attend for $50 plus a few dollars in fees. To receive your promo code, please include a photo of your student ID. International folks from <a href='https://g2lm-lic.iza.org/call-phase-iv/list-of-lic/'>low-income countries</a> can attend for $1. To receive promo codes, email us at <a href='mailto:causalinf@mixtape.consulting' class='text-violet-600 hover:text-violet-700'>causalinf@mixtape.consulting</a>.",
    },
    {
      q: "How do I access the material I need for the course?",
      a: "The course material will be availabe forever on <a href='https://github.com/Mixtape-Sessions/' class='text-violet-600 hover:text-violet-700'>Github</a>. We will also send you links to the video recordings on Vimeo after the workshop is completed.",
    },
    {
      q: "How long will it take me to master this?",
      a: "That's a great question. Causal inference, and econometrics more generally, is largely a “returns to experience” type of skill as much as it is a returns to education. The best way for you to learn anything in these classes is to work on projects that require it. Our class is designed as a fast track to both.",
    },
    {
      q: "Will we practice programming?",
      a: "Yes, I will distribute assignments with readings with directions the night before. We will help each other in Discord, asking questions, pointing out mistakes I'm making, and helping one another problem solve. I will usually assign more than we can do that faster workers always have something to work on. And in the end, I will distribute the solutions. It'll be fun I promise!",
    },
    {
      q: "Will there be recordings?",
      a: "We will upload recordings to Vimeo and they will be password protected, so that only attendees can watch the videos.",
    },
    {
      q: "I'm nervous that I can't handle the difficulty of the class.",
      a: "Don't be. I'm a good teacher. If I can learn this, so can you.",
    },
  ],
};

// Empirical Bayes (Brantly Callaway)
let empirical_bayes: Session = {
  id: "empirical_bayes",
  title: "Empirical Bayes and Large-Scale Inference",
  type: "The Singles",
  gradientClass: "sm:empirical-bayes-gradient",
  buttonGradient: "empirical-bayes-gradient",
  about: `This mixtape session will cover Empirical Bayes methods for studying heterogeneity, estimating individual effects, and making decisions in settings with many unit-specific parameters. Examples include studies of school, teacher, and physician quality; neighborhood effects on economic mobility; firm effects on wages; employer-specific labor market discrimination; and individualized treatment effect predictions and policy recommendations. Topics will include methods for quantifying variation in effects, empirical Bayes shrinkage, connections to machine learning methods, and large-scale inference tools for multiple testing and decision-making. By the end of the course, participants will be equipped to utilize these methods in their own research or business applications.`,
  repo: "https://github.com/Mixtape-Sessions/Empirical-Bayes",
  dates: [
    {
    	date: "November 6th, 2023",
      dateComputer: "2023-11-06",
    	url: "empirical_bayes_nov6",
    	eventbrite: "https://eventbrite.com/e/712710946627",
    	calendar: [
    		{
    			day: "November 6th",
    			time: "6pm-9pm EST",
    			topics: [
    				"Classic parametric empirical Bayes methods",
            "Mechanics and justification for empirical Bayes shrinkage",
            "Random and fixed effects perspectives", 
            "Simple deconvolution methods",
            "James/Stein Theorem",
            "School value-added application"
    			],
    		},
    		{
    			day: "November 8th",
    			time: "6pm-9pm EST",
    			topics: [
            "Bias-correction methods for variance estimation", 
            "Flexible deconvolution approaches", 
            "Comparisons of nonparametric and linear shrinkage posteriors",
            "Connections to machine learning",
            "Application to an experiment studying the distribution of labor market discrimination across large US employers"
    			],
    		},
        {
    			day: "November 10th",
    			time: "6pm-9pm EST",
    			topics: [
    				"Partial identification of mixing distributions and posteriors",
            "Connections to multiple testing (for example: how we decide which employers discriminate, or which subgroups benefit from an intervention?)", 
            "Ranking problems (how do we use data to select the best neighborhoods or schools?)", 
            "Application to experimental data to discern which large employers discriminate most on the basis of race and gender."
    			],
    		},
    	],
    },
  ],
  instructors: [
    {
      name: "Prof. Christopher Walters",
      url: "https://eml.berkeley.edu/~crwalters/",
      about: `<a href="https://eml.berkeley.edu/~crwalters/" class="text-violet-red-500 hover:text-violet-red-600">Cristopher Walters</a> is an Associate Professor in the Department of Economics at the University of California, Berkeley. He joined the Berkeley faculty in 2013 after completing a PhD in economics at MIT. Professor Walters is an applied microeconomist with expertise in labor economics, applied econometrics, causal inference, and the economics of education. His recent work includes studies using experiments to detect labor market discrimination, evaluations of school choice and early childhood programs, and empirical Bayes methods for summarizing heterogeneity in treatment effects.`,
      reviews: [],
      img: `chris_walters.jpg`,
    },
  ],
  faqs: [
    {
      id: "discounts",
      q: "Are discounts available?",
      a: "Yes! Students, postdocs, predocs and residents of middle-income countries can attend for $50 plus a few dollars in fees. To receive your promo code, please include a photo of your student ID. International folks from <a href='https://g2lm-lic.iza.org/call-phase-iv/list-of-lic/'>low-income countries</a> can attend for $1. To receive promo codes, email us at <a href='mailto:causalinf@mixtape.consulting' class='text-violet-600 hover:text-violet-700'>causalinf@mixtape.consulting</a>.",
    },
    {
      q: "How do I access the material I need for the course?",
      a: "The course material will be availabe forever on <a href='https://github.com/Mixtape-Sessions/' class='text-violet-600 hover:text-violet-700'>Github</a>. We will also send you links to the video recordings on Vimeo after the workshop is completed.",
    },
    {
      q: "How long will it take me to master this?",
      a: "That's a great question. Causal inference, and econometrics more generally, is largely a “returns to experience” type of skill as much as it is a returns to education. The best way for you to learn anything in these classes is to work on projects that require it. Our class is designed as a fast track to both.",
    },
    {
      q: "Will we practice programming?",
      a: "Yes, I will distribute assignments with readings with directions the night before. We will help each other in Discord, asking questions, pointing out mistakes I'm making, and helping one another problem solve. I will usually assign more than we can do that faster workers always have something to work on. And in the end, I will distribute the solutions. It'll be fun I promise!",
    },
    {
      q: "Will there be recordings?",
      a: "We will upload recordings to Vimeo and they will be password protected, so that only attendees can watch the videos.",
    },
    {
      q: "I'm nervous that I can't handle the difficulty of the class.",
      a: "Don't be. I'm a good teacher. If I can learn this, so can you.",
    },
  ],
};

const sessions: Session[] = [
  ci_I,
  ci_II,
  ci_III,
  applied,
  advanced_did,
  synth_and_clust,
  rdd,
  ml,
  ml_het_effects,
  shift_share,
  iv,
  design,
  empirical_bayes,
  // experimentation,
  frontiers_did
];

export default sessions;
