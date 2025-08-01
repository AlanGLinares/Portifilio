import React from "react";

const ProjectCard = ({ projects }) => {
  return (
    <>
      {projects.map((item) => (
        <div key={item.id} className="">
          <div className="md:grid grid-cols-2 ">
            <div
              className={`${
                item.id % 2 == 0 ? "order-3" : ""
              }  p-8 text-4xl m-auto md:my-6`}
            >
              <img src={item.image} alt="" />
            </div>
            <div className="md:mt-12 md:ml-2">
              <h1 className="font-opensans text-4xl font-bold pb-5  text-white md:ml-2 ">
                {item.title}
              </h1>
              <p className="font-opensans text-white md:ml-2">
                {item.descricao}
              </p>
              <div className="flex md:ml-2 gap-6 ">
                {item.tecnologias.map((tech, index) => (
                  <div key={index} className="mt-6">
                    <div className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]">
                      <img src={tech.icon} alt={tech.name} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
