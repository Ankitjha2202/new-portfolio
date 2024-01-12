import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5 py-20" id="projects">
      
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Recent Works
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-10 px-10">
      <div className="flex flex-1 justify-center">
      <div className="w-full md:max-w-md">
          <ProjectCard
            src="/movies.jpg"
            title="WatchCraft"
            description="Movie app built using React, allowing users to browse their favorite movies and receive recommendations based on their searches. Users can also watch trailers and learn about the movie's genre and background."
            githubLink="https://github.com/Ankitjha2202/MOVIES-APP"
          />
        </div>
        </div>
        <div className="flex flex-1 justify-center">
      <div className="w-full md:max-w-md">
          <ProjectCard
            src="/wind.jpg"
            title="Wind Power Prediction"
            description="The aim of this study is to improve wind energy predictions using the Stacking Ensemble Machine Learning Model, there has been significant interest in renewable energy predictions using machine learning"
            githubLink="https://github.com/Ankitjha2202/Wind-power-prediction"
         />
        </div>
        </div>
        <div className="flex flex-1 justify-center">
      <div className="w-full md:max-w-md">
          <ProjectCard
            src="/sorting.jpg"
            title="Sorting Visualizer"
            description="A Simple Sorting Visualizer which visualises sorting algorithms like Bubble sort, Heap Sort, Insertion Sort, Quick Sort, Merge Sort using HTML, CSS and JavaScript"
            githubLink="https://github.com/Ankitjha2202/Sorting-Visualizer"
          />
        </div>
        </div>
      </div>
    </div>
  );
};



export default Projects;
