import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const landing = () => {
  return (
    <main className="flex flex-col gap-10  sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm-text-6xl lg:text-8xl trackying-tighter py-4">
          Find your dream jobs{" "}
          <span className="flex items-center gap-2 sm:gap-6">
            and get
            <img src="/logo.png" alt="logo" className="h-14 sm:h-24 lg:h-32" />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          explore thousand of jobs and get hired by top companies
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to="/job">
          <Button className="" variant="blue" size="lx">Find a job</Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" size="lx">post a job</Button>
        </Link>
      </div>
      <section></section>
    </main>
  );
};

export default landing;
