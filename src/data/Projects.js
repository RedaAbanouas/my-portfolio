const email_texts = [
    "Creation of an Excel database for SPAM email prediction",
    "Implementation of NLP techniques for text processing in Python",
    "Design of a Web interface and integration of the ML model"
  ];
  
const marketplace_texts = [
    "Back-end development using Jakarta EE",
    "Creation of a MySQL database for managing clients and products",
    "User interface development using HTML, CSS, JavaScript, and Bootstrap"
  ];
  
const hotels_texts = [
    "Creation of the MySQL database",
    "Data transformation based on the ETL process using Talend",
    "Creation of interactive dashboards in Power BI for data visualization and enabling effective decision-making"
  ];
  
const email_tech = ["Python", "HTML", "CSS", "JavaScript", "NLP", "Flask", "Scikit-learn"];
const marketplace_tech = ["Java", "HTML", "CSS", "JavaScript", "JEE", "Bootstrap", "MySQL"];
const hotels_tech = ["MySQL", "Talend", "Power BI", "ETL"];
  
export const projects = [
    { id: 1, title: "AI Spam Email Detection System", text: email_texts, tech: email_tech, src: "/projects_img/email_img.jpg" },
    { id: 2, title: "Marketplace Project - Jakarta EE", text: marketplace_texts, tech: marketplace_tech, src: "/projects_img/marketplace_img.jpg" },
    { id: 3, title: "Hotel and Tourism Management - Power BI/Talend", text: hotels_texts, tech: hotels_tech, src: "/projects_img/hotel_img.jpg" }
  ];
  