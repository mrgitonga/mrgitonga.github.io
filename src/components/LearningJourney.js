import React from 'react';
import { ExternalLink, BookOpen, FileText } from 'lucide-react';
import './LearningJourney.css';

const learningData = [
    {
        week: 1,
        title: "Web Scraping",
        description: "Introduced the data lifecycle (ETL) by scraping NHL team stats using Python, requests, BeautifulSoup, and pandas from a paginated website.",
        topics: ["Web Scraping", "Requests", "BeautifulSoup", "Pandas", "ETL"],
        projectUrl: "https://colab.research.google.com/drive/1dmpzBEqtkMHgILyPJkp15eU1w4TPwxbP?usp=sharing", // <-- CORRECTED LINK
        reportUrl: "https://drive.google.com/file/d/1Hlmk7mXoeENlpIavuqwEBGrwEKiA_su8/view?usp=sharing"
    },
    {
        week: 2,
        title: "Netflix Data Wrangling",
        description: "Focused on data wrangling using the Netflix Titles dataset. Involved cleaning, structuring, and enriching raw data to prepare it for analysis.",
        topics: ["Data Wrangling", "Pandas", "Data Cleaning", "Feature Extraction"],
        projectUrl: "https://colab.research.google.com/drive/1sQBbfbIWjt4NoMOkbBvKD2YnV8EfSXBG?usp=sharing",
        reportUrl: "https://drive.google.com/file/d/1g5uq3nPc2yuKACQ3AmZQNZESyqx5IfTQ/view?usp=sharing"
    },
    {
        week: 3,
        title: "Titanic Exploratory Data Analysis",
        description: "Performed Exploratory Data Analysis (EDA) on the Titanic dataset to uncover patterns, handle missing values, and visualize survival rate factors.",
        topics: ["EDA", "Seaborn", "Matplotlib", "Data Visualization"],
        projectUrl: "https://www.kaggle.com/code/andygnyaga/assignment-3-titanic-exploratory-data-analysis",
        reportUrl: "https://drive.google.com/file/d/1pLL6RPt8xt1jUWddbCc93fuwPgJLTUQO/view?usp=sharing"
    },
    {
        week: 4,
        title: "Business Intelligence with Power BI",
        description: "Developed a Power BI dashboard for 'AtliQ Grands' hotel chain. Involved data transformation, DAX measures, and creating interactive visuals.",
        topics: ["Power BI", "Business Intelligence", "DAX", "Data Modeling"],
        projectUrl: "https://app.powerbi.com/links/H-TSabiRIc?ctid=16d83ee6-254a-469d-a6cc-54e2ca2313e7&pbi_source=linkShare",
        reportUrl: "https://drive.google.com/file/d/1NORrmyCSfV1aiduqMwri5ghg8fa3GjmH/view?usp=sharing"
    },
    {
        week: 5,
        title: "Data Visualization with Tableau",
        description: "Built an interactive HR dashboard using Tableau to analyze workforce trends and demographics, involving calculated fields and various chart types.",
        topics: ["Tableau", "HR Analytics", "Dashboarding"],
        projectUrl: "https://public.tableau.com/views/HRDashboard_17502613746990/HRSummary?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        reportUrl: "https://drive.google.com/file/d/15N6siC820vph3Xf6tvXnGd6sEZFswmc4/view?usp=sharing"
    },
    {
        week: 7,
        title: "Regression Models",
        description: "Built and evaluated simple and multiple linear regression models to predict house prices, focusing on feature analysis and model performance.",
        topics: ["Linear Regression", "Scikit-learn", "Model Evaluation"],
        projectUrl: "https://www.kaggle.com/code/andygnyaga/cyber-shujaa-week-7-regression-models",
        reportUrl: "https://drive.google.com/file/d/1EU5fyKIaSYpy0agVTYY7XHWR0nJFXO6O/view?usp=sharing"
    },
    {
        week: 8,
        title: "Classification Models",
        description: "Built and compared six classification models (e.g., Logistic Regression, Random Forest, SVM) to predict wine categories from the Scikit-learn Wine dataset.",
        topics: ["Classification", "Random Forest", "SVM", "Logistic Regression"],
        projectUrl: "https://colab.research.google.com/drive/11vjCFH_slzPxPOh-Fr2HgP3hQLlOC2Jl?usp=sharing", // <-- CORRECTED LINK
        reportUrl: "https://drive.google.com/file/d/1OSDMFyNv_J2icYnQ5prM9yKrmSo15q3o/view?usp=sharing"
    },
    {
        week: 9,
        title: "MLOps",
        description: "Implemented a complete MLOps workflow to predict California house prices using a KNN regressor, focusing on pipelines and hyperparameter tuning.",
        topics: ["MLOps", "Pipelines", "GridSearchCV", "KNN Regressor"],
        projectUrl: "https://colab.research.google.com/drive/1ZO139p2WGtGGaXpE83OT9NRm85HZDuIh?usp=sharing", // <-- CORRECTED LINK
        reportUrl: "https://drive.google.com/file/d/1fqsG6FpQwXpzOMGTTb8viUlFfhPl8lC6/view?usp=sharing"
    },
    {
        week: 10,
        title: "Deep Learning",
        description: "Built, trained, and evaluated an Artificial Neural Network (ANN) using TensorFlow and Keras to classify handwritten digits from the MNIST dataset.",
        topics: ["Deep Learning", "TensorFlow", "Keras", "ANN"],
        projectUrl: "https://colab.research.google.com/drive/1Qx-1mCwGHEXk5yZOiPdZ4ifKSkQiWEHj?usp=sharing",
        reportUrl: "https://drive.google.com/file/d/1iqe8rAsxTakvPgoUSKsISlgQcTaCCgCh/view?usp=sharing"
    },
    {
        week: 11,
        title: "NLP with Transformers",
        description: "Used a pre-trained BERT model from Hugging Face to determine the semantic similarity between sentence pairs using contextual embeddings.",
        topics: ["NLP", "Transformers", "BERT", "Hugging Face"],
        projectUrl: "https://colab.research.google.com/drive/1W1H_T7EC7P1joZ4KdIKlVeeqD7trB2-5?usp=sharing", // <-- CORRECTED LINK
        reportUrl: "https://drive.google.com/file/d/1VEADj2EsCb6KqgUUCIX_LFAbiv-ebM9m/view?usp=sharing"
    },
    {
        week: 12,
        title: "Generative AI and RAG",
        description: "Built a Retrieval-Augmented Generation (RAG) pipeline from scratch using LangChain and a FLAN-T5 model to answer questions about a specific document.",
        topics: ["Generative AI", "RAG", "LangChain", "LLM"],
        projectUrl: "https://colab.research.google.com/drive/1kHVcvOq4_VXaM4KJTtGP4DFfKiuCMcaT?usp=sharing",
        reportUrl: "https://drive.google.com/file/d/1dBEYjJtw6PNrepq0qRWy4eRPhO4Jp7wB/view?usp=sharing"
    }
];


const WeekCard = ({ week }) => {
    return (
        <div className="week-card">
            <div className="week-card-header">
                <span className="week-number">Week {week.week}</span>
                <h3 className="week-title">{week.title}</h3>
            </div>
            <p className="week-description">{week.description}</p>
            <div className="week-topics">
                {week.topics.map((topic, index) => (
                    <span key={index} className="topic-badge">{topic}</span>
                ))}
            </div>
            <div className="week-links">
                {week.projectUrl && (
                    <a href={week.projectUrl} target="_blank" rel="noopener noreferrer" className="week-link">
                        <BookOpen size={16} />
                        <span>View Project</span>
                        <ExternalLink size={14} className="external-link-icon" />
                    </a>
                )}
                {week.reportUrl && (
                    <a href={week.reportUrl} target="_blank" rel="noopener noreferrer" className="week-link">
                        <FileText size={16} />
                        <span>View Report</span>
                        <ExternalLink size={14} className="external-link-icon" />
                    </a>
                )}
            </div>
        </div>
    );
};


const LearningJourney = () => {
    return (
        <section className="journey-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">12-Week Learning Journey</h2>
                    <p className="section-subtitle">
                        My complete project portfolio from the Cyber Shujaa Data & AI track.
                    </p>
                </div>
                <div className="journey-grid">
                    {learningData.map((week) => (
                        <WeekCard key={week.week} week={week} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningJourney;