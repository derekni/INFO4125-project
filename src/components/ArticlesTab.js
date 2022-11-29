import React from "react";
import "../css/tabcontent.css";
import ExternalLink from "./ExternalLink";


const ArticlesTab = ({ currTab }) => {
  if (currTab === 2) {
    return (
      <div className="TileContent">
        <p className="Desc"> Interested in learning more about food insecurity issues on Cornell's campus and in Ithaca overall? Check out the <b>articles</b> that we have compiled below to delve deeper into the issue.</p>

        <div className="ResourceBox">
          <h3 className="ArticleTitle">
            Food Insecurity in Ithaca and Tompkins County
            <a href="https://www.anabelsgrocery.org/" > <ExternalLink /></a>
          </h3>
          <p className="ArticlesAuthor"> By: Calissa Brown  </p>
          <img src="article1.png" alt="aldi" />
          <p className="ArticlesDesc"> Ithaca is a city filled with bustling restaurants and the surrounding region is a landscape of farms and orchards. The food and drink industry is one of the leading tourist attractions in the Finger Lakes region. But not everyone has access to this high-quality food, and there are many members of our community who struggle to find affordable, nutritious food....</p>
        </div>

        <div className="ResourceBox">
          <h3 className="ArticleTitle">
            We Need to Talk About Food Injustice at Cornell            <a href="https://www.anabelsgrocery.org/" > <ExternalLink /></a>
          </h3>
          <p className="ArticlesAuthor"> By: Anabel’s Grocery </p>
          <img src="article2.png" alt="aldi" />
          <p className="ArticlesDesc"> In recent years, the term food desert has grown in popularity as a means to understand the high prevalence of obesity and malnutrition-related illness in poor areas of the US. Faced with an overwhelmingly complex issue, food deserts provided distant political stakeholders with a simple explanation of hunger - poor people lacked easy access to healthy food options...</p>
        </div>

        <div className="ResourceBox">
          <h3 className="ArticleTitle">
            Food security is an essential function of Cornell University
            <a href="https://www.anabelsgrocery.org/" > <ExternalLink /></a>
          </h3>
          <p className="ArticlesAuthor"> By: Anabel’s Grocery </p>
          <img src="article3.png" alt="aldi" />
          <p className="ArticlesDesc"> When University leadership developed Cornell’s reopening plan, they committed to the safety and health of the student body and Cornell employees. Largely, as it relates to COVID-19, we applaud their commitment. Unfortunately, Cornell’s dedicated attention to pandemic-related safety ignores many structural issues on campus that threaten the health and wellbeing...</p>
        </div>

        <div className="ResourceBox">
          <h3 className="ArticleTitle">
            Cornell Hunger Relief Places Posters on Arts Quad, Aiming to Raise Food Insecurity Awareness in Ithaca
            <a href="https://www.anabelsgrocery.org/" > <ExternalLink /></a>
          </h3>
          <p className="ArticlesAuthor"> By: Laura Gries </p>
          <img src="article4.png" alt="aldi" />
          <p className="ArticlesDesc"> In mid-March, the Arts Quad got a new spring decoration: numerous lawn signs displaying messages such as, “An average meal in Tompkins County is 17% more expensive than the national average” and “13.3% of children in Tompkins County are food insecure.” Though the news might be new to students, the signs are part of ongoing efforts to highlight the issue of food insecurity in Ithaca...</p>
        </div>

        <div className="ResourceBox">
          <h3 className="ArticleTitle">
            Organizations Work to Minimize Food Insecurity in Tompkins County
            <a href="https://www.anabelsgrocery.org/" > <ExternalLink /></a>
          </h3>
          <p className="ArticlesAuthor"> By: Tamara Kamis & Omsalama Ayoub </p>
          <img src="article5.png" alt="aldi" />
          <p className="ArticlesDesc"> As the pandemic exacerbates food insecurity, Tompkins County residents have ramped up their efforts to provide each other with groceries and meals.
            At over 50 locations in Tompkins County, people can find mutual aid food sharing cabinets –– small, volunteer-run food pantries where people can donate and take food, no questions asked...</p>
        </div>

        <div className="ResourceBox">
          <h3 className="ArticleTitle">
            Cornell hosts state youth summit to explore global food insecurity
            <a href="https://www.anabelsgrocery.org/" > <ExternalLink /></a>
          </h3>
          <p className="ArticlesAuthor"> By: WHCU Radio </p>
          <img src="article6.png" alt="aldi" />
          <p className="ArticlesDesc"> ITHACA — High schoolers from across the state stormed the Cornell University campus this past weekend to learn more about the future of global food security.
            This year’s New York Youth Institute was the largest yet. According to the summit’s website 77 students from across the state headed to Ithaca for the annual event. To attend, high school students had to research a  county ...</p>
        </div>
      </div >
    );
  }

};

export default ArticlesTab;
