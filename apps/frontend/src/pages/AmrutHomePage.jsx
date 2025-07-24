import React, { useState } from "react";
import urbanAmrut from "../assets/img/urban_amrut.png";
import amrutLogo from "../assets/img/amrut_logo.png";
import mohua from "../assets/img/mohua.png";
import isro from "../assets/img/isro.png";
import iirs from "../assets/img/iirs.png";
import tcpo from "../assets/img/tcpo.png";
import about from "../assets/img/about.jpg";
import department from "../assets/img/departments-1.png";
import department2 from "../assets/img/departments-2.png";
import { BiTransfer } from "react-icons/bi";
import { LuClipboardCheck } from "react-icons/lu";
import { LuPlug2 } from "react-icons/lu";
import { FaBarsStaggered } from "react-icons/fa6";
import Footer from "../components/Footer";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AmrutHomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTutorial, setSelectedTutorial] = useState("");
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Overview", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Download", href: "#downloads" },
    { label: "Quick Start", href: "#documentation" },
    // { label: "Primary Survey", href: "/survey", },
    { label: "Load Form", href: "/survey/published/6882569307bdb21bbfce214d" },
    { label: "FAQs", href: "https://wiki.iirs.gov.in/en/amrut/faq" },
    {
      label: "User Forum",
      href: "https://wiki.iirs.gov.in/en/amrut/user-forum",
    },
  ];

  const features = [
    {
      title: "Data Transfer for Mobile App",
      icon: <BiTransfer className="h-8 w-8" />,
      description:
        "Enables exporting of geospatial data to the Sankalan Mobile App.",
    },
    {
      title: "Layer Validation and Clipping",
      icon: <LuClipboardCheck className="h-8 w-8" />,
      description:
        "Includes features for validating grid layers and clipping data.",
    },
    {
      title: "Seamless Integration",
      icon: <LuPlug2 className="h-8 w-8" />,
      description: "Works natively within QGIS.",
    },
    {
      title: "Efficient Workflow",
      icon: <FaBarsStaggered className="h-8 w-8" />,
      description:
        "Ensures data integrity and consistency for AMRUT 2.0 workflows.",
    },
  ];

  const tabs = [
    {
      label: "SANKALAN 2.0- QGIS Plugin",
      content: (
        <>
          <h2 className="text-xl font-bold text-blue-900 mb-2">
            SANKALAN 2.0– QGIS Plugin
          </h2>
          <p className="text-gray-700 text-sm mb-4">
            The Sankalan 2.0 QGIS Plugin facilitates seamless data exchange
            between QGIS and the Sankalan 2.0 mobile application, enhancing
            GIS-based master planning.
          </p>
          <p className="text-gray-700 text-sm mb-4">
            It offers two core functions: Data-to-Mobile, which exports
            geospatial data from QGIS for field surveys, and Data-from-Mobile,
            which imports collected data back for validation and processing. The
            plugin streamlines GIS workflows, automates data validation, and
            ensures accurate, real-time geospatial data integration. By
            simplifying spatial dataset management, it supports urban planners
            and surveyors in making informed decisions, improving master plan
            formulation, and enhancing urban planning efficiency.
          </p>
          <a
            href="https://plugins.qgis.org/plugins/sankalan2/"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full"
          >
            Get Plugin &rarr;
          </a>
        </>
      ),
      image: department, // Replace with actual path or import
    },
    {
      label: "SANKALAN 2.0 Android App",
      content: (
        <>
          <h2 className="text-xl font-bold text-blue-900 mb-2">
            SANKALAN 2.0 Android App
          </h2>
          <p className="text-gray-700 text-sm mb-4">
            Sankalan 2.0 (mobile app) is a GIS-based mobile application
            developed under AMRUT 2.0 to streamline data collection, validation,
            and integration for urban planning. Jointly initiated by IIRS and
            TCPO under MoHUA, it enhances GIS-based master planning for small
            and medium towns.
          </p>
          <p className="text-gray-700 text-sm mb-4">
            Designed for planners and surveyors, it enables real-time field data
            collection, attribute mapping, and multimedia integration. The app
            follows a structured workflow, ensuring accurate dataset refinement,
            validation, and export for planning and decision-making. With a QGIS
            plugin supporting "Data-to-Mobile" and "Data-from-Mobile" processes,
            Sankalan 2.0 strengthens urban planning, disaster management, and
            infrastructure development through efficient geospatial data
            handling.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=gov.in.iirs.amrut"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full"
          >
            Get App &rarr;
          </a>
        </>
      ),
      image: department2, // Replace with actual path or import
    },
    {
      label: "Documentation",
      content: (
        <>
          <h2 className="text-xl font-bold text-blue-900 mb-2">
            Documentation
          </h2>
          <p className="text-gray-700 text-sm mb-4">
            The Atal Mission for Rejuvenation and Urban Transformation (AMRUT)
            is a flagship initiative by the Government of India to enhance urban
            infrastructure and governance. AMRUT 1.0 (2015-2020) focused on
            basic urban services like water supply, sewerage, and green spaces
            in 500 cities but lacked smart technology integration. AMRUT 2.0
            (2021-2026) expands coverage to 675 smaller cities, ensuring
            universal water supply, smart water management, and sustainability.
            A key sub-scheme focuses on GIS-based master plans, leveraging
            geospatial technology for digital mapping and urban planning,
            supporting India's vision for smart, sustainable cities through
            evidence-based decision-making and efficient infrastructure
            management.
          </p>
          <a
            // href={userManualPdf}
            href="https://wiki.iirs.gov.in/en/amrut"
            target="_blank"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full"
          >
            View Docs &rarr;
          </a>
        </>
      ),
      image: "",
    },
  ];

  const tutorials = [
    {
      id: "oitluYgDLPU",
      title: "Tutorial 1: Sankalan 2 QGIS Plugin Installation",
    },
    {
      id: "kKgWdZhiAwM",
      title:
        "Tutorial 2: Exporting GIS Data to Mobile App using an existing grid",
    },
    {
      id: "0dsA2lpqsVY",
      title: "Tutorial 3: Exporting GIS data to mobile app using a new grid",
    },
    {
      id: "K502biXFE6g",
      title: "Tutorial 4: Installation of Sankalan 2.0 mobile app",
    },
    {
      id: "7-d99FSxsSk",
      title: "Tutorial 5: Importing AMRUT files in Sankalan 2.0 Mobile App",
    },
    {
      id: "hBo6pzaHOck",
      title:
        "Tutorial 6: Vetting and editing attribute data of imported AMRUT file in Sankalan 2.0 mobile app",
    },
    {
      id: "_Y1Y8Ffj_k4",
      title:
        "Tutorial 7: Editing and adding point geometry in Sankalan 2.0 Mobile App",
    },
    {
      id: "K5qppFH6b-A",
      title:
        "Tutorial 8: Editing and adding line geometry in Sankalan 2.0 Mobile App",
    },
    {
      id: "zxpsnG4rFtI",
      title:
        "Tutorial 9: Editing and adding polygon geometry in Sankalan 2.0 Mobile App",
    },
    {
      id: "t2hEvgHY1L8",
      title:
        "Tutorial 10: Vetting and editing attribute data of a new feature in Sankalan 2.0 Mobile App",
    },
    {
      id: "2wyiAQ751Es",
      title: "Tutorial 11: Filtering feature in Sankalan 2.0 Mobile App",
    },
    {
      id: "ldFdDITUTPQ",
      title:
        "Tutorial 12: Exporting AMRUT files from Sankalan 2.0 Mobile App to QGIS plugin",
    },
    {
      id: "8BhzqKAfIYw",
      title:
        "Tutorial 13: Quality checking of vetted attributes in Sankalan 2.0 QGIS plugin",
    },
    {
      id: "BSDJRdthtvg",
      title:
        "Tutorial 14: Reconstruction of vetted attributes in Sankalan 2.0 QGIS plugin",
    },
    {
      id: "5sXJxrV9Nis",
      title: "Tutorial 15: How to Split a Geometry in the AMRUT Survey File",
    },
    {
      id: "1Ws5SJO6PBM",
      title: "Tutorial 16: How to Merge Geometry Features in the AMRUT File",
    },
    {
      id: "hvlZbtso1iQ",
      title:
        "Tutorial 17: Deleting and Retaining Survey Geometries in AMRUT File ",
    },
    {
      id: "ltTr-1Wkjes",
      title:
        "Tutorial 18: Applying Attribute Filters and Symbology to AMRUT Layers",
    },
    {
      id: "UkFNIvJn1yQ",
      title:
        "Tutorial 19: Exporting Partially Filled AMRUT Grid from Mobile App",
    },
    {
      id: "kcuq7zGZX0w",
      title:
        "Tutorial 20: Importing Re-Survey Files into Sankalan 2.0 Mobile Application",
    },
    {
      id: "SWqsbWoETJc",
      title:
        "Tutorial 21: Importing and Editing Primary Survey Data in the Mobile Application",
    },
    {
      id: "DS8OpAPFr9Q",
      title:
        "Tutorial 22: Export Primary Survey File from Sankalan Mobile Application",
    },
    {
      id: "HkRqGHXSeLQ",
      title:
        "Tutorial 23: Getting Started: Sign Up and Log in to the Form Builder Portal",
    },
    {
      id: "CNeXb94owHY",
      title:
        "Tutorial 24: Creating a New Primary Survey in Sankalan Form Builder",
    },
    {
      id: "qQ5IGJtAtL4",
      title: "Tutorial 25: Creation of Survey from Saved Template",
    },
    {
      id: "9i8T01SlINI",
      title: "Tutorial 26: Primary Survey Export in JSON file",
    },
  ];
  return (
    <>
      {/* <div>AmrutHomePage</div> */}

      <div className="bg-white text-gray-800">
        {/* Header Section */}

        <header className="sticky top-0 bg-[#c0f0fd] shadow z-50">
          <div className="w-full py-2">
            <div className="container mx-auto flex items-center justify-between px-4">
              <div className="flex items-center space-x-2">
                <img src={amrutLogo} alt="amrut logo" className="h-10 w-auto" />
                <h1 className="text-2xl font-bold text-[#2c4964]">
                  SANKALAN 2.0
                </h1>
              </div>

              {/* Nav Links - Desktop */}
              <nav className={`hidden md:flex space-x-4 items-center `}>
                {navLinks.map((link, index) =>
                  link.href.startsWith("#") ? (
                    <a
                      key={index}
                      href={link.href}
                      className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                      {link.label}
                    </a>
                  ) : link?.label === "FAQs" || link?.label === "User Forum" ? (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                      {link.label}
                    </a>
                  ) : link?.label === "Primary Survey" ? (
                    <span>
                      <a
                        key={index}
                        onClick={() => navigate(link.href)}
                        className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
                      >
                        {link.label}
                        <sup className="text-[10px] text-yellow-600 font-semibold bg-yellow-100 px-1 py-0.5 rounded">
                          BETA
                        </sup>
                      </a>
                    </span>
                  ) : (
                    <a
                      key={index}
                      onClick={() => navigate(link.href)}
                      className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </nav>

              {/* Hamburger Toggle Button - Mobile */}
              <button
                className="md:hidden text-2xl text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {!mobileMenuOpen ? <RxHamburgerMenu /> : <IoCloseOutline />}
              </button>
            </div>

            {/* Mobile Nav Links */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-2 px-4 space-y-2">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-700 hover:text-blue-600 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                  // <a
                  //   key={index}
                  //   // Conditionally add the `href` attribute only for links that are not `/` or `/survey`
                  //   href={link.href.startsWith("/") && !["/", "/survey"].includes(link.href) ? link.href : undefined}
                  //   href={link.href.startsWith("/") ? "" : link.href}
                  //   target={link.href.startsWith("http") ? "_blank" : "_self"}
                  //   className="block text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
                  //   onClick={() => {
                  //     if (["/", "/survey"].includes(link.href)) {
                  //       // e.preventDefault(); // Prevent the default action (if any)
                  //       navigate(link.href);
                  //     }
                  //     // else if (link.label === "Primary Survey") {
                  //     //   navigate(link.href);
                  //     // }
                  //     // Close mobile menu on link click
                  //     setMobileMenuOpen(false)
                  //   }
                  //   }
                  // >
                  //   {link.label}
                  //   {link.label === "Primary Survey" && (<sup className="text-[10px] text-yellow-600 font-semibold bg-yellow-100 px-1 py-0.5 rounded">BETA</sup>)}
                  // </a>
                ))}
              </div>
            )}
          </div>
        </header>
        <header>
          <div className="bg-white py-4 border-b border-gray-200">
            <div className="container mx-auto ">
              <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0">
                <div className="w-full md:w-[30%] flex justify-center md:justify-start">
                  <a href="https://mohua.gov.in/index.php">
                    <img
                      src={mohua}
                      alt="MoHUA Logo"
                      className="h-14 object-contain"
                    />
                  </a>
                </div>

                <div className="w-full md:w-[40%] text-center">
                  <h1 className="text-lg md:text-2xl font-bold mb-1 text-[#2c4964]">
                    AMRUT SANKALAN 2.0
                  </h1>
                  <p className="text-sm md:text-base text-gray-700 mb-2">
                    Atal Mission for Rejuvenation and Urban Transformation
                  </p>
                  <div className="flex justify-center">
                    <img
                      src={amrutLogo}
                      alt="AMRUT Logo"
                      className="h-12 object-contain"
                    />
                  </div>
                </div>

                <div className="w-full md:w-[30%] flex justify-center md:justify-end space-x-3">
                  <a href="https://isro.gov.in">
                    <img
                      src={isro}
                      alt="ISRO Logo"
                      className="h-12 object-contain"
                    />
                  </a>
                  <a href="https://iirs.gov.in">
                    <img
                      src={iirs}
                      alt="IIRS Logo"
                      className="h-12 object-contain"
                    />
                  </a>
                  <a href="https://mohua.gov.in/index.php">
                    <img
                      src={tcpo}
                      alt="TCPO Logo"
                      className="h-12 object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section
          id="hero"
          className="bg-gray-50 text-center min-h-[900] max-h-[1200px] overflow-hidden"
        >
          <div className="container mx-auto relative w-full flex justify-center">
            <img
              src={urbanAmrut}
              alt="Urban"
              className="mx-auto w-full min-h-[80vh] md:min-h-[50vh] object-cover"
            />
            <div className=" absolute top-[25%] md:top-[30%] lg:top-[45%] max-w-[80%] items-center justify-center bg-black bg-opacity-70 text-white p-3">
              <h2 className="text-4xl font-bold">
                WELCOME TO AMRUT SANKALAN 2.0
              </h2>
              <p className="mt-4 text-xl text-white">
                The Atal Mission for Rejuvenation and Urban Transformation
                (AMRUT) is a flagship initiative by the Government of India to
                enhance urban infrastructure and governance.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="about" className="py-12 ">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <img src={about} alt="About" className="rounded-lg" />
            <div>
              <h2 className="text-4xl font-bold mb-4 text-[#2c4964]">
                Overview
              </h2>
              <div className="relative mt-1 mb-4">
                <div className="w-36 mx-auto h-0.5 bg-gray-300 "></div>
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-1 w-12 bg-blue-600"></div>
              </div>
              <p className="text-gray-700 text-justify">
                The Atal Mission for Rejuvenation and Urban Transformation
                (AMRUT) is a flagship initiative by the Government of India to
                enhance urban infrastructure and governance. AMRUT 1.0
                (2015-2020) focused on basic urban services like water supply,
                sewerage, and green spaces in 500 cities but lacked smart
                technology integration. AMRUT 2.0 (2021-2026) expands coverage
                to 675 smaller cities, ensuring universal water supply, smart
                water management, and sustainability. A key sub-scheme focuses
                on GIS-based master plans, leveraging geospatial technology for
                digital mapping and urban planning, supporting India's vision
                for smart, sustainable cities through evidence-based
                decision-making and efficient infrastructure management.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4 text-[#2c4964]">Features</h2>
            <div className="relative mt-1 mb-4">
              <div className="w-32 mx-auto h-0.5 bg-gray-300 "></div>
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-1 w-12 bg-blue-600"></div>
            </div>
            <p className="text-gray-700 mb-10">
              SANKALAN 2.0 contains various new key features
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white min-h-80 h-5 p-6 rounded-lg shadow-md text-center transition-all duration-300 border  hover:bg-blue-600 hover:text-white"
                >
                  <div>
                    {/* Icon block with background layers */}
                    <div className="mt-14 mb-4 flex justify-center">
                      <div className="relative w-12 h-12">
                        {/* Back shadow layer */}
                        <div className="absolute left-1 top-1 w-12 h-12 rounded-md bg-blue-200"></div>
                        {/* Front icon layer */}
                        <div className="relative w-12 h-12 rounded-md flex items-center justify-center transition-all duration-300 bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600">
                          {feature.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-xl text-[#2c4964] group-hover:text-white transition-all duration-300 mb-2">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm  transition-all duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="downloads" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4 text-[#2c4964]">Download</h2>
            <div className="relative mt-1 mb-4">
              <div className="w-32 mx-auto h-0.5 bg-gray-300 "></div>
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-1 w-12 bg-blue-600"></div>
            </div>
            <p className="text-gray-700 mb-10">
              Integrate the QGIS Plugin and download the App from following
              links
            </p>
            {/* Tab layout */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Sidebar tabs */}
              <div className="md:w-1/4 space-y-3 border-r md:pr-6">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`block text-left w-full font-medium transition ${
                      activeTab === index
                        ? "text-blue-600 border-r-2 border-blue-600 "
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Main content */}
              <div className="md:w-3/4 flex md:flex-row gap-6 flex-col-reverse">
                <div className="md:w-2/3 text-left">
                  {tabs[activeTab].content}
                </div>
                {tabs[activeTab].image && (
                  <div className="md:w-1/3 flex justify-center items-start">
                    <img
                      src={tabs[activeTab].image}
                      alt={tabs[activeTab].label}
                      className="max-w-full h-auto border rounded-md shadow-sm"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section id="documentation" className="pt-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4 text-[#2c4964]">
              Quick Start
            </h2>
            <div className="relative mt-1 mb-16">
              <div className="w-32 mx-auto h-0.5 bg-gray-300 "></div>
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-1 w-12 bg-blue-600"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                {/* <iframe
                  className="w-full h-64 rounded"
                  src="https://www.youtube.com/embed/oitluYgDLPU"
                  title="Quick Start"
                  allowFullScreen
                ></iframe> */}
                {selectedTutorial ? (
                  <iframe
                    className="w-full h-[315px] rounded"
                    src={`https://www.youtube.com/embed/${selectedTutorial}`}
                    title="Quick Start"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <iframe
                    className="w-full h-[315px] rounded"
                    src="https://www.youtube.com/embed/videoseries?si=iyu_H9REgnRKQUGS&amp;list=PLd2GNPokZWANZvWd9nPHgcJ-xylpIhfKF"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                )}
              </div>
              <div className="text-center md:text-left">
                <div className="bg-white border rounded-lg  overflow-y-auto max-h-[315px]">
                  {tutorials.map((item, index) => (
                    <div
                      key={index}
                      className={`px-4 py-2 text-sm text-left border-b hover:bg-gray-100 cursor-pointer ${
                        selectedTutorial === item.id
                          ? "bg-blue-50 text-blue-600 font-semibold"
                          : "text-gray-700"
                      }`}
                      onClick={() => setSelectedTutorial(item.id)}
                    >
                      <span className="font-bold">
                        {item?.title.split(":")[0]}:
                      </span>
                      <span className="ml-1">{item?.title.split(":")[1]}</span>
                    </div>
                  ))}
                </div>
                {/* You can dynamically load video list here */}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      {/* <footer className="py-6 text-center text-gray-600 border-t bg-[#c0f0fd]">
          <p>
            © 2025 <strong>SANKALAN 2.0</strong>. All Rights Reserved.
          </p>
          <p>
            Developed & Maintained by{" "}
            <a href="https://iirs.gov.in" className="text-blue-600">
              IIRS, ISRO
            </a>
          </p>
          <p>
            <a href="/privacy" className="text-blue-600">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="text-blue-600">
              Terms & Conditions
            </a>
          </p>
        </footer> */}
      <Footer />
    </>
  );
};

export default AmrutHomePage;
