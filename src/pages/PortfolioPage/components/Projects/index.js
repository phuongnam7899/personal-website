import { useState } from "react";
import { ProjectDetailDialog, ProjectItem, ProjectItem2 } from "./components";
import "./index.scss";

const workedProjects = [
  {
    name: "Bao Moi",
    category: "Tech",
    url: "https://play.google.com/store/apps/details?id=com.epi&hl=en_US",
    tags: ["Product Management Trainee"],
    description:
      "A mobile app that update and distribute news from other sources",
    features: [
      {
        name: "Online using: read/listen news, watch video",
        image:
          "https://lh3.googleusercontent.com/pw/AMWts8DeL10NnlBiUJRLEJeEwR4eWCUny_B-MhKXeBuLxVdKptqWOu34KJliss9P2oZ6gePGVi7hTsGJLuIhoaanYQ_j1DnR1MtjaWTZP4LRUzdFRyF6gzBGiOjhLrVbOTlgVhW78obxvoBMAbzZx3W6vWGz7Q=w1367-h812-s-no",
      },
      {
        name: "Offline using: download news by category, and read later while do not have internet connection",
        image:
          "https://lh3.googleusercontent.com/pw/AMWts8DObr747saX1ZEtz1I5igTIOE7v305i8iaYR0pB0Q9GZ8a1PsHk_6TGYfj-epngkeyWoBdURDcRdUnBBJiJsN52-unaUDdtk7hpGBupWNb8mLxH7XnPPcQqEox5NqKYlAYLkHoGK8KaOGiPeD_O8T1sKg=w1367-h815-s-no",
      },
    ],
    thumbnailImg:
      "https://play-lh.googleusercontent.com/P8D-vfnCmeaP3b3pbS_JmWlDkGGYaPg1xE4rOXMWPiTsL8fKlpsTxgVOkWj7w1ryx0pC",
  },
  {
    name: "Singapore Examination & Accessment Board",
    category: "Tech",
    url: "https://www.seab.gov.sg/",
    thumbnailImg:
      "https://lh3.googleusercontent.com/pw/AMWts8BIgd4U_4PpJRqJtr5Fot9W67QjZnEEXVMb_M_AEUz3uO-j4OUcbFwzAsIdkJHuJFq2SXluQjD_jm3d54Omr_qk5R4Gzc4K4kNKVpMsPc-seQn2HQEcNwpfkTTdqK6n8sNT69nrVR_EbZPCmAIPI8l6ag=w241-h227-s-no?authuser=0",
    tags: ["Project Team Lead", "Developer"],
    description:
      "Product for Singapore government to manage the examination with wide range of user roles: candidates, operation admin, coordinator,...",
    features: [
      {
        name: "Candidate Portal (For Singaporean candidate to sign up and register for exam, take attendance for the exam, see the exam result,...)",
        image:
          "https://lh3.googleusercontent.com/pw/AMWts8CYZdKXM_0Clr6TZB8OGBJG07D3pK6AiOSivuTTsODGUbwvybJE7kNodDFEJvdmTO28bXYUb0UQBFgGhBk4ui7K_ZVK8pHLhVqIxS8eVVcaCQf4drydOvAIkU26AegJQMSAyHV2OOJKXtnq8dFui7O2vg=w1885-h888-s-no",
      },
    ],
  },
  {
    name: "CRM Web App",
    category: "Tech",
    thumbnailImg:
      "https://lh3.googleusercontent.com/pw/AM-JKLWsjydOPdZUfsF1eM7NN1RIi8OOPiFEhqCbAwNyKMMdBV5voIf772N3alHP7Ha4eXDkbcxpBe3LcNzKrUxiIUM3dEL3lt31V7L6ftGcplGews_A_SgHdhgHGBVYKFtacGSH_afzXDj7oWAP9eEit2QwDw=w1895-h887-no?authuser=0",
    tags: ["Developer", "UI/UX Designer", "Customer Supporter", "PO"],
    description:
      "Manage the Sale Team's work of 2 different domains. It includes products, promotion programs, customers' contacts, leads processing, KPIs,...",
    features: [
      {
        name: "Dashboard",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLW-sXO4Me1F2pthPVngpXrB7WA92IIaPflM9rUVctuFjIGEmivLKC2AI41C0LALUCyFlpT77DGynshDD2YWVnn98ai64ntyTZ-OFDQA2e8NdSRbjbGwmVXRYLaF-MqmUVYpzix-les7wPgl_YsE5ONbUw=w1451-h535-no?authuser=0",
      },
      {
        name: "Leads Management",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLWlr1o9HENVG-HROjY2Efja25ERfz4VfgQdO8DoWBbsrsgNN-UrUJaLzgZx_2TwRJpfhvMOwfxYriEdfsvhbxxrlWtNIOiorUtZyj13PWqqRytISKcUIhtw1lRRcYe26rDq4TJbZA-sNVKya0HGLa47Iw=w1792-h887-no?authuser=0",
      },
      {
        name: "Products Management",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLUe8dT0uDIyTnDC_B6lPoSK2JQbv3u1j-qSLPGSgzUnsgx2nuwL1xuCdClRcOs8YycVcmgmcCSU_3qcZCPgKbaFBZeBGe0ju7vF66bm8VZn-Ny_lk1l-xJVv_H_VwqGZZ9Qf14KKqGcpVGmxP5pCcueGQ=w1793-h883-no?authuser=0",
      },
      {
        name: "Promotion Management",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLXdGqGB2OrizcFFH-mSZNIm31pItXsAYbOFZBarJmpMaoL6TUy-9c6mBu23SW4h8euix970J5upcIX2lLzcniRzohV2GFP4NFBD0ozZ9RT1y6x3LLZPangoSRrpQLPbNs6EAcH-sjadLbDylqNlsVOocw=w1785-h886-no?authuser=0",
      },
    ],
  },
  {
    name: "LMS Web App",
    category: "Tech",
    thumbnailImg:
      "https://lh3.googleusercontent.com/pw/AM-JKLVDZQrt-Ma3DPpB4r5wfjRP0Op4-mvee5s670DfPwesdVbYGhmLiHWuXeDEYjdipt5IcN7EwYDJYe69nCDCHdWmmazh9IdZ9wlTEDT7xvxopIfG1bEKkPZhfeEc5QTGE9Bgddr-T_Tqy-A6yERIE6PvCA=w1920-h890-no?authuser=0",
    tags: ["Developer", "UI/UX Designer", "Customer Supporter"],
    description:
      "Manage the Teaching Team's work. It includes courses, classes, office hours, teachers, students,...",
    features: [
      {
        name: "Dashboard",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLWvVCGzSoGNWrXiGL_aES3Vkshw00zlqiCc-npj_26vTWLBkKUm7r4Kk33rUcy3maawc4fZeFm6c8uHvJgiComiqvJAMm4qTi2ZJt9IQhj_YmOAsunlswRTK-gVNxjil__m8GM60Sq5RaxyJsHnhU-oCQ=w1783-h812-no?authuser=0",
      },
      {
        name: "Classes Management",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLULIGhFWshKZUeCgI3il3OG6X8xOn4r7y7G_a7y3prPfYvkoZu_jIBpWiYLvc2uI-paQSmQ_fcfdvdyOrP1AUsRehcD9ts6Ftjk-7lVQNNZ3QPqLzXNg7ikVrRbblfoSkGVGzrWZSKz7KDdlJ2qLtYbkQ=w1918-h800-no?authuser=0",
      },
      {
        name: "Office hour Management",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLUow5X1_Y9pMTUrMZrYjieNi6RwZSk1XETed9rLObjlzYPeolzPY6FQhgVg72YmEtNCRdg8VGDDDw2XlPY4cb7k14X6CjuCgS2sD3UiRqAIYHCe0C9pPrXBKmBWjMNqTJL3cXDB7zfnEeKiH0kQ03UkYg=w1891-h881-no?authuser=0",
      },
      {
        name: "Teachers Management",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLXNyb4ayzthLPt43SchOcuQ43xo6t4NnAHuMEGx13x9gMnpqBZ0MmUQUSehWBKsuLx0jwbHEYQ3TIPoTW5ntQMuAVMbIkkAFWw1hjKkdSx1IW7YlvhGbOVnb9GjypGtEPIxxBx5fYaSTuCGqOCKhjeU0Q=w1892-h888-no?authuser=0",
      },
      {
        name: "Students Management",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLU2n4RbFDnsm2_O-oWhjvqUqossCYTmXsXmvN4HUsSB-WHmvKNRmXPzUrpixWDQ90NgtVEEK9sLrNkoBq_E5-F5MhRqcLDgb2QqIki5utZy97AhXKo-U0BJOCRof0_-lntimTA2OalLRug_qwdjqVj7WQ=w1901-h881-no?authuser=0",
      },
      {
        name: "",
        image: "",
      },
    ],
  },
  {
    name: "Marketing Website & CMS Web App",
    category: "Tech",
    url: "https://mindx.edu.vn",
    sourceCode: "https://mindx.edu.vn",
    thumbnailImg:
      "https://lh3.googleusercontent.com/pw/AM-JKLX9b4WFC7ooBf1yFjG2-iw6Z01adbDEBPowoP1Lo7Ryg4KiBEqkoGcxuHQA8DWQXfuMHu66D9dgu77X-w1xYmrFumDo-5vQJusOV5IvMtFNMLYsJVsWuNWWEBwx7b8QEQe7ro2Cf1rqNwIo5yAa8WJgMA=w1895-h887-no?authuser=0",
    tags: ["Developer", "Customer Supporter", "UI/UX Designer", "PO"],
    description:
      "Advertise for the company and its products. It has a seperated web app to manage all the content in the Marketing website",
    features: [
      {
        name: "Home page",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLU9mJ_ETjUmDAwXzJH8NoUUzpkmU03FXB4ZFG2l9Hog9i6iX_ExaHMl2p8jILTMF71IEwc5hOiuST0jgrLRiCZOIH68IwsHVdPD_ryUO7hNkjngXcpN5Zers87EGgzl5t4_64ehz9pD5QB4P0QDN3lfrQ=w1892-h887-no?authuser=0",
      },
      {
        name: "Study program",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLVpDdyEJesDWt8L_rj06VnGAB7HjAZPQrlDDyOx97YesofY73NQtUDd0h77Bmwp7qQrsT1b2p66G5ed9IXahk_juzbDGei2NYgKNIe1p79FfzLqzgptsxkQkBCajcs35RhRV8Ok7DvsiorESlq5yDaj-w=w1379-h883-no?authuser=0",
      },
      {
        name: "Students' projects",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLUIfJ2RdJUeehHdvYvmCgWlDXZK3L7fWEXNngcw91Y0DgakSM0sLWmgLaQrxpFsMmAdhArl7AKcYsM5OojN1bjV8YH4Lnl_sTWPkFD7v8Ui4Pbj7sCuLy4X33KGxPkaepnvJco1BqAjkGZtWN9BJFtujA=w1350-h883-no?authuser=0",
      },
      {
        name: "Competition",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLV85tygsqat9HA_AItJqMvcj8rGsy-X2eCilD5Jh7qVSPYztGtIj7zrSK0XVuCVFCIgaZp_EYS9EdVwHHP8wI5bpl6H2-MpGxjUM7lGn5vgUmBOSJrOrG2rT3BhEZOV_vfqUeaHb-9558TWd6obLJvrHw=w1365-h882-no?authuser=0",
      },
      {
        name: "Blog",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLUazNIuxcVOTFytB487LeEgJCGwRmlcyGuTnkqO5V0t1BRHkjuj65vP11dLeCu_Je8giJdsvuQk4XdRbJ9quooigQ0H8PWaIi4Ncee8rhv1zFOWyvGvsJ5BXbqPZ8YAhXsP2_yhgN8Fwt-Y4172h0GLcg=w1378-h885-no?authuser=0",
      },
    ],
  },
];

const sideProjects = [
  {
    name: "Club's Website",
    category: "Tech",
    thumbnailImg:
      "https://lh3.googleusercontent.com/pw/AM-JKLVH-qeh3K9G4UqFrZ-tmC3i9Yw9U3Amj4EyOUHL3DGjgpE5nf9wcIjYzIMz5SHrsHq2TkGPUZnSMQln9sojtbw3I4mhMen50O91vTFQoe56KY_ap8ln1QX3IJ_uVRFtGI2bgZScDlmh_ChUD2z0f-x72w=w1891-h887-no?authuser=0",
    tags: ["PM", "PO", "UI/UX Designer", "Developer"],
    url: "https://hiec.vn",
    sourceCode: [
      "https://github.com/phuongnam7899/hiec-frontend",
      "https://github.com/phuongnam7899/hiec-backend",
    ],
    description:
      "Website for my club at university. It includes: Forum for registered users to make posts; News to show posts that admin made; Oppoturnity of scholarship, workshop or other events",
    features: [
      {
        name: "Home page",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLUnTW83y_eWZ-wlmCqN4OMKDaimLMXf1N1ePlKWc7T5-C-BVdVNWuXduEL6pI4UU19Z0bZsjrNPGHANqEP2fwSqz8M7IPGLqf2O65YmbgOQhrahWBWhpuYiBGbi5XxxKUoNWYAznHd_E9ifYQLEziQujw=w1902-h890-no?authuser=0",
      },
      {
        name: "Forum",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLWKEab_ugW5nKinhYPJn36nQYDKs63fU5cFQ2aKUu-DjCxlLb8qf3SxY0ECY70gizROPKKMVaSTAyjuIDRVCr0F5xQHruQJ_iy0Lj6lFbv1odh_wEQ9AN8fnlsLU0wdz0cZBMjkqq0Jt1RVheVa93SfSA=w1566-h888-no?authuser=0",
      },
      {
        name: "News",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLVDaeTkZUY_biXreCg2wSgxQSMRouiNsFyFGRiG1iEYkakXOc9wtyLuTI3PWbX0awxN_4Wkjv02ye9OksVw3xB2TrNgd82rcm0HRyCGa3BqdIO2X3_ranTR_Sf9IggPzlJM4430mNNTXPTMUSoYKrB6tA=w1631-h887-no?authuser=0",
      },
      {
        name: "User profile",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLVBj89m-vwuFqQcPh35BOgKYphEdWCHkwQxhyQMFsm4DxPXiH9q8V7FMvyI3Bk3MUweWOQY3BpbYgoxJEN65ZZanvc3dwUw0s7-EDcIaTbkr7LtGMN6fa8UCfLwVDto3ZzUxJQp4X9w2Cd1x0CEIkj4vw=w1565-h892-no?authuser=0",
      },
    ],
  },
  {
    name: "Hockillard Game",
    category: "Tech",

    thumbnailImg:
      "https://lh3.googleusercontent.com/pw/AM-JKLXeuVgNeigB79KvWix-_gi9GjCgeSCZ6N7WtQeuPAYsfWn9Hl3HHOd-S0VpwyMPAwOMuEBx9PhxkUy5N_csBUsU79ifLATtNlKUgzhFnGIg9u4GEw-1-YSMP5oD4jdnY2nnsb75o9O2eBpHWdAQm4MxzQ=w1122-h700-no?authuser=0",
    tags: ["PO", "Developer"],
    sourceCode: "https://github.com/phuongnam7899/hockeillard",
    description:
      "A PC game that combines the gameplay of hockey and billard. It need 2 players and using keyboard to control",
    features: [
      {
        name: "Start",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLUJwOMaP3YX8bx3hphKc7Y7wY1L8oSWjv7USzaQJG6E6TtUpzQg3vQhwLF8LmFjKw1JLdY2yoZdUjQZZV91tFZ15iXkqVTwhyI366FRZ4eGKgDuWQvS4H6qB163cmWK40Ke2GhUwtcpQLU7FS7bc6wQPg=w1125-h701-no?authuser=0",
      },
      {
        name: "In game",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLV3tuh9xwL0ZqO1hrlRdF6x6ErYmQKq1ftw2QkPHOiP1zKuOv-ZKpIqyK3vcV9MMPMoqX4kyOERPPS9C99LjYbR13Aw4EXRGn-Qy_xjagmN3K8LmGfLAOBTTmPk3ohlUaa98MmLwo3wASODcGNvA7-kew=w1186-h738-no?authuser=0",
      },
      {
        name: "Game over",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLWs2Nz236Db_2CV9c0-iJmxnl7wCmoceTokNPViPj_r5gKMVlKw0ybz44MHEZ7wGXuQIV-RjHhy3YXJbB-OoeAReZIhtMX_zlSk4XIP2FNjpRvAP6HI0UzG988VAADZ_1v7sAMwRU0hUhjA_B8LQUZ2UA=w1122-h700-no?authuser=0",
      },
    ],
  },
  {
    name: "SupremeMage Game",
    category: "Tech",

    thumbnailImg:
      "https://lh3.googleusercontent.com/pw/AM-JKLVzCd1y6FnVQ-HUvYEsv8VlhwSO-vvD4wMkUIutbRQ-EDo7fIfPPGzRVWLwK2LHRJiI5rg4b_KITn-5muNOjnonzLL0E6fsQ1NnDRdvH_XBvuGe4Hzy7Or-rTbuqIDhpdyNO2jUiNw5k6WZcN_AhvEoAw=w1616-h840-no?authuser=0",
    tags: ["PO", "Developer"],
    description:
      "A PC game in which player uses mouse to control a spirit to protect the Supreme Mage from enemies from the sky",
    sourceCode:
      "https://github.com/phuongnam7899/SupremeMage/tree/master/Code-Intensive---Rise-Up-Project",
    features: [
      {
        name: "Start/Playing/Gameover",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLVzCd1y6FnVQ-HUvYEsv8VlhwSO-vvD4wMkUIutbRQ-EDo7fIfPPGzRVWLwK2LHRJiI5rg4b_KITn-5muNOjnonzLL0E6fsQ1NnDRdvH_XBvuGe4Hzy7Or-rTbuqIDhpdyNO2jUiNw5k6WZcN_AhvEoAw=w1616-h840-no?authuser=0",
      },
    ],
  },
  {
    name: "French Test",
    category: "Tech",

    thumbnailImg:
      "https://lh3.googleusercontent.com/pw/AM-JKLULJruo-MTWm6CwcHU1zjS-5F6hYfq_NEOXpO2lG7QimL-tUfj6s-hoHFlSmSeFEBRlcZ9kWKxpUAcm6bU2jJkHjMFUoaXp6dWscqnRBka1r_W4o8kirHnXm-OzSHnOBzIsEWtjg9VvkD4N5tN9h_z3Vg=w1896-h863-no?authuser=0",
    tags: ["PO", "UI/UX Designer", "Developer"],
    url: "https://french-test.netlify.app/",
    sourceCode: "https://github.com/phuongnam7899/MultipleChoiceTest",
    description:
      "Website I made for my friend that needs to revise Frech multiple choices test for exam",
    features: [
      {
        name: "Select questions pack",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLVP3yQPLKQl4GG3hZIv2v-negmVsmVHvlGht_VrQI8GwuctbXBiCBojlbohqnaL5elvt-8IvzFKSh85O8OaMhu6PHJVJz5Dw4ONM8pvFdMtZGGs1dkizwj9SqYJpMvV_mpsA_GTgnqjTlPTVPQe4Z42jQ=w546-h253-no?authuser=0",
      },
      {
        name: "Do the multiple choice test",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLUuXYqHXUry9aOIzphmSrkBb3gylJXxRMXu9GnqLL-MfwebvQpW0QUjsrJgy3Sb4rVDvEP8jn23j35p2vD_lQlEb9T2Fm7n7RGhM2V1yv_PS_QlGCbdkY0vA8OJ5DsEKY4Kcr5vNA5gEYBiiH4qaJPGNw=w1002-h825-no?authuser=0",
      },
      {
        name: "Check the result",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLUH-7sFYpSwuTP0pDt0tZpsr8752uLQ82zCy_nxeZyI9Ij9q2deWOL5EEEsXmUwwHjPQ8FN4vF4JCEkjOtDi-PmHgXGzhzSOpiLvTioJWqynM63N4var7Ruj_8VphTz_rhJ0NYWTjGZaFsojS7dlzCh-A=w1777-h828-no?authuser=0",
      },
    ],
  },
  {
    name: "Canva Instagram Post Template",
    category: "Design",
    thumbnailImg:
      "https://lh3.googleusercontent.com/pw/AM-JKLVmANFCBDEc3YcrffP-M77j8DI4mKwGmYwekqeK_681lGvAwt3LvdSZ-GjRI31vUFTDeOOmD1yGX9z6R-vVikgs_i-CXiUFMyum_7rU7_4vOurBchv54sWCUU_3GvZF4K-LTQzbYgJaxw0KB8glAHeb_g=w1112-h893-no",
    tags: ["UI/UX Designer"],
    description:
      "A template that can be use in Instagram post that target to Gen Z audience",
    features: [
      {
        name: "Overview 1",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLVmANFCBDEc3YcrffP-M77j8DI4mKwGmYwekqeK_681lGvAwt3LvdSZ-GjRI31vUFTDeOOmD1yGX9z6R-vVikgs_i-CXiUFMyum_7rU7_4vOurBchv54sWCUU_3GvZF4K-LTQzbYgJaxw0KB8glAHeb_g=w1112-h893-no",
      },
      {
        name: "Overview 2",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLUfIAoHPk331h-flY16hvbUyskl3-MgrWJRaHCyIODfN_I9AsxN8EcenhAuM7tNdboM1xA2pTQvp8_WMhKLQXjzs_bYU8YlR-lojLnnnDzsteezP-SBwNG5UsuuLTFVrND_FDUpVVW2y9imKVPYy6IS3Q=w1112-h893-no",
      },
      {
        name: "Mobile Demo",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLVn2V1Q_udeWoP-zypMOPR9XGu2amv727ycOXbmjR5CK26NLU0K2xqUxd92lNmhRhMuoYMQss6fGHp1B0ClHQ2Zrg4qhg7eSUF4KyxDzYFcCO9Cq3HIYdwzHb1nbdNdKjhV9PVhS8hK5By0TQjJGMeiFg=w1112-h893-no",
      },
      {
        name: "How to use",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLUa3XpSveRZFkiQSX0NbraIYN7p2mc-EZ0h-FF6kP9M_stt_fJY1vR9bbh7ILQHBJbUjJ8ACnw0f7or3FmumuNeyqNyvQYefyd4cyR2eZYIV46CKWYHtJrJb0rs2jRQxxfw40bneJN7KEfTzDRWjQOPqQ=w1112-h893-no?authuser=0",
      },
    ],
  },
  {
    name: "FamilyNutri Mobile App",
    category: "Design",
    url: "https://www.figma.com/file/Ho6M3hvLKUSXl7qeTKEABQ/FamilyNutri",
    thumbnailImg:
      "https://lh3.googleusercontent.com/pw/AM-JKLWAmF0bzJHrpWzw6K6moqS1UE6Bw0fgViVtpNrcW32pR2oj-cexTLTQH-jqZ9ORmfC9UhEvTCkDm5HCVED53zBN2AbCKxKh6i44T1REoqOJlKExq2hcc9qaWkgh2NPwy2XUg9SBorFczie6wSTcnqRbug=w1587-h893-no?authuser=0",
    tags: ["UI/UX Designer"],
    description:
      "A design of an mobile app that help manage the nutrition and healthy habit of family",
    features: [
      {
        name: "Family Member Info (1)",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLWAmF0bzJHrpWzw6K6moqS1UE6Bw0fgViVtpNrcW32pR2oj-cexTLTQH-jqZ9ORmfC9UhEvTCkDm5HCVED53zBN2AbCKxKh6i44T1REoqOJlKExq2hcc9qaWkgh2NPwy2XUg9SBorFczie6wSTcnqRbug=w1587-h893-no?authuser=0",
      },
      {
        name: "Family Member Info (2) and Meal Suggestion",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLVygZWIlhb16Y5gwJCzp4IzvH5gh8wcIxsaPLQIZ9Rk2jalY0XMfeoKTeY_wQiLwJmNwdgALb-9CdPliG-vLtVyEm8w7jHBnuen3kDA9YXM8dr1afjiTymVhoqKqH9oa9LNIZRCw9_ZQgY0UhKfkOJNAA=w1587-h893-no?authuser=0",
      },
    ],
  },
  {
    name: "Tuoitre News Reconcept",
    category: "Design",
    url: "https://www.figma.com/file/uvkv3QRCxJyExNoIM2DFkE/Tuoi-Tre-News-(remake)?node-id=4%3A17",
    thumbnailImg:
      "https://lh3.googleusercontent.com/pw/AM-JKLUGjqRirLyUkR9A_Mvrpu1sJisCN4jQRoIbfswQZtfsV53dblfs_wUQirN6c7pdfclCcAsXbLaMOLrkfKW6fFeHIqaQMuIlEpZV2_yuqVfP18w3efNdkO8Ltoe-msHyAksWPoXE71JvfeAgfMFGAwHcHQ=w1480-h893-no?authuser=0",
    tags: ["UI/UX Designer"],
    description:
      "I remade the https://tuoitre.vn/ to be cleaner and more mordern",
    features: [
      {
        name: "Main posts",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLUGjqRirLyUkR9A_Mvrpu1sJisCN4jQRoIbfswQZtfsV53dblfs_wUQirN6c7pdfclCcAsXbLaMOLrkfKW6fFeHIqaQMuIlEpZV2_yuqVfP18w3efNdkO8Ltoe-msHyAksWPoXE71JvfeAgfMFGAwHcHQ=w1480-h893-no?authuser=0",
      },
      {
        name: "Categories' posts",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLXEx_rtPQ15UqkjfwLPPiLouVSio3YiQcVTA00MLpwoxJoo3HCaaEfau3HVxcviaVhA0MlSywcAzUAK23dInW_x6Q-SnM9m2gsq9XicVcv3Vhoz1XuIW7LhJEDh2uVld5hmfAg3qD2qOzDy-DaU82eV4Q=w1480-h893-no?authuser=0",
      },
      {
        name: "Post detail",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLURjhs81lWg9UEpD1cgb00E8MiP-3KU0TFyxr7VCINtnSllObhAiq2L41jcyFZQzjLCmCXQiSJ5pYCGTLg_zHZt9K97L1LV66tbn2QDA0QzfSfd5ncDaAT_YsxD8GWyE6lEr_e-RmQKWeA0DEm_G2P4hg=w1480-h893-no?authuser=0",
      },
      {
        name: "Login",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLVsZmGYO_xPg69-XOF2ACckwtjuM8EypqBviqym_dgyGVQ3fxi5j9KnvvP9Dj6K0C-pueBwSfbCbVb7C-ZXiJNahZjt5pC-XUbnUQFYiStqWsBaSAH2UGdI5k4seKgvlnUbN9TIRCRVFeXnK6cYaxRHFQ=w1487-h893-no?authuser=0",
      },
      {
        name: "Register",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLVf47bTJs0fliBtFHSHkZbCLQlyCMs4pJgEKqVh-Z3gw2fNWnHM8FRSxri8jI7IZF1f7zbPqjJTGqmLsEtccyPdcNTkHEg52Q9c6muhjsgCkUkwk-r7i-TDDQxN807K6VeAEt_UkVb3dP7_tLjjkg0jdA=w1487-h893-no?authuser=0",
      },
    ],
  },
  {
    name: "Mentor Finding Web App",
    category: "Tech",
    thumbnailImg:
      "https://lh3.googleusercontent.com/pw/AM-JKLV7gWoCEYGa7CzjtZ9nH3AFNgkfXdLaBieLZAEhfENYKRiXe8LVroALPmLMfjfsSxVJiBeZbW56etsmxBrP8R2_Bu8SG015b7-ynNIE3bCyK6vHMRgLzt-49N6yKq7e6TSIg13RyxXxSLTo9S7zTOyTXw=w1470-h893-no?authuser=0",
    tags: ["UI/UX Designer", "Developer"],
    description:
      "I remade the https://tuoitre.vn/ to be cleaner and more mordern",
    features: [
      {
        name: "Home Page",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLV7gWoCEYGa7CzjtZ9nH3AFNgkfXdLaBieLZAEhfENYKRiXe8LVroALPmLMfjfsSxVJiBeZbW56etsmxBrP8R2_Bu8SG015b7-ynNIE3bCyK6vHMRgLzt-49N6yKq7e6TSIg13RyxXxSLTo9S7zTOyTXw=w1470-h893-no?authuser=0",
      },
      {
        name: "Register",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLX3ffiFpU0gnBpC6UorECzBfzsBiqtEup0UD5BsTw0ggWU9m9gTzgjpKW2f-UvOhQF8rIcD0loRB9g5t9-xQJJ3XVKuXNBbvMJnZAZrPxZm0c5ZdEkZ13P6UPWisMXKhyxrkH8tfr3XIhO3odiDs6nkmw=w1470-h893-no?authuser=0",
      },
      {
        name: "Login",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLUzKn1E7iFynjX0md68E8KdH9GBDIm6EWT6EHA2CRa9nZEIZiEOs83jjcrBswTpkbOzDGxF1HYHi5qcP_bEJ7JGGkN7KUQa2c97X9vQNStWgG7CWv9aenW5ktVICVkqat-yv0-kOJfB2Afx129snnL86w=w1470-h893-no?authuser=0",
      },
      {
        name: "Mentor finding",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLUHyj-kGjP4cRcr5qEFybT3VpjFWSBqjKz2ZVldiWuZwmkqMmtWaaTJy8RwZz2zeUSuWaee3hiRj2QPANHSg4SPlSlZo5EpeUy5-v5b5YhFS5WsY7SYgH3RAbCfptZGDBWh4V68zMcW8gsGtp7auHHWFA=w1257-h893-no?authuser=0",
      },
      {
        name: "Mentor Info",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLWxrGiRTwmgj4eAwVeshehgiPX6KHYF4bOlwhq-QgucLq_Q4B0agzPnureKfTyTXGcvLR6mVBarFZl5KlTdx81gYT-Vjtn7JEU-vLcH6JusKO_ETQ3X7tWMMT51xXyd8F3wUJ0RPDhaUGdWG7wbBNEf3Q=w1470-h893-no?authuser=0",
      },
      {
        name: "Schedule with mentor",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLUNmYOFM9hFCwCZAZTyq0KhWrSvAS_lEcUuM-4P8qfME1yUyGl-kY4wPNxWOq5O7dF5VnDXzwkpwjJsZQbcVV3Q7RWuWHXrh0j-ke_5HcAO462GS6sBlXGpWf8vW9YUrqpEskqIs9-4oCygnHEYUoVwDg=w1470-h893-no?authuser=0",
      },
      {
        name: "Payment",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLWZD0B823OI1zLanTWPPeEYuSII3u7ggr6AkHVAhxKoUAl2Js4VffMQ2-3rJnf5W1GyBKXBiClNRE3Rabz-ADiqT1kgZpvBQ-EIjuKgmB6HEY0_zAyfANPLprQe0lXR90Ukn-X4hftXZDx24l1hv-QeJA=w1470-h893-no?authuser=0",
      },
      {
        name: "Schedule with mentor",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLUNmYOFM9hFCwCZAZTyq0KhWrSvAS_lEcUuM-4P8qfME1yUyGl-kY4wPNxWOq5O7dF5VnDXzwkpwjJsZQbcVV3Q7RWuWHXrh0j-ke_5HcAO462GS6sBlXGpWf8vW9YUrqpEskqIs9-4oCygnHEYUoVwDg=w1470-h893-no?authuser=0",
      },
      {
        name: "Schedule detail (For mentor)",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLVxv2dv5H8T2L8slB5YmuuJvMSBT2CnnGqNkAvrb1iChaZ4QQxPKjwdh5nT6r5w9YOrLHa73jM5tyldkZs2dVVdVJb6MCBqmPkDvH5uHi3aixTy2vEobLrqzNNAhGmcs_iNuhcoEApgiAPGQdrGPGE36Q=w1470-h893-no?authuser=0",
      },
      {
        name: "Cancel schedule",
        image:
          "https://lh3.googleusercontent.com/pw/AM-JKLVKO7spp2DVJ4to3G3FQ2nm77vnkZJlPwOsULWKjYwYonM51zbtgibWiCdJH3tw5ofctci0FyaXYmfCZFL_gr4Qj-6Z3y3hABE8V7iUycrtqWy5hfDlXvre72Vnrfp4V5C_AIZJVM-pdyF8S9n1uPeEpw=w1470-h893-no?authuser=0",
      },
    ],
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(undefined);

  return (
    <div className="projects-section" id="projects-section">
      <h2 className="section-title">Products I worked in</h2>
      <div className="projects-list-2">
        {[...workedProjects, ...sideProjects].map((project) => {
          return (
            <ProjectItem2
              project={project}
              setSelectedProject={setSelectedProject}
            />
          );
        })}
      </div>
      {/* <h2 className="section-title">Other side projects</h2> */}
      {/* <div className="projects-list-2">
        {sideProjects.map((project) => {
          return (
            <ProjectItem2
              project={project}
              setSelectedProject={setSelectedProject}
            />
          );
        })}
      </div> */}
      {selectedProject && (
        <ProjectDetailDialog
          project={selectedProject}
          onCloseDialog={() => {
            setSelectedProject(undefined);
          }}
        />
      )}
    </div>
  );
};
